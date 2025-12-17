// app/resume/page.tsx
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ResumePage() {
  const pdfPath = "/Muhammed_Hashim_Ali_CV.pdf";

  return (
    <>
      <Navbar />

      <main className="container" style={{ padding: "2rem 0" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Resume</h1>
            <p className="muted">View or download my resume.</p>
          </div>

          <div>
            <a href={pdfPath} className="btn" download>
              Download Resume (PDF)
            </a>
            <Link href="/" className="btn btn-ghost" style={{ marginLeft: 8 }}>
              Back Home
            </Link>
          </div>
        </header>

        <section style={{ marginTop: 20 }}>
          <object
            data={pdfPath}
            type="application/pdf"
            width="100%"
            height="850px"
            aria-label="Resume PDF"
          />
        </section>
      </main>
    </>
  );
}
