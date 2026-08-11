"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Curtain panel — pure CSS transform so no layout shift */
function CurtainPanel({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-y-0 w-1/2 z-10 pointer-events-none ${
        side === "left" ? "left-0 curtain-left" : "right-0 curtain-right"
      }`}
      style={{
        background:
          side === "left"
            ? "linear-gradient(to right, #5C1620, #7A1F2B 60%, #A3283A)"
            : "linear-gradient(to left, #5C1620, #7A1F2B 60%, #A3283A)",
      }}
    >
      {/* Curtain fabric texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            ${side === "left" ? "90deg" : "270deg"},
            rgba(201,162,75,0.4) 0px, rgba(201,162,75,0.4) 1px,
            transparent 1px, transparent 18px
          )`,
        }}
      />
      {/* Gold fringe along inner edge */}
      <div
        className={`absolute inset-y-0 w-4 ${
          side === "left" ? "right-0" : "left-0"
        } bg-gradient-to-${side === "left" ? "r" : "l"} from-transparent to-[#C9A24B]/60`}
      />
    </div>
  );
}

export function HeroSection() {
  const [curtainDone, setCurtainDone] = useState(false);

  useEffect(() => {
    // Remove curtain panels from DOM after animation to free compositing layer
    const t = setTimeout(() => setCurtainDone(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#1C0609]">

      {/* ── Curtain panels (slide outward on load) ── */}
      {!curtainDone && (
        <>
          <CurtainPanel side="left" />
          <CurtainPanel side="right" />
        </>
      )}

      {/* ── Background: Kerala dance image ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-stage.png"
          alt="Live stage performance — Dramawale hero"
          fill
          priority
          quality={90}
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* ── Left-side text darkening gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2340]/90 via-[#1F2340]/70 to-transparent pointer-events-none" />
      {/* ── Top/bottom vignette ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/30 via-transparent to-[#1A1A1A]/40 pointer-events-none" />

      {/* ── Decorative accents ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stage curtain pillars */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#C9A24B]/70 via-[#C9A24B]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-[#C9A24B]/70 via-[#C9A24B]/30 to-transparent" />
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/60 to-transparent" />
        {/* Subtle warm spotlight behind text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[55%] h-[70%] bg-[#7A1F2B]/15 rounded-full blur-3xl" />
      </div>

      {/* ── Content: text on left open space ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-28 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="inline-flex items-center gap-2 bg-[#C9A24B]/20 border border-[#C9A24B]/40 text-[#E8A33D] rounded-full px-4 py-1.5 text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            India&apos;s Premier Drama Education Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.75 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-6 drop-shadow-lg"
          >
            Bringing Classrooms{" "}
            <span className="text-[#E8A33D] italic">and Stages</span>
            <br />
            to Life Through Drama
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.9 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 drop-shadow"
          >
            Empowering students with certified acting programmes, equipping educators
            with transformative pedagogy, and partnering with schools to build
            India&apos;s most vibrant drama culture — one performance at a time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.05 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#E8A33D] hover:bg-[#C9A24B] text-[#1F2340] font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Link href="/academy" className="group">
                Explore Certification Courses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white/60 text-white bg-transparent hover:bg-white/10 rounded-full backdrop-blur-sm transition-all"
            >
              <Link href="/school-services">Hire Drama Teachers for Schools</Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="flex items-center gap-3 mt-10 flex-wrap"
          >
            {["NEP-Aligned", "100+ Schools", "3 Certifications"].map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold text-[#E8A33D] bg-[#E8A33D]/10 border border-[#E8A33D]/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
              >
                ✓ {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
