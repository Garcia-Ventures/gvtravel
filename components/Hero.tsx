'use client';

import { Button, Text } from '@gv-tech/ui-web';
import Image from 'next/image';
import Link from 'next/link';

import { useIsMounted } from '@/lib/hooks';
import { trackCtaClick } from '@/lib/openpanel';
import { PRIMARY_CTA_BUTTON_CLASS_HEX } from '@/lib/utils';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2400';

export function Hero() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="relative isolate overflow-hidden bg-[#002d36] py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#002d36]" />
      </div>
    );
  }

  return (
    <div className="relative isolate overflow-hidden bg-[#002d36] py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src={HERO_IMAGE}
          alt="Turquoise tropical beach and calm water"
          fill
          className="hero-photo-settle object-cover object-[center_40%]"
          priority
          suppressHydrationWarning
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,45,54,0.72)_0%,rgba(0,45,54,0.28)_45%,transparent_68%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h1"
            variant="h1"
            className="hero-copy-in font-serif font-bold tracking-tight text-white sm:text-6xl"
          >
            Cruise vacations planned around your family and your budget.
          </Text>
          <Text
            as="p"
            variant="body"
            className="hero-copy-in hero-copy-in-delay-1 mt-6 text-lg leading-8 text-white opacity-90"
          >
            Cruises are where I spend most of my time — Caribbean, Alaska, and Disney Cruise Line. I also plan Disney
            vacations and resort stays when that is the better fit for your family.
          </Text>
          <div className="hero-copy-in hero-copy-in-delay-2 mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
            <Button
              asChild
              size="lg"
              className={`w-full text-base transition-transform duration-200 ease-out hover:scale-[1.02] sm:w-auto ${PRIMARY_CTA_BUTTON_CLASS_HEX}`}
            >
              <Link
                href="/start-planning"
                onClick={() =>
                  trackCtaClick({
                    location: 'hero_primary',
                    label: 'Start Planning with Me',
                    target: '/start-planning',
                  })
                }
              >
                Start Planning with Me
              </Link>
            </Button>
            <Button asChild variant="link" className="text-white hover:text-[var(--color-accent-magic-hex)]">
              <Link
                href="/about"
                onClick={() =>
                  trackCtaClick({
                    location: 'hero_secondary',
                    label: 'Meet Your Travel Advisor',
                    target: '/about',
                  })
                }
              >
                Meet Your Travel Advisor <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
