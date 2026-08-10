import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dramawale — School Partnerships, Courses & Enquiries",
  description:
    "Get in touch with Dramawale in Nashik, Maharashtra. Contact us for school drama partnerships, acting course enrolments, teacher training, KATHASANG fellowship, or custom script requests. Email: hello@dramawale.com | Phone: +91 96075 71366.",
  alternates: {
    canonical: "https://www.dramawale.com/contact",
  },
  keywords: [
    "contact Dramawale",
    "drama school Nashik enquiry",
    "school partnership drama India",
    "acting course enrolment",
    "drama teacher training enquiry",
  ],
  openGraph: {
    title: "Contact Dramawale — School Partnerships, Courses & Enquiries",
    description:
      "Reach out to Dramawale in Nashik for school drama partnerships, acting courses, teacher training and more.",
    url: "https://www.dramawale.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
