import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-24 text-center dark:bg-zinc-950 sm:py-32 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">Thank You!</h1>
      <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        We have received your trip inquiry and will be in touch shortly.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/"
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Back to Home
        </Link>
        <Link href="/blog" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Read our travel blog <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
