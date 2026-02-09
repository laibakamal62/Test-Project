'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';
import { Product } from '@/lib/api';
import { useFavorites } from '@/hooks/useFavoritesContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    const favorite = isFavorite(product.id);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (favorite) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    return (
        <div className="group relative rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-border h-full flex flex-col overflow-hidden">
            <Link href={`/products/${product.id}`} className="block overflow-hidden relative aspect-[1.1]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />

                {product.discountPercentage > 10 && (
                    <span className="absolute top-3 left-3 z-20 inline-flex items-center rounded-full bg-red-600/90 text-white px-2.5 py-0.5 text-xs font-bold shadow-sm backdrop-blur-sm">
                        -{Math.round(product.discountPercentage)}%
                    </span>
                )}
            </Link>

            <div className="p-4 flex flex-col flex-1 gap-2">
                <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{product.category}</span>
                    <div className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400">
                        <Star className="h-3 w-3 fill-current" />
                        <span>{product.rating}</span>
                    </div>
                </div>

                <div className="flex items-start justify-between gap-4 mt-1">
                    <Link href={`/products/${product.id}`} className="font-bold text-lg leading-tight hover:text-primary transition-colors line-clamp-2">
                        {product.title}
                    </Link>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto pt-4 flex items-end justify-between border-t border-border/50">
                    <div className="flex flex-col">
                        {product.discountPercentage > 0 && (
                            <span className="text-xs text-muted-foreground line-through">
                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                            </span>
                        )}
                        <span className="text-xl font-extrabold text-foreground tracking-tight">${product.price}</span>
                    </div>

                    <button
                        onClick={toggleFavorite}
                        className={cn(
                            "relative p-2.5 rounded-full transition-all duration-300 active:scale-90",
                            favorite
                                ? "bg-red-50 text-red-600 dark:bg-red-900/20"
                                : "bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                        )}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        <Heart className={cn("h-5 w-5 transition-colors", favorite && "fill-current")} />
                    </button>
                </div>
            </div>
        </div>
    );
}
