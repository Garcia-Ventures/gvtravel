'use client';

import { useEffect } from 'react';

export function PlausibleProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Dynamically import Plausible to ensure it only runs on the client
    import('@plausible-analytics/tracker').then((Plausible) => {
      Plausible.init({
        domain: 'gv-travel.com',
        endpoint: 'https://stats.garciaericn.com/api/event',
        autoCapturePageviews: true,
        formSubmissions: true,
        outboundLinks: true,
      });
    });
  }, []);

  return <>{children}</>;
}
