export type PlausibleProps = Record<string, string>;

/** Fire a custom Plausible goal event. Requires PlausibleProvider to be mounted first. */
export function trackEvent(name: string, props?: PlausibleProps): void {
  // Prevent server-side execution and avoid importing the tracker on the server.
  if (typeof window === 'undefined') {
    return;
  }

  import('@plausible-analytics/tracker').then(({ track }) => {
    track(name, { props: props ?? {} });
  });
}
