'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-muted/30 border border-border/50 p-8 md:p-12 lg:p-16 mb-12 text-center md:text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />

            <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-sm text-primary mb-6 animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    <span className="flex h-2 w-2 rounded-full bg-primary" />
                    <span className="font-semibold">Season Collection 2026</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground">
                    Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Premium</span> <br />
                    Lifestyle Products
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                    Explore our curated collection of high-quality essentials designed to elevate your everyday life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                        Shop Now
                        <ArrowRight className="h-4 w-4" />
                    </button>
                    <Link href="/favorites" className="inline-flex items-center justify-center gap-2 rounded-full bg-background border border-border px-8 py-3.5 text-sm font-bold hover:bg-accent hover:border-accent-foreground/20 transition-all duration-300">
                        View Favorites
                    </Link>
                </div>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 hidden lg:block opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[500px] h-[500px]">
                    <path fill="currentColor" d="M47.5,-58.5C61.3,-46.8,72.1,-32.4,76.5,-16.5C80.9,-0.6,78.9,16.8,70.5,31.4C62,46,47.1,57.7,30.9,64.8C14.7,71.9,-2.8,74.4,-19.1,70.4C-35.4,66.4,-50.5,55.9,-61.7,42.4C-72.9,28.9,-80.2,12.4,-77.7,-3.1C-75.2,-18.6,-62.9,-33.1,-50.1,-45.3C-37.3,-57.5,-24,-67.4,-9.7,-66.2C4.5,-65,18.8,-52.7,47.5,-58.5Z" transform="translate(100 100)" />
                </svg>
            </div>
        </div>
    );
}
