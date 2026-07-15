# Video Guide: From Client Questionnaire to Finished Website

## Video Goal

Show that this project is a repeatable, approval-gated workflow that can turn raw client information into a designed, coded, and quality-checked website.

The main message of the video should be:

> This is not a single prompt that generates a random website. It is a structured website-creation workflow in which every stage produces an editable document, requires approval, and becomes the source of truth for the next stage.

Recommended video length: **8–12 minutes**.

## Before Recording

Prepare the following so the demo stays fast and clear:

1. Open this repository in Codex or your editor.
2. Have these files ready in separate tabs:
   - `README.md`
   - `workflow.md`
   - `templates/codex-website-workflow-prompt.md`
   - `questionnaries/nongnapat-portfolio-questionnaire.md`
   - `agents/discovery_strategy_agent.md`
   - `agents/codex_handoff_agent.md`
3. Choose a short demo project name, such as `nongnapat-portfolio`.
4. Have the Google Stitch project or screen exports ready if you want to demonstrate the design-to-code stages live.
5. For a smoother video, run the complete workflow once before recording and keep the generated documents available. You can still recreate the first stage live, then show the prepared later stages rather than waiting for every generation step.
6. Hide notifications, API keys, private client information, and unrelated browser tabs.
7. Increase the editor and terminal font size so filenames and document headings are readable in the recording.

## Video Structure and Script

### 1. Hook: Show the Final Result First — 0:00–0:30

**Show:**

- The finished website in a browser.
- Quickly scroll through the homepage and one or two additional pages.
- Resize the browser to show that the website is responsive.

**Say:**

> What if a client questionnaire could become a complete website through one controlled workflow? This project takes raw business information through discovery, design, technical planning, implementation, and quality assurance. The important part is that a human approves every stage before the workflow continues.

### 2. Explain the Problem — 0:30–1:10

**Show:**

- The repository root.
- Open `workflow.md` and briefly highlight **Core Rules** and **Stage Order**.

**Say:**

> Generating a page from one large prompt can be fast, but it can also lose business context, invent design decisions, or produce code before the requirements are settled. This workflow separates those responsibilities. Each stage creates an editable Markdown artifact, stops for review, and only continues after approval.

> That gives us traceability. We can see where every business, design, and implementation decision came from, and the client or developer can edit the documents at any point.

### 3. Show the Workflow at a Glance — 1:10–1:50

**Show:**

Scroll through the four stages in `workflow.md`:

1. Discovery
2. Google Stitch Design
3. Codex Handoff
4. Website Build and QA

Also show the expected document folder:

```text
website-projects/project-name/
  documents/
    00-questionnaire.md
    01-client-discovery-summary.md
    02-design.md
    03-codex-technical-handoff.md
    04-build-summary.md
```

**Say:**

> The workflow has four main stages. Raw client input becomes a discovery strategy. An approved strategy goes into Google Stitch for the visual design. The approved design becomes a technical handoff for Codex. Only then does Codex build and quality-check the website.

> These numbered documents form a chain of source-of-truth artifacts. The website is not created from memory or from an ambiguous conversation; it is created from reviewed inputs.

### 4. Start a Real Project — 1:50–3:10

**Show:**

- Open `questionnaries/nongnapat-portfolio-questionnaire.md`.
- Point out the raw details: services, ideal audience, website goals, and calls to action.
- Open `templates/codex-website-workflow-prompt.md`.
- Copy the template into Codex, replace `[PROJECT_NAME]`, insert the questionnaire content, and set the current request to `START NEW WORKFLOW`.

Use this shorter command on screen if the full template was already supplied to Codex:

```text
Run the named workflow: website_creation_workflow.

Project name: nongnapat-portfolio

Read and follow workflow.md and the agent files in agents/.
Use questionnaries/nongnapat-portfolio-questionnaire.md as the project input.
Start a new workflow, run only the Discovery stage, save its documents,
and stop for my approval.
```

**Say:**

> I will use the included Nongnapat Neuman questionnaire as a real example. It contains useful information, but it is still raw client input rather than a website specification.

> I start the named workflow and give it a project name. The workflow saves the original input as document zero, runs only the Discovery agent, and then stops. It is not allowed to jump directly into code.

### 5. Review the Discovery Output — 3:10–4:10

**Show:**

- Open `website-projects/nongnapat-portfolio/documents/01-client-discovery-summary.md`.
- Highlight the project overview, audience, goals, visual direction, sitemap, and key messages.
- Make a small edit in the Markdown file if useful, demonstrating that it is editable.
- Return to Codex and type an approval only after the document looks correct.

```text
Approved. Continue website_creation_workflow.
```

**Say:**

> The Discovery agent does more than reformat the answers. It interprets the business, identifies the target audience, recommends the website structure, organizes content, and clearly labels assumptions.

> This Markdown file is intentionally editable. If I change it manually, the workflow must reread the latest version and treat my edit as the new source of truth. When I approve it, the workflow stops so I can create the visual design in Google Stitch.

### 6. Move Through Google Stitch — 4:10–5:30

**Show:**

- The approved discovery summary beside Google Stitch.
- The project screens in Stitch: desktop and mobile if available.
- Back in Codex, confirm that the design is ready.

```text
The Google Stitch design for nongnapat-portfolio is ready.
Continue website_creation_workflow and create the design document.
```

- Then show `02-design.md` and the `documents/stitch/` folder.
- Highlight `Stitch Fidelity Source Status`.

**Say:**

> Google Stitch is the visual design step. Once the screens are ready, Codex uses the Stitch integration to collect implementation-relevant material such as screen previews, generated markup, layout structure, and design tokens. Those references are saved with the project instead of being reduced to a vague description like “modern and calm.”

> The workflow also has a fidelity gate. If it only has colors, fonts, metadata, or screen IDs, it marks the design as `DESIGN_SYSTEM_ONLY_BLOCKED` and refuses to continue. It needs actual screen-level evidence, either from the integration or from user-provided exports. This protects the final build from guessing the layout.

> Once the design document accurately represents the approved screens, I approve this stage as well.

### 7. Generate the Technical Handoff — 5:30–6:30

**Show:**

- Type the continuation command after approving `02-design.md`.
- Open `03-codex-technical-handoff.md`.
- Highlight the stack, routes, folder structure, reusable components, responsive rules, accessibility requirements, animations, and implementation checklist.

**Say:**

> The Codex Handoff agent translates the approved strategy and design into a build-ready technical blueprint. By default, the workflow targets React, Vite, SCSS, component-based architecture, subtle AOS animations, and rem units.

> The handoff maps pages and sections back to the Stitch screen references. It also defines component boundaries, routing, responsive behavior, accessibility, and visual-fidelity checks. It does not redesign the website; it explains how to implement the approved design.

> This is the final approval gate before source code is created.

### 8. Build the Website — 6:30–8:00

**Show:**

- Approve the technical handoff with:

```text
Approved. Continue website_creation_workflow.
```

- Show Codex creating the application inside `website-projects/nongnapat-portfolio/`.
- Briefly show the component and SCSS structure.
- Run the application and open it in the browser.
- Navigate between pages, test the mobile menu, interact with forms or accordions, and resize the viewport.
- Show `04-build-summary.md` at the end.

**Say:**

> Only after the technical handoff is approved does Codex build the website. It uses the approved discovery, design, and handoff documents as its source of truth.

> After implementation, the workflow runs frontend quality assurance. It checks functionality, responsive behavior, accessibility, maintainability, production readiness, and—most importantly—visual fidelity against the saved Stitch screens. The final build summary records what was created and what was verified.

### 9. Explain Revision and Control — 8:00–8:40

**Show:**

- Return to `workflow.md` and highlight **Trigger Behavior** or the revision rules.
- Optionally edit one requirement in an earlier document and show how it can be sent back through the relevant later stages.

**Say:**

> The workflow is designed for iteration. If a stage needs changes, I give revision notes and it updates that stage without moving forward. If I manually edit an approved document, the later documents must use the edited version. This makes the process useful for real client review rather than only for a perfect one-shot demo.

### 10. Closing — 8:40–9:10

**Show:**

- The finished website beside the five numbered documents.
- End on the live homepage.

**Say:**

> This project turns website creation into a repeatable pipeline: discover, design, plan, build, and verify. AI handles the transformation between stages, while editable artifacts and human approvals keep the result intentional. The outcome is not merely generated code—it is a website with a documented path from the client’s original goals to the final implementation.

## Key Points to Emphasize

- The workflow creates **complete websites**, not only mockups or isolated components.
- It begins with real client information and preserves that context throughout the build.
- Every stage produces an editable Markdown document.
- The workflow runs one stage at a time and waits for explicit approval.
- Google Stitch supplies the visual direction, but screen-level design data is required before implementation.
- The technical handoff converts design decisions into precise engineering tasks.
- The build includes responsive behavior, accessibility, code organization, and visual QA.
- A user can revise documents between stages without restarting the entire process.

## Recording Tips

- Keep generated waiting time out of the final edit unless you are explaining what Codex is doing.
- Use zooms or highlights around filenames and approval commands.
- Do not spend too long reading documents line by line; show the headings and explain why each artifact matters.
- Keep the finished website visible early and return to it at the end. This makes the transformation easy to understand.
- When showing the Stitch fidelity gate, explain it in plain language: **the workflow will not build from colors and fonts alone; it needs the actual screens**.
- If a live integration fails, switch to prepared outputs and explain what the expected stage produces. A smooth narrative is more valuable than waiting on screen.

## Optional Short Version for Social Media — 60–90 Seconds

**0–10 seconds — Hook**

> This website started as a client questionnaire, and a controlled AI workflow turned it into this finished result.

**10–25 seconds — Discovery**

> First, the workflow interprets the business, audience, content, goals, and sitemap. It saves everything in an editable document and waits for approval.

**25–40 seconds — Design**

> Next, the approved strategy becomes a visual design in Google Stitch. The workflow requires actual screen-level references, so it does not guess the layout from a few colors and fonts.

**40–55 seconds — Handoff**

> Then a technical agent converts the approved design into routes, components, responsive rules, accessibility requirements, and a build checklist.

**55–75 seconds — Build**

> After the final approval, Codex builds the responsive website and checks it against the design with frontend QA.

**75–90 seconds — Close**

> The result is a repeatable website factory with human approval at every important decision—not a one-shot prompt.
