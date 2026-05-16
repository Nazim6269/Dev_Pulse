<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Codex Architecture

Agent assets are being migrated into `codex/` for a cleaner, scalable layout.

### Locations

- `codex/skills/`: executable skill entrypoints such as `SKILL.md`
- `codex/rules/`: reusable rule packs and guardrails
- `codex/context/`: supporting references, metadata, licenses, and long-form docs
- `codex/workflows/`: multi-step agent playbooks

### Compatibility

- `.agents/` remains in place as a compatibility mirror during migration.
- New agent-related work should prefer `codex/` over `.agents/`.
- Do not delete `.agents/` until parity has been verified and downstream consumers are updated.

### Current Mapping

- `frontend-design`, `next-best-practices`, `test-driven-development`, `vercel-react-best-practices`, and `web-design-guidelines` now have `codex/skills/` entries.
- `vercel-react-best-practices` rule documents live in `codex/rules/vercel-react-best-practices/`.
- Supporting references for the migrated skills live under `codex/context/`.
