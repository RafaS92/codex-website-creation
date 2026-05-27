# Codex Website Creation Workflow Prompt

Use this prompt when you want Codex to run the website workflow from scratch or continue an existing website workflow.

Copy the full prompt below into Codex and replace the placeholder values.

```text
Run the named workflow: website_creation_workflow.

Project name:
[PROJECT_NAME]

Workflow rules:
- Read and follow workflow.md.
- Use the agent files in agents/.
- Use Stitch MCP only after I confirm the Google Stitch design is ready.
- Save all workflow outputs as editable markdown documents inside:
  website-projects/[PROJECT_NAME]/documents/
- Treat manually edited documents as the source of truth.
- Run only one stage at a time.
- Stop after each stage and wait for my explicit approval.
- Do not continue to the next agent until I approve the current output.
- Do not start building code until I approve the Codex Technical Implementation Handoff.

Project input:
[PASTE QUESTIONNAIRE, CLIENT NOTES, OR RAW PROJECT DETAILS HERE]

References:
[PASTE LINKS HERE, IF ANY]

Attachments:
I may attach images, screenshots, logos, moodboards, or other visual references in this message.
Use them as context for the relevant workflow stage.

Start or continue logic:
- If this is a new project, create:
  website-projects/[PROJECT_NAME]/documents/00-questionnaire.md
  from the project input, then run agents/discovery_strategy_agent.md.
- Save the Discovery output to:
  website-projects/[PROJECT_NAME]/documents/01-client-discovery-summary.md
- Stop and ask me to review/approve.

- If 01-client-discovery-summary.md already exists and I say Approved, stop the workflow so I can create the design in Google Stitch.
- Do not create a UI/UX strategy summary.
- When I come back and confirm the Google Stitch design is ready, use Stitch MCP to find this project and design.
- Create or update the standard Stitch design document at:
  website-projects/[PROJECT_NAME]/documents/02-design.md
- Stop and ask me to review/approve the design document.

- If 02-design.md already exists and I say Approved, run agents/codex_handoff_agent.md using:
  website-projects/[PROJECT_NAME]/documents/00-questionnaire.md
  website-projects/[PROJECT_NAME]/documents/01-client-discovery-summary.md
  website-projects/[PROJECT_NAME]/documents/02-design.md
- Save the handoff output to:
  website-projects/[PROJECT_NAME]/documents/03-codex-technical-handoff.md
- Stop and ask me to review/approve.

- If 03-codex-technical-handoff.md already exists and I say Approved, build the website inside:
  website-projects/[PROJECT_NAME]/
- Use the approved handoff as the main source of truth.
- After implementation, use the global senior frontend QA skill before finalizing the build summary:
  /Users/athenanexis/.codex/skills/senior-frontend-qa/SKILL.md
- Save a build summary to:
  website-projects/[PROJECT_NAME]/documents/04-build-summary.md

Revision rules:
- If I give revision notes before approval, update the current stage document.
- If I manually edit a document, read the edited document before continuing.
- If I change an earlier approved document, update later documents before building.

Current request:
[START NEW WORKFLOW / CONTINUE FROM APPROVAL / REVISE CURRENT STAGE]
```
