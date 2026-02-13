"use client";

import { ArrowRight, BookOpen, Github, Linkedin, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";

const logos = ["Uber", "Zendesk", "Khan Academy", "CapitalOne", "FlexJobs", "888.com", "Redfin"];

function IntroLoader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }} className="intro-loader">
          <div className="intro-loader__inner">
            <p className="text-xs font-semibold tracking-[0.2em]">AHNAF SAMIN</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Loading visual collaboration energy...</h2>
            <div className="intro-loader__track">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                className="intro-loader__progress"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 160 });
  const sy = useSpring(y, { damping: 18, stiffness: 160 });

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={() => (x.set(0), y.set(0))}>
      {children}
    </motion.div>
  );
}

export function HomePageV2() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });

  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const glowX = useSpring(cx, { damping: 30, stiffness: 220 });
  const glowY = useSpring(cy, { damping: 30, stiffness: 220 });
  const dotX = useSpring(cx, { damping: 38, stiffness: 280 });
  const dotY = useSpring(cy, { damping: 38, stiffness: 280 });

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1150);
    return () => clearTimeout(t);
  }, []);

  function onMove(event: React.MouseEvent<HTMLElement>) {
    cx.set(event.clientX);
    cy.set(event.clientY);
  }

  return (
    <main className="relative overflow-x-clip pb-0" onMouseMove={onMove}>
      <IntroLoader visible={loading} />
      <motion.div style={{ scaleX: progress }} className="scroll-progress" />
      <div className="page-grain" />
      <motion.div className="cursor-glow hidden md:block" style={{ x: glowX, y: glowY }} />
      <motion.div className="cursor-dot hidden md:block" style={{ x: dotX, y: dotY }} />

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f5ee]/95 backdrop-blur-sm">
        <div className="container-width flex items-center justify-between py-4">
          <nav className="hidden items-center gap-6 text-xs font-semibold tracking-wide md:flex">
            <a href="#services">USE CASES</a>
            <a href="#pricing">PRICING</a>
          </nav>
          <Link href="/" className="text-3xl font-black tracking-tight">
            AHNAF<span className="text-[#f92fa2]">CAP</span>
          </Link>
          <div className="flex items-center gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="line-btn px-4 py-2 text-xs">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="neon-btn px-4 py-2 text-xs">
              HIRE ME
            </a>
          </div>
        </div>
      </header>

      <section className="container-width relative pt-10 md:pt-14">
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.2, repeat: Infinity }} className="doodle left-[-10px] top-[210px] text-6xl text-[#f92fa2]">
          ⚡
        </motion.div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity }} className="doodle right-[90px] top-[160px] text-5xl">
          👁️
        </motion.div>
        <div className="hero-canvas px-4 py-10 md:px-10 md:py-12">
          <Reveal>
            <h1 className="hero-big text-center">
              Capture.
              <br />
              Convert.
              <br />
              Collaborate.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base text-black/75 md:text-lg">{profile.tagline}</p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <a href="#projects" className="neon-btn inline-flex items-center gap-2 px-6 py-3 text-sm">
              GET STARTED <ArrowRight size={15} />
            </a>
          </Magnetic>
          <Magnetic>
            <Link href="/blog" className="line-btn inline-flex items-center gap-2 px-6 py-3 text-sm">
              BLOG <BookOpen size={15} />
            </Link>
          </Magnetic>
          <span className="sticker right-0 top-0 hidden md:block">OPEN FOR UPWORK</span>
        </div>
      </section>

      <section className="container-width mt-12 md:mt-16">
        <p className="text-center text-sm text-black/60">Trusted mindset inspired by product, design, and engineering collaboration</p>
        <div className="mt-5 grid grid-cols-2 gap-4 text-center md:grid-cols-7">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-bold tracking-tight text-black/75">
              {logo}
            </span>
          ))}
        </div>
      </section>

      <section className="container-width mt-16">
        <div className="big-lime-band marquee py-4">
          <div className="marquee-track">
            {new Array(4).fill(0).map((_, i) => (
              <p key={i} className="text-4xl font-black tracking-tight text-black md:text-7xl">
                WORK TOGETHER • WORK TOGETHER • WORK TOGETHER •
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="container-width mt-16">
        <Reveal>
          <p className="section-label">Instant Value</p>
          <h2 className="mt-2 text-5xl font-black tracking-tight md:text-7xl">What I build for clients</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.05}>
              <article className="feature-card p-6">
                <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-black/70">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-width mt-18 grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="section-label">Visual Feedback - no meetings required</p>
          <h3 className="mt-2 text-5xl font-black tracking-tight md:text-6xl">
            AI delivery that
            <br />
            feels clear
          </h3>
          <p className="mt-4 text-black/72">
            I keep communication visual and practical: clear milestones, measurable targets, and implementation that your team can use immediately.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["RAG", "NLP", "Forecasting", "SQL", "Power BI", "FastAPI"].map((pill) => (
              <span key={pill} className="pill px-3 py-1.5">
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.22 }} className="mockup-panel p-4">
            <div className="mockup-grid" />
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="quote-card absolute left-5 top-5 w-[58%] p-4">
              <p className="text-sm font-medium">&quot;Can we automate weekly KPI insights?&quot;</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.1, repeat: Infinity, delay: 0.4 }}
              className="quote-card absolute right-5 top-28 w-[56%] p-4"
            >
              <p className="text-sm font-medium">&quot;Prototype approved. Add dashboard hook.&quot;</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.3, repeat: Infinity, delay: 0.8 }}
              className="quote-card absolute bottom-5 left-7 w-[70%] p-4"
            >
              <p className="text-sm font-medium">&quot;Deployed with measurable reporting time reduction.&quot;</p>
            </motion.div>
          </motion.div>
        </Reveal>
      </section>

      <section id="projects" className="container-width mt-20">
        <Reveal>
          <p className="section-label">Selected Work</p>
          <h2 className="mt-2 text-5xl font-black tracking-tight md:text-7xl">Projects & proof</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {profile.projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.04}>
              <article className="feature-card p-5">
                <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                <p className="mt-3 text-sm text-black/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="pill px-2.5 py-1 text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold">
                      View Repo <ArrowRight size={14} />
                    </a>
                  ) : (
                    <span className="text-sm text-black/55">Available on request</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="pricing" className="container-width mt-20">
        <Reveal>
          <div className="feature-card p-8 md:p-10">
            <p className="section-label">Branding + Conversion</p>
            <h3 className="mt-2 text-4xl font-black tracking-tight md:text-6xl">Get Visual Collaboration Superpowers</h3>
            <p className="mt-4 max-w-3xl text-black/72">
              I am open to remote AI/ML consulting and implementation projects. Reach out for portfolio-aligned proposals for Upwork and direct clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Magnetic>
                <a href={`mailto:${profile.email}`} className="neon-btn inline-flex items-center gap-2 px-6 py-3 text-sm">
                  Start a Project <Sparkles size={15} />
                </a>
              </Magnetic>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="line-btn inline-flex items-center gap-2 px-6 py-3 text-sm">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="line-btn inline-flex items-center gap-2 px-6 py-3 text-sm">
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="container-width mt-20">
        <div className="footer-dark px-6 py-9 md:px-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <p className="text-3xl font-black">
              AHNAF<span className="text-[#f92fa2]">CAP</span>
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-white/80 md:grid-cols-3">
              <a href="#services">Use-Cases</a>
              <Link href="/blog">Blog</Link>
              <a href="#pricing">Pricing</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
