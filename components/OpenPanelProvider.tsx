import { OpenPanelComponent } from '@openpanel/nextjs';

export function OpenPanelProvider() {
  const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID || 'e6e37bb6-cfe2-4873-ab58-d5c8d63e1e1d';
  const apiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL || 'https://openpanel.gventureshq.com/api';

  return (
    <OpenPanelComponent
      clientId={clientId}
      apiUrl={apiUrl}
      trackScreenViews={true}
      trackOutgoingLinks={true}
      trackAttributes={true}
    />
  );
}
