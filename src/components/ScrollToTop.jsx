import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll on navigation, so without this a link
// clicked while scrolled down lands on the new page still scrolled down.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
