import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drama Scripts for Schools — Scripts Hub | Dramawale",
  description:
    "Browse Dramawale's curated library of original Hindi and English drama scripts for Indian school students. Scripts for Nukkad Natak, annual days, competitions, and classroom performances — street theatre, social drama, mythology, comedy and more.",
  alternates: {
    canonical: "https://www.dramawale.com/scripts-hub",
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
    title: "Drama Scripts for Schools — Scripts Hub | Dramawale",
    description:
      "Original drama scripts for Indian school students — street theatre, social drama, mythology, comedy and more.",
    url: "https://www.dramawale.com/scripts-hub",
    type: "website",
  },
};

export default function ScriptsHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
