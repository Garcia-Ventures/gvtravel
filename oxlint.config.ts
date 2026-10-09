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
  rules: {
    // tsconfig uses `jsx: react-jsx` (automatic runtime) — React need not be in scope.
    'react/react-in-jsx-scope': 'off',
    // Next.js App Router requires side-effect CSS imports in layout files.
    'import/no-unassigned-import': ['warn', { allow: ['**/*.css'] }],
  },
  overrides: [
    {
      // Node CLI scripts: console output and __dirname/__filename are conventional.
      files: ['scripts/**/*.mjs', 'scripts/**/*.js', 'sanity.cli.ts'],
      rules: {
        'eslint/no-console': 'off',
        'eslint/no-underscore-dangle': ['warn', { allow: ['__filename', '__dirname'] }],
      },
    },
    {
      // Server/CLI helpers with intentional user-facing warnings.
      files: ['sanity/env.ts', 'sanity/lib/**', 'app/_blog/**/*.tsx'],
      rules: {
        'eslint/no-console': 'off',
      },
    },
  ],
});
