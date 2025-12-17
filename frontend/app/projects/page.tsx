import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "2rem 0" }}>
        <h1>Projects</h1>
        <p className="muted">Here are some of the projects I’ve built.</p>

        <div className="projects-grid" style={{ marginTop: "1.5rem" }}>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
    </>
  );
}
