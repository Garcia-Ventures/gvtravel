'use client';

import { PRIMARY_CTA_BUTTON_CLASS } from '@/lib/utils';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from '@gv-tech/ui-web';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[var(--color-background)] px-6 py-24 transition-colors duration-300 sm:py-32 lg:px-8">
      <Card className="w-full max-w-lg overflow-hidden rounded-2xl border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 text-center shadow-2xl">
        <CardHeader className="pb-0 text-center">
          <div className="mb-6 text-5xl">⚓</div>
          <CardTitle className="font-serif text-3xl tracking-tight text-[var(--color-text-main)] sm:text-4xl">
            Thanks for Reaching Out!
          </CardTitle>
          <CardDescription className="mt-4 text-base leading-7 font-medium text-[var(--color-text-main)] opacity-70">
            Your trip details are in, and I&apos;ll follow up soon to help you map out options that match your family,
            priorities, and budget.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-10 pt-8">
          <Separator className="my-8 bg-[var(--color-primary-teal)]/10" />

          <CardFooter className="p-0">
            <div className="flex w-full flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-6">
              <Button
                asChild
                size="lg"
                className={`w-full text-base hover:scale-105 sm:w-auto ${PRIMARY_CTA_BUTTON_CLASS}`}
              >
                <Link href="/">Back to Home</Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]"
              >
                <Link href="/blog">
                  Read family travel tips <span aria-hidden="true">&rarr;</span>
                </Link>
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}
