'use client';

import { Button, Text } from '@gv-tech/ui-web';
import { Compass, Home, Map } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[var(--color-background)] px-6 py-24 text-center sm:py-32 lg:px-8">
      {/* Decorative background element */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-primary-teal)] to-[var(--color-accent-magic)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:opacity-40"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="relative mb-8 h-32 w-32">
          <Compass
            className="absolute inset-0 h-32 w-32 text-[var(--color-primary-teal)] opacity-10 dark:opacity-40"
            style={{ animation: 'spin-slow 8s linear infinite' }}
          />
          <Map className="absolute inset-4 h-24 w-24 text-[var(--color-accent-magic)]" />
        </div>

        <Text
          as="h1"
          variant="h1"
          className="font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-6xl"
        >
          Drifted Off Course?
        </Text>

        <Text
          as="p"
          variant="body"
          className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-main)] opacity-80"
        >
          It looks like this destination isn&apos;t on our current charts. Even the most seasoned travelers find
          themselves in uncharted waters sometimes, but don&apos;t worry—at GV Travel, we specialize in finding the
          perfect route.
        </Text>

        <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-sm font-bold text-[var(--color-cta-text)] shadow-xl hover:scale-105 hover:bg-[var(--color-secondary-coral)] sm:text-base"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Port
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="lg"
            className="rounded-full text-[var(--color-primary-teal)] hover:bg-[var(--color-primary-teal)]/10 hover:!text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] dark:hover:bg-[var(--color-accent-magic)]/10 dark:hover:!text-[var(--color-accent-magic)]"
          >
            <Link href="/start-planning">Redesign Your Route</Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--color-primary-teal)] to-[var(--color-accent-magic)] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:opacity-40"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
