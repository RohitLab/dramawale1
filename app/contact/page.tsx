"use client";
import { useState, FormEvent } from "react";
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_INFO } from "@/lib/constants";
import { PageHero } from "@/components/sections/PageHero";

interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; message?: string; }

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) { newErrors.email = "Email is required."; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { newErrors.email = "Please enter a valid email address."; }
    if (!form.message.trim()) newErrors.message = "Please write a message.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Dramawale Contact Form Submission:", form);
    setSubmitted(true);
    setLoading(false);
  };

  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <>
      <PageHero
        eyebrow="Let's Connect"
        headline={<>Get in Touch <span className="text-[#E8A33D] italic">With Us</span></>}
        subheadline="Whether you're a school, a student, an educator, or a partner — we'd love to hear from you. Drop us a message and we'll get back within 24 hours."
        imageSrc="/contact-hero.png"
        imageAlt="Intimate theatre rehearsal on a blue-lit stage — Dramawale contact"
        imagePosition="center"
        paddingClass="py-24 lg:py-28"
      />

      {/* Main content */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info sidebar */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#E2D8CC] p-6 shadow-sm">
                  <h3 className="font-display font-bold text-[#1C1C1C] mb-5 text-lg">Contact Information</h3>
                  <div className="space-y-4">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-sm text-[#4A4A4A] hover:text-[#7C1D2F] transition-colors group">
                      <div className="w-9 h-9 rounded-lg bg-[#7C1D2F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C1D2F] transition-colors">
                        <Mail className="w-4 h-4 text-[#7C1D2F] group-hover:text-white transition-colors" />
                      </div>
                      {CONTACT_INFO.email}
                    </a>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-sm text-[#4A4A4A] hover:text-[#7C1D2F] transition-colors group">
                      <div className="w-9 h-9 rounded-lg bg-[#7C1D2F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C1D2F] transition-colors">
                        <Phone className="w-4 h-4 text-[#7C1D2F] group-hover:text-white transition-colors" />
                      </div>
                      {CONTACT_INFO.phone}
                    </a>
                    <div className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                      <div className="w-9 h-9 rounded-lg bg-[#7C1D2F]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#7C1D2F]" />
                      </div>
                      {CONTACT_INFO.address}
                    </div>
                  </div>
                </div>

                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-5 py-4 rounded-2xl transition-colors w-full">
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <div className="text-sm">Chat on WhatsApp</div>
                    <div className="text-xs text-white/70">Typically replies within 1 hour</div>
                  </div>
                </a>

                <div className="bg-[#F0E9DF] border border-[#E2D8CC] rounded-2xl p-5">
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    <strong className="text-[#1C1C1C]">Response time:</strong> We aim to respond to all enquiries within 24 business hours. For urgent matters, please use WhatsApp.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[#E2D8CC] p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1C1C1C] mb-2">Message Sent!</h3>
                    <p className="text-[#4A4A4A] max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="mt-6 text-[#7C1D2F] text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-6">Send Us a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Full Name <span className="text-[#A63245]">*</span></label>
                        <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Email <span className="text-[#A63245]">*</span></label>
                        <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Subject</label>
                        <Input id="subject" placeholder="e.g. School Partnership Enquiry" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Message <span className="text-[#A63245]">*</span></label>
                      <Textarea id="message" placeholder="Tell us about your school, programme interest, or question…" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={errors.message ? "border-red-400 focus-visible:ring-red-400" : ""} />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full group" disabled={loading}>
                      {loading ? "Sending…" : (<>Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>)}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
