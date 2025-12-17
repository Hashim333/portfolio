// app/project/[slug]/page.tsx
import Navbar from "@/components/Navbar";
import projects from "@/data/projects";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="container">
          <h1>Project not found</h1>
          <p>Sorry — we couldn't find that project.</p>
          <Link href="/projects" className="btn">Back to projects</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: "2rem 0" }}>
        <Link href="/projects" className="btn btn-ghost">← All projects</Link>

        <article style={{ marginTop: 20 }}>
          <h1>{project.title}</h1>
          <p className="muted">{project.description}</p>

          {project.image && (
            <div style={{ margin: "1.25rem 0" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", maxWidth: 900, borderRadius: 12, boxShadow: "0 12px 40px rgba(2,6,23,0.08)" }}
              />
            </div>
          )}

          <h3>Tech</h3>
          <div className="tech" style={{ marginBottom: 16 }}>{project.tech.join(" · ")}</div>

          <section>
            <h3>About this project</h3>
            <p>(Add a longer description and links to live demo / source code here.)</p>

            <div style={{ marginTop: 16 }}>
              <a className="btn" href="#" onClick={(e) => e.preventDefault()}>
                View live
              </a>
              <a className="btn btn-ghost" style={{ marginLeft: 8 }} href="#" onClick={(e) => e.preventDefault()}>
                View source
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
