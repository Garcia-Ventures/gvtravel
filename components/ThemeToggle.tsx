'use client';

import { useIsMounted } from '@/lib/hooks';
import { ThemeToggle as GVThemeToggle, useTheme } from '@gv-tech/design-system';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="w-9 h-9" />;
  }

  return <GVThemeToggle variant="ternary" customTheme={theme} onThemeChange={setTheme} />;
}
