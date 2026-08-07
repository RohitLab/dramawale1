import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Star, Users, BookOpen, ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "KATHASANG — Social Impact Fellowship for Underprivileged Children",
  description:
    "KATHASANG is Dramawale's social impact fellowship bringing theatre, storytelling, and drama to underprivileged and tribal children across India.",
};

const IMPACT_STATS = [
  { value: "500+", label: "Children Reached" },
  { value: "12", label: "Communities Served" },
  { value: "30+", label: "Volunteer Educators" },
  { value: "8", label: "States Covered" },
];

const TESTIMONIALS = [
  {
    name: "Meena Bai",
    role: "Mother of a KATHASANG participant, Rajasthan",
    quote:
      "My daughter used to be so shy she wouldn't look up in class. After six weeks of KATHASANG, she performed on a stage in front of hundreds of people. I cried happy tears.",
  },
  {
    name: "Rakesh Kumar",
    role: "Village Teacher, Jharkhand",
    quote:
      "KATHASANG didn't just teach drama. It taught our children that their stories matter, their voices matter. That is education no textbook can give.",
  },
];

export default function KathasangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1C1C1C] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#A63245]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C4623A]/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-[#C4623A]" />
              <p className="text-[#C4623A] text-sm font-semibold uppercase tracking-widest">
                Social Impact Initiative
              </p>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              KATHASANG
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-8 max-w-2xl">
              <span className="italic font-display text-[#F4C5A0]">"Katha"</span> — story.{" "}
              <span className="italic font-display text-[#F4C5A0]">"Sang"</span> — together.
              <br className="hidden sm:block" />
              A fellowship programme bringing the power of drama and storytelling to
              underprivileged and tribal children who need it most.
            </p>
            <Button asChild size="lg" variant="terracotta">
              <Link href="/contact" className="group">
                Support KATHASANG
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-5">
                Drama as a Tool for
                <span className="text-[#7C1D2F] italic"> Healing & Empowerment</span>
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                In rural communities, tribal hamlets, and urban slums across India,
                thousands of children are denied access to the arts. KATHASANG exists
                to change that — one story at a time.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Our volunteer educators spend weeks embedded in communities, running
                daily drama workshops, storytelling circles, and performance rehearsals.
                Children learn to express, to imagine, to believe in their own voices.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                The programme culminates in a community performance — a moment of joy,
                pride, and visibility for children who are too often invisible.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {IMPACT_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl border border-[#E2D8CC] p-6 text-center shadow-sm"
                  >
                    <div className="font-display text-4xl font-bold text-[#7C1D2F] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[#F0E9DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
              What the Fellowship Involves
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BookOpen, title: "Storytelling Workshops", desc: "Daily 2-hour sessions exploring local folk tales, personal narratives, and improvised stories." },
              { icon: Users, title: "Ensemble Building", desc: "Group exercises that build trust, collaboration, and a sense of belonging among participants." },
              { icon: Star, title: "Performance Coaching", desc: "Guided rehearsals culminating in a final community show — often the first public performance for these children." },
              { icon: Heart, title: "Wellbeing Integration", desc: "Drama used as a therapeutic tool — safe space for emotional expression, identity exploration, and joy." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-[#E2D8CC] p-6 shadow-sm h-full">
                    <div className="w-10 h-10 rounded-xl bg-[#7C1D2F]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#7C1D2F]" />
                    </div>
                    <h3 className="font-semibold text-[#1C1C1C] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#7C1D2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Voices from the Field
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <Quote className="w-8 h-8 text-[#F4C5A0]/50 mb-4" />
                  <p className="text-white/90 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild size="lg" variant="white">
              <Link href="/contact" className="group">
                Get Involved
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
