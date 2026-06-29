import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Discord Username Generator — Free Discord Handle Ideas",
  description: "Generate unique Discord usernames instantly. Free Discord handle generator — creative, gaming, and cool name ideas for your account.",
  alternates: { canonical: "https://usernamegen.online/discord-username-generator" },
};

const RULES = [
  { rule: "Length", detail: "2 to 32 characters" },
  { rule: "Allowed", detail: "Letters, numbers, underscores, periods, hyphens" },
  { rule: "Not allowed", detail: "Spaces at start or end; the word 'discord'; impersonation names" },
  { rule: "System (2023+)", detail: "Single unique @username — no more #0000 discriminators" },
  { rule: "Uniqueness", detail: "Globally unique, case-insensitive" },
  { rule: "Display name", detail: "Separate from username — can differ per server" },
];

const TIPS = [
  { emoji: "💬", title: "Username vs display name", body: "Your @username is used to find you. Your display name shows in servers and can be different per server. Keep your username simple — get creative with display names." },
  { emoji: "🎮", title: "Match your gaming identity", body: "Most Discord users are gamers. A handle that fits your gaming persona feels natural in gaming servers and communities." },
  { emoji: "🔗", title: "Match your other platforms", body: "If you already have a handle on Twitch, Steam, or Xbox, use the same or similar name on Discord. Friends find you faster." },
  { emoji: "✍️", title: "Keep it under 18 characters", body: "Discord allows 32 characters, but long names get cut off in voice channels. Stay under 18 for best readability." },
  { emoji: "🌐", title: "Discriminators are gone since 2023", body: "Discord removed the #1234 tag system. Now every username must be globally unique, like a Twitter handle — be creative." },
  { emoji: "🔒", title: "Avoid personal information", body: "Discord is often used in public servers. Avoid usernames with your real name, location, or birth year." },
];

// ── Unique module: Username vs Display Name explainer ──
const COMPARISONS = [
  { field: "Where it appears", username: "@username — in friend requests, DMs, profile URL", display: "Display name — in server chats, voice channels, member list" },
  { field: "Uniqueness", username: "Globally unique across all of Discord", display: "Not unique — many users can have the same display name" },
  { field: "Customization", username: "One name for all servers", display: "Can be different in every server" },
  { field: "How to change", username: "Settings → My Account → Username", display: "Server Settings → Edit Server Profile" },
  { field: "Character limit", username: "2–32 characters", display: "1–32 characters" },
  { field: "Allowed characters", username: "Letters, numbers, . _ -", display: "Almost anything including spaces and emoji" },
];

const FAQS = [
  { q: "How long can a Discord username be?", a: "Discord usernames can be between 2 and 32 characters. For best readability in servers and voice channels, aim for 8–18 characters." },
  { q: "Does Discord still use the # discriminator system?", a: "No. Discord removed discriminators in 2023. Every user now has a unique @username, similar to Twitter or Instagram handles." },
  { q: "What is the difference between a Discord username and a display name?", a: "Your username is your unique @handle used to find and add you. Your display name is what appears in servers and can be customized per server — you can have a different display name in every server." },
  { q: "Can I have spaces in my Discord username?", a: "No. Use underscores or hyphens instead. Your display name can include spaces." },
  { q: "Is the Discord username generator free?", a: "Yes, completely free with no account required." },
];

const RELATED = [
  { label: "Xbox Generator",   href: "/xbox-username-generator",    emoji: "🕹️" },
  { label: "Roblox Generator", href: "/roblox-username-generator",  emoji: "🧱" },
  { label: "Gaming Generator", href: "/gaming-username-generator",  emoji: "🎮" },
  { label: "Random Generator", href: "/random-username-generator",  emoji: "🎲" },
];

export default function DiscordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Discord Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/discord-username-generator", description: "Free Discord username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #eef2ff 0%, #e0e7ff 60%, #f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#6366f1" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Discord Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#5865f2", color: "#fff" }}>
            💬 Discord
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Discord Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Since Discord removed discriminators in 2023, every handle must be globally unique. Find yours now — gaming-ready, creative, and instantly available to check.
          </p>
          <UsernameGenerator initialStyle="gaming" platformFocus="Discord" placeholder="Enter a keyword or name…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: Username vs Display Name ── */}
        <section className="mt-14">
          <SectionTitle>Discord username vs display name — what is the difference?</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Discord has two separate names. Most people do not realise they work very differently. Here is exactly how they compare.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <div className="grid grid-cols-3 px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: "#0d1a1a", color: "#9ca3af" }}>
              <span>Field</span>
              <span style={{ color: "#0d7a7b" }}>@Username</span>
              <span style={{ color: "#fff" }}>Display name</span>
            </div>
            {COMPARISONS.map((c, i) => (
              <div
                key={c.field}
                className="grid grid-cols-3 px-5 py-3.5 text-sm gap-2"
                style={{ borderTop: i > 0 ? "1px solid rgba(13,122,123,0.08)" : "none" }}
              >
                <span className="font-semibold text-xs" style={{ color: "#0d1a1a" }}>{c.field}</span>
                <span className="text-xs" style={{ color: "#4a6060" }}>{c.username}</span>
                <span className="text-xs" style={{ color: "#4a6060" }}>{c.display}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Discord username rules</SectionTitle>
          </div>
          <RulesTable rules={RULES} />
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a great Discord username</SectionTitle>
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
