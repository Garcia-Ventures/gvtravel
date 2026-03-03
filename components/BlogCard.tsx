'use client';

import { BlogPost } from '@/lib/types';
import { AspectRatio, Badge, Button, Card, CardContent, CardFooter, CardHeader } from '@gv-tech/ui-web';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-[var(--color-primary-teal)]/25 hover:shadow-xl">
      <CardHeader className="p-0">
        {post.imageUrl && (
          <Link href={`/blog/${post.slug}`} className="block" aria-label={`Read ${post.title}`}>
            <AspectRatio ratio={3 / 2} className="overflow-hidden bg-[var(--color-primary-teal)]/5">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                suppressHydrationWarning
              />
            </AspectRatio>
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-5">
        <div className="flex items-center gap-x-3 text-xs">
          <time dateTime={post.publishDate} className="font-medium text-[var(--color-text-main)] opacity-50">
            {new Date(post.publishDate).toLocaleDateString()}
          </time>
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-[var(--color-primary-teal)]/10 text-[10px] font-bold tracking-tighter text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mt-4 font-serif text-xl leading-tight font-bold text-[var(--color-text-main)] transition-colors group-hover:text-[var(--color-primary-teal)] dark:group-hover:text-[var(--color-accent-magic)]">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 font-medium text-[var(--color-text-main)] opacity-70">
          {post.summary}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild variant="outline" className="w-full rounded-full">
          <Link href={`/blog/${post.slug}`}>Read Post</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
