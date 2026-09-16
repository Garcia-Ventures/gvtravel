import { oxfmtConfig } from '@gv-tech/oxc-config/oxfmt';
import { defineConfig, type OxfmtConfig } from 'oxfmt';

/**
 * Oxfmt configuration. Uses @gv-tech/oxc-config for sensible defaults (mirrors @eng618/prettier-config). For more
 * information on configuration options, see: https://github.com/Garcia-Ventures/oxc-config
 */
export default defineConfig({ ...(oxfmtConfig as unknown as OxfmtConfig) });
