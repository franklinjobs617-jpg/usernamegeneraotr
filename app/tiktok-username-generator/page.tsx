import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "TikTok Username Generator — Free TikTok Handle Ideas",
  description: "Generate unique TikTok usernames instantly. Free TikTok handle generator — creative, on-trend name ideas for your account. No sign-up needed.",
  alternates: { canonical: "https://usernamegen.online/tiktok-username-generator" },
};

const SAMPLE_TT = ["bysoleil","itslunaa","miacreates","fitwithjay","neonbloom","velvetdrift","bysophia","alextalks","peachvibe","roseedit","softbyluna","itstara"];

const TRENDING_PATTERNS = [
  { pattern: "by[Name]",       example: "bysophia",      why: "Creator attribution — popular for artists, chefs, designers" },
  { pattern: "its[Name]",      example: "itsjordann",    why: "Casual, conversational — lifestyle and personality content" },
  { pattern: "[Name]creates",  example: "miacreates",    why: "Signals creative content — art, crafts, cooking" },
  { pattern: "fit/cook/with[Name]", example: "fitwithjay", why: "Niche-first — fitness, beauty, finance content" },
  { pattern: "[Name]talks",    example: "alextalks",     why: "Commentary and opinion content" },
  { pattern: "the[Name]edit",  example: "theeditbyluna", why: "Video editing and aesthetic compilations" },
];

const RULES = [
  { rule: "Max length",    detail: "24 characters",                                           source: "TikTok Help", sourceUrl: "https://support.tiktok.com/en/account-and-privacy/account-privacy-settings/setting-your-username" },
  { rule: "Allowed",       detail: "Letters, numbers, underscores (_), periods (.)" },
  { rule: "Not allowed",   detail: "Spaces and most special characters" },
  { rule: "Change limit",  detail: "Once every 30 days — plan carefully before switching",   source: "TikTok Help", sourceUrl: "https://support.tiktok.com/en/account-and-privacy/account-privacy-settings/setting-your-username" },
  { rule: "Uniqueness",    detail: "Every TikTok username must be globally unique" },
];

const TIPS = [
  { emoji: "🎵", title: "Short wins on TikTok",          body: "Handles under 15 characters appear fully in comments and duets. Longer names get truncated in the feed — a crucial visibility issue." },
  { emoji: "🔥", title: "Lead with your niche",          body: "A niche-specific handle signals to new viewers what your channel is about before they watch a single video. TikTok's algorithm also uses handle signals for topic classification." },
  { emoji: "📱", title: "Make it speakable",             body: "TikTok creators get mentioned in podcasts, YouTube videos, and IRL. A handle people can spell from hearing it once has a compounding advantage over time." },
  { emoji: "⚡", title: "One punctuation mark max",      body: "One underscore or period is fine. Two or more make the handle hard to type on mobile and difficult to share verbally." },
  { emoji: "🌍", title: "Claim Instagram at the same time", body: "Most TikTok creators cross-post to Instagram Reels. Secure the same handle on both before you start posting — it gets harder once you have followers." },
  { emoji: "🕐", title: "One change per 30 days",        body: "TikTok limits changes to once every 30 days. You cannot quickly undo a change, so take time to choose well the first time." },
];

const FAQS = [
  { q: "How long can a TikTok username be?",          a: "TikTok usernames can be between 2 and 24 characters. In practice almost all short names are taken — expect to use 8–20 characters for a unique handle." },
  { q: "How do I change my TikTok username?",         a: "Open TikTok, go to your profile, tap Edit Profile, then tap your username. You can only change it once every 30 days." },
  { q: "Can I use spaces in a TikTok username?",      a: "No. Use underscores or periods to separate words — luna_dance or luna.dance." },
  { q: "What TikTok username style performs best?",   a: "According to TikTok creator data, handles that signal a clear niche or use the by[Name] pattern tend to drive higher profile visits from Explore. Short, memorable, and niche-relevant outperforms generic names." },
  { q: "Can I have the same username on TikTok and Instagram?", a: "Yes, and it is strongly recommended for cross-platform branding. Check availability on both before committing to either." },
  { q: "Is this TikTok username generator free?",     a: "Yes, completely free with no sign-up required." },
];

const RELATED = [
  { label: "Instagram Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Aesthetic Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Cute Generator",      href: "/cute-username-generator",      emoji: "🐾" },
  { label: "Random Generator",    href: "/random-username-generator",    emoji: "🎲" },
];

export default function TikTokPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"SoftwareApplication",name:"TikTok Username Generator",applicationCategory:"UtilitiesApplication",operatingSystem:"Web",url:"https://usernamegen.online/tiktok-username-generator",description:"Free TikTok username generator.",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQS.map(f=>({ "@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

      <section style={{ background:"linear-gradient(160deg,#0d1a1a 0%,#1a2e2e 60%,#0d2020 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-8" style={{ background:"#fff" }} />
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <Breadcrumb label="TikTok Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background:"rgba(255,255,255,0.15)",color:"#fff" }}>🎵 TikTok</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-3" style={{ color:"#fff" }}>TikTok Username Generator</h1>
          <p className="text-sm md:text-lg max-w-2xl mb-6" style={{ color:"#9ca3af" }}>Find the perfect TikTok handle in seconds. Creative, memorable, and on-trend username ideas — free, no sign-up needed.</p>
          <div className="mb-6">
            <p className="text-xs font-semibold mb-2" style={{ color:"#6b7280" }}>Sample TikTok usernames:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_TT.map(n=><span key={n} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background:"rgba(255,255,255,0.1)",color:"#d1d5db" }}>@{n}</span>)}
            </div>
          </div>
          <UsernameGenerator initialStyle="aesthetic" platformFocus="TikTok" placeholder="Enter your name or niche…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        <section className="section-gap">
          <SectionTitle>TikTok creator name patterns that work</SectionTitle>
          <p className="text-sm mb-5" style={{ color:"#4a6060" }}>Successful TikTok creators follow predictable naming patterns. According to <a href="https://www.tiktok.com/creators/creator-portal/en-us/getting-started-on-tiktok/your-tiktok-profile/" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color:"#0d7a7b" }}>TikTok's Creator Portal</a>, your username is one of the first things potential followers notice. Here are the most effective formulas with real examples.</p>
          <div className="space-y-3">
            {TRENDING_PATTERNS.map(p=>(
              <div key={p.pattern} className="bg-white rounded-xl px-4 py-3.5 flex flex-col sm:flex-row sm:items-center gap-3" style={{ border:"1px solid rgba(13,122,123,0.15)",minHeight:"56px" }}>
                <span className="font-mono text-xs font-bold px-2 py-1 rounded shrink-0" style={{ background:"#0d1a1a",color:"#0d7a7b" }}>{p.pattern}</span>
                <span className="font-mono text-sm font-semibold shrink-0 sm:w-36" style={{ color:"#0d1a1a" }}>@{p.example}</span>
                <p className="text-xs" style={{ color:"#4a6060" }}>{p.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-gap">
          <SectionTitle>TikTok username rules</SectionTitle>
          <RulesTable rules={RULES} />
        </section>

        <section className="section-gap">
          <SectionTitle>6 tips for a great TikTok username</SectionTitle>
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
