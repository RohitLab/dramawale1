"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

interface PageHeroProps {
  /** e.g. "For Educators" — small gold badge above headline */
  eyebrow: string;
  /** Main headline — can include JSX for italic/coloured spans */
  headline: ReactNode;
  /** Supporting paragraph */
  subheadline: string;
  /** Full-width background image path from /public */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt: string;
  /**
   * Which side of the image to anchor (for portrait shots keep right-center;
   * for wide stage shots use center)
   */
  imagePosition?: string;
  /** Optional extra content below subheadline (buttons, search, etc.) */
  children?: ReactNode;
  /** Extra top/bottom padding class; defaults to "py-28 lg:py-36" */
  paddingClass?: string;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const, delay },
});

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  imageSrc,
  imageAlt,
  imagePosition = "center",
  children,
  paddingClass = "py-28 lg:py-36",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#1C0609]">
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={88}
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="100vw"
        />
      </div>

      {/* ── Dark maroon overlay: strong left → fades right ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7A1F2B]/85 via-[#7A1F2B]/60 to-[#1F2340]/30 pointer-events-none" />
      {/* ── Top-to-bottom vignette so text doesn't clash with navbar ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0608]/50 via-transparent to-[#0D0608]/30 pointer-events-none" />

      {/* ── Decorative gold accents ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C9A24B]/60 via-[#C9A24B]/20 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-transparent" />
        {/* Warm spotlight bloom behind text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[50%] h-[60%] bg-[#7A1F2B]/20 rounded-full blur-3xl" />
      </div>

      {/* ── Content ── */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${paddingClass}`}>
        <div className="max-w-2xl">

          {/* Eyebrow badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 bg-[#C9A24B]/20 border border-[#C9A24B]/40 text-[#E8A33D] rounded-full px-4 py-1.5 text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            {eyebrow}
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.22)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FBF6EE] leading-[1.15] tracking-tight mb-5 drop-shadow-lg"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.34)}
            className="text-lg sm:text-xl text-[#FBF6EE]/80 leading-relaxed mb-8 drop-shadow"
          >
            {subheadline}
          </motion.p>

          {/* Slot for buttons / search / extras */}
          {children && (
            <motion.div {...fadeUp(0.46)}>
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
