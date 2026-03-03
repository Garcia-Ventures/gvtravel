'use client';

import { Hero } from '@/components/Hero';
import { Button } from '@gv-tech/ui-web';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />

      {/* Intro Section */}
      <section className="bg-[var(--color-background)] py-24 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-serif text-base leading-7 font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
              Why Families Choose GV Travel
            </h2>
            <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
              Less stress. Better value. More meaningful memories.
            </p>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-main)] opacity-80">
              From choosing the right cruise ship or Disney resort to finding where your dollars go furthest, we help
              you plan smart so your family can focus on enjoying the trip.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-[var(--color-primary-teal)] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[var(--color-background)] sm:text-4xl">
              Ready to plan a trip your family will truly enjoy?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-background)] opacity-90">
              Tell us your goals, budget, and travel style, and we&apos;ll help you build a high-quality vacation that
              feels doable from day one.
            </p>
            <div className="mt-10 flex flex-col items-start gap-y-4 sm:flex-row sm:items-center sm:gap-x-6">
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-base font-bold text-[var(--color-cta-text)] shadow-xl hover:scale-105 hover:bg-[var(--color-secondary-coral)] sm:w-auto"
              >
                <Link href="/start-planning">Start My Family Trip Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
