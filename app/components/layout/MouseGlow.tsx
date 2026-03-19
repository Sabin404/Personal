"use client";

import { useMousePosition } from "@/app/lib/hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      <div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/25 blur-3xl transition-[left,top] duration-75 ease-out"
        style={{ left: x, top: y }}
      />
      <div
        className="absolute h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-2xl transition-[left,top] duration-75 ease-out"
        style={{ left: x, top: y }}
      />
    </div>
  );
}
