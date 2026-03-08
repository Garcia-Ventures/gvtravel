import { track } from '@plausible-analytics/tracker';

export type PlausibleProps = Record<string, string>;

/** Fire a custom Plausible goal event. Requires PlausibleProvider to be mounted first. */
export function trackEvent(name: string, props?: PlausibleProps): void {
  track(name, { props: props ?? {} });
}
