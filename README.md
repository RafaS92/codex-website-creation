# Codex Website Creation

An approval-gated workflow for turning raw client information into a designed, implemented, and quality-checked website with Codex and Google Stitch.

This repository is a **workflow definition and prompt toolkit**, not a standalone application or npm package. It contains the instructions, specialized agent roles, reusable prompts, and example input needed to guide Codex through a repeatable website-production process.

## What This Repository Does

The workflow transforms a questionnaire, discovery notes, reference links, screenshots, and brand assets into a complete website through five controlled stages:

1. **Discovery** — interprets the client's business, audience, goals, content, and brand direction.
2. **Google Stitch Prompt Kit** — creates one project-specific master brief, three visually distinct complete-website prompts, and a neutral comparison checklist.
3. **Google Stitch Design** — explores the directions in separate Stitch branches, selects one, and verifies that screen-level implementation references are available.
4. **Codex Technical Handoff** — translates the strategy and approved design into a frontend implementation blueprint.
5. **Website Build and QA** — creates the website, verifies it against the approved design, and records the result.

The process intentionally stops after each stage. A person must review and explicitly approve the current artifact before Codex may continue.

## Why Use an Approval-Gated Workflow?

A one-shot website prompt can mix business strategy, visual design, architecture, and implementation into one uncontrolled generation. This repository separates those responsibilities and creates an editable source of truth at every step.

The workflow provides:

- Human review before important decisions become code
- Traceability from the original questionnaire to the final build
- Editable Markdown deliverables instead of hidden conversational context
- Dedicated strategy and technical-planning agent instructions
- A visual-fidelity gate that prevents implementation from incomplete design data
- Support for revisions without restarting the entire project
- A final frontend QA and build-summary stage

## Workflow Overview

```text
Client questionnaire and references
                │
                ▼
      01. Discovery summary
                │
          Human approval
                │
                ▼
      Stitch prompt kit
       A / B / C prompts
                │
          Human approval
                │
                ▼
 Google Stitch design branches
        A / B / C comparison
                │
 Choose and refine one design
                │
                ▼
  02. Final design document
                │
     Fidelity check + approval
                │
                ▼
    03. Codex technical handoff
                │
          Human approval
                │
                ▼
      Website implementation
                │
                ▼
       Frontend QA and visual QA
                │
                ▼
        04. Build summary
```

The complete workflow contract is defined in [`workflow.md`](workflow.md).

## Repository Structure

```text
.
├── README.md
├── workflow.md
├── video.md
├── agents/
│   ├── discovery_strategy_agent.md
│   ├── stitch_directions_agent.md
│   └── codex_handoff_agent.md
├── templates/
│   ├── codex-website-workflow-prompt.md
│   └── sanity-create-studio-prompt.md
└── questionnaries/
    └── nongnapat-portfolio-questionnaire.md
```

### Important Files

| File | Purpose |
| --- | --- |
| [`workflow.md`](workflow.md) | Defines stage order, approval rules, required artifacts, Stitch fidelity statuses, and continuation behavior. |
| [`agents/discovery_strategy_agent.md`](agents/discovery_strategy_agent.md) | Instructs the Discovery agent to turn raw client answers into an actionable website strategy. |
| [`agents/stitch_directions_agent.md`](agents/stitch_directions_agent.md) | Creates a reusable project-specific master brief, three copy-ready visual direction prompts, and a comparison checklist. |
| [`agents/codex_handoff_agent.md`](agents/codex_handoff_agent.md) | Instructs the Handoff agent to convert approved discovery and design material into a technical implementation plan. |
| [`templates/codex-website-workflow-prompt.md`](templates/codex-website-workflow-prompt.md) | Reusable prompt for starting, continuing, or revising a website workflow. |
| [`templates/sanity-create-studio-prompt.md`](templates/sanity-create-studio-prompt.md) | Optional prompt for adding a Sanity Studio and connecting selected frontend content. |
| [`questionnaries/nongnapat-portfolio-questionnaire.md`](questionnaries/nongnapat-portfolio-questionnaire.md) | Example client questionnaire that can be used to test or demonstrate the workflow. |
| [`video.md`](video.md) | Recording plan and script for demonstrating the repository. |

> The `questionnaries` directory name is retained as it currently exists in the repository. Use that spelling when referencing its files.

## Requirements

Before running the complete workflow, you need:

- **Codex** with access to this repository
- **Google Stitch** for the visual design stage
- **Stitch MCP access** if Codex will retrieve project and screen information directly
- A globally available **senior frontend QA skill** for the build stage, or an equivalent QA process configured for your environment
- Client input such as a questionnaire, project notes, content, links, logos, screenshots, or moodboards

The workflow currently references this QA skill path:

```text
/Users/athenanexis/.codex/skills/senior-frontend-qa/SKILL.md
```

That path is environment-specific. Update it in `workflow.md` and the workflow prompt template if your skill is installed elsewhere.

No dependencies need to be installed to use the repository itself. The generated website may have its own package-manager and runtime requirements, based on the approved technical handoff.

## Quick Start

### 1. Prepare the Client Input

Collect the available project information. Useful inputs include:

- Business name and description
- Services or products
- Target audience
- Website goals and primary calls to action
- Brand personality and desired visual mood
- Required pages and content
- Competitor or inspiration links
- Logos, photos, screenshots, and other brand assets

You can use [`questionnaries/nongnapat-portfolio-questionnaire.md`](questionnaries/nongnapat-portfolio-questionnaire.md) as an example.

### 2. Start the Workflow in Codex

Copy [`templates/codex-website-workflow-prompt.md`](templates/codex-website-workflow-prompt.md) into Codex and replace its placeholders.

At minimum, provide:

```text
Run the named workflow: website_creation_workflow.

Project name:
[PROJECT_NAME]

Project input:
[QUESTIONNAIRE, NOTES, OR RAW PROJECT DETAILS]

Current request:
START NEW WORKFLOW
```

Codex should then:

1. Read `workflow.md` and the relevant agent instructions.
2. Create the project document directory.
3. Save the raw input as `00-questionnaire.md`.
4. Generate `01-client-discovery-summary.md`.
5. Stop and request approval.

### 3. Review Each Stage

Read the generated Markdown document. You can either approve it or request changes.

To approve and move to the next eligible stage:

```text
Approved. Continue website_creation_workflow.
```

To request a revision:

```text
Revise the current stage with these changes:
- [CHANGE ONE]
- [CHANGE TWO]

Do not continue to the next stage.
```

You may also edit the generated Markdown file directly. The workflow requires Codex to reread the saved file and treat its latest contents as the source of truth.

### 4. Create the Google Stitch Design

After the Discovery document is approved, Codex generates the Stitch prompt kit under `documents/stitch-prompts/` and pauses for review. The kit is generated from the current project's discovery summary, so the workflow works for different clients without embedding a specific business or visual style.

After the prompt kit is approved, create one Stitch project and run Directions A, B, and C in separate agent threads or branches. Generate the same complete desktop and mobile page set for each direction, compare them, choose one, and make any corrections directly in Google Stitch until one final design remains.

When the design is ready, tell Codex:

```text
The final corrected Google Stitch design for [PROJECT_NAME] is ready.
Continue website_creation_workflow and create the design document.
```

Codex should use the Stitch integration to collect all available implementation references, save exports under `documents/stitch/`, and create `02-design.md`.

All downstream stages use `02-design.md` as the single final visual source of truth.

### 5. Approve the Handoff and Build

After `02-design.md` passes its fidelity check and is approved, Codex generates `03-codex-technical-handoff.md`. Review and approve that document before allowing implementation.

Once the handoff is approved, Codex builds the application inside the project directory, performs QA, and creates `04-build-summary.md`.

## Generated Project Structure

For a project named `project-name`, the workflow creates the following structure:

```text
website-projects/project-name/
├── documents/
│   ├── 00-questionnaire.md
│   ├── 01-client-discovery-summary.md
│   ├── stitch-prompts/
│   │   ├── 00-master-brief.md
│   │   ├── 01-direction-a.md
│   │   ├── 02-direction-b.md
│   │   ├── 03-direction-c.md
│   │   └── 04-comparison-checklist.md
│   ├── 02-design.md
│   ├── 03-codex-technical-handoff.md
│   ├── 04-build-summary.md
│   └── stitch/
│       ├── screenshots and previews
│       ├── generated markup or code
│       └── structured screen exports
└── generated website source code
```

### Document Responsibilities

#### `00-questionnaire.md`

Preserves the original project input. It may contain structured questionnaire answers, informal notes, supplied content, and references.

#### `01-client-discovery-summary.md`

Defines the strategic foundation of the website, including:

- Business and service understanding
- Target audience and audience needs
- Website goals and calls to action
- Brand personality and desired experience
- Reference-site insights
- Recommended sitemap
- Content inventory and key messages
- Clearly labeled assumptions

#### `02-design.md`

Acts as the source of truth for the approved Google Stitch design. It should capture:

- Available screens and variants
- Page and section layouts
- Component patterns
- Typography, color, and spacing
- Images and other visual assets
- Interactions and responsive behavior
- Links to or names of saved Stitch references
- The required Stitch fidelity status

#### `03-codex-technical-handoff.md`

Turns the approved strategy and design into an implementation blueprint. By default, it plans for React, Vite, SCSS, AOS, rem-based sizing, and a component-based architecture unless the project specifies otherwise.

It defines routes, folders, reusable components, page sections, responsive behavior, animation rules, accessibility requirements, and a final implementation checklist.

#### `04-build-summary.md`

Records the completed implementation, relevant verification, frontend QA findings, and visual-fidelity checks against the approved Stitch references.

## Stitch Fidelity Gate

The workflow must not build a website from design-system tokens alone. Colors, fonts, project metadata, broad descriptions, or screen IDs do not provide enough information to reproduce an approved interface accurately.

Every `02-design.md` must include one of these statuses:

| Status | Meaning | May continue? |
| --- | --- | --- |
| `SCREEN_LEVEL_READY` | Stitch provides enough screenshots, rendered previews, generated code, or structured layout data to reproduce the screens. | Yes |
| `USER_EXPORT_READY` | The user supplied adequate screen-level screenshots, code, or exports outside the integration. | Yes |
| `DESIGN_SYSTEM_ONLY_BLOCKED` | Only tokens, metadata, general descriptions, or screen IDs are available. | No |

When the project is blocked, provide screen screenshots, generated HTML/code, or other screen-level exports and save them under `documents/stitch/`. The Codex Handoff and Website Build stages must not run until the fidelity status is ready.

## Approval and Revision Rules

The workflow follows these rules throughout the project:

- Run exactly one stage at a time.
- Stop after producing or revising a stage artifact.
- Require explicit approval before continuing.
- Reread saved documents before starting the next stage.
- Treat manual document edits as authoritative.
- Do not use Stitch until the user confirms the design is ready.
- Do not create the technical handoff without screen-level design evidence.
- Do not generate website code before the technical handoff is approved.
- If an earlier approved artifact changes, update affected later artifacts before building.

These restrictions are core features of the repository. They keep the generated implementation aligned with reviewed business and design decisions.

## Agent Responsibilities

### Discovery Strategy Agent

The Discovery agent converts incomplete or informal client material into a professional website strategy. It does not write production code or create the final visual design.

Its output should make it easy to understand:

- What the business does
- Who the website serves
- What the website needs to achieve
- Which pages and content are required
- How the experience should feel
- Which assumptions still require confirmation

### Codex Handoff Agent

The Handoff agent creates a technical execution plan from the approved discovery and Stitch design artifacts. It does not redefine the business strategy or redesign approved screens.

Its output should make implementation decisions concrete, including:

- Folder and route structure
- Reusable component boundaries
- Per-page section composition
- SCSS organization
- Responsive rules
- Animation constraints
- Accessibility requirements
- Mapping to desktop and mobile Stitch references
- Build and fidelity checklists

## Default Frontend Conventions

Unless an approved project document specifies otherwise, the technical handoff uses:

- React
- Vite
- SCSS
- AOS for selective scroll animation
- `rem` units
- Mobile-first responsive styles
- Reusable, component-based architecture

The handoff also requires semantic HTML, correct heading order, meaningful alt text, keyboard-accessible controls, visible focus states, form labels, sufficient contrast, and appropriate button/link semantics.

These are defaults rather than limitations. Change them in the agent instructions or explicitly override them in the approved project requirements when another stack is needed.

## Optional Sanity Integration

[`templates/sanity-create-studio-prompt.md`](templates/sanity-create-studio-prompt.md) provides a separate prompt for adding Sanity to a generated website.

It covers:

- Checking or creating a Sanity project
- Creating a local Studio
- Defining and deploying schema types
- Deploying the hosted Studio
- Configuring CORS and environment variables
- Installing and configuring the frontend client
- Connecting only the requested page or component
- Adding loading, empty, and error states
- Building and verifying the integration

Use this prompt only when the generated website requires managed content. It is not an automatic part of the core workflow.

## Customizing the Workflow

### Change the Default Frontend Stack

Edit the **Technical Stack** and related implementation rules in:

```text
agents/codex_handoff_agent.md
```

Keep the prompt, handoff format, and QA expectations consistent with the new stack.

### Add Another Specialist Stage

To add a new stage:

1. Create a focused agent instruction file under `agents/`.
2. Define its inputs and output artifact.
3. Insert it into the stage order in `workflow.md`.
4. Add an approval stop after its output.
5. Update the reusable workflow prompt.
6. Document how later stages consume the new artifact.

### Change the QA Skill

Replace the environment-specific `senior-frontend-qa` path in both:

- `workflow.md`
- `templates/codex-website-workflow-prompt.md`

The replacement should still cover functionality, code quality, responsive behavior, accessibility, performance, maintainability, production readiness, and comparison with saved Stitch references.

## Troubleshooting

### Codex continued without asking for approval

Restate the workflow rule and current stage explicitly:

```text
Read workflow.md. Run only the current stage, save its Markdown output,
and stop for my explicit approval.
```

### The Stitch stage only returned colors and typography

The project should be marked `DESIGN_SYSTEM_ONLY_BLOCKED`. Supply per-screen screenshots, generated code, or structured layout exports. Do not approve a technical handoff based only on design tokens.

### A manual edit was ignored

Ask Codex to reread the exact saved document before continuing:

```text
Reread website-projects/[PROJECT_NAME]/documents/[DOCUMENT].
I edited it manually. Treat the saved file as the current source of truth.
```

### The generated website differs from Stitch

Confirm that screen-level references exist in `documents/stitch/`, then ask Codex to run a visual-fidelity comparison against those exact files. Update the implementation and record the result in `04-build-summary.md`.

### The configured QA skill cannot be found

The repository contains a machine-specific skill path. Install or locate an equivalent frontend QA skill, update both workflow references, and rerun the build QA stage.

## Demonstration Guide

See [`video.md`](video.md) for a complete 8–12 minute demonstration script, suggested screen actions, narration, recording preparation, and a shorter social-media version.

## Current Scope

This repository currently provides the orchestration documents and reusable prompts. It does not include:

- A command-line workflow runner
- An automated state machine
- A bundled Google Stitch integration
- The referenced global frontend QA skill
- A prebuilt production website

Codex interprets and executes the workflow from the repository instructions. Generated website projects are created under `website-projects/` when the workflow is run.

## Contributing

When modifying this repository:

1. Keep `workflow.md` and the reusable workflow prompt synchronized.
2. Preserve one-stage-at-a-time execution and approval gates.
3. Keep agent roles focused and avoid overlapping responsibilities.
4. Document new artifacts and their source-of-truth relationship.
5. Retain the Stitch screen-level fidelity requirement.
6. Update this README when the repository structure or stage behavior changes.

## License

No license file is currently included. Add a license before distributing or accepting external contributions.
