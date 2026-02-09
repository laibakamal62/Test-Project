import { getProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import CategoryFilter from '@/components/CategoryFilter';
import Hero from '@/components/Hero';

export const dynamic = 'force-dynamic';

interface HomeProps {
  searchParams: Promise<{
    skip?: string;
    limit?: string;
    category?: string;
    search?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { skip = '0', limit = '10', category, search } = await searchParams;

  const productData = getProducts({
    limit: parseInt(limit),
    skip: parseInt(skip),
    category: category,
    search: search,
  });

  const categoryData = getCategories();

  // Parallel fetching
  const [products, categories] = await Promise.all([productData, categoryData]);

  // If calculating delay based on index for animation
  const isFiltered = !!search || !!category || parseInt(skip) > 0;

  return (
    <div className="container px-4 md:px-6 py-6 mx-auto">
      {!isFiltered && <Hero />}

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center bg-card border border-border/50 p-4 rounded-2xl shadow-sm sticky top-20 z-40 backdrop-blur-xl bg-card/80">
        <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
          {search ? `Searching "${search}"` : 'All Products'}
          <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">{products.total} items</span>
        </h1>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <span className="text-sm font-medium whitespace-nowrap text-muted-foreground">Filter by:</span>
          <CategoryFilter categories={categories} />
        </div>
      </div>

      {products.products.length === 0 ? (
        <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-muted-foreground/20">
          <p className="text-xl text-muted-foreground font-medium">No products found matching your criteria.</p>
          <button onClick={() => window.location.href = '/'} className="mt-4 text-primary hover:underline">Clear all filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.products.map((product, index) => (
            <div
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      <Pagination
        total={products.total}
        limit={products.limit}
        skip={products.skip}
      />
    </div>
  );
}
