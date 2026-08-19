# Codex Technical Implementation Handoff

## 1. Project Summary

Build a responsive, multi-page Studio IKI website that promotes authentic Jikiden Reiki seminars as the primary offer and personalised therapies as the secondary offer. The implementation must reproduce the approved Stitch composition: broad editorial spacing, alternating porcelain and near-white bands, plum-gray typography and controls, thin warm borders, restrained card geometry, and intimate nature-led imagery.

`Stitch Fidelity Source Status: SCREEN_LEVEL_READY`

The build has paired full-resolution desktop screenshots and generated responsive HTML for seven primary pages. Use the screenshot for visual truth and the matching HTML for section structure, responsive intent, classes, interactions, image framing, and detailed sizing relationships:

| Page                  | Screenshot                                                  | Generated HTML                                        |
| --------------------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| Home                  | `documents/stitch/screenshots/01-home.png`                  | `documents/stitch/html/01-home.html`                  |
| Jikiden Reiki Seminar | `documents/stitch/screenshots/02-jikiden-reiki-seminar.jpg` | `documents/stitch/html/02-jikiden-reiki-seminar.html` |
| Therapies             | `documents/stitch/screenshots/03-therapies.jpg`             | `documents/stitch/html/03-therapies.html`             |
| About & Philosophy    | `documents/stitch/screenshots/04-about-philosophy.jpg`      | `documents/stitch/html/04-about-philosophy.html`      |
| Events                | `documents/stitch/screenshots/05-events.jpg`                | `documents/stitch/html/05-events.html`                |
| FAQ                   | `documents/stitch/screenshots/06-faq.jpg`                   | `documents/stitch/html/06-faq.html`                   |
| Contact / Inquiry     | `documents/stitch/screenshots/07-contact-inquiry.jpg`       | `documents/stitch/html/07-contact-inquiry.html`       |

No dedicated mobile screenshots were exported. Mobile and tablet layouts must therefore follow the responsive HTML and the approved responsive rules in `02-design.md`; these responsive details are implementation inferences and require build-stage visual QA. Privacy and Terms / Booking Policy also have no screen-level references and must inherit the approved global shell and long-form content styling.

Do not copy generated Stitch facts blindly. The approved discovery document controls business facts and content constraints. Do not publish invented events, testimonials, prices, durations, policies, availability, medical claims, modalities, credentials, or contact details. Keep unresolved content clearly represented in code as pending data rather than plausible public facts.

## 2. Technical Stack

- React with functional components and hooks
- Vite
- React Router DOM for client-side routes
- SCSS using mobile-first styles and `rem` units only
- AOS for a small number of subtle on-scroll reveals
- Sanity CMS
- i18n
- Semantic HTML5
- Native browser form controls with React-managed validation
- Local content/data modules for services, navigation, FAQs, credentials, and events
- ESLint using the Vite React baseline

Do not add a UI framework, Tailwind, CSS-in-JS library, global state manager, form library, CMS, booking system, payment system, calendar integration, analytics, newsletter, maps, CRM, or messaging integration unless separately approved.

## 3. Project Folder Structure

```text
website-projects/Studio Iki/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── approved/
│       └── placeholders/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── logo/
│   ├── components/
│   │   ├── Button/
│   │   ├── ContactCard/
│   │   ├── ContactForm/
│   │   ├── EventCard/
│   │   ├── FAQItem/
│   │   ├── ImageFrame/
│   │   ├── MobileMenu/
│   │   ├── SectionHeading/
│   │   ├── ServiceCard/
│   │   ├── StatusChip/
│   │   └── TestimonialCard/
│   ├── data/
│   │   ├── credentials.js
│   │   ├── events.js
│   │   ├── faqs.js
│   │   ├── navigation.js
│   │   ├── services.js
│   │   └── site.js
│   ├── hooks/
│   │   ├── useBodyScrollLock.js
│   │   └── useReducedMotion.js
│   ├── layouts/
│   │   └── SiteLayout/
│   ├── pages/
│   │   ├── AboutPage/
│   │   ├── ContactPage/
│   │   ├── EventsPage/
│   │   ├── FAQPage/
│   │   ├── HomePage/
│   │   ├── LegalPage/
│   │   ├── NotFoundPage/
│   │   ├── SeminarPage/
│   │   └── TherapiesPage/
│   ├── sections/
│   │   ├── AboutFeature/
│   │   ├── CTASection/
│   │   ├── EventsPreview/
│   │   ├── FAQPreview/
│   │   ├── HealingGardenFeature/
│   │   ├── Hero/
│   │   ├── PhilosophyQuote/
│   │   ├── SeminarFeature/
│   │   ├── ServiceDetail/
│   │   ├── ServicesGrid/
│   │   └── TestimonialsSection/
│   ├── styles/
│   │   ├── abstracts/
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins.scss
│   │   │   └── _variables.scss
│   │   ├── base/
│   │   │   ├── _fonts.scss
│   │   │   ├── _global.scss
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── utilities/
│   │   │   ├── _a11y.scss
│   │   │   └── _layout.scss
│   │   └── main.scss
│   ├── utils/
│   │   ├── formValidation.js
│   │   └── routes.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Folder responsibilities:

- `components/`: small reusable UI units; each visually unique component owns a colocated `.scss` file.
- `sections/`: reusable page-scale compositions matching recurring Stitch bands and grids.
- `pages/`: route entry components; page SCSS should only handle page-specific composition not owned by sections.
- `layouts/`: shared header, main landmark, footer, skip link, and route outlet.
- `data/`: editable content records separated from JSX so unresolved facts are visible and events can be updated manually without rewriting components.
- `styles/`: tokens, reset, typography, global behavior, and small shared utilities. Do not put all component styling here.
- `hooks/`: narrowly scoped interaction helpers.
- `public/images/approved/`: client-approved production images.
- `public/images/placeholders/`: clearly labeled temporary development imagery only; never confuse it with approved assets.

## 4. Routing / Page Structure

| Route                    | Page component                           | Status / reference                                      |
| ------------------------ | ---------------------------------------- | ------------------------------------------------------- |
| `/`                      | `HomePage`                               | Direct Stitch screen reference                          |
| `/jikiden-reiki-seminar` | `SeminarPage`                            | Direct Stitch screen reference                          |
| `/therapies`             | `TherapiesPage`                          | Direct Stitch screen reference                          |
| `/about`                 | `AboutPage`                              | Direct Stitch screen reference                          |
| `/events`                | `EventsPage`                             | Direct Stitch screen reference                          |
| `/faq`                   | `FAQPage`                                | Direct Stitch screen reference                          |
| `/contact`               | `ContactPage`                            | Stitch shell/reference; form layout completion required |
| `/privacy`               | `LegalPage` configured for privacy       | Layout inference; content pending                       |
| `/terms`                 | `LegalPage` configured for terms/booking | Conditional layout inference; content pending           |
| `*`                      | `NotFoundPage`                           | Global-system inference                                 |

Routing rules:

- Place all routes under `SiteLayout` so header, navigation, footer, skip link, and main landmark stay consistent.
- Add a `ScrollToTop` route listener using `useLocation`; move the document to the top on every pathname change without forced smooth scrolling.
- Update `document.title` and page description metadata per route using a small route metadata utility or route-level effect.
- Active navigation must use `NavLink` and `aria-current="page"`.
- CTA destinations must preserve intent. Seminar actions go to the seminar inquiry context; therapy and guidance actions go to the appropriate inquiry-purpose context on `/contact`.
- Query parameters such as `/contact?purpose=seminar` may preselect the inquiry purpose. They must not imply an external booking integration.
- Close the mobile menu and restore focus to its trigger after route navigation.
- Use real routes, never empty `href="#"` placeholders.

## 5. Component Breakdown

### Layout and navigation

| Component     | Purpose and props                                                                      | Used by      | SCSS              |
| ------------- | -------------------------------------------------------------------------------------- | ------------ | ----------------- |
| `SiteLayout`  | Shared shell; owns skip link, `Header`, `main`, route outlet, and `Footer`             | All routes   | `SiteLayout.scss` |
| `Header`      | Desktop navigation and mobile trigger; props: `navItems`, `primaryCta`                 | `SiteLayout` | `Header.scss`     |
| `MobileMenu`  | Accessible small-screen navigation dialog/drawer; props: `open`, `onClose`, `navItems` | `Header`     | `MobileMenu.scss` |
| `Footer`      | Wordmark, dynamic year, legal and contact links; props: `links`, `socialLinks`         | `SiteLayout` | `Footer.scss`     |
| `ScrollToTop` | Route-change scroll behavior; no rendered UI                                           | App routing  | No SCSS           |

Use one mobile navigation pattern across the site. The varying bottom-navigation treatments found in generated HTML are not separate requirements.

### Foundational UI

| Component          | Purpose and props                                                                                          | Used by               | SCSS                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------ |
| `Button`           | Link or button visual variants; props: `as`, `variant`, `to`, `type`, `disabled`, `children`, icon options | Global                | `Button.scss`                  |
| `SectionContainer` | Reusable max-width, margins, and vertical spacing; props: `as`, `tone`, `size`, `className`                | All sections          | Shared `SectionContainer.scss` |
| `SectionHeading`   | Consistent eyebrow/title/body alignment; props: `eyebrow`, `title`, `body`, `align`, `headingLevel`        | Most pages            | `SectionHeading.scss`          |
| `ImageFrame`       | Approved rounded border/crop treatment; props: `src`, `alt`, `ratio`, `position`, `loading`, `sizes`       | Heroes/features/cards | `ImageFrame.scss`              |
| `StatusChip`       | Event status with text and icon; props: `label`, `state`                                                   | Event cards/details   | `StatusChip.scss`              |

`SectionContainer` may share layout styles; do not duplicate the desktop margin and section-padding rules across every page.

### Content components

| Component         | Purpose and props                                                                                        | Used by            | SCSS                   |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------- |
| `ServiceCard`     | Short service overview; props: `title`, `summary`, `to`, optional icon                                   | Home, Therapies    | `ServiceCard.scss`     |
| `ServiceDetail`   | Alternating long-form therapy row; props: `service`, `imageSide`, `cta`                                  | Therapies          | `ServiceDetail.scss`   |
| `EventCard`       | Image, status, metadata, title, summary, action; props: `event`                                          | Home, Events       | `EventCard.scss`       |
| `TestimonialCard` | Approved quotation and attribution; props: `quote`, `name`, `context`                                    | Home, Seminar      | `TestimonialCard.scss` |
| `FAQItem`         | Accessible disclosure or static bordered Q&A; props: `question`, `answer`, `defaultOpen`, `headingLevel` | Home, FAQ, Seminar | `FAQItem.scss`         |
| `ContactCard`     | Portrait and confirmed direct-contact methods; props: `practitioner`, `channels`, `location`             | Contact            | `ContactCard.scss`     |
| `ContactForm`     | Inquiry-purpose form, validation, submission states; props: `initialPurpose`, `onSubmit`, `privacyUrl`   | Contact            | `ContactForm.scss`     |

Render testimonials, events, contact channels, and social links from data. If records are absent or unapproved, use an intentional empty/pending state in development and omit the public module at production time; do not invent records to fill the layout.

### Reusable sections

| Component              | Purpose and props                                                                          | Used by              | SCSS                        |
| ---------------------- | ------------------------------------------------------------------------------------------ | -------------------- | --------------------------- |
| `Hero`                 | Split or centered page introduction; props: `variant`, `title`, `body`, `actions`, `image` | All primary pages    | `Hero.scss`                 |
| `SeminarFeature`       | Primary-offer copy/image band                                                              | Home                 | `SeminarFeature.scss`       |
| `ServicesGrid`         | Responsive four-service grid                                                               | Home, Therapies      | `ServicesGrid.scss`         |
| `AboutFeature`         | Practitioner portrait, story, credentials, action                                          | Home, About          | `AboutFeature.scss`         |
| `HealingGardenFeature` | Centered copy and landscape image panel                                                    | Home, About          | `HealingGardenFeature.scss` |
| `PhilosophyQuote`      | EB Garamond editorial quotation band                                                       | Home, About          | `PhilosophyQuote.scss`      |
| `EventsPreview`        | Three-card event preview and page link                                                     | Home                 | `EventsPreview.scss`        |
| `FAQPreview`           | Small FAQ subset and full FAQ link                                                         | Home, Seminar        | `FAQPreview.scss`           |
| `TestimonialsSection`  | Approved testimonial grid or omitted state                                                 | Home, Seminar        | `TestimonialsSection.scss`  |
| `CTASection`           | Warm full-width conversion band; props: `title`, `body`, `actions`, `tone`                 | All conversion pages | `CTASection.scss`           |

## 6. Section Breakdown

### Home — `HomePage.jsx`

Direct references: `01-home.png` and `01-home.html`.

1. `Hero` split layout with seminar and therapies actions plus framed treatment/practitioner image.
2. `SeminarFeature` warm two-column band.
3. `ServicesGrid` with the four approved therapies.
4. `AboutFeature` portrait, approved 20+ years experience, and credentials.
5. `HealingGardenFeature` centered panel and landscape image.
6. `PhilosophyQuote` in EB Garamond.
7. `EventsPreview` three-card geometry; data may be empty until real events exist.
8. `TestimonialsSection`; omit from production until approved testimonials and consent exist.
9. `FAQPreview`; answers must use confirmed content only.
10. `CTASection` with seminar and therapy paths.

Fidelity priorities: match the large split hero proportions, alternating white/porcelain section rhythm, four equal service cards, portrait-to-copy ratio, broad Healing Garden image, centered quote scale, and final two-action CTA. Preserve the screenshot’s section order even when placeholder-only sections are temporarily hidden.

### Jikiden Reiki Seminar — `SeminarPage.jsx`

Direct references: `02-jikiden-reiki-seminar.jpg` and `02-jikiden-reiki-seminar.html`.

Implement definition/distinction, lineage, audience (`For Whom`), learning outcomes/curriculum, seminar environment, certification context, practical details placeholder, testimonials placeholder, FAQ, and inquiry CTA using the screen’s editorial image-and-copy rhythm.

Use approved wording about the official curriculum and Kyoto lineage. Do not add dates, duration, capacity, prerequisites, language, price, inclusions, certification outcome, deposit, cancellation, or registration mechanics until confirmed.

Fidelity priorities: preserve the restrained page hero, wide media panels, spacious typography, structured information blocks, and prominent seminar action.

### Therapies — `TherapiesPage.jsx`

Direct references: `03-therapies.jpg` and `03-therapies.html`.

1. Centered/restrained `Hero`.
2. `ServicesGrid` titled as the four pathways.
3. Four `ServiceDetail` rows in this exact order: Jikiden Reiki, Biodynamic CranioSacral Therapy (BCST), Chi Nei Tsang, Crystal Energy Healing.
4. Full-width experience/stillness band.
5. Therapy guidance and booking `CTASection`.
6. Complementary-care disclaimer adjacent to benefits and conversion content.

Do not copy the generated `60 / 90 mins` or `Consult Booking` values. Keep duration, pricing, contraindications, availability, preparation, and aftercare out of public data until confirmed.

Fidelity priorities: match alternating media orientation, framed image ratios, generous copy measure, bordered service cards, and the final centered warm band.

### About & Philosophy — `AboutPage.jsx`

Direct references: `04-about-philosophy.jpg` and `04-about-philosophy.html`.

Implement the professional journey hero, luxury-wellness background, deeper healing question, approved modalities and credentials, Jikiden Reiki teaching passion, healing philosophy, Healing Garden story, and CTA. Use `AboutFeature`, credential/data cards, `PhilosophyQuote`, and `HealingGardenFeature` where their composition matches the screen.

Replace generated Sound Therapy and Somatic Integration content with approved credentials or modalities. Treat the generated luxury/turbulence quotation as unapproved copy, not a direct quotation.

Fidelity priorities: preserve the large editorial opening, framed practitioner/location imagery, strong but quiet text hierarchy, card rhythm, and reflective serif accent.

### Events — `EventsPage.jsx`

Direct references: `05-events.jpg` and `05-events.html`.

Implement the hero, responsive upcoming-events grid, optional featured event composition, and final registration/inquiry CTA. `events.js` records should support `id`, `slug`, `title`, `startDate`, `endDate`, `time`, `location`, `summary`, `image`, `imageAlt`, `status`, `capacityLabel`, and `inquiryUrl`.

The generated event names are layout examples only. When no confirmed event records exist, show a calm empty state with a general inquiry action. Do not implement a calendar or mailing list because those integrations are unresolved.

Fidelity priorities: retain the card image-to-copy ratio, small status chips, metadata hierarchy, three-column desktop grid, larger featured panel, and warm final CTA.

### FAQ — `FAQPage.jsx`

Direct references: `06-faq.jpg` and `06-faq.html`.

Group approved questions into seminar, therapy, and practical/location sections. Follow with a distinct medical-complementarity note and contact CTA. Use semantic heading groups and `FAQItem` disclosures if interactive collapse is retained.

Generated answers are not approved operational facts. Do not claim that experience is unnecessary, supplies are provided, or give schedule/location/suitability guidance until confirmed.

Fidelity priorities: maintain the narrow readable measure, generous vertical separation between categories, thin bordered rows/cards, and distinct disclaimer panel.

### Contact / Inquiry — `ContactPage.jsx`

Direct references: `07-contact-inquiry.jpg` and `07-contact-inquiry.html` for the shell and left column. The right-column form is an explicit implementation completion because Stitch comments and JavaScript reference it but omit its markup.

Desktop: two columns, with calm introduction and `ContactCard` on the left and `ContactForm` on the right. Mobile: one column, introduction first, form second, direct contact details third unless visual testing shows the contact card reads better before the form.

Required form fields:

- Inquiry purpose: seminar, therapy session, help choosing a therapy, or general inquiry
- Full name
- Email
- Phone / messaging contact only if confirmed as necessary; otherwise optional or omitted
- Message
- Explicit privacy consent
- Submit action

Required states: untouched, focus, validation error, submitting, success, and submission failure. Until a real endpoint is approved, do not fake a successful external submission in production. Provide a clearly documented local development handler and keep integration isolated behind `onSubmit`.

The questionnaire supplies `nongnapatr@gmail.com`, but the client must still approve publication and routing. Phone, complete location, response time, social links, and consent wording remain pending.

Form visual styling is an inference from the approved system: warm quiet input surfaces, visible labels, 1 px borders, 8 px corners, plum focus ring, and primary filled submit button.

### Privacy and Terms / Booking Policy — `LegalPage.jsx`

No direct screen reference. This is a global-system inference. Use the shared shell, a narrow long-form reading column, a strong page title, clear nested headings, comfortable paragraph spacing, and the approved typography/colors. Do not generate legal content. Hide the conditional Terms route/link until actual terms are supplied if the confirmed booking model does not require it.

### Not Found — `NotFoundPage.jsx`

No direct screen reference. This is a global-system inference. Use a simple centered message, one sentence, and a primary Home action; keep it visually consistent and avoid decorative redesign.

## 7. SCSS Architecture

### Token files

Define all tokens in `styles/abstracts/_variables.scss`:

- Colors: porcelain `#FBF8F6`, warm greige `#DCD2CC`, dusty lavender `#B8A6BD`, soft mauve `#C998A5`, plum gray `#574B56`, plus audited derived surface/text values that stay within the approved family.
- Typography: Be Vietnam Pro for UI/body and EB Garamond for editorial quotations.
- Spacing: a consistent 0.5rem base scale; include named section, gutter, desktop margin, and mobile margin tokens derived from the approved 8 px system.
- Radii: 0.5rem standard and 0.75rem large.
- Borders: 0.0625rem solid warm greige.
- Content widths, header height, transition timing, and focus ring.

Never place raw pixel values in authored SCSS. Convert reference values to rem: 8 px → `0.5rem`, 20 px → `1.25rem`, 24 px → `1.5rem`, 44 px → `2.75rem`, 64 px → `4rem`, and 80 px → `5rem` assuming a 16 px root. Do not change the root font size to make rem conversion easier.

### Breakpoints and mixins

Use a small mobile-first breakpoint set in `_breakpoints.scss`, for example:

- compact/mobile base: below `48rem`
- tablet: from `48rem`
- desktop: from `64rem`
- wide desktop: from `90rem`

These are implementation breakpoints, not visual redesign decisions. Adjust only when the content or direct reference proves a breakpoint is needed. Provide mixins for media queries, content container, focus ring, reduced motion, and visually hidden text.

### Base styles

- `_reset.scss`: box sizing, inherited fonts, media defaults, button/input normalization, reduced motion fallback.
- `_fonts.scss`: load Be Vietnam Pro and EB Garamond efficiently; prefer self-hosted approved files or a documented provider import.
- `_typography.scss`: fluid but bounded heading/body styles using `clamp()` with rem values.
- `_global.scss`: body/background/text, links, focus-visible, responsive media, selection, and section defaults.
- `_a11y.scss`: skip link, visually hidden utility, and live-region helper.
- `_layout.scss`: content container and limited grid utilities only.

### Component and page styling

- Every visually distinct component or section owns a colocated `.scss` file imported by its component.
- Keep selectors component-scoped with a consistent naming convention such as BEM.
- Avoid deep nesting beyond two levels, `!important`, tag-heavy selectors, and page-specific overrides of shared components.
- Use CSS Grid for major page/card layouts and Flexbox for navigation and small alignment groups.
- Use aspect-ratio and `object-fit: cover` for image frames; set per-image focal positions in data or modifiers.
- Do not copy Tailwind utility strings from the generated HTML into React. Translate them into semantic SCSS using the shared tokens.

## 8. Responsive Implementation Rules

### Mobile base

- Use a four-column conceptual grid with approximately `1.25rem` page margins.
- Stack split heroes and feature rows into one column with a deliberate text/action/image order.
- Render service and event grids as one column.
- Use the shared mobile menu; do not implement competing drawer and bottom-navigation systems.
- Make all interactive targets at least `2.75rem` in both dimensions.
- Keep buttons full-width only where it improves narrow-screen usability; otherwise allow natural width and wrap action groups vertically.
- Scale section rhythm below the desktop `5rem` value while preserving generous separation.
- Keep form controls full width and place errors directly after their field.

### Tablet

- Introduce a two-column card grid where content fits without cramped copy.
- Allow selected split sections to remain stacked until their text and images can maintain the Stitch proportions.
- Use two-column form/contact layout only when both columns retain a comfortable reading measure.
- Scale typography and section padding toward desktop values.

### Desktop

- Use the 12-column grid, approximately `4rem` outer margins, `1.5rem` gutters, and up to `5rem` major section spacing.
- Match the screenshot column ratios rather than defaulting every split to 50/50.
- Keep four service cards and three event cards aligned and equal-height where shown.
- Preserve broad maximum widths and intentionally narrower text measures.
- Show the full desktop header with page navigation, Contact, and seminar action.

### Images and content resilience

- Preserve reference focal points using `object-position` per image.
- Supply responsive `srcSet`/`sizes` or appropriately sized source files; do not ship 2560 px-wide full-page screenshot crops as content images.
- Prevent cumulative layout shift with intrinsic dimensions or `aspect-ratio`.
- Test long translated or revised headings even if the first release is English-only.
- When a placeholder-only module is omitted, maintain the intentional section rhythm without leaving blank framed cards.

## 9. Animation Implementation Rules

- Initialize AOS once in `main.jsx` or a small dedicated initializer and refresh it after route changes only when needed.
- Use `fade-up` for selected section headings or whole cards and a restrained `fade` for large images.
- Animate at section/component level, not every paragraph, icon, and button.
- Default duration: approximately 500–650 ms; delay increments no greater than 75 ms and only across a short card row.
- Trigger once unless route behavior requires reinitialization.
- Do not animate the header, core navigation, forms, FAQ answer height with AOS, legal text, or essential content visibility.
- Avoid parallax, autoplay, large transforms, and decorative motion.
- If `prefers-reduced-motion: reduce` is active, disable AOS animation and nonessential transitions so content appears immediately.
- Ensure the page remains complete and readable if JavaScript or AOS fails.

## 10. Accessibility Requirements

- Target WCAG 2.2 AA.
- Use one `h1` per page and preserve logical heading order across reusable sections.
- Include `header`, `nav`, `main`, `section`, `article`, `aside` where appropriate, and `footer` landmarks.
- Add a keyboard-visible skip link to the main content.
- Make mobile navigation keyboard operable, label its trigger, expose `aria-expanded`, trap focus only if implemented as a modal dialog, close on Escape, and restore trigger focus.
- Use `NavLink` plus `aria-current` for the active page; do not rely on underline or color alone.
- Provide visible, high-contrast `:focus-visible` styles within the approved palette.
- Audit text, mauve links, status chips, borders, and button states for AA contrast; adjust derived shades within the approved palette as necessary.
- Write meaningful alt text for informative photography and use empty alt text for purely decorative images. Do not repeat surrounding captions.
- Use native buttons for actions, anchors for navigation, and native form controls wherever possible.
- Associate every form control with a visible label; use `fieldset` and `legend` for inquiry-purpose choices.
- Connect field errors with `aria-describedby`, mark invalid fields with `aria-invalid`, focus an error summary after failed submit when present, and announce success/failure with an appropriate live region.
- Privacy consent must not be preselected.
- FAQ disclosures must use buttons with `aria-expanded` and stable controlled-panel IDs.
- Do not place essential information only in image text or color.
- Keep complementary-care disclaimers accessible and near therapy benefit claims.
- Respect reduced motion and avoid content that becomes inaccessible before animation runs.
- Test at 200% zoom, keyboard-only, and with a screen reader smoke test.

## 11. Implementation Checklist

### Project and architecture

- [ ] Scaffold React + Vite without overwriting approved documents or Stitch exports.
- [ ] Install only the approved dependencies: React Router DOM, Sass, and AOS in addition to the Vite React baseline.
- [ ] Create the folder structure and keep content data separate from JSX.
- [ ] Preserve `documents/` as workflow source material; do not bundle full-page Stitch screenshots into production output.
- [ ] Add environment/config boundaries for any future form endpoint without inventing an integration.

### Routes and content

- [ ] Implement all seven referenced primary routes.
- [ ] Implement Privacy and conditional Terms / Booking Policy using the inferred legal layout only when approved content exists.
- [ ] Add a useful Not Found route.
- [ ] Scroll to the top on every pathname change.
- [ ] Set route titles/descriptions and active navigation state.
- [ ] Preserve approved page order, service order, CTA hierarchy, and responsible-claims boundary.
- [ ] Remove generated events, testimonials, durations, prices, extra modalities, unapproved FAQ facts, and placeholder links from production content.
- [ ] Make events editable through the isolated data module and show a truthful empty state when no events are confirmed.

### Components and styling

- [ ] Build the shared shell, foundational components, content cards, form, and recurring sections.
- [ ] Define palette, type, spacing, border, radius, width, and breakpoint tokens.
- [ ] Use rem units for all authored CSS sizes, including media queries and borders.
- [ ] Keep component styles colocated and avoid a monolithic stylesheet.
- [ ] Load Be Vietnam Pro and EB Garamond efficiently.
- [ ] Use one consistent responsive navigation pattern.
- [ ] Replace temporary remote/generated imagery with approved licensed assets before launch.

### Responsive and interaction QA

- [ ] Test representative widths around 20rem, 23.4375rem, 48rem, 64rem, 90rem, and a wide desktop reference.
- [ ] Verify grid transitions, split-section ordering, image crops, headings, action wrapping, footer, and form at every range.
- [ ] Verify touch targets are at least 2.75rem.
- [ ] Initialize AOS once, use it selectively, and disable it for reduced motion.
- [ ] Verify the complete site remains usable when animations are disabled.
- [ ] Test mobile menu open/close, route navigation, focus restoration, and body scroll lock.
- [ ] Test form validation plus untouched, focus, error, submitting, success, and failure states.

### Accessibility and quality

- [ ] Validate semantic landmarks and one logical heading hierarchy per page.
- [ ] Test keyboard navigation, skip link, focus styles, mobile menu, FAQ disclosures, and form errors.
- [ ] Audit WCAG 2.2 AA contrast for all text and interactive states.
- [ ] Confirm every image has correct intrinsic dimensions, loading behavior, and alt treatment.
- [ ] Test at 200% zoom and perform a screen-reader smoke test.
- [ ] Run lint and production build with no errors.
- [ ] Remove unused files, dead styles, empty links, console errors, and temporary debug code.

### Visual fidelity acceptance

- [ ] Compare every implemented desktop page side by side with its exact Stitch screenshot at a consistent viewport.
- [ ] Compare section order, header/footer, hero proportions, content widths, surface alternation, typography hierarchy, spacing, borders, radii, imagery crops, cards, and CTAs.
- [ ] Cross-check generated HTML for responsive behavior and component structure without copying unapproved copy or Tailwind utilities.
- [ ] Verify mobile and tablet as responsive inferences against the approved design system, since dedicated mobile screenshots are unavailable.
- [ ] Confirm the Contact form extension looks native to the supplied Contact screen and does not disturb its two-column balance.
- [ ] Confirm legal and Not Found inferred pages use the shared system without introducing new visual concepts.
- [ ] Document any unavoidable fidelity deviations and their reason in `04-build-summary.md`.
- [ ] Run the required global senior frontend QA skill after implementation and include visual-fidelity findings against all files in `documents/stitch/` before writing `04-build-summary.md`.
