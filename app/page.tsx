import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Dramawale — India's Premier Drama Education Platform",
  description:
    "Dramawale empowers students, trains educators, and transforms schools through certified drama programmes. NEP-aligned, trusted by 100+ schools across India. Academy, Teacher Training, School Services & KATHASANG fellowship — all from Nashik, Maharashtra.",
  alternates: {
    canonical: "https://www.dramawale.com",
  },
  openGraph: {
    title: "Dramawale — India's Premier Drama Education Platform",
    description: "Certified drama education for schools, students & educators across India. NEP-aligned, trusted by 100+ schools.",
    url: "https://www.dramawale.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <PillarsSection />
      <MissionSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
