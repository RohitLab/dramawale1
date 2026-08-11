import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#7A1F2B]">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#A3283A]/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#E8A33D]/15 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#C9A24B]/40 to-transparent" />
        {/* Fabric texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, #C9A24B 0px, #C9A24B 1px, transparent 1px, transparent 30px)"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your School&apos;s
            <br className="hidden sm:block" />
            <span className="text-[#E8A33D] italic"> Drama Programme?</span>
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
            <Button
              asChild
              size="lg"
              className="bg-[#E8A33D] hover:bg-[#C9A24B] text-[#1F2340] font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all group"
            >
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white/60 text-white bg-transparent hover:bg-white/10 rounded-full transition-all"
            >
              <Link href="/academy">Explore Programmes</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
