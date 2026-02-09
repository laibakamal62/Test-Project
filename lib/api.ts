export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

const BASE_URL = 'https://dummyjson.com';

export async function getProducts(params?: {
    limit?: number;
    skip?: number;
    category?: string;
    search?: string;
}): Promise<ProductResponse> {
    const { limit = 10, skip = 0, category, search } = params || {};
    let url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

    if (search) {
        url = `${BASE_URL}/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`;
    } else if (category && category !== 'all') {
        url = `${BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

export async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }
    return res.json();
}

export async function getCategories(): Promise<{ slug: string; name: string; url: string }[]> {
    const res = await fetch(`${BASE_URL}/products/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    return res.json();
}
