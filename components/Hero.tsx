import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
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
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Plan your next family adventure with us.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            We specialize in crafting unforgettable cruise vacations and family trips. Let GV Travel handle the details
            so you can focus on making memories.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/start-planning"
              className="rounded-full bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start Planning Your Trip
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-300">
              Read our story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
