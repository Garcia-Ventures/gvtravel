# AGENTS.md

## Commands (bun; do not use npm/yarn)

- `bun install --frozen-lockfile` — install
- `bun dev` / `bun run build` / `bun start` — dev / build / serve
- `bun validate` — full gate: `oxfmt --check` → `oxlint` → `tsc --noEmit` → TripInquiryForm regression checks → `next build`. Use `bun validate --fix` to auto-fix format/lint.
- Focused: `bun run format:ci`, `bun run lint`, `npx tsc --noEmit`
- Pre-commit runs `lint-staged` (`oxfmt --write` + `oxlint --fix`). No prettier/eslint config exists — never run `prettier`/`eslint`.

## Toolchain quirks (hard-earned)

- Formatter/linter come from `@gv-tech/oxc-config` (`oxfmt.config.ts`, `oxlint.config.ts`). Its local `OxlintConfig`/`OxfmtConfig` types diverge from `oxlint`/`oxfmt` `defineConfig` types, so both config files need the existing `as unknown as` casts. Removing them breaks `tsc` and `next build`.
- `ignorePatterns` from the extended preset do **not** propagate to oxlint. Any new vendored/ignored file needs an explicit entry in the local `oxlint.config.ts` `ignorePatterns`.
- `@/*` maps to repo root (`./*`), not `./src/*`. `tsconfig` also remaps `@sanity/image-url` and `@gv-tech/ui-web`/`ui-core` into `node_modules` — respect those instead of "fixing" imports.

## Architecture

- Next.js App Router, **static export** (`output: 'export'`, `images.unoptimized`). No route handlers, rewrites, middleware, or server code — `public/` is copied verbatim to `out/`.
- `app/` routes; `components/` UI; `lib/` (`utils.ts` shared CTA classes, `openpanel.ts` analytics helpers, `data.ts`, `hooks.ts`); `sanity/` CMS schemas/queries; `scripts/validate.mjs` validation + regression guards.
- UI system (`@gv-tech/ui-web` first — see `.github/copilot-instructions.md`): no raw `button/input/select/textarea/label/dialog` when a `ui-web` equivalent exists; headings/body via `Text` with `as`; `Card`+`CardContent`+`CardFooter`+`Button` composition; design tokens only, no hardcoded colors.
- Forms: `Form`/`FormField`/`FormItem`/`FormControl`/`FormLabel`/`FormMessage` via `react-hook-form` (`form.handleSubmit(...)`); Formspree gets a **value payload** (`'trip-type'`, `consent ? 'yes' : 'no'`), never the DOM event. `scripts/validate.mjs` regex-guards this wiring — preserve/update guards when submit code changes.

## Analytics (OpenPanel, first-party)

- `components/OpenPanelProvider.tsx` uses `scriptUrl="/op1.js"` with `public/op1.js` + `public/op1-replay.js` **vendored** from `https://openpanel.dev` pinned to the `@openpanel/nextjs` version (adblockers block the CDN). Keep the `op1*` filenames — the SDK resolves replay via `src.replace(".js", "-replay.js")`.
- **When bumping `@openpanel/nextjs`, re-vendor:** `curl 'https://openpanel.dev/op1.js?v=<ver>' -o public/op1.js` and same for `op1-replay.js`. Vendored files are ignored by oxfmt/tsc via `public/**`; the explicit `public/op1*.js` ignore in `oxlint.config.ts` is required (see above).
- Events go to `NEXT_PUBLIC_OPENPANEL_API_URL` (fallback `https://openpanel.gventureshq.com/api`); client ID falls back to the hardcoded default in the provider.

## Env / CI

- Build env (see CI `build` job + `next.config.ts` CF Pages mapping): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_FORMSPREE_ID`. Missing Sanity vars only warn with fallbacks; OpenPanel has code fallbacks.
- Branches: `main` (production) / `develop` (integration); feature branches target `develop`. CI runs Quality (`format:ci` + `lint`) and Build jobs.
