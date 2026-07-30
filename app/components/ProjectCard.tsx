import Link from "next/link";
import type { Project } from "@/lib/projects";
import { STATUS_LABEL, liveUrl } from "@/lib/projects";
import { ProjectIcon } from "./ProjectIcon";

export function ProjectCard({ project }: { project: Project }) {
  // A live app should open the app. Routing every card through a detail page
  // first just puts a page of ours between you and the thing you clicked, so
  // the card goes straight there and "Details" stays available beside it.
  const live = liveUrl(project);
  const detailHref = `/projects/${project.slug}`;

  return (
    <div className="card" style={{ ["--accent" as string]: project.accent }}>
      <div className="card-top">
        <ProjectIcon project={project} />
        <span className="status">
          <span className={`dot ${project.status}`} />
          {STATUS_LABEL[project.status]}
        </span>
      </div>
      <h3>
        {/* The stretched link covers the whole card — see .card-stretch. */}
        {live ? (
          <a className="card-stretch" href={live} target="_blank" rel="noopener">
            {project.name}
            <span className="arrow">↗</span>
          </a>
        ) : (
          <Link className="card-stretch" href={detailHref}>
            {project.name}
            <span className="arrow">→</span>
          </Link>
        )}
      </h3>
      <p>{project.tagline}</p>
      {live && (
        // Sits above the stretched link so it stays independently clickable.
        <Link className="card-details" href={detailHref}>
          Details
        </Link>
      )}
    </div>
  );
}
