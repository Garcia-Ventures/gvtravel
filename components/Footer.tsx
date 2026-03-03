'use client';

import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  Text,
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
            <Text as="p" variant="bodySmall" className="max-w-xs font-medium text-[var(--color-text-main)] opacity-70">
              Thoughtful travel planning for families who want memorable trips, smart spending, and less stress.
            </Text>
          </div>

          <div>
            <Text
              as="h3"
              variant="overline"
              className="mb-4 font-serif font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]"
            >
              Explore
            </Text>
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
            <Text
              as="h3"
              variant="overline"
              className="mb-4 font-serif font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]"
            >
              Connect
            </Text>
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
                        <Button
                          asChild
                          variant="link"
                          className="h-auto p-0 text-sm hover:text-[var(--color-accent-magic)]"
                        >
                          <a href="mailto:lindsay@gv-travel.com">Email Lindsay</a>
                        </Button>
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

        <Text as="p" variant="caption" className="text-center font-medium text-[var(--color-text-main)] opacity-50">
          &copy; {new Date().getFullYear()} GV Travel. Guided by Garcia Ventures.
        </Text>
      </div>
    </footer>
  );
}
