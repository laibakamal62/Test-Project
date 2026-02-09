'use client';

import { useFavorites } from '@/hooks/useFavoritesContext';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Heart, ArrowLeft } from 'lucide-react';

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <div className="container px-4 md:px-6 py-6 mx-auto">
            <div className="flex flex-col gap-2 mb-8 border-b pb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 w-fit transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Products
                </Link>
                <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-red-500 fill-red-500" />
                    <h1 className="text-3xl font-bold tracking-tight">Your Favorites</h1>
                </div>
                <p className="text-muted-foreground">
                    {favorites.length} {favorites.length === 1 ? 'product' : 'products'} saved
                </p>
            </div>

            {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-muted/30 rounded-lg border-2 border-dashed">
                    <Heart className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
                    <p className="text-muted-foreground mb-6 text-center max-w-sm">
                        Start collecting products you like by clicking the heart icon on any product card.
                    </p>
                    <Link
                        href="/"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors"
                    >
                        Browse Products
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
