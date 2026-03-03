import { BlogList } from '@/components/BlogList';
import { BlogPost, SanityPost } from '@/lib/types';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { Text } from '@gv-tech/ui-web';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - GV Travel',
  description: 'Family travel tips, cruise insights, and budget-friendly planning ideas from real trips.',
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
    <div className="bg-[var(--color-background)] py-24 transition-colors duration-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h2"
            variant="overline"
            className="mb-4 font-serif font-bold tracking-[0.3em] text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]"
          >
            Travel Tips & Real Experiences
          </Text>
          <Text
            as="h1"
            variant="h1"
            className="font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl"
          >
            Family Travel Notes
          </Text>
          <Text
            as="p"
            variant="body"
            className="mt-6 text-lg leading-8 font-medium text-[var(--color-text-main)] opacity-80"
          >
            Browse practical planning tips, honest reviews, and destination ideas from a homeschool mom who loves
            quality travel on a realistic budget.
          </Text>
        </div>
        <BlogList posts={posts} />
      </div>
    </div>
  );
}
