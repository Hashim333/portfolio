export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 pt-24 pb-24">
      <section className="max-w-5xl mx-auto px-6 lg:px-8 fade-in-up">
        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] items-start">
          {/* LEFT: FORM */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl p-6 md:p-8">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Let’s build something together
            </h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Tell me a bit about your project or idea. I’ll get back to you as
              soon as possible.
            </p>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:text-zinc-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:text-zinc-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Project type
                </label>
                <select
                  id="type"
                  className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:text-zinc-50"
                >
                  <option value="">Choose one</option>
                  <option>E-commerce</option>
                  <option>Portfolio / Personal site</option>
                  <option>Dashboard / Admin</option>
                  <option>Full-stack web app</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:text-zinc-50"
                  placeholder="Tell me about your project, timeline, and budget…"
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                Send message
              </button>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 shadow-xl">
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
                Contact
              </h2>
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                I’m available for freelance projects, collaborations, or
                full-time opportunities related to frontend, MERN stack, and
                product-focused web apps.
              </p>

              <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  your.email@example.com
                </p>
                <p>
                  <span className="font-semibold">Location:</span> India (IST)
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 p-5 text-xs text-zinc-600 dark:text-zinc-400">
              <p>Typical collaboration flow:</p>
              <ol className="mt-2 list-decimal space-y-1 pl-4">
                <li>Short call / chat to understand your needs</li>
                <li>Rough scope + timeline & milestones</li>
                <li>Design and implementation in tight feedback loops</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
