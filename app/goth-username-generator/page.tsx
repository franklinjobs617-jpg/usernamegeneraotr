import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Goth Username Generator — Dark & Edgy Handle Ideas",
  description: "Generate dark, gothic, and edgy usernames instantly. Free goth username generator — mysterious, moody, and alternative handle ideas for any platform.",
  alternates: { canonical: "https://usernamegen.online/goth-username-generator" },
};

const DARK_WORDS = {
  "Dark nouns":    ["void", "wraith", "specter", "phantom", "shroud", "crypt", "nocturne", "umbra"],
  "Power adjectives": ["crimson", "obsidian", "hollow", "silent", "pale", "eternal", "sinister", "noir"],
  "Gothic nature": ["raven", "thorn", "eclipse", "ember", "ash", "crow", "storm", "bone"],
  "Latin-inspired": ["nox", "umbra", "morte", "lux", "anima", "obscura", "tenebris", "apex"],
};

const SUBSTYLES = [
  { name: "Classic goth",  bg: "#1c1917", text: "#d6d3d1", examples: ["CrimsonShroud", "NightShade_", "VoidRaven"] },
  { name: "Pastel goth",   bg: "#2d1a3e", text: "#d8b4fe", examples: ["PinkVoid",      "SoftSpecter", "LilacGrave"] },
  { name: "Ethereal dark", bg: "#0f172a", text: "#7dd3fc", examples: ["PhantomLune",   "ShadowPetal", "NocturnBloom"] },
  { name: "Cyber goth",    bg: "#0d1a1a", text: "#0d7a7b", examples: ["NeonVoid",      "CyberWraith", "GlitchSoul"] },
];

const TIPS = [
  { emoji: "🖤", title: "Combine dark with unexpected words", body: "The most memorable goth usernames pair something dark with something unexpected — SilentBloom, VoidPetal. Pure darkness without contrast can feel unoriginal." },
  { emoji: "🌙", title: "Latin and Old English add depth", body: "Words like nox (night), umbra (shadow), and morte (death) add sophistication when mixed with English words." },
  { emoji: "🩸", title: "Avoid overdone combinations", body: "DarkBlood, DeathAngel, and BlackRose are extremely common. Aim for combinations that feel fresh while still fitting the aesthetic." },
  { emoji: "✦", title: "Underscores work well for goth style", body: "Shadow_Thorn, Void_Wraith — a single underscore adds visual rhythm. More than one looks messy." },
  { emoji: "🔠", title: "Mixed case creates emphasis", body: "CrimsonVoid and crimsonvoid feel different. Most goth accounts use CamelCase or all lowercase — both work." },
  { emoji: "🌹", title: "Pastel goth is valid too", body: "Pastel goth combines soft colors with macabre themes. Lavender, roses, and moons combined with dark undertones make distinctive handles." },
];

const FAQS = [
  { q: "What is a goth username?", a: "A goth username is a handle that reflects gothic, dark, or alternative aesthetics. These typically use dark imagery (shadows, ravens, voids), deep colors (crimson, obsidian), and atmospheric language (nocturne, specter, wraith)." },
  { q: "What words make a username gothic?", a: "Words that create gothic usernames include: void, wraith, specter, phantom, shadow, raven, crimson, obsidian, nocturne, shroud, crypt, thorn, and eclipse." },
  { q: "What is pastel goth?", a: "Pastel goth combines cute aesthetics (soft colors, kawaii imagery) with gothic themes (ghosts, graveyards). Good pastel goth usernames mix soft words with dark ones: PinkSpecter, LavenderVoid, SoftGrave." },
  { q: "Are goth usernames allowed on major platforms?", a: "Yes, as long as the username does not violate platform rules. Atmospheric names referencing darkness, ravens, or shadows are generally fine on all major platforms." },
  { q: "Is the goth username generator free?", a: "Yes, completely free. No sign-up required." },
];

const RELATED = [
  { label: "Aesthetic Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Random Generator",    href: "/random-username-generator",    emoji: "🎲" },
  { label: "Gaming Generator",    href: "/gaming-username-generator",    emoji: "🎮" },
  { label: "Discord Generator",   href: "/discord-username-generator",   emoji: "💬" },
];

export default function GothPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Goth Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/goth-username-generator", description: "Free goth username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "#0d1a1a" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-5" style={{ background: "#fff" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Goth Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "rgba(255,255,255,0.1)", color: "#d1d5db" }}>
            🖤 Goth
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#fff" }}>
            Goth Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#9ca3af" }}>
            Generate dark, atmospheric, and edgy usernames for any platform. From classic goth to pastel goth — find a handle that matches your alternative aesthetic.
          </p>
          <UsernameGenerator initialStyle="random" placeholder="Enter a dark word or theme…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: Dark word bank ── */}
        <section className="mt-14">
          <SectionTitle>Gothic word bank — build your own dark username</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            The best goth usernames combine words from two different categories below. Mix a dark noun with a power adjective, or try a Latin-inspired word paired with English imagery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(DARK_WORDS).map(([cat, words]) => (
              <div key={cat} className="rounded-xl p-4" style={{ background: "#0d1a1a", border: "1px solid rgba(13,122,123,0.2)" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#0d7a7b" }}>{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {words.map((w) => (
                    <span key={w} className="font-mono text-xs px-2 py-1 rounded" style={{ background: "rgba(13,122,123,0.15)", color: "#b2e8e8" }}>
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
            Example combinations: crimson + raven = CrimsonRaven · void + thorn = VoidThorn · nox + bloom = NoxBloom
          </p>
        </section>

        {/* Sub-styles */}
        <section className="mt-10">
          <SectionTitle>Goth sub-styles</SectionTitle>
          <div className="grid grid-cols-2 gap-4">
            {SUBSTYLES.map((s) => (
              <div key={s.name} className="rounded-xl p-4" style={{ background: s.bg, border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: s.text }}>{s.name}</p>
                {s.examples.map((ex) => (
                  <p key={ex} className="font-mono text-xs" style={{ color: s.text }}>@{ex}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a great goth username</SectionTitle>
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
