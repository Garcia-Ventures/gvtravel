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
 * Track Call-To-Action button clicks.
 */
export function trackCtaClick(params: { location: string; label: string; target?: string }): void {
  trackEvent('cta_clicked', {
    location: params.location,
    label: params.label,
    target: params.target,
  });
}

/**
 * Track Header/Footer or internal navigation link clicks.
 */
export function trackNavigationClick(params: { location: string; label: string; target?: string }): void {
  trackEvent('navigation_link_clicked', {
    location: params.location,
    label: params.label,
    target: params.target,
  });
}

/**
 * Track theme switch interactions.
 */
export function trackThemeToggle(theme: string): void {
  trackEvent('theme_toggled', { theme });
}

/**
 * Track email mailto clicks.
 */
export function trackEmailClick(location: string, emailTarget = 'lindsay@gv-travel.com'): void {
  trackEvent('email_link_clicked', {
    location,
    email_target: emailTarget,
  });
}

/**
 * Track when a user begins interacting with the trip inquiry form.
 */
export function trackInquiryStarted(entryPoint = 'start_planning_page'): void {
  trackEvent('trip_inquiry_started', { entry_point: entryPoint });
}

/**
 * Track successful trip inquiry submission with sanitized non-PII properties.
 */
export function trackInquirySubmitted(data: {
  trip_type: string;
  budget: string;
  has_details: boolean;
  consent: boolean;
}): void {
  trackEvent('trip_inquiry_submitted', {
    trip_type: data.trip_type,
    budget: data.budget,
    has_details: data.has_details,
    consent: data.consent,
  });
}

/**
 * Track when a trip inquiry form submission fails.
 */
export function trackInquiryFailed(): void {
  trackEvent('trip_inquiry_failed', { has_errors: true });
}

/**
 * Track when a user resets/restarts the trip inquiry form after success.
 */
export function trackInquiryRestarted(): void {
  trackEvent('trip_inquiry_restarted');
}

/**
 * Track 404 page impression.
 */
export function trackNotFoundViewed(path?: string): void {
  trackEvent('not_found_viewed', {
    path: path || (typeof window !== 'undefined' ? window.location.pathname : undefined),
  });
}

/**
 * Track recovery link clicks from the 404 page.
 */
export function trackNotFoundRecovered(action: string): void {
  trackEvent('not_found_recovered', { action });
}

export type AnalyticsEnvironment = {
  environment: 'production' | 'preview' | 'development';
  deployment_type: string;
  branch: string;
  host: string;
  commit_sha?: string;
};

/**
 * Determine the runtime deployment environment, branch, and host.
 */
export function getAnalyticsEnvironment(): AnalyticsEnvironment {
  const branchEnv = process.env.NEXT_PUBLIC_CF_PAGES_BRANCH || '';
  const commitSha = process.env.NEXT_PUBLIC_CF_PAGES_COMMIT_SHA || '';
  const isDev = process.env.NODE_ENV === 'development';

  if (typeof window === 'undefined') {
    return {
      environment: isDev ? 'development' : 'production',
      deployment_type: isDev ? 'local_ssr' : 'static_export',
      branch: branchEnv || 'unknown',
      host: 'server',
      ...(commitSha ? { commit_sha: commitSha.slice(0, 7) } : {}),
    };
  }

  const hostname = window.location.hostname;

  let environment: 'production' | 'preview' | 'development' = 'production';
  let deploymentType = 'custom_domain';

  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.local')) {
    environment = 'development';
    deploymentType = 'localhost';
  } else if (hostname === 'gv-travel.com' || hostname === 'www.gv-travel.com') {
    environment = 'production';
    deploymentType = 'production_custom_domain';
  } else if (hostname.endsWith('.pages.dev')) {
    if (hostname.startsWith('develop.') || branchEnv === 'develop') {
      environment = 'preview';
      deploymentType = 'develop_branch_preview';
    } else if (hostname.startsWith('main.') || branchEnv === 'main') {
      environment = 'production';
      deploymentType = 'main_pages_dev';
    } else {
      environment = 'preview';
      deploymentType = 'pr_branch_preview';
    }
  }

  const inferredBranch =
    branchEnv ||
    (hostname.startsWith('develop.')
      ? 'develop'
      : hostname === 'gv-travel.com' || hostname.startsWith('main.')
        ? 'main'
        : 'unknown');

  return {
    environment,
    deployment_type: deploymentType,
    branch: inferredBranch,
    host: hostname,
    ...(commitSha ? { commit_sha: commitSha.slice(0, 7) } : {}),
  };
}

/**
 * Set global properties across all OpenPanel tracking calls.
 */
export function setGlobalProperties(properties: Record<string, unknown>): void {
  const op = getOpenPanel();
  if (op) {
    op('setGlobalProperties', properties);
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
