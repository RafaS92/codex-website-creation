# Codex Technical Implementation Handoff

## 1. Project Summary

Build a three-page responsive portfolio and inquiry website for Nongnapat Neuman, an in-person holistic healing practitioner in Chiang Dao, Northern Thailand. The implementation must reproduce the approved Google Stitch compositions for Home, Services, and Contact while maintaining a single, consistent content model across desktop and mobile.

**Stitch Fidelity Source Status: SCREEN_LEVEL_READY**

Primary screen-level implementation sources:

| Page | Desktop screenshot | Desktop generated HTML | Mobile screenshot | Mobile generated HTML |
| --- | --- | --- | --- | --- |
| Home | `documents/stitch/home-desktop.png` | `documents/stitch/home-desktop.html` | `documents/stitch/home-mobile.png` | `documents/stitch/home-mobile.html` |
| Services | `documents/stitch/services-desktop.png` | `documents/stitch/services-desktop.html` | `documents/stitch/services-mobile.png` | `documents/stitch/services-mobile.html` |
| Contact | `documents/stitch/contact-desktop.png` | `documents/stitch/contact-desktop.html` | `documents/stitch/contact-mobile.png` | `documents/stitch/contact-mobile.html` |

Supporting sources:

- `documents/02-design.md`: approved design decisions and highest-priority design instructions
- `documents/stitch/design-system.md`: exact colors, typography, spacing, and component rules
- `documents/stitch/screen-manifest.md`: Stitch screen IDs, dimensions, and source precedence
- `documents/stitch/reference-2.png`, `reference-3.png`, and `reference-pla1.png`: visual context only
- `documents/stitch/orphan-mobile-screen.html`: noncanonical concept; do not implement unless a later approved revision promotes it

Source precedence is: manually edited approved documents, per-screen screenshots, paired generated HTML, design-system export, then contextual reference images. Screenshots control composition; HTML supplies structure and implementation details. The approved design’s Section 11 resolutions are binding:

- Use the desktop Services information architecture across all viewports; use the mobile screen for stacked visual treatment, not its unverified alternate modality content.
- Keep a consistent Home content model across viewports; mobile may recompose but must not silently omit essential content.
- Preserve the dark-indigo mobile Contact treatment while keeping the same verified content and fields as desktop.
- Implement only the three screen-backed pages.
- Do not publish Stitch-generated claims, testimonials, durations, response times, location specifics, or contact details unless verified in an approved source.

## 2. Technical Stack

- React with functional components and hooks
- Vite for development and production bundling
- React Router for client-side routing
- SCSS using Dart Sass
- AOS for restrained scroll-reveal effects
- Native HTML form controls with lightweight React validation; no form library is required
- JavaScript or TypeScript may follow the workspace convention; if no convention exists, use JavaScript with JSX to keep the build small
- Semantic HTML5, CSS custom properties where useful, and component-based architecture

Technical constraints:

- Author all project CSS dimensions in `rem`; use unitless values where technically appropriate, such as line-height and font weight. Zero may remain unitless.
- Do not copy the Stitch Tailwind runtime into production. Translate its layout and tokens into organized SCSS.
- Do not depend on Stitch-hosted preview HTML at runtime.
- Download and optimize approved image assets locally before production. Preserve source attribution/rights notes until client-owned images are confirmed.
- Use responsive image markup, explicit intrinsic dimensions, and lazy loading below the fold.
- Keep content separate from component markup so unverified details can be replaced safely.

Required packages:

- `react`
- `react-dom`
- `react-router-dom`
- `sass`
- `aos`

## 3. Project Folder Structure

```text
website-projects/Pla Project/
├── documents/
│   ├── stitch/
│   └── 00–04 workflow documents
├── public/
│   └── favicon and static metadata assets
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── home/
│   │   │   ├── services/
│   │   │   ├── contact/
│   │   │   └── shared/
│   │   └── icons/
│   ├── components/
│   │   ├── Accordion/
│   │   ├── Button/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── MobileNav/
│   │   ├── SectionContainer/
│   │   ├── ServiceCard/
│   │   ├── ServiceRow/
│   │   └── Testimonial/
│   ├── content/
│   │   ├── contact.js
│   │   ├── home.js
│   │   ├── navigation.js
│   │   ├── services.js
│   │   └── site.js
│   ├── hooks/
│   │   ├── useBodyScrollLock.js
│   │   └── useReducedMotion.js
│   ├── layouts/
│   │   └── SiteLayout.jsx
│   ├── pages/
│   │   ├── ContactPage/
│   │   ├── HomePage/
│   │   ├── NotFoundPage/
│   │   └── ServicesPage/
│   ├── sections/
│   │   ├── contact/
│   │   ├── home/
│   │   └── services/
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
│   │   ├── contactLinks.js
│   │   └── validation.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Organization rules:

- `assets/` contains local production media, never workflow screenshots.
- `components/` contains reusable UI with colocated JSX and SCSS, for example `Button/Button.jsx` and `Button/Button.scss`.
- `content/` stores editable verified copy, links, image metadata, and structured page data.
- `sections/` contains page-specific compositions; each section owns its SCSS.
- `pages/` composes sections and provides page metadata, without duplicating reusable UI.
- `layouts/` owns shared Header, main landmark, Footer, and route-level scroll behavior.
- `styles/` owns tokens, reset, typography, global rules, and small utilities only.
- `documents/` remains workflow source material and must not be imported into the production bundle.

## 4. Routing / Page Structure

Use `BrowserRouter` with these routes:

| Route | Page file | Purpose | Stitch source |
| --- | --- | --- | --- |
| `/` | `pages/HomePage/HomePage.jsx` | Trust, approach, service pathways, and primary inquiry | Home desktop/mobile pair |
| `/services` | `pages/ServicesPage/ServicesPage.jsx` | Private sessions, retreats/workshops, and Reiki training | Services desktop/mobile pair |
| `/contact` | `pages/ContactPage/ContactPage.jsx` | WhatsApp/email entry points, inquiry form, location context, and FAQ | Contact desktop/mobile pair |
| `*` | `pages/NotFoundPage/NotFoundPage.jsx` | Minimal branded recovery with links to Home and Contact | Inference; no Stitch screen exists |

Canonical shared navigation:

- **Home** → `/`
- **Approach** → `/#approach`
- **Services** → `/services`
- **Inquire** → `/contact`

Do not create separate Philosophy, Story, About, Retreat, Reiki Training, or legal routes in this build because they lack approved screen-level layouts. Home’s approach section can carry the philosophy content; the Services page contains the three approved offering pathways.

Routing behavior:

- `SiteLayout` renders Header, `<main>`, and Footer once around routed pages.
- A `ScrollToTop` route effect must call `window.scrollTo({ top: 0, behavior: 'auto' })` whenever the pathname changes.
- Hash navigation from another route must first navigate to `/`, then scroll the target section into view after render while respecting the sticky header offset.
- Use `NavLink` for route-level active states. Treat `/#approach` as an in-page link with its own current-section behavior only if implemented reliably; otherwise highlight Home.
- Close the mobile drawer and restore focus to its trigger on every navigation.
- Provide a skip link targeting the page’s main landmark.
- Each page sets a unique document title and description.

## 5. Component Breakdown

### `Button`

- **Purpose:** Shared link/button visual with primary, secondary, and text variants.
- **Props:** `as`, `to`, `href`, `variant`, `size`, `fullWidth`, `children`, `icon`, `type`, `disabled`, and standard accessible attributes.
- **Used by:** Header, heroes, service cards/rows, forms, contact actions, Not Found.
- **SCSS:** `Button.scss`; required.
- **Rule:** Render a link for navigation and a button for actions. Never simulate either with a generic element.

### `SectionContainer`

- **Purpose:** Shared centered width, horizontal gutters, surface option, and vertical spacing.
- **Props:** `as`, `id`, `size`, `surface`, `className`, `children`, `ariaLabelledby`.
- **Used by:** All page sections and Footer content.
- **SCSS:** `SectionContainer.scss`; required.

### `Header`

- **Purpose:** Sticky desktop/mobile site header with wordmark, navigation, and inquiry CTA.
- **Props:** `navigation`, `inquiryHref`.
- **Used by:** `SiteLayout` only.
- **SCSS:** `Header.scss`; required.
- **Behavior:** Switch between desktop navigation and `MobileNav`; maintain translucent bone-linen surface, blur, thin rule, and correct active state.

### `MobileNav`

- **Purpose:** Accessible right-side navigation drawer matching Stitch’s compact mobile header intent.
- **Props:** `open`, `onClose`, `items`, `labelledBy`.
- **Used by:** Header.
- **SCSS:** `MobileNav.scss`; required.
- **Behavior:** Trap focus while open, close on Escape/overlay/link activation, lock background scroll, restore trigger focus, and hide inert background content from assistive technology where supported.

### `Footer`

- **Purpose:** Shared wordmark, navigation, inquiry methods, and approved metadata/legal placeholders.
- **Props:** `navigation`, `contact`, `legalLinks`.
- **Used by:** `SiteLayout` only.
- **SCSS:** `Footer.scss`; required.
- **Rule:** Do not render fake contact or social URLs. Omit unavailable links or route users to the verified contact form with accurate labeling.

### `ServiceCard`

- **Purpose:** Home image-led pathway card and stacked mobile service presentation.
- **Props:** `title`, `description`, `image`, `imageAlt`, `to`, `linkLabel`, `eyebrow`.
- **Used by:** Home Service Pathways; optionally Services mobile composition.
- **SCSS:** `ServiceCard.scss`; required.

### `ServiceRow`

- **Purpose:** Alternating image/text service layout used by desktop Services and stacked responsively on smaller screens.
- **Props:** `title`, `description`, `image`, `imageAlt`, `to`, `linkLabel`, `reverse`, `id`.
- **Used by:** Services page.
- **SCSS:** `ServiceRow.scss`; required.

### `Testimonial`

- **Purpose:** Large italic editorial quote treatment.
- **Props:** `quote`, `attribution`, `verified`.
- **Used by:** Home and Services only when verified content exists.
- **SCSS:** `Testimonial.scss`; required.
- **Rule:** If no verified testimonial exists, omit the quote component and preserve the intended whitespace with a non-testimonial trust statement sourced from approved discovery copy.

### `ContactForm`

- **Purpose:** Accessible inquiry capture with client-side validation and submit states.
- **Props:** `fields`, `onSubmit`, `submitLabel`, `serviceOptions`, `status`.
- **Used by:** Home compact inquiry panel and Contact full form; allow a `compact` variant if both remain in final composition.
- **SCSS:** `ContactForm.scss`; required.
- **Behavior:** Name, email, area of interest, and message; inline errors plus summary; success/failure status in an `aria-live` region. Connect to a real endpoint only when configured.

### `Accordion`

- **Purpose:** Contact-page Gentle Preparations FAQ.
- **Props:** `items`, `allowMultiple`, `defaultOpenId`.
- **Used by:** Contact page.
- **SCSS:** `Accordion.scss`; required.
- **Behavior:** Native buttons, unique panel IDs, `aria-expanded`, `aria-controls`, keyboard support, and reduced-motion-safe expansion.

### `ContactAction`

- **Purpose:** Centralize WhatsApp/email/form fallback behavior and prevent fake links.
- **Props:** `channel`, `href`, `fallbackTo`, `children`, `variant`.
- **Used by:** Header, Home hero, Contact hero, Footer.
- **SCSS:** Reuse `Button.scss`; no separate stylesheet.
- **Behavior:** If a verified channel URL is unavailable, render an accurately labeled link to `/contact#inquiry-form`, not a broken or fabricated external link.

### `ScrollToTop`

- **Purpose:** Reset the viewport when route pathname changes.
- **Props:** none.
- **Used by:** App/router shell.
- **SCSS:** none.

### `ResponsiveImage`

- **Purpose:** Standardize local responsive images, intrinsic dimensions, loading priority, and object position.
- **Props:** `src`, `srcSet`, `sizes`, `alt`, `width`, `height`, `loading`, `fetchPriority`, `objectPosition`, `className`.
- **Used by:** Every photographic section.
- **SCSS:** Small shared asset/image styles may live in `_global.scss`; no dedicated file unless cropping behavior becomes substantial.

## 6. Section Breakdown

### Home page

References: `home-desktop.png`, `home-desktop.html`, `home-mobile.png`, and `home-mobile.html`.

1. **HomeHero**
   - Compose practitioner portrait, `20+ years` proof detail, headline “Return to your center. Breathe into stillness.”, short approved positioning copy, and inquiry/WhatsApp action.
   - Desktop follows the asymmetric portrait-left/copy-right screenshot.
   - Mobile follows the portrait-first stack and full-width action.
   - Components: `SectionContainer`, `ResponsiveImage`, `ContactAction`.

2. **IntegrativeApproach** with `id="approach"`
   - Preserve the centered section introduction and desktop grid for Holistic Integration, Somatic Release, Energetic Flow, and the indigo `20+ Years` proof block.
   - On mobile, recompose as the Grounded Healing introduction followed by stacked pathway cards, but keep all three approved approach concepts available.
   - Components: `SectionContainer`; page-specific approach items.
   - Direct on desktop; mobile content completion is an approved inference from the design discrepancy resolution.

3. **ServicePathways**
   - Three approved categories: Private Sessions, Retreats & Workshops/Immersive Retreats, and Reiki & Energy Work/Training.
   - Desktop follows the three-column image card layout; mobile stacks cards with the screenshot’s image/text rhythm.
   - Each link routes to the relevant Services section anchor.
   - Components: `SectionContainer`, `ServiceCard`.

4. **HomeTrustStatement**
   - Use the mobile screenshot’s centered editorial rhythm, but do not publish the generated testimonial as a customer endorsement unless verified.
   - Default safe content: an approved practice statement based on 20+ years of experience, calm professionalism, and nature-connected care.
   - Components: `Testimonial` only if verified; otherwise page-specific trust statement.
   - Inference required because the approved source does not provide a verified testimonial.

5. **HomeInquiry**
   - Preserve the desktop “Begin Your Practice” centered form panel and warm tonal background.
   - On mobile, a compact inquiry action may replace the duplicate full form if the Contact form remains the primary conversion surface; this is an inference allowed by the mobile screen, which omits the desktop form.
   - Components: `SectionContainer`, `ContactForm` or `ContactAction`.

### Services page

References: `services-desktop.png`, `services-desktop.html`, `services-mobile.png`, and `services-mobile.html`.

1. **ServicesHero**
   - Full-width treatment image with warm translucent overlay and centered “Pathways to Balance” copy on desktop.
   - Mobile may use the portrait-led stacked introduction from the mobile screenshot while retaining the same approved page title and introductory meaning.
   - Components: `ResponsiveImage`, `SectionContainer`.

2. **ServiceOfferings**
   - Canonical items: Private Healing Sessions (`id="private-sessions"`), Retreats & Workshops (`id="retreats-workshops"`), and Reiki Training (`id="reiki-training"`).
   - Desktop alternates image/text rows exactly as the screenshot.
   - Mobile stacks the same three canonical items using the card rhythm, number markers, generous padding, and full-width actions seen in the mobile screenshot.
   - Do not use the unverified four alternate mobile modalities or durations.
   - Components: `SectionContainer`, `ServiceRow` and/or `ServiceCard`.

3. **ServicesTrustStatement**
   - Reproduce the large centered italic composition and open cream field.
   - Use only verified copy; otherwise use a clearly authored practice belief, not quotation marks or invented attribution.
   - Components: `Testimonial` when verified or page-specific trust statement.

### Contact page

References: `contact-desktop.png`, `contact-desktop.html`, `contact-mobile.png`, and `contact-mobile.html`.

1. **ContactHero**
   - Desktop: standing portrait left; “Begin a Conversation” content and WhatsApp/email actions right.
   - Mobile: portrait followed by the approved dark-indigo immersive panel and full-width primary action.
   - Use verified links from `content/contact.js`; use an inquiry-form fallback when unavailable.
   - Components: `SectionContainer`, `ResponsiveImage`, `ContactAction`.

2. **InquiryAndLocation**
   - Desktop: inquiry form left; sanctuary heading, landscape image, and location card right.
   - Mobile: white form card over/within the dark tonal section, followed by location content if verified.
   - Keep name, email, area of interest, and message consistent across viewports.
   - Exact street/location copy is unverified; use only “Chiang Dao, Northern Thailand” until approved.
   - Components: `ContactForm`, `ResponsiveImage`, `SectionContainer`.

3. **GentlePreparations**
   - Desktop: centered heading and three low-profile accordion rows.
   - Mobile: stacked warm/light FAQ cards matching the mobile screen’s rhythm.
   - FAQ answers require verified content. If answers remain unavailable, omit the section rather than publishing Stitch-generated operational promises.
   - Components: `Accordion`, `SectionContainer`.

4. **SharedFooter**
   - Desktop three-column structure; mobile stacked structure.
   - Components: `Footer` through `SiteLayout`.

### Not Found page

- Minimal inferred route with shared Header/Footer, a clear message, and buttons to Home and Contact.
- No AOS and no invented imagery.
- This is a technical necessity and intentionally not a new marketing-page design.

## 7. SCSS Architecture

### Global entry

`styles/main.scss` imports in this order:

1. abstracts
2. reset
3. font declarations
4. typography
5. global rules
6. utilities
7. AOS CSS, either imported in `main.jsx` or once in `main.scss`

Component and section SCSS should be imported by their owning JSX modules rather than aggregated into a single oversized stylesheet.

### Tokens

Define semantic variables in `_variables.scss` from `documents/stitch/design-system.md`:

```scss
$color-primary: #18253e;
$color-primary-container: #2e3b55;
$color-secondary: #506354;
$color-background: #fcf9f5;
$color-surface-low: #f6f3ef;
$color-surface: #f0ede9;
$color-text: #1c1c1a;
$color-text-muted: #45474d;
$color-outline: #75777e;
$color-outline-soft: #c5c6ce;
$color-error: #ba1a1a;

$font-heading: 'Libre Caslon Text', Georgia, serif;
$font-body: 'Manrope', Arial, sans-serif;

$space-1: 0.5rem;
$space-2: 1rem;
$space-3: 1.5rem;
$space-4: 2rem;
$space-6: 3rem;
$space-8: 4rem;
$space-12: 6rem;
$space-15: 7.5rem;

$container-max: 71.25rem;
$gutter-mobile: 1.5rem;
$gutter-desktop: 2rem;
$radius-sm: 0.25rem;
$radius-md: 0.5rem;
$header-height-mobile: 4rem;
$header-height-desktop: 5rem;
```

Use CSS custom properties for tokens that must change by theme or component context, while retaining SCSS variables for compile-time layout logic.

### Breakpoints and mixins

Use mobile-first breakpoints expressed in rem:

```scss
$bp-tablet: 48rem;
$bp-desktop: 64rem;
$bp-wide: 80rem;
```

Provide `respond-above`, `focus-ring`, `content-container`, `visually-hidden`, and `reduced-motion` mixins. Do not scatter raw media query values throughout component files.

### Base rules

- Reset box sizing, margins, button/input font inheritance, and media display.
- Set `html { scroll-behavior: smooth; }` only when reduced motion is not requested.
- Use a minimum body width appropriate to supported devices without forcing horizontal overflow.
- Establish bone-linen body background, warm near-black text, Manrope body font, and antialiasing.
- Maintain semantic heading scale using `clamp()` with rem endpoints.
- Define visible global keyboard focus styles.
- Provide `.sr-only` and `.skip-link` utilities.

### Component styling rules

- Use BEM-like class naming or CSS Modules consistently; do not mix conventions.
- Keep selector nesting shallow, ideally no more than two levels.
- Avoid `!important` except to override third-party AOS behavior for reduced motion.
- Do not reproduce Tailwind utility strings in JSX.
- Use grid/flex gaps rather than child margins for repeated layouts.
- All lengths authored in project SCSS must use rem, including borders (`0.0625rem`) and media-query thresholds.
- Preserve the screenshot’s whitespace; do not replace desktop `7.5rem` section gaps with generic compact spacing.

## 8. Responsive Implementation Rules

Use mobile-first styles and validate continuously at `24.375rem` (390px), `48rem` (768px), `64rem` (1024px), and `80rem` (1280px), plus narrow-device checks near `20rem`.

### Mobile: below `48rem`

- Single-column layout with `1.5rem` horizontal gutters.
- Use the saved mobile screenshots as composition anchors.
- Header condenses to wordmark, menu trigger, and compact inquiry action where space permits.
- Mobile drawer occupies approximately `16rem` or up to the viewport minus `3rem`.
- Display headings target `2rem / 2.5rem`; body remains at least `1rem / 1.625rem`.
- Major section spacing targets `4rem`.
- Stack all action groups; important tap targets are at least `2.75rem` high with sufficient separation.
- Images are full width within their section, with crop position adjusted per saved visual.
- Preserve the dark Contact treatment and white form/FAQ cards.
- Never swap in viewport-specific content; only composition changes.

### Tablet: `48rem` through `63.9375rem`

- Preserve mobile content order while allowing two-column layouts where the content remains readable.
- Use fluid gutters between `1.5rem` and `2rem`.
- Keep mobile navigation until the full label set fits without collision.
- Service cards may form a two-column grid, with the third card spanning or centered.
- Contact form and location remain stacked unless each column retains a comfortable readable width.
- Scale section spacing between `4rem` and `6rem`.

### Desktop: `64rem` and above

- Use shared maximum content width of `71.25rem` and `2rem` gutters.
- Render full navigation and sticky translucent header.
- Reproduce screenshot-specific grids: asymmetric Home hero, three-part approach/pathway grids, alternating Services rows, and two-column Contact sections.
- Use desktop heading endpoints up to `4rem / 4.5rem` for display and `3rem / 3.5rem` for large headings.
- Major section spacing reaches `7.5rem`.
- Maintain image aspect ratios and avoid stretching narrow served previews.

### Fluid and media behavior

- Use `clamp()` for typography, gutters, and section spacing between anchors.
- Prevent text lines from becoming too wide; body copy generally stays within approximately `40rem`.
- Supply `srcset`/`sizes` or Vite-generated variants for raster images.
- Hero images load eagerly with `fetchpriority="high"`; below-fold images use `loading="lazy"`.
- Apply explicit width/height attributes and `object-fit: cover` to prevent cumulative layout shift.
- Test landscape phones, zoom to 200%, and long translated-like strings even if localization is not in scope.

## 9. Animation Implementation Rules

Initialize AOS once in `main.jsx` or `App.jsx` after route mount:

- default duration: approximately `0.6s`
- default easing: `ease-out`
- `once: true`
- small offset equivalent to approximately `1.5rem`
- disable or neutralize AOS when `prefers-reduced-motion: reduce` matches
- refresh AOS after route changes only if required by rendered section height

Approved uses:

- One `fade-up` on major section heading/content groups.
- Alternating `fade-right`/`fade-left` on Services image/text rows at desktop; use `fade-up` on mobile.
- Gentle `fade-up` for the Home service-card group with no more than `0.08s` incremental stagger.
- One quiet reveal for the Contact form/location pair.

Do not animate:

- Header, footer, form fields, validation messages, FAQ content during reading, primary hero copy above the fold, or every individual paragraph.
- Layout-affecting properties such as width, height, margin, or top/left.
- Essential content in a way that leaves it hidden if JavaScript fails.

Non-AOS microinteractions:

- Button/link color and opacity: `0.2–0.3s`.
- Pressed button scale: no smaller than `0.98`.
- Image hover zoom: approximately `0.7s`, restrained to a small scale increase and clipped by its container.
- Drawer transition: approximately `0.3s`.
- FAQ expansion: short and reduced-motion-safe; prefer simple visibility/state changes over fragile height animation.

## 10. Accessibility Requirements

- Target WCAG 2.2 AA for color contrast, keyboard access, focus visibility, forms, status messaging, and touch targets.
- Use one `<h1>` per page and preserve logical heading order across reusable sections.
- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<form>`, `<address>` where appropriate, and `<footer>` landmarks.
- Every section with meaningful content has an accessible heading; use `aria-labelledby` when the visible heading labels the region.
- Provide descriptive alt text for meaningful practitioner, service, and location photography. Use empty alt text for decorative textures.
- Do not reuse generated alt text without checking that it describes the final selected image.
- Header navigation and drawer must be fully keyboard operable, announce state, trap focus while open, close on Escape, and restore focus.
- Include a visible-on-focus skip link.
- Buttons perform actions; links navigate. External contact links clearly indicate their destination in accessible text where context is insufficient.
- Use persistent form labels, correct `autocomplete` tokens, appropriate input types, and instructions before validation occurs.
- Associate each error with its field using `aria-describedby`; focus the error summary on failed submit; expose success/failure with an `aria-live` region.
- Do not rely on color alone for errors, active navigation, or selected states.
- FAQ triggers are buttons with `aria-expanded` and `aria-controls`; hidden panels are removed from the tab order.
- Maintain visible focus against both bone-linen and dark-indigo surfaces.
- Respect `prefers-reduced-motion` for AOS, smooth scrolling, hover zoom, drawer, and accordion transitions.
- Verify zoom/reflow at 200% and text-only enlargement without clipping or horizontal scrolling.
- Ensure target size is at least `2.75rem` for primary mobile controls where practical and never below WCAG minimum requirements.
- Use a real page language declaration and meaningful titles.

## 11. Implementation Checklist

### Source and content

- [ ] Re-read the latest approved `00-questionnaire.md`, `01-client-discovery-summary.md`, `02-design.md`, and this handoff immediately before building.
- [ ] Confirm `02-design.md` still states `Stitch Fidelity Source Status: SCREEN_LEVEL_READY` or `USER_EXPORT_READY`.
- [ ] Treat manually edited workflow documents as the source of truth.
- [ ] Implement only Home, Services, Contact, and a minimal technical Not Found route.
- [ ] Use the canonical three-offering Services model across all viewports.
- [ ] Store all content and links in `src/content/`; do not scatter copy through UI components.
- [ ] Flag or omit unverified testimonials, service durations, operational promises, credentials, detailed location data, WhatsApp number, email, and form endpoint.
- [ ] Confirm rights for every production image and replace placeholders when client-owned assets become available.

### Architecture and behavior

- [ ] Create the Vite React application and folder structure described above.
- [ ] Connect React Router routes and active navigation.
- [ ] Scroll to the top on every pathname change.
- [ ] Support Home approach hash navigation with sticky-header offset.
- [ ] Close mobile navigation on route change and restore trigger focus.
- [ ] Build reusable Button, Header, MobileNav, Footer, SectionContainer, ServiceCard/Row, ContactForm, Accordion, and image patterns.
- [ ] Ensure WhatsApp/email controls use verified URLs or an accurately labeled inquiry-form fallback.
- [ ] Connect the form to a real endpoint only when one is supplied; otherwise provide an honest non-network demo state and document it.
- [ ] Implement route-level titles and descriptions.

### SCSS and responsive behavior

- [ ] Implement semantic design tokens from `documents/stitch/design-system.md`.
- [ ] Use SCSS and rem units for all authored lengths.
- [ ] Keep global, component, section, and page styles separated.
- [ ] Build mobile-first and test at 390px, 768px, 1024px, and 1280px anchors, plus a 320px narrow check.
- [ ] Match Home, Services, and Contact section order, imagery ratios, whitespace, typography, color fields, and responsive composition.
- [ ] Confirm no horizontal overflow or clipped text at any supported width.
- [ ] Optimize responsive images and prevent layout shift.

### Animation and accessibility

- [ ] Initialize AOS once with restrained defaults and refresh safely after route changes if needed.
- [ ] Limit animation to major content groups and alternating service rows.
- [ ] Disable nonessential animation when reduced motion is requested.
- [ ] Verify semantic landmarks, single page `<h1>`, logical heading order, image alt text, and correct controls.
- [ ] Test full keyboard navigation, drawer focus behavior, FAQ operation, form errors, and focus visibility.
- [ ] Check WCAG 2.2 AA contrast on light and dark surfaces.
- [ ] Test 200% zoom/reflow and mobile target sizes.

### Build and visual fidelity QA

- [ ] Run linting if configured and resolve errors.
- [ ] Run the production build successfully with no console/build errors.
- [ ] Remove unused assets, components, imports, dependencies, and generated placeholder files.
- [ ] Run the global `senior-frontend-qa` skill after implementation and before writing `04-build-summary.md`.
- [ ] Compare `/` at desktop and mobile anchors against `home-desktop.png` and `home-mobile.png`.
- [ ] Compare `/services` against `services-desktop.png` and `services-mobile.png`, accounting only for the approved canonical content resolution.
- [ ] Compare `/contact` against `contact-desktop.png` and `contact-mobile.png`, including the deliberate mobile dark treatment.
- [ ] Verify header/footer consistency, hero crops, section order, container widths, major gaps, typography scale, colors, borders, and CTA hierarchy against screenshots.
- [ ] Use paired Stitch HTML files to diagnose structural/spacing mismatches rather than approximating from design tokens alone.
- [ ] Record tested viewports, functional results, accessibility findings, performance observations, visual-fidelity differences, unresolved content dependencies, and final build command in `documents/04-build-summary.md`.

Do not begin implementation until this handoff is explicitly approved.
