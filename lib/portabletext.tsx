import { Text } from '@gv-tech/ui-web';
import { PortableTextComponents } from '@portabletext/react';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <Text
        as="h1"
        variant="h1"
        className="mt-12 mb-4 font-serif font-bold tracking-tight text-[var(--color-text-main)] first:mt-0"
      >
        {children}
      </Text>
    ),
    h2: ({ children }) => (
      <Text
        as="h2"
        variant="h2"
        className="mt-10 mb-4 font-serif font-bold tracking-tight text-[var(--color-text-main)] first:mt-0"
      >
        {children}
      </Text>
    ),
    h3: ({ children }) => (
      <Text as="h3" variant="h3" className="mt-8 mb-3 font-serif font-bold text-[var(--color-text-main)] first:mt-0">
        {children}
      </Text>
    ),
    h4: ({ children }) => (
      <Text as="h4" variant="h4" className="mt-6 mb-2 font-serif font-bold text-[var(--color-text-main)] first:mt-0">
        {children}
      </Text>
    ),
    normal: ({ children }) => (
      <Text as="p" variant="body" className="mb-5 text-[var(--color-text-main)] opacity-85 last:mb-0">
        {children}
      </Text>
    ),
    blockquote: ({ children }) => (
      <Text
        as="blockquote"
        variant="body"
        className="my-6 border-l-4 border-[var(--color-primary-teal)]/30 pl-6 text-[var(--color-text-main)] italic opacity-75"
      >
        {children}
      </Text>
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
    bullet: ({ children }) => (
      <Text as="li" variant="body" className="text-base">
        {children}
      </Text>
    ),
    number: ({ children }) => (
      <Text as="li" variant="body" className="text-base">
        {children}
      </Text>
    ),
  },
};
