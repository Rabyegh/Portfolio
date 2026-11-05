import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId: number | undefined;

    if (hash) {
      timeoutId = window.setTimeout(() => {
        const target = document.querySelector(hash);
        target?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null;
}
