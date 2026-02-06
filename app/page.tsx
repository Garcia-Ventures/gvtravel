'use client';

import { Hero } from '@/components/Hero';
import Link from 'next/link';
import { Button } from '@gv-tech/design-system';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Intro Section */}
      <section className="py-24 bg-[var(--color-background)] transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-serif font-bold leading-7 text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-widest">
              Why Choose Our Compass
            </h2>
            <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
              We guide. You make memories.
            </p>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-main)] opacity-80">
              From uncovering hidden magical gems to navigating complex maritime itineraries, we chart the course so
              your family can focus on the wonder.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-[var(--color-primary-teal)] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-[var(--color-background)] sm:text-4xl">
              Ready to set sail on your next adventure?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--color-background)] opacity-90">
              Share your vision with our boutique concierge, and we&apos;ll craft a unique proposal that captures the
              magic.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-base font-bold text-[var(--color-cta-text)] shadow-xl hover:scale-105 hover:bg-[var(--color-secondary-coral)]"
              >
                <Link href="/start-planning">Request Your Proposal</Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-[var(--color-background)] hover:text-[var(--color-accent-magic)]"
              >
                <Link href="/gallery">
                  Explore the Magic <span aria-hidden="true">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
