import { sanityConfig } from "../sanity.config";

/**
 * Simple Sanity client using the HTTP API directly.
 * This avoids dependency issues with @sanity/client's rxjs dependency.
 */

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, string>
): Promise<T> {
  const { projectId, dataset, apiVersion, useCdn } = sanityConfig;

  if (!projectId) {
    throw new Error("Sanity project ID not configured");
  }

  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}`;
  const perspective = useCdn ? "published" : "published";

  const searchParams = new URLSearchParams({ query });
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(`$${key}`, JSON.stringify(value));
    });
  }
  searchParams.set("perspective", perspective);

  const response = await fetch(`${url}?${searchParams.toString()}`, {
    next: { revalidate: useCdn ? 60 : 0 },
  });

  if (!response.ok) {
    throw new Error(`Sanity fetch failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result as T;
}

/**
 * Get image URL from Sanity asset reference
 */
export function getSanityImageUrl(assetRef: string): string {
  const { projectId, dataset } = sanityConfig;
  // Asset refs look like "image-abc123-def-300x200-jpg"
  const [, id, dimensions, format] = assetRef.split("-");
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
}
