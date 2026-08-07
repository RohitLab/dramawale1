"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Inline SVG theatrical masks illustration */
function TheatreMasks() {
  return (
    <svg
      viewBox="0 0 380 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Stage spotlight */}
      <ellipse cx="190" cy="310" rx="150" ry="28" fill="#7C1D2F" opacity="0.06" />

      {/* Comedy mask (left, tilted back) */}
      <g transform="translate(40, 60) rotate(-12, 100, 120)">
        <ellipse cx="100" cy="130" rx="88" ry="100" fill="#FAF6F0" stroke="#E2D8CC" strokeWidth="2" />
        <ellipse cx="100" cy="130" rx="85" ry="97" fill="white" />
        {/* Eyes */}
        <ellipse cx="72" cy="108" rx="14" ry="18" fill="#7C1D2F" opacity="0.12" />
        <ellipse cx="128" cy="108" rx="14" ry="18" fill="#7C1D2F" opacity="0.12" />
        <ellipse cx="72" cy="105" rx="6" ry="8" fill="#7C1D2F" />
        <ellipse cx="128" cy="105" rx="6" ry="8" fill="#7C1D2F" />
        {/* Smile */}
        <path d="M68 148 Q100 170 132 148" stroke="#7C1D2F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Cheek blush */}
        <ellipse cx="60" cy="132" rx="14" ry="9" fill="#C4623A" opacity="0.15" />
        <ellipse cx="140" cy="132" rx="14" ry="9" fill="#C4623A" opacity="0.15" />
        {/* Decorative crown/hair */}
        <path d="M28 80 Q50 20 100 40 Q150 20 172 80" stroke="#E2D8CC" strokeWidth="1.5" fill="#FBF8F4" />
        <circle cx="50" cy="52" r="6" fill="#C4623A" opacity="0.4" />
        <circle cx="100" cy="38" r="7" fill="#A63245" opacity="0.4" />
        <circle cx="150" cy="52" r="6" fill="#C4623A" opacity="0.4" />
      </g>

      {/* Tragedy mask (right, front) */}
      <g transform="translate(165, 20) rotate(10, 105, 130)">
        <ellipse cx="105" cy="135" rx="90" ry="105" fill="#7C1D2F" opacity="0.08" />
        <ellipse cx="105" cy="133" rx="88" ry="103" fill="#FAF6F0" stroke="#E2D8CC" strokeWidth="2" />
        <ellipse cx="105" cy="133" rx="85" ry="100" fill="white" />
        {/* Eyes — downturned */}
        <ellipse cx="76" cy="110" rx="14" ry="18" fill="#7C1D2F" opacity="0.12" />
        <ellipse cx="134" cy="110" rx="14" ry="18" fill="#7C1D2F" opacity="0.12" />
        <ellipse cx="76" cy="113" rx="6" ry="7" fill="#1C1C1C" />
        <ellipse cx="134" cy="113" rx="6" ry="7" fill="#1C1C1C" />
        {/* Brow lines (sad) */}
        <path d="M62 95 Q76 88 90 96" stroke="#4A4A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M120 96 Q134 88 148 95" stroke="#4A4A4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Frown */}
        <path d="M72 158 Q105 140 138 158" stroke="#7C1D2F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Tear drop */}
        <path d="M78 122 Q74 132 78 138 Q82 132 78 122" fill="#A63245" opacity="0.3" />
        {/* Crown/decoration */}
        <path d="M25 84 Q50 18 105 42 Q160 18 185 84" stroke="#E2D8CC" strokeWidth="1.5" fill="#FAF6F0" />
        <circle cx="50" cy="54" r="6" fill="#7C1D2F" opacity="0.35" />
        <circle cx="105" cy="40" r="8" fill="#7C1D2F" opacity="0.5" />
        <circle cx="160" cy="54" r="6" fill="#7C1D2F" opacity="0.35" />
      </g>

      {/* Floating stars / sparkles */}
      <circle cx="32" cy="32" r="4" fill="#C4623A" opacity="0.4" />
      <circle cx="350" cy="55" r="3" fill="#A63245" opacity="0.35" />
      <circle cx="20" cy="260" r="3" fill="#C4623A" opacity="0.3" />
      <circle cx="360" cy="210" r="4" fill="#7C1D2F" opacity="0.25" />
      <circle cx="190" cy="15" r="5" fill="#A63245" opacity="0.3" />

      {/* Small decorative arcs (stage) */}
      <path d="M10 310 Q190 270 370 310" stroke="#E2D8CC" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#FAF6F0]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6F0] via-[#F5ECE3] to-[#F0E4D6]" />
        {/* Spotlight top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#A63245]/10 rounded-full blur-3xl" />
        {/* Spotlight bottom-left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#C4623A]/8 rounded-full blur-3xl" />
        {/* Stage curtain pillars */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#7C1D2F]/40 via-[#7C1D2F]/15 to-transparent" />
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#7C1D2F]/40 via-[#7C1D2F]/15 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1C1C1C 0px, #1C1C1C 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #1C1C1C 0px, #1C1C1C 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#7C1D2F]/10 border border-[#7C1D2F]/20 text-[#7C1D2F] rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              India&apos;s Premier Drama Education Platform
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1C1C1C] leading-[1.1] tracking-tight mb-6"
            >
              Bringing Classrooms{" "}
              <span className="text-[#7C1D2F] italic">and Stages</span>
              <br />
              to Life Through Drama
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed max-w-2xl mb-10"
            >
              Empowering students with certified acting programmes, equipping educators
              with transformative pedagogy, and partnering with schools to build
              India&apos;s most vibrant drama culture — one performance at a time.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg">
                <Link href="/academy" className="group">
                  Explore Certification Courses
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/school-services">Hire Drama Teachers for Schools</Link>
              </Button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 mt-10 flex-wrap"
            >
              {["NEP-Aligned", "100+ Schools", "3 Certifications"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium text-[#7C1D2F] bg-white border border-[#E2D8CC] px-3 py-1.5 rounded-full shadow-sm"
                >
                  ✓ {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Soft glow behind illustration */}
              <div className="absolute inset-10 bg-[#A63245]/10 rounded-full blur-2xl" />
              <TheatreMasks />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
