import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Teacher Training — Certified Drama Educator (CDE) Programme",
  description:
    "Become a Certified Drama Educator with Dramawale's CDE programme. Professional training in drama pedagogy, curriculum design, and performance coaching.",
};

const ELIGIBILITY = [
  "Graduate in any stream (Arts preferred)",
  "Passion for theatre, storytelling, or performing arts",
  "Minimum 1 year experience in teaching or youth work",
  "Completion of Level 01 Foundations (or equivalent experience)",
];

const OUTCOMES = [
  "CDE Certificate — nationally recognised by partner schools",
  "Listed on Dramawale Educator Placement Network",
  "Priority access to school placement opportunities",
  "Ongoing professional development workshops",
  "Access to Dramawale's script and curriculum library",
];

const MODULES = [
  {
    icon: BookOpen,
    name: "Drama Pedagogy",
    desc: "Theories of drama education, developmental approaches, and classroom integration strategies across grade levels.",
  },
  {
    icon: Users,
    name: "Facilitation & Leadership",
    desc: "Running workshops, managing groups, building ensemble culture, and creating psychologically safe creative spaces.",
  },
  {
    icon: Award,
    name: "Curriculum Design",
    desc: "Designing NEP-aligned drama syllabi, assessment rubrics, performance frameworks, and annual drama calendars.",
  },
];

export default function TeacherTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FAF6F0] to-[#F0E4D6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-[#C4623A] text-sm font-semibold uppercase tracking-widest mb-3">
              For Educators
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-6">
              Certified Drama
              <span className="text-[#7C1D2F] italic"> Educator Programme</span>
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8 max-w-2xl">
              The CDE is India&apos;s most rigorous professional certification for drama
              teachers — equipping educators to inspire, lead, and transform schools
              through the performing arts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact" className="group">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/academy">View Acting Courses</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
            {[
              { value: "6", unit: "Months", label: "Duration" },
              { value: "200+", unit: "Hours", label: "Training" },
              { value: "100%", unit: "Placement", label: "Support" },
              { value: "NEP", unit: "Aligned", label: "Curriculum" },
            ].map((stat) => (
              <AnimatedSection key={stat.label}>
                <div className="bg-white border border-[#E2D8CC] rounded-2xl p-6 text-center shadow-sm">
                  <div className="font-display text-3xl font-bold text-[#7C1D2F]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#C4623A] uppercase tracking-widest">
                    {stat.unit}
                  </div>
                  <div className="text-xs text-[#4A4A4A] mt-1">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Modules */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
              Core Training Modules
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {MODULES.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <AnimatedSection key={mod.name} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-[#E2D8CC] p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#7C1D2F]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#7C1D2F]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1C1C1C] mb-2">
                      {mod.name}
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{mod.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Eligibility + Outcomes */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-[#7C1D2F] rounded-2xl p-8 h-full">
                <h3 className="font-display text-xl font-bold text-white mb-5">
                  Eligibility
                </h3>
                <ul className="space-y-3">
                  {ELIGIBILITY.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#F4C5A0] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F0E9DF] border border-[#E2D8CC] rounded-2xl p-8 h-full">
                <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-5">
                  Programme Outcomes
                </h3>
                <ul className="space-y-3">
                  {OUTCOMES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#4A4A4A]">
                      <CheckCircle2 className="w-4 h-4 text-[#7C1D2F] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
