import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientProtector from "@/components/ClientProtector";
import {
  BRAND,
  METADATA_TEMPLATES,
  generateOrganizationSchema,
  SITE_LOGO,
  SITE_FAVICON,
  SITE_OG_IMAGE,
  SITE_URL,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_DESCRIPTION,
} from "@/config/branding";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: METADATA_TEMPLATES.defaultTitle,
    template: METADATA_TEMPLATES.titleTemplate,
  },

  description: SITE_DESCRIPTION,

  keywords: SITE_KEYWORDS,

  alternates: {
    canonical: "./",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: METADATA_TEMPLATES.defaultTitle,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: METADATA_TEMPLATES.defaultTitle,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },

  icons: {
    icon: SITE_FAVICON,
    shortcut: SITE_FAVICON,
    apple: SITE_LOGO,
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
};

// Generate canonical JSON-LD schema from branding config
const schema = generateOrganizationSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="antialiased bg-obsidian text-bone selection:bg-gold/30">
        {/* Client-side protection */}
        <ClientProtector />

        {/* Application */}
        {children}

        {/* Organization + Person structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}