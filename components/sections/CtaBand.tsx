import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#7C1D2F]">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#A63245]/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#C4623A]/30 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your School&apos;s
            <br className="hidden sm:block" />
            <span className="text-[#F4C5A0] italic"> Drama Programme?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re a principal looking to enrich your school&apos;s curriculum,
            an aspiring actor ready to train seriously, or an educator passionate about
            drama — Dramawale has a place for you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="white" className="group">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="white-outline">
              <Link href="/academy">Explore Programmes</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
