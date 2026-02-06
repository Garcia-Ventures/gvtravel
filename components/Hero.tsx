'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@gv-tech/design-system';

import { useIsMounted } from '@/lib/hooks';

export function Hero() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900" />
      </div>
    );
  }

  return (
    <div className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&q=80&w=2000"
          alt="Cruise ship in Alaska"
          fill
          className="object-cover object-center opacity-40"
          priority
          suppressHydrationWarning
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-6xl">
            Unforgettable magic. Seamless adventure.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white opacity-90">
            Expertly crafted cruise vacations and Disney experiences. Let GV Travel handle the details while you focus
            on making the magic happen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[var(--color-accent-magic-hex)] px-6 py-3 text-base font-bold text-[var(--color-cta-text-hex)] shadow-xl hover:scale-105 hover:bg-[var(--color-secondary-coral-hex)]"
            >
              <Link href="/start-planning">Start Planning Your Magic</Link>
            </Button>
            <Button asChild variant="link" className="text-white hover:text-[var(--color-accent-magic-hex)]">
              <Link href="/about">
                Our Compass Story <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
