import { next } from '@gv-tech/oxc-config/next';
import { defineConfig, type OxlintConfig } from 'oxlint';

/**
 * Oxlint configuration for Next.js projects. Uses @gv-tech/oxc-config for sensible defaults. For more information on
 * configuration options, see: https://github.com/Garcia-Ventures/oxc-config
 */
export default defineConfig({
  extends: [next as unknown as OxlintConfig],
  // Vendored first-party analytics script (see components/OpenPanelProvider.tsx).
  // Minified upstream code trips lint rules; ignorePatterns from the extended
  // preset don't propagate, so ignore explicitly here.
  ignorePatterns: ['public/op1*.js'],
});
