# Potato Projects — Project Status & Handoff

_Last updated: 2026-07-30_

The umbrella hub and front door for the whole suite. This doc is the
pick-up-where-we-left-off reference for any coding agent or human.

---

## ⏯️ Pick up here (current state)

- **Local / committed:** v1.0.0
- **Deployed to prod:** GitHub Pages (static export) — https://prnvprthp.github.io/potato-projects/
- **To deploy:** `git push` to `main` → `.github/workflows/deploy.yml` builds and publishes to Pages. No database, no migrations.
- **Last thing built:** project registry + detail routes + download buttons

### Immediate next steps
1. Fill real `liveUrl` values in `lib/projects.ts` as apps ship.
2. Flip each project's `status` from `build` to `live` when it deploys.

---

## ⚠️ Critical constraints (READ FIRST)

1. **`lib/projects.ts` is the single source of truth.** Adding a project = adding one
   object. An app is invisible on the hub until it is in there.
2. **Static export** (`output: 'export'`) — detail routes depend on `generateStaticParams`.
   No server-side data fetching at request time.
3. **Download buttons depend on PUBLIC GitHub release assets.** This is the reason the
   `squawk` repo must stay public even though its source is never committed there.
   Making it private breaks every download link here.
4. **Zero-cost rule.** No paid services.
5. No database — this app never touches the shared Postgres.

## How to run locally

```bash
npm install
npm run dev          # next dev --port 3000
```
