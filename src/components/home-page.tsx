"use client";

import {
  ArrowUpRight,
  ArrowRight,
  AudioWaveform,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Github,
  Linkedin,
  Mail,
  MessageSquareQuote,
  Phone,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";

const tags = [
  "LLM Workflows",
  "NLP Deployment",
  "Analytics Automation",
  "RAG Prototyping",
  "Forecasting",
  "AI Product Features",
  "Business Impact Delivery",
];

const processSteps = [
  {
    title: "Discovery + Framing",
    text: "I align use-case, constraints, and ROI targets so the solution stays practical and client-focused.",
    icon: MessageSquareQuote,
  },
  {
    title: "Rapid Prototype",
    text: "I quickly build a usable version with robust evaluation and guardrails before over-engineering.",
    icon: Zap,
  },
  {
    title: "System Integration",
    text: "I connect models, APIs, and dashboards into one smooth workflow your team can trust.",
    icon: Sparkles,
  },
  {
    title: "Monitoring + Iteration",
    text: "I track output quality, model drift, and user behavior to keep improving business impact.",
    icon: AudioWaveform,
  },
];

const showcaseSteps = [
  {
    title: "AI/ML Problem Framing",
    text: "I define the decision problem, expected business outcome, and measurable success metrics before implementation.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Model + System Design",
    text: "I design practical ML/NLP systems with clean pipelines, evaluation layers, and guardrails for reliability.",
    icon: Zap,
  },
  {
    title: "Deployment + Iteration",
    text: "I integrate models into product workflows and iterate with monitoring so delivery keeps improving after launch.",
    icon: Rocket,
  },
];

const clientValueCards = [
  {
    title: "Faster MVP Delivery",
    text: "I translate business goals into production-minded prototypes your team can test quickly.",
    icon: Rocket,
  },
  {
    title: "Reliable Model Workflows",
    text: "I build robust pipelines, evaluation loops, and practical guardrails for real users.",
    icon: Zap,
  },
  {
    title: "Clear Business Outcomes",
    text: "I focus on measurable improvements: speed, quality, retention, and decision accuracy.",
    icon: ChartNoAxesCombined,
  },
];

function IntroLoader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="intro-loader"
        >
          <div className="intro-loader__inner">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.22em] text-[#e7ebfa]/85"
            >
              Preparing an Interactive AI/ML Portfolio...
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-3 text-3xl font-bold text-white md:text-5xl"
            >
              <span className="text-gradient-aurora">Ahnaf Samin</span>
            </motion.h3>
            <div className="intro-loader__track">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.35, ease: [0.34, 1, 0.64, 1] }}
                className="intro-loader__progress"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MagneticButton({ children, className }: { children: React.ReactNode; className: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.15);
    y.set(relY * 0.2);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </motion.div>
  );
}

function PinnedShowcaseScene() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 15%"],
  });

  const boardScale = useTransform(scrollYProgress, [0, 0.18, 0.8, 1], [0.96, 1, 1, 0.97]);
  const boardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-4, -0.5, 2]);
  const boardY = useTransform(scrollYProgress, [0, 1], [18, -14]);

  const layerOneY = useTransform(scrollYProgress, [0, 0.45, 1], [10, 0, -6]);
  const layerOneX = useTransform(scrollYProgress, [0, 0.4, 1], [-8, 0, -4]);
  const layerTwoY = useTransform(scrollYProgress, [0, 0.45, 1], [12, 0, -6]);
  const layerTwoX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, 4]);
  const layerThreeY = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -5]);

  const stepOneOpacity = useTransform(scrollYProgress, [0, 0.2, 0.38], [1, 1, 0.45]);
  const stepTwoOpacity = useTransform(scrollYProgress, [0.22, 0.5, 0.72], [0.45, 1, 0.45]);
  const stepThreeOpacity = useTransform(scrollYProgress, [0.62, 0.84, 1], [0.45, 1, 1]);
  const stepOneScale = useTransform(scrollYProgress, [0, 0.2, 0.38], [1.015, 1.02, 1]);
  const stepTwoScale = useTransform(scrollYProgress, [0.22, 0.5, 0.72], [1, 1.02, 1]);
  const stepThreeScale = useTransform(scrollYProgress, [0.62, 0.84, 1], [1, 1.02, 1.01]);

  return (
    <section ref={sectionRef} className="container-width relative mt-12 h-auto lg:mt-16 lg:h-[155vh]">
      <div className="pin-wrapper lg:top-20">
        <div className="grid h-full gap-6 lg:items-center lg:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            style={{ scale: boardScale, rotate: boardRotate, y: boardY }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0a1124cc] p-5 shadow-[0_40px_90px_rgba(8,12,23,0.65)]"
          >
            <Image
              src="/graphics/mesh-lines.svg"
              alt=""
              aria-hidden
              width={1400}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="grid-overlay absolute inset-0" />

            <div className="relative z-10 grid gap-3 md:grid-cols-2 lg:hidden">
              <motion.article style={{ x: layerOneX, y: layerOneY }} className="stack-card !relative !left-auto !right-auto !top-auto !bottom-auto !w-full">
                <p className="text-xs uppercase tracking-widest text-blue-100/75">Professional Context</p>
                <h3 className="mt-2 text-xl font-bold text-white">Applied AI/ML engineering in production environments</h3>
                <p className="mt-2 text-sm text-white/70">
                  Hands-on work with high-volume RF data pipelines, where forecasting and anomaly modeling supported real operational decisions.
                </p>
              </motion.article>

              <motion.article style={{ x: layerTwoX, y: layerTwoY }} className="stack-card !relative !left-auto !right-auto !top-auto !bottom-auto !w-full">
                <p className="text-xs uppercase tracking-widest text-blue-100/75">Technical Execution</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Python + ML forecasting + NLP + automation engineering</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full border border-white/20 px-2 py-1 text-white/75">ML Forecasting</span>
                  <span className="rounded-full border border-white/20 px-2 py-1 text-white/75">Anomaly Detection</span>
                  <span className="rounded-full border border-white/20 px-2 py-1 text-white/75">Bangla NLP Research</span>
                </div>
              </motion.article>
            </div>

            <div className="relative z-10 hidden min-h-[420px] lg:block">
              <motion.article style={{ x: layerOneX, y: layerOneY }} className="stack-card left-4 top-4 z-20 w-[70%]">
                <p className="text-xs uppercase tracking-widest text-blue-100/75">Professional Context</p>
                <h3 className="mt-2 text-xl font-bold text-white">Applied AI/ML engineering in production environments</h3>
                <p className="mt-2 text-sm text-white/70">
                  Hands-on work with high-volume RF data pipelines, where forecasting and anomaly modeling supported real operational decisions.
                </p>
              </motion.article>

              <motion.article style={{ x: layerTwoX, y: layerTwoY }} className="stack-card right-4 top-40 z-30 w-[58%]">
                <p className="text-xs uppercase tracking-widest text-blue-100/75">Technical Execution</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Python + ML forecasting + NLP + automation engineering</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full border border-white/20 px-2 py-1 text-white/75">ML Forecasting</span>
                  <span className="rounded-full border border-white/20 px-2 py-1 text-white/75">Anomaly Detection</span>
                  <span className="rounded-full border border-white/20 px-2 py-1 text-white/75">Bangla NLP Research</span>
                </div>
              </motion.article>
            </div>

            <motion.article style={{ y: layerThreeY }} className="stack-card relative z-10 mt-4 !w-full !left-auto !right-auto !top-auto !bottom-auto">
              <p className="text-xs uppercase tracking-widest text-blue-100/75">Outcome Highlights</p>
              <div className="mt-2 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3">
                  <p className="text-2xl font-bold text-white">50%</p>
                  <p className="text-xs text-white/65">faster AI-assisted reporting workflow</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3">
                  <p className="text-2xl font-bold text-white">30%</p>
                  <p className="text-xs text-white/65">stronger data quality for ML-ready pipelines</p>
                </div>
                <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3">
                  <p className="text-2xl font-bold text-white">E2E</p>
                  <p className="text-xs text-white/65">end-to-end ownership from data to delivery</p>
                </div>
              </div>
            </motion.article>
          </motion.div>

          <div className="space-y-4">
            <p className="section-label">Delivery Timeline</p>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">
              Real experience timeline from analytics to AI delivery
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              This section highlights how I turn ambiguous business needs into deployable AI/ML workflows clients can actually use.
            </p>
            <div className="mt-5 space-y-3">
              {showcaseSteps.map((step, idx) => {
                const opacity = idx === 0 ? stepOneOpacity : idx === 1 ? stepTwoOpacity : stepThreeOpacity;
                const scale = idx === 0 ? stepOneScale : idx === 1 ? stepTwoScale : stepThreeScale;
                return (
                  <motion.div key={step.title} style={{ opacity, scale }} className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                      <step.icon size={16} />
                      {step.title}
                    </div>
                    <p className="mt-2 text-sm text-white/75">{step.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinnedTestimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const leftCardY = useTransform(scrollYProgress, [0, 0.5, 1], [64, 12, -32]);
  const rightCardY = useTransform(scrollYProgress, [0, 0.5, 1], [74, 20, -28]);
  const centerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.01, 1.04]);
  const centerRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, -0.4, 1.8]);
  const centerY = useTransform(scrollYProgress, [0, 1], [44, -12]);
  const phaseOne = useTransform(scrollYProgress, [0.05, 0.28, 0.46], [0.3, 1, 0.45]);
  const phaseTwo = useTransform(scrollYProgress, [0.32, 0.54, 0.72], [0.3, 1, 0.45]);
  const phaseThree = useTransform(scrollYProgress, [0.58, 0.78, 0.96], [0.3, 1, 0.45]);

  return (
    <section ref={sectionRef} className="container-width mt-12 h-auto lg:mt-14 lg:h-[128vh]">
      <div className="pin-wrapper lg:top-20">
        <div className="grid h-full gap-6 lg:items-center lg:gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-label">AI Capability Parallax</p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">From raw data to deployable model-driven products</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72">
              A dedicated scroll interaction showing how I approach real-world AI/ML delivery: preparation, modeling, and deployment.
            </p>
            <div className="mt-5 space-y-3">
              <motion.div style={{ opacity: phaseOne }} className="glass rounded-xl p-3.5 text-sm text-white/85">
                Data preparation and feature engineering for ML readiness
              </motion.div>
              <motion.div style={{ opacity: phaseTwo }} className="glass rounded-xl p-3.5 text-sm text-white/85">
                Model design, validation, and metric-driven tuning
              </motion.div>
              <motion.div style={{ opacity: phaseThree }} className="glass rounded-xl p-3.5 text-sm text-white/85">
                Integration into dashboard/API workflows with monitoring
              </motion.div>
            </div>
          </div>
          <div className="relative min-h-[460px] lg:h-[66vh] lg:min-h-0">
            <motion.div style={{ y: leftCardY }} className="stack-card left-0 top-7 w-[46%]">
              <p className="text-xs uppercase tracking-wider text-white/60">Data Foundation</p>
              <p className="mt-2 text-sm text-white/90">RF + product datasets processed with Python/SQL pipelines for robust ML inputs.</p>
            </motion.div>
            <motion.div
              style={{ y: centerY, scale: centerScale, rotate: centerRotate }}
              className="stack-card left-[22%] top-[24%] w-[56%] border-blue-200/30 bg-[#0b1226de]"
            >
              <p className="text-xs uppercase tracking-wider text-blue-100/75">Model System Core</p>
              <h4 className="mt-2 text-base font-semibold text-white">Forecasting + anomaly detection + NLP components</h4>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-white/70">
                <span className="rounded-md border border-white/15 px-2 py-1">Data validation</span>
                <span className="rounded-md border border-white/15 px-2 py-1">Model evaluation</span>
                <span className="rounded-md border border-white/15 px-2 py-1">Prompting layer</span>
                <span className="rounded-md border border-white/15 px-2 py-1">Monitoring hooks</span>
              </div>
            </motion.div>
            <motion.div style={{ y: rightCardY }} className="stack-card right-0 top-12 w-[44%]">
              <p className="text-xs uppercase tracking-wider text-white/60">Business Outcome</p>
              <p className="mt-2 text-sm text-white/90">Faster reporting loops, clearer insights, and practical AI systems that teams can use.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitState, setContactSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.1 });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, 2.2]);
  const portraitZoom = useTransform(heroScrollProgress, [0, 0.6, 1], [1.08, 1, 0.92]);
  const statsScale = useTransform(heroScrollProgress, [0, 0.6, 1], [0.96, 1.04, 1.14]);
  const statsY = useTransform(heroScrollProgress, [0, 1], [0, -18]);
  const portraitFrameX = useTransform(heroScrollProgress, [0, 0.55, 1], [0, -10, -24]);
  const portraitFrameY = useTransform(heroScrollProgress, [0, 0.6, 1], [0, 8, 24]);
  const cutoutScale = useTransform(heroScrollProgress, [0, 1], [0.97, 0.97]);
  const cutoutX = useTransform(heroScrollProgress, [0, 1], [0, -6]);
  const cutoutY = useTransform(heroScrollProgress, [0, 1], [24, -8]);
  const portraitBackdropTopY = useTransform(heroScrollProgress, [0, 1], [40, -24]);
  const portraitBackdropBottomY = useTransform(heroScrollProgress, [0, 1], [20, -44]);
  const portraitBackdropTopX = useTransform(heroScrollProgress, [0, 1], [-18, 16]);
  const portraitBackdropBottomX = useTransform(heroScrollProgress, [0, 1], [14, -14]);
  const portraitBackdropOpacity = useTransform(heroScrollProgress, [0, 0.35, 1], [0.44, 0.62, 0.36]);
  const portraitBackdropScale = useTransform(heroScrollProgress, [0, 1], [0.96, 1.08]);
  const portraitBackdropRotate = useTransform(heroScrollProgress, [0, 1], [0, 1.8]);
  const portraitBubbleY = useTransform(heroScrollProgress, [0, 1], [0, -10]);
  const portraitBubbleOpacity = useTransform(heroScrollProgress, [0, 0.85, 1], [0.98, 0.95, 0.72]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const shadowXTarget = useMotionValue(0);
  const shadowYTarget = useMotionValue(0);
  const cursorX = pointerX;
  const cursorY = pointerY;
  const cursorRingX = useSpring(shadowXTarget, { damping: 24, stiffness: 95, mass: 0.5 });
  const cursorRingY = useSpring(shadowYTarget, { damping: 24, stiffness: 95, mass: 0.5 });
  const cursorParallaxX = useMotionValue(0);
  const cursorParallaxY = useMotionValue(0);
  const blobShiftX = useSpring(useTransform(cursorParallaxX, [-1, 1], [-22, 22]), { stiffness: 80, damping: 18 });
  const blobShiftY = useSpring(useTransform(cursorParallaxY, [-1, 1], [-14, 14]), { stiffness: 80, damping: 18 });
  const blobShiftBX = useTransform(blobShiftX, (v) => -v * 0.7);
  const blobShiftBY = useTransform(blobShiftY, (v) => -v * 0.8);
  const blobShiftCX = useTransform(blobShiftX, (v) => v * 0.4);
  const blobShiftCY = useTransform(blobShiftY, (v) => v * 0.5);
  const meshShiftX = useSpring(useTransform(cursorParallaxX, [-1, 1], [-18, 18]), { stiffness: 80, damping: 18 });
  const meshShiftY = useSpring(useTransform(cursorParallaxY, [-1, 1], [-10, 10]), { stiffness: 80, damping: 18 });
  const meshScrollY = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const meshScrollX = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const meshScrollScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.28]);
  const meshScrollRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const meshSecondaryY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const meshSecondaryX = useTransform(scrollYProgress, [0, 1], [0, 92]);
  const meshSecondaryRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const meshCombinedY = useTransform(() => meshShiftY.get() + meshScrollY.get());
  const meshCombinedX = useTransform(() => meshShiftX.get() + meshScrollX.get());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  async function handleEmailFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (contactSubmitState === "submitting") return;
    setContactSubmitState("submitting");

    const subject = contactSubject.trim() || `Portfolio inquiry from ${contactName.trim() || "Website Visitor"}`;
    const message = contactMessage.trim() || "Hello, I would like to discuss a project.";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactName.trim() || "Website Visitor",
          email: contactEmail.trim() || "no-reply@example.com",
          subject,
          message,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setContactSubmitState("success");
      setContactName("");
      setContactEmail("");
      setContactSubject("");
      setContactMessage("");
    } catch {
      setContactSubmitState("error");
    }
  }

  function renderHeroStatValue(value: string): ReactNode {
    if (!value.includes("Huawei Technologies Ltd.")) return value;
    const [before, after] = value.split("Huawei Technologies Ltd.");
    return (
      <>
        {before}
        <span className="font-semibold text-blue-200">Huawei Technologies Ltd.</span>
        {after}
      </>
    );
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    let nextShadowX = event.clientX;
    let nextShadowY = event.clientY;
    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    cursorParallaxX.set(Math.max(-1, Math.min(1, normalizedX)));
    cursorParallaxY.set(Math.max(-1, Math.min(1, normalizedY)));

    if (portraitRef.current) {
      const photoRect = portraitRef.current.getBoundingClientRect();
      const margin = 26;
      const glowAvoidRadius = 420;
      const isInsidePortrait =
        event.clientX >= photoRect.left - margin &&
        event.clientX <= photoRect.right + margin &&
        event.clientY >= photoRect.top - margin &&
        event.clientY <= photoRect.bottom + margin;

      // Keep the glow visible, but move it outside portrait bounds.
      if (isInsidePortrait) {
        const leftGap = Math.abs(event.clientX - (photoRect.left - margin));
        const rightGap = Math.abs(photoRect.right + margin - event.clientX);
        const topGap = Math.abs(event.clientY - (photoRect.top - margin));
        const bottomGap = Math.abs(photoRect.bottom + margin - event.clientY);
        const minGap = Math.min(leftGap, rightGap, topGap, bottomGap);

        if (minGap === leftGap) nextShadowX = photoRect.left - glowAvoidRadius;
        else if (minGap === rightGap) nextShadowX = photoRect.right + glowAvoidRadius;
        else if (minGap === topGap) nextShadowY = photoRect.top - glowAvoidRadius;
        else nextShadowY = photoRect.bottom + glowAvoidRadius;
      }
    }

    pointerX.set(event.clientX);
    pointerY.set(event.clientY);
    shadowXTarget.set(nextShadowX);
    shadowYTarget.set(nextShadowY);
  }

  return (
    <main className="custom-cursor-mode relative overflow-x-clip pb-20" onMouseMove={handleMouseMove}>
      <IntroLoader visible={loading} />
      <motion.div style={{ scaleX }} className="scroll-progress" />
      <div className="noise-overlay" />
      <motion.div className="cursor-glow-soft hidden md:block" style={{ x: cursorRingX, y: cursorRingY }} />
      <motion.div className="cursor-glow hidden md:block" style={{ x: cursorRingX, y: cursorRingY }} />
      <motion.div className="cursor-dot hidden md:block" style={{ x: cursorX, y: cursorY }} />

      <header className="aero-header">
        <div className="container-width flex items-center justify-between py-4">
          <Link href="/" className="brand-wordmark">
            AHNAF.SAMIN
          </Link>
          <nav className="nav-modern hidden gap-7 md:flex">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <a href="https://wa.me/8801754466100" target="_blank" rel="noreferrer" className="header-cta px-4 py-2">
            Call Now
          </a>
        </div>
      </header>

      <section ref={heroRef} className="hero-grid relative isolate min-h-[88vh] pt-16 md:pt-20">
        <motion.div style={{ x: blobShiftX, y: blobShiftY }} className="floating-blob blob-a" />
        <motion.div style={{ x: blobShiftBX, y: blobShiftBY }} className="floating-blob blob-b" />
        <motion.div style={{ x: blobShiftCX, y: blobShiftCY }} className="floating-blob blob-c" />
        <motion.div style={{ x: meshCombinedX, y: meshCombinedY, scale: meshScrollScale, rotate: meshScrollRotate }} className="pointer-events-none absolute inset-0 origin-center">
          <Image
            src="/graphics/mesh-lines.svg"
            alt=""
            aria-hidden
            width={1400}
            height={900}
            className="h-full w-full object-cover opacity-30"
          />
        </motion.div>
        <motion.div
          style={{ x: meshSecondaryX, y: meshSecondaryY, rotate: meshSecondaryRotate, scale: 1.1 }}
          className="pointer-events-none absolute inset-0 origin-center"
        >
          <Image
            src="/graphics/mesh-lines.svg"
            alt=""
            aria-hidden
            width={1400}
            height={900}
            className="h-full w-full object-cover opacity-16"
          />
        </motion.div>

        <div className="container-width relative z-10 grid items-end gap-12 pt-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex h-full min-h-[640px] flex-col">
            <p className="mb-4 inline-flex items-center justify-center text-center rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-1 text-xs font-semibold tracking-wider text-blue-100/90">
              OPEN FOR CLIENT WORK • UPWORK READY • GLOBAL REMOTE
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              I build and deliver <span className="text-gradient-aurora">AI/ML systems that ship fast</span> and drive outcomes.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">{profile.tagline}</p>
            <div className="mt-4 overflow-hidden text-sm text-blue-100/85">
              <motion.div
                animate={{ y: [0, -28, -56, -84, 0] }}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
                className="h-7"
              >
                <p>Specialized in {tags[0]}</p>
                <p>Specialized in {tags[1]}</p>
                <p>Specialized in {tags[2]}</p>
                <p>Specialized in {tags[3]}</p>
              </motion.div>
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <MagneticButton className="inline-flex">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#eef4ff] px-5 py-3 text-sm font-semibold !text-[#0a1022] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
                  style={{ color: "#0a1022" }}
                >
                  Explore Work <ArrowRight size={16} className="text-[#0a1022]" />
                </a>
              </MagneticButton>
              <MagneticButton className="inline-flex">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Read Blog <BookOpen size={16} />
                </Link>
              </MagneticButton>
              <MagneticButton className="inline-flex">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-400/10 px-5 py-3 text-sm font-semibold text-blue-100 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400/20"
                >
                  Contact for CV/Proposal <ArrowRight size={16} />
                </a>
              </MagneticButton>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Delivery promise: clear communication, clean implementation, and practical handover for your team.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              ref={portraitRef}
              style={{ y: heroY, rotate: heroRotate, scale: portraitZoom }}
              className="portrait-shell relative"
              whileHover={{ rotate: 0, y: -4 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                aria-hidden
                style={{ opacity: portraitBackdropOpacity, scale: portraitBackdropScale, rotate: portraitBackdropRotate }}
                className="pointer-events-none absolute -top-12 left-1/2 z-0 -translate-x-1/2 text-center"
              >
                <motion.span
                  style={{ y: portraitBackdropTopY, x: portraitBackdropTopX }}
                  className="block whitespace-nowrap text-[clamp(2.1rem,7.3vw,5.6rem)] font-black tracking-[0.16em] text-white/20 drop-shadow-[0_2px_10px_rgba(148,197,255,0.22)]"
                >
                  AI
                </motion.span>
                <motion.span
                  style={{ y: portraitBackdropBottomY, x: portraitBackdropBottomX }}
                  className="block -mt-2 whitespace-nowrap text-[clamp(2.1rem,7.3vw,5.6rem)] font-black tracking-[0.16em] text-white/20 drop-shadow-[0_2px_10px_rgba(148,197,255,0.22)]"
                >
                  ENGINEER
                </motion.span>
              </motion.div>
              <motion.div
                style={{ y: portraitBubbleY, opacity: portraitBubbleOpacity }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                className="comment-bubble left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[92%]"
              >
                Shipping AI That Actually Works
              </motion.div>
              <motion.div
                style={{ x: portraitFrameX, y: portraitFrameY }}
                className="portrait-blend relative z-10"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.24, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ x: [0, 2.6, 0, -2.6, 0], y: [0, -1.6, 0, 1.6, 0], rotate: [0, 0.35, 0, -0.35, 0] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div style={{ scale: cutoutScale, x: cutoutX, y: cutoutY }} className="portrait-cutout-wrap">
                    <Image
                      src="/images/ahnaf-cutout.png"
                      alt="Ahnaf Samin"
                      width={900}
                      height={1200}
                      className="h-[560px] w-full object-contain portrait-image-cutout"
                      quality={100}
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                style={{ scale: statsScale, y: statsY }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
                className="portrait-stats mt-4 origin-top grid grid-cols-1 gap-2 text-xs text-white/85 md:grid-cols-3"
              >
                {profile.heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/12 bg-[#070d1ae0] p-3 backdrop-blur-md">
                    <p className="text-[15px] font-semibold leading-[1.28] text-white/95">{renderHeroStatValue(stat.value)}</p>
                    <p className="mt-1 text-[11px] font-medium tracking-[0.02em] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <motion.section
        className="container-width relative z-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="marquee rounded-2xl border border-white/10 bg-white/[0.03] py-3">
          <div className="marquee-track">
            {[...tags, ...tags, ...tags].map((tag, i) => (
              <span key={`${tag}-${i}`} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee reverse mt-3 rounded-2xl border border-white/10 bg-white/[0.03] py-3">
          <div className="marquee-track">
            {[...profile.skills.slice(0, 9), ...profile.skills.slice(0, 9), ...profile.skills.slice(0, 9)].map((skill, i) => (
              <span key={`${skill}-${i}`} className="rounded-full border border-blue-200/20 bg-blue-200/10 px-3 py-1 text-xs text-blue-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="container-width pt-14 md:pt-16">
        <Reveal>
          <p className="section-label">Client Value</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            <span className="text-gradient-aurora">Client Value and Delivery Outcomes</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {clientValueCards.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <motion.article
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.24 }}
                className="glass glow-card rounded-2xl p-6"
              >
                <item.icon size={18} className="text-blue-100" />
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/75">{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <PinnedShowcaseScene />

      <section id="services" className="container-width pt-14 md:pt-16">
        <Reveal>
          <p className="section-label">Services</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">AI/ML Services for Teams and Clients</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {profile.services.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.04}>
              <motion.article
                whileHover={{ y: -6, rotateX: 3, rotateY: -2 }}
                transition={{ duration: 0.2 }}
                className="glass animated-border h-full rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" className="container-width pt-14 md:pt-16">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Professional Experience and Impact</h2>
        </Reveal>
        <div className="mt-8 grid gap-5">
          {profile.highlights.map((exp, idx) => (
            <Reveal key={exp.title} delay={idx * 0.06}>
              <article className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm text-white/70">{exp.org}</p>
                  </div>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <BriefcaseBusiness size={14} className="mt-1 shrink-0 text-blue-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-width pt-14 md:pt-16">
        <Reveal>
          <p className="section-label">How I Work</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Client-First Delivery Process</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.07}>
              <motion.article
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-2xl border-white/20 p-6"
              >
                <step.icon className="text-blue-200" size={18} />
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/75">{step.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <PinnedTestimonials />

      <section id="projects" className="container-width pt-14 md:pt-16">
        <Reveal>
          <p className="section-label">Selected Work</p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Project Portfolio and Delivery Proof</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {profile.projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.05}>
              <motion.a
                whileHover={{ y: -7, rotateX: 4 }}
                transition={{ duration: 0.2 }}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-5"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.name} thumbnail`}
                    width={1200}
                    height={630}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-white/75">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition group-hover:text-white">
                    View Repository <ArrowRight size={15} />
                  </span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-width pt-14 md:pt-16">
        <Reveal>
          <div className="glass animated-border relative overflow-hidden rounded-3xl p-8 md:p-10">
            <div className="floating-blob blob-c -right-20 top-2 opacity-35" />
            <h2 className="text-3xl font-bold text-white md:text-4xl">Core Technology Stack for Client Delivery</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {profile.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-blue-200/30 bg-blue-200/10 px-3 py-1.5 text-xs font-medium text-blue-100">
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold tracking-wide text-blue-100/85">Industry Recognition</p>
            <div className="mt-2 space-y-2 text-sm text-white/75">
              {profile.achievements.map((achievement) => (
                <p key={achievement}>- {achievement}</p>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/12 bg-white/[0.03] p-3 md:p-4">
              <div className="grid items-center gap-3 md:grid-cols-[220px_1fr]">
                <Image
                  src="/images/awards/galloping-horse-award.png"
                  alt="Galloping Horse Award ceremony moment"
                  width={1600}
                  height={900}
                  className="h-36 w-full rounded-xl object-cover object-center md:h-32"
                />
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-blue-100/85">Award Moment</p>
                  <p className="mt-1 text-sm text-white/78">Galloping Horse Award Ceremony - SEC Rising Star (Huawei, 2025)</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-width pt-14 md:pt-16">
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-10">
            <p className="section-label">Research & Academic Foundation</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Additional Technical Depth</h2>
            <div className="mt-5 space-y-2 text-sm text-white/75">
              {profile.research.map((item) => (
                <p key={item}>- {item}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <footer id="contact" className="mt-16 border-t border-white/10 bg-[#060b1a]/80 pb-8 pt-8">
        <Reveal>
          <div className="w-full">
            <div className="overflow-hidden border-y border-white/10 bg-gradient-to-b from-[#0a1329cc] to-[#070e1fcc]">
              <div className="mx-auto grid w-full max-w-[1400px] gap-6 px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-blue-100/80">CONTACT</p>
                <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Let&apos;s Build Production-Ready AI/ML Solutions</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/72">
                  Open to international client engagements focused on practical AI/ML systems, analytics automation, and measurable product outcomes.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setShowContactForm((prev) => !prev)}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-300/10 px-5 py-3 text-sm font-semibold text-blue-100 transition hover:bg-blue-300/20"
                  >
                    {showContactForm ? "Hide Contact Form" : "Open Contact Form"} <ArrowRight size={16} />
                  </button>
                  <a
                    href="https://wa.me/8801754466100"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-green-300/35 bg-green-300/10 px-5 py-3 text-sm font-semibold text-green-100 transition hover:bg-green-300/20"
                  >
                    WhatsApp Chat <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="grid gap-5 text-sm">
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-white/55">QUICK LINKS</p>
                  <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-white/80">
                    <a href="#services" className="hover:text-white">
                      Services
                    </a>
                    <a href="#experience" className="hover:text-white">
                      Experience
                    </a>
                    <a href="#projects" className="hover:text-white">
                      Projects
                    </a>
                    <Link href="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-white/55">DIRECT CONTACT</p>
                  <div className="mt-2 grid grid-cols-1 gap-2 text-white/85 sm:grid-cols-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-2 text-xs transition hover:bg-white/[0.08]"
                    >
                      <Mail size={14} /> Email
                    </a>
                    <a
                      href="tel:+8801754466100"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-2 text-xs transition hover:bg-white/[0.08]"
                    >
                      <Phone size={14} /> Phone
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-2 text-xs transition hover:bg-white/[0.08]"
                    >
                      <Linkedin size={14} /> LinkedIn
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-2.5 py-2 text-xs transition hover:bg-white/[0.08]"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {showContactForm && (
              <div className="border-t border-white/10 bg-black/25 px-6 py-5 md:px-10 md:py-6">
                <form onSubmit={handleEmailFormSubmit} className="mx-auto grid w-full max-w-[1400px] gap-3 md:grid-cols-2">
                  <input
                    value={contactName}
                    onChange={(event) => setContactName(event.target.value)}
                    placeholder="Your Name"
                    required
                    className="rounded-xl border border-white/20 bg-[#0a1022] px-3 py-2.5 text-sm text-white placeholder:text-white/45"
                  />
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(event) => setContactEmail(event.target.value)}
                    placeholder="Your Email"
                    required
                    className="rounded-xl border border-white/20 bg-[#0a1022] px-3 py-2.5 text-sm text-white placeholder:text-white/45"
                  />
                  <input
                    value={contactSubject}
                    onChange={(event) => setContactSubject(event.target.value)}
                    placeholder="Subject"
                    required
                    className="rounded-xl border border-white/20 bg-[#0a1022] px-3 py-2.5 text-sm text-white placeholder:text-white/45 md:col-span-2"
                  />
                  <textarea
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                    placeholder="Write your project requirements..."
                    rows={5}
                    required
                    className="rounded-xl border border-white/20 bg-[#0a1022] px-3 py-2.5 text-sm text-white placeholder:text-white/45 md:col-span-2"
                  />
                  <div className="flex items-center justify-between gap-3 md:col-span-2">
                    <p className="text-xs text-white/55">
                      {contactSubmitState === "success"
                        ? "Submitted successfully. Your message has been sent."
                        : contactSubmitState === "error"
                          ? "Submission failed. Please try again."
                          : "Submit once and your message goes directly to inbox."}
                    </p>
                    <button
                      type="submit"
                      disabled={contactSubmitState === "submitting"}
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a1022] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {contactSubmitState === "submitting" ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="border-t border-white/10 px-6 py-4 text-xs text-white/50 md:px-10">
              <div className="mx-auto w-full max-w-[1400px]">© {new Date().getFullYear()} Ahnaf Samin. All rights reserved.</div>
            </div>
          </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
