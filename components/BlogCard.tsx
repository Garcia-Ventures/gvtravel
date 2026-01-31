import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        {post.imageUrl && (
          <div className="aspect-[16/9] w-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden">
            <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
          </div>
        )}
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.publishDate} className="text-zinc-500">
            {new Date(post.publishDate).toLocaleDateString()}
          </time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="relative z-10 rounded-full bg-zinc-50 px-3 py-1.5 font-medium text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{post.summary}</p>
        </div>
      </div>
    </article>
  );
}
