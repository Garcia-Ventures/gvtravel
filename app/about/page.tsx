import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - GV Travel',
  description: 'Learn more about our family-run travel agency.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Our Story</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Passionate about family travel
              </p>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Hi! We are the Garcia family. We started GV Travel because we believe that the best memories are made
                exploring the world together.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-zinc-900 dark:text-zinc-50">
                    {/* Icon placeholder if needed, using simple dash for now */}
                    <span className="absolute left-1 top-1 h-5 w-5 text-blue-600 dark:text-blue-400">—</span>
                    Expert Planning.
                  </dt>
                  <dd className="inline">
                    {' '}
                    We have personally traveled on dozens of cruises and tours, so we know the ins and outs of planning
                    the perfect trip.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-zinc-900 dark:text-zinc-50">
                    <span className="absolute left-1 top-1 h-5 w-5 text-blue-600 dark:text-blue-400">—</span>
                    Personal Touch.
                  </dt>
                  <dd className="inline">
                    {' '}
                    We treat every client&apos;s trip as if it were our own, with attention to detail and personalized
                    recommendations.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/2] w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 object-cover lg:aspect-[4/5] lg:w-[36rem] lg:max-w-none overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200"
                alt="Family traveling together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
