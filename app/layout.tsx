import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://usernamegen.online"),
  title: { default: "Username Generator — Free & Instant | UserNameGen", template: "%s | UserNameGen" },
  description: "Generate unique, creative usernames for Instagram, TikTok, gaming, Discord, and more. Free username generator — 20 ideas in seconds.",
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-touch-icon.svg" },
  openGraph: { type: "website", siteName: "UserNameGen", locale: "en_US", images: [{ url: "/og-image.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="9" fill="#0d1a1a" />
      <text x="18" y="27" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="24" fontWeight="900" fill="#0d7a7b">@</text>
    </svg>
  );
}

const NAV_PLATFORMS = [
  { label: "Instagram", href: "/instagram-username-generator" },
  { label: "TikTok",    href: "/tiktok-username-generator" },
  { label: "Discord",   href: "/discord-username-generator" },
  { label: "Xbox",      href: "/xbox-username-generator" },
  { label: "Roblox",   href: "/roblox-username-generator" },
  { label: "Gmail",    href: "/gmail-username-generator" },
];

const NAV_STYLES = [
  { label: "Aesthetic", href: "/aesthetic-username-generator" },
  { label: "Gaming",    href: "/gaming-username-generator" },
  { label: "Cute",      href: "/cute-username-generator" },
  { label: "Goth",      href: "/goth-username-generator" },
  { label: "Random",    href: "/random-username-generator" },
  { label: "Email",     href: "/email-username-generator" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KWXFCWKK1W" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-KWXFCWKK1W');
        `}</Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white">

        {/* ── Header ── */}
        <header className="bg-white sticky top-0 z-50" style={{ borderBottom: "1px solid rgba(13,122,123,0.12)" }}>
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 min-h-0" style={{ minHeight: "auto" }}>
              <LogoMark size={28} />
              <span className="font-extrabold text-base tracking-tight">
                <span style={{ color: "#0d1a1a" }}>User</span>
                <span style={{ color: "#0d7a7b" }}>NameGen</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-5 text-sm font-medium" style={{ color: "#4a6060", minHeight: "auto" }}>
              <Link href="/#platforms" className="hover:text-teal transition-colors min-h-0" style={{ minHeight: "auto" }}>Platforms</Link>
              <Link href="/#styles"    className="hover:text-teal transition-colors min-h-0" style={{ minHeight: "auto" }}>Styles</Link>
              <Link href="/blog/how-to-come-up-with-a-username" className="hover:text-teal transition-colors min-h-0" style={{ minHeight: "auto" }}>Guide</Link>
              <Link href="/about"      className="hover:text-teal transition-colors min-h-0" style={{ minHeight: "auto" }}>About</Link>
            </nav>

            {/* Mobile hamburger */}
            <MobileNav platforms={NAV_PLATFORMS} styles={NAV_STYLES} />
          </div>
          <div className="h-0.5" style={{ background: "#0d7a7b" }} />
        </header>

        <main className="flex-1">{children}</main>

        {/* ── Footer ── */}
        <footer style={{ background: "#0d1a1a" }} className="mt-16 md:mt-20">
          <div className="max-w-5xl mx-auto px-4 py-10 md:py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mb-8">
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 mb-3" style={{ minHeight: "auto" }}>
                  <LogoMark size={22} />
                  <span className="font-extrabold text-sm text-white">User<span style={{ color: "#0d7a7b" }}>NameGen</span></span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  Free username generator for social media, gaming, email, and every platform.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>Platforms</p>
                <ul className="space-y-2">
                  {NAV_PLATFORMS.map((l) => (
                    <li key={l.href}><Link href={l.href} className="text-sm" style={{ color: "#9ca3af", minHeight: "auto" }}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>Styles</p>
                <ul className="space-y-2">
                  {NAV_STYLES.map((l) => (
                    <li key={l.href}><Link href={l.href} className="text-sm" style={{ color: "#9ca3af", minHeight: "auto" }}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>Info</p>
                <ul className="space-y-2">
                  {[
                    ["Username Guide", "/blog/how-to-come-up-with-a-username"],
                    ["Privacy Policy", "/privacy"],
                    ["About",          "/about"],
                    ["Contact",        "/contact"],
                  ].map(([label, href]) => (
                    <li key={href}><Link href={href} className="text-sm" style={{ color: "#9ca3af", minHeight: "auto" }}>{label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: "rgba(255,255,255,0.08)", color: "#6b7280" }}>
              <p>© {new Date().getFullYear()} UserNameGen. All rights reserved.</p>
              <p>Some links are affiliate links. We may earn a small commission.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
