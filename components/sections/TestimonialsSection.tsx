"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Dramawale transformed our school's annual day from a forgettable event into a moving theatrical experience. The children discovered confidence we never knew they had.",
    name: "Priya Sharma",
    role: "Principal, Delhi Public School, Pune",
    initial: "P",
  },
  {
    quote:
      "The Certified Drama Educator programme gave me the skills and network to finally make drama a serious subject in my school. I've been placed within weeks of graduating.",
    name: "Arun Mehta",
    role: "CDE Graduate & Drama Teacher, Hyderabad",
    initial: "A",
  },
  {
    quote:
      "My son was shy to the point of anxiety. Six months in Dramawale's Foundations course and he's performing solos on stage. It's been extraordinary.",
    name: "Kavitha Nair",
    role: "Parent, Bengaluru",
    initial: "K",
  },
];

const SCHOOLS = [
  "DPS Pune", "Ryan Group", "KV Schools", "Podar Academy",
  "Orchid IB", "DAV Schools", "Narayana Group", "The Orchid School",
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-24 bg-[#FBF6EE] relative overflow-hidden">
      {/* Subtle maroon wash */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(122,31,43,0.05) 0%, transparent 55%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#E8A33D] text-sm font-bold uppercase tracking-widest mb-3">
            What They Say
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1F2B]">
            Stories from Our Community
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="stage-card p-10 text-center"
              >
                <Quote className="w-10 h-10 text-[#C9A24B]/30 mx-auto mb-5" />
                <p className="text-[#4A4A4A] text-lg leading-relaxed italic mb-8">
                  &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7A1F2B] flex items-center justify-center text-white font-bold text-sm font-display flex-shrink-0">
                    {TESTIMONIALS[active].initial}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#1A1A1A] text-sm">{TESTIMONIALS[active].name}</p>
                    <p className="text-[#4A4A4A] text-xs">{TESTIMONIALS[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-[#E2D4B8] bg-white flex items-center justify-center text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white hover:border-[#7A1F2B] transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === active
                      ? "w-6 h-2.5 bg-[#E8A33D]"
                      : "w-2.5 h-2.5 bg-[#E2D4B8] hover:bg-[#C9A24B]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-[#E2D4B8] bg-white flex items-center justify-center text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white hover:border-[#7A1F2B] transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ── Partner logos marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <p className="text-[#4A4A4A] text-sm mb-8 uppercase tracking-widest font-semibold text-center">
            Trusted by schools across India
          </p>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FBF6EE] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FBF6EE] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee gap-8 w-max">
              {[...SCHOOLS, ...SCHOOLS].map((school, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-[#4A4A4A]/60 bg-white border border-[#E2D4B8] px-5 py-2.5 rounded-full whitespace-nowrap shadow-sm"
                >
                  {school}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
