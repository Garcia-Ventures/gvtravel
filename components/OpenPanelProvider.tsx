'use client';

import { useIsMounted } from '@/lib/hooks';
import { getAnalyticsEnvironment } from '@/lib/openpanel';
import { OpenPanelComponent } from '@openpanel/nextjs';
import { useEffect } from 'react';

export function OpenPanelProvider() {
  const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID || 'e6e37bb6-cfe2-4873-ab58-d5c8d63e1e1d';
  const apiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL || 'https://openpanel.gventureshq.com/api';
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && typeof window !== 'undefined' && typeof window.op === 'function') {
      window.op('setGlobalProperties', getAnalyticsEnvironment());
    }
  }, [isMounted]);

  const initialEnv = getAnalyticsEnvironment();

  return (
    <OpenPanelComponent
      clientId={clientId}
      apiUrl={apiUrl}
      trackScreenViews={true}
      trackOutgoingLinks={true}
      trackAttributes={true}
      globalProperties={initialEnv}
    />
  );
}
