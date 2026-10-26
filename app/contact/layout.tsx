import type { Metadata } from "next";

const BASE_URL = "https://www.dramawale.com";

export const metadata: Metadata = {
  title: "Contact Dramawale \u2014 School Partnerships, Courses & Enquiries",
  description:
    "Get in touch with Dramawale in Nashik, Maharashtra. Contact us for school drama partnerships, acting course enrolments, teacher training, KATHARANG fellowship, or custom script requests. Email: hello@dramawale.com | Phone: +91 96075 71366.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  keywords: [
    "contact Dramawale",
    "drama school Nashik enquiry",
    "school partnership drama India",
    "acting course enrolment",
    "drama teacher training enquiry",
  ],
  openGraph: {
    title: "Contact Dramawale \u2014 School Partnerships, Courses & Enquiries",
    description:
      "Reach out to Dramawale in Nashik for school drama partnerships, acting courses, teacher training and more.",
    url: `${BASE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Dramawale \u2014 Drama Education Platform in Nashik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        alt: "Contact Dramawale \u2014 Drama Education Platform in Nashik",
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
