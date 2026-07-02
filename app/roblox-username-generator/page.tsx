import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roblox Username Generator — Free Cool Roblox Names",
  description: "Generate cool Roblox usernames instantly. Changing your Roblox name costs 1,000 Robux — use our free generator to find one you will love long-term.",
  alternates: { canonical: "https://usernamegen.online/roblox-username-generator" },
};

const SAMPLE_RBLX = ["ShadowBlade_","VoidHunter","PhantomStrike","NeonWolf","IronFang","SteelReaper","GhostRider","DarkPulse","CyberVoid","NullStrike","ApexHawk","BladeRush"];

const CHECKLIST = [
  { item: "Under 15 characters?",                      why: "Shorter names display better across all Roblox game interfaces and leaderboards" },
  { item: "Starts with a letter?",                     why: "Roblox requires usernames to start with a letter — numbers and underscores at the start are rejected" },
  { item: "No spaces or special characters?",          why: "Only letters, numbers, and underscores are allowed" },
  { item: "Would you still like it in 2 years?",       why: "Changes cost Robux — avoid names tied to trends that may feel dated" },
  { item: "Checked availability on Roblox.com?",       why: "Availability must be confirmed on the actual platform — no tool can guarantee it" },
];

const RULES = [
  { rule: "Length",       detail: "3 to 20 characters",                                                   source: "Roblox Support", sourceUrl: "https://en.help.roblox.com/hc/en-us/articles/203313560" },
  { rule: "Allowed",      detail: "Letters (a–z, A–Z), numbers (0–9), underscores (_)" },
  { rule: "Not allowed",  detail: "Spaces, hyphens, periods, and all other special characters" },
  { rule: "Start char",   detail: "Must start with a letter — not a number or underscore",               source: "Roblox Help", sourceUrl: "https://en.help.roblox.com/hc/en-us/articles/203313560" },
  { rule: "Change cost",  detail: "1,000 Robux (~$10 USD) every time you change — choose carefully" },
];

const TIPS = [
  { emoji: "🎮", title: "Think about your game persona",    body: "Your Roblox username follows you across every game. Choose something representing how you want to be known — fighter, builder, or role-player." },
  { emoji: "💰", title: "Changes cost Robux",              body: "Unlike most platforms, changing your Roblox username costs 1,000 Robux (~$10). Take real time to find a name you will be happy with long-term." },
  { emoji: "⚔️", title: "Gaming names work best",         body: "Bold, action-oriented names like ShadowBlade or VoidHunter fit Roblox culture. Overly cute or professional names can feel out of place." },
  { emoji: "🔢", title: "Place numbers strategically",    body: "If your name is taken, add a number in the middle or after a meaningful word. VoidX99 reads better than Void99." },
  { emoji: "📏", title: "Keep it under 15 characters",    body: "Roblox allows 20 but shorter names look cleaner in leaderboards, chats, and friend lists. Aim for 8–14." },
  { emoji: "🔤", title: "Use underscores carefully",      body: "No spaces allowed — use one underscore to separate words: Shadow_Blade. One underscore maximum looks cleanest." },
];

const FAQS = [
  { q: "How much does it cost to change a Roblox username?", a: "Changing your Roblox username costs 1,000 Robux, approximately $10 USD. This applies every time you change your name, so choosing carefully from the start is crucial." },
  { q: "How long can a Roblox username be?",                  a: "Between 3 and 20 characters. For best display across all Roblox games, aim for 8–14 characters." },
  { q: "Can my Roblox username start with a number?",         a: "No. Roblox usernames must start with a letter. Starting with a number or underscore is not permitted." },
  { q: "What are cool Roblox username ideas?",                a: "Cool Roblox names combine action words with powerful imagery — ShadowBlade, VoidHunter, PhantomStrike, NeonWolf. Use our Gaming style to generate names in this direction." },
  { q: "Is the Roblox username generator free?",              a: "Yes, completely free. No account or sign-up required." },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"SoftwareApplication",name:"Roblox Username Generator",applicationCategory:"UtilitiesApplication",operatingSystem:"Web",url:"https://usernamegen.online/roblox-username-generator",description:"Free Roblox username generator.",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQS.map(f=>({ "@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

      <section style={{ background:"linear-gradient(160deg,#fef2f2 0%,#fee2e2 60%,#f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background:"#ef4444" }} />
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <Breadcrumb label="Roblox Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background:"#dc2626",color:"#fff" }}>🧱 Roblox</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-3" style={{ color:"#0d1a1a" }}>Roblox Username Generator</h1>
          <p className="text-sm md:text-lg max-w-2xl mb-6" style={{ color:"#4a6060" }}>Find the perfect Roblox username — cool, unique, and gaming-ready. Changing your name costs 1,000 Robux, so use our generator to find one you will love long-term.</p>
          <div className="mb-4 flex items-start gap-3 p-3 rounded-xl" style={{ background:"#fef3c7",border:"1px solid #fcd34d" }}>
            <AlertTriangle size={16} style={{ color:"#d97706",flexShrink:0,marginTop:2 }} />
            <p className="text-xs" style={{ color:"#92400e" }}><strong>Changing costs 1,000 Robux (~$10).</strong> Use the checklist below before committing to any name.</p>
          </div>
          <div className="mb-6">
            <p className="text-xs font-semibold mb-2" style={{ color:"#4a6060" }}>Sample Roblox usernames:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_RBLX.map(n=><span key={n} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background:"rgba(220,38,38,0.1)",color:"#991b1b" }}>@{n}</span>)}
            </div>
          </div>
          <UsernameGenerator initialStyle="gaming" placeholder="Enter a keyword or style…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        <section className="section-gap">
          <SectionTitle>Before you commit — Roblox username checklist</SectionTitle>
          <p className="text-sm mb-5" style={{ color:"#4a6060" }}>Since changing your Roblox username costs Robux, run through this checklist first. According to <a href="https://en.help.roblox.com/hc/en-us/articles/203313560" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color:"#0d7a7b" }}>Roblox's official help documentation</a>, there are no refunds for username change purchases.</p>
          <div className="space-y-3">
            {CHECKLIST.map((c,i)=>(
              <div key={i} className="bg-white rounded-xl px-4 py-4 flex gap-4 items-start" style={{ border:"1px solid rgba(13,122,123,0.15)",minHeight:"56px" }}>
                <div className="w-6 h-6 rounded-full border-2 shrink-0 mt-0.5" style={{ borderColor:"#0d7a7b" }} />
                <div>
                  <p className="text-sm font-bold" style={{ color:"#0d1a1a" }}>{c.item}</p>
                  <p className="text-xs mt-0.5" style={{ color:"#4a6060" }}>{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-gap">
          <SectionTitle>Roblox username rules</SectionTitle>
          <RulesTable rules={RULES} />
        </section>

        <section className="section-gap">
          <SectionTitle>6 tips for a great Roblox username</SectionTitle>
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
