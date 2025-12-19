"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const HashScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [pathname]);

  return null;
};