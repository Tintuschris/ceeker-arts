/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Service Schema for Sanity Studio
 *
 * Defines the structure for services offered.
 * Each service has a number, title, description, image, and deliverables.
 */

export const serviceSchema = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "number",
      title: "Number (01, 02, etc.)",
      type: "string",
      validation: (Rule: any) => Rule.required().max(2),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
  ],
  orderings: [
    {
      title: "Number",
      name: "numberAsc",
      by: [{ field: "number", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "number",
      media: "image",
    },
  },
};
