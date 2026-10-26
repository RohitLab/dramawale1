import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const BASE_URL = "https://www.dramawale.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dramawale \u2014 India's Premier Drama Education Platform",
    template: "%s | Dramawale",
  },
  description:
    "Dramawale empowers students, trains educators, and transforms schools through certified drama and theatre education programs. NEP-aligned, trusted by 100+ schools across India. Based in Nashik, Maharashtra.",
  keywords: [
    "dramawale",
    "drama wale",
    "Dramawale",
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
    "KATHARANG fellowship",
    "drama scripts for students",
    "drama education platform",
    "best drama school India",
    "dramawale.com",
  ],
  authors: [{ name: "Dramawale", url: BASE_URL }],
  creator: "Dramawale",
  publisher: "Dramawale",
  category: "Education",
  // Icons \u2014 Google uses these for the favicon/logo in search results
  icons: {
    icon: [
      { url: "/og-image.jpg", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/og-image.jpg", sizes: "180x180", type: "image/png" }],
    shortcut: "/og-image.jpg",
  },
  openGraph: {
    title: "Dramawale \u2014 India's Premier Drama Education Platform",
    description:
      "Certified drama education for schools, students, and educators across India. NEP-aligned programmes, trusted by 100+ schools.",
    url: BASE_URL,
    siteName: "Dramawale",
    locale: "en_IN",
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
    title: "Dramawale \u2014 India's Premier Drama Education Platform",
    description:
      "Certified drama education for schools, students, and educators across India.",
    site: "@dramawale",
    creator: "@dramawale",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        alt: "Dramawale \u2014 India's Premier Drama Education Platform",
      },
    ],
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
    google: "e9a72512cbf43af9",
  },
};

// Organisation JSON-LD structured data for AI & search engines
const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dramawale",
  alternateName: ["dramawale", "drama wale", "Dramawale India", "Dramawale Drama Education"],
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
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
    <html lang="en-IN">
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
      <body className="antialiased bg-[#FBF6EE] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
