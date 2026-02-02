import { Metadata } from 'next';
import { BlogList } from '@/components/BlogList';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { BlogPost, SanityPost } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Blog - GV Travel',
  description: 'Trip reports, reviews, and travel tips from our family adventures.',
};

export default async function BlogIndex() {
  const postsFromSanity = await client.fetch(POSTS_QUERY);

  const posts: BlogPost[] = postsFromSanity.map((p: SanityPost) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary ? p.summary.substring(0, 150) + '...' : 'No summary available.',
    publishDate: p.publishDate,
    tags: p.tags || [],
    imageUrl: p.imageUrl,
  }));

  return (
    <div className="bg-[var(--color-background)] py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-[0.3em] mb-4">
            The Captain&apos;s Journal
          </h2>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
            Travel Log & Magic Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-main)] opacity-80 font-medium">
            Discover trip reports, hidden magical gems, and maritime reviews from our latest voyages.
          </p>
        </div>
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
