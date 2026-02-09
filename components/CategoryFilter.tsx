'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

interface CategoryFilterProps {
    categories: { slug: string; name: string; url: string }[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category') || 'all';

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (category === 'all') {
            params.delete('category');
        } else {
            params.set('category', category);
        }
        params.delete('skip'); 
        router.push(`/?${params.toString()}`);
    };

    return (
        <div className="w-full max-w-xs">
            <select
                value={currentCategory}
                onChange={handleCategoryChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Filter by category"
            >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                        {cat.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
