# Codex Technical Implementation Handoff

## 1. Project Summary

Build a multi-page React website for Nongnapat Neuman, a Chiang Dao / Northern Thailand holistic healing practitioner. The site must establish trust, communicate services and philosophy clearly, and guide visitors toward gentle inquiry through WhatsApp, email, and a contact form.

Stitch fidelity source status: `SCREEN_LEVEL_READY`

Use these approved screen-level sources:

- Stitch screenshots: `documents/stitch/screenshots/`
- Stitch generated HTML: `documents/stitch/html/`
- Approved design document: `documents/02-design.md`
- Discovery source: `documents/01-client-discovery-summary.md`

The build must preserve the Stitch screen composition for six pages: Home, About, Services, Retreats & Workshops, Reiki Training, and Contact & FAQ. Generated HTML should guide section order, component hierarchy, image treatment, spacing, and responsive layout. Screenshots should be used for visual checks.

## 2. Technical Stack

- React
- Vite
- SCSS
- React Router
- AOS for subtle scroll animations
- rem units only in authored SCSS
- Component-based architecture
- i18n
- sanity CMS(this will be added later just have it in consideration)

Recommended dependencies:

- `@vitejs/plugin-react`
- `vite`
- `react`
- `react-dom`
- `react-router-dom`
- `sass`
- `aos`
- `lucide-react` if icons are needed beyond simple text and Material-style symbols

## 3. Project Folder Structure

Recommended structure:

```text
src/
  assets/
    images/
  components/
    Button/
    Card/
    ContactForm/
    FAQAccordion/
    Footer/
    Gallery/
    Navbar/
    SectionContainer/
    SEO/
  data/
    faqData.js
    imageData.js
    navigationData.js
    pageContent.js
    servicesData.js
  layouts/
    SiteLayout.jsx
  pages/
    About.jsx
    ContactFAQ.jsx
    Home.jsx
    ReikiTraining.jsx
    RetreatsWorkshops.jsx
    Services.jsx
    NotFound.jsx
  sections/
    home/
    about/
    services/
    retreats/
    reiki/
    contact/
    shared/
  styles/
    abstracts/
      _breakpoints.scss
      _mixins.scss
      _variables.scss
    base/
      _global.scss
      _reset.scss
      _typography.scss
    components/
    pages/
    sections/
    main.scss
  utils/
    aos.js
  App.jsx
  main.jsx
```

Folder responsibilities:

- `assets/images/`: project images and local placeholders. If remote Stitch image URLs are used temporarily, isolate them in `data/imageData.js`.
- `components/`: reusable UI primitives and shared patterns.
- `data/`: structured navigation, page content, service cards, FAQs, contact links, and image metadata.
- `layouts/`: site shell with shared navigation, footer, and routed content outlet.
- `pages/`: route-level page components only.
- `sections/`: page-specific section components that map directly to Stitch sections.
- `styles/`: global SCSS architecture, variables, component styles, section styles, and page styles.
- `utils/`: initialization helpers such as AOS setup.

## 4. Routing / Page Structure

Use React Router routes:

- `/` -> `pages/Home.jsx`
- `/about` -> `pages/About.jsx`
- `/services` -> `pages/Services.jsx`
- `/retreats-workshops` -> `pages/RetreatsWorkshops.jsx`
- `/reiki-training` -> `pages/ReikiTraining.jsx`
- `/contact` -> `pages/ContactFAQ.jsx`
- `*` -> `pages/NotFound.jsx`

Navigation labels:

- Home
- About
- Services
- Retreats
- Reiki
- FAQ / Contact
- Inquire CTA

Implementation note: Stitch combines Contact and FAQ into one screen. Use `/contact` as the route and label the nav item as either `FAQ` or `Contact` depending on final content preference. Keep the page title and H1 aligned with Stitch: "We are here to support your journey."

## 5. Component Breakdown

### `Button`

Purpose: shared CTA/link styling for primary, secondary, text-link, and icon button variants.  
Props: `children`, `to`, `href`, `variant`, `size`, `type`, `icon`, `iconPosition`, `className`, `ariaLabel`, `onClick`.  
Used in: all pages, nav, CTAs, forms, gallery controls.  
SCSS: yes, `styles/components/_button.scss`.

### `Navbar`

Purpose: site navigation, active route state, mobile menu, inquiry CTA.  
Props: `links`, `cta`, `brandName`.  
Used in: `SiteLayout`.  
SCSS: yes, `styles/components/_navbar.scss`.

Build notes: match Stitch desktop nav with calm spacing, Playfair brand text, moss active states, and a single CTA. Use one cohesive mobile pattern rather than mixing Stitch variants. Mobile menu must be keyboard accessible.

### `Footer`

Purpose: consistent footer combining brand, quick links, contact links, and legal placeholders.  
Props: `navigationLinks`, `contactLinks`, `legalLinks`.  
Used in: `SiteLayout`.  
SCSS: yes, `styles/components/_footer.scss`.

### `SectionContainer`

Purpose: reusable section wrapper for max-width, spacing, tonal backgrounds, and optional grid alignment.  
Props: `children`, `variant`, `size`, `className`, `as`, `aos`.  
Used in: most sections.  
SCSS: yes, shared section/container styles.

### `Hero`

Purpose: reusable hero foundation with page-specific variants: full-bleed image hero, split portrait hero, centered editorial hero.  
Props: `eyebrow`, `title`, `copy`, `image`, `imageAlt`, `actions`, `variant`.  
Used in: Home, About, Services, Retreats & Workshops, Reiki Training, Contact & FAQ.  
SCSS: yes, `styles/sections/_hero.scss`.

### `ImagePanel`

Purpose: reusable rounded image container with optional overlay, caption, hover behavior, and aspect-ratio control.  
Props: `src`, `alt`, `caption`, `variant`, `aspect`, `hoverEffect`.  
Used in: home pathway cards, about portrait and sanctuary image, services sections, retreats gallery, Reiki lineage.
SCSS: yes, `styles/components/_image-panel.scss`.

### `PathwayCard`

Purpose: image-led cards for Home service pathways.  
Props: `title`, `description`, `image`, `imageAlt`, `to`, `linkLabel`.  
Used in: Home "A Sanctuary for Every Stage."  
SCSS: yes, can share card styles in `styles/components/_card.scss`.

### `FeatureCard`

Purpose: tonal cards for values, service attributes, retreat features, Reiki trust points.  
Props: `title`, `description`, `icon`, `variant`.  
Used in: About, Retreats, Reiki, Services.  
SCSS: yes, shared card styles.

### `ServiceSection`

Purpose: reusable layout for Energy Work, Somatic Therapies, and Sound Healing sections.  
Props: `title`, `subtitle`, `body`, `image`, `details`, `layout`, `cta`.  
Used in: Services page.  
SCSS: yes, section-specific.

### `Gallery`

Purpose: retreats image gallery with previous/next controls.  
Props: `items`, `label`.  
Used in: Retreats & Workshops "Moments of Stillness."  
SCSS: yes, `styles/components/_gallery.scss`.

### `FAQAccordion`

Purpose: accessible FAQ list.  
Props: `items`, `allowMultiple`.  
Used in: Contact & FAQ page, optionally page-level FAQs later.  
SCSS: yes, `styles/components/_faq-accordion.scss`.

### `ContactForm`

Purpose: inquiry form for name, email, inquiry type, message, and submit action.  
Props: `inquiryOptions`, `submitLabel`, `compact`.  
Used in: Contact & FAQ and Services private-session CTA.  
SCSS: yes, `styles/components/_contact-form.scss`.

### `ContactTile`

Purpose: prominent WhatsApp/email contact buttons matching Stitch contact tiles.  
Props: `label`, `href`, `icon`, `description`, `variant`.  
Used in: Contact & FAQ.  
SCSS: can share with contact/form styles.

### `SEO`

Purpose: route-specific document title and meta description.  
Props: `title`, `description`.  
Used in: each page.  
SCSS: no.

## 6. Section Breakdown

### Home

Stitch references:

- Desktop screenshot: `documents/stitch/screenshots/home-desktop.png`
- Mobile screenshot: `documents/stitch/screenshots/home-mobile.png`
- Desktop HTML: `documents/stitch/html/home-desktop.html`
- Mobile HTML: `documents/stitch/html/home-mobile.html`

Sections:

- Home hero: full-bleed Chiang Dao mountain image, editorial text panel, primary inquiry CTA. Use `Hero`.
- Trust intro: "20 Years of Presence" text plus healing-touch image. Use `SectionContainer`, `ImagePanel`.
- Service pathways: "A Sanctuary for Every Stage" with cards for Healing Sessions, Retreats & Workshops, Reiki Training. Use `PathwayCard`.
- Chiang Dao nature feature: image-led band with text "Chiang Dao: Nature as Teacher" and inquiry/learn CTA. Use `Hero` or `ImageFeature`.
- Final CTA: "Begin Your Path to Stillness." Use shared `CTASection`.

Visual fidelity notes: Preserve the first-viewport mountain image signal, spacious hero height, moss text/CTA, and large rounded image/card rhythm. Mobile must follow the separate mobile export rather than compressing desktop columns.

### About

Stitch references:

- Desktop screenshot: `documents/stitch/screenshots/about-desktop.png`
- Mobile screenshot: `documents/stitch/screenshots/about-mobile.png`
- Desktop HTML: `documents/stitch/html/about-desktop.html`
- Mobile HTML: `documents/stitch/html/about-mobile.html`

Sections:

- About hero: split copy and practitioner portrait. Use `Hero` variant `split`.
- Sanctuary / healing space: tonal section with image and text. Use `ImagePanel`, `SectionContainer`.
- Journey section: "A Journey of Silence & Skill" with copy and values. Use `FeatureCard`.
- Premium care section: "The 5-Star Healing Experience" with image and care attributes. Use `FeatureCard`, `ImagePanel`.
- Closing CTA: "Begin Your Practice of Being." Use `CTASection`.

Visual fidelity notes: Keep the sticky translucent nav style, calm portrait emphasis, and trust-focused section order. Practitioner biography details are incomplete; use copy from discovery and avoid inventing credentials.

### Services

Stitch references:

- Desktop screenshot: `documents/stitch/screenshots/services-desktop.png`
- Mobile screenshot: `documents/stitch/screenshots/services-mobile.png`
- Desktop HTML: `documents/stitch/html/services-desktop.html`
- Mobile HTML: `documents/stitch/html/services-mobile.html`

Sections:

- Services hero: "Healing Sessions & Somatic Therapies." Use `Hero`.
- Energy Work: image-led service detail with Reiki cross-link. Use `ServiceSection`.
- Somatic Therapies: tonal band with focus details and healing-room image. Use `ServiceSection`.
- Sound Healing: detail section with singing bowl imagery and experience notes. Use `ServiceSection`.
- Private session inquiry: moss green CTA/form band. Use `ContactForm`, `CTASection`.

Visual fidelity notes: Preserve alternating image/text layouts, tonal bands, small uppercase labels, tactile imagery, and subdued hover effects. Keep service descriptions grounded and clear; do not overpromise outcomes.

### Retreats & Workshops

Stitch references:

- Desktop screenshot: `documents/stitch/screenshots/retreats-workshops-desktop.png`
- Mobile screenshot: `documents/stitch/screenshots/retreats-workshops-mobile.png`
- Desktop HTML: `documents/stitch/html/retreats-workshops-desktop.html`
- Mobile HTML: `documents/stitch/html/retreats-workshops-mobile.html`

Sections:

- Retreat hero: centered editorial "Deepen Your Connection" with panoramic Chiang Dao retreat image. Use `Hero`.
- Program statement: "Integrative workshops and immersive retreats in Chiang Dao." Use `SectionContainer`.
- Feature trio: Group Harmony, Nature-Based Healing, Skillful Facilitation. Use `FeatureCard`.
- Facilitation image/detail block. Use `ImagePanel`.
- Gallery: "Moments of Stillness" with three image cards and previous/next controls. Use `Gallery`.
- Final CTA: "Ready to embark on a journey of return?" Use `CTASection`.

Visual fidelity notes: Preserve the centered editorial hero, panoramic nature image, three-card feature rhythm, gallery controls, and soft moss CTA. Program specifics are not final; keep copy inquiry-led.

### Reiki Training

Stitch references:

- Desktop screenshot: `documents/stitch/screenshots/reiki-training-desktop.png`
- Mobile screenshot: `documents/stitch/screenshots/reiki-training-mobile.png`
- Desktop HTML: `documents/stitch/html/reiki-training-desktop.html`
- Mobile HTML: `documents/stitch/html/reiki-training-mobile.html`

Sections:

- Reiki hero: misty Chiang Dao background with "The Path of Reiki" and CTAs to curriculum and lineage. Use `Hero`.
- Lineage/tradition: practitioner image and "Grounded in Tradition." Use `ImagePanel`, `FeatureCard`.
- Trust points: teaching experience, Traditional Usui Lineage, Holistic Integration. Use `FeatureCard`.
- Training path: Reiki Level I: Shoden, Reiki Level II: Okuden, Reiki Master: Shinpiden, Advanced Workshops. Use `TrainingPath` or `FeatureCard`.
- Final CTA: "Begin Your Journey." Use `CTASection`.

Visual fidelity notes: The Stitch design includes "15+ Years of Teaching"; discovery only confirms 20+ years of services. Treat "15+ Years of Teaching" as a Stitch content placeholder unless the client confirms it. Safer build copy should say "Years of teaching and practice" or keep details editable in `pageContent.js`.

### Contact & FAQ

Stitch references:

- Desktop screenshot: `documents/stitch/screenshots/contact-faq-desktop.png`
- Mobile screenshot: `documents/stitch/screenshots/contact-faq-mobile.png`
- Desktop HTML: `documents/stitch/html/contact-faq-desktop.html`
- Mobile HTML: `documents/stitch/html/contact-faq-mobile.html`

Sections:

- Page intro: "We are here to support your journey." Use `SectionContainer`.
- FAQ: common questions around sessions, preparation, booking, location, Reiki, and suitability. Use `FAQAccordion`.
- Contact tiles: WhatsApp and email. Use `ContactTile`.
- Inquiry form: name, email, inquiry type, message, submit. Use `ContactForm`.
- Supportive image panel. Use `ImagePanel`.

Visual fidelity notes: Preserve the two-purpose page: reassurance through FAQ and conversion through low-pressure contact. Contact details are not confirmed; use placeholders in `pageContent.js` and label them clearly for replacement.

### Shared Layout Sections

- `Navbar`: shared across all pages with active route state.
- `Footer`: shared across all pages, consolidating Stitch footer variants into one consistent implementation.
- `CTASection`: used for closing inquiry prompts.

Design inference: The shared footer and single cohesive mobile nav are implementation consolidations inferred from repeated Stitch patterns. They should preserve visual language while reducing inconsistent page-level duplication.

## 7. SCSS Architecture

Use `src/styles/main.scss` as the only style import in `main.jsx`. Import partials in this order:

```scss
@use "abstracts/variables";
@use "abstracts/breakpoints";
@use "abstracts/mixins";
@use "base/reset";
@use "base/typography";
@use "base/global";
@use "components/button";
@use "components/navbar";
@use "components/footer";
@use "components/card";
@use "components/contact-form";
@use "components/faq-accordion";
@use "components/gallery";
@use "sections/hero";
@use "sections/sections";
@use "pages/pages";
```

Variables:

- Colors from `02-design.md`: soft sand, moss green, warm stone, charcoal, secondary text, outlines, error.
- Typography: Playfair Display for headings, Plus Jakarta Sans for body.
- Spacing: convert 8px scale to rem variables.
- Breakpoints: mobile, tablet, desktop, wide.
- Radii: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, full.
- Shadows: subtle ambient moss-tinted shadow.

SCSS rules:

- Authored CSS values must use rem units only, except unitless line-height, percentages, viewport units for intentional hero heights, and color alpha values.
- Use mobile-first styles.
- Keep page-specific styles under `styles/pages/`.
- Keep section-specific layout under `styles/sections/`.
- Keep reusable UI styles under `styles/components/`.
- Do not create one large unorganized stylesheet.
- Avoid negative letter spacing in the final implementation; preserve editorial hierarchy through font family, size, and weight instead.

## 8. Responsive Implementation Rules

Mobile:

- Single-column flow.
- 1.25rem side margins.
- Large vertical section spacing retained.
- Headings should wrap cleanly and avoid overflow.
- Navigation should use a menu button or slide-down panel with visible focus states.
- Minimum touch target size: 2.75rem.
- Images should use stable aspect ratios and `object-fit: cover`.
- Forms and contact tiles stack vertically.

Tablet:

- Use two-column layouts only where content has enough width.
- Keep image and copy blocks readable, avoiding narrow text columns.
- Pathway cards may move from one column to two columns.
- Maintain generous section padding.

Desktop:

- Use centered max-width containers around 75rem.
- Use 12-column-inspired grid layouts for split sections.
- Preserve Stitch's wide margins and restrained content spans.
- Hero sections should feel immersive but leave enough context for the next section where applicable.
- Pathway cards and feature cards should align cleanly in rows.

Image behavior:

- Use `loading="lazy"` except first hero image.
- First hero image should load eagerly with useful alt text.
- Use local image assets if supplied; otherwise centralize remote placeholder URLs in `imageData.js`.

## 9. Animation Implementation Rules

Use AOS subtly. Initialize once in `utils/aos.js` and call it from `main.jsx` or `App.jsx`.

Recommended defaults:

- Duration: 700ms
- Easing: `ease-out-cubic`
- Offset: 80
- Once: true

Animate:

- Main section entrances with `fade-up`.
- Image/text split blocks with one side `fade-up` and optional small delay on the second side.
- Pathway or feature cards with staggered delays of 80-120ms.
- Final CTAs with a single `fade-up`.

Avoid:

- Animating every paragraph.
- Large movement distances.
- Looping animations.
- Animations on nav, forms while typing, or FAQ content that harms usability.
- Motion for users with `prefers-reduced-motion: reduce`.

## 10. Accessibility Requirements

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Maintain one `h1` per page.
- Keep heading order logical.
- Use real links for navigation and real buttons for actions.
- Mobile menu must be keyboard operable, closable with Escape, and expose `aria-expanded`.
- FAQ accordion buttons must expose expanded/collapsed state with `aria-expanded`.
- Forms must use explicit labels, helper text where useful, accessible error states, and no placeholder-only labels.
- Provide descriptive alt text for meaningful images.
- Decorative images should use empty alt text.
- Ensure visible focus states on links, buttons, inputs, and menu controls.
- Maintain sufficient color contrast for moss text/buttons and muted text.
- Do not rely on color alone for active nav or validation.
- Respect `prefers-reduced-motion`.

## 11. Implementation Checklist

- Create or verify Vite React project files in `website-projects/Nongnapat Neuman V3/`.
- Install required dependencies.
- Add React Router routes for all six approved pages.
- Create shared layout with `Navbar`, routed `main`, and `Footer`.
- Create reusable components: Button, SectionContainer, Hero, ImagePanel, cards, FAQAccordion, ContactForm, ContactTile, Gallery, SEO.
- Structure page content in `src/data/` so placeholders are easy to replace.
- Implement Home using Stitch home desktop/mobile HTML and screenshots.
- Implement About using Stitch about desktop/mobile HTML and screenshots.
- Implement Services using Stitch services desktop/mobile HTML and screenshots.
- Implement Retreats & Workshops using Stitch retreats desktop/mobile HTML and screenshots.
- Implement Reiki Training using Stitch Reiki desktop/mobile HTML and screenshots.
- Implement Contact & FAQ using Stitch contact desktop/mobile HTML and screenshots.
- Add SCSS architecture with variables, breakpoints, mixins, base styles, component styles, section styles, and page styles.
- Use rem units in authored SCSS.
- Initialize AOS once and apply subtle scroll animations only to selected sections.
- Add accessible navigation, accordions, forms, buttons, and focus states.
- Test mobile, tablet, and desktop responsive behavior.
- Verify no text overlaps, clipped buttons, broken image containers, or layout shifts.
- Verify forms render correctly and submit behavior is safely mocked or wired according to available requirements.
- Run lint/build checks available in the project.
- Remove unused starter files and unused styles.
- Before writing `04-build-summary.md`, compare implemented pages against:
  - `documents/stitch/screenshots/home-desktop.png`
  - `documents/stitch/screenshots/home-mobile.png`
  - `documents/stitch/screenshots/about-desktop.png`
  - `documents/stitch/screenshots/about-mobile.png`
  - `documents/stitch/screenshots/services-desktop.png`
  - `documents/stitch/screenshots/services-mobile.png`
  - `documents/stitch/screenshots/retreats-workshops-desktop.png`
  - `documents/stitch/screenshots/retreats-workshops-mobile.png`
  - `documents/stitch/screenshots/reiki-training-desktop.png`
  - `documents/stitch/screenshots/reiki-training-mobile.png`
  - `documents/stitch/screenshots/contact-faq-desktop.png`
  - `documents/stitch/screenshots/contact-faq-mobile.png`
- Include visual fidelity notes, responsive QA notes, accessibility notes, and any remaining content placeholders in `documents/04-build-summary.md`.
