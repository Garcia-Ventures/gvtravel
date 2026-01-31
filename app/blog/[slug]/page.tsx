import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries';

import { SanityPost } from '@/lib/types';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - GV Travel`,
    description: post.summary || `Read about ${post.title}`,
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_QUERY);
  return posts.map((post: SanityPost) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-x-4 text-xs">
            {post.publishDate && (
              <time dateTime={post.publishDate} className="text-zinc-500">
                {new Date(post.publishDate).toLocaleDateString()}
              </time>
            )}
            {post.tags &&
              post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="relative z-10 rounded-full bg-zinc-50 px-3 py-1.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        {post.imageUrl && (
          <div className="mt-10 aspect-[16/9] w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 object-cover sm:aspect-[2/1] overflow-hidden relative">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <div className="mt-10 max-w-2xl text-zinc-700 dark:text-zinc-300 prose dark:prose-invert">
          {post.body ? <PortableText value={post.body} /> : <p className="text-lg leading-8">{post.summary}</p>}

          <div className="my-10 rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-8 text-center ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800 not-prose">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Inspired by this trip?</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Let us help you plan a similar adventure for your family.
            </p>
            <Link
              href="/start-planning"
              className="mt-6 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
