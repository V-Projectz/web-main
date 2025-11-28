"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    // When page loads with a hash
    const scrollToHash = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToHash();

    // Listen for hash changes (when clicking links)
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null; // Nothing to render
}