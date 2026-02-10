'use client';

import { useIsMounted } from '@/lib/hooks';
import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@gv-tech/design-system';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-[var(--color-primary-teal)]/10 bg-[var(--color-nav-bg)] backdrop-blur-md h-16" />
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-primary-teal)]/10 bg-[var(--color-nav-bg)] backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="h-10 w-auto text-[var(--color-logo)] transition-colors duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--color-primary-teal)] dark:text-[var(--color-text-main)] transition-colors opacity-90">
          <Link href="/about" className="transition-colors hover:text-[var(--color-accent-magic)]">
            About
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-[var(--color-accent-magic)]">
            Gallery
          </Link>
          <Link href="/blog" className="transition-colors hover:text-[var(--color-accent-magic)]">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Button
            asChild
            className="hidden sm:inline-flex rounded-full bg-[var(--color-accent-magic)] px-5 py-2 text-sm font-bold text-[var(--color-cta-text)] shadow-sm hover:scale-105 active:scale-95 hover:bg-[var(--color-secondary-coral)]"
          >
            <Link href="/start-planning">Start Planning</Link>
          </Button>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[var(--color-primary-teal)] dark:text-[var(--color-text-main)]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[var(--color-background)] border-[var(--color-primary-teal)]/10">
                <SheetHeader>
                  <SheetTitle className="text-left font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                    GV Travel
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  <Link
                    href="/about"
                    className="text-lg font-medium text-[var(--color-text-main)] transition-colors hover:text-[var(--color-accent-magic)]"
                  >
                    Our Compass Story
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-lg font-medium text-[var(--color-text-main)] transition-colors hover:text-[var(--color-accent-magic)]"
                  >
                    Magic Gallery
                  </Link>
                  <Link
                    href="/blog"
                    className="text-lg font-medium text-[var(--color-text-main)] transition-colors hover:text-[var(--color-accent-magic)]"
                  >
                    Travel Log
                  </Link>
                  <Button
                    asChild
                    className="mt-4 rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-base font-bold text-[var(--color-cta-text)] shadow-xl hover:bg-[var(--color-secondary-coral)]"
                  >
                    <Link href="/start-planning">Start Planning Your Magic</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
