# Video Script: I Built a Website with an Approval-Gated AI Workflow

**Target length:** 9–11 minutes  
**Format:** Outcome first, high-level workflow second, developer breakdown third  
**Primary message:** I can create a complete website with AI without relying on a single uncontrolled prompt. The workflow preserves context, requires approval at each stage, and gives developers clear implementation artifacts.

## Recording Setup

Have these ready before recording:

- The finished website, already running in a browser
- Desktop and mobile views of the finished website
- This repository open in Codex or an editor
- `workflow.md`
- `questionnaries/nongnapat-portfolio-questionnaire.md`
- A completed project's `documents/` folder
- The Google Stitch desktop and mobile screens or exports
- The finished source code and `04-build-summary.md`

Replace `[PROJECT_NAME]`, `[WEBSITE DESCRIPTION]`, and any bracketed demo notes before recording.

---

## Part One: Show What I Created

### 0:00–0:35 — Cold Open: The Finished Website

**On screen**

- Start immediately on the finished homepage. Do not show the editor yet.
- Slowly scroll through the strongest sections.
- Navigate to one or two other pages.
- Resize the browser or switch to a mobile viewport.
- Show one interaction, such as the mobile menu, an accordion, or a form.

**Narration**

> I created this website from a client questionnaire using a structured AI workflow.
>
> It is a complete, responsive website—not just a mockup or a generated hero section. The workflow helped me turn the client's raw information into a strategy, a visual design, a technical plan, and finally this working build.
>
> Let me show you how I did it, and then I will open up the workflow for developers who want to see how it actually works.

### 0:35–1:10 — Establish the Result

**On screen**

- Keep the website visible.
- Point out two or three features that matter to this specific project.
- Briefly show desktop and mobile side by side if possible.

**Narration**

> The goal for this project was to create [WEBSITE DESCRIPTION]. The final site includes [KEY PAGE OR FEATURE], [KEY PAGE OR FEATURE], and [KEY INTERACTION].
>
> It adapts across screen sizes, the navigation and interactions work, and the visual implementation follows the approved design. What matters here is not only the result. It is the repeatable path that produced it.

> Instead of asking AI to make every business, design, and engineering decision at once, I separated the work into stages.

---

## Part Two: The Workflow at a High Level

### 1:10–1:40 — The Simple Version

**On screen**

- Show a simple graphic or the workflow overview in `README.md`.
- Highlight each stage as it is named.

```text
Questionnaire → Discovery → Design → Technical handoff → Build and QA
```

**Narration**

> At a high level, the process is simple.
>
> I begin with a questionnaire. The workflow turns that into a discovery strategy. I approve the strategy and use it to create the visual direction in Google Stitch. That approved design becomes a technical handoff. After one final approval, Codex builds and quality-checks the website.

### 1:40–2:20 — Why the Approval Gates Matter

**On screen**

- Open a completed project's `documents/` folder.
- Reveal the files in order:

```text
00-questionnaire.md
01-client-discovery-summary.md
02-design.md
03-codex-technical-handoff.md
04-build-summary.md
```

**Narration**

> Every stage creates an editable Markdown document, and the workflow stops for my approval before it continues.
>
> These files are the project's chain of truth. If I edit one, the next stage must read the saved version. That means important decisions do not disappear inside a long chat, and I can correct the direction before a mistake becomes code.
>
> This is the main idea behind the project: AI performs the transformation between stages, while a person remains responsible for the decisions.

### 2:20–3:00 — From Raw Client Input to Direction

**On screen**

- Open `questionnaries/nongnapat-portfolio-questionnaire.md` or the questionnaire used for the featured build.
- Briefly highlight the services, audience, business goals, desired feeling, and call to action.
- Switch to `01-client-discovery-summary.md`.
- Highlight its overview, audience, goals, sitemap, content direction, and assumptions.

**Narration**

> This is where the project starts: raw client information. It may contain useful details, but it is not yet a website specification.
>
> The discovery stage interprets the business, the audience, the site's goals, the primary call to action, the content, and the desired experience. It organizes that into a strategy that both a designer and a developer can use.
>
> I review the output, make any edits I need, and approve it only when it reflects the client's actual intent.

### 3:00–3:45 — From Strategy to Visual Design

**On screen**

- Show the discovery summary beside the Google Stitch project.
- Cycle through the desktop and mobile screens.
- Briefly show the screen exports stored in `documents/stitch/`.
- Open `02-design.md` and highlight `Stitch Fidelity Source Status`.

**Narration**

> The approved strategy then guides the visual design in Google Stitch.
>
> Once the screens are ready, the workflow collects the implementation references: desktop and mobile previews, generated markup when available, layout information, and the visual system.
>
> There is an important safeguard here. The workflow will not build a website from colors and fonts alone. It requires evidence of the actual screens, so the implementation is based on a real layout instead of a vague interpretation of the style.

### 3:45–4:15 — From Design to Working Website

**On screen**

- Flash through `03-codex-technical-handoff.md`.
- Show the source tree.
- Return to the running website.
- Finish on a polished section of the site.

**Narration**

> Next, the approved design becomes a technical implementation plan: routes, components, responsive behavior, accessibility requirements, animation rules, and a build checklist.
>
> Codex builds from those approved documents and then runs frontend and visual QA. That is the high-level workflow that produced the website you are seeing.
>
> If you only wanted the overview, that is the process. From here, I want to go one level deeper and show developers how the workflow is controlled.

---

## Part Three: Developer Breakdown

### 4:15–4:55 — This Repository Is the Workflow Contract

**On screen**

- Open the repository root.
- Point to `workflow.md`, `agents/`, `templates/`, `questionnaries/`, and `website-projects/`.
- Open `workflow.md` and highlight **Core Rules** and **Stage Order**.

**Narration**

> For developers, the key detail is that this repository is not the website framework itself. It is the workflow definition and prompt toolkit.
>
> `workflow.md` acts as the contract. It defines the stage order, the required inputs and outputs, the approval gates, and the conditions that can block the build. The specialized agent files define the responsibilities of discovery and technical planning, while the prompt template starts or resumes the workflow.

### 4:55–5:45 — State Lives in Files, Not Chat Memory

**On screen**

- Show the `documents/` directory again.
- Open two adjacent documents side by side.
- Make or simulate a small manual edit in one of them, but do not save a fake change into the real demo project unless desired.
- Show the continuation command:

```text
Approved. Continue website_creation_workflow.
```

**Narration**

> The workflow's state is represented by files. Each stage reads the latest approved artifacts and writes exactly one new artifact.
>
> The original input is preserved as document zero. Discovery produces document one. Stitch references are summarized in document two. The engineering plan becomes document three, and the completed build is recorded in document four.
>
> Because the files are editable, I can change a requirement outside the conversation. The next stage must reread that file instead of depending on stale chat context. This also makes the work easy to review, diff, and keep with the project.

### 5:45–6:35 — Starting and Resuming the Workflow

**On screen**

- Open `templates/codex-website-workflow-prompt.md`.
- Highlight the project name, project input, workflow rules, and current request.
- Show this shorter demo command on screen:

```text
Run the named workflow: website_creation_workflow.

Project name: [PROJECT_NAME]

Read and follow workflow.md and the agent files in agents/.
Use the supplied questionnaire as project input.
Start a new workflow, run only Discovery, save its documents,
and stop for my approval.
```

**Narration**

> A new run starts with a project name and the raw input. Codex reads the workflow contract, creates the project's document directory, saves the questionnaire, runs Discovery, and stops.
>
> Continuation is intentionally explicit. An approval does not mean “finish everything.” It means “inspect the current state, run the next eligible stage, and stop again.” Revision instructions update the current artifact without silently moving forward.

### 6:35–7:25 — The Stitch Fidelity Gate

**On screen**

- Open the Google Stitch Design section in `workflow.md`.
- Highlight the three allowed statuses:

```text
SCREEN_LEVEL_READY
DESIGN_SYSTEM_ONLY_BLOCKED
USER_EXPORT_READY
```

- Show examples of desktop and mobile PNG or HTML exports in `documents/stitch/`.

**Narration**

> The design stage has a three-state fidelity gate.
>
> `SCREEN_LEVEL_READY` means the integration supplied enough per-screen visual, layout, or code information. `USER_EXPORT_READY` means I supplied equivalent screen exports myself. But if the workflow only has theme tokens, metadata, or screen IDs, the status becomes `DESIGN_SYSTEM_ONLY_BLOCKED`.
>
> In that blocked state, it cannot create the normal engineering handoff and it cannot build. This is a practical guardrail against an easy failure mode: implementing a plausible website that does not actually match the approved design.

### 7:25–8:20 — The Technical Handoff

**On screen**

- Open `agents/codex_handoff_agent.md` and then a completed `03-codex-technical-handoff.md`.
- Highlight:
  - stack
  - folder structure
  - routes
  - component boundaries
  - desktop/mobile screen mappings
  - SCSS organization
  - responsive and accessibility rules
  - build checklist

**Narration**

> When the design passes that gate, the handoff agent translates the approved strategy and screens into engineering tasks. It does not redesign the site and it does not write production code at this stage.
>
> By default, this workflow plans for React, Vite, SCSS, component-based architecture, subtle AOS animation, and rem units. It defines routes, reusable components, style organization, responsive behavior, accessibility requirements, and page-level mappings back to the actual Stitch references.
>
> This separation is useful because the implementation has a reviewable specification before code generation begins.

### 8:20–9:15 — Build and QA

**On screen**

- Show the final approval command.
- Show Codex working through the source tree using prepared footage or a short time-lapse.
- Run the production build or show its successful output.
- Test the site in the browser:
  - navigate between routes
  - test the mobile menu
  - use one interactive component
  - tab through an important flow
  - resize between mobile and desktop
- Open `04-build-summary.md`.

**Narration**

> Code generation is only allowed after the technical handoff is approved. At that point, Codex uses the approved discovery, design, and handoff documents as the source of truth.
>
> After implementation, the workflow performs frontend QA across functionality, responsive behavior, accessibility, code quality, maintainability, performance, and production readiness. It also compares the result with the stored Stitch screens for visual fidelity.
>
> The final build summary records what was implemented, what was tested, and any remaining limitations. The result is not only code—it is code with a documented history and a verification step.

### 9:15–9:50 — Why This Is Useful to Developers

**On screen**

- Show the five documents beside the source tree.
- Optionally show a Git diff of a document revision and its resulting code change.

**Narration**

> For developers, the value is control and traceability. Business interpretation, visual design, architecture, and implementation are separate concerns. Each has an artifact that can be reviewed before the next one begins.
>
> If the client changes the sitemap, the content, or a design decision, I can update the relevant document and regenerate only the affected downstream work instead of restarting from an oversized prompt.

---

## Closing

### 9:50–10:15 — Return to the Outcome

**On screen**

- Return to the finished homepage.
- Slowly scroll to the main call to action.
- End with the website and the workflow documents visible side by side.

**Narration**

> This website began as raw client information and moved through discovery, design, engineering planning, implementation, and QA.
>
> AI accelerated every transition, but the approval gates kept the work intentional. That is how I use this workflow to create complete websites—not with one magic prompt, but with a repeatable process that both clients and developers can inspect.

## Optional Final Call to Action

Choose one line that matches where the video will be published:

> If you want to see me run the workflow on another project, let me know what kind of website I should build next.

> If you are a developer, the repository includes the workflow contract, agent roles, and reusable prompt so you can inspect the complete setup.

> If you need a website built through a clear, reviewable process, get in touch.

## Editing Notes

- Keep the finished website on screen for most of the first minute.
- Label the transition into the developer section with a simple title card: **Developer breakdown**.
- Use prepared outputs rather than leaving generation time in the edit.
- Do not read long documents line by line. Highlight the headings that prove the workflow's behavior.
- Add a small progress label during the overview: **Discover → Design → Plan → Build → Verify**.
- When explaining the fidelity gate, show the actual desktop and mobile screen exports.
- Avoid exposing private client information, API keys, local user paths, or unrelated tabs.
- If the featured project does not yet contain all five numbered documents and a completed build, record those segments using another completed project or finish the workflow before filming.
