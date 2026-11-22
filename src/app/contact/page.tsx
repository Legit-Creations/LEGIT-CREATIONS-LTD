import type { Metadata } from "next";
import GetaQuote from "@/components/Quote";
import { contactMetadata } from "@/seo/contact";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return <GetaQuote />;
}
