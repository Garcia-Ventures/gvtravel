import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
              <span className="text-blue-600 dark:text-blue-400">GV</span>
              <span className="text-zinc-900 dark:text-zinc-50">Travel</span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
              Personalized travel planning for families and couples. Let us help you plan your dream cruise or custom
              vacation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Travel Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Travel Log
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/start-planning" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Start Planning
                </Link>
              </li>
              <li>
                <a href="mailto:eric@garcia-ventures.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-xs text-center text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} GV Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
