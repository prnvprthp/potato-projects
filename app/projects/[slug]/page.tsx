import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, getProject, STATUS_LABEL, platformLabel } from "@/lib/projects";
import { ProjectIcon } from "@/app/components/ProjectIcon";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found · Potato Projects" };
  return {
    title: `${project.name} · Potato Projects`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="wrap">
      <article className="detail" style={{ ["--accent" as string]: project.accent }}>
        <Link className="back" href="/">
          ← All projects
        </Link>

        <div className="d-head">
          <ProjectIcon project={project} />
          <div>
            <h1>{project.name}</h1>
            <div className="d-sub">
              {platformLabel(project)}
              <span className={`dot ${project.status}`} />
              <span style={{ color: "var(--accent)" }}>
                {STATUS_LABEL[project.status]}
              </span>
              {project.version ? <span>· {project.version}</span> : null}
            </div>
          </div>
        </div>

        <div className="d-body">
          {project.long.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="d-label">Inside</div>
        <ul className="hl">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="d-label">Built with</div>
        <div className="stack">
          {project.stack.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="d-actions">
          {project.links.map((l, i) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={i}
                className={`btn ${i === 0 ? "btn-accent" : "btn-ghost"}`}
                href={l.href}
                style={i === 0 ? { background: "var(--accent)" } : undefined}
                {...(external ? { target: "_blank", rel: "noopener" } : {})}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </article>
    </main>
  );
}
