import Link from "next/link";
import { GraduationCap, School, Users, Heart, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const PILLARS = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Academy & Certification",
    description:
      "Three progressive levels of acting and drama training — Foundations, Advanced Acting, and Actor's Siddhi — designed to build world-class performers and confident communicators.",
    href: "/academy",
    tag: "For Students",
  },
  {
    number: "02",
    icon: School,
    title: "School Partnerships & Competitions",
    description:
      "Drama consultancy, event management, Nukkad Natak festivals, and Mime Competitions that bring performing arts into the heart of school culture.",
    href: "/school-services",
    tag: "For Schools",
  },
  {
    number: "03",
    icon: Users,
    title: "Educator Recruitment",
    description:
      "We connect schools with our network of certified drama educators — trained, vetted professionals ready to lead impactful drama programmes.",
    href: "/school-services",
    tag: "For Institutions",
  },
  {
    number: "04",
    icon: Heart,
    title: "KATHASANG Social Impact",
    description:
      "A fellowship programme dedicated to bringing theatre and storytelling to underprivileged and tribal children, using drama as a tool for healing and empowerment.",
    href: "/kathasang",
    tag: "Social Impact",
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#C4623A] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Framework
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4">
            Four Pillars of Theatrical Excellence
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto leading-relaxed">
            Every dimension of drama education, covered — from stage performance to
            social transformation.
          </p>
        </AnimatedSection>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.number} delay={i * 0.1}>
                <Link href={pillar.href} className="group block h-full">
                  <div className="h-full bg-white rounded-2xl border border-[#E2D8CC] p-8 shadow-sm hover:shadow-xl hover:border-[#A63245]/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E2D8CC] flex items-center justify-center group-hover:bg-[#7C1D2F] group-hover:border-[#7C1D2F] transition-colors">
                        <Icon className="w-5 h-5 text-[#7C1D2F] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-semibold text-[#C4623A] bg-[#C4623A]/10 px-2.5 py-1 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>

                    <div className="mb-1">
                      <span className="font-display text-5xl font-bold text-[#E2D8CC] select-none">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-3 leading-tight group-hover:text-[#7C1D2F] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="flex items-center gap-1 text-[#7C1D2F] text-sm font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
