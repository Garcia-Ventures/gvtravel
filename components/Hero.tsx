'use client';

import { Button } from '@gv-tech/ui-web';
import Image from 'next/image';
import Link from 'next/link';

import { useIsMounted } from '@/lib/hooks';
import { PRIMARY_CTA_BUTTON_CLASS_HEX } from '@/lib/utils';

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
          alt="Family cruise and beach vacation inspiration"
          fill
          className="object-cover object-center opacity-40"
          priority
          suppressHydrationWarning
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Family travel planned with heart, value, and care.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white opacity-90">
            I help busy families plan cruises, Disney vacations, and Caribbean getaways that feel special without
            stretching the budget. You bring the dream, and I&apos;ll handle the details.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
            <Button
              asChild
              size="lg"
              className={`w-full text-base hover:scale-105 sm:w-auto ${PRIMARY_CTA_BUTTON_CLASS_HEX}`}
            >
              <Link href="/start-planning">Start Planning with Me</Link>
            </Button>
            <Button asChild variant="link" className="text-white hover:text-[var(--color-accent-magic-hex)]">
              <Link href="/about">
                Meet Your Travel Advisor <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
