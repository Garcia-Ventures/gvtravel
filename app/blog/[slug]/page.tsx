import { SanityPost } from '@/lib/types';
import { client } from '@/sanity/lib/client';
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(POSTS_QUERY);

    // If no posts exist yet, we must provide at least one static path
    // to satisfy the "output: export" requirement in Next.js.
    if (!posts || !Array.isArray(posts) || posts.length === 0) {
      return [{ slug: 'empty' }];
    }

    return posts.map((post: SanityPost) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch posts for static generation:', error);
    // Fallback path to ensure build doesn't fail
    return [{ slug: 'empty' }];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - GV Travel`,
    description: post.summary || `Read about ${post.title}`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Handle the 'empty' fallback slug used for Next.js static export
  if (slug === 'empty') {
    notFound();
  }

  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-background)] py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
            {post.tags &&
              post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="relative z-10 rounded-full bg-[var(--color-primary-teal)]/10 px-3 py-1.5 font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-tighter text-[10px]"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        {post.imageUrl && (
          <div className="mt-10 aspect-[16/9] w-full rounded-2xl bg-[var(--color-primary-teal)]/5 object-cover sm:aspect-[2/1] overflow-hidden relative border border-[var(--color-primary-teal)]/10">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="mt-10 max-w-2xl text-[var(--color-text-main)] opacity-80 prose dark:prose-invert">
          {post.body ? <PortableText value={post.body} /> : <p className="text-lg leading-8">{post.summary}</p>}

          <div className="my-10 rounded-2xl bg-[var(--color-primary-teal)]/5 p-8 text-center ring-1 ring-inset ring-[var(--color-primary-teal)]/10 not-prose border border-[var(--color-primary-teal)]/10">
            <h3 className="text-lg font-serif font-bold text-[var(--color-text-main)]">Inspired by this voyage?</h3>
            <p className="mt-2 text-[var(--color-text-main)] opacity-70">
              Let our concierge help you chart a similar magical journey for your family.
            </p>
            <Link
              href="/start-planning"
              className="mt-6 inline-block rounded-full bg-[var(--color-accent-magic)] px-6 py-2 text-sm font-bold text-[var(--color-cta-text)] shadow-xl transition-all hover:scale-105 hover:bg-[var(--color-secondary-coral)]"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
