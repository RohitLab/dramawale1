import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Star, Zap, Crown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Drama & Acting Certification Courses — Dramawale Academy",
  description:
    "Join Dramawale Academy's three-tier certification programme in Nashik: Foundations of Drama (3 months), Advanced Acting (6 months), and Actor's Siddhi (12 months). NEP-aligned, industry-ready acting training for students across India.",
  alternates: { canonical: "https://www.dramawale.com/academy" },
  keywords: ["acting courses Nashik", "drama certification India", "theatre training Maharashtra", "NEP drama curriculum", "acting classes for students", "Dramawale Academy"],
  openGraph: {
    title: "Drama & Acting Certification Courses — Dramawale Academy",
    description: "Three-tier certified drama training: Foundations, Advanced Acting, and Actor's Siddhi. NEP-aligned, industry-ready.",
    url: "https://www.dramawale.com/academy",
    type: "website",
  },
};

const LEVELS = [
  {
    icon: Star,
    level: "Level 01",
    name: "Foundations of Drama",
    tagline: "Where Every Journey Begins",
    duration: "3 Months",
    format: "Weekends · In-person & Online",
    color: "#C4623A",
    highlights: [
      "Introduction to theatre history & forms",
      "Voice modulation and body language",
      "Improvisation and scene work",
      "Script reading and character analysis",
      "Public speaking and stage confidence",
      "Nukkad Natak & street theatre basics",
    ],
    outcome: "Graduate with a Dramawale Foundation Certificate and the confidence to perform on any stage.",
  },
  {
    icon: Zap,
    level: "Level 02",
    name: "Advanced Acting",
    tagline: "Deepen Your Craft",
    duration: "6 Months",
    format: "Weekends · Intensive In-person",
    color: "#A63245",
    highlights: [
      "Stanislavski & method acting techniques",
      "Emotional memory and sense recall",
      "Monologue and duologue masterclasses",
      "Camera acting and screen presence",
      "Direction and production fundamentals",
      "Original play development",
    ],
    outcome: "Earn the Advanced Acting Certification and access our exclusive placement network for schools and productions.",
  },
  {
    icon: Crown,
    level: "Level 03",
    name: "Actor's Siddhi",
    tagline: "Mastery & Mentorship",
    duration: "12 Months",
    format: "Full Programme · Blended",
    color: "#7C1D2F",
    highlights: [
      "Classical Indian theatre traditions",
      "Directing and ensemble leadership",
      "Drama pedagogy for educators",
      "Professional audition preparation",
      "Industry mentorship sessions",
      "Capstone production showcase",
    ],
    outcome: "Complete Dramawale's highest honour — Actor's Siddhi — and qualify for our Certified Drama Educator (CDE) pathway.",
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Dramawale Academy"
        headline={<>Certification Courses in <span className="text-[#E8A33D] italic">Drama & Acting</span></>}
        subheadline="Three progressive levels of professional drama training — designed for aspiring actors, confident communicators, and passionate educators. NEP-aligned and industry-recognised."
        imageSrc="/academy-hero.png"
        imageAlt="Students performing in an ensemble theatre production — Dramawale Academy"
        imagePosition="center"
      >
        <Button asChild size="lg" className="bg-[#E8A33D] hover:bg-[#C9A24B] text-[#1F2340] font-bold rounded-full shadow-lg hover:-translate-y-0.5 transition-all">
          <Link href="/contact" className="group">
            Enrol Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </PageHero>

      {/* Levels */}
      <section className="py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {LEVELS.map((level, i) => {
              const Icon = level.icon;
              return (
                <AnimatedSection key={level.level} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-[#E2D8CC] overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="grid lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between" style={{ backgroundColor: level.color }}>
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">{level.level}</p>
                          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">{level.name}</h2>
                          <p className="text-white/80 italic mb-6">{level.tagline}</p>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                              Duration: {level.duration}
                            </div>
                            <div className="flex items-center gap-2 text-white/80 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                              {level.format}
                            </div>
                          </div>
                        </div>
                        <Button asChild variant="white" size="sm" className="mt-8 w-fit">
                          <Link href="/contact">Apply for This Level</Link>
                        </Button>
                      </div>
                      <div className="lg:col-span-3 p-8 lg:p-10">
                        <h3 className="font-semibold text-[#1C1C1C] mb-4 text-sm uppercase tracking-widest">Curriculum Highlights</h3>
                        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                          {level.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-[#4A4A4A]">
                              <CheckCircle2 className="w-4 h-4 text-[#7C1D2F] mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-[#FAF6F0] rounded-xl p-4 border border-[#E2D8CC]">
                          <p className="text-sm font-semibold text-[#7C1D2F] mb-1">Programme Outcome</p>
                          <p className="text-sm text-[#4A4A4A] leading-relaxed">{level.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
