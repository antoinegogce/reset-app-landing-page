import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[var(--reset-radius-lg)] border border-[var(--reset-gray-100)] bg-[var(--reset-white)]",
        "shadow-[var(--reset-shadow-1)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}


