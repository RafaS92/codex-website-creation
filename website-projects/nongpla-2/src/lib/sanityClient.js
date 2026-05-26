import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'he3aee4o';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-05-26';

export const sanityClient =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion,
        useCdn: false,
      })
    : null;

export const EVENTS_QUERY = `*[
  _type == "event"
  && !(_id in path("drafts.**"))
] | order(startsAt asc) {
  _id,
  startsAt,
  titleEn,
  titleTh,
  descriptionEn,
  descriptionTh,
  "imageUrl": image.asset->url
}`;
