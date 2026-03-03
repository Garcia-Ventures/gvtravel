'use client';

import { useIsMounted } from '@/lib/hooks';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@gv-tech/ui-web';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const navItems = [{ href: '/about', label: 'Meet Your Advisor' }];

export function Header() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 h-16 w-full border-b border-[var(--color-primary-teal)]/10 bg-[var(--color-nav-bg)] backdrop-blur-md" />
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-primary-teal)]/10 bg-[var(--color-nav-bg)] backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <Logo className="h-10 w-auto text-[var(--color-logo)] transition-colors duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    href={item.href}
                    className="!bg-transparent !text-sm !font-medium !text-[var(--color-primary-teal)] transition-colors hover:!bg-[var(--color-primary-teal)]/5 hover:!text-[var(--color-accent-magic)] dark:!text-[var(--color-text-main)]"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <TooltipProvider delayDuration={250}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  className="hidden rounded-full bg-[var(--color-accent-magic)] px-5 py-2 text-sm font-bold text-[var(--color-cta-text)] shadow-sm hover:scale-105 hover:bg-[var(--color-secondary-coral)] active:scale-95 sm:inline-flex"
                >
                  <Link href="/start-planning">Start Planning</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="border border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] text-xs text-[var(--color-text-main)] shadow-lg"
              >
                Plan your family&apos;s trip with practical, personal guidance
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[var(--color-primary-teal)] dark:text-[var(--color-text-main)]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-[var(--color-primary-teal)]/10 bg-[var(--color-background)]">
                <SheetHeader>
                  <SheetTitle className="text-left font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
                    GV Travel
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-10 flex flex-col gap-6">
                  <Link
                    href="/about"
                    className="text-lg font-medium text-[var(--color-text-main)] transition-colors hover:text-[var(--color-accent-magic)]"
                  >
                    Meet Your Travel Advisor
                  </Link>
                  <Button
                    asChild
                    className="mt-4 rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-base font-bold text-[var(--color-cta-text)] shadow-xl hover:bg-[var(--color-secondary-coral)]"
                  >
                    <Link href="/start-planning">Start Planning</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
