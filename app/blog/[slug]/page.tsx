import { BlogPost } from '@/components/BlogPost';
import { SanityPost } from '@/lib/types';
import { client } from '@/sanity/lib/client';
import { POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';
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

  return <BlogPost post={post} />;
}
