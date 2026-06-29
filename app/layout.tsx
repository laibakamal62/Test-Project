import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Laiba Kamal | MERN Stack Developer',
  description: 'Professional portfolio of Laiba Kamal, MERN Stack & Full Stack Web Developer with 2+ years of experience building scalable, responsive web and mobile applications using React, Next.js, Node.js, and MongoDB.',
  keywords: ['Laiba Kamal', 'MERN Stack Developer', 'Full Stack Developer', 'React Developer', 'Next.js Developer', 'Software Engineer Portfolio'],
  authors: [{ name: 'Laiba Kamal' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-indigo-500/20 selection:text-indigo-400`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-linear-to-b from-background via-background/95 to-background/90 text-foreground overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
