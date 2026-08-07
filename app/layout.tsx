import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dramawale — India's Premier Drama Education Platform",
    template: "%s | Dramawale",
  },
  description:
    "Dramawale empowers students, trains educators, and transforms schools through certified drama and theatre education programs. NEP-aligned, trusted by 100+ schools.",
  keywords: [
    "drama education",
    "theatre training",
    "school drama",
    "acting courses India",
    "drama teacher",
    "NEP curriculum",
    "performing arts school",
  ],
  openGraph: {
    title: "Dramawale — India's Premier Drama Education Platform",
    description:
      "Certified drama education for schools, students, and educators across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FAF6F0] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
