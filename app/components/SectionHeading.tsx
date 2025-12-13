import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  right,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="text-[12px] font-medium tracking-[0.18em] text-[var(--reset-gray-accent)]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-[28px] font-[300] leading-[1.15] tracking-[-0.02em] text-[var(--reset-charcoal)] sm:text-[34px]">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-[16px] leading-7 text-[var(--reset-gray-700)]">
            {description}
          </p>
        ) : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}


