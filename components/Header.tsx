'use client';

import { Code2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Home',       href: '#home'       },
    { name: 'About',      href: '#about'      },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects',   href: '#projects'   },
    { name: 'Contact',    href: '#contact'    },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 50,
                width: '100%',
                backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : '#ffffff',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
                transition: 'all 0.25s ease',
            }}
        >
            <div
                className="container mx-auto px-4 md:px-8"
                style={{ height: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                {/* Logo */}
                <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <div style={{
                        width: '2rem', height: '2rem', borderRadius: '0.5rem',
                        backgroundColor: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(79,70,229,0.25)',
                    }}>
                        <Code2 className="w-4 h-4" style={{ color: '#ffffff' }} />
                    </div>
                    <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.03em', color: '#0f172a' }}>
                        Laiba<span style={{ color: '#4f46e5' }}>.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((l) => (
                        <a
                            key={l.name}
                            href={l.href}
                            style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569', textDecoration: 'none', transition: 'color 0.15s' }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#4f46e5'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#475569'; }}
                        >
                            {l.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        style={{
                            fontSize: '0.825rem', fontWeight: 700, padding: '0.5rem 1.1rem',
                            borderRadius: '0.625rem', backgroundColor: '#4f46e5', color: '#fff',
                            textDecoration: 'none', boxShadow: '0 2px 8px rgba(79,70,229,0.25)', transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#475569', padding: '0.25rem' }}
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                    <nav style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1rem 1rem' }}>
                        {navLinks.map((l) => (
                            <a
                                key={l.name}
                                href={l.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    padding: '0.75rem 1rem', borderRadius: '0.625rem', fontSize: '0.9rem',
                                    fontWeight: 600, color: '#475569', textDecoration: 'none', transition: 'all 0.15s',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f0f4ff';
                                    (e.currentTarget as HTMLAnchorElement).style.color = '#4f46e5';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                                    (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                                }}
                            >
                                {l.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
