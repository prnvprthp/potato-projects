<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Potato Projects

The umbrella hub for Pranav's personal software suite (Days, Kinship, Marquee, Lift,
Storied, FlightSight, Kept, Squawk, Turnstile). Static-exported Next.js front door that
showcases every project and cross-links the personal portfolio. Dev port 3000.

- **Single source of truth:** `lib/projects.ts`. Add a project = add one object there.
  A new app is invisible on the hub until this exists.
- **Static export** (`output: 'export'`) → deploys to Vercel as static assets. Detail
  routes rely on `generateStaticParams`.
- **Real app icons** live in `public/icons/`. Add one and point the project's `icon`
  field at it; projects with no icon fall back to an accent monogram tile.
- **Download buttons depend on PUBLIC GitHub release assets**
  (`github.com/prnvprthp/squawk/releases/latest/download/...`). This is why the squawk
  repo must stay public even though its source is never committed there — making it
  private breaks these links.
- Fill the real URLs in `lib/projects.ts` (`liveUrl`) and `PORTFOLIO_URL` in `lib/site.ts`
  as apps ship.

## Mobile pass — pending

Not yet checked at phone width (noted 21 Sep 2026).

Marquee was swept at 375px on 19 Sep 2026 and **five of six surfaces were broken**: a tab
scrolled off the edge of the screen and was unreachable, a primary button was clipped
mid-word, a card was sized so all its actions sat below the fold, and a dialog was reduced
to a 200px window over 900px of content. Every fix was one or two responsive classes. All
of it had been built while looking at a desktop viewport — which is how this app was built
too, so assume the same until someone checks.

Do it by looking, not measuring: screenshots caught every one of those, the measurements
caught none. The three ways the usual checks lie are listed under "Working here" in the
root `AGENTS.md`.
