'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';
import { Badge } from '@gv-tech/design-system';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        {post.imageUrl && (
          <div className="aspect-[16/9] w-full rounded-2xl bg-[var(--color-primary-teal)]/5 object-cover sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              suppressHydrationWarning
            />
          </div>
        )}
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.publishDate} className="text-[var(--color-text-main)] opacity-50 font-medium">
            {new Date(post.publishDate).toLocaleDateString()}
          </time>
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-[var(--color-primary-teal)]/10 text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-tighter text-[10px] font-bold"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-2xl font-serif font-bold leading-tight text-[var(--color-text-main)] group-hover:text-[var(--color-primary-teal)] dark:group-hover:text-[var(--color-accent-magic)] transition-colors">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-[var(--color-text-main)] opacity-70 font-medium">
            {post.summary}
          </p>
        </div>
      </div>
    </article>
  );
}
