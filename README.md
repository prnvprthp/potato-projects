# Potato Projects

The umbrella hub for my personal software: Days, Kinship, Marquee, Lift, Storied,
FlightSight, Kept, Squawk, and Turnstile. A static Next.js site that showcases each
project and links back to my portfolio.

**Live:** https://prnvprthp.github.io/potato-projects/

## Develop

```bash
npm install
npm run dev
```

Local dev runs at the root (`http://localhost:3009`), no basePath.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages (served under `/potato-projects/`). The
`basePath` in `next.config.js` is applied automatically in production builds only.

## Adding or editing a project

Everything is driven by `lib/projects.ts`. Add one object to the `PROJECTS` array,
drop an icon in `public/icons/` and point the `icon` field at it (or omit it to use
an accent monogram), and the card plus its `/projects/<slug>` detail page appear.
