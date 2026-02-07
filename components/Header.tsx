'use client';

import { Button } from '@gv-tech/design-system';
import Link from 'next/link';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-primary-teal)]/10 bg-[var(--color-nav-bg)] backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="h-10 w-auto text-[var(--color-logo)] transition-colors duration-300" />
        </Link>

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

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            asChild
            className="rounded-full bg-[var(--color-accent-magic)] px-5 py-2 text-sm font-bold text-[var(--color-cta-text)] shadow-sm hover:scale-105 active:scale-95 hover:bg-[var(--color-secondary-coral)]"
          >
            <Link href="/start-planning">Start Planning</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
