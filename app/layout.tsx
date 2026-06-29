import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://usernamegen.online"),
  title: {
    default: "Username Generator — Free & Instant | UserNameGen",
    template: "%s | UserNameGen",
  },
  description:
    "Generate unique, creative usernames for Instagram, TikTok, gaming, Discord, and more. Free username generator — 20 ideas in seconds.",
  keywords: ["username generator", "random username generator", "instagram username generator", "gaming username generator"],
  openGraph: { type: "website", siteName: "UserNameGen", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

/* ── @ Logo mark as inline SVG component ── */
function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="9" fill="#0d1a1a" />
      <text
        x="18" y="26"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="900"
        fill="#0d7a7b"
      >
        @
      </text>
    </svg>
  );
}

const PLATFORM_LINKS = [
  { label: "Instagram", href: "/instagram-username-generator" },
  { label: "TikTok",    href: "/tiktok-username-generator" },
  { label: "Discord",   href: "/discord-username-generator" },
  { label: "Xbox",      href: "/xbox-username-generator" },
  { label: "Roblox",    href: "/roblox-username-generator" },
];

const STYLE_LINKS = [
  { label: "Aesthetic",     href: "/aesthetic-username-generator" },
  { label: "Gaming",        href: "/gaming-username-generator" },
  { label: "Cute",          href: "/cute-username-generator" },
  { label: "Goth",          href: "/goth-username-generator" },
  { label: "Random",        href: "/random-username-generator" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Inline SVG favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Crect width='36' height='36' rx='9' fill='%230d1a1a'/%3E%3Ctext x='18' y='26' text-anchor='middle' font-family='Inter,sans-serif' font-size='22' font-weight='900' fill='%230d7a7b'%40%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">

        {/* ── Navigation ── */}
        <header className="bg-white border-b border-teal/20 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <LogoMark size={28} />
              <span className="font-extrabold text-base tracking-tight">
                <span className="text-night">User</span>
                <span className="text-teal">NameGen</span>
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
              <Link href="/#platforms" className="hover:text-teal transition-colors">Platforms</Link>
              <Link href="/#styles" className="hover:text-teal transition-colors">Styles</Link>
              <Link href="/about" className="hover:text-teal transition-colors">About</Link>
            </nav>
          </div>

          {/* Teal accent line */}
          <div className="h-0.5 bg-teal" />
        </header>

        {/* ── Main ── */}
        <main className="flex-1">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-night text-white mt-20">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">

              {/* Brand col */}
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <LogoMark size={24} />
                  <span className="font-extrabold text-sm tracking-tight">
                    User<span className="text-teal">NameGen</span>
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Free username generator for social media, gaming, and every platform.
                </p>
              </div>

              {/* Platforms */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Platforms</p>
                <ul className="space-y-2">
                  {PLATFORM_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-gray-400 hover:text-teal-light transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Styles */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Styles</p>
                <ul className="space-y-2">
                  {STYLE_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-gray-400 hover:text-teal-light transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</p>
                <ul className="space-y-2">
                  {[
                    ["Privacy Policy", "/privacy"],
                    ["About",          "/about"],
                    ["Contact",        "/contact"],
                    ["Email Generator","/email-username-generator"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-gray-400 hover:text-teal-light transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
              <p>© {new Date().getFullYear()} UserNameGen. All rights reserved.</p>
              <p>Some links are affiliate links. We may earn a small commission.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
