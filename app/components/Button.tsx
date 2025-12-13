import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

function classesFor(variant: Variant, size: Size) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--reset-radius-md)] px-5 font-medium transition-colors focus-visible:outline-none";
  const sizing = size === "lg" ? "h-12 text-[15px]" : "h-10 text-[14px]";
  const variants: Record<Variant, string> = {
    primary:
      "bg-[var(--reset-black)] text-[var(--reset-white)] hover:bg-[#101010]",
    secondary:
      "bg-transparent text-[var(--reset-charcoal)] border border-[var(--reset-gray-100)] hover:bg-[rgba(0,0,0,0.03)]",
    ghost:
      "bg-transparent text-[var(--reset-gray-700)] hover:bg-[rgba(0,0,0,0.03)]",
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


