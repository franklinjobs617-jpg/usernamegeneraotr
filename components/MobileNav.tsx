"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavItem { label: string; href: string; }

export default function MobileNav({
  platforms,
  styles,
}: {
  platforms: NavItem[];
  styles: NavItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
        style={{ background: open ? "#f0f9f9" : "transparent", minHeight: "auto" }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={20} style={{ color: "#0d7a7b" }} /> : <Menu size={20} style={{ color: "#0d1a1a" }} />}
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="mobile-menu-enter absolute top-[57px] left-0 right-0 bg-white z-40 shadow-lift"
          style={{ borderBottom: "2px solid #0d7a7b" }}
        >
          <div className="max-w-5xl mx-auto px-4 py-5">
            <div className="grid grid-cols-2 gap-6">
              {/* Platforms */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#0d7a7b" }}>
                  Platforms
                </p>
                <ul className="space-y-0.5">
                  {platforms.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-2.5 text-sm font-medium"
                        style={{ color: "#0d1a1a", minHeight: "auto" }}
                      >
                        {item.label}
                        <ChevronRight size={14} style={{ color: "#9ca3af" }} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Styles */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#0d7a7b" }}>
                  Styles
                </p>
                <ul className="space-y-0.5">
                  {styles.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-2.5 text-sm font-medium"
                        style={{ color: "#0d1a1a", minHeight: "auto" }}
                      >
                        {item.label}
                        <ChevronRight size={14} style={{ color: "#9ca3af" }} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Guide link */}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(13,122,123,0.1)" }}>
              <Link
                href="/blog/how-to-come-up-with-a-username"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm font-semibold py-2"
                style={{ color: "#0d7a7b", minHeight: "auto" }}
              >
                ✦ How to come up with a username guide
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
