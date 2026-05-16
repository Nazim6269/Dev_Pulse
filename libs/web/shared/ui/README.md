# web-shared-ui

Transitional Nx library for the shared frontend UI kit.

Current state:
- Public API lives at `libs/web/shared/ui/src/index.ts`
- Implementations still live in `components/ui/*`
- Existing imports remain untouched during this phase

Next migration step:
- Move individual UI implementations from `components/ui/*` into this library
- Replace old imports with `@devpulse/web-shared-ui`
