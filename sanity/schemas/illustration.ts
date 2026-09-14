/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Illustration Schema for Sanity Studio
 *
 * Defines the structure for illustration works.
 * Each illustration has a primary image and secondary images for the overlay.
 */

export const illustrationSchema = {
  name: "illustration",
  title: "Illustration",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Editorial", value: "Editorial" },
          { title: "Brand", value: "Brand" },
          { title: "Character", value: "Character" },
          { title: "Iconography", value: "Iconography" },
          { title: "Print", value: "Print" },
          { title: "Digital", value: "Digital" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "primaryImage",
      title: "Primary Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "secondaryImages",
      title: "Secondary Images (shown in overlay)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule: any) => Rule.max(4),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "primaryImage",
    },
  },
};
