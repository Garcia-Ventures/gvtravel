'use client';

import { portableTextComponents } from '@/lib/portabletext';
import { Card, CardContent, Separator } from '@gv-tech/ui-web';
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
    <div className="bg-[var(--color-background)] py-24 transition-colors duration-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="font-serif text-base leading-7 font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
                Meet Your Travel Advisor
              </h2>
              <p className="mt-2 font-serif text-3xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
                {title}
              </p>

              <Separator className="my-8 bg-[var(--color-primary-teal)]/10" />

              <div className="text-lg leading-8 text-[var(--color-text-main)] opacity-80">
                {content ? (
                  <PortableText value={content} components={portableTextComponents} />
                ) : (
                  <>
                    <p>
                      I specialize in helping families and budget-conscious travelers plan stress-free Caribbean,
                      cruise, and Disney vacations with strong value and high-quality experiences.
                    </p>
                    <p className="mt-6">
                      As a homeschool mom of three boys, I understand how important it is to build trips that are
                      family-friendly, well-paced, and realistic for your budget. I help you sort through options, avoid
                      overwhelm, and move forward with confidence.
                    </p>

                    <div className="not-prose mt-10 grid gap-4">
                      <Card className="rounded-xl border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 shadow-sm">
                        <CardContent className="flex items-start gap-4 p-5">
                          <span className="mt-0.5 shrink-0 text-2xl">⚓</span>
                          <div>
                            <h3 className="font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                              Family-First Planning
                            </h3>
                            <p className="mt-1 text-sm text-[var(--color-text-main)] opacity-80">
                              From room types and cruise ships to park tickets and resort choices, I help you choose
                              what fits your family best.
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="rounded-xl border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 shadow-sm">
                        <CardContent className="flex items-start gap-4 p-5">
                          <span className="mt-0.5 shrink-0 text-2xl">✨</span>
                          <div>
                            <h3 className="font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                              Value Without Sacrificing Experience
                            </h3>
                            <p className="mt-1 text-sm text-[var(--color-text-main)] opacity-80">
                              I focus on where to save, what to prioritize, and how to get the most out of your budget
                              so your vacation still feels special.
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
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-zinc-100 object-cover lg:aspect-[4/5] lg:w-[36rem] lg:max-w-none dark:bg-zinc-800">
              <Image src={imageUrl} alt={title} fill className="object-cover" suppressHydrationWarning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
