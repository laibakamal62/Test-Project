'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f4ff 100%)',
            }}
        >
            {/* Subtle dot grid background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    opacity: 0.5,
                }}
            />

            {/* Soft colour blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 container px-4 md:px-8 mx-auto py-20 flex flex-col items-center text-center">

                {/* Status badge */}
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10 tracking-wide border"
                    style={{
                        backgroundColor: '#f0f4ff',
                        borderColor: '#c7d2fe',
                        color: '#4338ca',
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Full-time &amp; Remote Roles
                </div>

                {/* Name */}
                <h1
                    className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-5"
                    style={{ color: '#0f172a', letterSpacing: '-0.03em' }}
                >
                    Laiba{' '}
                    <span style={{ color: '#4f46e5' }}>Kamal</span>
                </h1>

                {/* Role tag */}
                <p
                    className="text-lg sm:text-xl md:text-2xl font-semibold mb-5"
                    style={{ color: '#475569' }}
                >
                    Full Stack &amp; MERN Stack Developer
                </p>

                {/* Description */}
                <p
                    className="max-w-2xl text-base sm:text-lg leading-relaxed mb-10"
                    style={{ color: '#64748b' }}
                >
                    Results-driven developer with{' '}
                    <strong style={{ color: '#0f172a', fontWeight: 700 }}>2+ years of experience</strong> building
                    scalable, production-ready web applications using{' '}
                    <span style={{ color: '#4f46e5', fontWeight: 600 }}>Next.js, React, Node.js &amp; MongoDB</span>.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                            backgroundColor: '#4f46e5',
                            color: '#ffffff',
                            boxShadow: '0 4px 24px rgba(79,70,229,0.25)',
                        }}
                    >
                        View My Work
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95 border"
                        style={{
                            backgroundColor: '#ffffff',
                            color: '#0f172a',
                            borderColor: '#e2e8f0',
                            boxShadow: '0 1px 4px rgba(15,23,42,0.06)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8faff')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4">
                    {[
                       
                        { href: 'https://www.linkedin.com/in/laiba-kamall/', label: 'LinkedIn', Icon: Linkedin },
                        { href: 'mailto:laibakamal33@gmail.com', label: 'Email', Icon: Mail },
                    ].map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={label !== 'Email' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200"
                            style={{ borderColor: '#e2e8f0', color: '#64748b', backgroundColor: '#ffffff' }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#a5b4fc';
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#eef2ff';
                                (e.currentTarget as HTMLElement).style.color = '#4f46e5';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#ffffff';
                                (e.currentTarget as HTMLElement).style.color = '#64748b';
                            }}
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
