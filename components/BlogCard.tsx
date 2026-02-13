'use client';

import { BlogPost } from '@/lib/types';
import { AspectRatio, Badge, Card, CardContent, CardHeader } from '@gv-tech/design-system';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex flex-col h-full overflow-hidden rounded-2xl border border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] group-hover:border-[var(--color-primary-teal)]/25">
        <CardHeader className="p-0">
          {post.imageUrl && (
            <AspectRatio ratio={3 / 2} className="overflow-hidden bg-[var(--color-primary-teal)]/5">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                suppressHydrationWarning
              />
            </AspectRatio>
          )}
        </CardHeader>
        <CardContent className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-x-3 text-xs">
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
          <h3 className="mt-4 text-xl font-serif font-bold leading-tight text-[var(--color-text-main)] group-hover:text-[var(--color-primary-teal)] dark:group-hover:text-[var(--color-accent-magic)] transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-text-main)] opacity-70 font-medium">
            {post.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
