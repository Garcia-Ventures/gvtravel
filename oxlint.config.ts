import { next } from '@gv-tech/oxc-config/next';
import { defineConfig } from 'oxlint';

/**
 * Oxlint configuration for Next.js projects. Uses @gv-tech/oxc-config for sensible defaults. For more information on
 * configuration options, see: https://github.com/Garcia-Ventures/oxc-config
 */
export default defineConfig({ extends: [next] });
