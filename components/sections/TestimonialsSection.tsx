"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, X, Mail, Phone, MapPin, Send } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Dramawale transformed our school's annual day from a forgettable event into a moving theatrical experience. The children discovered confidence we never knew they had.",
    name: "Priya Sharma",
    role: "Principal, Delhi Public School, Pune",
    initial: "P",
  },
  {
    quote:
      "The Certified Drama Educator programme gave me the skills and network to finally make drama a serious subject in my school. I've been placed within weeks of graduating.",
    name: "Arun Mehta",
    role: "CDE Graduate & Drama Teacher, Hyderabad",
    initial: "A",
  },
  {
    quote:
      "My son was shy to the point of anxiety. Six months in Dramawale's Foundations course and he's performing solos on stage. It's been extraordinary.",
    name: "Kavitha Nair",
    role: "Parent, Bengaluru",
    initial: "K",
  },
];


export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-24 bg-[#FBF6EE] relative overflow-hidden">
      {/* Subtle maroon wash */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(122,31,43,0.05) 0%, transparent 55%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#E8A33D] text-sm font-bold uppercase tracking-widest mb-3">
            What They Say
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7A1F2B]">
            Stories from Our Community
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="stage-card p-10 text-center"
              >
                <Quote className="w-10 h-10 text-[#C9A24B]/30 mx-auto mb-5" />
                <p className="text-[#4A4A4A] text-lg leading-relaxed italic mb-8">
                  &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7A1F2B] flex items-center justify-center text-white font-bold text-sm font-display flex-shrink-0">
                    {TESTIMONIALS[active].initial}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#1A1A1A] text-sm">{TESTIMONIALS[active].name}</p>
                    <p className="text-[#4A4A4A] text-xs">{TESTIMONIALS[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-[#E2D4B8] bg-white flex items-center justify-center text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white hover:border-[#7A1F2B] transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === active
                      ? "w-6 h-2.5 bg-[#E8A33D]"
                      : "w-2.5 h-2.5 bg-[#E2D4B8] hover:bg-[#C9A24B]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-[#E2D4B8] bg-white flex items-center justify-center text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white hover:border-[#7A1F2B] transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ── Apply for Drama Teacher CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-[#4A4A4A] text-sm mb-4 uppercase tracking-widest font-semibold">
            Join Our Team
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#7A1F2B] mb-3">
            Are You a Drama Teacher?
          </h3>
          <p className="text-[#4A4A4A] text-base mb-8 max-w-xl mx-auto">
            We&apos;re always looking for passionate theatre educators to join the Dramawale family.
            Click below to get in touch and share your resume with us.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-[#7A1F2B] hover:bg-[#5e1721] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 hover:scale-105 text-base"
          >
            <Send className="w-4 h-4" />
            Apply for Drama Teacher
          </button>
        </motion.div>
      </div>

      {/* ── Contact Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.55)" }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F5EDE0] flex items-center justify-center text-[#7A1F2B] hover:bg-[#7A1F2B] hover:text-white transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <span className="text-4xl mb-3 block">🎭</span>
                <h2 className="font-display text-2xl font-bold text-[#7A1F2B] mb-1">
                  Apply for Drama Teacher
                </h2>
                <p className="text-[#4A4A4A] text-sm">
                  Reach out to us directly — we&apos;d love to hear from you!
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <a
                  href="mailto:hello@dramawale.com?subject=Drama Teacher Application"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E2D4B8] hover:border-[#7A1F2B] hover:bg-[#FBF6EE] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7A1F2B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F2B] transition-all">
                    <Mail className="w-5 h-5 text-[#7A1F2B] group-hover:text-white transition-all" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#4A4A4A]/60 font-medium uppercase tracking-wider mb-0.5">Email us your resume</p>
                    <p className="text-[#1A1A1A] font-semibold text-sm">hello@dramawale.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919607571366"
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E2D4B8] hover:border-[#7A1F2B] hover:bg-[#FBF6EE] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#7A1F2B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A1F2B] transition-all">
                    <Phone className="w-5 h-5 text-[#7A1F2B] group-hover:text-white transition-all" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#4A4A4A]/60 font-medium uppercase tracking-wider mb-0.5">Call or WhatsApp</p>
                    <p className="text-[#1A1A1A] font-semibold text-sm">+91 96075 71366</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#E2D4B8] bg-[#FBF6EE]/50">
                  <div className="w-10 h-10 rounded-full bg-[#7A1F2B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#7A1F2B]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-[#4A4A4A]/60 font-medium uppercase tracking-wider mb-0.5">Based in</p>
                    <p className="text-[#1A1A1A] font-semibold text-sm">Nashik, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919607571366?text=Hello%2C%20I%20am%20interested%20in%20applying%20for%20the%20Drama%20Teacher%20position%20at%20Dramawale.%20Please%20find%20my%20resume%20attached."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] shadow-md text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send Resume via WhatsApp
              </a>

              <p className="text-center text-[#4A4A4A]/50 text-xs mt-4">
                We typically respond within 24–48 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
