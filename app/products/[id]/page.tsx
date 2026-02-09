import { getProduct } from '@/lib/api';
import { Star, ArrowLeft, Heart } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import AddToFavoriteButton from '@/components/AddToFavoriteButton';
import ProductGallery from '@/components/ProductGallery';
import QuantitySelector from '@/components/QuantitySelector';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params;
    const product = await getProduct(id);
    return {
        title: `${product.title} - Product Dashboard`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 max-w-7xl">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors group"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
     
                <div>
                    <ProductGallery images={product.images} title={product.title} />
                </div>

    
                <div className="flex flex-col gap-6">
                    <div className="border-b pb-6">
                        <div className="flex items-center justify-between gap-4 mb-2">
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{product.brand}</span>
                            <div className="flex items-center gap-1 text-sm bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded text-amber-800 dark:text-amber-400 font-medium">
                                <Star className="h-3.5 w-3.5 fill-current" />
                                <span>{product.rating}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">{product.title}</h1>

                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-black dark:text-white">${product.price}</span>
                                {product.discountPercentage > 0 && (
                                    <>
                                        <span className="text-zinc-500 dark:text-zinc-400 line-through text-lg">
                                            ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                        </span>
                                        <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-semibold text-red-600 dark:text-red-400">
                                            {product.discountPercentage}% OFF
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-stone dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4">
                        <div className="flex flex-col gap-1 p-3 bg-muted/40 rounded-lg">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">Category</span>
                            <span className="font-medium capitalize">{product.category}</span>
                        </div>
                        <div className="flex flex-col gap-1 p-3 bg-muted/40 rounded-lg">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">Stock</span>
                            <span className={`font-medium ${product.stock < 10 ? 'text-red-500' : 'text-green-600'}`}>
                                {product.stock > 0 ? `${product.stock} units left` : 'Out of Stock'}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t">
                        <div className="flex items-center gap-4">
                            <QuantitySelector />
                        </div>
                        <div className="flex flex-1 gap-3">
                            <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 rounded-md font-medium transition-colors">
                                Add to Cart
                            </button>
                            <AddToFavoriteButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
