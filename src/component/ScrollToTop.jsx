import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Always scroll to top
  }, [pathname]); // Run when the route changes

  return null; // No UI
}
