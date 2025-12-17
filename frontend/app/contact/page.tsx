// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<
//     "idle" | "sending" | "sent" | "error"
//   >("idle");

//   async function submit(e: React.FormEvent) {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         setStatus("sent");
//         setForm({ name: "", email: "", message: "" }); // clear form
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       setStatus("error");
//     }
//   }

//   return (
//     <form onSubmit={submit} className="contact-form">
//       <input
//         placeholder="Name"
//         required
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         required
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />

//       <textarea
//         placeholder="Message"
//         required
//         value={form.message}
//         onChange={(e) =>
//           setForm({ ...form, message: e.target.value })
//         }
//       />

//       <button type="submit" className="btn" disabled={status === "sending"}>
//         {status === "sending" ? "Sending..." : "Send Message"}
//       </button>

//       {status === "sent" && (
//         <p className="muted">✅ Message sent successfully!</p>
//       )}

//       {status === "error" && (
//         <p className="muted error">❌ Something went wrong.</p>
//       )}
//     </form>
//   );
// }
"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "3rem 0" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1>Contact</h1>
          <p className="muted">
            Feel free to reach out to me for opportunities, collaborations,
            or queries.
          </p>
        </header>

        <section className="contact-details">
          <div className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:muhammedhashimalimk@gmail.com">
                muhammedhashimalimk@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>
              <a href="tel:+919400197006">
                +91 94001 97006
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://linkedin.com/in/muhammed-hashim-ali-m-k-54b6b2330"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/muhammed-hashim-ali-m-k
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/Hashish"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Hashish
              </a>
            </p>
          </div>
        </section>

        <section style={{ marginTop: "2.5rem" }}>
          <p className="muted">
            📌 I usually respond within 24 hours.  
            I’m open to internships, full-time roles, and freelance work.
          </p>
        </section>
      </main>
    </>
  );
}
