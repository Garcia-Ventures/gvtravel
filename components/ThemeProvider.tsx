'use client';

import { ThemeProvider as GVThemesProvider } from '@gv-tech/design-system';
import { type ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <GVThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </GVThemesProvider>
  );
}
