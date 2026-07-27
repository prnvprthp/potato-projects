import type { Metadata } from "next";
import { Reveal } from "@/app/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology · Potato Projects",
  description:
    "How these apps are built, how I work, and how I think about your data and privacy.",
};

function StackGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="stack-group">
      <div className="label">{label}</div>
      <div className="stack">
        {items.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechnologyPage() {
  return (
    <main className="wrap">
      <article className="page">
        <Reveal as="p" className="eyebrow">
          How it is made
        </Reveal>
        <Reveal as="h1" delay={40}>
          The technology behind these
        </Reveal>
        <Reveal as="p" className="page-lede" delay={80}>
          A quick look under the hood: what these apps are built with, how I work, and
          how I think about your data. Written plainly, because I would want the same.
        </Reveal>

        <Reveal as="section" delay={40}>
          <h2>How it is built</h2>
          <p>
            Most of the web apps share the same foundation. Keeping them on one stack
            means I can move quickly and maintain them without much fuss. The two
            desktop apps are native, and the little hub you are reading right now is a
            plain static site.
          </p>
          <StackGroup
            label="Web apps"
            items={[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Supabase",
              "Drizzle",
              "Prisma",
            ]}
          />
          <StackGroup label="Desktop apps" items={["Swift", "SwiftUI"]} />
          <StackGroup
            label="Hosting and data"
            items={[
              "Vercel",
              "GitHub Pages",
              "TMDB",
              "ADS-B",
              "GTFS",
              "and other open sources",
            ]}
          />
        </Reveal>

        <Reveal as="section" delay={40}>
          <h2>Building with Claude</h2>
          <p>
            I build these on my own time, mostly for the joy of it. Along the way I
            lean on AI tools, including Claude and its command line, as a kind of pair
            programmer: for scaffolding, boilerplate, tracking down bugs, and talking
            an idea through out loud.
          </p>
          <p>
            It is a helpful assistant, not the author. The product decisions, the
            design, and the final say are mine, and anything that ships is something I
            have read and stand behind.
          </p>
        </Reveal>

        <Reveal as="section" delay={40}>
          <h2>Privacy</h2>
          <p>
            These are personal projects, and I try to treat your data the way I would
            want mine treated.
          </p>
          <ul className="notes">
            <li>
              Apps that need an account use standard authentication, and your data is
              scoped to you with database-level access rules, so one person cannot read
              another&apos;s.
            </li>
            <li>
              I do not sell your data, and I collect as little as an app needs in order
              to work.
            </li>
            <li>
              Some apps go further by design. Storied keeps your words on the server
              rather than sending them elsewhere, Squawk needs no account at all, and
              FlightSight reads your boarding pass on your own device.
            </li>
            <li>
              Each app has its own particulars, so if a detail matters to you, please
              just ask.
            </li>
          </ul>
        </Reveal>

        <Reveal as="section" delay={40}>
          <h2>A few honest disclaimers</h2>
          <ul className="notes">
            <li>
              These are hobby projects, built and looked after in my spare time. They
              come as they are, with no guarantees, and they may change or occasionally
              break.
            </li>
            <li>
              They are not affiliated with or endorsed by the services whose data they
              use. Marquee, for instance, uses the TMDB API but is not endorsed or
              certified by TMDB.
            </li>
            <li>
              Where an app shows live information, please treat it as a helpful estimate
              rather than an official source. For anything that truly matters, check the
              authoritative one.
            </li>
            <li>
              Other product names and logos belong to their respective owners.
            </li>
          </ul>
        </Reveal>

        <Reveal as="section" delay={40}>
          <h2>Questions</h2>
          <p>
            If anything here raises a question, I would genuinely be glad to hear from
            you. You can reach me at{" "}
            <a className="inline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </Reveal>
      </article>
    </main>
  );
}
