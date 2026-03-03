# Copilot Coding Instructions

## UI System Rule (Mandatory)

- Always use `@gv-tech/ui-web` components first for UI work.
- Do not introduce raw HTML UI primitives (`button`, `input`, `select`, `textarea`, `label`, `dialog`, etc.) when a `ui-web` equivalent exists.
- Do not build custom UI wrappers that duplicate existing `ui-web` components.

## Typography Rule

- Prefer `Text` for page/section headings and body copy where practical.
- Keep semantic structure with `Text` via `as` props (`h1`, `h2`, `p`, etc.).
- Use raw heading/paragraph tags only when required by third-party renderers or strict semantic constraints.

## Composition Rule

- Prefer explicit action composition with `Card`, `CardContent`, `CardFooter`, and `Button` instead of making entire containers clickable.
- Use `NavigationMenu`/`Sheet`/`Tooltip` primitives for navigation and overlays.

## Styling Rule

- Reuse shared style constants/utilities (for example CTA classes in [lib/utils.ts](../lib/utils.ts)) instead of repeating large class strings.
- Use existing design tokens and theme variables; do not hardcode new colors or ad hoc design tokens.

## Forms Rule

- Use `Form`, `FormField`, `FormItem`, `FormControl`, `FormLabel`, `FormMessage` for forms.
- Keep submit wiring through `react-hook-form` (`form.handleSubmit(...)`).
- For Formspree integration, submit value payloads (not DOM events).

## Validation Rule

- After UI edits, run validation (`node scripts/validate.mjs` or equivalent checks).
- Preserve and update regression guards in [scripts/validate.mjs](../scripts/validate.mjs) when submit wiring or payload shape changes.

## Exceptions

- If no `ui-web` primitive exists for a needed pattern, keep implementation minimal and accessible.
- Document exception rationale in the PR description or commit message.
