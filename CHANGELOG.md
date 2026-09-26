# Changelog

All notable changes to **Potato Projects**. Newest first.

This file was started on 30 Jul 2026, after the project was already underway, so
the first entry below summarises everything built up to that point rather than
pretending each piece landed separately. Every release from here on gets its own
entry, bumped alongside `lib/version.ts` and `package.json`.

---

## 1.1.0 — *26 Sep 2026*

### Added
- **Faraway** (v0.5.0): a live wall of famous places, as a screensaver for macOS and Fire TV,
  with download buttons wired to its public GitHub release assets and its own icon.

---

## 1.0.0 — *30 Jul 2026*

### Added
- Static-exported front door for the whole suite, driven entirely by
  `lib/projects.ts` as the single source of truth — adding a project is one
  object.
- Per-project detail routes via `generateStaticParams`, real app icons with an
  accent-monogram fallback, and download buttons wired to GitHub release assets.
