import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-[var(--reset-radius-lg)] border border-[var(--reset-gray-100)] bg-[var(--reset-white)]",
        "shadow-[var(--reset-shadow-1)]",
        hover && "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--reset-shadow-hover)] hover:border-[var(--reset-gray-400)]/30",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}


