import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "2.5rem 0" }}>
        {/* PAGE HEADER */}
        <header style={{ marginBottom: "2.5rem" }}>
          <h1>About Me</h1>
          <p className="muted">
            Who I am, what I build, and how I add value as a developer.
          </p>
        </header>

        {/* MAIN ABOUT SECTION */}
        <section className="about-section">
          <div className="about-left">
            <h2>Hi, I’m Hashi 👋</h2>

            <p>
              I’m a <strong>Web & Full Stack Developer</strong> with hands-on
              industry experience in building modern, scalable, and
              user-friendly web applications using the
              <strong> MERN stack</strong> (MongoDB, Express, React, Node.js).
            </p>

            <p>
              I’m currently working as a <strong>Web-App Developer Intern</strong>{" "}
              at an <strong>EdTech platform, Crispr Learning</strong>, where I
              contribute to real production features, improve UI/UX, and work
              closely with cross-functional teams.
            </p>

            <p>
              Along with development, I’ve also gained strong experience in
              <strong> video editing and graphic design</strong>.
            </p>

            <p>
              I enjoy turning ideas into products, writing clean and maintainable
              code, and continuously improving my skills.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="about-right">
            <Image
              src="/images/hashi.jpg" // or /images/hero.png
              alt="Hashi - Web Developer"
              width={420}
              height={420}
              priority
              style={{
                borderRadius: "14px",
                boxShadow: "0 16px 50px rgba(0,0,0,0.12)",
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section style={{ marginTop: "3.5rem" }}>
          <h2>Skills & Technologies</h2>

          <ul className="skills-list">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
            <li>JWT Authentication</li>
            <li>Git & GitHub</li>
            <li>HTML5 / CSS3 / Bootstrap</li>
            <li>Video Editing</li>
            <li>Graphic Design</li>
          </ul>
        </section>

        {/* EXPERIENCE & PROJECTS */}
        <section style={{ marginTop: "3rem" }}>
          <h2>Experience & Projects</h2>
          <p>
            I’ve built real-world projects including a
            <strong> full-stack E-commerce platform</strong> and a
            <strong> Todo application</strong>.
          </p>
        </section>

        {/* CURRENT FOCUS */}
        <section style={{ marginTop: "2.5rem" }}>
          <h2>What I’m Currently Focusing On</h2>
          <p>
            Advanced React patterns, modern Next.js features, and improving my
            portfolio with production-level projects.
          </p>
        </section>
      </main>
    </>
  );
}
