import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Xbox Username Generator — Free Xbox Gamertag Ideas",
  description: "Generate cool Xbox gamertags instantly. Free Xbox username generator — bold, battle-ready handle ideas. Your one free name change deserves a great choice.",
  alternates: { canonical: "https://usernamegen.online/xbox-username-generator" },
};

const SAMPLE_XBOX = ["VoidStrike","IronFang","SteelReaper","PhantomBolt","NeonWolf","ApexClaw","ShadowRex","GhostFang","CrimsonHawk","FrostBlade","CyberWolf","NullReaper"];

const SCORE = [
  { label: "Under 12 characters",      good: "VoidStrike",     bad: "VoidStrikeKillmaster", tip: "Short names display better on leaderboards, kill feeds, and friend lists" },
  { label: "No numbers appended",       good: "IronFang",       bad: "IronFang9999",          tip: "Appended numbers signal a fallback — try a word variation instead" },
  { label: "Two syllables or fewer",    good: "SteelWolf",      bad: "PhantomShadowReaper",   tip: "Two-syllable names are easiest to remember and say aloud" },
  { label: "Letters and numbers only",  good: "NeonHawk",       bad: "Neon_Hawk",             tip: "Xbox does not allow underscores — design clean from the start" },
  { label: "Strong power imagery",      good: "VoidFang",       bad: "CoolguyXbox",           tip: "Names with power imagery feel more competitive in multiplayer lobbies" },
];

const RULES = [
  { rule: "Length",          detail: "1 to 12 characters for the name portion",                    source: "Xbox Support", sourceUrl: "https://support.xbox.com/en-US/help/account-profile/profile/gamertag-update" },
  { rule: "Allowed",         detail: "Letters and numbers only — no underscores, hyphens, or special characters" },
  { rule: "If name is taken",detail: "Xbox adds a numeric suffix (e.g. #1234) — your chosen name still shows first" },
  { rule: "First change",    detail: "Free — every Xbox account gets exactly one free gamertag change",             source: "Xbox Support", sourceUrl: "https://support.xbox.com/en-US/help/account-profile/profile/gamertag-update" },
  { rule: "Further changes", detail: "Approximately $9.99 USD per change after the first" },
];

const TIPS = [
  { emoji: "🕹️", title: "12 characters is the real limit",    body: "Xbox displays gamertags cleanly up to 12 characters. If your name is taken, Xbox adds a # suffix automatically — focus on nailing those 12 characters." },
  { emoji: "⚔️", title: "Bold works best on Xbox",            body: "Xbox culture skews competitive. Names like VoidStrike, IronFang, and SteelReaper feel natural in multiplayer lobbies. Soft or cutesy names can feel out of place." },
  { emoji: "🔡", title: "Letters and numbers only",           body: "Unlike PlayStation or Steam, Xbox gamertags cannot include underscores or hyphens. Plan your name accordingly." },
  { emoji: "💸", title: "Use your free change wisely",        body: "Every Xbox account gets exactly one free gamertag change. After that, each change costs ~$9.99. Take time to find the right name." },
  { emoji: "🌐", title: "Match PlayStation and Steam too",    body: "If you game across platforms, consistent gamertags help friends find you. Check availability everywhere before committing." },
  { emoji: "🔢", title: "Let Xbox handle the suffix",         body: "If your gamertag is taken, Xbox adds a numeric suffix automatically. You can still claim a clean version of your chosen name." },
];

const FAQS = [
  { q: "How long can an Xbox gamertag be?",                    a: "Xbox gamertags can be up to 12 characters. If your chosen name is already taken, Xbox automatically appends a unique numeric suffix (e.g. #1234) to distinguish you while keeping your chosen name visible." },
  { q: "How much does it cost to change an Xbox gamertag?",    a: "Your first Xbox gamertag change is free. Every subsequent change costs approximately $9.99 USD through the Xbox console, app, or website." },
  { q: "Can I use underscores in my Xbox gamertag?",           a: "No. Xbox gamertags support letters and numbers only. Underscores, hyphens, periods, and special characters are not permitted." },
  { q: "What happens if my Xbox gamertag is already taken?",   a: "Xbox automatically adds a numeric suffix (e.g. VoidStrike#7291). Other players see your full name with the suffix — your chosen name still appears first." },
  { q: "What are good Xbox gamertag ideas?",                   a: "Bold, short, and action-oriented. Popular styles combine a powerful adjective with a weapon or creature — IronWolf, SteelReaper, VoidFang. Use our Gaming style for names in this direction." },
  { q: "Is the Xbox username generator free?",                 a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "Gaming Generator",  href: "/gaming-username-generator",  emoji: "🎮" },
  { label: "Discord Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Roblox Generator",  href: "/roblox-username-generator",  emoji: "🧱" },
  { label: "Random Generator",  href: "/random-username-generator",  emoji: "🎲" },
];

export default function XboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"SoftwareApplication",name:"Xbox Username Generator",applicationCategory:"UtilitiesApplication",operatingSystem:"Web",url:"https://usernamegen.online/xbox-username-generator",description:"Free Xbox gamertag generator.",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQS.map(f=>({ "@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

      <section style={{ background:"linear-gradient(160deg,#052e16 0%,#0d2e1a 60%,#0d1a1a 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background:"#22c55e" }} />
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <Breadcrumb label="Xbox Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background:"#16a34a",color:"#fff" }}>🕹️ Xbox</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-3" style={{ color:"#fff" }}>Xbox Username Generator</h1>
          <p className="text-sm md:text-lg max-w-2xl mb-6" style={{ color:"#9ca3af" }}>Generate cool Xbox gamertags instantly. Bold, battle-ready name ideas — because your one free gamertag change deserves a great choice.</p>
          <div className="mb-6">
            <p className="text-xs font-semibold mb-2" style={{ color:"#6b7280" }}>Sample Xbox gamertags:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_XBOX.map(n=><span key={n} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background:"rgba(22,163,74,0.2)",color:"#86efac" }}>@{n}</span>)}
            </div>
          </div>
          <UsernameGenerator initialStyle="gaming" platformFocus="Xbox" placeholder="Enter a keyword or name…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        <section className="section-gap">
          <div className="flex items-center gap-2 mb-3">
            <Star size={18} style={{ color:"#0d7a7b" }} />
            <SectionTitle>What makes a great Xbox gamertag?</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color:"#4a6060" }}>Use these five criteria to evaluate any gamertag before spending your free change. According to <a href="https://support.xbox.com/en-US/help/account-profile/profile/gamertag-update" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color:"#0d7a7b" }}>Xbox's official guidelines</a>, gamertags must be unique, appropriate, and under 12 characters.</p>
          <div className="space-y-3">
            {SCORE.map(c=>(
              <div key={c.label} className="bg-white rounded-xl p-4" style={{ border:"1px solid rgba(13,122,123,0.15)" }}>
                <p className="text-sm font-bold mb-2" style={{ color:"#0d1a1a" }}>{c.label}</p>
                <div className="flex flex-col sm:flex-row gap-3 mb-2">
                  <div className="flex items-center gap-2"><span className="text-xs font-bold" style={{ color:"#16a34a" }}>✓ Good</span><span className="font-mono text-xs" style={{ color:"#0d1a1a" }}>{c.good}</span></div>
                  <div className="flex items-center gap-2"><span className="text-xs font-bold" style={{ color:"#dc2626" }}>✗ Avoid</span><span className="font-mono text-xs" style={{ color:"#6b7280" }}>{c.bad}</span></div>
                </div>
                <p className="text-xs" style={{ color:"#4a6060" }}>{c.tip}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-gap">
          <SectionTitle>Xbox gamertag rules</SectionTitle>
          <RulesTable rules={RULES} />
        </section>

        <section className="section-gap">
          <SectionTitle>6 tips for the perfect Xbox gamertag</SectionTitle>
          <TipsGrid tips={TIPS} />
        </section>

        <section className="section-gap">
          <SectionTitle>Frequently asked questions</SectionTitle>
          <FAQSection faqs={FAQS} />
        </section>

        <section className="section-gap mb-12 md:mb-16">
          <h2 className="text-base font-bold mb-4" style={{ color:"#4a6060" }}>Related generators</h2>
          <RelatedGrid related={RELATED} />
        </section>
      </div>
    </>
  );
}
