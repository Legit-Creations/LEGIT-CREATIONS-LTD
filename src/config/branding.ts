/**
 * Centralized Branding & Identity Configuration
 * Single source of truth for all brand-related data, metadata, and schema generation
 * 
 * This file is imported by:
 * - src/app/layout.tsx (global metadata)
 * - src/app pages (page-specific metadata)
 * - SEO utilities
 * - Structured data generators
 */

// ============================================================================
// TYPES
// ============================================================================

export interface Address {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

export interface PersonIdentity {
  name: string;
  orcid?: string;
}

export interface RegulatoryId {
  name: string;
  value: string;
}

export interface BrandConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  domain: string;
  logo: string;
  favicon: string;
  ogImage: string;
  email: string;
  descriptions: {
    short: string;
    long: string;
  };
  services: string[];
  keywords: string[];
  founder: PersonIdentity;
  address: Address;
  taxId: string;
  socialLinks: Record<string, string>;
  regulatoryIds: RegulatoryId[];
}

export interface OrganizationSchema {
  "@context": string;
  "@graph": Array<Record<string, any>>;
}

// ============================================================================
// BRAND CONFIGURATION
// ============================================================================

export const BRAND: BrandConfig = {
  name: "Legit Creations",
  legalName: "LEGIT CREATIONS LTD",
  shortName: "LGC",
  tagline: "Performance is the Product",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://legitcreations.com.ng",
  logo: "/logo.jpeg",
  favicon: "/favicon.ico",
  ogImage: "/logo.jpeg",
  email: "legitcre@legitcreations.com.ng",

  descriptions: {
    short:
      "Legit Creations LTD builds custom software, high-performance web platforms, and headless e-commerce solutions for businesses in Nigeria and West Africa.",
    long:
      "Legit Creations LTD helps businesses build digital infrastructure that performs. We design and develop custom software, scalable web platforms, and headless e-commerce systems that improve operational efficiency, customer experience, and business growth.",
  },

  services: [
    "Custom Software Development",
    "Business Website Development",
    "Headless E-Commerce Solutions",
    "API Development",
    "Web App Architecture",
    "Digital Transformation Strategy",
    "Performance Optimization",
    "Business Automation",
    "E-Commerce Platform Development",
    "Corporate Digital Infrastructure",
  ],

  keywords: [
    "custom software development Nigeria",
    "software company Nigeria",
    "headless e-commerce agency Lagos",
    "headless e-commerce development Nigeria",
    "custom web development company Nigeria",
    "Next.js development firm West Africa",
    "custom Go API development",
    "TypeScript enterprise architecture",
    "B2B e-commerce platform build",
    "digital transformation company Nigeria",
    "business web app development Nigeria",
    "scalable web app architecture for startups",
    "custom software company Delta State",
    "ecommerce platform development Nigeria",
    "Legit Creations LTD",
    "Legit Creations",
    "LGC",
    "Marvis Justice Ayewumi",
    "Performance is the Product",
  ],

  founder: {
    name: "Marvis Justice Ayewumi",
    orcid: "https://orcid.org/0009-0008-6068-2804",
  },

  address: {
    streetAddress: "Bunness House 1, Edwin Clark University Drive, Near Olomu II",
    addressLocality: "Kiagbodo",
    addressRegion: "Delta State",
    addressCountry: "NG",
  },

  taxId: "2621057130396",

  socialLinks: {
    telegram: "https://t.me/legitcreations",
  },

  regulatoryIds: [
    { name: "RC Number", value: "9721319" },
    { name: "SMEDAN SUID", value: "SUID-1525-5384-6931-3100" },
  ],
};

// ============================================================================
// JSON-LD SCHEMA FACTORY
// ============================================================================

/**
 * Generate Organization + LocalBusiness JSON-LD schema
 * This is the canonical entity data that informs search engines and AI crawlers
 * of Legit Creations' corporate identity, regulatory compliance, and authority.
 *
 * Reference: https://schema.org/Organization, https://schema.org/LocalBusiness
 */
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${BRAND.domain}/#organization`,
        name: BRAND.name,
        legalName: BRAND.legalName,
        slogan: BRAND.tagline,
        description: BRAND.descriptions.long,
        url: BRAND.domain,
        logo: `${BRAND.domain}${BRAND.logo}`,
        email: BRAND.email,
        taxID: BRAND.taxId,
        address: {
          "@type": "PostalAddress",
          streetAddress: BRAND.address.streetAddress,
          addressLocality: BRAND.address.addressLocality,
          addressRegion: BRAND.address.addressRegion,
          addressCountry: BRAND.address.addressCountry,
        },
        founder: {
          "@type": "Person",
          name: BRAND.founder.name,
          sameAs: BRAND.founder.orcid,
        },
        sameAs: Object.values(BRAND.socialLinks),
        identifier: BRAND.regulatoryIds.map((id) => ({
          "@type": "PropertyValue",
          name: id.name,
          value: id.value,
        })),
      },
    ],
  };
}

/**
 * Generate page-specific metadata
 * Use this for individual pages to override global defaults
 */
export function generatePageMetadata(
  pageTitle: string,
  pageDescription: string,
  pageKeywords?: string[]
) {
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...BRAND.keywords, ...(pageKeywords || [])],
  };
}

// ============================================================================
// METADATA TEMPLATES
// ============================================================================

export const METADATA_TEMPLATES = {
  titleTemplate: "%s | Legit Creations",
  defaultTitle: `${BRAND.name} | ${BRAND.tagline}`,
  defaultDescription: BRAND.descriptions.short,
};

// ============================================================================
// EXPORT CONSTANTS FOR EASY ACCESS
// ============================================================================

export const SITE_URL = BRAND.domain;
export const SITE_NAME = BRAND.name;
export const SITE_DESCRIPTION = BRAND.descriptions.short;
export const SITE_DESCRIPTION_LONG = BRAND.descriptions.long;
export const SITE_KEYWORDS = BRAND.keywords;

// Export as relative paths. Next.js metadataBase handles the domain automatically.
export const SITE_LOGO = BRAND.logo;
export const SITE_FAVICON = BRAND.favicon;
export const SITE_OG_IMAGE = BRAND.ogImage;