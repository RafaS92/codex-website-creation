# Stitch Design Document

## 1. Source

Project: Nongnapat Neuman  
Stitch project ID: `16640907776573635121`  
Stitch project name: `projects/16640907776573635121`  
Origin: Google Stitch / `TEXT_TO_UI_PRO`  
Visibility: Private  
Current design theme: `Sacred Stillness`  
Last observed update: `2026-05-27T22:56:32.239990Z`

This document captures the Google Stitch design selected for implementation. The approved source is the visible screen set in Stitch project `16640907776573635121`. Hidden Stitch screen instances are treated as archived iterations and should not be used as the primary implementation reference unless the client explicitly re-approves them.

## 2. Approved Screens

### Desktop Screens

- Home - Nongnapat Neuman (Sacred Stillness)  
  Screen ID: `949ba570498048e6aba9b6a47d19142e`  
  Size: `2560 x 8884`

- About - Nongnapat Neuman (Sacred Stillness)  
  Screen ID: `7d4a75345223469ba499fbab5bde2d5f`  
  Size: `2560 x 6954`

- Services - Nongnapat Neuman (Sacred Stillness)  
  Screen ID: `03fcc9e9a3f04200af66ad9a0a77b8f3`  
  Size: `2560 x 7610`

- Retreats & Workshops - Nongnapat Neuman (Sacred Stillness)  
  Screen ID: `15d8ca578d614c2099f4b095c9123d86`  
  Size: `2560 x 6374`

- Reiki Training - Nongnapat Neuman (Sacred Stillness)  
  Screen ID: `d7abcded24474601993d24b50122ea44`  
  Size: `2560 x 7320`

- Contact & FAQ - Nongnapat Neuman (Sacred Stillness)  
  Screen ID: `132fdb3517194c0797bc761d9d478819`  
  Size: `2560 x 4128`

### Mobile Screens

- Home - Nongnapat Neuman (Mobile)  
  Screen ID: `bf5b110f33604b3f99bdeb40a2b324a4`  
  Size: `780 x 8246`

- About - Nongnapat Neuman (Mobile)  
  Screen ID: `622f2d7ced454a0a9e2a6d0de7d34380`  
  Size: `780 x 6966`

- Services - Nongnapat Neuman (Mobile)  
  Screen ID: `266372f86845422e98e14b195ba2361a`  
  Size: `780 x 7702`

- Retreats & Workshops - Nongnapat Neuman (Mobile)  
  Screen ID: `cbbe49e650094fafbac28c63fe85e96a`  
  Size: `780 x 8590`

- Reiki Training - Nongnapat Neuman (Mobile)  
  Screen ID: `a3aaf260ae5d4d8a995cbd39f958c235`  
  Size: `780 x 8108`

- Contact & FAQ - Nongnapat Neuman (Mobile)  
  Screen ID: `fa7a1ed57b7c4aa2bb5b73fc1a1f3602`  
  Size: `780 x 4622`

## 3. Design Direction

The approved design direction is `Sacred Stillness`: quietly premium, grounded, nature-connected, and intentionally spacious. The interface should evoke misty mornings in Northern Thailand, a safe healing environment, and the feeling of arriving somewhere calm and professionally held.

The style blends minimalism with tactile warmth. It should not feel like a generic spa template, a mystical sales funnel, or a clinical wellness site. It should feel editorial, organic, trustworthy, and restful.

Core experience qualities:

- Calm, slow, and spacious
- Premium without being cold
- Natural and grounded
- Trust-building before conversion
- Clear enough for international wellness travelers
- Gentle, inquiry-led calls to action
- Strong visual reliance on environment, nature, practitioner presence, and tactile surfaces

## 4. Visual System

### Color Tokens

Use the current project-level `Sacred Stillness` earth/moss theme as the implementation source of truth.

- `background`: `#fcf9f8`
- `surface`: `#fcf9f8`
- `surface-container-lowest`: `#ffffff`
- `surface-container-low`: `#f6f3f2`
- `surface-container`: `#f0eded`
- `surface-container-high`: `#eae7e7`
- `surface-container-highest`: `#e4e2e1`
- `surface-dim`: `#dcd9d9`
- `surface-variant`: `#e4e2e1`
- `on-surface`: `#1b1c1c`
- `on-surface-variant`: `#434843`
- `primary`: `#334537`
- `primary-container`: `#4a5d4e`
- `on-primary`: `#ffffff`
- `on-primary-container`: `#c0d5c2`
- `secondary`: `#605e58`
- `secondary-container`: `#e3dfd7`
- `on-secondary-container`: `#65625c`
- `tertiary`: `#41413e`
- `tertiary-container`: `#595855`
- `outline`: `#737872`
- `outline-variant`: `#c3c8c1`

Color usage:

- Use `#fcf9f8` as the dominant page background.
- Use moss green (`#334537`, `#4a5d4e`) for primary navigation emphasis, CTAs, active states, and grounded brand accents.
- Use warm stone surfaces (`#f6f3f2`, `#f0eded`, `#e4e2e1`) for tonal layering instead of hard boxes.
- Use deep charcoal (`#1b1c1c`) for primary text rather than pure black.
- Avoid high-saturation colors, strong gradients, and harsh contrast except where accessibility requires it.

### Typography

Primary headline font: `Playfair Display`  
Primary body/UI font: `Plus Jakarta Sans`

Stitch typography tokens:

- `display-lg`: Playfair Display, `48px`, weight `600`, line-height `1.2`, letter-spacing `-0.02em`
- `display-lg-mobile`: Playfair Display, `36px`, weight `600`, line-height `1.2`, letter-spacing `-0.01em`
- `headline-md`: Playfair Display, `32px`, weight `500`, line-height `1.3`
- `headline-sm`: Playfair Display, `24px`, weight `500`, line-height `1.4`
- `body-lg`: Plus Jakarta Sans, `18px`, weight `400`, line-height `1.6`
- `body-md`: Plus Jakarta Sans, `16px`, weight `400`, line-height `1.6`
- `label-md`: Plus Jakarta Sans, `14px`, weight `600`, line-height `1.2`, letter-spacing `0.05em`

Typography behavior:

- Use Playfair Display for page titles, large section headings, and editorial pull statements.
- Use Plus Jakarta Sans for all body copy, navigation, buttons, forms, labels, FAQs, and supporting text.
- Maintain generous line heights and readable measure.
- Do not overuse uppercase; reserve it for small labels, section markers, and button labels where shown by the design.

### Shape

Stitch shape tokens:

- `sm`: `0.25rem`
- `DEFAULT`: `0.5rem`
- `md`: `0.75rem`
- `lg`: `1rem`
- `xl`: `1.5rem`
- `full`: `9999px`

Shape usage:

- Use `8px` radius for standard buttons, inputs, and compact UI.
- Use `16px` to `24px` radius for larger cards, image containers, and feature panels.
- Use pill shapes sparingly for small chips, low-priority action tags, or category markers.

### Spacing & Layout

Stitch spacing tokens:

- `base`: `8px`
- `xs`: `4px`
- `sm`: `12px`
- `md`: `24px`
- `lg`: `48px`
- `xl`: `80px`
- `container-max`: `1200px`
- `gutter`: `24px`
- `margin-mobile`: `20px`
- `margin-desktop`: `64px`

Layout behavior:

- Desktop should use a centered, fixed-grid editorial composition.
- Use a 12-column desktop grid with generous side margins.
- Content should rarely span the full viewport width, even on large screens.
- Mobile should become a single-column flow with `20px` side margins.
- Major sections should have generous vertical breathing room.
- The design should feel spacious but not empty; use rhythm, imagery, and tonal surfaces to carry the pace.

### Elevation & Depth

Depth should come mainly from tonal layering. Use warm surface shifts before shadows.

Where shadow is needed:

- Use soft, diffused ambient shadows.
- Use a slight moss tint such as `rgba(74, 93, 78, 0.08)`.
- Avoid dark, harsh, or obvious drop shadows.

## 5. Component System

### Navigation

The site should use a calm, minimal top navigation that supports the six-page structure:

- Home
- About
- Services
- Retreats & Workshops
- Reiki Training
- Contact / FAQ

Implementation notes:

- Desktop navigation should be horizontal, understated, and easy to scan.
- Mobile navigation should collapse into a simple menu.
- Active states should use moss green or subtle text emphasis.
- The header should not feel heavy or overly commercial.

### Buttons

Primary buttons:

- Moss green background
- Light text
- Uppercase or label-style text where the design uses it
- Subtle hover transition to a slightly deeper moss tone
- No gradients
- No heavy shadows

Secondary buttons:

- Quiet outline, ghost, or tonal style
- Use for `Learn More`, secondary inquiry paths, and page-level navigation

CTA language should remain soft and inquiry-led:

- Inquire About a Session
- Contact Nongnapat
- Ask About Retreats
- Join a Reiki Training
- Learn More

### Cards & Panels

Cards should feel like tonal surfaces resting on the page.

Implementation notes:

- Prefer warm stone or soft sand backgrounds.
- Avoid heavy outlines.
- Use subtle shadow only when needed.
- Keep card radius aligned with `8px` to `24px` depending on size.
- Do not make the UI feel card-heavy; reserve cards for services, pathways, FAQ groupings, training details, and repeatable content.

### Forms

The contact form should feel calm and lightweight.

Implementation notes:

- Use soft sand fields with a subtle border or bottom rule.
- Focus states should transition to moss green.
- Include fields appropriate for inquiry type: name, email, message, interest area.
- Interest area should support private sessions, retreats/workshops, Reiki training, and general inquiry.
- Provide WhatsApp and email as alternate contact paths.

### Chips & Tags

Use pill chips for service modalities, audience markers, program labels, or small status/category details.

Possible chip labels:

- Energy Work
- Somatic Healing
- Sound Healing
- Mindfulness
- Nature-Based Healing
- Reiki Training

### FAQ

FAQ should be implemented as a calm accordion or grouped question list.

Visual notes:

- Use generous vertical padding.
- Use subtle dividers that do not dominate.
- Keep interaction gentle and readable.
- Avoid cramped answer text.

## 6. Page-Level Design Notes

### Home

Purpose: introduce the practitioner, the healing philosophy, the setting, and primary pathways into the site.

Expected structure:

- Spacious hero with Nongnapat Neuman as the primary identity signal
- Immediate calm/nature-based positioning
- Primary inquiry CTA
- Introductory philosophy section
- Service pathway overview
- Natural setting / Chiang Dao context
- Trust-building callout around 20+ years of experience
- Retreats, workshops, and Reiki training previews
- Gentle contact CTA

Implementation priority:

- The first viewport should make the brand/practitioner unmistakable.
- Imagery should communicate real place, atmosphere, and care.
- The page should invite rather than push.

### About

Purpose: build practitioner trust and give the work human grounding.

Expected structure:

- Practitioner-led hero
- Background and 20+ years of experience
- Healing philosophy
- Integrative approach
- Natural setting relationship
- Values or principles of care
- CTA toward services or contact

Implementation priority:

- The About page should feel personal and credible.
- If final biography content is not available, use approved discovery language conservatively and avoid inventing credentials.

### Services

Purpose: explain the private healing offering and modalities in a way visitors can understand.

Expected structure:

- Services hero
- Overview of holistic healing approach
- Modality cards or sections for energy work, somatic therapies, sound healing, nature-based healing, and mindfulness
- What to expect
- Who it is for
- Gentle inquiry CTA

Implementation priority:

- Service descriptions should feel clear, grounded, and non-overpromising.
- The design should help visitors compare modalities without becoming clinical or transactional.

### Retreats & Workshops

Purpose: present immersive experiences for travelers, retreat guests, and groups.

Expected structure:

- Retreat/workshop hero
- Nature-based immersion positioning
- Workshop or retreat format blocks
- Benefits/experience expectations
- Group or custom inquiry pathway
- CTA to ask about upcoming workshops or private retreat possibilities

Implementation priority:

- Use strong environment imagery.
- Keep the page experiential but concrete enough to support inquiry.

### Reiki Training

Purpose: support students and practitioners interested in authentic Reiki training.

Expected structure:

- Reiki Training hero
- Training philosophy
- Who the training is for
- Possible learning path / levels / workshop format
- What students may experience or learn
- Registration/inquiry CTA

Implementation priority:

- Avoid inventing specific levels, certifications, prices, or dates unless provided later.
- Present the page as an inquiry and program interest path if details remain unavailable.

### Contact & FAQ

Purpose: make the next step simple and reduce uncertainty.

Expected structure:

- Contact hero
- Contact form
- WhatsApp and email contact options
- Inquiry type prompts
- Location context for Chiang Dao / Northern Thailand
- FAQ section

Implementation priority:

- The page should reassure visitors that reaching out does not require commitment.
- FAQs should answer preparation, booking, location, session expectations, retreats, and Reiki training basics.

## 7. Responsive Behavior

The approved Stitch design includes companion mobile screens for all major pages. Implementation should match the mobile intent rather than simply shrinking desktop.

Mobile requirements:

- Single-column layout
- `20px` side margins
- Generous vertical spacing between sections
- Mobile menu for navigation
- Large enough tap targets for buttons, accordions, and form controls
- Typography scaled to the provided mobile display size
- CTAs visible and easy to use without crowding the layout
- Image crops should preserve subject and atmosphere

Desktop requirements:

- Centered editorial grid
- `1200px` max content container
- Wide side margins
- Spacious hero compositions
- Alternating editorial layouts where shown by Stitch
- Tonal layering instead of hard section borders

## 8. Imagery Direction

The design relies on imagery to communicate the natural setting and safe, grounded experience.

Recommended imagery:

- Nongnapat in a calm, professional context
- Healing setting, session spaces, retreat environment, or workshop atmosphere
- Chiang Dao / Northern Thailand nature
- Quiet details: textiles, bowls, natural materials, leaves, stone, light, water, wood

Image treatment:

- Warm, natural, low-noise photography
- Avoid overly dark, blurred, or generic wellness stock imagery
- Avoid cliché spiritual visuals unless they are authentic to the practice
- Use rounded image containers consistent with Stitch shape tokens
- Preserve calm negative space around images

## 9. Interaction Notes

Interactions should feel quiet and unhurried.

Recommended interactions:

- Subtle hover transitions on buttons and links
- Smooth accordion open/close on FAQ
- Gentle mobile navigation open/close
- Optional soft section reveal animations if they do not distract

Avoid:

- Aggressive parallax
- Fast or bouncy animation
- Heavy cursor effects
- Excessive motion
- Popups that interrupt the calm inquiry flow

## 10. Implementation Notes For Handoff

- The Stitch project includes generated HTML for every approved screen. During implementation, use the screen screenshots/design details for visual reference, but build maintainable production code rather than copying brittle generated markup.
- Preserve the six-page structure shown in Stitch: Home, About, Services, Retreats & Workshops, Reiki Training, Contact & FAQ.
- Use the current project-level earth/moss `Sacred Stillness` theme, not the older alternate design systems that appear in the Stitch project history.
- Keep all final copy grounded in the approved questionnaire, discovery summary, and any later manually edited source documents.
- Do not invent missing operational details such as prices, schedules, certifications, exact session lengths, or medical claims.
- Use WhatsApp, email, and contact form affordances, but final contact values still need to be supplied before launch.
