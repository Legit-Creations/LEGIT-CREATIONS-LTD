# Legit Creations LTD - Homepage Strategy & Structure

## **Company Positioning**
- **Name:** Legit Creations LTD
- **Tagline:** "Performance is the Product"
- **Target:** All business sizes (startups, SMEs, enterprises) in Nigeria & West Africa
- **Core Services:** Custom Software & App Development | Project Development | B2B SaaS Solutions
- **Primary CTA:** Send an Inquiry

---

## **Homepage Structure**

### **1. Hero Section**
**Purpose:** Immediate value prop, establish credibility

**Content:**
- **Headline:** "High-Performance Digital Solutions for Nigerian Businesses"
- **Subheadline:** "Custom software, web platforms, and B2B SaaS built for growth"
- **CTA Button:** "Send an Inquiry" → Contact form modal/page
- **Supporting Visual:** Logo, hero image, or animated demo

**Copy Focus:**
- Clear, direct value proposition
- No jargon—speak to business outcomes
- Authority signal (regulations, founder credentials optional)

---

### **2. Services Section**
**Purpose:** Show what you offer, qualify leads

**3 Main Services:**

#### **A. Custom Software & App Development**
- **Description:** Bespoke software solutions tailored to your business needs
- **Key Benefits:** 
  - Scalable architecture
  - Performance-optimized
  - Built with modern tech (Next.js, Go, TypeScript)
- **Target:** Businesses needing custom tools, automation, or proprietary apps
- **Pricing:** Custom quote (mention this)

#### **B. Project Development & Digital Infrastructure**
- **Description:** End-to-end digital infrastructure and business platform development
- **Key Benefits:**
  - Full project ownership
  - Technology strategy included
  - Performance-focused architecture
- **Target:** Companies undergoing digital transformation or launching new digital initiatives
- **Pricing:** Project-based

#### **C. B2B SaaS Solutions**
- **Description:** Building scalable B2B software-as-a-service platforms
- **Key Benefits:**
  - Multi-tenant architecture
  - Subscription-ready
  - Enterprise-grade security
- **Target:** Businesses looking to launch recurring-revenue software products
- **Pricing:** Custom pricing model

**Layout:** 3-column grid with icons, descriptions, and "Learn More" or "Get a Quote" CTAs

---

### **3. Why Choose Us Section**
**Purpose:** Build trust and differentiation

**Key Points:**
- ✅ **Performance First:** We optimize for speed, reliability, and user experience
- ✅ **Local Expertise:** Nigerian company, understands West African business needs
- ✅ **Regulatory Compliance:** Properly registered (RC, SMEDAN, tax ID)
- ✅ **Modern Tech Stack:** Next.js, Go, TypeScript, enterprise-grade security
- ✅ **Full Ownership:** We handle architecture, design, and development end-to-end
- ✅ **Transparent Pricing:** Clear, no hidden costs

**Optional:** Include founder credentials (Marvis Justice Ayewumi, ORCID link)

---

### **4. Pricing Section**
**Purpose:** Set expectations, filter leads

**Three Tiers (Suggested):**

| Service | Starting Price | Description |
|---------|---|---|
| **Custom Software & Apps** | ₦500,000+ | Small tools, integrations, custom solutions |
| **Project Development** | ₦2,000,000+ | Full platforms, digital infrastructure |
| **B2B SaaS** | ₦5,000,000+ | Multi-tenant, production-ready SaaS |

**Note:** "All pricing is custom. Contact us for a detailed quote."
**CTA:** "Get a Custom Quote" → Contact form

---

### **5. Resources Section**
**Purpose:** Drive organic traffic, establish thought leadership, nurture leads

**Content Ideas:**
- Blog posts on:
  - "How to Build a Custom Software Product"
  - "Digital Transformation Guide for Nigerian Businesses"
  - "Performance Optimization: Why It Matters for Your Web App"
  - "B2B SaaS: Recurring Revenue for Your Business"
- Case studies (launch B2B project case study when ready)
- Guides & whitepapers
- Industry insights specific to Nigeria/West Africa

**Layout:** Grid of articles with:
- Thumbnail image
- Title
- Short description
- Read time estimate
- "Read More" link

**SEO Strategy:** Each article targets specific long-tail keywords for organic search

---

### **6. Featured Project / Case Study Section** *(Launch Later)*
**Purpose:** Social proof, showcase capabilities

**Placeholder for Now:** 
"Coming Soon: Featured B2B SaaS Project Case Study"
*Show impact metrics once you have them (% improvement, revenue, users, etc.)*

**When Ready:**
- Project name & description
- Challenge faced
- Solution implemented
- Results achieved (quantified)
- Technologies used
- Link to live project or demo

---

### **7. Contact / Inquiry Section**
**Purpose:** Primary conversion point

**Contact Form Fields:**
- Full Name (required)
- Company Name (required)
- Email (required)
- Phone (optional)
- Service Interested In (dropdown: Software Dev | Project Dev | B2B SaaS)
- Project Description / Budget Range (text area)
- Timeline (dropdown: ASAP | 1-3 months | 3-6 months | 6+ months)
- Checkbox: "Yes, contact me about updates and resources"

**Form Handling:**
- Client-side validation
- Server-side validation (resend email integration)
- Success confirmation: "Thank you! We'll review your inquiry and respond within 48 hours."
- Error handling: Clear, helpful error messages

**Backup Contact Info:**
- Email: legitcre@legitcreations.com.ng
- Telegram: https://t.me/legitcreations
- Address: Kiagbodo, Delta State, NG

---

### **8. Footer**
**Purpose:** Navigation, legal compliance, brand presence

**Sections:**
- **Company:** About, Services, Contact
- **Resources:** Blog (future), Guides (future)
- **Legal:** Privacy Policy, Terms of Service
- **Social:** Telegram link
- **Copyright:** © 2026 Legit Creations LTD. All rights reserved.
- **Regulatory Info:** RC: 9721319 | SMEDAN: SUID-1525-5384-6931-3100 | Tax ID: 2621057130396

---

## **Copy Guidelines**

### **Tone:**
- Professional but approachable
- Focus on outcomes, not features
- Clear, jargon-free language
- Use "you" language (speak to the customer)

### **Example Phrases:**
- ❌ "Zero-trust network architecture with edge-caching latency reduction"
- ✅ "Fast, secure web platforms built for growth"

- ❌ "Multi-tenant, horizontally scalable microservices"
- ✅ "Software that scales with your business"

---

## **SEO Structure**

**Homepage Meta Tags:**
- **Title:** "Legit Creations LTD | Custom Software & Headless E-Commerce Development in Nigeria"
- **Description:** "Legit Creations LTD builds custom software, high-performance web platforms, and headless e-commerce solutions for businesses in Nigeria and West Africa."
- **OG Image:** `/logo.jpeg`

**Structured Data (JSON-LD):**
- Organization schema (already in config) ✅
- Service schema for each service offering
- FAQPage schema (if you add FAQ section)

**Internal Links:**
- Services → Contact form
- Resources → Blog posts
- Blog posts → relevant services
- Footer → Privacy, Terms, About

---

## **Technical Implementation**

### **Components to Build:**
1. `Hero` - Headline, subheadline, CTA
2. `ServiceCard` - Reusable service display
3. `ServiceGrid` - 3-column layout
4. `PricingTable` - Pricing tiers
5. `ContactForm` - Form with validation
6. `ResourceCard` - Blog/resource preview
7. `ResourceGrid` - Resource listing
8. `Footer` - Site footer with links
9. `Navigation` - Header with menu

### **Pages to Create:**
- `/` - Homepage (all sections)
- `/services` - Full service descriptions (optional, link from homepage)
- `/pricing` - Dedicated pricing page (optional)
- `/contact` - Dedicated contact page (optional)
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/blog` - Blog/resources hub (future)
- `/blog/[slug]` - Individual blog posts (future)

### **Form Submission Flow:**
1. User fills contact form on homepage
2. Client-side validation
3. Submit to `/api/contact` endpoint
4. Server-side validation
5. Send email via Resend API
6. Store inquiry in database (optional: Supabase, MongoDB)
7. Return success response
8. Show thank you message

---

## **Performance Targets**
- **Lighthouse Score:** 90+
- **Page Load Time:** < 2 seconds
- **Mobile Responsive:** 100% (test on all screen sizes)
- **Accessibility (WCAG):** AA standard minimum

---

## **Launch Checklist**
- [ ] Homepage copy finalized
- [ ] Services descriptions written
- [ ] Pricing finalized
- [ ] Contact form built & tested
- [ ] Contact email (Resend) configured
- [ ] Privacy & Terms pages created
- [ ] Footer links all working
- [ ] Mobile responsiveness tested
- [ ] Lighthouse audit: 90+
- [ ] Analytics configured (Google Analytics)
- [ ] Domain set to legitcreations.com.ng
- [ ] SSL certificate active
- [ ] Staging deployment tested
- [ ] Production deployment

---

**Next Steps:**
1. Review & approve this strategy
2. Finalize service descriptions & pricing
3. Create component library & design system
4. Build homepage sections
5. Set up contact form + email integration
6. Deploy to staging for testing
7. Deploy to production

