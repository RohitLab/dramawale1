"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/sections/PageHero";

const CATEGORIES = ["All", "Street Theatre", "Social Drama", "Comedy", "Historical", "Mythology", "Contemporary"];

const SCRIPTS = [
  { title: "Roshni Ka Safar", category: "Social Drama", grade: "Classes 8–12", duration: "45 min", cast: "8–15 actors", description: "A powerful story about a girl from a small village who fights for the right to education against social barriers.", language: "Hindi", tags: ["Social Issues", "Empowerment", "NEP"] },
  { title: "The Empty Throne", category: "Historical", grade: "Classes 9–12", duration: "60 min", cast: "10–20 actors", description: "A dramatic retelling of a pivotal moment in Maratha history, examining courage, betrayal, and leadership.", language: "English / Hindi", tags: ["History", "War", "Leadership"] },
  { title: "Jugaad Junction", category: "Comedy", grade: "Classes 6–10", duration: "30 min", cast: "6–10 actors", description: "A hilarious street-play about a neighbourhood committee trying to fix a broken water tap using creative local solutions.", language: "Hindi", tags: ["Comedy", "Community", "Nukkad"] },
  { title: "Eklavya's Echo", category: "Mythology", grade: "Classes 7–12", duration: "40 min", cast: "5–12 actors", description: "A reimagining of the Mahabharata's Eklavya — exploring devotion, injustice, and self-taught mastery through modern eyes.", language: "English", tags: ["Mythology", "Justice", "Identity"] },
  { title: "Shapeless Silence", category: "Street Theatre", grade: "Classes 8–12", duration: "20 min", cast: "4–8 actors", description: "A mime-led Nukkad Natak about mental health, peer pressure, and the courage to speak up — no words needed.", language: "Non-verbal", tags: ["Mental Health", "Mime", "Nukkad"] },
  { title: "Colours of Holi", category: "Contemporary", grade: "Classes 4–8", duration: "25 min", cast: "10–25 actors", description: "A joyful, music-driven play celebrating India's diversity through the festival of Holi, perfect for annual day shows.", language: "Hindi / English", tags: ["Festival", "Dance", "Annual Day"] },
  { title: "Bhumi Mata", category: "Social Drama", grade: "Classes 6–10", duration: "35 min", cast: "8–14 actors", description: "An environmental awareness play set in a village fighting against industrial pollution — a call to protect the earth.", language: "Hindi", tags: ["Environment", "Activism", "NEP"] },
  { title: "The Last Curtain Call", category: "Contemporary", grade: "Classes 10–12", duration: "55 min", cast: "6–10 actors", description: "A meta-theatrical play about a school drama club on the brink of being shut down — a love letter to theatre itself.", language: "English", tags: ["Drama", "School Life", "Meta-theatre"] },
];

export default function ScriptsHubPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = SCRIPTS.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHero
        eyebrow="Scripts Hub"
        headline={<>Drama Scripts <span className="text-[#E8A33D] italic">for Every Stage</span></>}
        subheadline="A curated library of original and adapted drama scripts — written for Indian school students, suitable for competitions, annual days, and classroom performance."
        imageSrc="/scripts-hero.png"
        imageAlt="Multi-panel theatrical collage — Dramawale Scripts Hub"
        imagePosition="center"
        paddingClass="py-24 lg:py-32"
      >
        <div className="mt-2">
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                placeholder="Search by title, theme, or keyword…"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/15 border border-white/25 text-white placeholder:text-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#E8A33D]/60 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#E8A33D] text-[#1F2340]"
                    : "bg-white/15 border border-white/25 text-white/80 hover:bg-white/25 backdrop-blur-sm"
                }`}
              >
                {cat === "All" && <Filter className="w-3 h-3" />}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </PageHero>

      {/* Script grid */}
      <section className="py-16 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#4A4A4A] text-lg">No scripts match your search.</p>
              <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 text-[#7C1D2F] text-sm font-semibold hover:underline">Clear filters</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((script, i) => (
                <AnimatedSection key={script.title} delay={(i % 4) * 0.07}>
                  <div className="bg-white rounded-2xl border border-[#E2D8CC] p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                    <span className="inline-block text-xs font-semibold text-[#C4623A] bg-[#C4623A]/10 px-2.5 py-1 rounded-full mb-4 w-fit">{script.category}</span>
                    <h3 className="font-display text-lg font-bold text-[#1C1C1C] mb-2 leading-tight">{script.title}</h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4 flex-1">{script.description}</p>
                    <div className="grid grid-cols-2 gap-y-1 gap-x-3 text-xs text-[#4A4A4A] mb-4">
                      <span>🎓 {script.grade}</span>
                      <span>⏱ {script.duration}</span>
                      <span>🎭 {script.cast}</span>
                      <span>🌐 {script.language}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {script.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#4A4A4A] bg-[#FAF6F0] border border-[#E2D8CC] px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
          <AnimatedSection className="text-center mt-16">
            <p className="text-[#4A4A4A] mb-4">Looking for a custom script for your school event?</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#7C1D2F] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#A63245] transition-colors">
              Request a Custom Script
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
