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
} from '@gv-tech/design-system';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  post: SanityPost;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="bg-[var(--color-background)] py-24 sm:py-32 transition-colors duration-300">
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
              <BreadcrumbPage className="text-[var(--color-text-main)] font-bold truncate max-w-[200px] sm:max-w-md">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-x-4 text-xs">
            {post.publishDate && (
              <time dateTime={post.publishDate} className="text-[var(--color-text-main)] opacity-50 font-medium">
                {new Date(post.publishDate).toLocaleDateString()}
              </time>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <TooltipProvider delayDuration={200}>
              <div className="mt-4 flex items-center justify-center gap-x-2">
                {post.tags.map((tag) => (
                  <Tooltip key={tag}>
                    <TooltipTrigger asChild>
                      <Badge
                        variant="secondary"
                        className="cursor-default bg-[var(--color-primary-teal)]/10 text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] border-none uppercase tracking-tighter text-[10px] font-bold px-3 py-1.5"
                      >
                        {tag}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-[var(--color-background)] text-[var(--color-text-main)] border border-[var(--color-primary-teal)]/10 shadow-lg text-xs"
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
          <div className="mt-10 aspect-[16/9] w-full rounded-2xl bg-[var(--color-primary-teal)]/5 object-cover sm:aspect-[2/1] overflow-hidden relative border border-[var(--color-primary-teal)]/10">
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

          <Card className="my-10 border border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 rounded-2xl shadow-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-serif font-bold text-[var(--color-text-main)]">Inspired by this voyage?</h3>
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
