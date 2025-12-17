import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  slug: string;
  image?: string;
  liveUrl?: string;     // link to live or GitHub
  sourceUrl?: string;   // optional: second link if needed
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.image && (
        <div className="thumb">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="card-body">
        <h3>{project.title}</h3>
        <p className="muted">{project.description}</p>
        <div className="tech">{project.tech.join(" · ")}</div>

        <div className="card-actions">
          {/* Direct GitHub / Live Redirect */}
          <a
            href={project.liveUrl}      // 👈 uses your GitHub/live link
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
}
