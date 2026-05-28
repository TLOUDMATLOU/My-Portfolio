import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    name: "TaskManager",
    status: "Live",
    desc: "Full-stack task management app with JWT auth, PostgreSQL via Prisma, and a React dashboard. Users can create, filter, and manage tasks by priority and status.",
    tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind"],
    color: "#6366f1",
    link: "#",
  },
  {
    name: "TutorHub",
    status: "In Progress",
    desc: "Collaborative tutoring platform connecting students with tutors. Built with a partner — features booking, sessions, and real-time communication.",
    tech: ["React", "Node.js", "Socket.io"],
    color: "#10b981",
    link: "#",
  },
  {
    name: "RealHome",
    status: "In Progress",
    desc: "Real estate web app for property listings, search, and enquiries. Clean UI focused on property discovery.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#f59e0b",
    link: "#",
  },
  {
    name: "Sello Group",
    status: "Completed",
    desc: "Corporate website for Sello Group and Consulting — professional, responsive, and built for client acquisition.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#ec4899",
    link: "#",
  },
  {
    name: "Proctoring System",
    status: "Completed",
    desc: "Online exam proctoring system with monitoring capabilities, designed to maintain academic integrity in remote assessments.",
    tech: ["React", "Node.js", "WebRTC"],
    color: "#8b5cf6",
    link: "#",
  },
  {
    name: "College LMS",
    status: "Completed",
    desc: "Learning Management System for a college environment — course management, student enrollment, and assignment submission.",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "#06b6d4",
    link: "#",
  },
];

const SKILLS = [
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT Auth", "bcrypt"] },
  { category: "Database", items: ["PostgreSQL", "Prisma ORM", "MongoDB", "Neon"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [typed, setTyped] = useState("");
  const fullTitle = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((n) => document.getElementById(n.toLowerCase()));
      const scrollY = window.scrollY + 120;
      sections.forEach((sec) => {
        if (sec && scrollY >= sec.offsetTop) setActiveSection(sec.id.charAt(0).toUpperCase() + sec.id.slice(1));
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'DM Mono', 'Courier New', monospace", background: "#080b12", color: "#e2e8f0", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #6366f1; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080b12; }
        ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 4px; }

        .nav-link { position: relative; cursor: pointer; font-size: 13px; letter-spacing: 0.12em; color: #94a3b8; transition: color 0.2s; text-transform: uppercase; }
        .nav-link:hover, .nav-link.active { color: #e2e8f0; }
        .nav-link.active::after { content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px; background: #6366f1; }

        .hero-title { font-family: 'Syne', sans-serif; font-size: clamp(3rem, 8vw, 7rem); font-weight: 800; line-height: 0.9; letter-spacing: -0.03em; }
        .accent { color: #6366f1; }
        .tag { display: inline-block; font-size: 11px; padding: 3px 10px; border-radius: 20px; letter-spacing: 0.08em; font-weight: 500; }

        .project-card { background: #0d1117; border: 1px solid #1e2535; border-radius: 16px; padding: 28px; transition: all 0.3s; cursor: default; position: relative; overflow: hidden; }
        .project-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--accent); transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .project-card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .project-card:hover::before { transform: scaleX(1); }

        .skill-pill { background: #0d1117; border: 1px solid #1e2535; border-radius: 8px; padding: 8px 16px; font-size: 13px; color: #94a3b8; transition: all 0.2s; }
        .skill-pill:hover { border-color: #6366f1; color: #e2e8f0; }

        .glow-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981; display: inline-block; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .cursor-blink { display: inline-block; width: 2px; height: 1em; background: #6366f1; margin-left: 2px; animation: blink 1s step-end infinite; vertical-align: text-bottom; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .grid-bg { background-image: linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px); background-size: 60px 60px; }

        .contact-link { display: flex; align-items: center; gap: 12px; padding: 18px 24px; background: #0d1117; border: 1px solid #1e2535; border-radius: 12px; text-decoration: none; color: #94a3b8; font-size: 14px; transition: all 0.2s; }
        .contact-link:hover { border-color: #6366f1; color: #e2e8f0; transform: translateX(4px); }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, borderBottom: "1px solid #1e2535", backdropFilter: "blur(16px)", background: "rgba(8,11,18,0.85)", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em" }}>
          TDM<span className="accent">.</span>
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <span key={link} className={`nav-link ${activeSection === link ? "active" : ""}`} onClick={() => scrollTo(link)}>
              {link}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <span className="glow-dot"></span>
            <span style={{ fontSize: 13, color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase" }}>Available for opportunities</span>
          </div>

          <h1 className="hero-title" style={{ marginBottom: 24 }}>
            <span style={{ display: "block", color: "#64748b", fontSize: "clamp(1rem, 2vw, 1.5rem)", fontWeight: 400, fontFamily: "'DM Mono', monospace", marginBottom: 8, letterSpacing: "0.05em" }}>Hi, I'm</span>
            Tlou<br />
            <span className="accent">Doreen</span><br />
            Matlou
          </h1>

          <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#64748b", marginBottom: 24, fontFamily: "'DM Mono', monospace", fontWeight: 300 }}>
            <span style={{ color: "#e2e8f0" }}>{typed}</span>
            <span className="cursor-blink"></span>
          </div>

          <p style={{ fontSize: 16, color: "#64748b", lineHeight: 1.8, maxWidth: 560, marginBottom: 40 }}>
            I build full-stack web applications that solve real problems — from task management systems to learning platforms. Passionate about clean code, thoughtful UX, and shipping things that work.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="https://github.com/TLOUDMATLOU" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, background: "#6366f1", color: "#fff", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "all 0.2s" }}
              onMouseOver={e => e.currentTarget.style.background = "#4f46e5"}
              onMouseOut={e => e.currentTarget.style.background = "#6366f1"}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/tlou-doreen-matlou" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #1e2535", color: "#e2e8f0", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontSize: 14, transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.background = "rgba(99,102,241,0.08)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#1e2535"; e.currentTarget.style.background = "transparent"; }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <button onClick={() => scrollTo("Projects")} style={{ border: "1px solid #1e2535", color: "#64748b", padding: "12px 24px", borderRadius: 10, fontSize: 14, background: "transparent", cursor: "pointer", transition: "all 0.2s" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#e2e8f0"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#1e2535"; e.currentTarget.style.color = "#64748b"; }}>
              View Projects ↓
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "100px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 12, color: "#6366f1", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>// 02. work</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Projects<span className="accent">.</span>
          </h2>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {PROJECTS.map((p) => (
            <div key={p.name} className="project-card" style={{ "--accent": p.color }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700 }}>{p.name}</h3>
                <span className="tag" style={{ background: p.status === "Live" ? "rgba(16,185,129,0.1)" : p.status === "In Progress" ? "rgba(245,158,11,0.1)" : "rgba(99,102,241,0.1)", color: p.status === "Live" ? "#10b981" : p.status === "In Progress" ? "#f59e0b" : "#818cf8" }}>
                  {p.status === "Live" && "● "}{p.status}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tech.map((t) => (
                  <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 6, background: "#13181f", border: "1px solid #1e2535", color: "#64748b", letterSpacing: "0.05em" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "100px 32px", borderTop: "1px solid #1e2535" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 12, color: "#6366f1", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>// 03. stack</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Skills<span className="accent">.</span>
            </h2>
          </div>

          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {SKILLS.map((group) => (
              <div key={group.category}>
                <p style={{ fontSize: 12, color: "#6366f1", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>{group.category}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {group.items.map((item) => (
                    <div key={item} className="skill-pill">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 32px", borderTop: "1px solid #1e2535" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#6366f1", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>// 04. contact</p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Let's Talk<span className="accent">.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 48 }}>
            I'm open to full-time roles, freelance projects, and collaborations. If you have something interesting, let's connect.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
            <a href="mailto:tmatlou11@gmail.com" className="contact-link">
              <span style={{ fontSize: 20 }}>✉</span>
              <div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 2 }}>Email</div>
                <div style={{ color: "#e2e8f0" }}>tmatlou11@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/TLOUDMATLOU" target="_blank" rel="noreferrer" className="contact-link">
              <span style={{ fontSize: 20 }}>⌥</span>
              <div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 2 }}>GitHub</div>
                <div style={{ color: "#e2e8f0" }}>github.com/TLOUDMATLOU</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/tlou-doreen-matlou" target="_blank" rel="noreferrer" className="contact-link">
              <span style={{ fontSize: 20 }}>in</span>
              <div>
                <div style={{ fontSize: 12, color: "#64748b", marginBottom: 2 }}>LinkedIn</div>
                <div style={{ color: "#e2e8f0" }}>Tlou (Doreen) Matlou</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1e2535", padding: "24px 32px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#334155" }}>
          Designed & built by <span style={{ color: "#6366f1" }}>Tlou Doreen Matlou</span> — {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}