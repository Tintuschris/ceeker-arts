/**
 * Sanity Configuration
 *
 * To get started:
 * 1. Create a Sanity project at sanity.io/manage
 * 2. Create a .env.local file with:
 *    NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
 *    NEXT_PUBLIC_SANITY_DATASET=production
 *    SANITY_API_READ_TOKEN=your-read-token
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-09-04",
  useCdn: true,
};
