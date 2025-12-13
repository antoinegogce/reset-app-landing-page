import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "success" | "danger";
  className?: string;
}) {
  const tones: Record<typeof tone, string> = {
    neutral:
      "bg-[var(--reset-gray-100)] text-[var(--reset-gray-accent)] border border-[rgba(0,0,0,0.04)]",
    success:
      "bg-[rgba(76,175,80,0.10)] text-[var(--reset-green)] border border-[rgba(76,175,80,0.18)]",
    danger:
      "bg-[rgba(229,57,53,0.10)] text-[var(--reset-red)] border border-[rgba(229,57,53,0.18)]",
  };

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium",
        tones[tone],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}


