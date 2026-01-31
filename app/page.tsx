import { Hero } from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Intro Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              We plan. You relax.
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              From finding the best cruise deals to organizing complex family itineraries, we handle all the logistics
              so you can enjoy your vacation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to start planning?</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Tell us a bit about your dream trip, and we&apos;ll get to work creating a custom proposal for you.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/start-planning"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
              </Link>
              <Link href="/gallery" className="text-sm font-semibold leading-6 text-white">
                See our travels <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
