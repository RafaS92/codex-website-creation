# Build Summary

Project: Nongnapat Neuman V3  
Build stage completed: 2026-05-28  
Source documents used:

- `documents/01-client-discovery-summary.md`
- `documents/02-design.md`
- `documents/03-codex-technical-handoff.md`
- `documents/stitch/screenshots/`
- `documents/stitch/html/`

## What Was Built

Built a Vite + React + SCSS website for Nongnapat Neuman with the approved six-page structure:

- Home
- About
- Services
- Retreats & Workshops
- Reiki Training
- Contact & FAQ

The implementation includes:

- React Router route structure.
- Shared site layout with reusable navbar and footer.
- Reusable components for buttons, CTA sections, cards, image panels, gallery, FAQ accordion, and contact forms.
- SCSS architecture with design tokens, breakpoints, base styles, component styles, and section/page layout styles.
- AOS scroll animation setup with subtle section-level animation.
- Desktop navigation with active route state.
- Mobile-ready navigation menu component with `aria-expanded` support.
- Accessible FAQ accordion with expanded/collapsed states.
- Contact forms with labels, required fields, and safe demo submit handling.
- Image-led layout based on the Stitch screen exports and Sacred Stillness visual system.

## Key Implementation Files

- `package.json`
- `index.html`
- `vite.config.js`
- `src/main.jsx`
- `src/App.jsx`
- `src/layouts/SiteLayout.jsx`
- `src/data/siteData.js`
- `src/pages/`
- `src/components/`
- `src/styles/`

## Visual Fidelity Notes

The build follows the approved Stitch design direction:

- Soft sand and moss green palette.
- Playfair Display headings and Plus Jakarta Sans body text.
- Spacious editorial layouts.
- Large image-led hero sections.
- Rounded tactile image panels and tonal card surfaces.
- Calm inquiry-led CTAs.
- Section order matched to the Stitch HTML exports for each page.

Some Stitch image URLs were no longer resolving during QA. Those were replaced with working images from the same Stitch visual system to avoid broken imagery while preserving the approved natural, tactile, Chiang Dao-inspired art direction.

## QA Completed

Commands run:

- `npm install` completed successfully with 0 vulnerabilities.
- `npm run build` completed successfully.
- Source scan found no `TODO`, `FIXME`, `console.log`, or `debugger` statements in app source.

Browser checks completed on the running dev server:

- Verified all six routes load.
- Verified each route has the expected page title and `h1`.
- Verified no horizontal overflow on checked desktop viewport.
- Verified all rendered images load after replacing broken Stitch image URLs.
- Verified Contact FAQ accordion interaction.
- Verified Contact form submit handling.
- Verified Retreats gallery next control.
- Checked for meaningful console issues and fixed the duplicate React gallery key warning.

## Accessibility Notes

Implemented:

- Semantic header, nav, main, section, and footer structure.
- Skip link.
- Visible focus styles.
- Real links for navigation and real buttons for actions.
- Labeled form inputs and textarea.
- FAQ buttons with `aria-expanded` and `aria-controls`.
- Mobile menu button with accessible label and expanded state.
- Descriptive alt text for meaningful images.

## Known Placeholders

The project materials did not include final client contact or program details. These remain easy to update in `src/data/siteData.js`:

- Confirmed WhatsApp number.
- Confirmed email address.
- Detailed practitioner biography.
- Specific session pricing or durations.
- Retreat and workshop schedules.
- Reiki certification details and dates.
- Final FAQ answers and policies.

## Local Preview

The dev server was started at:

`http://127.0.0.1:5177/`
