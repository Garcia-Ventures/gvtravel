'use client';

import { useTheme } from 'next-themes';
import { useIsMounted } from '@/lib/hooks';

export function ThemeFavicon() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <link rel="icon" href="/favicon-light.svg" sizes="any" />;
  }

  const faviconPath = resolvedTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';

  return <link rel="icon" href={faviconPath} sizes="any" />;
}
