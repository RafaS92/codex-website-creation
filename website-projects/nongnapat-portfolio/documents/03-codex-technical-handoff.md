# Codex Technical Implementation Handoff

## 1. Project Summary

Build a compact multi-page portfolio/service website for Nongnapat Neuman, an established holistic healing practitioner offering in-person sessions, retreats, workshops, and Reiki training in Chiang Dao / Northern Thailand.

The implementation should produce a calm, premium wellness website with editorial typography, warm off-white spacing, soft peach/clay accents, natural green grounding tones, rounded image treatments, icon-based service cards, testimonial support, FAQ content, and clear low-pressure inquiry paths.

The website must be built inside:

```text
website-projects/nongnapat-portfolio/
```

Do not start implementation until this handoff document is explicitly approved.

## 2. Technical Stack

Use the workflow default stack:

- React
- Vite
- SCSS
- AOS (Animate On Scroll)
- React Router
- react-i18next
- rem units only
- Component-based architecture

Recommended supporting packages:

- `react-router-dom` for page routing
- `i18next` and `react-i18next` for internationalization
- `aos` for subtle scroll animation
- `lucide-react` for icons where appropriate

The website must support two languages:

- English as the default language, locale code `en`
- Thai as the secondary language, locale code `th`

Use local placeholder content and placeholder image assets if final client photos, testimonials, contact details, social links, or final Thai translations are not yet available. Make all placeholder content easy to replace.

## 3. Project Folder Structure

Recommended structure:

```text
/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    assets/
      images/
      icons/
    components/
      Button/
      Card/
      ContactForm/
      FAQAccordion/
      Footer/
      Header/
      IconBadge/
      PageHero/
      SectionEyebrow/
      TestimonialCard/
    data/
      navigation.js
      routeMeta.js
    i18n/
      index.js
      locales/
        en/
          common.json
          home.json
          about.json
          services.json
          retreatsWorkshops.json
          reikiTraining.json
          faq.json
          contact.json
        th/
          common.json
          home.json
          about.json
          services.json
          retreatsWorkshops.json
          reikiTraining.json
          faq.json
          contact.json
    layouts/
      SiteLayout.jsx
    pages/
      About.jsx
      Contact.jsx
      FAQ.jsx
      Home.jsx
      ReikiTraining.jsx
      RetreatsWorkshops.jsx
      Services.jsx
    sections/
      AboutPreview.jsx
      FinalCTA.jsx
      HomeHero.jsx
      OfferingPreview.jsx
      ServiceGrid.jsx
      SettingSection.jsx
      TestimonialsSection.jsx
      TrustHighlights.jsx
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
```

Folder purposes:

- `assets/`: local images and custom icons. Use authentic client assets here when provided.
- `components/`: reusable UI components with focused responsibilities.
- `data/`: non-translatable structured data only, such as route paths, icon mappings, and page metadata.
- `i18n/`: react-i18next setup and editable translation JSON files for English and Thai.
- `layouts/`: shared page shell, header/footer composition, and route outlet layout.
- `pages/`: route-level page files.
- `sections/`: larger reusable page sections, especially Home sections and shared CTA/trust sections.
- `styles/`: SCSS architecture split by abstracts, base, components, sections, and pages.
- `utils/`: small setup helpers such as AOS initialization.

## 4. Routing / Page Structure

Use React Router with these routes:

- `/` -> `pages/Home.jsx`
- `/about` -> `pages/About.jsx`
- `/services` -> `pages/Services.jsx`
- `/retreats-workshops` -> `pages/RetreatsWorkshops.jsx`
- `/reiki-training` -> `pages/ReikiTraining.jsx`
- `/faq` -> `pages/FAQ.jsx`
- `/contact` -> `pages/Contact.jsx`

Use `layouts/SiteLayout.jsx` for shared `Header`, main content wrapper, and `Footer`.

Keep route paths language-neutral for the first build. Do not create separate `/en/...` and `/th/...` route trees unless the user requests language-prefixed URLs later.

Navigation labels:

- Home
- About
- Services
- Retreats & Workshops
- Reiki Training
- FAQ
- Contact

Primary header CTA:

- `Inquire` linking to `/contact`

Language behavior:

- Add a language switcher in the header.
- The switcher should toggle between English and Thai.
- Store the selected language in `localStorage`.
- Load the saved language on page load; otherwise default to English.
- Update `document.documentElement.lang` when the language changes.
- Keep users on the current route when they switch languages.
- Translate navigation labels while preserving the same route paths.

## 5. Component Breakdown

### `Button`

- Purpose: shared link/button styling for primary, secondary, text, and WhatsApp-style actions.
- Props: `children`, `to`, `href`, `variant`, `type`, `onClick`, `ariaLabel`.
- Used in: header CTA, heroes, offering previews, final CTA, contact page.
- SCSS: yes, component-specific.

### `Header`

- Purpose: site navigation with desktop links, mobile menu, and inquiry CTA.
- Props: `navigationItems`, `activeLanguage`, `onLanguageChange`.
- Used in: `SiteLayout`.
- SCSS: yes.

### `Footer`

- Purpose: footer navigation, contact placeholders, location context, and social link placeholders.
- Props: `navigationItems`, `contactInfo`.
- Used in: `SiteLayout`.
- SCSS: yes.

### `LanguageSwitcher`

- Purpose: toggle between English and Thai content.
- Props: `activeLanguage`, `onChange`, `options`.
- Used in: `Header` and optionally `Footer`.
- SCSS: yes.
- Accessibility: use real buttons, visible focus states, `aria-pressed` for the active language, and clear accessible labels such as `English` and `Thai`.

### `PageHero`

- Purpose: route-level intro section with eyebrow, heading, description, CTA, and optional image.
- Props: `eyebrow`, `title`, `description`, `image`, `imageAlt`, `primaryCta`, `secondaryCta`.
- Used in: About, Services, Retreats & Workshops, Reiki Training, FAQ, Contact.
- SCSS: yes.

### `SectionEyebrow`

- Purpose: small botanical/floral label above headings, inspired by references.
- Props: `children`, `icon`.
- Used in: most major sections.
- SCSS: yes.

### `IconBadge`

- Purpose: reusable icon-in-soft-shape treatment for services, values, and trust points.
- Props: `icon`, `label`, `description`.
- Used in: Service cards, trust highlights, offering details.
- SCSS: yes.

### `ServiceCard`

- Purpose: card for holistic healing, energy work, somatic therapies, sound healing, nature-based healing, and mindfulness.
- Props: `title`, `description`, `icon`.
- Used in: Services page and Home service preview.
- SCSS: yes.

### `OfferingCard`

- Purpose: preview card for Services, Retreats & Workshops, Reiki Training.
- Props: `title`, `description`, `image`, `imageAlt`, `to`, `ctaLabel`.
- Used in: Home offering preview.
- SCSS: yes.

### `TestimonialCard`

- Purpose: soft testimonial card with quote, name, context, optional portrait, and optional rating.
- Props: `quote`, `name`, `role`, `image`, `rating`.
- Used in: Home and any future testimonials section.
- SCSS: yes.

### `FAQAccordion`

- Purpose: accessible accordion for grouped FAQ content.
- Props: `items`, `allowMultiple`.
- Used in: FAQ page and Home FAQ preview.
- SCSS: yes.

### `ContactForm`

- Purpose: simple inquiry form with inquiry type selector.
- Props: `inquiryTypes`, `onSubmit`.
- Used in: Contact page.
- SCSS: yes.
- Fields: name, email, inquiry type, message. Keep required fields minimal.

### `FinalCTA`

- Purpose: shared low-pressure CTA section near page bottoms.
- Props: `title`, `description`, `primaryCta`, `secondaryCta`.
- Used in: all major pages.
- SCSS: yes, section-specific.

## 6. Section Breakdown

### Home

File: `pages/Home.jsx`

Sections:

- `HomeHero`: immersive intro with Nongnapat Neuman, Chiang Dao / Northern Thailand context, and `Contact / Inquire` CTA.
- `AboutPreview`: practitioner summary, 20+ years experience callout, and link to About.
- `ServiceGrid`: 4-6 core modalities using `ServiceCard`.
- `SettingSection`: nature-based healing and unique location emphasis.
- `OfferingPreview`: cards for Services, Retreats & Workshops, and Reiki Training.
- `TestimonialsSection`: use static cards if testimonials are available; otherwise show trust/value highlights instead.
- `FAQAccordion` preview: 3-5 high-value questions.
- `FinalCTA`: gentle inquiry CTA.

Translation namespace: `home.json`, plus shared labels from `common.json`.

### About

File: `pages/About.jsx`

Sections:

- `PageHero`: practitioner-led introduction.
- Experience/stat section: `20+ Years Experience`.
- Philosophy section: integrative approach and values.
- Values/trust grid using `IconBadge`.
- Optional story/timeline section if biography content is later provided.
- `FinalCTA`: `Inquire About a Session`.

Translation namespace: `about.json`, plus shared labels from `common.json`.

### Services

File: `pages/Services.jsx`

Sections:

- `PageHero`: overview of private holistic healing sessions.
- `ServiceGrid`: six core modalities.
- What to expect section.
- Who it is for section.
- Benefits/trust highlights section using grounded claims only.
- FAQ preview.
- `FinalCTA`: `Inquire About Private Sessions`.

Translation namespace: `services.json`, plus shared labels from `common.json`.

### Retreats & Workshops

File: `pages/RetreatsWorkshops.jsx`

Sections:

- `PageHero`: retreat/workshop introduction with nature imagery.
- Experience overview section.
- Types of experiences section.
- What participants can expect section.
- Chiang Dao / natural setting section.
- Upcoming dates or inquiry-based availability placeholder.
- `FinalCTA`: `Inquire About Retreats & Workshops`.

Translation namespace: `retreatsWorkshops.json`, plus shared labels from `common.json`.

### Reiki Training

File: `pages/ReikiTraining.jsx`

Sections:

- `PageHero`: Reiki training overview.
- Who it is for section.
- Training format/levels placeholder section.
- What students learn section.
- Experience/lineage/context placeholder.
- Reiki-specific FAQ preview.
- `FinalCTA`: `Inquire About Reiki Training` or `Join a Training`.

Translation namespace: `reikiTraining.json`, plus shared labels from `common.json`.

### FAQ

File: `pages/FAQ.jsx`

Sections:

- `PageHero`: practical reassurance.
- Grouped `FAQAccordion` sections:
  - Sessions
  - Retreats & Workshops
  - Reiki Training
  - Location & Arrival
  - Booking & Contact
- `FinalCTA`: `Still Have Questions? Inquire`.

Translation namespace: `faq.json`, plus shared labels from `common.json`.

### Contact

File: `pages/Contact.jsx`

Sections:

- `PageHero`: warm inquiry introduction.
- `ContactForm`: simple inquiry form.
- Contact methods section: WhatsApp, email, location context.
- Response expectations placeholder.
- Optional map/location placeholder if exact location is provided later.

Translation namespace: `contact.json`, plus shared labels from `common.json`.

## 7. Internationalization Structure

Use `react-i18next` and JSON translation files. All user-facing text must come from translation files rather than hardcoded component strings.

### i18n Setup

Create:

```text
src/i18n/index.js
src/i18n/locales/en/
src/i18n/locales/th/
```

Initialize i18next with:

- `fallbackLng: "en"`
- `lng` from the saved `localStorage` value when available
- namespaces for `common`, `home`, `about`, `services`, `retreatsWorkshops`, `reikiTraining`, `faq`, and `contact`
- default namespace `common`
- interpolation escaping disabled for React

Import `src/i18n/index.js` once in `src/main.jsx`.

### Translation File Responsibilities

- `common.json`: navigation labels, CTA labels, footer labels, language switcher labels, shared contact labels, repeated UI strings.
- `home.json`: Home hero, previews, home-specific service summaries, trust highlights, FAQ preview, final CTA.
- `about.json`: About page hero, practitioner intro, philosophy, values, experience highlights.
- `services.json`: Services page hero, modality cards, what to expect, who it is for, benefits, CTA.
- `retreatsWorkshops.json`: Retreat/workshop hero, experience overview, participant expectations, setting details, availability placeholder.
- `reikiTraining.json`: Reiki training hero, who it is for, training format, learning outcomes, lineage/context placeholder, CTA.
- `faq.json`: grouped FAQ categories, questions, and answers.
- `contact.json`: contact page hero, form labels, inquiry types, contact method labels, response expectation copy.

### Translation Data Patterns

Use arrays in JSON for repeated UI content such as services, FAQs, offerings, values, and testimonial placeholders.

Example content shape:

```json
{
  "hero": {
    "eyebrow": "Holistic Healing in Chiang Dao",
    "title": "Rest, reconnect, and return to balance",
    "description": "Grounded in 20+ years of holistic healing experience."
  },
  "services": [
    {
      "id": "energy-work",
      "title": "Energy Work",
      "description": "A gentle practice supporting balance and reconnection."
    }
  ]
}
```

Keep non-translatable metadata, such as icon names, route paths, and image references, in component/data configuration and map it to translated content by stable IDs.

### Language Switcher Rules

- Show a compact language switcher in the header.
- Use visible labels `EN` and `TH`, with accessible labels `English` and `Thai`.
- Persist language selection in `localStorage`.
- Update `document.documentElement.lang` to `en` or `th`.
- Ensure changing languages does not reset the current route.
- Ensure the mobile menu includes the language switcher.

### Thai Language Layout Rules

- Thai text may wrap differently from English, especially in headings, CTAs, cards, and navigation.
- Avoid fixed-height text containers.
- Buttons must allow translated text to wrap gracefully if needed.
- Keep line heights comfortable for Thai readability.
- Do not use uppercase transformation on translated UI labels.
- Use font stacks that support Thai characters well.
- Test both languages at mobile, tablet, and desktop widths.

## 8. SCSS Architecture

Use SCSS imports through `styles/main.scss`.

Recommended `main.scss` order:

```scss
@use "abstracts/variables";
@use "abstracts/breakpoints";
@use "abstracts/mixins";
@use "base/reset";
@use "base/typography";
@use "base/global";
```

Then import component, section, and page styles as the project grows.

### Variables

Define all core tokens in `abstracts/_variables.scss`:

- Colors:
  - off-white / warm white background
  - warm cream section background
  - soft peach accent
  - clay / muted terracotta accent
  - deep natural green
  - charcoal text
  - muted gray body text
  - soft border color
- Typography:
  - serif display font stack
  - sans-serif body font stack
  - font weights
  - line heights
- Spacing:
  - section vertical spacing
  - container padding
  - grid gaps
- Radius:
  - small radius for buttons/cards
  - larger radius for image blocks
- Shadows:
  - very soft card/image shadows only where needed
- Breakpoints:
  - mobile base
  - tablet
  - desktop
  - wide desktop

### Base Styles

- Use a modern reset.
- Set `box-sizing: border-box`.
- Use `html { scroll-behavior: smooth; }`.
- Define body background, text color, font family, and font smoothing.
- Keep all measurements in `rem`.
- Define global container utility classes if useful:
  - `.container`
  - `.section`
  - `.section--cream`

### Typography

- Use large serif headings for `h1`, `h2`, and selected display text.
- Use readable sans-serif for paragraphs, navigation, forms, and supporting text.
- Do not scale font size directly with viewport width.
- Ensure headings wrap well on mobile.
- Keep letter spacing at `0`.

### Component and Section Styles

- Components with unique visual behavior should have matching SCSS partials under `styles/components/`.
- Larger page sections should have matching partials under `styles/sections/`.
- Page-specific layout overrides should live under `styles/pages/`.
- Avoid one large unorganized stylesheet.

## 9. Responsive Implementation Rules

Use mobile-first CSS.

### Mobile

- Stack all split layouts into a single column.
- Keep first-screen hero concise and readable.
- Use a mobile menu for navigation.
- Ensure buttons and menu items have touch-friendly sizing.
- Service grids should become 1-column or compact 2-column layouts depending on content length.
- Do not place small text over busy imagery.
- Crop images with `object-fit: cover` and stable aspect ratios.
- Keep contact form fields full width.
- Validate both English and Thai text at mobile widths.

### Tablet

- Introduce 2-column layouts where space allows.
- Use 2-column service/offering grids.
- Keep header navigation mobile or simplified until there is enough width for desktop navigation.
- Preserve generous spacing without making sections overly tall.

### Desktop

- Use editorial split sections with text and imagery side-by-side.
- Use 3-column offering/testimonial grids when content supports it.
- Use 3-column or 4-column service grids depending on card density.
- Keep maximum content widths controlled for readability.
- Header navigation should display inline with a visible inquiry CTA.
- Language switcher should remain visible in the desktop header.

### Wide Desktop

- Prevent content from stretching too far.
- Use max-width containers.
- Ensure hero imagery remains emotionally clear and not awkwardly cropped.

## 10. Animation Implementation Rules

Use AOS sparingly and consistently.

Initialize AOS in `utils/aos.js` and call it from `main.jsx` or `App.jsx`.

Recommended defaults:

- Duration: `700ms` to `900ms`
- Easing: soft ease-out
- Once: `true`
- Offset: moderate, around `80` to `120`

Recommended AOS usage:

- Major section entrances: `fade-up`
- Split image blocks: `fade-left` or `fade-right` only on desktop-safe layouts
- Card groups: small staggered delays, maximum 3 stagger steps
- FAQ and form sections: minimal or no animation

Avoid:

- Animating every element
- Fast parallax
- Cursor effects
- Large movement distances
- Animations that delay access to important form or navigation content
- Motion that makes the site feel theatrical instead of calm

Respect `prefers-reduced-motion` in CSS and avoid relying on animation for comprehension.

## 11. Accessibility Requirements

Implementation must include:

- Semantic HTML structure: `header`, `nav`, `main`, `section`, `footer`.
- One `h1` per page.
- Logical heading order.
- Descriptive alt text for all meaningful images.
- Empty alt text for purely decorative images.
- Keyboard-accessible navigation and mobile menu.
- Visible focus states for links, buttons, form fields, and accordion controls.
- Buttons used for actions; links used for navigation.
- Accessible form labels connected to fields.
- Helpful form error states if validation is implemented.
- FAQ accordion buttons with correct `aria-expanded` and controlled content IDs.
- Sufficient contrast for text, buttons, and focus states.
- No text embedded in images when HTML text can be used.
- Mobile touch targets sized comfortably.
- Language switcher announces the active language and is keyboard-operable.
- The page `lang` attribute updates when switching between English and Thai.

## 12. Implementation Checklist

- Vite React project created in `website-projects/nongnapat-portfolio/`.
- Required dependencies installed: React Router, AOS, SCSS/Sass, i18next, react-i18next, and icons if used.
- Folder structure created according to this handoff.
- Routes implemented and connected through `SiteLayout`.
- Shared `Header` and `Footer` created.
- `react-i18next` initialized in `src/i18n/index.js`.
- English and Thai locale JSON files created for all namespaces.
- All user-facing text moved into translation files.
- Language switcher implemented in desktop and mobile navigation.
- Language selection persists in `localStorage`.
- `document.documentElement.lang` updates correctly for English and Thai.
- Reusable components built: Button, PageHero, SectionEyebrow, IconBadge, ServiceCard, OfferingCard, TestimonialCard, FAQAccordion, ContactForm, FinalCTA.
- Structured translatable content added in locale JSON files; non-translatable config added in `src/data/`.
- All seven pages created: Home, About, Services, Retreats & Workshops, Reiki Training, FAQ, Contact.
- SCSS architecture created with variables, mixins, breakpoints, reset, typography, global styles, and organized component/section/page partials.
- All sizing uses `rem` units.
- Mobile-first responsive behavior implemented.
- English and Thai layouts reviewed on mobile, tablet, and desktop.
- Header mobile menu tested with keyboard and touch behavior.
- Images use stable aspect ratios and responsive cropping.
- AOS initialized once and used only for subtle section/card entrance animations.
- `prefers-reduced-motion` considered in CSS.
- Contact form has accessible labels and usable field structure.
- FAQ accordion is keyboard-friendly and screen-reader aware.
- Placeholder content is easy to replace with final biography, photos, testimonials, contact details, and training information.
- Website visually reflects the approved UI/UX strategy and image reference direction without directly copying the reference designs.
- Run local dev server and visually check desktop and mobile views.
- Run production build successfully.
- Remove unused files and default Vite boilerplate.
- Save build summary to `documents/04-build-summary.md` only after the build stage is approved and completed.
