import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scripts Hub — Drama Scripts for Schools",
  description:
    "Browse Dramawale's curated library of original drama scripts for Indian school students — suitable for Nukkad Natak competitions, annual days, and classroom performance.",
};

export default function ScriptsHubLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
