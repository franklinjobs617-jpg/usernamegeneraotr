import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Random Username Generator — Unique Name Ideas Instantly",
  description: "Generate completely random usernames instantly. Free random username generator for any platform — unique, creative, and privacy-safe handle ideas with one click.",
  alternates: { canonical: "https://usernamegen.online/random-username-generator" },
};

const SAMPLE_RND = ["TurboRex","QuantumDrift","FuzzyPanda","NiftyBolt","GroovyRaven","ZestyFox","SlickWizard","PeppyNinja","CrispyHawk","WickedPulse","SilverDash","CosmicFox"];

const PRIVACY_TIPS = [
  { emoji:"🔒",title:"Use different names per platform",  body:"The most effective privacy step is using a different random username on every platform. This prevents automated tools from linking your accounts together across the web." },
  { emoji:"🧩",title:"Avoid any part of your real name",  body:"Even partial name matches (first name, initials, nickname) can be used to identify you. A fully random name with no real-world connection is safest." },
  { emoji:"📧",title:"Pair with a random email address",  body:"A random username paired with a unique email creates a fully isolated account identity. Use different emails for different types of accounts." },
  { emoji:"🔢",title:"Never use your birth year",         body:"Numbers at the end of usernames are often birth years — this is one of the first things researchers check when linking accounts to real people." },
];

const PRIVACY_SCORES = [
  { label:"Real name (john.smith)",         score:10, color:"#ef4444" },
  { label:"Name + birth year (john1994)",   score:25, color:"#f97316" },
  { label:"Nickname (johnny_j)",            score:50, color:"#eab308" },
  { label:"Random word combo (PixelFox42)", score:80, color:"#22c55e" },
  { label:"Fully random (TurboRex_Wink)",   score:97, color:"#0d7a7b" },
];

const FAQS = [
  { q:"What is a random username generator?",   a:"A tool that creates unique handle ideas without any input from the user. It combines words from unpredictable categories to produce names that are unlikely to be taken on major platforms and impossible to link back to your real identity." },
  { q:"Why use a random username?",             a:"Random usernames protect your privacy by preventing cross-platform linking. They are also more likely to be available than names based on your real name or common words. For accounts where anonymity matters, a random username is the safest choice." },
  { q:"Are random usernames secure?",           a:"A random username provides privacy by being non-identifiable, but it does not replace a strong password. Pair a random username with a unique, strong password stored in a password manager for maximum account security." },
  { q:"Can I use random usernames on any platform?", a:"Yes. Our generator produces names following standard username rules — no spaces or unusual special characters — making them valid on virtually any platform." },
  { q:"Is the random username generator free?", a:"Yes, completely free. No account or sign-up required. Generate unlimited random username ideas." },
];

const RELATED = [
  { label:"Instagram Generator",href:"/instagram-username-generator",emoji:"📸" },
  { label:"Gaming Generator",   href:"/gaming-username-generator",   emoji:"🎮" },
  { label:"Aesthetic Generator",href:"/aesthetic-username-generator",emoji:"🌸" },
  { label:"Discord Generator",  href:"/discord-username-generator",  emoji:"💬" },
];

export default function RandomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"SoftwareApplication",name:"Random Username Generator",applicationCategory:"UtilitiesApplication",operatingSystem:"Web",url:"https://usernamegen.online/random-username-generator",description:"Free random username generator.",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQS.map(f=>({ "@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

      <section style={{ background:"linear-gradient(160deg,#f5f3ff 0%,#ede9fe 60%,#f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background:"#7c3aed" }} />
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <Breadcrumb label="Random Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background:"#7c3aed",color:"#fff" }}>🎲 Random</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-3" style={{ color:"#0d1a1a" }}>Random Username Generator</h1>
          <p className="text-sm md:text-lg max-w-2xl mb-6" style={{ color:"#4a6060" }}>Generate completely random, unique usernames with one click. No keyword needed — get 20 fresh ideas instantly for any platform, with full privacy protection.</p>
          <div className="mb-6">
            <p className="text-xs font-semibold mb-2" style={{ color:"#4a6060" }}>Sample random usernames:</p>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_RND.map(n=><span key={n} className="font-mono text-xs px-2.5 py-1 rounded-lg font-semibold" style={{ background:"rgba(124,58,237,0.1)",color:"#6d28d9" }}>@{n}</span>)}
            </div>
          </div>
          <UsernameGenerator initialStyle="random" placeholder="Leave blank for fully random results…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        <section className="section-gap">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} style={{ color:"#0d7a7b" }} />
            <SectionTitle>How random usernames protect your privacy</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color:"#4a6060" }}>Using random usernames is one of the most effective steps you can take to protect your online privacy. According to the <a href="https://www.eff.org/deeplinks/2022/10/understanding-how-usernames-can-be-used-track-you-across-platforms" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color:"#0d7a7b" }}>Electronic Frontier Foundation</a>, username reuse across platforms is a primary method used to link online identities without user consent.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {PRIVACY_TIPS.map(t=>(
              <div key={t.title} className="bg-white rounded-xl p-4 flex gap-3" style={{ border:"1px solid rgba(13,122,123,0.15)" }}>
                <span className="text-xl shrink-0">{t.emoji}</span>
                <div>
                  <h3 className="font-bold text-sm mb-0.5" style={{ color:"#0d1a1a" }}>{t.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color:"#4a6060" }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy score visual */}
          <div className="bg-white rounded-xl p-5" style={{ border:"1px solid rgba(13,122,123,0.15)" }}>
            <p className="text-sm font-bold mb-4" style={{ color:"#0d1a1a" }}>Username privacy score — how hard is it to link to your identity?</p>
            <div className="space-y-3">
              {PRIVACY_SCORES.map(row=>(
                <div key={row.label} className="flex items-center gap-3">
                  <span className="text-xs w-48 shrink-0" style={{ color:"#4a6060" }}>{row.label}</span>
                  <div className="flex-1 h-2 rounded-full" style={{ background:"#f0f9f9" }}>
                    <div className="h-2 rounded-full" style={{ width:`${row.score}%`,background:row.color }} />
                  </div>
                  <span className="text-xs font-bold w-8 text-right shrink-0" style={{ color:row.color }}>{row.score}%</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color:"#9ca3af" }}>Score = estimated difficulty of linking the username to your real identity through automated cross-platform tools.</p>
          </div>
        </section>

        <section className="section-gap"><SectionTitle>Frequently asked questions</SectionTitle><FAQSection faqs={FAQS} /></section>
        <section className="section-gap mb-12 md:mb-16"><h2 className="text-base font-bold mb-4" style={{ color:"#4a6060" }}>Related generators</h2><RelatedGrid related={RELATED} /></section>
      </div>
    </>
  );
}
