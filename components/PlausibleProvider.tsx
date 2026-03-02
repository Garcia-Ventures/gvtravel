'use client';

import * as Plausible from '@plausible-analytics/tracker';
import { useEffect } from 'react';

export function PlausibleProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize Plausible analytics
    Plausible.init({
      domain: 'gv-travel.com',
      endpoint: 'https://stats.garciaericn.com/api/event',
      autoCapturePageviews: true,
      formSubmissions: true,
      outboundLinks: true,
    });
  }, []);

  return <>{children}</>;
}
