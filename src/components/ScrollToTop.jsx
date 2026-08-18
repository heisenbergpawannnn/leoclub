import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation, so without this,
// clicking an internal link while scrolled down (e.g. a footer link) leaves
// the new page scrolled to the same spot instead of starting at the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
