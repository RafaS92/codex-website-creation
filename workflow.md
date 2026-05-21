# Website Creation Workflow

This workflow defines how a website project moves from a client questionnaire to a Codex-built website.

The process is intentionally sequential. Each agent produces a structured output, the user reviews and approves that output, and only then does the next agent receive it as input.

## Workflow Overview

1. Client submits a questionnaire.
2. `agents/discovery_strategy_agent.md` reviews the questionnaire and creates a Client Discovery Summary.
3. User reviews and approves the Client Discovery Summary.
4. `agents/ui_strategy_agent.md` receives the approved discovery output and creates a UI/UX Strategy Summary.
5. User reviews and approves the UI/UX Strategy Summary.
6. `agents/codex_handoff_agent.md` receives the approved discovery and UI/UX outputs and creates a Codex Technical Implementation Handoff.
7. User reviews and approves the Codex handoff.
8. Codex starts building the website code from the approved handoff.

## Stage 1: Questionnaire Intake

### Input

The workflow begins when the user submits a completed website questionnaire.

The questionnaire may include:

- business information
- services or products
- target audience
- website goals
- desired pages or sections
- branding notes
- visual references
- competitor links
- inspiration websites
- images or asset notes
- contact or booking details

### Output

The raw questionnaire becomes the input for the Discovery Strategy Agent.

No code should be created during this stage.

## Stage 2: Discovery Strategy Agent

### Agent

`agents/discovery_strategy_agent.md`

### Trigger

This agent is triggered first after the questionnaire is submitted.

### Input

- raw questionnaire answers
- any client notes
- any reference links or assets provided by the user

### Output

The agent must create a `Client Discovery Summary`.

This output should clarify:

- what the business does
- who the website is for
- what the website should achieve
- what pages or sections are likely needed
- what brand personality and website vibe make sense
- what content and assets are available
- what assumptions need user confirmation

### Approval Gate

The user must review and approve the Client Discovery Summary before the workflow continues.

If the user requests changes, revise the discovery output first. Do not move to the UI/UX Strategy Agent until the user approves the discovery output.

## Stage 3: UI/UX Strategy Agent

### Agent

`agents/ui_strategy_agent.md`

### Trigger

This agent is triggered only after the user approves the Client Discovery Summary.

### Input

- approved Client Discovery Summary
- original questionnaire if needed for context
- visual references or inspiration links
- any user feedback from the discovery review

### Output

The agent must create a `UI/UX Strategy Summary`.

This output should define:

- overall UX direction
- visual style direction
- navigation strategy
- recommended website structure
- page-by-page UX breakdown
- responsive UX considerations
- interaction and animation direction
- reusable UI components or sections
- one-page or multi-page architecture recommendation

### Approval Gate

The user must review and approve the UI/UX Strategy Summary before the workflow continues.

If the user requests changes, revise the UI/UX output first. Do not move to the Codex Handoff Agent until the user approves the UI/UX strategy.

## Stage 4: Codex Handoff Agent

### Agent

`agents/codex_handoff_agent.md`

### Trigger

This agent is triggered only after the user approves the UI/UX Strategy Summary.

### Input

- approved Client Discovery Summary
- approved UI/UX Strategy Summary
- original questionnaire if needed for context
- any final user notes before implementation

### Output

The agent must create a `Codex Technical Implementation Handoff`.

This output should define:

- technical stack
- project folder structure
- page and routing structure
- component breakdown
- section breakdown
- SCSS architecture
- responsive implementation rules
- animation implementation rules
- accessibility requirements
- implementation checklist

### Approval Gate

The user must review and approve the Codex Technical Implementation Handoff before Codex starts writing code.

If the user requests changes, revise the handoff first. Do not start implementation until the handoff is approved.

## Stage 5: Codex Website Build

### Trigger

Codex starts building only after the user approves the Codex Technical Implementation Handoff.

### Input

- approved Codex Technical Implementation Handoff
- approved UI/UX Strategy Summary
- approved Client Discovery Summary
- project assets, references, and content provided by the user

### Implementation Rules

Codex should:

- create the website inside `website-projects/`
- follow the approved technical handoff
- use the specified stack unless the user approves a change
- keep the structure clean and component-based
- follow the responsive and accessibility requirements
- run available checks before final delivery
- ask for approval before making major scope or design changes

## Human Review Rules

Each stage requires explicit user approval before continuing.

Approved outputs become the source of truth for the next stage.

If an earlier strategy changes after approval, all later outputs affected by that change should be reviewed and updated.

## Recommended Project Output Location

New website builds should be created under:

```text
website-projects/
```

Each website should have its own folder:

```text
website-projects/project-name/
```

## Agent Chain

```text
Questionnaire
  -> Discovery Strategy Agent
  -> User Approval
  -> UI/UX Strategy Agent
  -> User Approval
  -> Codex Handoff Agent
  -> User Approval
  -> Codex Website Build
```
