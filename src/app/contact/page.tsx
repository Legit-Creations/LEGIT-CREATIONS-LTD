import type { Metadata } from "next";
import GetaQuote from "@/components/GetaQuote";
import { generatePageMetadata, SITE_URL } from "@/config/branding";

export const metadata: Metadata = {
  ...generatePageMetadata(
    "Contact",
    "Contact Legit Creations LTD for custom software development, digital infrastructure, e-commerce solutions, business partnerships, and project enquiries.",
    [
      "contact Legit Creations",
      "software development enquiries Nigeria",
      "business technology partnerships",
    ],
  ),
  alternates: {
    canonical: new URL("/contact", SITE_URL).toString(),
  },
  openGraph: {
    type: "website",
    url: new URL("/contact", SITE_URL).toString(),
    title: "Contact | Legit Creations",
    description:
      "Get in touch with Legit Creations LTD about software, digital infrastructure, e-commerce, and business technology projects.",
  },
};

export default function ContactPage() {
  return <GetaQuote />;
}
