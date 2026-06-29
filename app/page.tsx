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

const PLATFORM_PAGES = [
  { label: "Instagram",   href: "/instagram-username-generator",  emoji: "📸", kw: "instagram username generator" },
  { label: "TikTok",      href: "/tiktok-username-generator",     emoji: "🎵", kw: "tiktok username generator" },
  { label: "Gaming",      href: "/gaming-username-generator",     emoji: "🎮", kw: "gaming username generator" },
  { label: "Discord",     href: "/discord-username-generator",    emoji: "💬", kw: "discord username generator" },
  { label: "Xbox",        href: "/xbox-username-generator",       emoji: "🕹️", kw: "xbox username generator" },
  { label: "Aesthetic",   href: "/aesthetic-username-generator",  emoji: "🌸", kw: "aesthetic username generator" },
  { label: "Cute",        href: "/cute-username-generator",       emoji: "🐾", kw: "cute username generator" },
  { label: "Email",       href: "/email-username-generator",      emoji: "✉️", kw: "email username generator" },
  { label: "Random",      href: "/random-username-generator",     emoji: "🎲", kw: "random username generator" },
  { label: "Roblox",      href: "/roblox-username-generator",     emoji: "🧱", kw: "roblox username generator" },
];

const TIPS = [
  {
    icon: "🎯",
    title: "Keep it short and memorable",
    body: "The best usernames are under 15 characters. Short handles are easier to remember, type, and tag in posts. Aim for something people can recall after seeing it once.",
  },
  {
    icon: "🔐",
    title: "Never use personal information",
    body: "Avoid your real name, birth year, or location in your username. Hackers use automated tools to cross-reference usernames across platforms — personal details make this easier.",
  },
  {
    icon: "🌐",
    title: "Use the same handle everywhere",
    body: "Consistency across Instagram, TikTok, and Twitter builds brand recognition. Once you find a username, check availability on all major platforms before committing.",
  },
  {
    icon: "🔢",
    title: "Add numbers thoughtfully",
    body: "If your preferred name is taken, add meaningful numbers rather than random ones. Birth year, favorite number, or a meaningful sequence work better than 12345.",
  },
  {
    icon: "✨",
    title: "Match the platform's culture",
    body: "Gaming platforms like Xbox and Discord favor edgy, bold names. Instagram and TikTok reward aesthetic, soft handles. Professional platforms like LinkedIn prefer real names or clean titles.",
  },
  {
    icon: "🔄",
    title: "Think long-term",
    body: "Avoid trendy words or references that may feel dated in two years. Choose something timeless — or at least something you won't cringe at next year.",
  },
];

const FAQS = [
  {
    q: "How does the username generator work?",
    a: "Our generator combines AI and a curated word bank to produce unique username ideas based on your keyword and chosen style. Simply enter a name or interest, select a style, and click Generate. You'll get 20 fresh ideas instantly.",
  },
  {
    q: "Are the generated usernames guaranteed to be available?",
    a: "No generator can guarantee availability in real time across every platform. However, clicking the platform initial (I, T, X, Y) next to any username opens the platform's profile page so you can check instantly.",
  },
  {
    q: "Can I use this generator for Instagram, TikTok, and other platforms?",
    a: "Yes. Our tool generates usernames suitable for any platform. We also have dedicated generators for Instagram, TikTok, Discord, Xbox, and more — each tuned to that platform's character limits and community style.",
  },
  {
    q: "What makes a good username?",
    a: "A good username is short (under 15 characters), memorable, easy to spell, and free of personal information. It should reflect your personality or brand without being tied to a trend that may age poorly.",
  },
  {
    q: "Is the username generator free?",
    a: "Yes, completely free. No account required, no usage limits. Generate as many username ideas as you like.",
  },
  {
    q: "What is Leet style?",
    a: "Leet (or l33t) style replaces letters with similar-looking numbers or symbols — for example, 'a' becomes '@', 'e' becomes '3', 'o' becomes '0'. Enable the Leet option in Advanced settings to generate names in this style.",
  },
  {
    q: "How do I check if a username is taken?",
    a: "Click the small platform initials (I for Instagram, T for TikTok, etc.) next to any generated username. This opens that platform's page for that username, showing you whether it's already in use.",
  },
  {
    q: "Should I use the same username on every platform?",
    a: "For personal branding, yes — consistency helps people find and recognize you. However, for privacy-focused accounts, using different usernames per platform prevents cross-platform tracking.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "UserNameGen — Username Generator",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: "https://usernamegen.online",
            description: "Free username generator for Instagram, TikTok, gaming, and more.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        {/* ── HERO ── */}
        <section className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            <Zap size={12} />
            Free · Instant · No sign-up needed
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
            Generate unique, creative usernames for Instagram, TikTok, gaming, Discord, and any platform — 20 ideas in seconds.
          </p>
        </section>

        {/* ── TOOL ── */}
        <section className="mb-10" aria-label="Username generator tool">
          <UsernameGenerator />
        </section>

        {/* ── AFFILIATE ── */}
        <AffiliateCard />

        {/* ── PLATFORM LINKS ── */}
        <section id="platforms" className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Username generators by platform</h2>
          <p className="text-gray-500 text-sm mb-6">
            Each platform has its own character limits, culture, and style norms. Use a dedicated generator for the best results.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {PLATFORM_PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-gray-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-card transition-all flex flex-col items-center gap-2 text-center"
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-brand-600">{p.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── WHAT IS A USERNAME GENERATOR ── */}
        <section className="mt-14 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a username generator?</h2>
          <p className="text-gray-600 leading-relaxed">
            A username generator is a tool that creates unique, available-style handles for social media accounts, gaming profiles, email addresses, and any platform that requires a unique identifier. Instead of spending hours brainstorming — only to find that every good name is already taken — a generator produces dozens of creative ideas in seconds.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            UserNameGen uses AI combined with a curated word bank to generate usernames that match your style, interests, and the platform you're signing up for. You can enter a keyword (your name, a hobby, a theme) and choose a style — Gaming, Aesthetic, Professional, Cute, or Random — and the tool handles the rest.
          </p>
        </section>

        {/* ── WHY USERNAMES MATTER ── */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Why your username matters more than you think</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Star className="text-amber-500" size={20} />,
                title: "It shapes your online identity",
                body: "Your username is the first thing people see. A memorable handle builds brand recognition and helps followers find you across platforms.",
              },
              {
                icon: <Shield className="text-brand-500" size={20} />,
                title: "Random names protect your privacy",
                body: "Using the same personal username everywhere lets bad actors cross-reference your accounts. A unique, random username per platform limits this exposure.",
              },
              {
                icon: <Globe className="text-green-500" size={20} />,
                title: "Consistency builds authority",
                body: "Creators with matching handles across platforms rank better in platform search and appear more credible to new followers and collaborators.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="mb-3">{c.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TIPS ── */}
        <section id="tips" className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for choosing a great username</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map((tip, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{tip.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO USE ── */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">How to use the username generator</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Enter a keyword (optional)",
                body: "Type your name, a hobby, or a theme you want the username to reflect. Leave it blank for completely random results.",
              },
              {
                step: "2",
                title: "Choose a style",
                body: "Select Gaming, Aesthetic, Professional, Cute, or Random depending on the platform and your personality. You can also choose All Styles for a varied mix.",
              },
              {
                step: "3",
                title: "Click Generate",
                body: "The tool instantly produces 20 unique username ideas. Click Refresh to get a new batch anytime.",
              },
              {
                step: "4",
                title: "Copy and check availability",
                body: "Click Copy on any username to save it, then click the platform initials to check if it's available on Instagram, TikTok, Twitter, and more.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 bg-white border border-gray-100 rounded-xl p-5">
                <div className="w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-gray-800 hover:text-brand-600 select-none list-none">
                  {faq.q}
                  <ChevronRight size={16} className="shrink-0 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
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
