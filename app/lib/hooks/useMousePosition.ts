"use client";
import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState(() => {
    if (typeof window === "undefined") {
      return { x: 0, y: 0 };
    }

    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  });

  useEffect(() => {
    let rafId: number | null = null;
    let nextX = window.innerWidth / 2;
    let nextY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;

      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        setPosition({ x: nextX, y: nextY });
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return position;
}
