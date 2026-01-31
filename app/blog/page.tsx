import { Metadata } from 'next';
import { BlogList } from '@/components/BlogList';
import { BLOG_POSTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog - GV Travel',
  description: 'Trip reports, reviews, and travel tips from our family adventures.',
};

export default function BlogIndex() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">Travel Log</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Read about our latest adventures, cruise ship reviews, and travel tips.
          </p>
        </div>
        <BlogList posts={BLOG_POSTS} />
      </div>
    </div>
  );
}
