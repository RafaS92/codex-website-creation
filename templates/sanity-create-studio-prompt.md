Use Sanity for this project.

Please do the full setup from scratch:
1. Check Sanity MCP access and list my projects/orgs.
2. If I already have a Sanity project, ask me for the project ID and dataset. If not, create one with Sanity MCP.
3. Create a local `studio/` folder for Sanity Studio source.
4. Add the schema types I need.
5. Deploy the schema.
6. Deploy the hosted Sanity Studio.
7. Add CORS for my local dev URL.
8. Install `@sanity/client` in the frontend.
9. Add `.env.example` with the Sanity project variables.
10. Add a Sanity client file in the app.
11. Connect only the requested frontend page/component to Sanity.
12. Add loading, empty, and error states.
13. Run the build and verify in browser.
14. Clean generated files so only source/config files remain uncommitted.

For this feature, the content type is:
[describe fields here]

// EXAMPLE:
Content type: Event
Fields:
- startsAt: datetime, required
- titleEn: string, required
- titleTh: string, required
- descriptionEn: text, required
- descriptionTh: text, required

Frontend:
- Only `/events` should use Sanity.
- Fetch published events sorted by startsAt ascending.
- Show date/time, title, and description.
- Use English or Thai fields depending on the site language toggle.