import { Reveal } from "@/app/components/Reveal";
import { ProjectCard } from "@/app/components/ProjectCard";
import { WEB_PROJECTS, DESKTOP_PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <Reveal as="p" className="eyebrow">
          A workshop of things I make
        </Reveal>
        <Reveal as="h1" delay={40}>
          Small, honest apps, grown one at a time.
        </Reveal>
        <Reveal as="p" className="lede" delay={80}>
          This is where my personal software lives. Each one started as a small itch I
          wanted to scratch, and I built it end to end and kept tinkering until it felt
          good to use.
        </Reveal>
        <Reveal className="hero-cta" delay={120}>
          <a className="btn btn-primary" href="#web">
            Browse the projects
          </a>
          <a className="btn btn-ghost" href={SITE.portfolioUrl}>
            A little about me →
          </a>
        </Reveal>
      </section>

      <section className="group" id="web">
        <Reveal className="group-head">
          <h2>Web apps</h2>
          <span className="rule" />
        </Reveal>
        <div className="grid">
          {WEB_PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="group" id="desktop">
        <Reveal className="group-head">
          <h2>Desktop apps</h2>
          <span className="rule" />
        </Reveal>
        <div className="grid">
          {DESKTOP_PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot-card">
        <div>
          <h3>Curious about the person behind the potatoes?</h3>
          <p>
            These are the things I make on the side. If you would like to know a bit
            more about me, my portfolio has my background, my work, and how to get in
            touch.
          </p>
        </div>
        <a className="btn btn-primary" href={SITE.portfolioUrl}>
          Visit my portfolio →
        </a>
      </div>
      <div className="foot-meta">
        <span>Potato Projects, made by me, {SITE.maker}</span>
        <span>
          <a href={SITE.portfolioUrl}>Portfolio</a> &nbsp;·&nbsp;{" "}
          <a href={SITE.github} target="_blank" rel="noopener">
            GitHub
          </a>{" "}
          &nbsp;·&nbsp; <a href={`mailto:${SITE.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
