
'use client';

import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Search, Sun, Moon, ShoppingBag, Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavoritesContext';
import { useState, useEffect } from 'react';

export default function Header() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const { favorites } = useFavorites();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

   
    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        params.delete('skip'); // Reset pagination on search
        router.replace(`/?${params.toString()}`);
    };

    if (!mounted) return null;

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="container px-4 md:px-6 mx-auto h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-bold text-xl sm:text-2xl tracking-tight hidden sm:inline-block">LuxeStore</span>
                </Link>

                <div className="flex items-center flex-1 max-w-xl mx-auto transition-all duration-300 focus-within:scale-[1.02]">
                    <div className="relative w-full">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search for premium products..."
                            className="w-full rounded-full border border-input bg-muted/50 hover:bg-muted/80 focus:bg-background pl-10 pr-4 py-2.5 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0 shadow-sm"
                            defaultValue={searchParams.get('search')?.toString()}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2.5 hover:bg-accent hover:text-accent-foreground rounded-full transition-colors relative overflow-hidden group"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        ) : (
                            <Moon className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                        )}
                    </button>

                    <Link
                        href="/favorites"
                        className="relative p-2.5 hover:bg-accent hover:text-accent-foreground rounded-full transition-all hover:scale-105 active:scale-95 group"
                        aria-label="View favorites"
                    >
                        <Heart className={`h-5 w-5 transition-colors ${favorites.length > 0 ? 'fill-red-500 text-red-500' : 'group-hover:text-red-500'}`} />
                        {favorites.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in font-bold shadow-sm">
                                {favorites.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
