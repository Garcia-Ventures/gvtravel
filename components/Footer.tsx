'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@gv-tech/ui-web';
import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="group mb-4 inline-block">
              <Logo className="h-10 w-auto text-[var(--color-logo)] transition-colors duration-300" />
            </Link>
            <p className="max-w-xs text-sm font-medium text-[var(--color-text-main)] opacity-70">
              Thoughtful travel planning for families who want memorable trips, smart spending, and less stress.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-sm font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
              Explore
            </h3>
            <NavigationMenu orientation="vertical" className="max-w-none justify-start">
              <NavigationMenuList className="flex-col items-start gap-3 text-sm text-[var(--color-text-main)] opacity-80">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="transition-colors hover:text-[var(--color-accent-magic)]">
                      Meet Your Travel Advisor
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-sm font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
              Connect
            </h3>
            <NavigationMenu orientation="vertical" className="max-w-none justify-start">
              <NavigationMenuList className="flex-col items-start gap-3 text-sm text-[var(--color-text-main)] opacity-80">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/start-planning"
                      className="font-bold transition-colors hover:text-[var(--color-accent-magic)]"
                    >
                      Start Planning
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <TooltipProvider delayDuration={250}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="mailto:lindsay@gv-travel.com"
                          className="transition-colors hover:text-[var(--color-accent-magic)]"
                        >
                          Email Lindsay
                        </a>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="border border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] text-xs text-[var(--color-text-main)] shadow-lg"
                      >
                        lindsay@gv-travel.com
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <Separator className="my-8 bg-[var(--color-primary-teal)]/10" />

        <p className="text-center text-xs font-medium text-[var(--color-text-main)] opacity-50">
          &copy; {new Date().getFullYear()} GV Travel. Guided by Garcia Ventures.
        </p>
      </div>
    </footer>
  );
}
