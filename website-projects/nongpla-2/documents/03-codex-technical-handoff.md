# Codex Technical Implementation Handoff

## 1. Project Summary

Build a calm, premium, multi-page website for **Nongnapat Neuman**, an in-person holistic healing practitioner offering private sessions, retreats/workshops, Reiki training, energy work, somatic therapies, sound healing, mindfulness, and nature-based healing.

The implementation should feel like a grounded sanctuary in nature: spacious, readable, mature, and trustworthy. The site should prioritize gentle inquiry over aggressive conversion, with clear paths to private sessions, retreats/workshops, Reiki training, FAQ, and contact. The project will have 2 languages english and thai.

## 2. Technical Stack

Use the workflow default stack:

- React
- Vite
- SCSS
- AOS (Animate On Scroll)
- React Router
- Component-based architecture
- rem units only
- react-i18n

Implementation rules:

- Use rem units for all sizing, spacing, typography, radius, and breakpoints.
- Keep the codebase simple, maintainable, and scalable.
- Do not overbuild CMS behavior unless explicitly requested later.
- Use content/data objects for repeated sections where practical.
- Use AOS sparingly for subtle scroll reveals.

## 3. Project Folder Structure

Recommended structure:

```text
website-projects/nongpla-2/
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
      Navbar/
      SectionHeader/
      SEO/
    data/
      faqData.js
      navigationData.js
      servicesData.js
      siteData.js
    layouts/
      SiteLayout.jsx
    pages/
      Home.jsx
      About.jsx
      Services.jsx
      RetreatsWorkshops.jsx
      ReikiTraining.jsx
      FAQ.jsx
      Contact.jsx
      NotFound.jsx
    sections/
      AboutPreview.jsx
      ContactCTA.jsx
      Hero.jsx
      ModalityGrid.jsx
      NaturalSetting.jsx
      PhilosophyBlock.jsx
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
```

Folder purposes:

- `assets/`: local images, icons, and future client media.
- `components/`: reusable UI components that are used across pages.
- `data/`: structured content arrays and shared site metadata.
- `layouts/`: site-level layout wrappers such as navigation/footer shell.
- `pages/`: route-level page components.
- `sections/`: larger page sections composed from smaller components.
- `styles/`: global SCSS architecture, variables, mixins, and organized partials.

## 4. Routing / Page Structure

Use React Router with these routes:

| Route | Page File | Purpose |
| --- | --- | --- |
| `/` | `pages/Home.jsx` | Main entry point, overview, trust, service paths, inquiry CTA |
| `/about` | `pages/About.jsx` | Practitioner story, philosophy, experience, values |
| `/services` | `pages/Services.jsx` | Private sessions and healing modalities |
| `/retreats-workshops` | `pages/RetreatsWorkshops.jsx` | Retreats, workshops, in-person immersive experiences |
| `/reiki-training` | `pages/ReikiTraining.jsx` | Reiki training overview, student fit, inquiry path |
| `/faq` | `pages/FAQ.jsx` | Practical and emotional reassurance through FAQ groups |
| `/contact` | `pages/Contact.jsx` | WhatsApp, email, form, service interest selector |
| `*` | `pages/NotFound.jsx` | Simple fallback with navigation back home/contact |

Routing requirements:

- Use `SiteLayout.jsx` to wrap shared `Navbar`, page content, and `Footer`.
- Ensure nav links have active states where appropriate.
- Scroll to top on route change.
- Keep CTAs linking to `/contact` unless actual WhatsApp/email links are supplied.

## 5. Component Breakdown

### `Button`

- Purpose: Shared link/button styling for primary, secondary, text, and quiet CTA variants.
- Props: `children`, `to`, `href`, `variant`, `type`, `onClick`, `ariaLabel`, `className`.
- Used in: Hero, ContactCTA, navigation CTA, page sections, forms.
- SCSS: yes, component partial.

### `Navbar`

- Purpose: Desktop and mobile navigation with gentle inquiry CTA.
- Props: `navItems`, `cta`.
- Used in: `SiteLayout`.
- SCSS: yes.
- Notes: Mobile menu must be keyboard accessible and use large touch targets.

### `Footer`

- Purpose: Site navigation, contact prompts, location note, and basic brand presence.
- Props: `navItems`, `contact`, `location`.
- Used in: `SiteLayout`.
- SCSS: yes.

### `SectionHeader`

- Purpose: Consistent section labels, headings, and intro text.
- Props: `eyebrow`, `title`, `body`, `align`.
- Used in: Most sections and pages.
- SCSS: yes, or shared section partial.

### `Card`

- Purpose: Flexible repeated content shell for service pathways, modalities, values, and optional testimonials.
- Props: `title`, `body`, `meta`, `link`, `variant`, `children`.
- Used in: service pathways, modality grids, value lists.
- SCSS: yes.

### `FAQAccordion`

- Purpose: Accessible accordion for grouped FAQ content.
- Props: `items`, `allowMultiple`, `groupTitle`.
- Used in: FAQ page and FAQ preview sections.
- SCSS: yes.
- Notes: Use semantic buttons, `aria-expanded`, and stable IDs.

### `ContactForm`

- Purpose: Simple inquiry form with minimal fields.
- Props: `interests`, `submitLabel`.
- Used in: Contact page.
- SCSS: yes.
- Fields: name, email/contact method, area of interest, message.
- Notes: No backend is specified. Implement front-end validation and a graceful placeholder submit state unless integration details are provided.

### `ContactCTA`

- Purpose: Reusable final CTA band encouraging low-pressure inquiry.
- Props: `title`, `body`, `primaryAction`, `secondaryAction`.
- Used in: Home, About, Services, Retreats/Workshops, Reiki Training, FAQ.
- SCSS: yes, section partial.

### `SEO`

- Purpose: Per-page document title and meta description handling.
- Props: `title`, `description`.
- Used in: Every page.
- SCSS: no.

## 6. Section Breakdown

### Home

Sections:

- `Hero`: full first impression with nature/practitioner imagery, quiet headline, short intro, primary inquiry CTA.
- `PhilosophyBlock`: concise explanation of integrative healing approach.
- `ServicePathways`: three paths for private sessions, retreats/workshops, and Reiki training.
- `NaturalSetting`: place-based section for Chiang Dao / Northern Thailand if confirmed.
- `AboutPreview`: 20+ years of experience, practitioner-led trust, link to About.
- `WhatToExpect`: reassurance-focused preview and FAQ link.
- `ContactCTA`: final gentle inquiry prompt.

Components used:

- `Button`, `SectionHeader`, `Card`, `ContactCTA`.

Data needed:

- Hero headline/copy
- Service pathway descriptions
- Practitioner summary
- Image assets or placeholders
- Contact CTA copy

### About

Sections:

- Intro section with portrait/place-led image.
- Experience statement emphasizing 20+ years.
- Philosophy and integrative approach.
- Values section: safety, presence, grounding, professionalism, nature connection.
- Optional credentials/training block.
- Contact CTA.

Components used:

- `SectionHeader`, `Card`, `Button`, `ContactCTA`.

Data needed:

- Practitioner bio
- Credentials/training if available
- Portrait or natural setting image

### Services

Sections:

- Page intro for private healing sessions.
- `ModalityGrid`: holistic healing, energy work, somatic therapies, sound healing, nature-based healing, mindfulness.
- `WhoThisIsFor`: stress, burnout, emotional overwhelm, nervous system imbalance, reconnection.
- `WhatToExpect`: preparation and session experience.
- FAQ preview linking to `/faq`.
- Contact CTA.

Components used:

- `SectionHeader`, `Card`, `FAQAccordion`, `ContactCTA`.

Data needed:

- Modality descriptions
- Session details if available
- FAQ items related to private sessions

### Retreats & Workshops

Sections:

- Page intro for immersive in-person experiences.
- Experience formats: private, group, nature-based, sound, mindfulness, integrative healing.
- Setting and atmosphere section.
- Who this is for.
- Practical inquiry note if dates/details are not available.
- Contact CTA.

Components used:

- `SectionHeader`, `Card`, `Button`, `ContactCTA`.

Data needed:

- Retreat/workshop descriptions
- Dates or inquiry-only status
- Location details
- Images of setting or workshop atmosphere

### Reiki Training

Sections:

- Page intro to Reiki training with Nongnapat.
- Who training is for.
- Training approach and values.
- Program structure/levels if available.
- Student readiness section.
- Reiki-specific FAQ preview.
- Contact CTA.

Components used:

- `SectionHeader`, `Card`, `FAQAccordion`, `ContactCTA`.

Data needed:

- Reiki training descriptions
- Levels/structure if available
- Student requirements if available

### FAQ

Sections:

- Page intro.
- FAQ groups for private sessions, retreats/workshops, Reiki training, location/travel, booking/contact, preparation.
- Contact CTA.

Components used:

- `FAQAccordion`, `SectionHeader`, `ContactCTA`.

Data needed:

- FAQ questions and answers. Use clear placeholder answers only where source content is missing.

### Contact

Sections:

- Reassurance intro.
- Direct contact options: WhatsApp, email.
- `ContactForm` with interest selector.
- Location note.
- Response expectation if known.

Components used:

- `ContactForm`, `Button`, `SectionHeader`.

Data needed:

- WhatsApp link
- Email address
- Location details
- Form handling decision

## 7. SCSS Architecture

Use `src/styles/main.scss` as the central import file.

Recommended imports:

```scss
@use 'abstracts/variables';
@use 'abstracts/breakpoints';
@use 'abstracts/mixins';
@use 'base/reset';
@use 'base/typography';
@use 'base/global';
```

### Variables

Define tokens in `_variables.scss`:

- Color palette: warm off-white, rice-paper, deep forest/moss, muted clay/teak, pale sage/mist, dark ink brown/charcoal-green.
- Font families: display serif and body/UI family.
- Type scale: mobile and desktop heading/body sizes.
- Spacing scale: consistent rem-based spacing steps.
- Border radius: restrained, no large pill-heavy styling unless used for small CTAs.
- Shadows: very soft, minimal, used sparingly.
- Layout widths: content max width, prose max width, wide section max width.

### Breakpoints

Define mobile-first breakpoints in rem:

- small: `30rem`
- medium: `48rem`
- large: `64rem`
- xlarge: `80rem`

### Mixins

Useful mixins:

- `respond($breakpoint)`
- `container`
- `prose`
- `focus-ring`
- `visually-hidden`
- `section-padding`

### Base Styles

`_reset.scss`:

- Modern reset
- `box-sizing: border-box`
- Smooth media defaults
- Form inheritance

`_typography.scss`:

- Heading scale
- Body text rules
- Link styles
- Paragraph max width and line height

`_global.scss`:

- Body background/text color
- Page shell
- Image behavior
- Selection color
- Reduced-motion preferences

### Component and Section Styles

Use one SCSS partial per component/section when styling is non-trivial. Keep naming predictable:

- `_button.scss`
- `_navbar.scss`
- `_footer.scss`
- `_faq-accordion.scss`
- `_contact-form.scss`
- `_hero.scss`
- `_service-pathways.scss`
- `_contact-cta.scss`

Avoid:

- One giant stylesheet
- Inline styles for layout
- Pixel units
- Deeply nested selectors
- Styling based on fragile DOM chains

## 8. Responsive Implementation Rules

### Mobile

- Build mobile layouts first.
- Use single-column stacking for content sections.
- Keep body text at least `1rem`.
- Use generous line height and readable paragraph widths.
- Mobile menu must be easy to open, close, and navigate by keyboard.
- CTAs must have comfortable touch targets, ideally at least `2.75rem` tall.
- Avoid placing important text over visually busy images.
- Keep hero content legible without relying on large desktop image crops.

### Tablet

- Introduce two-column layouts only when content has enough room.
- Use alternating image/text layouts carefully.
- Keep service pathway cards in one or two columns depending on available width.
- Maintain section spacing without making pages feel sparse.

### Desktop

- Use editorial spacing and restrained asymmetry.
- Allow hero and key image sections to feel immersive.
- Use two-column layouts for practitioner/story and setting sections.
- Use three-column grids only for concise repeated content such as pathways or modalities.
- Keep prose text constrained to comfortable line lengths.

### Images

- Use stable aspect ratios for hero, cards, portraits, and setting imagery.
- Use `object-fit: cover` with intentional focal positions.
- Provide meaningful alt text unless the image is purely decorative.
- Use local placeholder imagery only until client assets are provided.

## 9. Animation Implementation Rules

Use AOS for subtle, consistent scroll animations only.

Recommended AOS defaults:

- Duration: `700` to `900` ms
- Easing: gentle ease-out
- Offset: modest, around `80` to `120`
- Once: `true`

Recommended animation usage:

- Hero supporting elements can have a light initial reveal without AOS.
- Section headers: `fade-up`
- Cards/pathways: `fade-up` with short staggered delays
- Image/text sections: `fade` or `fade-up`
- FAQ and form elements: minimal or no animation

Delay rules:

- Use small delays only within grouped cards, such as `0`, `80`, `160`.
- Do not create long cascading animations.
- Do not animate every paragraph.

Avoid:

- Scroll-jacking
- Fast parallax
- Bouncy effects
- Decorative animated spiritual symbols
- Motion on core form interactions

Accessibility/performance:

- Respect `prefers-reduced-motion`.
- Keep animations transform/opacity-based.
- Ensure content is visible and usable if AOS fails to load.

## 10. Accessibility Requirements

Technical requirements:

- Use semantic HTML landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Use one `h1` per page and maintain correct heading order.
- Use real links for navigation and route changes.
- Use buttons for menu toggles and accordion controls.
- Ensure mobile menu and FAQ accordion are keyboard accessible.
- Provide visible focus states using the shared focus-ring mixin.
- Provide descriptive alt text for meaningful images.
- Keep decorative images hidden from assistive technology where appropriate.
- Ensure color contrast is sufficient for body text, buttons, links, and form states.
- Label all form fields explicitly.
- Include helpful validation messages for required form fields.
- Do not rely on color alone to indicate errors or active states.
- Respect reduced-motion preferences.
- Keep tap targets comfortable on mobile.
- Ensure WhatsApp/email links have clear accessible names.

## 11. Implementation Checklist

- Create Vite React project inside `website-projects/nongpla-2/`.
- Install required dependencies: React Router, Sass, AOS.
- Set up folder structure from this handoff.
- Create shared site data files for navigation, contact, services, and FAQ.
- Create `SiteLayout` with `Navbar`, `Footer`, and route outlet.
- Create all route pages: Home, About, Services, Retreats & Workshops, Reiki Training, FAQ, Contact, NotFound.
- Implement reusable components: Button, SectionHeader, Card, FAQAccordion, ContactForm, ContactCTA, SEO.
- Implement home sections first, then reuse section patterns across pages.
- Add placeholder content only where source content is missing; keep it easy to replace.
- Use local placeholder imagery or gradients/textures only until real assets are provided.
- Set up SCSS architecture with variables, breakpoints, mixins, reset, typography, global styles, components, sections, and pages.
- Use rem units only.
- Initialize AOS once in the app entry/layout and import AOS styles.
- Apply AOS sparingly to section headers, grouped cards, and key image/text sections.
- Add reduced-motion handling.
- Test mobile, tablet, and desktop layouts.
- Test navigation, mobile menu, FAQ accordion, and contact form interactions.
- Check heading order, labels, alt text, keyboard navigation, focus states, and contrast.
- Run production build and fix any errors.
- Remove unused files and unused styles before final delivery.
- After implementation, run the senior frontend QA skill before writing `04-build-summary.md`.
