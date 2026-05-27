# Website Creation Workflow

Workflow name: `website_creation_workflow`

Use this workflow when the user asks Codex to create a website through an approval-gated agent process.

## Core Rules

- Run one stage at a time.
- Stop after each stage and wait for explicit user approval.
- Save every stage output as an editable markdown document.
- Read the latest saved documents before continuing, because the user may edit them manually.
- Use user-provided links, screenshots, attached images, assets, and notes as context.
- Use the Stitch MCP only after the user confirms the Google Stitch design is ready.
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
    design.md
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

### 2. Google Stitch Design

Trigger this only after `01-client-discovery-summary.md` is approved.

At this point, stop the Codex workflow so the user can create the design in Google Stitch.

When the user comes back and confirms the Google Stitch design is ready:

1. Use the Stitch MCP to find the matching project and design.
2. Read the Stitch project/design details through the MCP.
3. Create or update the standard Stitch design document at:

```text
website-projects/project-name/documents/design.md
```

The `design.md` file should be the source-of-truth design artifact produced from Google Stitch. It should capture the screens, layout, visual system, components, typography, colors, spacing, imagery, interactions, responsive notes, and implementation-relevant design details available from Stitch.

Stop after creating or updating `design.md`. Wait for design approval.

### 3. Codex Handoff

Agent:

```text
agents/codex_handoff_agent.md
```

Input:

```text
website-projects/project-name/documents/00-questionnaire.md
website-projects/project-name/documents/01-client-discovery-summary.md
website-projects/project-name/documents/design.md
```

Output:

```text
website-projects/project-name/documents/03-codex-technical-handoff.md
```

Stop after creating or updating the output. Wait for approval.

### 4. Website Build

Trigger this only after `03-codex-technical-handoff.md` is approved.

Build the website inside:

```text
website-projects/project-name/
```

Use these approved documents as source of truth:

```text
website-projects/project-name/documents/01-client-discovery-summary.md
website-projects/project-name/documents/design.md
website-projects/project-name/documents/03-codex-technical-handoff.md
```

Required QA skill for this stage:

```text
/Users/athenanexis/.codex/skills/senior-frontend-qa/SKILL.md
```

After implementation, use `senior-frontend-qa` to check functionality, code quality, UI accuracy, responsive behavior, accessibility, performance, maintainability, and production readiness before finalizing the build summary.

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
2. If Discovery was just approved and `design.md` does not exist, stop and ask the user to create the design in Google Stitch.
3. If the user confirms the Google Stitch design is ready, use Stitch MCP to create or update `design.md`.
4. If `design.md` exists and is approved, run the Codex Handoff stage.
5. Continue to the next incomplete stage.
6. Stop after that stage.

If the user gives revision notes before approval:

1. Update the current stage document.
2. Stop for approval again.

If the user manually edits a document:

1. Read the edited document.
2. Use it as the current source of truth.
