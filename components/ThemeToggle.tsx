'use client';

import { useIsMounted } from '@/lib/hooks';
import { ThemeToggle as DesignSystemThemeToggle } from '@gv-tech/design-system';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="w-9 h-9" />;
  }

  return <DesignSystemThemeToggle variant="ternary" customTheme={theme} onThemeChange={setTheme} />;
}
