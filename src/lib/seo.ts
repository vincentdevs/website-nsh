/**
 * Canonical site URL, used for metadataBase, sitemap.ts and robots.ts.
 * Points at the current GitHub Pages preview. Update this to the final
 * domain (see the SEO audit's action #1) the day the site goes live there,
 * nothing else in the SEO setup needs to change.
 */
export const SITE_URL = "https://vincentdevs.github.io/website-nsh";

/**
 * True while the site lives on the GitHub Pages preview rather than its
 * final domain. Keeps the preview out of Google so it never competes with
 * the real domain once chosen (see the SEO audit, "ce qui compte avant
 * tout le reste"). Set to false the day SITE_URL becomes the final domain.
 */
export const IS_PREVIEW_HOST = true;
