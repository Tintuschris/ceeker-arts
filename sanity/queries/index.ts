/**
 * GROQ Queries for Ceeker Arts
 *
 * These queries fetch data from Sanity CMS.
 * Each query is typed with the expected return type.
 */

// ═══════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════

export const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(year desc) {
  _id,
  title,
  slug,
  category,
  year,
  description,
  services,
  tools,
  coverImage{..., asset->{url}},
  images[]{..., asset->{url}},
  featured
}`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(year desc) [0...4] {
  _id,
  title,
  slug,
  category,
  year,
  coverImage{..., asset->{url}}
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  year,
  description,
  services,
  tools,
  coverImage{..., asset->{url}},
  images[]{..., asset->{url}},
  featured
}`;

export const PROJECT_SLUGS_QUERY = `*[_type == "project"] {
  "slug": slug.current
}`;

// ═══════════════════════════════════════════
// ILLUSTRATIONS
// ═══════════════════════════════════════════

export const ALL_ILLUSTRATIONS_QUERY = `*[_type == "illustration"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  category,
  description,
  primaryImage{..., asset->{url}},
  secondaryImages[]{..., asset->{url}}
}`;

export const ILLUSTRATION_BY_SLUG_QUERY = `*[_type == "illustration" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  primaryImage{..., asset->{url}},
  secondaryImages[]{..., asset->{url}}
}`;

// ═══════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════

export const ALL_SERVICES_QUERY = `*[_type == "service"] | order(number asc) {
  _id,
  number,
  title,
  description,
  image{..., asset->{url}},
  deliverables
}`;

// ═══════════════════════════════════════════
// CLIENTS
// ═══════════════════════════════════════════

export const ALL_CLIENTS_QUERY = `*[_type == "client"] | order(order asc) {
  _id,
  name,
  logo{..., asset->{url}},
  quote,
  role
}`;

// ═══════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════

export const ABOUT_QUERY = `*[_type == "about"][0] {
  _id,
  portrait{..., asset->{url}},
  logo{..., asset->{url}},
  headline,
  bio,
  skills,
  experience,
  projectsCompleted
}`;

// ═══════════════════════════════════════════
// SITE SETTINGS
// ═══════════════════════════════════════════

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  siteTitle,
  tagline,
  email,
  location,
  socialLinks[]{platform, url},
  navItems
}`;
