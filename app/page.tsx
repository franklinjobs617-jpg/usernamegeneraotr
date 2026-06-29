import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Shield, Zap, Globe, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Username Generator — Free & Instant",
  description:
    "Generate 20 unique usernames instantly. Free username generator for Instagram, TikTok, gaming, Discord, and any platform. No sign-up required.",
  alternates: { canonical: "https://usernamegen.online" },
};

/* ── Colored style cards (SpinXO-inspired) ── */
const STYLE_CARDS = [
  {
    label: "Gaming",
    sub: "Epic gamertags",
    emoji: "🎮",
    href: "/gaming-username-generator",
    bg: "linear-gradient(135deg, #0d1a2e 0%, #1a3a5c 100%)",
    accent: "#4a9fd4",
  },
  {
    label: "Aesthetic",
    sub: "Soft, dreamy names",
    emoji: "🌸",
    href: "/aesthetic-username-generator",
    bg: "linear-gradient(135deg, #2d1a3e 0%, #5c3a7a 100%)",
    accent: "#c084fc",
  },
  {
    label: "Cute",
    sub: "Adorable handles",
    emoji: "🐾",
    href: "/cute-username-generator",
    bg: "linear-gradient(135deg, #3e1a2a 0%, #7a3a5c 100%)",
    accent: "#f9a8d4",
  },
  {
    label: "Goth / Dark",
    sub: "Mysterious vibes",
    emoji: "🖤",
    href: "/goth-username-generator",
    bg: "linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%)",
    accent: "#9ca3af",
  },
  {
    label: "Professional",
    sub: "Clean and credible",
    emoji: "💼",
    href: "/email-username-generator",
    bg: "linear-gradient(135deg, #0d2e1a 0%, #1a5c3a 100%)",
    accent: "#6ee7b7",
  },
  {
    label: "Random",
    sub: "Surprise me",
    emoji: "🎲",
    href: "/random-username-generator",
    bg: "linear-gradient(135deg, #2e2a0d 0%, #5c520d 100%)",
    accent: "#fcd34d",
  },
];

/* ── Platform pages ── */
const PLATFORM_PAGES = [
  { label: "Instagram",  href: "/instagram-username-generator",  emoji: "📸" },
  { label: "TikTok",     href: "/tiktok-username-generator",     emoji: "🎵" },
  { label: "Discord",    href: "/discord-username-generator",    emoji: "💬" },
  { label: "Xbox",       href: "/xbox-username-generator",       emoji: "🕹️" },
  { label: "Roblox",     href: "/roblox-username-generator",     emoji: "🧱" },
  { label: "Email",      href: "/email-username-generator",      emoji: "✉️" },
  { label: "Random",     href: "/random-username-generator",     emoji: "🎲" },
  { label: "Aesthetic",  href: "/aesthetic-username-generator",  emoji: "🌸" },
  { label: "Cute",       href: "/cute-username-generator",       emoji: "🐾" },
  { label: "Goth",       href: "/goth-username-generator",       emoji: "🖤" },
];

const TIPS = [
  {
    icon: "🎯",
    title: "Keep it short and memorable",
    body: "The best usernames are under 15 characters. Short handles are easier to tag, remember, and type on mobile. Aim for something people can recall after seeing it once.",
  },
  {
    icon: "🔐",
    title: "Never use personal information",
    body: "Avoid your real name, birth year, or location. Hackers use tools to cross-reference usernames across platforms — personal details make this trivial.",
  },
  {
    icon: "🌐",
    title: "Use the same handle everywhere",
    body: "Consistency across Instagram, TikTok, and Twitter builds brand recognition. Check availability on all major platforms before committing.",
  },
  {
    icon: "🔢",
    title: "Add numbers thoughtfully",
    body: "If your preferred name is taken, add meaningful numbers rather than random ones. A favourite number or sequence works better than 12345.",
  },
  {
    icon: "✨",
    title: "Match the platform culture",
    body: "Gaming platforms favour bold, edgy names. Instagram rewards aesthetic, soft handles. Professional platforms prefer real names or clean titles.",
  },
  {
    icon: "🔄",
    title: "Think long-term",
    body: "Avoid trendy words or references that may feel dated in two years. Choose something timeless — or at least something you will not cringe at next year.",
  },
];

const FAQS = [
  {
    q: "How does the username generator work?",
    a: "Our generator combines AI and a curated word bank to produce unique username ideas based on your keyword and chosen style. Enter a name or interest, select a style, and click Generate. You get 20 fresh ideas instantly.",
  },
  {
    q: "Are the generated usernames guaranteed to be available?",
    a: "No generator can guarantee real-time availability across every platform. However, clicking the platform initial next to any result opens that platform so you can check instantly.",
  },
  {
    q: "Can I use this for Instagram, TikTok, and other platforms?",
    a: "Yes. The tool generates usernames suitable for any platform. We also have dedicated generators for Instagram, TikTok, Discord, Xbox, and more — each tuned to that platform's character limits and culture.",
  },
  {
    q: "What makes a good username?",
    a: "A good username is short (under 15 characters), memorable, easy to spell, and free of personal information. It should reflect your personality without being tied to a trend that ages poorly.",
  },
  {
    q: "Is the username generator free?",
    a: "Yes, completely free. No account required, no usage limits. Generate as many ideas as you like.",
  },
  {
    q: "What is Leet style?",
    a: "Leet replaces letters with similar-looking numbers or symbols — 'a' becomes '@', 'e' becomes '3', 'o' becomes '0'. Enable it in Advanced options.",
  },
  {
    q: "How do I check if a username is taken?",
    a: "Click the small platform initials (I for Instagram, T for TikTok, X for Twitter) next to any generated name. This opens that platform's profile page for that username.",
  },
  {
    q: "Should I use the same username everywhere?",
    a: "For personal branding, yes — consistency helps people find and recognise you. For privacy-focused accounts, different usernames per platform prevent cross-platform tracking.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "UserNameGen", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online", description: "Free username generator for Instagram, TikTok, gaming, and more.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f0f9f9 0%, #e0f2f2 60%, #f0f9f9 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full opacity-10" style={{ background: "#0d7a7b" }} />
        <div className="absolute bottom-[-40px] left-[10%] w-40 h-40 rounded-full opacity-6" style={{ background: "#0d7a7b" }} />

        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            style={{ background: "#0d7a7b", color: "#fff" }}>
            <Zap size={12} /> Free · Instant · No sign-up
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-night leading-[1.05] tracking-tight mb-4">
            Find your perfect<br />
            <span style={{ color: "#0d7a7b" }}>username</span>
          </h1>
          <p className="text-muted text-base md:text-lg max-w-xl mb-8">
            20 unique ideas for Instagram, TikTok, gaming, Discord, and any platform — in seconds. Free forever, no account needed.
          </p>

          {/* Tool */}
          <UsernameGenerator />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">

        {/* ── AFFILIATE ── */}
        <AffiliateCard />

        {/* ── STYLE CARDS ── */}
        <section id="styles" className="mt-16">
          <h2 className="text-2xl font-black text-night mb-2">Find your style</h2>
          <p className="text-muted text-sm mb-6">
            Not sure where to start? Pick a style and get username ideas tailored to that vibe.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {STYLE_CARDS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group relative rounded-2xl p-5 overflow-hidden flex flex-col justify-between min-h-[110px] transition-transform hover:-translate-y-0.5"
                style={{ background: c.bg }}
              >
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">{c.label}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{c.sub}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span
                    className="text-xs font-semibold flex items-center gap-1 transition-colors"
                    style={{ color: c.accent }}
                  >
                    Generate <ChevronRight size={12} />
                  </span>
                  <span className="text-2xl opacity-50 group-hover:opacity-80 transition-opacity">
                    {c.emoji}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── PLATFORM GRID ── */}
        <section id="platforms" className="mt-16">
          <h2 className="text-2xl font-black text-night mb-2">Generators by platform</h2>
          <p className="text-muted text-sm mb-6">
            Each platform has its own rules, culture, and style norms. Use a dedicated generator for better results.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {PLATFORM_PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white border border-teal/15 rounded-xl p-4 text-center hover:border-teal hover:shadow-card transition-all group"
              >
                <div className="text-2xl mb-1.5">{p.emoji}</div>
                <div className="text-xs font-semibold text-night group-hover:text-teal transition-colors">
                  {p.label}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHAT IS ── */}
        <section className="mt-16">
          <h2 className="text-2xl font-black text-night mb-4">What is a username generator?</h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              A username generator is a tool that creates unique, creative handles for social media accounts, gaming profiles, email addresses, and any platform that requires a unique identifier. Instead of spending hours brainstorming — only to find every good name is taken — a generator produces dozens of ideas in seconds.
            </p>
            <p>
              UserNameGen uses AI combined with a curated word bank to generate usernames that match your style, interests, and platform. Enter a keyword and choose a style — Gaming, Aesthetic, Professional, Cute, or Random — and the tool handles the rest. Every result is pronounceable, memorable, and ready to check on your platform of choice.
            </p>
          </div>
        </section>

        {/* ── WHY MATTERS ── */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-night mb-6">Why your username matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <Star className="text-amber-500" size={20} />, title: "It shapes your online identity", body: "Your username is the first thing people see. A memorable handle builds recognition and helps followers find you across platforms." },
              { icon: <Shield className="text-teal" size={20} />, title: "Random names protect privacy", body: "Using the same personal username everywhere lets bad actors link your accounts. A unique handle per platform limits this exposure." },
              { icon: <Globe className="text-green-500" size={20} />, title: "Consistency builds authority", body: "Creators with matching handles across platforms rank better in platform search and appear more credible to new followers." },
            ].map((c) => (
              <div key={c.title} className="bg-white border border-teal/15 rounded-xl p-5">
                <div className="mb-3">{c.icon}</div>
                <h3 className="font-bold text-night text-sm mb-1.5">{c.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPS ── */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-night mb-6">6 tips for choosing a great username</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map((t, i) => (
              <div key={i} className="bg-white border border-teal/15 rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-bold text-night text-sm mb-1">{t.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section className="mt-14">
          <h2 className="text-2xl font-black text-night mb-6">How to use the generator</h2>
          <div className="space-y-3">
            {[
              { n: "1", title: "Enter a keyword (optional)", body: "Type your name, a hobby, or a theme. Leave it blank for completely random results." },
              { n: "2", title: "Choose a style", body: "Select Gaming, Aesthetic, Professional, Cute, or Random. You can also choose All Styles for a varied mix." },
              { n: "3", title: "Click Generate", body: "Get 20 unique username ideas instantly. Hit Refresh for a new batch anytime." },
              { n: "4", title: "Copy and check availability", body: "Click Copy on any name, then click the platform initials to check if it is available on Instagram, TikTok, Twitter, and more." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 bg-white border border-teal/15 rounded-xl p-5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 text-white" style={{ background: "#0d7a7b" }}>
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-night text-sm mb-0.5">{s.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mt-14 mb-16">
          <h2 className="text-2xl font-black text-night mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white border border-teal/15 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-night hover:text-teal select-none list-none">
                  {faq.q}
                  <ChevronRight size={16} className="shrink-0 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted leading-relaxed border-t border-teal/10">
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
