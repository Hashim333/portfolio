"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner container">
        <Link href="/" className="brand">
          <span className="brand-dot"></span>
          <span className="brand-text">Hashi Studio</span>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`links ${open ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </div>
    </header>
  );
}
