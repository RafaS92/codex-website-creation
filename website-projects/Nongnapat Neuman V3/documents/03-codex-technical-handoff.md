# Codex Technical Implementation Handoff

## 1. Project Summary

Build a responsive React/Vite website for Nongnapat Neuman, an in-person holistic healing practitioner in Chiang Dao / Northern Thailand. The approved website structure is a six-page experience based on the Stitch project `16640907776573635121`: Home, About, Services, Retreats & Workshops, Reiki Training, and Contact & FAQ.

The implementation must follow the approved `Sacred Stillness` Stitch design direction: calm, editorial, grounded, nature-connected, spacious, and quietly premium. The site should prioritize trust, clear service explanation, and gentle inquiry paths through contact form, WhatsApp, and email affordances. Do not invent missing business details such as exact pricing, dates, certifications, session lengths, or medical claims.

## 2. Technical Stack

- React
- Vite
- SCSS
- React Router
- AOS for subtle scroll animations
- rem units only in authored CSS
- Component-based architecture
- Mobile-first responsive CSS
- I18n
- Sanity CMS (this will be setup later in the project)

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
    Navbar/
    SEO/
    SectionHeader/
  data/
    faqData.js
    navigationData.js
    pageContent.js
  layouts/
    SiteLayout.jsx
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    RetreatsWorkshops.jsx
    ReikiTraining.jsx
    ContactFAQ.jsx
    NotFound.jsx
  sections/
    AboutPreview.jsx
    ContactCTA.jsx
    Hero.jsx
    ModalityGrid.jsx
    NaturalSetting.jsx
    PhilosophyBlock.jsx
    ProgramPathways.jsx
    ServicePathways.jsx
    WhatToExpect.jsx
    WhoThisIsFor.jsx
  styles/
    main.scss
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
  utils/
    aos.js
  App.jsx
  main.jsx
```

Folder purposes:

- `assets/images/`: local website imagery and placeholders.
- `components/`: reusable UI primitives and shared interface components.
- `data/`: editable content arrays for navigation, cards, FAQs, service pathways, and page copy.
- `layouts/`: shared page shell with navigation, footer, and main landmark.
- `pages/`: route-level page components.
- `sections/`: larger content sections assembled inside pages.
- `styles/`: SCSS architecture with variables, mixins, base styles, components, sections, and page-level styles.
- `utils/`: small initialization helpers such as AOS setup.

## 4. Routing / Page Structure

Use React Router with the following routes:

- `/` -> `pages/Home.jsx`
- `/about` -> `pages/About.jsx`
- `/services` -> `pages/Services.jsx`
- `/retreats-workshops` -> `pages/RetreatsWorkshops.jsx`
- `/reiki-training` -> `pages/ReikiTraining.jsx`
- `/contact` -> `pages/ContactFAQ.jsx`
- `*` -> `pages/NotFound.jsx`

The global layout should render:

- Skip link
- `Navbar`
- `main`
- `Footer`

Navigation labels should match the approved structure:

- Home
- About
- Services
- Retreats & Workshops
- Reiki Training
- Contact / FAQ

## 5. Component Breakdown

### Button

Purpose: shared link/button treatment for primary and secondary CTAs.

Props:

- `children`
- `href`
- `to`
- `variant`: `primary | secondary | ghost`
- `type`
- `onClick`
- `ariaLabel`

SCSS: yes, `styles/components/_button.scss`.

Used in: navigation CTA, hero CTAs, section CTAs, contact prompts.

### Navbar

Purpose: global responsive navigation.

Props:

- `items`
- `cta`

SCSS: yes, `styles/components/_navbar.scss`.

Behavior:

- Desktop horizontal nav.
- Mobile collapsible menu.
- Keyboard accessible open/close control.
- Active route state.

### Footer

Purpose: global footer with brand, navigation, contact paths, and soft CTA.

Props:

- `navigationItems`
- `contactLinks`

SCSS: yes, `styles/components/_footer.scss`.

### SectionHeader

Purpose: reusable overline, heading, and intro text pattern.

Props:

- `eyebrow`
- `title`
- `intro`
- `align`: `left | center`

SCSS: yes, can share section styles or use `styles/components/_section-header.scss`.

### Card

Purpose: tonal card/panel primitive for services, values, program details, and feature blocks.

Props:

- `title`
- `text`
- `eyebrow`
- `children`
- `variant`

SCSS: yes, `styles/components/_card.scss`.

### ServiceCard

Purpose: modality card for energy work, somatic healing, sound healing, nature-based healing, and mindfulness.

Props:

- `title`
- `description`
- `tags`

SCSS: can use `Card` plus section-specific styles.

### ContactForm

Purpose: inquiry form UI.

Props:

- `interestOptions`

SCSS: yes, `styles/components/_contact-form.scss`.

Fields:

- Name
- Email
- Interest area
- Message

Note: form submission can be front-end-only until final backend/contact integration is provided.

### FAQAccordion

Purpose: accessible FAQ interaction.

Props:

- `items`

SCSS: yes, `styles/components/_faq-accordion.scss`.

Requirements:

- Buttons for questions.
- `aria-expanded`.
- Keyboard accessible.
- Smooth but restrained open/close.

### SEO

Purpose: per-page document title and meta description.

Props:

- `title`
- `description`

SCSS: no.

## 6. Section Breakdown

### Home

File: `pages/Home.jsx`

Sections:

- `Hero`: Nongnapat Neuman identity, calm positioning, primary inquiry CTA.
- `PhilosophyBlock`: integrative healing approach and grounded philosophy.
- `ServicePathways`: pathways into private sessions, retreats/workshops, and Reiki training.
- `NaturalSetting`: Chiang Dao / Northern Thailand environment as part of the healing experience.
- `WhoThisIsFor`: stress, burnout, nervous system imbalance, wellness travelers, Reiki students.
- `ContactCTA`: gentle contact invitation.

Components used: `Button`, `SectionHeader`, `Card`, `ServiceCard`.

### About

File: `pages/About.jsx`

Sections:

- Page hero with practitioner-led introduction.
- Experience block highlighting 20+ years.
- Philosophy and approach section.
- Values/principles of care section.
- Natural setting tie-in.
- CTA toward services/contact.

Components used: `Hero`, `SectionHeader`, `Card`, `ContactCTA`.

Content note: use approved discovery content conservatively. Do not invent biography details.

### Services

File: `pages/Services.jsx`

Sections:

- Services page hero.
- Overview of holistic healing.
- `ModalityGrid`: energy work, somatic therapies, sound healing, nature-based healing, mindfulness.
- `WhatToExpect`: calm explanation of inquiry/session flow.
- `WhoThisIsFor`.
- Contact CTA.

Components used: `SectionHeader`, `ServiceCard`, `Card`, `Button`.

### Retreats & Workshops

File: `pages/RetreatsWorkshops.jsx`

Sections:

- Retreat/workshop hero.
- Nature-based immersion section.
- Program pathway cards for retreats, workshops, custom group experiences.
- Benefits/experience expectations.
- Inquiry CTA.

Components used: `Hero`, `ProgramPathways`, `Card`, `Button`, `ContactCTA`.

Content note: do not invent dates, prices, group size, or schedule.

### Reiki Training

File: `pages/ReikiTraining.jsx`

Sections:

- Reiki Training hero.
- Training philosophy.
- Who it is for.
- Learning path / program interest section.
- What students may explore.
- Registration/inquiry CTA.

Components used: `Hero`, `SectionHeader`, `Card`, `Button`, `ContactCTA`.

Content note: frame details as inquiry-based until actual levels/certification/dates are supplied.

### Contact & FAQ

File: `pages/ContactFAQ.jsx`

Sections:

- Contact hero.
- Contact form.
- WhatsApp/email contact options.
- Location context.
- FAQ accordion.

Components used: `ContactForm`, `FAQAccordion`, `Card`, `Button`.

Content note: use placeholder-safe contact labels if exact WhatsApp/email values are not provided before build.

## 7. SCSS Architecture

Use `styles/main.scss` to import all partials in this order:

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
@use "sections/sections";
@use "pages/pages";
```

### Variables

Define Stitch tokens in `abstracts/_variables.scss` using rem values:

- Colors: `#fcf9f8`, `#f6f3f2`, `#f0eded`, `#e4e2e1`, `#1b1c1c`, `#434843`, `#334537`, `#4a5d4e`, `#e3dfd7`, `#c3c8c1`.
- Typography stacks: `Playfair Display`, `Plus Jakarta Sans`, fallbacks.
- Spacing scale based on 8px converted to rem:
  - `0.25rem`, `0.5rem`, `0.75rem`, `1.5rem`, `3rem`, `5rem`.
- Container: `75rem` max width.
- Desktop margin target: `4rem`.
- Mobile margin target: `1.25rem`.
- Radius:
  - `0.25rem`
  - `0.5rem`
  - `0.75rem`
  - `1rem`
  - `1.5rem`
  - `9999px`

### Breakpoints

Define mobile-first mixins:

- `sm`: `36rem`
- `md`: `48rem`
- `lg`: `64rem`
- `xl`: `80rem`

### Global Rules

- Authored CSS must use rem units only.
- Use semantic class names, not generated Stitch class names.
- Preserve Stitch tonal layering through reusable variables.
- Use CSS custom properties only when they make theming or runtime reuse simpler.
- Keep page-specific one-off layout rules in `styles/pages/`.
- Keep reusable section patterns in `styles/sections/`.

### Typography Rules

- Load fonts through the document head or CSS import.
- Use Playfair Display for headings.
- Use Plus Jakarta Sans for body and UI text.
- Preserve generous line height.
- Avoid viewport-width font sizing.
- Do not use negative letter spacing outside the approved large headline styles.

## 8. Responsive Implementation Rules

### Mobile

- Mobile-first single-column layout.
- Side margins: `1.25rem`.
- Navigation collapses into a menu button.
- Minimum tap target: `2.75rem`.
- Hero content should remain readable without text overlay conflicts.
- Cards stack vertically.
- Forms use full-width fields.
- FAQ questions use full-width accordion buttons.
- Preserve generous vertical section spacing without forcing huge empty gaps.

### Tablet

- Use 2-column layouts only where content remains readable.
- Increase side margins to `2rem`.
- Keep navigation mobile or desktop depending on available width and text wrapping.
- Avoid cramped multi-card rows.

### Desktop

- Use centered editorial layouts with a max content width of `75rem`.
- Use 12-column grid patterns where useful.
- Use wide side margins and generous vertical rhythm.
- Allow alternating image/text compositions where shown in Stitch.
- Keep content from spanning the full viewport.
- Maintain visual hierarchy through spacing and tonal surfaces.

### Images

- Use responsive images with stable aspect ratios.
- Use `object-fit: cover` only when crops preserve subject and atmosphere.
- Use descriptive `alt` text.
- Avoid layout shift by defining image dimensions or aspect ratios.

## 9. Animation Implementation Rules

Use AOS sparingly and only where it supports the calm experience.

Initialize AOS once in `utils/aos.js` or `main.jsx`:

- Duration: `700ms` to `900ms`
- Easing: gentle ease-out
- Once: true
- Offset: modest, approximately `80px`

Recommended AOS usage:

- Section headers: `fade-up`
- Feature cards: `fade-up` with small staggered delays
- Image/text editorial blocks: `fade-up` or `fade-in`
- Contact CTA: `fade-up`

Avoid:

- Animating every paragraph
- Large delays
- Fast motion
- Bouncy effects
- Parallax or scroll-jacking
- Animations on essential form interactions

Respect reduced motion:

- Disable or significantly reduce animation when `prefers-reduced-motion: reduce`.

## 10. Accessibility Requirements

- Use semantic HTML landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Include a skip link to main content.
- Maintain correct heading order on every page.
- Use real links for navigation and route changes.
- Use buttons only for actions.
- Ensure mobile menu is keyboard accessible and announces expanded/collapsed state.
- Provide visible focus states using the moss green theme.
- Label every form field explicitly.
- Associate error/help text with fields if validation is added.
- Use accessible names for icon-only controls.
- Ensure FAQ accordion uses `aria-expanded` and controlled panel IDs.
- Provide meaningful image alt text; decorative images should use empty alt text.
- Maintain sufficient color contrast for text, links, buttons, and focus states.
- Do not rely on color alone to communicate meaning.
- Keep touch targets at least `2.75rem`.

## 11. Implementation Checklist

- Create or verify React/Vite project inside `website-projects/Nongnapat Neuman V3/`.
- Install required dependencies: React Router, Sass, AOS.
- Create the approved folder structure.
- Add routing for all six pages plus not-found route.
- Build `SiteLayout`, `Navbar`, `Footer`, and `SEO`.
- Build reusable `Button`, `Card`, `SectionHeader`, `ContactForm`, and `FAQAccordion`.
- Create content data files for navigation, service modalities, pathways, and FAQ items.
- Implement Home page sections matching the approved Stitch intent.
- Implement About page sections matching the approved Stitch intent.
- Implement Services page sections matching the approved Stitch intent.
- Implement Retreats & Workshops page sections matching the approved Stitch intent.
- Implement Reiki Training page sections matching the approved Stitch intent.
- Implement Contact & FAQ page sections matching the approved Stitch intent.
- Implement SCSS architecture with variables, breakpoints, mixins, base styles, component styles, section styles, and page styles.
- Convert all authored sizing and spacing to rem units.
- Apply the approved earth/moss `Sacred Stillness` color and typography system.
- Add AOS initialization and subtle section-level animation.
- Add reduced-motion handling.
- Test responsive behavior at mobile, tablet, and desktop widths.
- Verify mobile navigation and FAQ accordion keyboard behavior.
- Verify form labels, focus states, and basic accessibility.
- Ensure no missing route links or broken internal navigation.
- Run lint/build checks available in the project.
- Use the senior frontend QA skill after implementation and before writing `04-build-summary.md`.
