import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Info, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "TikTok Username Generator — Free TikTok Handle Ideas",
  description: "Generate unique TikTok usernames instantly. Free TikTok handle generator with creative, trending name ideas for your account.",
  alternates: { canonical: "https://usernamegen.online/tiktok-username-generator" },
};

const RULES = [
  { rule: "Max length", detail: "24 characters" },
  { rule: "Min length", detail: "2 characters (in practice, short names are all taken)" },
  { rule: "Allowed", detail: "Letters, numbers, underscores (_), periods (.)" },
  { rule: "Not allowed", detail: "Spaces and most special characters" },
  { rule: "Change limit", detail: "Once every 30 days" },
  { rule: "Uniqueness", detail: "Every TikTok username must be globally unique" },
];

const TIPS = [
  { emoji: "🎵", title: "Short wins on TikTok", body: "Handles under 15 characters appear fully in comments, duets, and stitches. Longer names get truncated in the feed." },
  { emoji: "🔥", title: "Think about your niche", body: "A niche-specific handle signals to new viewers what your channel is about before they watch a single video." },
  { emoji: "📱", title: "Make it easy to say out loud", body: "TikTok creators get mentioned in podcasts and IRL. A handle people can say and spell from hearing it alone has a huge advantage." },
  { emoji: "⚡", title: "Avoid heavy punctuation", body: "One underscore or period is fine. Two or more make the handle hard to type on mobile. Keep it clean." },
  { emoji: "🌍", title: "Check Instagram availability too", body: "Most TikTok creators cross-post to Instagram Reels. Secure the same handle on both before you start posting." },
  { emoji: "🕐", title: "You only get one change per month", body: "TikTok limits username changes to once every 30 days. Choose carefully — you cannot quickly undo a change." },
];

// ── Unique module: TikTok trending name patterns ──
const TRENDING_PATTERNS = [
  { pattern: "by[Name]",        example: "bysophia",       why: "Creator attribution style — popular for artists, chefs, designers" },
  { pattern: "its[Name]",       example: "itsjordann",     why: "Casual, conversational — works for lifestyle and personality content" },
  { pattern: "[Name]creates",   example: "miacreates",     why: "Signals creative content — art, crafts, cooking" },
  { pattern: "[Niche][Name]",   example: "fitwithjay",     why: "Niche-first — fitness, beauty, finance content" },
  { pattern: "[Name]talks",     example: "alextalks",      why: "Commentary and opinion content" },
  { pattern: "the[Name]edit",   example: "theeditbyluna",  why: "Video editing and aesthetic compilations" },
];

const FAQS = [
  { q: "How long can a TikTok username be?", a: "TikTok usernames can be between 2 and 24 characters. In practice, almost all short names are taken — expect to use 8–20 characters." },
  { q: "How do I change my TikTok username?", a: "Open TikTok, go to your profile, tap Edit Profile, then tap your username. You can only change it once every 30 days." },
  { q: "Can I use spaces in a TikTok username?", a: "No. Use underscores or periods to separate words — luna_dance or luna.dance." },
  { q: "What makes a TikTok username go viral?", a: "No username alone makes content go viral, but a memorable, short handle helps viewers remember and search for you after discovering your content." },
  { q: "Can I have the same TikTok username as someone on Instagram?", a: "Yes. TikTok and Instagram have separate username databases. However, for consistency, it is best to secure the same handle on both." },
  { q: "Is this TikTok username generator free?", a: "Yes, completely free with no sign-up required." },
];

const RELATED = [
  { label: "Instagram Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Aesthetic Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Cute Generator",      href: "/cute-username-generator",      emoji: "🐾" },
  { label: "Random Generator",    href: "/random-username-generator",    emoji: "🎲" },
];

export default function TikTokPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "TikTok Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/tiktok-username-generator", description: "Free TikTok username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #0d1a1a 0%, #1a2e2e 60%, #0d2020 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#fff" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="TikTok Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
            🎵 TikTok
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#fff" }}>
            TikTok Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#9ca3af" }}>
            Find the perfect TikTok handle in seconds. Creative, memorable, and on-trend username ideas — free, no sign-up needed.
          </p>
          <UsernameGenerator initialStyle="aesthetic" platformFocus="TikTok" placeholder="Enter your name or niche…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: TikTok name patterns ── */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>TikTok creator name patterns that work</SectionTitle>
          </div>
          <p className="text-sm mb-6" style={{ color: "#4a6060" }}>
            Successful TikTok creators follow predictable naming patterns. Here are the most effective formulas — with real examples and why they work.
          </p>
          <div className="space-y-3">
            {TRENDING_PATTERNS.map((p) => (
              <div key={p.pattern} className="bg-white rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="shrink-0 sm:w-36">
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded" style={{ background: "#0d1a1a", color: "#0d7a7b" }}>
                    {p.pattern}
                  </span>
                </div>
                <div className="shrink-0 sm:w-36">
                  <span className="font-mono text-sm font-semibold" style={{ color: "#0d1a1a" }}>@{p.example}</span>
                </div>
                <p className="text-xs" style={{ color: "#4a6060" }}>{p.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>TikTok username rules</SectionTitle>
          </div>
          <RulesTable rules={RULES} />
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a great TikTok username</SectionTitle>
          <TipsGrid tips={TIPS} />
        </section>

        <section className="mt-14">
          <SectionTitle>What is a TikTok username generator?</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#4a6060" }}>
            <p>A TikTok username generator creates unique handle ideas for your TikTok account. With over 1 billion active users, almost every simple name combination is already taken. A generator saves you from manually checking dozens of names by producing fresh, creative ideas instantly.</p>
            <p>Our tool lets you enter a keyword — your name, a theme, or a niche — and choose a style. The generator produces 20 handle ideas tuned to TikTok culture. Use the patterns above as inspiration, then generate variations using your own name or niche as the keyword.</p>
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle>Frequently asked questions</SectionTitle>
          <FAQSection faqs={FAQS} />
        </section>

        <section className="mt-14 mb-16">
          <h2 className="text-base font-bold mb-4" style={{ color: "#4a6060" }}>Related generators</h2>
          <RelatedGrid related={RELATED} />
        </section>
      </div>
    </>
  );
}
