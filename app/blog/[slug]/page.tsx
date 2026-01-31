import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - GV Travel`,
    description: post.summary,
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

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
            <time dateTime={post.publishDate} className="text-zinc-500">
              {new Date(post.publishDate).toLocaleDateString()}
            </time>
            {post.tags.map((tag) => (
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

        <div className="mt-10 max-w-2xl text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-8">{post.summary}</p>
          <div className="mt-6 space-y-6">
            <p>
              (This is a placeholder for the blog content. In a real application, this would be rendered from MDX or a
              CMS.)
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <div className="my-10 rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-8 text-center ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800">
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
    </div>
  );
}
