import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Contact Dramawale for school partnership enquiries, teacher recruitment, certification courses, or the KATHASANG fellowship programme.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
