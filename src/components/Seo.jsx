import { useEffect } from "react";

const SITE_URL = "https://lckbudigandaki.org.np";
const SITE_NAME = "Leo Club of Kathmandu Budigandaki";

function setMeta(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

/**
 * Sets the per-route title, meta description, canonical link, and Open
 * Graph / Twitter description by updating the tags already present in
 * index.html in place — rather than inserting new ones — so there is
 * always exactly one of each in the document (no duplicate <title>/
 * <meta name="description"> fighting over which one browsers or search
 * crawlers pick up).
 *
 * This only affects what real browsers and JS-executing crawlers (e.g.
 * Googlebot) see after the app mounts. Non-JS link-preview scrapers
 * (WhatsApp, Slack, etc.) never run the app at all, so they still see
 * the static defaults baked into index.html on every route — an
 * inherent limitation of a client-only SPA without a prerender/SSR step.
 */
export default function Seo({ title, description, path = "" }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    document.title = fullTitle;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [title, description, path]);

  return null;
}
