"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function MissionSection() {
  return (
    <section className="relative py-0 overflow-hidden bg-[#1F2340] min-h-[520px] flex items-center">
      {/* ── Kathakali dancer background ── */}
      <div className="absolute inset-0">
        <Image
          src="/mission-kathakali.png"
          alt="Illuminated Kathakali dancer — Dramawale mission"
          fill
          quality={85}
          className="object-cover object-left"
          sizes="100vw"
        />
      </div>

      {/* ── Right-side text gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#1F2340]/95 via-[#1F2340]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F2340]/60 via-transparent to-transparent pointer-events-none" />

      {/* ── Gold border accents ── */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />

      {/* ── Content: text on RIGHT open space ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="ml-auto max-w-xl">

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-8"
          >
            <Quote className="w-10 h-10 text-[#C9A24B]/30 absolute -top-3 -left-4" />
            <blockquote className="font-display text-2xl sm:text-3xl font-bold italic text-[#E8A33D] leading-snug pl-4">
              Drama is the language of the soul.
            </blockquote>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Drama is not an extracurricular.
            <br />
            <span className="text-[#E8A33D]">It is education.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="text-white/75 text-lg leading-relaxed mb-10"
          >
            At Dramawale, we believe the performing arts are foundational to holistic
            development. We are building India&apos;s most comprehensive performing arts
            education ecosystem — one that bridges schools, students, educators, and
            communities through the transformative power of theatre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#E8A33D] hover:bg-[#C9A24B] text-[#1F2340] font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
            >
              <Link href="/kathasang">
                Learn About Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
