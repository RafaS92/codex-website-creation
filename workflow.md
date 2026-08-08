# Website Creation Workflow

Workflow name: `website_creation_workflow`

Use this workflow when the user asks Codex to create a website through an approval-gated agent process.

## Core Rules

- Run one stage at a time.
- Stop after each stage and wait for explicit user approval.
- Save every stage output as an editable markdown document.
- Read the latest saved documents before continuing, because the user may edit them manually.
- Generate a reusable three-direction Stitch prompt kit from each project's approved discovery summary; never hard-code a client or visual style in the workflow itself.
- Keep content, sitemap, functionality, conversion priorities, and fixed brand constraints identical across Directions A, B, and C. Only the visual system may vary.
- Use user-provided links, screenshots, attached images, assets, and notes as context.
- Use the Stitch MCP only after the user confirms the Google Stitch design is ready.
- Treat Stitch screen-level data as required for visual fidelity. Design-system tokens alone are not enough to build from.
- Do not build code until the Codex handoff document is approved.

## Global Skill Usage

Use these globally installed skills when their stage is active:

```text
/Users/athenanexis/.codex/skills/senior-frontend-qa/SKILL.md
```

- Use `senior-frontend-qa` during the Website Build stage after implementation and before writing the build summary.

## Project Structure

For a project named `project-name`, use:

```text
website-projects/project-name/
  documents/
    00-questionnaire.md
    01-client-discovery-summary.md
    stitch-prompts/
      00-master-brief.md
      01-direction-a.md
      02-direction-b.md
      03-direction-c.md
      04-comparison-checklist.md
    02-design.md
    03-codex-technical-handoff.md
    04-build-summary.md
```

## Stage Order

### 1. Discovery

Agent:

```text
agents/discovery_strategy_agent.md
```

Input:

```text
website-projects/project-name/documents/00-questionnaire.md
```

Output:

```text
website-projects/project-name/documents/01-client-discovery-summary.md
```

Stop after creating or updating the output. Wait for approval.

### 2. Google Stitch Prompt Kit

Trigger this only after `01-client-discovery-summary.md` is approved.

Agent:

```text
agents/stitch_directions_agent.md
```

Input:

```text
website-projects/project-name/documents/01-client-discovery-summary.md
```

Output:

```text
website-projects/project-name/documents/stitch-prompts/
```

The agent must create one shared master brief, three separate copy-ready prompts, and a neutral comparison checklist. Each prompt must cover the complete canonical website and contain the same shared brief verbatim. Only the visual direction may change.

Stop after creating or updating the prompt kit. Wait for approval.

### 3. Google Stitch Design

Trigger this only after the Stitch prompt kit is approved.

At this point, stop the Codex workflow so the user can create the design in Google Stitch.

The user should:

1. Create one Stitch project for the website.
2. Run Directions A, B, and C in separate Stitch agent threads or branches.
3. Generate the complete canonical page set in desktop and mobile for every direction.
4. Review the three directions using `04-comparison-checklist.md` with the same page order and viewport.
5. Choose one direction, make any corrections or refinements directly in Google Stitch, and leave one final website design.

When the user comes back and confirms that the final Google Stitch design is ready:

1. Use the Stitch MCP to find the matching project and design.
2. Check what Stitch MCP data is available for the selected project.
3. Collect as much implementation-relevant source data as the MCP supports:
   - project metadata and selected/visible screen IDs
   - design system tokens and style guidelines
   - per-screen screenshots or rendered visual previews
   - per-screen generated HTML/CSS/component code, if available
   - per-screen layout structure, sections, component hierarchy, dimensions, imagery, and responsive variants
4. Save any MCP-provided screenshots, HTML, CSS, or structured screen exports under:

```text
website-projects/project-name/documents/stitch/
```

5. Create or update the standard Stitch design document at:

```text
website-projects/project-name/documents/02-design.md
```

The `02-design.md` file should be the source-of-truth design artifact for the single final website design produced in Google Stitch. It must capture the final screens, layout, visual system, components, typography, colors, spacing, imagery, interactions, responsive notes, and implementation-relevant design details available from Stitch.

Do not include Direction A/B/C labels, discarded concepts, comparison results, or selection history in `02-design.md`. From this point forward, the workflow must treat the corrected Stitch design as one final design and must not refer to the earlier alternatives.

`02-design.md` must include a `Stitch Fidelity Source Status` section with one of these statuses:

- `SCREEN_LEVEL_READY`: MCP or provided exports include enough per-screen screenshots, generated markup/code, or structured layout data to reproduce the approved design.
- `DESIGN_SYSTEM_ONLY_BLOCKED`: MCP only exposes theme/design-system data, screen IDs, or broad descriptions. Stop the workflow and ask the user for Stitch screenshots, generated HTML/code exports, or wait for MCP screen export support.
- `USER_EXPORT_READY`: the user supplied screenshots, HTML/code exports, or other screen-level references outside the MCP, and those files are saved under `documents/stitch/`.

Do not run the Codex Handoff stage unless the status is `SCREEN_LEVEL_READY` or `USER_EXPORT_READY`.

Stop after creating or updating `02-design.md`. Wait for design approval.

### 4. Codex Handoff

Agent:

```text
agents/codex_handoff_agent.md
```

Input:

```text
website-projects/project-name/documents/00-questionnaire.md
website-projects/project-name/documents/01-client-discovery-summary.md
website-projects/project-name/documents/02-design.md
```

Output:

```text
website-projects/project-name/documents/03-codex-technical-handoff.md
```

Stop after creating or updating the output. Wait for approval.

### 5. Website Build

Trigger this only after `03-codex-technical-handoff.md` is approved.

Build the website inside:

```text
website-projects/project-name/
```

Use these approved documents as source of truth:

```text
website-projects/project-name/documents/01-client-discovery-summary.md
website-projects/project-name/documents/02-design.md
website-projects/project-name/documents/03-codex-technical-handoff.md
```

Before building, verify that `02-design.md` has `Stitch Fidelity Source Status: SCREEN_LEVEL_READY` or `Stitch Fidelity Source Status: USER_EXPORT_READY`. If the status is `DESIGN_SYSTEM_ONLY_BLOCKED`, stop and ask for screen-level Stitch exports instead of building.

Required QA skill for this stage:

```text
/Users/athenanexis/.codex/skills/senior-frontend-qa/SKILL.md
```

After implementation, use `senior-frontend-qa` to check functionality, code quality, UI accuracy, responsive behavior, accessibility, performance, maintainability, and production readiness before finalizing the build summary. Include a visual fidelity check against the Stitch screenshots/exports in `documents/stitch/` when those files exist.

After building, save a summary here:

```text
website-projects/project-name/documents/04-build-summary.md
```

## Trigger Behavior

If the user says `Run website_creation_workflow` with new project input:

1. Identify the project name.
2. Create `website-projects/project-name/documents/`.
3. Save the project input as `00-questionnaire.md`.
4. Run the Discovery stage.
5. Stop for approval.

If the user says `Approved. Continue website_creation_workflow`:

1. Inspect the existing project documents.
2. If Discovery was just approved and the Stitch prompt kit does not exist, run `agents/stitch_directions_agent.md`, save all five prompt-kit files, and stop for approval.
3. If the prompt kit is approved and `02-design.md` does not exist, stop so the user can generate the three designs, choose one, and correct or refine it directly in Google Stitch until one final design remains.
4. If the user confirms that the final Stitch design is ready, use Stitch MCP to create or update `02-design.md` for that final design only and set the `Stitch Fidelity Source Status`.
5. If `02-design.md` exists and is approved, run the Codex Handoff stage only when the status is `SCREEN_LEVEL_READY` or `USER_EXPORT_READY`.
6. Continue to the next incomplete stage.
7. Stop after that stage.

If the user gives revision notes before approval:

1. Update the current stage document.
2. Stop for approval again.

If the user manually edits a document:

1. Read the edited document.
2. Use it as the current source of truth.
