/**
 * About Schema for Sanity Studio
 *
 * Defines the structure for the about page content.
 * Only one document should exist for this type.
 */

export const aboutSchema = {
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "portrait",
      title: "Portrait Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "logo",
      title: "Logo (shown on flip)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      initialValue: "You need a designer who gets it",
    },
    {
      name: "bio",
      title: "Bio (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "experience",
      title: "Years of Experience",
      type: "number",
    },
    {
      name: "projectsCompleted",
      title: "Projects Completed",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "headline",
      media: "portrait",
    },
  },
};
