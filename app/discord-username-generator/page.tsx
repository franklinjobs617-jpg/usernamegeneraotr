import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Discord Username Generator — Free Discord Handle Ideas",
  description: "Generate unique Discord usernames instantly. Since Discord removed discriminators in 2023, every handle must be globally unique — find yours now.",
  alternates: { canonical: "https://usernamegen.online/discord-username-generator" },
};

const SAMPLE_DC = ["VoidKnight","SilentFox","NeonSage","PhantomCore","IronPulse","GlitchWolf","CipherBolt","NullReaper","ApexShade","ByteHawk","SteelViper","DataWolf"];

const COMPARISON = [
  { field: "Purpose",         username: "Unique ID used to find and add you", display: "Name shown in servers — not unique" },
  { field: "Uniqueness",      username: "Globally unique (case-insensitive)",  display: "Not unique — many users can share one" },
  { field: "Customisation",   username: "One name across all Discord",         display: "Different name in every server" },
  { field: "How to change",   username: "Settings → My Account → Username",   display: "Server Settings → Edit Server Profile" },
  { field: "Character limit", username: "2–32 characters",                    display: "1–32 characters, spaces allowed" },
  { field: "Allowed chars",   username: "Letters, numbers, . _ -",            display: "Almost anything, including emoji" },
];

const RULES = [
  { rule: "Length",       detail: "2 to 32 characters",                                                    source: "Discord Support", sourceUrl: "https://support.discord.com/hc/en-us/articles/12620128861463" },
  { rule: "Allowed",      detail: "Letters, numbers, underscores (_), periods (.), hyphens (-)" },
  { rule: "Not allowed",  detail: "Spaces at start or end; the word 'discord'; impersonation of staff" },
  { rule: "System",       detail: "Single unique @username since 2023 — discriminator (#0000) system removed", source: "Discord Blog", sourceUrl: "https://discord.com/blog/usernames" },
  { rule: "Uniqueness",   detail: "Globally unique, case-insensitive" },
  { rule: "Display name", detail: "Separate from username — can be anything and differ per server" },
];

const TIPS = [
  { emoji: "💬", title: "Username vs display name",       body: "Your @username is how people find you. Your display name is what shows in servers. Keep username simple and memorable — get creative with display names." },
  { emoji: "🎮", title: "Match your gaming identity",     body: "Most Discord users are gamers. A handle fitting your gaming persona feels natural in gaming servers and communities." },
  { emoji: "🔗", title: "Match your other platforms",    body: "If you have a handle on Twitch, Steam, or Xbox, use the same or similar name on Discord. Friends find you faster." },
  { emoji: "✍️", title: "Stay under 18 characters",      body: "Discord allows 32 characters, but long names get cut off in voice channels and small server windows." },
  { emoji: "🌐", title: "Plan ahead — discriminators are gone", body: "Since 2023 every username must be globally unique. More names are taken now than ever — be more creative than you think you need to be." },
  { emoji: "🔒", title: "Avoid personal information",    body: "Discord is often used in public servers with strangers. Skip usernames containing your real name, location, or birth year." },
];

const FAQS = [
  { q: "Does Discord still use the # discriminator system?",     a: "No. Discord removed discriminators in 2023. Every user now has a unique @username globally, similar to Twitter or Instagram handles. This means more names are taken — plan ahead." },
  { q: "What is the difference between a Discord username and display name?", a: "Your @username is your unique identifier used to find and add you. Your display name is what appears in servers and can be customised per server — you can have a different display name in every server while keeping one username." },
  { q: "How do I change my Discord username?",                   a: "Click the gear icon (User Settings) at the bottom left, go to My Account, then click Edit next to your username. Note that frequent changes may trigger a temporary cooldown." },
  { q: "Can I have spaces in my Discord username?",              a: "No. Spaces are not allowed in Discord usernames. Use underscores or hyphens instead. Your display name can include spaces." },
  { q: "How long can a Discord username be?",                    a: "Between 2 and 32 characters. For best readability in servers and voice channels, aim for 8–18 characters." },
  { q: "Is the Discord username generator free?",                a: "Yes, completely free. No account required." },
];

const RELATED = [
  { label: "Xbox Generator",    href: "/xbox-username-generator",   emoji: "🕹️" },
  { label: "Gaming Generator",  href: "/gaming-username-generator", emoji: "🎮" },
  { label: "Roblox Generator",  href: "/roblox-username-generator", emoji: "🧱" },
  { label: "Random Generator",  href: "/random-username-generator", emoji: "🎲" },
];

export default function DiscordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"SoftwareApplication",name:"Discord Username Generator",applicationCategory:"UtilitiesApplication",operatingSystem:"Web",url:"https://usernamegen.online/discord-username-generator",description:"Free Discord username generator.",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQS.map(f=>({ "@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

      <section style={{ background:"linear-gradient(160deg,#eef2ff 0%,#e0e7ff 60%,#f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background:"#6366f1" }} />
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <Breadcrumb label="Discord Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background:"#5865f2",color:"#fff" }}>💬 Discord</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-3" style={{ color:"#0d1a1a" }}>Discord Username Generator</h1>
          <p className="text-sm md:text-lg max-w-2xl mb-6" style={{ color:"#4a6060" }}>Since Discord removed discriminators in 2023, every handle must be globally unique. Generate creative Discord usernames instantly — gaming-ready and available to check now.</p>
          <div className="mb-6">
            <p className="text-xs font-semibold mb-2" style={{ color:"#4a6060" }}>Sample Discord usernames:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_DC.map(n=><span key={n} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background:"rgba(88,101,242,0.1)",color:"#4338ca" }}>@{n}</span>)}
            </div>
          </div>
          <UsernameGenerator initialStyle="gaming" platformFocus="Discord" placeholder="Enter a keyword or name…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        <section className="section-gap">
          <SectionTitle>Discord username vs display name — the full difference</SectionTitle>
          <p className="text-sm mb-5" style={{ color:"#4a6060" }}>Discord has two separate names that work very differently. Most users do not understand the distinction until it causes a problem. According to the <a href="https://discord.com/blog/usernames" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color:"#0d7a7b" }}>official Discord blog</a>, the 2023 username system change was specifically designed to make this distinction clearer.</p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(13,122,123,0.15)" }}>
            <div className="grid grid-cols-3 px-4 py-3 text-xs font-bold uppercase tracking-wide" style={{ background:"#0d1a1a",color:"#9ca3af" }}>
              <span>Field</span><span style={{ color:"#0d7a7b" }}>@Username</span><span style={{ color:"#fff" }}>Display name</span>
            </div>
            {COMPARISON.map((c,i)=>(
              <div key={c.field} className="grid grid-cols-3 px-4 py-3 gap-2" style={{ borderTop:i>0?"1px solid rgba(13,122,123,0.08)":"none" }}>
                <span className="text-xs font-semibold" style={{ color:"#0d1a1a" }}>{c.field}</span>
                <span className="text-xs" style={{ color:"#4a6060" }}>{c.username}</span>
                <span className="text-xs" style={{ color:"#4a6060" }}>{c.display}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-gap">
          <SectionTitle>Discord username rules</SectionTitle>
          <RulesTable rules={RULES} />
        </section>

        <section className="section-gap">
          <SectionTitle>6 tips for a great Discord username</SectionTitle>
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
