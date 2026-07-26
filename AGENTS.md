<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Potato Projects

The umbrella hub for Pranav's personal software suite (Days, Kinship, Marquee, Lift,
Storied, FlightSight, Kept, Squawk, Turnstile). Static-exported Next.js front door that
showcases every project and cross-links the personal portfolio.

- **Single source of truth:** `lib/projects.ts`. Add a project = add one object there.
- **Static export** (`output: 'export'`) → deploys to Vercel as static assets. Detail
  routes rely on `generateStaticParams`.
- **Real app icons** live in `public/icons/`. Add one and point the project's `icon`
  field at it; projects with no icon fall back to an accent monogram tile.
- Fill the real URLs in `lib/projects.ts` (`liveUrl`) and `PORTFOLIO_URL` in
  `lib/site.ts` as apps ship.
