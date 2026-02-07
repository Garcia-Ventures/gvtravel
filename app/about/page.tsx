import { client } from '@/sanity/lib/client';
import { ABOUT_QUERY } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - GV Travel',
  description: 'Learn more about our family-run travel agency.',
};

export default async function AboutPage() {
  const data = await client.fetch(ABOUT_QUERY);

  // Fallback defaults if no data in Sanity yet
  const title = data?.title || 'Passionate about family travel';
  const imageUrl =
    data?.imageUrl || 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200';
  const content = data?.content;

  return (
    <div className="bg-[var(--color-background)] py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-serif font-bold leading-7 text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-widest">
                Our Compass Story
              </h2>
              <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
                {title}
              </p>
              <div className="mt-6 text-lg leading-8 text-[var(--color-text-main)] opacity-80 prose dark:prose-invert">
                {content ? (
                  <PortableText value={content} />
                ) : (
                  <>
                    <p>
                      Hello! We are the Garcia family. GV Travel was born from our belief that the most profound magic
                      is found when families explore the horizon together.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-[var(--color-text-main)] opacity-90">
                      <div className="relative pl-9">
                        <dt className="inline font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                          <span className="absolute left-1 top-1 h-5 w-5 opacity-50">⚓</span>
                          Seamless Adventure.
                        </dt>
                        <dd className="inline pl-4">
                          Having navigated dozens of voyages and magical destinations, we bring firsthand clarity to
                          your family&apos;s journey.
                        </dd>
                      </div>
                      <div className="relative pl-9">
                        <dt className="inline font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                          <span className="absolute left-1 top-1 h-5 w-5 opacity-50">✨</span>
                          Boutique Concierge.
                        </dt>
                        <dd className="inline pl-4">
                          We treat every expedition as if it were our own family&apos;s legacy, with obsessive attention
                          to the details that create magic.
                        </dd>
                      </div>
                    </dl>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/2] w-full rounded-xl bg-zinc-100 dark:bg-zinc-800 object-cover lg:aspect-[4/5] lg:w-[36rem] lg:max-w-none overflow-hidden relative">
              <Image src={imageUrl} alt={title} fill className="object-cover" suppressHydrationWarning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
