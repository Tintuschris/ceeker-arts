import { sanityConfig } from "../sanity.config";

type SanityImageSource = {
  asset?: {
    _ref?: string;
    url?: string;
  };
  _ref?: string;
} | string;

/**
 * Build an image URL from a Sanity image source.
 * Handles both direct URLs and asset references.
 */
export function urlForImage(source: SanityImageSource): string {
  if (!source) return "";

  // If it's a plain string URL, return it directly
  if (typeof source === "string") {
    return source;
  }

  // If it has a direct URL, use it
  if (source.asset?.url) {
    return source.asset.url;
  }

  // If it has a _ref, build the CDN URL
  const ref = source.asset?._ref || source._ref;
  if (ref) {
    return buildSanityCdnUrl(ref);
  }

  return "";
}

/**
 * Build a URL from a Sanity asset reference string.
 * Asset refs look like "image-abc123-def-300x200-jpg"
 */
function buildSanityCdnUrl(ref: string): string {
  const { projectId, dataset } = sanityConfig;
  const parts = ref.split("-");
  if (parts.length < 5) return "";

  const id = parts[1];
  const dimensions = parts.slice(2, -1).join("-");
  const format = parts[parts.length - 1];

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
}

/**
 * Get image URL with optional transformations
 */
export function getImageUrl(
  source: SanityImageSource,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "jpg" | "png" | "webp";
  }
): string {
  const baseUrl = urlForImage(source);
  if (!baseUrl || !options) return baseUrl;

  const params = new URLSearchParams();
  if (options.width) params.set("w", String(options.width));
  if (options.height) params.set("h", String(options.height));
  if (options.quality) params.set("q", String(options.quality));
  if (options.format) params.set("fm", options.format);

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
