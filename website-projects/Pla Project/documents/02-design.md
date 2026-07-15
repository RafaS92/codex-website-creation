# Google Stitch Design Document

## 1. Design Source

- Project: **Pla Project**
- Stitch project: **Nongnapat Neuman Holistic Healing**
- Stitch project ID: `2241536418501752615`
- Stitch project type: `TEXT_TO_UI_PRO`
- Design system: **Earthy Grace**, asset `e72b7fc1a1fb457db752ec86f845fb89`, version 1
- Retrieved from Stitch MCP: 2026-07-15
- Approved discovery source: `01-client-discovery-summary.md`
- Screen export manifest: `stitch/screen-manifest.md`
- Design-system export: `stitch/design-system.md`

This document translates the approved Google Stitch project into an implementation-ready design source. The saved screenshots are the visual-fidelity references; the paired HTML exports supply exact structure, responsive classes, copy, image references, and interaction behavior.

## 2. Stitch Fidelity Source Status

**Stitch Fidelity Source Status: SCREEN_LEVEL_READY**

Stitch MCP provides screen-level screenshots and generated HTML for Home, Services, and Contact in both desktop and mobile forms. This is sufficient to reproduce the approved visual direction. All exposed implementation assets have been saved under `documents/stitch/`.

The status confirms source availability, not resolution of every product/content decision. The responsive discrepancies listed in Section 11 require explicit approval or revision of this document.

## 3. Design Concept

The design is a refined, nature-connected editorial experience that balances Nongnapat’s warmth and grounded presence with a quiet five-star level of professionalism. Its primary feeling is an invitation to exhale: restrained composition, abundant whitespace, warm neutral surfaces, deep indigo anchors, and large literary headlines.

The interface avoids typical commercial wellness styling. It uses clean grids, modest rectangular controls, natural photography, and subtle tonal layers rather than decorative gradients, glossy cards, or heavy shadows. The practitioner and physical setting remain central, supported by clear pathways toward services and inquiry.

## 4. Approved Screen Set

### Home — Desktop

Primary source files: `stitch/home-desktop.png` and `stitch/home-desktop.html`.

Composition and sequence:

1. Slim sticky header with wordmark, compact uppercase navigation, and a dark indigo inquiry button.
2. Asymmetric hero with a tall portrait of Nongnapat on the left and the headline “Return to your center. Breathe into stillness.” on the right.
3. Integrative Approach section with centered introduction and a quiet three-column content system for Holistic Integration, Somatic Release, and Energetic Flow.
4. A deep-indigo `20+ Years` proof block embedded in the approach grid.
5. Service Pathways section with three image-led columns: Private Sessions, Immersive Retreats, and Reiki & Energy Work.
6. Centered inquiry-form panel titled “Begin Your Practice” on a warm tonal background.
7. Restrained three-column footer.

The desktop homepage uses a calm, magazine-like composition with strong vertical spacing and clear contrast between cream, pale warm gray, and indigo sections.

### Home — Mobile

Primary source files: `stitch/home-mobile.png` and `stitch/home-mobile.html`.

Composition and sequence:

1. Compact sticky header with two-line name treatment, menu icon, and dark inquiry control.
2. Portrait-led hero with a small `20+ years` image badge, the desktop headline, and a full-width WhatsApp action.
3. “Grounded Healing” editorial text block.
4. “Guided Pathways” stacked cards for Somatic Release and Energy Attunement.
5. A small nature image followed by a large centered testimonial quote.
6. Stacked footer content.

Mobile should remain spacious and readable, with a `24px` page margin, large serif headings, full-width tap targets, and no horizontal overflow.

### Services — Desktop

Primary source files: `stitch/services-desktop.png` and `stitch/services-desktop.html`.

Composition and sequence:

1. Sticky header consistent with Home.
2. Full-width treatment photograph hero with translucent warm overlay and centered copy titled “Pathways to Balance.”
3. Three alternating editorial service rows with imagery and text: Private Healing Sessions, Retreats & Workshops, and Reiki Training.
4. Each row uses a quiet text link or a compact indigo action.
5. Large centered italic testimonial on an open cream field.
6. Shared restrained footer.

### Services — Mobile

Primary source files: `stitch/services-mobile.png` and `stitch/services-mobile.html`.

The Stitch mobile screen is a distinct service concept rather than a direct reflow of the desktop screen. It presents:

1. Portrait-led introduction headed “Healing Modalities.”
2. Four stacked service cards: Reiki Energy Balancing, Holistic Massage Therapy, Guided Meditation & Breathwork, and Integrative Healing Journey.
3. Each card includes a number marker, body copy, duration, and inquiry action.
4. A centered testimonial panel and shared footer.

This content discrepancy is recorded for approval in Section 11.

### Contact — Desktop

Primary source files: `stitch/contact-desktop.png` and `stitch/contact-desktop.html`.

Composition and sequence:

1. Shared header with `Inquire` active.
2. Two-column opening: full-height standing portrait on the left; “Begin a Conversation” copy and WhatsApp/email actions on the right.
3. Two-column middle: inquiry form on the left; “The Sanctuary in Chiang Dao,” landscape image, and location card on the right.
4. “Gentle Preparations” accordion FAQ with three questions.
5. Shared footer.

The contact page uses friendly, low-friction actions. WhatsApp is visually primary; email and the form are secondary alternatives.

### Contact — Mobile

Primary source files: `stitch/contact-mobile.png` and `stitch/contact-mobile.html`.

The mobile screenshot uses a darker, more immersive treatment than the desktop page:

1. Compact header and standing portrait.
2. Dark indigo introductory panel with centered inquiry copy and prominent WhatsApp button.
3. White rounded inquiry card over the dark background.
4. Two stacked FAQ cards.
5. Warm neutral footer.

The paired HTML contains the headline “Begin Your Journey to Quiet Stillness,” a primary WhatsApp action, inquiry form, common questions, and footer. This visual and structural divergence from desktop is recorded in Section 11.

## 5. Global Layout

- Desktop content is centered within an approximately `1140px` maximum-width container with `32px` gutters.
- Main desktop section rhythm is approximately `120px`; mobile uses approximately `64px` between major sections.
- Desktop layouts use asymmetrical two-column compositions and alternating image/text rows.
- Mobile layouts use a single column, `24px` horizontal margins, and full-width actions.
- Whitespace is a primary design element; avoid compressing sections to fit more above the fold.
- Section separation should rely primarily on tonal changes and whitespace, with thin low-contrast rules where needed.
- Images use crisp rectangular crops with restrained radii; portrait crops prioritize Nongnapat’s face and presence.

## 6. Visual System

### Color

- Deep indigo anchors primary actions, proof points, active states, and selected dark sections.
- Forest green acts as a quiet secondary/accent color, particularly for outlined actions and nature associations.
- Bone-linen and warm off-white surfaces dominate the experience.
- Warm sand and pale gray-beige containers create gentle section distinction.
- Near-black warm text is used for body copy; muted gray-green/gray-blue is used for secondary copy.
- Error states use the system’s terracotta-red value and must remain clearly distinguishable.

The exact Stitch values are preserved in `stitch/design-system.md`.

### Typography

- **Libre Caslon Text**: all display and heading roles, including italic testimonials.
- **Manrope**: body copy, labels, navigation, buttons, forms, and metadata.
- Desktop display: `64/72px`; large heading: `48/56px`.
- Mobile large heading: `32/40px`.
- Body: `16/26px`, with `18/30px` for prominent introductory copy.
- Navigation/labels: `12/16px`, semibold, uppercase, `0.1em` tracking.

Typography should remain light and editorial. Do not substitute a high-contrast fashion serif or a generic system sans without explicit approval.

### Shape, borders, and elevation

- Use small `4–8px` radii for functional elements.
- Buttons are compact rectangles rather than pills.
- Cards should be flat, defined by fill, spacing, or a subtle one-pixel border.
- Standard sections do not use drop shadows.
- Reserve soft ambient shadow for overlays, drawers, or focused conversion surfaces.

## 7. Shared Components

### Header and navigation

- Desktop: sticky, translucent warm surface with subtle backdrop blur and bottom rule.
- Wordmark: Nongnapat Neuman in serif.
- Navigation labels use uppercase Manrope and generous horizontal spacing.
- Active state uses indigo text and a thin underline.
- Primary inquiry action is a compact solid-indigo rectangle.
- Mobile: condensed brand treatment with icon-triggered drawer/menu; controls must expose accessible names, focus management, and escape/overlay dismissal.

Navigation labels vary slightly between generated screens (`Home`, `Philosophy`, `Approach`, `Services`, `Story`, `Inquire`). Implementation should use a single shared route set approved in the technical handoff rather than preserving broken `#` links.

### Buttons and links

- Primary: indigo background, white semibold Manrope text.
- Secondary: low-contrast green/indigo outline on a light surface.
- Text links: concise label with subtle arrow or underline treatment.
- Hover: slight opacity or color transition; no large movement.
- Active/pressed: subtle `0.98` scale is present in Stitch HTML.
- Focus: clearly visible indigo or inverse outline meeting accessibility contrast.

### Forms

- Light, quiet fields with bottom borders or subtle warm fill.
- Labels remain visible; placeholder text is not the sole label.
- Required validation, error summaries, and success states must be added during implementation.
- Inquiry fields appearing across Stitch screens include name, email, area/service of interest, and message.
- Submit controls span the form width on narrow layouts.

### Service cards and editorial rows

- Desktop service pathways use image-led columns or alternating image/text rows.
- Mobile cards stack vertically with generous internal spacing.
- Images retain consistent aspect ratios within each component family.
- Copy uses short titles, plain-language descriptions, and low-pressure actions.

### Testimonials

- Large centered italic Libre Caslon Text.
- Extensive vertical whitespace.
- Attribution remains visually secondary.
- Only verified client-approved testimonials may be published; Stitch placeholder quotes must not be presented as factual endorsements without approval.

### FAQ accordion

- Flat warm-neutral rows/cards with quiet borders.
- Entire question row is an interactive button with clear expanded/collapsed state.
- Keyboard operation and `aria-expanded`/`aria-controls` are required.

### Footer

- Warm neutral tonal container with thin top border.
- Three logical groups on desktop; stacked groups on mobile.
- Includes wordmark, navigation, inquiry routes, legal links, and social/contact information once verified.

## 8. Imagery

The Stitch screens use imagery in four roles:

- Portraits of Nongnapat for personal trust and practitioner presence
- In-session/treatment imagery for service context
- Interior and retreat-setting imagery for quality and atmosphere
- Chiang Dao landscape imagery for sense of place

The generated HTML references Stitch-hosted image URLs and includes useful alt-text prompts. Before production, confirm usage rights and replace generated/placeholding imagery with client-owned originals where available. Preserve the approved crops and tonal qualities: soft natural light, muted warm colors, realistic environments, and quiet compositions. Avoid generic stock-spa clichés or highly saturated travel imagery.

## 9. Motion and Interaction

- Motion is subtle and supportive: `200–300ms` color/opacity/transform transitions.
- Image hover zoom is slow and restrained (approximately `700ms`).
- Mobile navigation enters as a right-side drawer where present.
- FAQ items expand/collapse without dramatic spring motion.
- Sticky header and backdrop blur remain consistent while scrolling.
- Respect `prefers-reduced-motion`; remove nonessential scale and image zoom for users who request reduced motion.
- WhatsApp, email, form submission, navigation, and menu actions must be real interactions in the implementation, not visual placeholders.

## 10. Responsive Behavior

- Use the saved desktop and mobile screenshots as breakpoint anchors rather than shrinking desktop composition proportionally.
- Recommended implementation breakpoint is near the Stitch HTML’s Tailwind `md` boundary (`768px`), with fluid behavior between `390px` mobile and `1280px` canvas targets.
- Two-column hero, form/location, and alternating service layouts stack to one column.
- Desktop navigation changes to a menu trigger and off-canvas drawer.
- Desktop display headings reduce from `48–64px` to approximately `32px` with `40px` line height.
- Desktop `120px` section gaps reduce toward `64px` on mobile.
- Action groups stack and buttons become full width where the saved mobile visual shows this behavior.
- Footer columns stack without compressing link touch targets.
- Images must use responsive sources and explicit dimensions to avoid layout shift.

## 11. Approval Decisions and Known Discrepancies

The following decisions must be accepted or revised before the Codex Technical Implementation Handoff:

1. **Services content differs by viewport.** Desktop presents Private Healing Sessions, Retreats & Workshops, and Reiki Training. Mobile presents Reiki Energy Balancing, Holistic Massage Therapy, Guided Meditation & Breathwork, and Integrative Healing Journey. Recommended resolution: use the discovery-aligned desktop information architecture across all viewports and treat the mobile screen as layout/style guidance only unless the client confirms the four modality names and descriptions.
2. **Home content differs by viewport.** Desktop has Integrative Approach, a three-part approach grid, three service pathways, and an inquiry form. Mobile instead shows Grounded Healing, two Guided Pathways, nature imagery, and a testimonial. Recommended resolution: preserve a consistent content model across viewports while using the respective compositions; do not hide essential desktop content solely because it is absent from the mobile concept.
3. **Contact mobile is a distinct dark concept.** The desktop page is predominantly light and editorial; mobile introduces a dark indigo background and floating white cards. Recommended resolution: retain the dark mobile treatment as an intentional responsive expression while keeping the same verified fields, CTA hierarchy, FAQs, and content as desktop.
4. **Navigation is not fully consistent.** Generated screens alternate between Home/Philosophy/Approach/Services and Philosophy/Approach/Services/Story/Inquire. Recommended resolution: the handoff should define one shared route model based on implemented pages and section anchors.
5. **Some Stitch copy is unverified.** Response times, complimentary WhatsApp calls, physical location details, session duration, modality names, testimonial quotes, and other generated particulars were not present in the questionnaire. They are placeholders until the client confirms them.
6. **The current screen set covers three pages.** No separate About/Story, Philosophy, Approach, Retreat, Reiki Training, or legal-page screen was exported. Recommended resolution: implement only the three designed pages unless the approved handoff explicitly maps missing content to sections or authorizes derivative pages.

Approval of this document adopts the recommended resolutions above unless the client supplies different revision instructions.

## 12. Implementation Fidelity Rules

- Treat manual edits to this file as the highest-priority design source.
- Reproduce the saved screenshot composition at the matching viewport before polishing intermediate breakpoints.
- Use the paired HTML to recover exact spacing relationships, component hierarchy, copy, image references, and interaction intent.
- Use `stitch/design-system.md` for shared tokens, not as a substitute for screen fidelity.
- Do not publish unverified generated claims, testimonials, contact data, or service details.
- Do not build until the Codex Technical Implementation Handoff has been produced and explicitly approved.
