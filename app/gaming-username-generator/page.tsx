import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Gaming Username Generator — Cool Gamertag Ideas",
  description:
    "Generate cool gaming usernames and gamertags instantly. Free gaming name generator — bold, battle-ready handles for Xbox, Discord, Twitch, Steam, Roblox, and more.",
  alternates: { canonical: "https://usernamegen.online/gaming-username-generator" },
  openGraph: {
    title: "Gaming Username Generator — Cool Gamertag Ideas",
    description: "Generate cool gaming usernames instantly. Bold, battle-ready handles for every platform.",
    url: "https://usernamegen.online/gaming-username-generator",
  },
};

// ── Static sample results visible to crawlers ──
const SAMPLE_GAMING = [
  "PhantomStrike","VoidReaper","SteelFang","NeonHawk",
  "IronWolf","ShadowBolt","ApexViper","GhostRider",
  "FrostClaw","CyberWolf","BladeRush","StormReaper",
];

// ── Gaming style cards ──
const GAMING_STYLES = [
  {
    name: "FPS / Shooter",
    bg: "linear-gradient(135deg,#0d1a2e,#1a3a5c)",
    accent: "#4a9fd4",
    examples: ["PhantomStrike","VoidSniper","SteelReaper","NeonHawk"],
    desc: "Fast, lethal, precise — built for competitive shooters.",
  },
  {
    name: "RPG / Fantasy",
    bg: "linear-gradient(135deg,#1a0d2e,#3a1a5c)",
    accent: "#c084fc",
    examples: ["IronSage","ShadowBlade","DragonFang","StormCaster"],
    desc: "Epic, lore-inspired names for fantasy and role-playing.",
  },
  {
    name: "Stealth / Ninja",
    bg: "linear-gradient(135deg,#0d1a1a,#1a3030)",
    accent: "#0d7a7b",
    examples: ["SilentViper","GhostStrike","NullShade","VoidKnight"],
    desc: "Quiet, dangerous, elusive — built for stealth gameplay.",
  },
  {
    name: "Speed / Racing",
    bg: "linear-gradient(135deg,#2e1a0d,#5c3a0d)",
    accent: "#fcd34d",
    examples: ["TurboRex","NeonRush","HyperBolt","ApexDash"],
    desc: "Fast-paced energy for racing and speed-run communities.",
  },
];

// ── Random gaming username ideas by category (targets 'random gaming username generator') ──
const RANDOM_GAMING = [
  {
    category: "Power + Creature",
    color: "#0d1a2e", text: "#4a9fd4",
    names: ["QuantumFang","NullReaper","VoidPulse","GlitchStrike","CipherWolf","ByteHunter"],
  },
  {
    category: "Element + Action",
    color: "#1a0d2e", text: "#c084fc",
    names: ["FrostBlade","EmberClaw","StormFang","CinderVoid","BoltReaper","IceStrike"],
  },
  {
    category: "Shadow + Identity",
    color: "#0d1a1a", text: "#0d7a7b",
    names: ["PhantomWolf","SilentHawk","GhostFang","NullShade","VoidRaven","DarkPulse"],
  },
  {
    category: "Tech + Power",
    color: "#2e2a0d", text: "#fcd34d",
    names: ["PixelReaper","NeonBolt","CyberStrike","DataWolf","CodeFang","NullByte"],
  },
];

// ── Platform character limits (with official source links) ──
const PLATFORM_LIMITS = [
  {
    rule: "Xbox",
    detail: "Max 12 characters. Letters and numbers only — no underscores or hyphens. First change is free; subsequent changes cost ~$9.99.",
    source: "Xbox Support",
    sourceUrl: "https://support.xbox.com/en-US/help/account-profile/profile/gamertag-update",
  },
  {
    rule: "PlayStation",
    detail: "Max 16 characters. Letters, numbers, hyphens, and underscores allowed. Must start with a letter.",
    source: "PlayStation Support",
    sourceUrl: "https://www.playstation.com/en-us/support/account/change-psn-online-id/",
  },
  {
    rule: "Steam",
    detail: "Display name up to 32 characters. Not globally unique — Steam uses a separate friend code system for identification.",
    source: "Steam Support",
    sourceUrl: "https://help.steampowered.com/en/faqs/view/61FB-1D0E-5B4B-20A7",
  },
  {
    rule: "Discord",
    detail: "Max 32 characters. Globally unique since 2023 (discriminator system removed). Letters, numbers, underscores, periods, hyphens allowed.",
    source: "Discord Support",
    sourceUrl: "https://support.discord.com/hc/en-us/articles/12620128861463",
  },
  {
    rule: "Twitch",
    detail: "4–25 characters. Letters, numbers, and underscores only. Must start with a letter. Can be changed once every 60 days.",
    source: "Twitch Support",
    sourceUrl: "https://help.twitch.tv/s/article/username-change-and-recycling-policies",
  },
  {
    rule: "Roblox",
    detail: "3–20 characters. Letters, numbers, underscores. Must start with a letter. Username changes cost 1,000 Robux (~$10).",
    source: "Roblox Support",
    sourceUrl: "https://en.help.roblox.com/hc/en-us/articles/203313560",
  },
];

const TIPS = [
  { emoji: "⚔️", title: "Bold beats clever in gaming",        body: "Powerful-sounding names earn more respect in lobbies than witty ones. SteelFang and VoidSlayer read as skilled players before anyone sees your stats." },
  { emoji: "🎮", title: "Think about the leaderboard",        body: "Imagine your name at the top of a leaderboard. Does it look like a winner? Short, punchy names (IronFang, VoidX) stand out more than long descriptive ones." },
  { emoji: "🔢", title: "X works better than numbers",        body: "Adding X (IronFangX, VoidX) looks cleaner and more intentional than adding numbers. X has strong associations with gaming culture and esports." },
  { emoji: "🌐", title: "Design around Xbox's 12-char limit", body: "Xbox enforces a 12-character maximum. Design your gamertag within this constraint and it automatically works on every other platform too." },
  { emoji: "📏", title: "Avoid oversaturated tropes",         body: "Names with Shadow, Dark, or Ninja followed by numbers are everywhere. Our generator avoids the most common combinations to give you something more original." },
  { emoji: "🔗", title: "Check all platforms before committing", body: "Use the same gamertag on Xbox, PlayStation, Steam, Discord, and Twitch. Consistency helps friends find you across gaming ecosystems." },
];

const FAQS = [
  { q: "What makes a good gaming username?", a: "Short (under 12 characters for Xbox compatibility), bold, easy to remember, and fitting your gaming style. Names combining a powerful concept with an action word or creature work consistently well — IronWolf, VoidReaper, StormFang." },
  { q: "How do I generate a random gaming username?", a: "Select the Gaming style and leave the keyword field blank, then click Generate. The tool produces random gaming-style names from an extensive word bank. Hit Refresh as many times as you need." },
  { q: "What are the most popular gaming username styles?", a: "Power + animal (IronWolf, SteelFang), void/shadow + action (VoidStrike, ShadowBlast), and elemental + noun (FrostBlade, StormRider). Short, punchy, and they sound skilled." },
  { q: "Can I use the same gamertag on Xbox, PlayStation, and Steam?", a: "You can try, but each platform has a separate username database. Xbox limits gamertags to 12 characters and bans special characters — design within this limit and you have a name that works on all platforms." },
  { q: "What gaming username should I use for Twitch or YouTube?", a: "Choose a name that is easy to say, spell, and search for. Avoid numbers and excessive underscores. According to Twitch's own creator advice, handles people can recall from hearing once perform significantly better for channel discovery." },
  { q: "How do I check if a gamertag is available?", a: "Click the platform initial (I, T, X) next to any generated username to check availability directly on that platform. For Xbox specifically, you can also check at xbox.com before committing your free name change." },
  { q: "Is the gaming username generator free?", a: "Yes, completely free. No account or sign-up required. Generate as many gaming username ideas as you need." },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Gaming Username Generator",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        url: "https://usernamegen.online/gaming-username-generator",
        description: "Free gaming username generator. Cool gamertag ideas for Xbox, Discord, Twitch, Steam, and Roblox.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}} />

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(160deg,#0d1a2e 0%,#0d1a1a 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#22c55e" }} />
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <Breadcrumb label="Gaming Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: "#16a34a", color: "#fff" }}>
            🎮 Gaming
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-3" style={{ color: "#fff" }}>
            Gaming Username Generator
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mb-8" style={{ color: "#9ca3af" }}>
            Generate cool gamertags for Xbox, Discord, Twitch, Steam, and every game you play. Bold, battle-ready names — check availability on every platform instantly.
          </p>

          {/* Static sample names — visible to crawlers before JS loads */}
          <div className="mb-6">
            <p className="text-xs font-semibold mb-2" style={{ color: "#6b7280" }}>Sample gaming usernames:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_GAMING.map((name) => (
                <span key={name} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background: "rgba(13,122,123,0.3)", color: "#b2e8e8" }}>
                  @{name}
                </span>
              ))}
            </div>
          </div>

          <UsernameGenerator initialStyle="gaming" platformFocus="Discord" placeholder="Enter a keyword or leave blank for random…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── Gaming style cards ── */}
        <section className="section-gap">
          <SectionTitle>Gaming username styles</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Different game genres have different naming conventions. Choose the style that fits your platform and playstyle.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {GAMING_STYLES.map((s) => (
              <div key={s.name} className="rounded-xl p-4 md:p-5" style={{ background: s.bg }}>
                <p className="font-bold text-white text-sm mb-1">{s.name}</p>
                <p className="text-xs mb-3 hidden sm:block" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                <div className="flex flex-col gap-1">
                  {s.examples.map((ex) => (
                    <p key={ex} className="font-mono text-xs font-semibold" style={{ color: s.accent }}>@{ex}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Random gaming username ideas (targets 'random gaming username generator') ── */}
        <section className="section-gap">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Random gaming username ideas — by category</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Need a random gaming username with no keyword in mind? Here are 24 ideas organised by combination formula. Pick any name below or use it as inspiration — enter a word from any category into the generator above to get more variations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {RANDOM_GAMING.map((cat) => (
              <div key={cat.category} className="rounded-xl p-4 md:p-5" style={{ background: cat.color, border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: cat.text }}>{cat.category}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.names.map((n) => (
                    <span key={n} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background: "rgba(255,255,255,0.08)", color: cat.text }}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
            Leave the keyword field blank and select Gaming style to generate unlimited random variations instantly.
          </p>
        </section>

        {/* ── Platform limits with official sources ── */}
        <section className="section-gap">
          <SectionTitle>Gaming platform username rules</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Every gaming platform has different username constraints. Design your name to fit the strictest limit (Xbox: 12 chars, letters and numbers only) and it works everywhere. All rules link to official platform documentation.
          </p>
          <RulesTable rules={PLATFORM_LIMITS} />
          <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
            Tip: names under 12 characters using only letters and numbers work on all six platforms above without modification.
          </p>
        </section>

        {/* ── Tips ── */}
        <section className="section-gap">
          <SectionTitle>6 tips for a great gaming username</SectionTitle>
          <TipsGrid tips={TIPS} />
        </section>

        {/* ── What is ── */}
        <section className="section-gap">
          <SectionTitle>What is a gaming username generator?</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#4a6060" }}>
            <p>
              A gaming username generator creates unique gamertag ideas for online games, streaming platforms, and gaming communities. With hundreds of millions of registered accounts across Xbox, Steam, Discord, Twitch, and Roblox, finding an available name that sounds good is harder than ever.
            </p>
            <p>
              Our generator is specifically tuned for gaming culture — it combines power words, action verbs, and strong imagery to produce names that fit naturally in leaderboards, kill feeds, and Discord servers. Select the Gaming style for battle-ready results, or try Random for unexpected combinations that stand out.
            </p>
            <p>
              According to <a href="https://www.statista.com/statistics/748044/number-video-gamers-world/" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color: "#0d7a7b" }}>Statista</a>, there are over 3.3 billion video game players worldwide as of 2024 — meaning most obvious name combinations on major platforms are already taken. A generator gives you a practical shortcut to finding something original and available.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-gap">
          <SectionTitle>Frequently asked questions</SectionTitle>
          <FAQSection faqs={FAQS} />
        </section>

        {/* ── Related ── */}
        <section className="section-gap mb-12 md:mb-16">
          <h2 className="text-base font-bold mb-4" style={{ color: "#4a6060" }}>Related generators</h2>
          <RelatedGrid related={RELATED} />
        </section>
      </div>
    </>
  );
}
