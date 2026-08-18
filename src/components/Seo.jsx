import { useEffect } from "react";

const SITE_URL = "https://lckbudigandaki.org.np";
const SITE_NAME = "Leo Club of Kathmandu Budigandaki";

function setMeta(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

// Updates the title/description/canonical/OG tags already in index.html
// in place for the current route. Only affects JS-executing clients —
// non-JS scrapers (WhatsApp, Slack, etc.) still see the static defaults.
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
