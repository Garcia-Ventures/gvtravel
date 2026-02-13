'use client';

import { portableTextComponents } from '@/lib/portabletext';
import { Card, CardContent, Separator } from '@gv-tech/design-system';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface AboutContentProps {
  title: string;
  imageUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

export function AboutContent({ title, imageUrl, content }: AboutContentProps) {
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

              <Separator className="my-8 bg-[var(--color-primary-teal)]/10" />

              <div className="text-lg leading-8 text-[var(--color-text-main)] opacity-80">
                {content ? (
                  <PortableText value={content} components={portableTextComponents} />
                ) : (
                  <>
                    <p>
                      Hello! We are the Garcia family. GV Travel was born from our belief that the most profound magic
                      is found when families explore the horizon together.
                    </p>

                    <div className="mt-10 grid gap-4 not-prose">
                      <Card className="border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 rounded-xl shadow-sm">
                        <CardContent className="p-5 flex items-start gap-4">
                          <span className="text-2xl mt-0.5 shrink-0">⚓</span>
                          <div>
                            <h3 className="font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                              Seamless Adventure
                            </h3>
                            <p className="mt-1 text-sm text-[var(--color-text-main)] opacity-80">
                              Having navigated dozens of voyages and magical destinations, we bring firsthand clarity to
                              your family&apos;s journey.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 rounded-xl shadow-sm">
                        <CardContent className="p-5 flex items-start gap-4">
                          <span className="text-2xl mt-0.5 shrink-0">✨</span>
                          <div>
                            <h3 className="font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                              Boutique Concierge
                            </h3>
                            <p className="mt-1 text-sm text-[var(--color-text-main)] opacity-80">
                              We treat every expedition as if it were our own family&apos;s legacy, with obsessive
                              attention to the details that create magic.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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
