import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Gaming Username Generator — Cool Gamertag Ideas",
  description: "Generate cool gaming usernames and gamertags instantly. Free gaming name generator — bold, edgy, battle-ready handles for any game or platform.",
  alternates: { canonical: "https://usernamegen.online/gaming-username-generator" },
};

const GAMING_STYLES = [
  { name: "FPS / Shooter",   bg: "linear-gradient(135deg,#0d1a2e,#1a3a5c)", accent: "#4a9fd4", examples: ["PhantomStrike","VoidSniper","SteelReaper"] },
  { name: "RPG / Fantasy",   bg: "linear-gradient(135deg,#1a0d2e,#3a1a5c)", accent: "#c084fc", examples: ["IronSage","ShadowBlade","DragonFang"] },
  { name: "Stealth / Ninja", bg: "linear-gradient(135deg,#0d1a1a,#1a3030)", accent: "#0d7a7b", examples: ["SilentViper","GhostStrike","NullShade"] },
  { name: "Speed / Racing",  bg: "linear-gradient(135deg,#2e1a0d,#5c3a0d)", accent: "#fcd34d", examples: ["TurboRex","NeonRush","HyperBolt"] },
];

// ── Unique module: Platform character limit comparison ──
const PLATFORM_LIMITS = [
  { platform: "Xbox",        limit: 12,  chars: "Letters, numbers",              note: "No underscores or special chars" },
  { platform: "PlayStation", limit: 16,  chars: "Letters, numbers, hyphens, _",  note: "Must start with a letter" },
  { platform: "Steam",       limit: 32,  chars: "Letters, numbers, spaces",       note: "Not unique — display name only" },
  { platform: "Discord",     limit: 32,  chars: "Letters, numbers, _, ., -",      note: "Globally unique since 2023" },
  { platform: "Twitch",      limit: 25,  chars: "Letters, numbers, underscores",  note: "Must start with a letter" },
  { platform: "Roblox",      limit: 20,  chars: "Letters, numbers, underscores",  note: "Must start with a letter; costs Robux to change" },
];

const TIPS = [
  { emoji: "⚔️", title: "Bold beats clever in gaming", body: "Powerful-sounding names are respected more than witty ones. SteelFang and VoidSlayer read as skilled players." },
  { emoji: "🎮", title: "Think about the leaderboard", body: "Imagine your name at the top. Does it look like a winner? Shorter, punchy names stand out more than long descriptive ones." },
  { emoji: "🔢", title: "X works better than numbers", body: "Adding an X (IronFangX, VoidX) looks cleaner and more intentional than adding numbers. X has strong gaming associations." },
  { emoji: "🌐", title: "Check all your gaming platforms", body: "Use the same or similar gamertag on Xbox, PlayStation, Steam, Discord, and Twitch. Consistency helps friends find you." },
  { emoji: "📏", title: "Under 12 characters is optimal", body: "Short names display better on leaderboards and kill feeds. Xbox enforces a 12-character limit — designing around that ensures cross-platform compatibility." },
  { emoji: "🚫", title: "Avoid oversaturated tropes", body: "Names with Shadow, Dark, or Ninja followed by a number are everywhere. Our generator specifically avoids the most common combinations." },
];

const FAQS = [
  { q: "What makes a good gaming username?", a: "Short (under 12 characters), bold, easy to remember, and fitting the gaming genre. Names combining a powerful adjective with an action word or creature work consistently well across gaming communities." },
  { q: "What are the most popular gaming username styles?", a: "Power + animal (IronWolf, SteelFang), void/shadow + action (VoidStrike, ShadowBlast), and elemental + noun (FrostBlade, StormRider). Short, memorable, and they sound skilled." },
  { q: "Can I use the same gaming username on Xbox, PlayStation, and Steam?", a: "You can try, but each platform has a separate username database. Xbox limits gamertags to 12 characters and bans special characters. Check availability on each before committing." },
  { q: "What gaming username should I use for YouTube or Twitch?", a: "Choose a name that is easy to say, spell, and search for. Avoid numbers and excessive underscores. A name people can recall from hearing it once has a huge advantage for channel growth." },
  { q: "Is the gaming username generator free?", a: "Yes, completely free. No account required." },
];

const RELATED = [
  { label: "Xbox Generator",    href: "/xbox-username-generator",    emoji: "🕹️" },
  { label: "Discord Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Roblox Generator",  href: "/roblox-username-generator",  emoji: "🧱" },
  { label: "Random Generator",  href: "/random-username-generator",  emoji: "🎲" },
];

export default function GamingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Gaming Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/gaming-username-generator", description: "Free gaming username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg,#0d1a2e 0%,#0d1a1a 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#22c55e" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Gaming Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#16a34a", color: "#fff" }}>
            🎮 Gaming
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#fff" }}>
            Gaming Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#9ca3af" }}>
            Generate cool gamertags and gaming usernames for Xbox, Discord, Twitch, Steam, and every game you play.
          </p>
          <UsernameGenerator initialStyle="gaming" placeholder="Enter a keyword or theme…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* Gaming style cards */}
        <section className="mt-14">
          <SectionTitle>Gaming username styles</SectionTitle>
          <div className="grid grid-cols-2 gap-4">
            {GAMING_STYLES.map((s) => (
              <div key={s.name} className="rounded-xl p-5" style={{ background: s.bg }}>
                <p className="font-bold text-white text-sm mb-3">{s.name}</p>
                {s.examples.map((ex) => (
                  <p key={ex} className="font-mono text-xs" style={{ color: s.accent }}>@{ex}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── UNIQUE MODULE: Platform character limit comparison ── */}
        <section className="mt-14">
          <SectionTitle>Gaming platform username limits — comparison chart</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Every gaming platform has different username rules. Use this table to choose a name that works across all the platforms you play on.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <div className="grid grid-cols-4 px-5 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: "#0d1a1a", color: "#9ca3af" }}>
              <span>Platform</span>
              <span>Max length</span>
              <span>Allowed chars</span>
              <span>Notes</span>
            </div>
            {PLATFORM_LIMITS.map((p, i) => (
              <div
                key={p.platform}
                className="grid grid-cols-4 px-5 py-3.5 text-xs gap-2 items-center"
                style={{ borderTop: i > 0 ? "1px solid rgba(13,122,123,0.08)" : "none" }}
              >
                <span className="font-bold" style={{ color: "#0d1a1a" }}>{p.platform}</span>
                <span className="font-mono font-bold" style={{ color: "#0d7a7b" }}>{p.limit}</span>
                <span style={{ color: "#4a6060" }}>{p.chars}</span>
                <span style={{ color: "#9ca3af" }}>{p.note}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>
            Tip: designing your gamertag to fit the strictest limit (Xbox: 12 chars, letters + numbers only) ensures it works everywhere.
          </p>
        </section>

        <section className="mt-14">
          <SectionTitle>6 tips for a great gaming username</SectionTitle>
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
