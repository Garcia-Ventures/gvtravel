import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-12 mb-4 font-serif text-4xl font-bold tracking-tight text-[var(--color-text-main)] first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 font-serif text-3xl font-bold tracking-tight text-[var(--color-text-main)] first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 font-serif text-2xl font-bold text-[var(--color-text-main)] first:mt-0">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 font-serif text-xl font-bold text-[var(--color-text-main)] first:mt-0">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-7 text-[var(--color-text-main)] opacity-85 last:mb-0">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[var(--color-primary-teal)]/30 pl-6 text-[var(--color-text-main)] italic opacity-75">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[var(--color-text-main)]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          className="text-[var(--color-primary-teal)] underline decoration-[var(--color-primary-teal)]/30 underline-offset-2 transition-colors hover:decoration-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-outside list-disc space-y-2 pl-6 text-[var(--color-text-main)] opacity-85">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-outside list-decimal space-y-2 pl-6 text-[var(--color-text-main)] opacity-85">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base leading-7">{children}</li>,
    number: ({ children }) => <li className="text-base leading-7">{children}</li>,
  },
};
