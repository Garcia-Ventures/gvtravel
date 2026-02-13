import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-serif font-bold tracking-tight text-[var(--color-text-main)] mt-12 mb-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-serif font-bold tracking-tight text-[var(--color-text-main)] mt-10 mb-4 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-serif font-bold text-[var(--color-text-main)] mt-8 mb-3 first:mt-0">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-serif font-bold text-[var(--color-text-main)] mt-6 mb-2 first:mt-0">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-7 text-[var(--color-text-main)] opacity-85 mb-5 last:mb-0">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--color-primary-teal)]/30 pl-6 my-6 italic text-[var(--color-text-main)] opacity-75">
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
          className="text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] underline underline-offset-2 decoration-[var(--color-primary-teal)]/30 hover:decoration-[var(--color-primary-teal)] transition-colors"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside pl-6 space-y-2 my-5 text-[var(--color-text-main)] opacity-85">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 space-y-2 my-5 text-[var(--color-text-main)] opacity-85">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base leading-7">{children}</li>,
    number: ({ children }) => <li className="text-base leading-7">{children}</li>,
  },
};
