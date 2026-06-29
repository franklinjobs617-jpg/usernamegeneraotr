import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Info, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roblox Username Generator — Free Cool Roblox Names",
  description: "Generate cool Roblox usernames instantly. Free Roblox name generator — unique gaming handles for your account. Changing costs Robux, so choose wisely.",
  alternates: { canonical: "https://usernamegen.online/roblox-username-generator" },
};

const RULES = [
  { rule: "Length", detail: "3 to 20 characters" },
  { rule: "Allowed", detail: "Letters (a–z, A–Z), numbers (0–9), underscores (_)" },
  { rule: "Not allowed", detail: "Spaces, hyphens, periods, and all other special characters" },
  { rule: "Start character", detail: "Must start with a letter — not a number or underscore" },
  { rule: "Uniqueness", detail: "Every Roblox username must be globally unique" },
  { rule: "Change cost", detail: "1,000 Robux (~$10 USD) — choose carefully the first time" },
];

const TIPS = [
  { emoji: "🎮", title: "Think about your game persona", body: "Your Roblox username follows you across every game. Choose something that represents how you want to be known — fighter, builder, or role-player." },
  { emoji: "💰", title: "Changes cost Robux", body: "Unlike most platforms, changing your Roblox username costs 1,000 Robux (~$10). Take time to find a name you will be happy with long-term." },
  { emoji: "⚔️", title: "Gaming names work best", body: "Bold, action-oriented names like ShadowBlade or VoidHunter fit Roblox culture well. Overly cute or professional names can feel out of place." },
  { emoji: "🔢", title: "Place numbers strategically", body: "If your name is taken, add a number in the middle or after a meaningful word — VoidX99 reads better than Void99." },
  { emoji: "📏", title: "Keep it under 15 characters", body: "Roblox allows 20 characters but shorter names look cleaner in leaderboards, group chats, and friend lists. Aim for 8–14." },
  { emoji: "🔤", title: "No spaces — use underscores", body: "Roblox does not allow spaces. If you want a two-word name, use an underscore: Shadow_Blade. One underscore maximum looks cleanest." },
];

// ── Unique module: Robux cost reminder + name checklist ──
const CHECKLIST = [
  { item: "Is it under 15 characters?", why: "Shorter names display better across all Roblox game interfaces" },
  { item: "Does it start with a letter?", why: "Roblox requires usernames to start with a letter — numbers and underscores at the start are rejected" },
  { item: "No spaces or special characters?", why: "Only letters, numbers, and underscores are allowed" },
  { item: "Would you still like it in 2 years?", why: "Since changes cost Robux, avoid names tied to trends that may feel dated" },
  { item: "Have you checked availability on Roblox.com?", why: "Availability must be confirmed on the actual platform — no tool can guarantee it" },
];

const FAQS = [
  { q: "How much does it cost to change a Roblox username?", a: "Changing your Roblox username costs 1,000 Robux, which is approximately $10 USD. This applies every time you change your name, so choose carefully from the start." },
  { q: "How long can a Roblox username be?", a: "Roblox usernames must be between 3 and 20 characters. For best display across the game, aim for 8–14 characters." },
  { q: "Can I use spaces in a Roblox username?", a: "No. Use underscores to separate words — Shadow_Blade instead of Shadow Blade." },
  { q: "Can my Roblox username start with a number?", a: "No. Roblox usernames must start with a letter. Numbers and underscores at the start are not permitted." },
  { q: "What are cool Roblox username ideas?", a: "Cool Roblox usernames combine action words with powerful imagery — ShadowBlade, VoidHunter, PhantomStrike, NeonWolf. Use our Gaming style to generate names in this direction." },
  { q: "Is the Roblox username generator free?", a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "Xbox Generator",    href: "/xbox-username-generator",    emoji: "🕹️" },
  { label: "Discord Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Gaming Generator",  href: "/gaming-username-generator",  emoji: "🎮" },
  { label: "Random Generator",  href: "/random-username-generator",  emoji: "🎲" },
];

export default function RobloxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Roblox Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/roblox-username-generator", description: "Free Roblox username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #fef2f2 0%, #fee2e2 60%, #f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#ef4444" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Roblox Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#dc2626", color: "#fff" }}>
            🧱 Roblox
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Roblox Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Find the perfect Roblox username — cool, unique, and gaming-ready. Changing your name costs 1,000 Robux, so use our generator to find something you will love long-term.
          </p>
          <UsernameGenerator initialStyle="gaming" platformFocus="Roblox" placeholder="Enter a keyword or style…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        {/* Cost warning */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-xl" style={{ background: "#fef3c7", border: "1px solid #fcd34d" }}>
          <AlertTriangle size={18} style={{ color: "#d97706", flexShrink: 0, marginTop: 2 }} />
          <div>
            <p className="text-sm font-bold" style={{ color: "#92400e" }}>Changing costs 1,000 Robux (~$10)</p>
            <p className="text-xs mt-0.5" style={{ color: "#92400e" }}>Unlike most platforms, Roblox charges for every username change after your initial name. Use the checklist below before committing.</p>
          </div>
        </div>

        <AffiliateCard />

        {/* ── UNIQUE MODULE: Pre-commit checklist ── */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Before you commit — Roblox username checklist</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Since changing your Roblox username costs Robux, run through this checklist before finalising your choice.
          </p>
          <div className="space-y-3">
            {CHECKLIST.map((c, i) => (
              <div key={i} className="bg-white rounded-xl px-5 py-4 flex gap-4 items-start" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="w-6 h-6 rounded-full border-2 shrink-0 mt-0.5" style={{ borderColor: "#0d7a7b" }} />
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0d1a1a" }}>{c.item}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#4a6060" }}>{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Roblox username rules</SectionTitle>
          </div>
          <RulesTable rules={RULES} />
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a great Roblox username</SectionTitle>
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
