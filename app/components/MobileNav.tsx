"use client";

import { useEffect, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

export function MobileNav({
  items,
  ctaHref,
  ctaLabel,
}: {
  items: NavItem[];
  ctaHref: string;
  ctaLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger relative z-[52] flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-[var(--reset-radius-md)] border border-[var(--reset-gray-100)] bg-[var(--reset-white)] md:hidden ${isOpen ? "open" : ""}`}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      {/* Overlay */}
      <div
        className={`mobile-menu-overlay md:hidden ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <nav
        className={`mobile-menu md:hidden ${isOpen ? "open" : ""}`}
        aria-label="Menu mobile"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-[var(--reset-gray-100)] px-6">
            <span className="font-[var(--font-mono)] text-[12px] font-medium tracking-[0.45em] text-[var(--reset-black)]">
              RESET
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--reset-gray-accent)] hover:bg-[rgba(0,0,0,0.05)] hover:text-[var(--reset-black)]"
              aria-label="Fermer le menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li
                  key={item.href}
                  className="animate-slide-in-right opacity-0"
                  style={{ animationDelay: `${index * 50 + 100}ms`, animationFillMode: "forwards" }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 items-center rounded-[var(--reset-radius-md)] px-4 text-[15px] font-medium text-[var(--reset-gray-700)] transition-colors hover:bg-[rgba(0,0,0,0.03)] hover:text-[var(--reset-black)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="border-t border-[var(--reset-gray-100)] p-6">
            <a
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-[var(--reset-radius-md)] bg-[var(--reset-black)] text-[15px] font-medium text-[var(--reset-white)] transition-all hover:bg-[#101010] hover:scale-[1.02] active:scale-[0.98]"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
