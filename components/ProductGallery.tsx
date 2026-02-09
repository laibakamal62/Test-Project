'use client';

import { useState } from 'react';
import Image from 'next/image';


import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ProductGalleryProps {
    images: string[];
    title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                <Image
                    src={selectedImage}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-300 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedImage(img)}
                            className={cn(
                                "relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all snap-start",
                                selectedImage === img
                                    ? "border-primary ring-2 ring-primary/20"
                                    : "border-transparent hover:border-muted-foreground/50"
                            )}
                        >
                            <Image
                                src={img}
                                alt={`${title} thumbnail ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
