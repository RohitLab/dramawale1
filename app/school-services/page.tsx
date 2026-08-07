import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Calendar,
  UserCheck,
  Trophy,
  Music,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "School Services — Drama Consultancy, Events & Teacher Recruitment",
  description:
    "Dramawale partners with schools to offer drama consultancy, event management, teacher recruitment, and prestigious competitions like Nukkad Natak and Mime Festivals.",
};

const SERVICES = [
  {
    icon: Lightbulb,
    title: "Drama Consultancy",
    description:
      "We work with school leadership to design or revamp drama curricula, set up dedicated drama departments, and integrate performing arts seamlessly into the school's NEP-aligned academic framework.",
    features: ["Curriculum design & NEP mapping", "Infrastructure advisory", "Annual drama calendar planning"],
  },
  {
    icon: Calendar,
    title: "Event Management",
    description:
      "End-to-end production and event management for annual day shows, inter-school festivals, cultural extravaganzas, and community theatre events — handled entirely by our team of professionals.",
    features: ["Script writing & direction", "Set design & stage management", "Technical production support"],
  },
  {
    icon: UserCheck,
    title: "Drama Teacher Recruitment",
    description:
      "We connect schools with Dramawale-certified drama educators from our growing network of Certified Drama Educators (CDE). Every teacher is trained, vetted, and ready to lead.",
    features: ["CDE-certified professionals", "Full placement support", "Ongoing mentor supervision"],
  },
];

const COMPETITIONS = [
  {
    icon: Trophy,
    name: "Nukkad Natak Festival",
    description:
      "India's most celebrated street theatre competition for school students — celebrating social awareness, community storytelling, and raw dramatic energy.",
    format: "District → State → National",
    age: "Classes 6–12",
  },
  {
    icon: Music,
    name: "Mime & Movement Festival",
    description:
      "A silent stage competition celebrating physical expression, mime artistry, and non-verbal storytelling — building body language mastery in young performers.",
    format: "Inter-school · Annual",
    age: "Classes 4–10",
  },
];

export default function SchoolServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FAF6F0] to-[#F0E4D6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-[#C4623A] text-sm font-semibold uppercase tracking-widest mb-3">
              For Schools & Institutions
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight mb-6">
              Drama Services
              <span className="text-[#7C1D2F] italic"> Built for Schools</span>
            </h1>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8 max-w-2xl">
              From curriculum design to competitions, teacher placement to event
              production — Dramawale is your complete performing arts partner.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="group">
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
              Our School Services
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
              Comprehensive solutions for schools ready to make drama a cornerstone of
              student life.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-[#E2D8CC] p-8 h-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#7C1D2F]/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#7C1D2F]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C1D2F] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-20 bg-[#F0E9DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-4">
              Signature Competitions
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-xl mx-auto">
              Prestigious platforms for young performers to compete, grow, and shine.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {COMPETITIONS.map((comp, i) => {
              const Icon = comp.icon;
              return (
                <AnimatedSection key={comp.name} delay={i * 0.15}>
                  <div className="bg-white rounded-2xl border border-[#E2D8CC] p-8 shadow-sm">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#A63245] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[#1C1C1C]">
                          {comp.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-[#C4623A] font-semibold bg-[#C4623A]/10 px-2 py-0.5 rounded-full">
                            {comp.age}
                          </span>
                          <span className="text-xs text-[#4A4A4A]">{comp.format}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact" className="group">
                Register Your School
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
