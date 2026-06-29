import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Aesthetic Username Generator — Soft & Dreamy Handle Ideas",
  description: "Generate aesthetic usernames for Instagram, TikTok, and more. Soft, dreamy, and visually beautiful username ideas — free and instant.",
  alternates: { canonical: "https://usernamegen.online/aesthetic-username-generator" },
};

const STYLES = [
  { name: "Soft girl",    bg: "#fce7f3", text: "#9d174d", examples: ["peachbloom", "honeylune", "velvet.haze"] },
  { name: "Cottagecore",  bg: "#ecfdf5", text: "#065f46", examples: ["willowdaisy", "fernbloom", "meadowsage"] },
  { name: "Ethereal",     bg: "#ede9fe", text: "#5b21b6", examples: ["lunahalo", "pearl.drift", "celestia"] },
  { name: "Dark aesthetic", bg: "#1c1917", text: "#d6d3d1", examples: ["midnight.iris", "noir.petal", "shadowbloom"] },
  { name: "Y2K",          bg: "#dbeafe", text: "#1e40af", examples: ["chrome.star", "pixie2000", "velvet.y2k"] },
  { name: "Minimalist",   bg: "#f0f9f9", text: "#0d7a7b", examples: ["studiolunar", "sageplain", "mistworks"] },
];

// ── Unique module: Clickable aesthetic word bank ──
const WORD_BANK = {
  "Celestial": ["luna", "aurora", "nova", "stellar", "celeste", "soleil", "lyra"],
  "Nature":    ["bloom", "petal", "willow", "mist", "sage", "fern", "meadow"],
  "Texture":   ["velvet", "ivory", "silk", "pearl", "lace", "satin", "cashmere"],
  "Mood":      ["haze", "drift", "soft", "lune", "glow", "dusk", "serene"],
  "Colour":    ["rose", "peach", "ivory", "amber", "lilac", "blush", "cream"],
};

const TIPS = [
  { emoji: "🌸", title: "Go lowercase", body: "Aesthetic accounts overwhelmingly use lowercase usernames. luna.drift reads softer than LunaDrift." },
  { emoji: "🌙", title: "Use nature and celestial imagery", body: "Words like bloom, petal, lunar, mist, aurora, and velvet evoke mood without being literal, and they age well." },
  { emoji: "✦", title: "A single period adds depth", body: "A period between two words (luna.bloom) creates visual rhythm. One period is elegant — two or more look cluttered." },
  { emoji: "🎨", title: "Match your colour palette", body: "If your feed is warm and peachy, lean into honey, gold, and rose. If cool and moody, try silver, mist, and twilight." },
  { emoji: "🔤", title: "Keep it under 15 characters", body: "Aesthetic names work best when they feel effortless. Long usernames undercut the minimalist quality." },
  { emoji: "🔍", title: "Check all platforms at once", body: "Aesthetic creators usually post on Instagram, TikTok, Pinterest, and Tumblr simultaneously. Claim the same handle everywhere before announcing." },
];

const FAQS = [
  { q: "What is an aesthetic username?", a: "An aesthetic username is a handle designed to evoke a specific visual or emotional mood — soft, dreamy, dark, cottagecore, ethereal, or minimalist. These typically use nature words, celestial imagery, soft adjectives, and intentional punctuation like periods." },
  { q: "What words make a username aesthetic?", a: "Words commonly used include: luna, velvet, bloom, petal, mist, aurora, ivory, pearl, willow, sage, haze, drift, soft, lune, and celestia. Combining two — like velvet.bloom or luna.drift — creates a classic aesthetic handle." },
  { q: "Are lowercase usernames more aesthetic?", a: "Yes, for most aesthetic styles. Lowercase usernames feel softer and more intentional. Most platforms allow lowercase, though Instagram and TikTok are case-insensitive." },
  { q: "What aesthetic username style is most popular on TikTok?", a: "Soft girl, cottagecore, and ethereal styles are most popular. Names combining nature imagery with soft adjectives (willowdream, peachbloom, lunaglow) perform consistently well." },
  { q: "Is the aesthetic username generator free?", a: "Yes, completely free. No sign-up needed." },
];

const RELATED = [
  { label: "Instagram Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Cute Generator",      href: "/cute-username-generator",      emoji: "🐾" },
  { label: "TikTok Generator",    href: "/tiktok-username-generator",    emoji: "🎵" },
  { label: "Goth Generator",      href: "/goth-username-generator",      emoji: "🖤" },
];

export default function AestheticPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Aesthetic Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/aesthetic-username-generator", description: "Free aesthetic username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #fdf2f8 0%, #fce7f3 40%, #ede9fe 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#c084fc" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Aesthetic Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#9333ea", color: "#fff" }}>
            🌸 Aesthetic
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Aesthetic Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Generate soft, dreamy, and visually beautiful usernames for Instagram, TikTok, and beyond. Find a handle that matches your vibe — free and instant.
          </p>
          <UsernameGenerator initialStyle="aesthetic" placeholder="Enter a keyword or theme…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: Word bank ── */}
        <section className="mt-14">
          <SectionTitle>Aesthetic word bank — build your own username</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            The best aesthetic usernames combine words from two different categories below. Pick one from each column and try them in the generator above.
          </p>
          <div className="space-y-4">
            {Object.entries(WORD_BANK).map(([category, words]) => (
              <div key={category} className="bg-white rounded-xl p-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#9333ea" }}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {words.map((w) => (
                    <span key={w} className="font-mono text-xs px-2.5 py-1 rounded-lg" style={{ background: "#fdf4ff", color: "#7e22ce", border: "1px solid #e9d5ff" }}>
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
            Example combinations: velvet + bloom = velvetbloom · luna + drift = luna.drift · aurora + sage = aurora.sage
          </p>
        </section>

        {/* Sub-styles */}
        <section className="mt-14">
          <SectionTitle>Aesthetic username styles</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {STYLES.map((s) => (
              <div key={s.name} className="rounded-xl p-4" style={{ background: s.bg }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: s.text }}>{s.name}</p>
                <div className="flex flex-col gap-1">
                  {s.examples.map((ex) => (
                    <span key={ex} className="font-mono text-xs" style={{ color: s.text }}>@{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a perfect aesthetic username</SectionTitle>
          <TipsGrid tips={TIPS} />
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
