import { loadEnvConfig } from '@next/env';
import { defineCliConfig } from 'sanity/cli';

// Load environment variables from .env.local
const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(process.cwd(), dev, { info: () => {}, error: console.error });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

// We apply the same quote-stripping logic here manually to avoid circular dependencies or import issues in CLI
function cleanValue(v: string | undefined): string | undefined {
  if (!v) return v;
  let value = v.trim();
  if ((value.startsWith('"') || value.startsWith("'")) && (value.endsWith('"') || value.endsWith("'"))) {
    value = value.slice(1, -1);
  }
  return value;
}

export default defineCliConfig({
  api: {
    projectId: cleanValue(projectId),
    dataset: cleanValue(dataset),
  },
  deployment: {
    appId: 'asroa8slllva5afmhbur4w81',
  },
});
