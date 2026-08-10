import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const BASE_URL = "https://www.dramawale.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dramawale — India's Premier Drama Education Platform",
    template: "%s | Dramawale",
  },
  description:
    "Dramawale empowers students, trains educators, and transforms schools through certified drama and theatre education programs. NEP-aligned, trusted by 100+ schools across India. Based in Nashik, Maharashtra.",
  keywords: [
    "drama education India",
    "theatre training Nashik",
    "school drama programs",
    "acting courses India",
    "drama teacher certification",
    "NEP aligned curriculum",
    "performing arts school",
    "Certified Drama Educator",
    "Nukkad Natak competition",
    "drama academy Maharashtra",
    "theatre for schools",
    "KATHASANG fellowship",
    "drama scripts for students",
    "drama education platform",
    "best drama school India",
  ],
  authors: [{ name: "Dramawale", url: BASE_URL }],
  creator: "Dramawale",
  publisher: "Dramawale",
  category: "Education",
  openGraph: {
    title: "Dramawale — India's Premier Drama Education Platform",
    description:
      "Certified drama education for schools, students, and educators across India. NEP-aligned programmes, trusted by 100+ schools.",
    url: BASE_URL,
    siteName: "Dramawale",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dramawale — India's Premier Drama Education Platform",
    description:
      "Certified drama education for schools, students, and educators across India.",
    site: "@dramawale",
    creator: "@dramawale",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add your Google Search Console verification token here when ready
    // google: "your-google-verification-code",
  },
};

// Organisation JSON-LD structured data for AI & search engines
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dramawale",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Dramawale is India's premier drama education platform offering certified acting courses, school drama services, teacher training, and social impact programmes. NEP-aligned, based in Nashik, Maharashtra.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-96075-71366",
    contactType: "customer service",
    email: "hello@dramawale.com",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  sameAs: [
    "https://www.instagram.com/dramawale",
    "https://www.youtube.com/@dramawale",
    "https://www.facebook.com/dramawale",
  ],
  foundingDate: "2020",
  areaServed: "India",
  knowsAbout: [
    "Drama Education",
    "Theatre Training",
    "Performing Arts",
    "NEP Curriculum",
    "Drama Pedagogy",
    "School Drama Programs",
    "Acting Certification",
  ],
};

// Website JSON-LD with Sitelinks Searchbox hint
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dramawale",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/scripts-hub?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Geographic meta tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik, Maharashtra, India" />
        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />
      </head>
      <body className="antialiased bg-[#FAF6F0] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
