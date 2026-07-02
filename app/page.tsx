import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Shield, Zap, Globe, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Username Generator — Free & Instant",
  description: "Generate 20 unique usernames instantly. Free username generator for Instagram, TikTok, gaming, Discord, Gmail, and any platform. No sign-up required.",
  alternates: { canonical: "https://usernamegen.online" },
};

const STYLE_CARDS = [
  { label: "Gaming",       sub: "Epic gamertags",      emoji: "🎮", href: "/gaming-username-generator",    bg: "linear-gradient(135deg,#0d1a2e,#1a3a5c)", accent: "#4a9fd4" },
  { label: "Aesthetic",    sub: "Soft, dreamy names",  emoji: "🌸", href: "/aesthetic-username-generator", bg: "linear-gradient(135deg,#2d1a3e,#5c3a7a)", accent: "#c084fc" },
  { label: "Cute",         sub: "Adorable handles",    emoji: "🐾", href: "/cute-username-generator",      bg: "linear-gradient(135deg,#3e1a2a,#7a3a5c)", accent: "#f9a8d4" },
  { label: "Goth / Dark",  sub: "Mysterious vibes",    emoji: "🖤", href: "/goth-username-generator",      bg: "linear-gradient(135deg,#1a1a1a,#2e2e2e)", accent: "#9ca3af" },
  { label: "Professional", sub: "Clean and credible",  emoji: "💼", href: "/email-username-generator",     bg: "linear-gradient(135deg,#0d2e1a,#1a5c3a)", accent: "#6ee7b7" },
  { label: "Random",       sub: "Surprise me",         emoji: "🎲", href: "/random-username-generator",    bg: "linear-gradient(135deg,#2e2a0d,#5c520d)", accent: "#fcd34d" },
];

const PLATFORM_PAGES = [
  { label: "Instagram",  href: "/instagram-username-generator",  emoji: "📸" },
  { label: "TikTok",     href: "/tiktok-username-generator",     emoji: "🎵" },
  { label: "Discord",    href: "/discord-username-generator",    emoji: "💬" },
  { label: "Xbox",       href: "/xbox-username-generator",       emoji: "🕹️" },
  { label: "Roblox",     href: "/roblox-username-generator",     emoji: "🧱" },
  { label: "Gmail",      href: "/gmail-username-generator",      emoji: "📬" },
  { label: "Email",      href: "/email-username-generator",      emoji: "✉️" },
  { label: "Aesthetic",  href: "/aesthetic-username-generator",  emoji: "🌸" },
  { label: "Cute",       href: "/cute-username-generator",       emoji: "🐾" },
  { label: "Goth",       href: "/goth-username-generator",       emoji: "🖤" },
];

const TIPS = [
  { icon: "🎯", title: "Keep it short and memorable",     body: "The best usernames are under 15 characters. Short handles are easier to tag, type, and remember. Aim for something people recall after seeing it once." },
  { icon: "🔐", title: "Never use personal information",   body: "Avoid your real name, birth year, or location. Automated tools cross-reference usernames across platforms — personal details make this trivial." },
  { icon: "🌐", title: "Use the same handle everywhere",   body: "Consistency across Instagram, TikTok, and Twitter builds brand recognition. Check availability on all platforms before committing." },
  { icon: "🔢", title: "Add numbers thoughtfully",         body: "If your preferred name is taken, add meaningful numbers rather than random ones. Avoid birth years — they date your account." },
  { icon: "✨", title: "Match the platform culture",       body: "Gaming platforms favour bold, edgy names. Instagram rewards aesthetic handles. Professional platforms prefer real names." },
  { icon: "🔄", title: "Think long-term",                  body: "Avoid trendy references that may feel dated in two years. Choose something timeless — or at least something you will not cringe at later." },
];

const FAQS = [
  { q: "How does the username generator work?",           a: "Our generator combines AI and a curated word bank to produce unique username ideas based on your keyword and chosen style. Enter a name or interest, select a style, and click Generate. You get 20 fresh ideas instantly — no sign-up required." },
  { q: "Are the generated usernames available?",          a: "No tool can guarantee real-time availability across every platform. However, clicking the platform initial (I, T, X) next to any result opens that platform so you can verify instantly." },
  { q: "Can I use this for Instagram, TikTok, and Discord?", a: "Yes. The tool works for any platform. We also have dedicated generators for Instagram, TikTok, Discord, Xbox, Roblox, Gmail, and more — each tuned to that platform's rules and culture." },
  { q: "What makes a good username?",                    a: "Short (under 15 characters), memorable, easy to spell, and free of personal information. It should reflect your personality without being tied to a trend that ages poorly." },
  { q: "Is the username generator free?",                a: "Yes, completely free with no usage limits. Generate as many ideas as you like with no account required." },
  { q: "What is Leet style?",                            a: "Leet replaces letters with similar-looking characters — 'a' becomes '@', 'e' becomes '3', 'o' becomes '0'. Enable it in Advanced options." },
  { q: "How do I check if a username is available?",     a: "Click the platform initials (I for Instagram, T for TikTok, X for Twitter) next to any result. This opens that platform's page for that username so you can check immediately." },
  { q: "Should I use the same username everywhere?",     a: "For personal branding, yes — consistency helps people find you. For privacy-focused accounts, different usernames per platform prevent cross-platform tracking." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "UserNameGen", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online", description: "Free username generator for Instagram, TikTok, gaming, and more.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg,#f0f9f9 0%,#e0f2f2 60%,#f8fafa 100%)" }}>
        <div className="absolute top-[-80px] right-[-60px] w-56 h-56 rounded-full opacity-10" style={{ background: "#0d7a7b" }} />
        <div className="absolute bottom-[-40px] left-[5%] w-36 h-36 rounded-full opacity-6" style={{ background: "#0d7a7b" }} />

        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: "#0d7a7b", color: "#fff" }}>
            <Zap size={12} /> Free · Instant · No sign-up
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-night leading-[1.05] tracking-tight mb-3">
            Find your perfect<br />
            <span style={{ color: "#0d7a7b" }}>username</span>
          </h1>
          <p className="text-sm md:text-lg mb-8 max-w-xl" style={{ color: "#4a6060" }}>
            20 unique ideas for Instagram, TikTok, gaming, Discord, Gmail, and any platform — in seconds.
          </p>
          <UsernameGenerator />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">

        {/* ── AFFILIATE ── */}
        <AffiliateCard />

        {/* ── STYLE CARDS ── */}
        <section id="styles" className="section-gap">
          <h2 className="text-xl md:text-2xl font-black mb-1" style={{ color: "#0d1a1a" }}>Find your style</h2>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>Pick a style and get username ideas tailored to that vibe.</p>
          {/* Mobile: 2 col grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STYLE_CARDS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="style-card relative rounded-2xl p-4 md:p-5 overflow-hidden flex flex-col justify-between"
                style={{ background: c.bg, minHeight: "100px" }}
              >
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">{c.label}</p>
                  <p className="text-xs hidden sm:block" style={{ color: "rgba(255,255,255,0.55)" }}>{c.sub}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: c.accent }}>
                    Generate <ChevronRight size={11} />
                  </span>
                  <span className="text-xl md:text-2xl opacity-40">{c.emoji}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── PLATFORMS ── */}
        <section id="platforms" className="section-gap">
          <h2 className="text-xl md:text-2xl font-black mb-1" style={{ color: "#0d1a1a" }}>By platform</h2>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>Each platform has its own rules and culture. Use a dedicated generator for better results.</p>
          {/* Mobile: 2 col */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {PLATFORM_PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white rounded-xl p-3 md:p-4 text-center transition-all"
                style={{ border: "1px solid rgba(13,122,123,0.15)", minHeight: "auto" }}
              >
                <div className="text-xl md:text-2xl mb-1">{p.emoji}</div>
                <div className="text-xs font-semibold" style={{ color: "#0d1a1a" }}>{p.label}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHAT IS ── */}
        <section className="section-gap">
          <h2 className="text-xl md:text-2xl font-black mb-3" style={{ color: "#0d1a1a" }}>What is a username generator?</h2>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#4a6060" }}>
            <p>A username generator creates unique handles for social media accounts, gaming profiles, email addresses, and any platform that requires a unique identifier. Instead of spending hours brainstorming — only to find every good name is taken — a generator produces dozens of creative ideas in seconds.</p>
            <p>UserNameGen uses AI combined with a curated word bank to generate usernames that match your style, interests, and platform. Select a style, optionally enter a keyword, and the tool handles the rest. Every result is pronounceable, memorable, and ready to check on your platform of choice.</p>
            <p>According to <a href="https://datareportal.com/reports/digital-2024-global-overview-report" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color: "#0d7a7b" }}>DataReportal's 2024 Digital Report</a>, there are over 5 billion social media users worldwide — meaning most common name combinations are already taken on major platforms. A generator gives you a practical shortcut past this problem.</p>
          </div>
        </section>

        {/* ── WHY IT MATTERS ── */}
        <section className="section-gap">
          <h2 className="text-xl md:text-2xl font-black mb-5" style={{ color: "#0d1a1a" }}>Why your username matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: <Star size={18} className="text-amber-500" />, title: "It shapes your online identity",    body: "Your username is the first thing people see. A memorable handle builds recognition and helps followers find you across platforms." },
              { icon: <Shield size={18} style={{ color: "#0d7a7b" }} />, title: "Random names protect your privacy", body: "Using the same personal username everywhere lets tools link your accounts. A unique handle per platform limits this exposure." },
              { icon: <Globe size={18} className="text-green-500" />, title: "Consistency builds authority",      body: "Creators with matching handles across platforms rank better in platform search and appear more credible to new followers." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-4 md:p-5" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="mb-2">{c.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#0d1a1a" }}>{c.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4a6060" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPS ── */}
        <section className="section-gap">
          <h2 className="text-xl md:text-2xl font-black mb-5" style={{ color: "#0d1a1a" }}>6 tips for a great username</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIPS.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex gap-3" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <span className="text-xl shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: "#0d1a1a" }}>{t.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#4a6060" }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Guide CTA */}
          <div className="mt-4">
            <Link href="/blog/how-to-come-up-with-a-username" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#0d7a7b", minHeight: "auto" }}>
              Read the full username guide <ChevronRight size={14} />
            </Link>
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section className="section-gap">
          <h2 className="text-xl md:text-2xl font-black mb-5" style={{ color: "#0d1a1a" }}>How to use the generator</h2>
          <div className="space-y-3">
            {[
              { n:"1", title: "Enter a keyword (optional)", body: "Type your name, a hobby, or a theme. Leave it blank for completely random results." },
              { n:"2", title: "Choose a style",             body: "Select Gaming, Aesthetic, Professional, Cute, or Random for a varied mix." },
              { n:"3", title: "Click Generate",             body: "Get 20 unique username ideas instantly. Hit Refresh for a new batch anytime." },
              { n:"4", title: "Copy and check availability", body: "Click Copy on any name, then click the platform initials to verify availability on Instagram, TikTok, Twitter, and more." },
            ].map((s) => (
              <div key={s.n} className="flex gap-3 md:gap-4 bg-white rounded-xl p-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 text-white" style={{ background: "#0d7a7b" }}>{s.n}</div>
                <div>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: "#0d1a1a" }}>{s.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#4a6060" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-gap mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-black mb-5" style={{ color: "#0d1a1a" }}>Frequently asked questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <summary className="flex items-center justify-between px-4 py-4 cursor-pointer text-sm font-semibold select-none list-none" style={{ color: "#0d1a1a", minHeight: "52px" }}>
                  <span className="pr-3">{faq.q}</span>
                  <ChevronRight size={16} className="shrink-0 group-open:rotate-90 transition-transform" style={{ color: "#9ca3af" }} />
                </summary>
                <div className="px-4 pb-4 text-sm leading-relaxed" style={{ borderTop: "1px solid rgba(13,122,123,0.08)", color: "#4a6060" }}>
                  <p className="pt-3">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
