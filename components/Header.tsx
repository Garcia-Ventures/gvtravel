import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">GV</span>
          <span className="text-zinc-900 dark:text-zinc-50">Travel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
            Gallery
          </Link>
          <Link href="/blog" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/start-planning"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Start Planning
          </Link>
        </div>
      </div>
    </header>
  );
}
