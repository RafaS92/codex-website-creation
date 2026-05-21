# Website Creation Workflow

Workflow name: `website_creation_workflow`

Use this workflow when the user asks Codex to create a website through an approval-gated agent process.

## Core Rules

- Run one stage at a time.
- Stop after each stage and wait for explicit user approval.
- Save every stage output as an editable markdown document.
- Read the latest saved documents before continuing, because the user may edit them manually.
- Use user-provided links, screenshots, attached images, assets, and notes as context.
- Do not build code until the Codex handoff document is approved.

## Project Structure

For a project named `project-name`, use:

```text
website-projects/project-name/
  documents/
    00-questionnaire.md
    01-client-discovery-summary.md
    02-ui-ux-strategy-summary.md
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

### 2. UI/UX Strategy

Agent:

```text
agents/ui_strategy_agent.md
```

Input:

```text
website-projects/project-name/documents/00-questionnaire.md
website-projects/project-name/documents/01-client-discovery-summary.md
```

Also use any visual references, links, screenshots, or attached images provided by the user.

Output:

```text
website-projects/project-name/documents/02-ui-ux-strategy-summary.md
```

Stop after creating or updating the output. Wait for approval.

### 3. Codex Handoff

Agent:

```text
agents/codex_handoff_agent.md
```

Input:

```text
website-projects/project-name/documents/00-questionnaire.md
website-projects/project-name/documents/01-client-discovery-summary.md
website-projects/project-name/documents/02-ui-ux-strategy-summary.md
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
website-projects/project-name/documents/02-ui-ux-strategy-summary.md
website-projects/project-name/documents/03-codex-technical-handoff.md
```

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
2. Continue to the next incomplete stage.
3. Stop after that stage.

If the user gives revision notes before approval:

1. Update the current stage document.
2. Stop for approval again.

If the user manually edits a document:

1. Read the edited document.
2. Use it as the current source of truth.
