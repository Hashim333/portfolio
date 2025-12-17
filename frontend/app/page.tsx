import Navbar from "@/components/Navbar";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#050509] via-[#050509] to-black pt-24 font-sans transition-colors duration-700">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 lg:px-8 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-6 fade-up">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-zinc-400">
              Full Stack Web Developer
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent animate-gradient">
                Hashi
              </span>
            </h1>

            <p className="text-lg text-zinc-300 max-w-xl">
              I craft fast, modern, and scalable web applications using{" "}
              <span className="font-semibold text-white">MERN</span> and{" "}
              <span className="font-semibold text-white">Next.js</span>. I focus
              on clean architecture, smooth UX, and production-grade UI.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2 fade-up fade-delay-1">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/contact" className="btn-ghost">
                Contact
              </a>
              <a href="/resume" className="btn-ghost">
                Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-zinc-400 fade-up fade-delay-2">
              <div className="flex items-center gap-2">
                <span className="status-dot"></span> Open to work
              </div>
              <div>Based in India · Remote friendly</div>
            </div>
          </div>

          {/* RIGHT HERO CARD */}
          <div className="relative flex justify-center fade-up fade-delay-1">
            <div className="hero-orbit" />

            <div className="hero-card flex flex-col items-center">
              {/* IMAGE */}
              <div className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px]">
                <Image
                  src="/images/hashi.jpg"
                  alt="Hashi - Full Stack Developer"
                  fill
                  priority
                  className="rounded-xl object-contain bg-black"
                />
              </div>

              {/* BADGE */}
              <div className="hero-badge mt-4">
                <span className="hero-badge-dot" />
                Building sleek dashboards, e-commerce & SaaS UIs
              </div>

              {/* STATS */}
              <div className="hero-stats">
                <div>
                  <p className="hero-stat-number">3+</p>
                  <p className="hero-stat-label">Years learning</p>
                </div>
                <div>
                  <p className="hero-stat-number">{projects.length}+</p>
                  <p className="hero-stat-label">Projects</p>
                </div>
                <div>
                  <p className="hero-stat-number">MERN</p>
                  <p className="hero-stat-label">Primary stack</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 fade-up fade-delay-2">
          <h2 className="section-title">Technologies I Use</h2>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="tech-icon">⚛️ React</div>
            <div className="tech-icon">🟨 JavaScript</div>
            <div className="tech-icon">🟦 TypeScript</div>
            <div className="tech-icon">🟩 Node.js</div>
            <div className="tech-icon">🍃 MongoDB</div>
            <div className="tech-icon">⛓️ Express.js</div>
            <div className="tech-icon">⬛ Next.js</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="max-w-7xl mx-auto mt-24 px-6 lg:px-8 fade-up"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of real-world projects I’ve built.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
            {projects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-7xl mx-auto mt-24 px-6 lg:px-8 pb-24 fade-up fade-delay-1">
          <h2 className="section-title">About Me</h2>

          <div className="about-section">
            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              I’m a passionate full stack developer who enjoys building modern,
              scalable web applications. I’ve worked on e-commerce platforms,
              todo apps, and portfolio projects using React, Next.js, and MERN.
            </p>

            <div className="about-panel">
              <h3>Core Skills</h3>
              <ul className="skills-list">
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
                <li>JWT Authentication</li>
                <li>Responsive UI</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
