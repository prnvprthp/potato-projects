import type { Project } from "@/lib/projects";
import { asset } from "@/lib/asset";

/** Real app icon when we have one, otherwise an accent monogram tile. */
export function ProjectIcon({ project }: { project: Project }) {
  if (project.icon) {
    return (
      <div className="app-icon">
        {/* Plain <img>: icons are already small and export is static/unoptimized. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(project.icon)} alt={`${project.name} icon`} />
      </div>
    );
  }
  return (
    <div className="mono-tile" style={{ ["--accent" as string]: project.accent }}>
      {project.mono}
    </div>
  );
}
