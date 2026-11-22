import type { Metadata } from "next";
import GetaQuote from "@/components/GetaQuote";
import { contactMetadata } from "@/seo/contact";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return <GetaQuote />;
}
