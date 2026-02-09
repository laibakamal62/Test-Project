'use client';

import { Heart } from 'lucide-react';
import { Product } from '@/lib/api';
import { useFavorites } from '@/hooks/useFavoritesContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export default function AddToFavoriteButton({ product }: { product: Product }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    const favorite = isFavorite(product.id);

    const toggleFavorite = () => {
        if (favorite) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    return (
        <button
            onClick={toggleFavorite}
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 w-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                favorite && "text-red-500 border-red-200 bg-red-50 dark:bg-red-900/20"
            )}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
            <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
        </button>
    );
}
