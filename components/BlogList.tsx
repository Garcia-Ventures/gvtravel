'use client';

import { BlogPost } from '@/lib/types';
import { Separator } from '@gv-tech/design-system';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <>
      <Separator className="my-12 bg-[var(--color-primary-teal)]/10" />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
