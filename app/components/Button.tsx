import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "md" | "lg";

function classesFor(variant: Variant, size: Size) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--reset-radius-md)] px-5 font-medium transition-all duration-200 focus-visible:outline-none";
  const sizing = size === "lg" ? "h-12 text-[15px]" : "h-10 text-[14px]";
  const variants: Record<Variant, string> = {
    primary:
      "bg-[var(--reset-encre)] text-[var(--reset-creme)] hover:bg-[#1d2733] hover:scale-[1.02] active:scale-[0.98] shadow-sm",
    accent:
      "bg-[var(--reset-accent)] text-[var(--reset-creme)] hover:bg-[#25588a] hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(45,107,168,0.25)]",
    secondary:
      "bg-transparent text-[var(--reset-charcoal)] border border-[var(--reset-gray-100)] hover:bg-[rgba(35,46,60,0.04)] hover:border-[var(--reset-gray-400)]",
    ghost:
      "bg-transparent text-[var(--reset-gray-700)] hover:bg-[rgba(35,46,60,0.04)]",
  };
  return `${base} ${sizing} ${variants[variant]}`;
}

export function Button({
  variant = "primary",
  size = "lg",
  className = "",
  href,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
}) {
  const cls = `${classesFor(variant, size)} ${className}`;

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}


