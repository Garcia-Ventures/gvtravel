function assertValue(v: string | undefined, name: string, fallback?: string): string {
  if (v === undefined || v.trim() === '') {
    if (fallback) {
      console.warn(`⚠️ Warning: Missing environment variable ${name}. Using fallback: ${fallback}`);
      return fallback;
    }
    throw new Error(`Missing or empty environment variable: ${name}`);
  }

  let value = v.trim();
  // Handle common configuration errors where quotes are included in the env var value
  if ((value.startsWith('"') || value.startsWith("'")) && (value.endsWith('"') || value.endsWith("'"))) {
    value = value.slice(1, -1).trim();
  }

  return value;
}

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-31';

export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'NEXT_PUBLIC_SANITY_DATASET', 'production');

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'gxuf40vg',
);
