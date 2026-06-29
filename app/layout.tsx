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
    "Generate unique, creative usernames for Instagram, TikTok, gaming, Discord, and more. Free username generator with 20+ ideas in seconds.",
  keywords: [
    "username generator",
    "random username generator",
    "instagram username generator",
    "gaming username generator",
    "free username ideas",
  ],
  openGraph: {
    type: "website",
    siteName: "UserNameGen",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-surface-0">
        {/* Navigation */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 hover:text-brand-600 transition-colors">
              <span className="text-brand-600 text-xl">✦</span>
              <span>UserNameGen</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
              <Link href="/#platforms" className="hover:text-gray-900 transition-colors">Platforms</Link>
              <Link href="/#tips" className="hover:text-gray-900 transition-colors">Tips</Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 font-bold text-gray-900 mb-3">
                  <span className="text-brand-600">✦</span>
                  UserNameGen
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Free username generator for social media, gaming, and more.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Platforms</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    ["Instagram", "/instagram-username-generator"],
                    ["TikTok", "/tiktok-username-generator"],
                    ["Discord", "/discord-username-generator"],
                    ["Xbox", "/xbox-username-generator"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="hover:text-brand-600 transition-colors">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Styles</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    ["Aesthetic", "/aesthetic-username-generator"],
                    ["Gaming", "/gaming-username-generator"],
                    ["Cute", "/cute-username-generator"],
                    ["Random", "/random-username-generator"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="hover:text-brand-600 transition-colors">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Legal</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/privacy" className="hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/about" className="hover:text-brand-600 transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-600 transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
              <p>© {new Date().getFullYear()} UserNameGen. All rights reserved.</p>
              <p>
                * Some links on this site are affiliate links. We may earn a small commission.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
