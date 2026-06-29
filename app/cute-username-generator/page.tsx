import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cute Username Generator — Adorable & Sweet Handle Ideas",
  description: "Generate cute usernames for Instagram, TikTok, and more. Adorable, sweet, and wholesome username ideas — free and instant.",
  alternates: { canonical: "https://usernamegen.online/cute-username-generator" },
};

const COMBOS = [
  { a: "Bunny", b: "Paws",   result: "BunnyPaws",   cat: "Animal + action" },
  { a: "Honey", b: "Pop",    result: "HoneyPop",    cat: "Sweet + fun" },
  { a: "Daisy", b: "Bloom",  result: "DaisyBloom",  cat: "Nature + nature" },
  { a: "Mochi", b: "Soft",   result: "MochiSoft",   cat: "Food + feel" },
  { a: "Kitty", b: "Wink",   result: "KittyWink",   cat: "Animal + action" },
  { a: "Peach", b: "Glow",   result: "PeachGlow",   cat: "Fruit + light" },
  { a: "Sugar", b: "Petal",  result: "SugarPetal",  cat: "Sweet + nature" },
  { a: "Fluffy", b: "Joy",   result: "FluffyJoy",   cat: "Texture + emotion" },
];

const TIPS = [
  { emoji: "🐾", title: "Animal words are timeless", body: "Bunny, kitty, panda, fox, and bear are perennially cute and never feel dated. Pair with a soft adjective or action word." },
  { emoji: "🍡", title: "Food names create warmth", body: "Honey, mochi, cookie, peach, and sugar evoke comfort and sweetness — work especially well on lifestyle and food accounts." },
  { emoji: "✨", title: "Add sparkle words", body: "Words like sparkle, glitter, shimmer, and glow amplify cuteness. Use one per username — not three." },
  { emoji: "💕", title: "Keep it positive", body: "Cute usernames work best when they convey happiness, softness, or playfulness. Avoid anything that reads sarcastic." },
  { emoji: "🔡", title: "CamelCase or all lowercase", body: "HoneyPaws reads playfully cute. honeypaws reads softly cute. Both work — choose based on whether you want bubbly or aesthetic." },
  { emoji: "🌈", title: "Avoid numbers if possible", body: "Numbers rarely add cuteness. If your name is taken, try a synonym or a different pairing rather than appending 123." },
];

const FAQS = [
  { q: "What are some cute username ideas?", a: "Popular styles include animal + action (BunnyHops, KittyWink), food + emotion (HoneyBliss, MochiSmile), and nature + soft adjective (PeachBloom, DaisyGlow). Use our Cute style to generate dozens of ideas instantly." },
  { q: "What makes a username cute?", a: "Cute usernames combine soft, round-sounding words with wholesome imagery. Animal names (bunny, kitty, panda), sweet foods (honey, mochi, cookie), and nature words (peach, daisy, rose) form the core cute vocabulary." },
  { q: "Are cute usernames good for Instagram?", a: "Yes, especially for lifestyle, food, animal, and personal brand accounts. A cute handle signals warmth and approachability." },
  { q: "Is the cute username generator free?", a: "Yes, completely free. No sign-up or account needed." },
];

const RELATED = [
  { label: "Aesthetic Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Instagram Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "TikTok Generator",    href: "/tiktok-username-generator",    emoji: "🎵" },
  { label: "Random Generator",    href: "/random-username-generator",    emoji: "🎲" },
];

export default function CutePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Cute Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/cute-username-generator", description: "Free cute username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #fff1f2 0%, #ffe4e6 60%, #fdf2f8 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#f43f5e" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Cute Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#f43f5e", color: "#fff" }}>
            🐾 Cute
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Cute Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Generate adorable, sweet, and wholesome usernames for Instagram, TikTok, and any platform. Find a cute handle that makes people smile.
          </p>
          <UsernameGenerator initialStyle="cute" placeholder="Enter a name or theme…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: Name combination formula ── */}
        <section className="mt-14">
          <SectionTitle>The cute username formula — mix and match</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Most great cute usernames follow a simple two-part formula. Here are 8 proven combinations showing exactly how to build one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMBOS.map((c) => (
              <div key={c.result} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-sm px-2 py-1 rounded" style={{ background: "#fff1f2", color: "#f43f5e" }}>{c.a}</span>
                  <span style={{ color: "#9ca3af" }}>+</span>
                  <span className="font-mono text-sm px-2 py-1 rounded" style={{ background: "#fff1f2", color: "#f43f5e" }}>{c.b}</span>
                  <span style={{ color: "#9ca3af" }}>=</span>
                  <span className="font-mono text-sm font-bold" style={{ color: "#0d1a1a" }}>{c.result}</span>
                </div>
                <span className="text-xs ml-auto shrink-0" style={{ color: "#9ca3af" }}>{c.cat}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a great cute username</SectionTitle>
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
