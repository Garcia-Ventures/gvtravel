'use client';

import { portableTextComponents } from '@/lib/portabletext';
import { SanityPost } from '@/lib/types';
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@gv-tech/ui-web';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  post: SanityPost;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="bg-[var(--color-background)] py-24 transition-colors duration-300 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[200px] truncate font-bold text-[var(--color-text-main)] sm:max-w-md">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-x-4 text-xs">
            {post.publishDate && (
              <time dateTime={post.publishDate} className="font-medium text-[var(--color-text-main)] opacity-50">
                {new Date(post.publishDate).toLocaleDateString()}
              </time>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <TooltipProvider delayDuration={250}>
              <div className="mt-4 flex items-center justify-center gap-x-2">
                {post.tags.map((tag) => (
                  <Tooltip key={tag}>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className="cursor-default border-none bg-[var(--color-primary-teal)]/10 px-3 py-1.5 text-[10px] font-bold tracking-tighter text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]"
                      >
                        {tag}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="border border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] text-xs text-[var(--color-text-main)] shadow-lg"
                    >
                      Browse posts tagged: {tag}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          )}
        </div>

        {post.imageUrl && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 object-cover sm:aspect-[2/1]">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <Separator className="my-10 bg-[var(--color-primary-teal)]/10" />

        <div className="max-w-2xl text-[var(--color-text-main)] opacity-80">
          {post.body ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p className="text-lg leading-8">{post.summary}</p>
          )}

          <Card className="my-10 rounded-2xl border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 shadow-sm">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-lg font-bold text-[var(--color-text-main)]">Inspired by this voyage?</h3>
              <p className="mt-2 text-[var(--color-text-main)] opacity-70">
                Let our concierge help you chart a similar magical journey for your family.
              </p>
              <Button
                asChild
                className="mt-6 rounded-full bg-[var(--color-accent-magic)] px-6 py-2 text-sm font-bold text-[var(--color-cta-text)] shadow-xl hover:scale-105 hover:bg-[var(--color-secondary-coral)]"
              >
                <Link href="/start-planning">Start Planning</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
