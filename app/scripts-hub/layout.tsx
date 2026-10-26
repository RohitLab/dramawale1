import type { Metadata } from "next";

const BASE_URL = "https://www.dramawale.com";

export const metadata: Metadata = {
  title: "Drama Scripts for Schools \u2014 Scripts Hub | Dramawale",
  description:
    "Browse Dramawale's curated library of original Hindi and English drama scripts for Indian school students. Scripts for Nukkad Natak, annual days, competitions, and classroom performances \u2014 street theatre, social drama, mythology, comedy and more.",
  alternates: {
    canonical: `${BASE_URL}/scripts-hub`,
  },
  keywords: [
    "drama scripts for schools India",
    "Nukkad Natak scripts Hindi",
    "school play scripts English",
    "drama scripts for students",
    "annual day drama scripts",
    "Hindi theatre scripts",
    "social drama scripts India",
  ],
  openGraph: {
    title: "Drama Scripts for Schools \u2014 Scripts Hub | Dramawale",
    description:
      "Original drama scripts for Indian school students \u2014 street theatre, social drama, mythology, comedy and more.",
    url: `${BASE_URL}/scripts-hub`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dramawale Scripts Hub \u2014 Drama Scripts for Indian Schools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        alt: "Dramawale Scripts Hub \u2014 Drama Scripts for Indian Schools",
      },
    ],
  },
};

export default function ScriptsHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
