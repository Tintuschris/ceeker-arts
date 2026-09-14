/**
 * Data Fetching Utility
 *
 * Fetches data from Sanity CMS when configured, otherwise uses fallback data.
 */

import { sanityFetch } from "./client";
import {
  ALL_PROJECTS_QUERY,
  FEATURED_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  ALL_ILLUSTRATIONS_QUERY,
  ALL_SERVICES_QUERY,
  ALL_CLIENTS_QUERY,
  ABOUT_QUERY,
  SITE_SETTINGS_QUERY,
} from "../queries";
import {
  fallbackProjects,
  fallbackIllustrations,
  fallbackServices,
  fallbackClients,
  fallbackAbout,
} from "./fallback";

// ═══════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════

export type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  year: string;
  description: string;
  services: string[];
  tools: string[];
  coverImage?: { asset: { url: string } } | string;
  images?: Array<{ asset: { url: string } } | string>;
  featured: boolean;
};

export type Illustration = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  description?: string;
  primaryImage?: { asset: { url: string } } | string;
  secondaryImages?: Array<{ asset: { url: string } } | string>;
};

export type Service = {
  _id: string;
  number: string;
  title: string;
  description: string;
  image?: { asset: { url: string } } | string;
  deliverables: string[];
};

export type Client = {
  _id: string;
  name: string;
  quote: string;
  role: string;
  logo?: { asset: { url: string } } | string;
};

export type About = {
  _id: string;
  headline: string;
  bio: string[];
  skills: string[];
  experience: number;
  projectsCompleted: number;
  portrait?: { asset: { url: string } } | string;
  logo?: { asset: { url: string } } | string;
};

export type SiteSettings = {
  _id: string;
  siteTitle: string;
  tagline: string;
  email: string;
  location: string;
  socialLinks: Array<{ platform: string; url: string }>;
  navItems: Array<{ label: string; href: string }>;
};

// Check if Sanity is configured
function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}

// ═══════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════

export async function getProjects(): Promise<Project[]> {
  if (!isSanityConfigured()) return fallbackProjects;
  try {
    const projects = await sanityFetch<Project[]>(ALL_PROJECTS_QUERY);
    return projects && projects.length > 0 ? projects : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!isSanityConfigured()) return fallbackProjects.filter((p) => p.featured);
  try {
    const projects = await sanityFetch<Project[]>(FEATURED_PROJECTS_QUERY);
    return projects && projects.length > 0 ? projects : fallbackProjects.filter((p) => p.featured);
  } catch {
    return fallbackProjects.filter((p) => p.featured);
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isSanityConfigured()) {
    return fallbackProjects.find((p) => p.slug.current === slug) ?? null;
  }
  try {
    const project = await sanityFetch<Project>(PROJECT_BY_SLUG_QUERY, { slug });
    return project ?? fallbackProjects.find((p) => p.slug.current === slug) ?? null;
  } catch {
    return fallbackProjects.find((p) => p.slug.current === slug) ?? null;
  }
}

// ═══════════════════════════════════════════
// ILLUSTRATIONS
// ═══════════════════════════════════════════

export async function getIllustrations(): Promise<Illustration[]> {
  if (!isSanityConfigured()) return fallbackIllustrations;
  try {
    const items = await sanityFetch<Illustration[]>(ALL_ILLUSTRATIONS_QUERY);
    return items && items.length > 0 ? items : fallbackIllustrations;
  } catch {
    return fallbackIllustrations;
  }
}

// ═══════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════

export async function getServices(): Promise<Service[]> {
  if (!isSanityConfigured()) return fallbackServices;
  try {
    const services = await sanityFetch<Service[]>(ALL_SERVICES_QUERY);
    return services && services.length > 0 ? services : fallbackServices;
  } catch {
    return fallbackServices;
  }
}

// ═══════════════════════════════════════════
// CLIENTS
// ═══════════════════════════════════════════

export async function getClients(): Promise<Client[]> {
  if (!isSanityConfigured()) return fallbackClients;
  try {
    const clients = await sanityFetch<Client[]>(ALL_CLIENTS_QUERY);
    return clients && clients.length > 0 ? clients : fallbackClients;
  } catch {
    return fallbackClients;
  }
}

// ═══════════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════════

export async function getAbout(): Promise<About> {
  if (!isSanityConfigured()) return fallbackAbout;
  try {
    const about = await sanityFetch<About>(ABOUT_QUERY);
    return about ?? fallbackAbout;
  } catch {
    return fallbackAbout;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const fallback: SiteSettings = {
    _id: "site-settings",
    siteTitle: "Ceeker Arts",
    tagline: "Freelance web designer, illustrator & creative director",
    email: "hello@ceekerarts.com",
    location: "Lagos, Nigeria",
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "Behance", url: "#" },
      { platform: "Dribbble", url: "#" },
    ],
    navItems: [
      { label: "Design", href: "/projects" },
      { label: "Illustration", href: "/illustration" },
      { label: "About Me", href: "/about" },
    ],
  };

  if (!isSanityConfigured()) return fallback;
  try {
    const settings = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);
    return settings ?? fallback;
  } catch {
    return fallback;
  }
}
