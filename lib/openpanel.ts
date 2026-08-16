export type OpenPanelProps = Record<string, string | number | boolean | null | undefined>;

type OpenPanelFunction = (action: string, ...args: unknown[]) => void;

function getOpenPanel(): OpenPanelFunction | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }
  const win = window as unknown as { op?: OpenPanelFunction };
  return typeof win.op === 'function' ? win.op : undefined;
}

/**
 * Fire a custom OpenPanel event on the client.
 */
export function trackEvent(name: string, props?: OpenPanelProps): void {
  const op = getOpenPanel();
  if (op) {
    op('track', name, props ?? {});
  }
}

/**
 * Set user profile metadata in OpenPanel on the client.
 */
export function setProfile(profile: Record<string, unknown>): void {
  const op = getOpenPanel();
  if (op) {
    op('setProfile', profile);
  }
}

/**
 * Identify a user in OpenPanel on the client.
 */
export function identifyUser(profileId: string): void {
  const op = getOpenPanel();
  if (op) {
    op('identify', { profileId });
  }
}

/**
 * Clear the current profile in OpenPanel on the client.
 */
export function clearProfile(): void {
  const op = getOpenPanel();
  if (op) {
    op('clearProfile');
  }
}
