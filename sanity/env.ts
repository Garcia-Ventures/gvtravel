function assertValue(v: string | undefined, name: string): string {
  if (v === undefined || v.trim() === '') {
    throw new Error(`Missing or empty environment variable: ${name}`);
  }

  let value = v.trim();
  // Handle common configuration errors where quotes are included in the env var value
  if ((value.startsWith('"') || value.startsWith("'")) && (value.endsWith('"') || value.endsWith("'"))) {
    value = value.slice(1, -1);
  }

  return value;
}

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-31';

export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'NEXT_PUBLIC_SANITY_DATASET');

export const projectId = assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'NEXT_PUBLIC_SANITY_PROJECT_ID');
