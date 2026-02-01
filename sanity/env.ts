function assertValue<T>(v: T | undefined, name: string): T {
  if (v === undefined || v === '') {
    throw new Error(`Missing or empty environment variable: ${name}`);
  }

  return v;
}

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-31';

export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'NEXT_PUBLIC_SANITY_DATASET');

export const projectId = assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'NEXT_PUBLIC_SANITY_PROJECT_ID');
