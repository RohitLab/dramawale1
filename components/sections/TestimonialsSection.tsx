import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const TESTIMONIALS = [
  {
    quote:
      "Dramawale transformed our school's annual day from a forgettable event into a moving theatrical experience. The children discovered confidence we never knew they had.",
    name: "Priya Sharma",
    role: "Principal, Delhi Public School, Pune",
    initial: "P",
    color: "#7C1D2F",
  },
  {
    quote:
      "The Certified Drama Educator programme gave me the skills and network to finally make drama a serious subject in my school. I've been placed within weeks of graduating.",
    name: "Arun Mehta",
    role: "CDE Graduate & Drama Teacher, Hyderabad",
    initial: "A",
    color: "#A63245",
  },
  {
    quote:
      "My son was shy to the point of anxiety. Six months in Dramawale's Foundations course and he's performing solos on stage. It's been extraordinary.",
    name: "Kavitha Nair",
    role: "Parent, Bengaluru",
    initial: "K",
    color: "#C4623A",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-[#C4623A] text-sm font-semibold uppercase tracking-widest mb-3">
            What They Say
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C]">
            Stories from Our Community
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="bg-white rounded-2xl border border-[#E2D8CC] p-8 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                <Quote className="w-8 h-8 mb-4 flex-shrink-0" style={{ color: t.color, opacity: 0.3 }} />
                <p className="text-[#4A4A4A] leading-relaxed italic mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F0E9DF]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm">{t.name}</p>
                    <p className="text-[#4A4A4A] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* School logos strip placeholder */}
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <p className="text-[#4A4A4A] text-sm mb-6 uppercase tracking-widest font-medium">
            Trusted by schools across India
          </p>
          <div className="flex items-center justify-center flex-wrap gap-6">
            {["DPS Pune", "Ryan Group", "KV Schools", "Podar Academy", "Orchid IB"].map(
              (school) => (
                <span
                  key={school}
                  className="text-sm font-semibold text-[#4A4A4A]/60 bg-white border border-[#E2D8CC] px-4 py-2 rounded-full"
                >
                  {school}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
