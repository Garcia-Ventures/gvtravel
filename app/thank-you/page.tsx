'use client';

import { Button, Card, CardContent, Separator } from '@gv-tech/ui-web';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[var(--color-background)] px-6 py-24 transition-colors duration-300 sm:py-32 lg:px-8">
      <Card className="w-full max-w-lg overflow-hidden rounded-2xl border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 text-center shadow-2xl">
        <CardContent className="p-10">
          <div className="mb-6 text-5xl">⚓</div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
            Thank You!
          </h1>
          <p className="mt-4 text-base leading-7 font-medium text-[var(--color-text-main)] opacity-70">
            We have received your trip inquiry and our concierge team is already charting your course. We&apos;ll be in
            touch shortly with your personalized voyage plan.
          </p>

          <Separator className="my-8 bg-[var(--color-primary-teal)]/10" />

          <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-base font-bold text-[var(--color-cta-text)] shadow-xl hover:scale-105 hover:bg-[var(--color-secondary-coral)] sm:w-auto"
            >
              <Link href="/">Back to Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]"
            >
              <Link href="/blog">
                Read our travel blog <span aria-hidden="true">&rarr;</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
