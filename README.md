# Legit Creations LTD

Official website and digital presence for Legit Creations LTD — a technology and digital commerce company helping businesses in Nigeria and West Africa build high-performance digital infrastructure, custom software, and scalable e-commerce experiences.

## Overview

Legit Creations LTD helps businesses turn ideas into reliable, growth-focused digital products. The company specializes in:

- Custom software development
- Business website and web app development
- Digital transformation strategy
- Headless e-commerce solutions
- B2B SaaS and platform development
- Performance optimization and product architecture

The repository contains the official Next.js marketing website and a foundation for the company’s online presence, branding, lead generation, and business inquiry workflow.

## Brand Positioning

- Company: Legit Creations LTD
- Tagline: Performance is the Product
- Focus: Nigerian and West African businesses
- Primary CTA: Send an inquiry
- Core service themes:
  - Custom software & app development
  - Project development & digital infrastructure
  - B2B SaaS product development

## Strategic Direction Captured from the Project Assessment

The website strategy and assessment indicate that the site should:

1. Communicate value clearly and quickly
2. Emphasize business outcomes over technical jargon
3. Build trust through local expertise, compliance, and founder credibility
4. Convert visitors through a strong inquiry form
5. Present service offerings as clear business solutions
6. Support future SEO growth with content, guides, and resource pages

This README reflects that business-first direction and the current technical implementation in the repository.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Resend for email delivery
- Framer Motion for motion effects
- Lucide React for icons

## Project Structure

```text
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ClientProtector.tsx
│   └── config/
│       └── branding.ts
├── public/
├── HOMEPAGE_STRATEGY.md
├── metadata.json
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── LICENSE
├── README.md
└── LGC - Website assessment summary.pdf
```

## Current Repository Status

This project is an active website foundation and not yet a fully completed production marketing site. The codebase already includes:

- Global site metadata and SEO configuration
- Branding and company identity data
- Tailwind design theme and global styling
- Contact API integration through Resend
- Client-side protection utilities
- Homepage shell and structure foundation

The homepage is intentionally scaffolded and still requires final messaging, visual sections, and conversion-focused page design to be fully completed.

## Key Configuration

### Branding
The brand configuration is centralized in `src/config/branding.ts` and includes:

- company name and legal identity
- tagline and service descriptions
- founders and corporate identity
- address and regulatory information
- keywords and SEO metadata
- Organization JSON-LD schema generation

### Contact API
The inquiry workflow is implemented in:

- `src/app/api/contact/route.ts`

It validates required fields and sends structured email messages through Resend.

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open http://localhost:3000 to view the site.

### Build for production

```bash
pnpm build
```

### Start production server

```bash
pnpm start
```

### Lint project

```bash
pnpm lint
```

## Environment Variables

Create a `.env.local` file in the project root with the following values as needed:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://legitcreations.com.ng
```

Notes:

- `RESEND_API_KEY` is required for the contact form email integration.
- `NEXT_PUBLIC_SITE_URL` should reflect the live production domain when deployed.

## Recommended Next Development Priorities

To complete the website efficiently and intelligently, the next work should focus on:

1. Homepage hero and service section layout
2. Conversion-focused copy aligned with the strategy
3. Pricing and trust-building sections
4. Contact form UI and success states
5. Privacy policy and terms pages
6. Footer and navigation polish
7. Final SEO optimization and accessibility review
8. Production testing and deployment validation

## Company Information

- Legal Name: LEGIT CREATIONS LTD
- Brand Name: Legit Creations
- Founder: Marvis Justice Ayewumi
- RC Number: 9721319
- SMEDAN SUID: SUID-1525-5384-6931-3100
- Tax ID: 2621057130396
- Email: legitcre@legitcreations.com.ng
- Telegram: https://t.me/legitcreations
- Office Location: Kiagbodo, Delta State, Nigeria

## Legal and Compliance Notes

This project includes structured data, standard SEO metadata, and brand identity definitions intended to support legitimacy, discoverability, and professional positioning.

## Roadmap

### Near-term priorities

- Finish homepage and all core sections
- Finalize conversion copy
- Connect inquiry form to live email delivery
- Add privacy/terms pages
- Optimize mobile and accessibility experience

### Medium-term priorities

- Add blog/resource pages
- Create case studies and proof of work
- Improve lead capture and analytics
- Launch staging and production deployment

## License

This project is distributed under the MIT license. See the LICENSE file for details.

## Contact

For business inquiries, email:

- legitcre@legitcreations.com.ng

For updates and quick access:

- Telegram: https://t.me/legitcreations

## Summary

Legit Creations LTD is building a modern, performance-first digital brand and web platform for business growth. This repository is the base for that vision: a clean Next.js foundation, strong brand identity, business-focused strategy, and lead generation infrastructure ready for final execution.

