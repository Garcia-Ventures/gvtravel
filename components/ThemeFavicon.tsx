'use client';

import { useIsMounted } from '@/lib/hooks';
import { useTheme } from '@gv-tech/design-system';

export function ThemeFavicon() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <link rel="icon" href="/favicon-light.svg" sizes="any" />;
  }

  const faviconPath = resolvedTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';

  return <link rel="icon" href={faviconPath} sizes="any" />;
}
