import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function MissionSection() {
  return (
    <section className="py-24 bg-[#F0E9DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pull quote */}
          <AnimatedSection>
            <div className="relative inline-block mb-10">
              <Quote className="w-12 h-12 text-[#7C1D2F]/20 absolute -top-4 -left-6" />
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold italic text-[#7C1D2F] leading-snug">
                Drama is the language of the soul.
              </blockquote>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 leading-tight">
              Drama is not an extracurricular.
              <br />
              <span className="text-[#A63245]">It is education.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
              At Dramawale, we believe the performing arts are foundational to holistic
              development. We are building India&apos;s most comprehensive performing arts
              education ecosystem — one that bridges schools, students, educators, and
              communities through the transformative power of theatre.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/kathasang">
                Learn About Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E2D8CC]" />
          <div className="w-2 h-2 rounded-full bg-[#7C1D2F]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4623A]" />
          <div className="w-2 h-2 rounded-full bg-[#7C1D2F]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E2D8CC]" />
        </div>
      </div>
    </section>
  );
}
