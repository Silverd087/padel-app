"use client";

import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

export const useScrollToHash = () => {
  const router = useRouter();

  const scrollToElement = useCallback((hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && window.location.pathname === "/") {
      // First scroll to top instantly
      window.scrollTo({ top: 0, behavior: "instant" });

      // Then smoothly scroll to the target with a moderate delay
      setTimeout(() => {
        scrollToElement(hash);
      }, 500);
    }
  }, [scrollToElement]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    const targetPath = "/";

    if (currentPath !== targetPath) {
      router.push(targetPath);
      // First scroll to top instantly
      window.scrollTo({ top: 0, behavior: "instant" });

      // Then smoothly scroll to the target with a moderate delay
      setTimeout(() => {
        scrollToElement(hash);
      }, 500);
    } else {
      scrollToElement(hash);
    }
  };

  return { handleClick };
};
