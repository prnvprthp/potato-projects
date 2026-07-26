import Link from "next/link";
import type { Project } from "@/lib/projects";
import { STATUS_LABEL } from "@/lib/projects";
import { ProjectIcon } from "./ProjectIcon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card"
      style={{ ["--accent" as string]: project.accent }}
    >
      <div className="card-top">
        <ProjectIcon project={project} />
        <span className="status">
          <span className={`dot ${project.status}`} />
          {STATUS_LABEL[project.status]}
        </span>
      </div>
      <h3>
        {project.name}
        <span className="arrow">→</span>
      </h3>
      <p>{project.tagline}</p>
    </Link>
  );
}
