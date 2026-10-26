import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaBand } from "@/components/sections/CtaBand";

const BASE_URL = "https://www.dramawale.com";

export const metadata: Metadata = {
  title: "Dramawale \u2014 India's Premier Drama Education Platform",
  description:
    "Dramawale empowers students, trains educators, and transforms schools through certified drama programmes. NEP-aligned, trusted by 100+ schools across India. Academy, Teacher Training, School Services & KATHARANG fellowship \u2014 all from Nashik, Maharashtra.",
  keywords: [
    "dramawale",
    "drama wale",
    "Dramawale",
    "dramawale.com",
    "drama education India",
    "theatre education platform",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dramawale \u2014 India's Premier Drama Education Platform",
    description: "Certified drama education for schools, students & educators across India. NEP-aligned, trusted by 100+ schools.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dramawale \u2014 India's Premier Drama Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        alt: "Dramawale \u2014 India's Premier Drama Education Platform",
      },
    ],
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
