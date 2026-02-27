'use client';

import { useIsMounted } from '@/lib/hooks';
import { ThemeToggle as GVThemeToggle, useTheme } from '@gv-tech/ui-web';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <div className="h-9 w-9" />;
  }

  return <GVThemeToggle variant="ternary" customTheme={theme} onThemeChange={setTheme} />;
}
