# Studio IKI — Final Stitch Design Specification

## Stitch Fidelity Source Status

`Stitch Fidelity Source Status: SCREEN_LEVEL_READY`

Stitch MCP supplied full-resolution screenshots and generated responsive HTML for seven primary website screens. Together, these provide sufficient screen-level visual, structural, and responsive implementation evidence. The source inventory is recorded in [stitch/source-manifest.md](stitch/source-manifest.md).

## 1. Source-of-truth hierarchy

Use sources in this order:

1. This document defines the approved final design and the corrections required before implementation.
2. The paired Stitch screenshots and HTML in `documents/stitch/` define visual appearance, hierarchy, layout, component treatment, image placement, and responsive intent.
3. `01-client-discovery-summary.md` defines all business facts, service names, credentials, sitemap requirements, conversion priorities, responsible-claims boundaries, and unresolved content.
4. `00-questionnaire.md` remains supporting client source material.

When sources conflict, preserve the Stitch visual system but use discovery-approved facts. Generated copy must never introduce unconfirmed prices, dates, durations, events, testimonials, qualifications, policies, availability, or health claims.

## 2. Final design overview

The final design is a calm, soft architectural system built from generous white space, restrained rectilinear geometry, warm pale surfaces, plum typography and controls, thin greige borders, and intimate nature-led photography. Its tone is quiet, credible, personal, and refined rather than clinical or overtly luxurious.

The page rhythm alternates white and warm porcelain sections. Content is arranged in broad editorial bands with centered headings, two-column feature layouts, card grids, and occasional full-width philosophy or conversion blocks. The hierarchy makes Jikiden Reiki seminars the dominant conversion path while keeping therapies, events, practitioner credibility, and inquiry easy to reach.

## 3. Screen inventory

| Page | Primary design evidence | Structural source | Coverage |
|---|---|---|---|
| Home | [Screenshot](stitch/screenshots/01-home.png) | [HTML](stitch/html/01-home.html) | Complete long-form desktop screen; responsive rules included |
| Jikiden Reiki Seminar | [Screenshot](stitch/screenshots/02-jikiden-reiki-seminar.jpg) | [HTML](stitch/html/02-jikiden-reiki-seminar.html) | Complete primary-offer screen |
| Therapies | [Screenshot](stitch/screenshots/03-therapies.jpg) | [HTML](stitch/html/03-therapies.html) | Complete overview and four-service detail screen |
| About & Philosophy | [Screenshot](stitch/screenshots/04-about-philosophy.jpg) | [HTML](stitch/html/04-about-philosophy.html) | Complete practitioner and philosophy screen |
| Events | [Screenshot](stitch/screenshots/05-events.jpg) | [HTML](stitch/html/05-events.html) | Complete listing treatment; event content is placeholder-only |
| FAQ | [Screenshot](stitch/screenshots/06-faq.jpg) | [HTML](stitch/html/06-faq.html) | Complete grouped FAQ treatment; answers require content approval |
| Contact / Inquiry | [Screenshot](stitch/screenshots/07-contact-inquiry.jpg) | [HTML](stitch/html/07-contact-inquiry.html) | Visual shell and contact card supplied; required form markup is missing |

Privacy Policy and Terms / Booking Policy have no dedicated Stitch screens. They should reuse the final header, footer, typography, content width, spacing, colors, borders, and form/legal text styling without inventing policy content.

## 4. Global visual system

### Color

Preserve the approved fixed palette:

| Role | Color | Use |
|---|---|---|
| Porcelain | `#FBF8F6` | Primary warm page and section background |
| Warm Greige | `#DCD2CC` | Borders, dividers, muted surfaces |
| Dusty Lavender | `#B8A6BD` | Restrained supporting accent |
| Soft Mauve | `#C998A5` | Secondary accent, selected labels, subtle emphasis |
| Plum Gray | `#574B56` | Primary text, navigation emphasis, filled controls |

The generated system also uses near-white surface values and darker plum-derived text values for contrast. Any implementation shades must remain visibly within the approved palette family. Do not introduce navy blue, green, or brown as UI colors. Natural photography may contain environmental colors.

### Typography

- Primary interface and body family: **Be Vietnam Pro**.
- Editorial philosophy accent: **EB Garamond**, used sparingly for large italic quotations or reflective statements.
- Headings are substantial but not oversized, usually semibold or bold, with compact line height and plum-gray color.
- Body copy is open and readable, with comfortable line height and muted dark-plum/gray color.
- Navigation, labels, metadata, and buttons use compact sans-serif weights with modest tracking.
- Preserve semantic heading order; do not choose heading tags only for visual size.

### Grid, width, and spacing

- Desktop foundation: 12-column grid.
- Mobile foundation: 4-column grid.
- Base spacing unit: 8 px.
- Typical gutter: 24 px.
- Desktop outer margin: approximately 64 px.
- Mobile outer margin: approximately 20 px.
- Major section separation: approximately 80 px, adjusted responsively.
- Use a broad centered maximum content width consistent with the 2560 px reference renders.
- Text blocks remain intentionally narrower than image and card grids for a quiet reading measure.

### Shape, border, and depth

- Standard corner radius: about 8 px; occasional 12 px treatment for larger cards.
- Use thin, warm-neutral 1 px borders to define cards, images, inputs, and section containers.
- Avoid heavy shadows. Depth comes primarily from tonal surface changes, borders, and spacing.
- Buttons are compact rounded rectangles, not pills.
- Image frames use subtle warm borders and modest rounding.

### Imagery

- Favor authentic photography of Nongnapat, treatments, teaching, Healing Garden, and Chiang Dao.
- Use warm, natural, softly lit images with calm expressions and uncluttered compositions.
- Preserve the crops, aspect ratios, and scale shown in the screenshots where approved source images are available.
- Replace generated or remote placeholder imagery with client-approved and licensed files before publication.
- Do not use culturally generic Japanese symbols or imagery that misrepresents Jikiden Reiki.

## 5. Global shell and components

### Header and navigation

- Desktop header: large Studio IKI wordmark at left; centered page links; Contact and a filled `Join a Seminar` action at right.
- Active navigation uses a restrained underline or border treatment.
- Header sits on a warm, nearly white surface with a thin lower divider.
- Mobile HTML indicates a compact navigation/drawer pattern. Some generated screens also show a bottom mobile navigation; standardize this during implementation so the same accessible mobile shell is used on every page.
- Keep navigation labels short: Home, Seminar, Therapies, About, Events, FAQ, Contact.

### Buttons and text links

- Primary action: solid plum-gray background with light text.
- Secondary action: transparent or porcelain fill with plum border and text.
- Text action: mauve/plum link, often underlined or paired with a subtle directional cue.
- All actions require hover, focus-visible, active, disabled, loading where relevant, and clear accessible names.

### Cards

- Cards use pale warm surfaces or white, 1 px greige borders, 8–12 px corners, and no pronounced shadow.
- Service cards are text-led and equal-height within a row.
- Event cards combine an image, small status chip, metadata, title, and summary.
- Testimonial cards use an editorial quotation style, but must remain hidden or clearly pending until approved testimonials and consent are supplied.

### Forms

- Inputs should use quiet warm surfaces, visible labels, 1 px neutral borders, and a clear plum focus ring.
- Provide inline accessible validation, an error summary where useful, submitting state, success confirmation, and retry behavior.
- Required inquiry purposes: seminar, therapy session, help choosing a therapy, and general inquiry.
- The Stitch Contact export omits the actual form markup despite referencing it in comments and JavaScript. Implement the discovery-required form within the intended right column while matching the supplied visual language.
- Do not connect a booking, payment, newsletter, CRM, calendar, map, or messaging service until the client confirms it.

### Footer

- Large Studio IKI wordmark, copyright line, a thin divider, legal links, inquiry/social links, and credentials link.
- Use the same pale background and broad horizontal breathing room as the header.
- Make the copyright year dynamic rather than copying the generated `2024` value.
- Hide or disable unsupplied social destinations; never use empty `#` links in production.

## 6. Page specifications

### Home

Preserve this sequence and treatment:

1. Split hero with primary statement, supporting copy, two actions, and a large framed practitioner/treatment image.
2. Jikiden Reiki seminar feature on a warm band, with copy/action opposite a wide image frame.
3. Four-column holistic therapies overview.
4. About Nongnapat two-column portrait and credentials feature.
5. Centered Healing Garden feature with broad landscape image.
6. Full-width editorial philosophy quotation in EB Garamond.
7. Upcoming events preview with three cards and an events link.
8. Two-card client experiences section.
9. Compact FAQ preview.
10. Warm final conversion band with seminar and therapy actions.

The screen establishes the visual pattern for all secondary pages. The visible event titles, FAQ answers, testimonials, and some therapeutic claims are generated placeholders and require approved content.

### Jikiden Reiki Seminar

Use this as the primary offer page. Preserve the calm hero, editorial introduction, alternating image-and-copy modules, structured information cards, and prominent inquiry action. Content must cover definition/distinction, lineage, audience, learning outcomes, seminar environment, official curriculum and credential context, practical details, testimonials, FAQ, and inquiry.

Dates, duration, schedule, capacity, prerequisites, language, price, inclusions, certification outcome, registration method, deposit, and cancellation terms remain pending. Do not infer them from generated copy.

### Therapies

Preserve the overview-to-detail rhythm:

1. Restrained hero introduction.
2. Four service-path cards.
3. Alternating detailed sections for Jikiden Reiki, Biodynamic CranioSacral Therapy (BCST), Chi Nei Tsang, and Crystal Energy Healing—in this exact order.
4. Full-width stillness/experience section.
5. Final guidance and booking conversion block.

The generated `60 / 90 mins` and `Consult Booking` values are placeholders, not confirmed service facts. Keep duration, pricing, contraindications, availability, preparation, and aftercare pending until approved.

### About & Philosophy

Preserve the large editorial hero, practitioner storytelling, credentials/history modules, framed imagery, reflective quotation treatment, philosophy block, Healing Garden story, and final action.

Replace generated `Sound Therapy` and `Somatic Integration` cards with discovery-approved experience and modalities. Do not publish the generated luxury/turbulence quotation as a direct client quote unless the client explicitly approves it.

### Events

Preserve the page hero, three-card listing grid, larger featured-event treatment, availability/status metadata, and final registration/inquiry action. The system should support client-managed fields for title, date/time, location, description, image, status/capacity, and inquiry destination.

`Mindful Movement Retreat`, `Autumn Tea Ceremony`, `Full Moon Sound Bath`, and `Winter Solstice: Silence & Stillness` are layout examples only. Do not publish them as real events. `View Full Calendar` and `Join Mailing List` imply unconfirmed functionality and must not be implemented unless approved.

### FAQ

Preserve the grouped, highly readable layout for seminar, therapy, and practical questions, followed by a visually distinct complementary-care note and a contact action. Use accessible disclosure components if answers collapse; otherwise retain the calm bordered-card treatment.

All answers require factual review. In particular, prior experience, supplied seminar items, medical suitability, location, schedules, and booking details remain unconfirmed unless stated in the approved discovery.

### Contact / Inquiry

Preserve the two-column desktop composition: calm introduction and practitioner/direct-contact card on the left; inquiry form on the right. Stack it into one clear reading order on small screens. Retain the round portrait, muted pending-detail rows, and restrained contact icons.

The generated email address, phone, location, response expectations, consent wording, and social URLs require client confirmation before publication. The form must include visible labels, inquiry-purpose choice, contact details, message, privacy consent, validation, and a success state.

### Legal and utility pages

Create Privacy Policy and, if the confirmed booking model requires it, Terms / Booking Policy using a narrow long-form reading column. Use the shared header/footer, strong page title, clear section headings, comfortable paragraph rhythm, and accessible link/focus styles. Content must be provided or legally approved; do not generate policy facts.

## 7. Responsive behavior

- Collapse wide two-column features into a single column while keeping heading, text, action, and associated image in a logical reading order.
- Convert four-card rows to two columns at intermediate widths and one column on small screens.
- Convert three-card event rows to one column on small screens.
- Scale major section padding down from the desktop 80 px rhythm without crowding content.
- Keep mobile side margins near 20 px and touch targets at least 44 × 44 px.
- Ensure long headings wrap naturally without clipped text or excessive orphan words.
- Use a single consistent mobile navigation behavior across all pages.
- Preserve image focal points with controlled `object-position` rules rather than arbitrary center crops.
- Treat generated responsive HTML as intent, then visually verify desktop, tablet, and mobile against the final system during build QA.

## 8. Interaction and accessibility requirements

- Target WCAG 2.2 AA contrast, keyboard access, focus visibility, semantic structure, descriptive labels, meaningful alternative text, and reduced-motion support.
- Validate pale mauve text and thin borders against their backgrounds; darken within the approved palette when AA contrast requires it.
- Avoid color-only states for active navigation, form errors, status chips, or capacity.
- Use semantic buttons for actions and links only for navigation.
- Announce form errors and success states to assistive technology.
- Provide a skip link and preserve logical focus order in responsive navigation and dialogs/drawers.
- Avoid unnecessary motion. Any transition should be short, subtle, and disabled under `prefers-reduced-motion`.
- Maintain the complementary-care disclaimer where therapy benefits are discussed. Never imply diagnosis, cure, guaranteed results, or replacement of medical treatment.

## 9. Content corrections and unresolved items

The final visual design is approved as screen-level source, but the following are explicitly not approved content:

- Generated event names, dates, descriptions, availability, calendar, or mailing-list behavior.
- Generated testimonials, names, or participant details.
- Generated therapy durations, prices, booking terms, contraindications, or medical claims.
- Generated modalities or credentials not present in discovery, including Sound Therapy and Somatic Integration.
- Generated FAQ answers about prerequisites, supplied items, schedules, suitability, or location.
- Any generated address, phone, email, social URL, or response-time promise.
- The generated 2024 copyright year.

Before launch, confirm the Studio IKI / Healing Garden naming relationship, online versus in-person delivery, language support, approved imagery and logo, contact and location details, seminar operations, therapy operations, events workflow, testimonial permissions, form routing and consent, integrations, and legal text.

## 10. Implementation fidelity acceptance

Implementation should be considered visually faithful when:

- Each page preserves the section order, visual rhythm, proportions, surface alternation, card geometry, typography hierarchy, and image treatment shown in its paired screenshot.
- Desktop rendering is compared directly with all seven full-resolution screenshots.
- Responsive layouts follow the generated HTML intent and remain coherent at mobile and tablet widths.
- Repeated components are consistent across screens even where Stitch exports vary slightly.
- Approved discovery facts replace placeholders without materially changing the final hierarchy.
- Missing functional elements—especially the inquiry form—are added in the established design language.
- Accessibility corrections preserve the final character while meeting WCAG 2.2 AA.
