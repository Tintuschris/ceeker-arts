/**
 * Site Settings Schema for Sanity Studio
 *
 * Global site configuration (navbar, footer, social links).
 * Only one document should exist for this type.
 */

export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      initialValue: "Ceeker Arts",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Freelance web designer, illustrator & creative director",
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Lagos, Nigeria",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
    },
    {
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "Link", type: "string" },
          ],
        },
      ],
      initialValue: [
        { label: "Design", href: "/projects" },
        { label: "Illustration", href: "/illustration" },
        { label: "About Me", href: "/about" },
      ],
    },
  ],
  preview: {
    select: { title: "siteTitle" },
  },
};
