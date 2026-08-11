"use client";

import Link from "next/link";
import { GraduationCap, School, Users, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-24 bg-[#FBF6EE] relative overflow-hidden">
      {/* Subtle warm radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(232,163,61,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-[#E8A33D] text-sm font-bold uppercase tracking-widest mb-3">
            Our Framework
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1F2B] mb-4">
            Four Pillars of Theatrical Excellence
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto leading-relaxed">
            Every dimension of drama education, covered — from stage performance to
            social transformation.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={pillar.href} className="group block h-full">
                  <div className="stage-card h-full p-8 relative overflow-hidden">
                    {/* Gold corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-full h-full"
                        style={{
                          background: "linear-gradient(135deg, transparent 50%, rgba(201,162,75,0.12) 50%)"
                        }}
                      />
                    </div>

                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#FBF6EE] border border-[#E2D4B8] flex items-center justify-center group-hover:bg-[#7A1F2B] group-hover:border-[#7A1F2B] transition-all duration-300">
                        <Icon className="w-5 h-5 text-[#7A1F2B] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-semibold text-[#C9A24B] bg-[#C9A24B]/10 border border-[#C9A24B]/25 px-2.5 py-1 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>

                    <div className="mb-1">
                      <span className="font-display text-5xl font-bold text-[#E2D4B8] select-none">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-3 leading-tight group-hover:text-[#7A1F2B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[#7A1F2B] text-sm font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
