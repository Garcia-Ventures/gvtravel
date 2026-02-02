import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 inline-block group">
              <Logo className="h-10 w-auto text-[var(--color-logo)] transition-colors duration-300" />
            </Link>
            <p className="text-sm text-[var(--color-text-main)] opacity-70 max-w-xs font-medium">
              Expertly crafted magic and seamless adventure. Let our compass guide your next family experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] mb-4 uppercase tracking-widest">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-main)] opacity-80">
              <li>
                <Link href="/about" className="hover:text-[var(--color-accent-magic)] transition-colors">
                  Our Compass Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[var(--color-accent-magic)] transition-colors">
                  Magic Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--color-accent-magic)] transition-colors">
                  Travel Log
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] mb-4 uppercase tracking-widest">
              Connect
            </h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-main)] opacity-80">
              <li>
                <Link
                  href="/start-planning"
                  className="hover:text-[var(--color-accent-magic)] transition-colors font-bold"
                >
                  Start Planning
                </Link>
              </li>
              <li>
                <a
                  href="mailto:lindsay@gv-travel.com"
                  className="hover:text-[var(--color-accent-magic)] transition-colors"
                >
                  Email the Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-primary-teal)]/10 pt-8">
          <p className="text-xs text-center text-[var(--color-text-main)] opacity-50 font-medium">
            &copy; {new Date().getFullYear()} GV Travel. Guided by Garcia Ventures.
          </p>
        </div>
      </div>
    </footer>
  );
}
