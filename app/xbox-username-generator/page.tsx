import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Info, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Xbox Username Generator — Free Xbox Gamertag Ideas",
  description: "Generate cool Xbox gamertags instantly. Free Xbox username generator — bold, battle-ready handle ideas. Your one free change deserves a great name.",
  alternates: { canonical: "https://usernamegen.online/xbox-username-generator" },
};

const RULES = [
  { rule: "Length", detail: "1 to 12 characters for the name portion" },
  { rule: "Allowed", detail: "Letters and numbers only — no underscores, hyphens, or special characters" },
  { rule: "Spaces", detail: "Displayed with a middle dot but stored without — effectively not allowed" },
  { rule: "First change", detail: "Free — every account gets one free gamertag change" },
  { rule: "Subsequent changes", detail: "Approximately $9.99 USD per change" },
  { rule: "If taken", detail: "Xbox adds a numeric suffix (e.g. #1234) — your chosen name still shows first" },
];

const TIPS = [
  { emoji: "🕹️", title: "12 characters is the real limit", body: "Xbox displays gamertags as up to 12 characters cleanly. If your name is taken, Xbox adds a # suffix. Focus on nailing those 12 characters." },
  { emoji: "⚔️", title: "Bold and aggressive works on Xbox", body: "Xbox culture skews competitive. Names like VoidStrike, IronFang, and SteelReaper feel natural in multiplayer lobbies." },
  { emoji: "🔡", title: "No underscores or special characters", body: "Unlike PlayStation or Steam, Xbox gamertags cannot include underscores or hyphens. Letters and numbers only." },
  { emoji: "💸", title: "Use your free change wisely", body: "Every Xbox account gets exactly one free gamertag change. After that, each change costs around $9.99. Take time to choose right." },
  { emoji: "🌐", title: "Match your PlayStation and Steam names", body: "If you game across platforms, consistent gamertags help friends find you. Check all platforms before committing." },
  { emoji: "🔢", title: "Let Xbox handle the suffix", body: "If your gamertag is taken, Xbox adds a numeric suffix automatically. Pick a clean name without worrying about adding numbers yourself." },
];

// ── Unique module: Gamertag quality scorer ──
const SCORE_CRITERIA = [
  { label: "Length (8–12 chars)", good: "VoidStrike", bad: "VoidStrikeKillmaster", tip: "Short names display better on leaderboards and kill feeds" },
  { label: "No numbers appended", good: "IronFang", bad: "IronFang9999", tip: "Appended numbers signal a fallback choice — try a word variation instead" },
  { label: "Two syllables or fewer", good: "SteelWolf", bad: "PhantomShadowReaper", tip: "Two-syllable names are easiest to remember and say aloud" },
  { label: "No underscores", good: "NeonHawk", bad: "Neon_Hawk", tip: "Xbox does not allow underscores — but even on other platforms, clean names feel more premium" },
  { label: "Strong imagery", good: "VoidFang", bad: "CoolguyXbox", tip: "Names with visual or power imagery feel more intimidating in lobbies" },
];

const FAQS = [
  { q: "How long can an Xbox gamertag be?", a: "Xbox gamertags can be up to 12 characters long. If your chosen name is taken, Xbox automatically appends a unique numeric suffix (e.g. #1234)." },
  { q: "How much does it cost to change an Xbox gamertag?", a: "Your first Xbox gamertag change is free. Every subsequent change costs approximately $9.99 USD." },
  { q: "Can I use underscores in my Xbox gamertag?", a: "No. Xbox gamertags only support letters and numbers. Underscores, hyphens, and special characters are not permitted." },
  { q: "What happens if my Xbox gamertag is already taken?", a: "Xbox automatically adds a numeric suffix to your chosen name (e.g. VoidStrike#7291). Your chosen name still appears first — the suffix just distinguishes you." },
  { q: "What are good Xbox gamertag ideas?", a: "Bold, short, and action-oriented. Popular styles combine a powerful adjective with a weapon or creature — IronWolf, SteelReaper, VoidFang. Use our Gaming style to generate names in this direction." },
  { q: "Is the Xbox username generator free?", a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "Discord Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Roblox Generator",  href: "/roblox-username-generator",  emoji: "🧱" },
  { label: "Gaming Generator",  href: "/gaming-username-generator",  emoji: "🎮" },
  { label: "Random Generator",  href: "/random-username-generator",  emoji: "🎲" },
];

export default function XboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Xbox Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/xbox-username-generator", description: "Free Xbox gamertag generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #052e16 0%, #0d2e1a 60%, #0d1a1a 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#22c55e" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Xbox Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#16a34a", color: "#fff" }}>
            🕹️ Xbox
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#fff" }}>
            Xbox Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#9ca3af" }}>
            Generate cool Xbox gamertags instantly. Bold, battle-ready name ideas — because your one free gamertag change deserves a great name.
          </p>
          <UsernameGenerator initialStyle="gaming" platformFocus="Xbox" placeholder="Enter a keyword or name…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: Gamertag quality guide ── */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <Star size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>What makes a great Xbox gamertag?</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Use these five criteria to evaluate any gamertag before spending your free change.
          </p>
          <div className="space-y-3">
            {SCORE_CRITERIA.map((c) => (
              <div key={c.label} className="bg-white rounded-xl p-5" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="font-bold text-sm" style={{ color: "#0d1a1a" }}>{c.label}</span>
                </div>
                <div className="flex gap-6 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold" style={{ color: "#16a34a" }}>✓ Good</span>
                    <span className="font-mono text-xs" style={{ color: "#0d1a1a" }}>{c.good}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold" style={{ color: "#dc2626" }}>✗ Avoid</span>
                    <span className="font-mono text-xs" style={{ color: "#6b7280" }}>{c.bad}</span>
                  </div>
                </div>
                <p className="text-xs" style={{ color: "#4a6060" }}>{c.tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Xbox gamertag rules</SectionTitle>
          </div>
          <RulesTable rules={RULES} />
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for the perfect Xbox gamertag</SectionTitle>
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
