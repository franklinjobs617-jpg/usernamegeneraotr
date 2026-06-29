import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Random Username Generator — Unique Name Ideas Instantly",
  description: "Generate completely random usernames instantly. Free random username generator for any platform — unique, creative, and secure handle ideas with one click.",
  alternates: { canonical: "https://usernamegen.online/random-username-generator" },
};

const PRIVACY_TIPS = [
  { emoji: "🔒", title: "Use different names per platform", body: "The most effective privacy step is using a different random username on every platform. This prevents automated tools from linking your accounts together." },
  { emoji: "🧩", title: "Avoid any part of your real name", body: "Even partial name matches (first name, initials, nickname) can be used to identify you. A fully random name with no real-world connection is safest." },
  { emoji: "📧", title: "Pair with a random email address", body: "A random username paired with a unique email address creates a fully isolated account identity. Use different email addresses for different types of accounts." },
  { emoji: "🔢", title: "Avoid your birth year", body: "Numbers at the end of usernames are often birth years. This is one of the first things identity researchers check when linking accounts to real people." },
];

const FAQS = [
  { q: "What is a random username generator?", a: "A random username generator creates unique handle ideas without input from the user. It combines words from unpredictable categories to produce names unlikely to already be taken on major platforms." },
  { q: "Why should I use a random username?", a: "Random usernames protect your privacy by preventing cross-platform linking of your accounts. They are also more likely to be available than names based on your real name or common words." },
  { q: "Are randomly generated usernames secure?", a: "A random username provides privacy by being non-identifiable, but it does not replace a strong password. Pair a random username with a unique, strong password stored in a password manager." },
  { q: "Can I use random usernames on every platform?", a: "Yes. Our generator produces names that follow standard username rules — no spaces or unusual special characters — making them valid on virtually any platform." },
  { q: "Is the random username generator free?", a: "Yes, completely free. No account or sign-up required. Generate unlimited random username ideas." },
];

const RELATED = [
  { label: "Instagram Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Gaming Generator",    href: "/gaming-username-generator",    emoji: "🎮" },
  { label: "Aesthetic Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Discord Generator",   href: "/discord-username-generator",   emoji: "💬" },
];

export default function RandomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Random Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/random-username-generator", description: "Free random username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #f5f3ff 0%, #ede9fe 60%, #f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#7c3aed" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Random Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#7c3aed", color: "#fff" }}>
            🎲 Random
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Random Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Generate completely random, unique usernames with one click. No keyword needed — just hit Generate and get 20 fresh ideas instantly, for any platform.
          </p>
          <UsernameGenerator initialStyle="random" placeholder="Leave blank for fully random results…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: Privacy guide ── */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <Shield size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>How random usernames protect your privacy</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Using random usernames is one of the most effective steps you can take to protect your online privacy. Here is how to do it properly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRIVACY_TIPS.map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-5 flex gap-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <span className="text-2xl shrink-0">{t.emoji}</span>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#0d1a1a" }}>{t.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#4a6060" }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy score visual */}
          <div className="mt-6 bg-white rounded-xl p-5" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <p className="text-sm font-bold mb-3" style={{ color: "#0d1a1a" }}>Username privacy comparison</p>
            <div className="space-y-3">
              {[
                { label: "Real name (john.smith)",          score: 10, color: "#ef4444" },
                { label: "Name + birth year (john1994)",    score: 25, color: "#f97316" },
                { label: "Nickname (johnny_j)",             score: 50, color: "#eab308" },
                { label: "Random word combo (PixelFox42)",  score: 80, color: "#22c55e" },
                { label: "Fully random (TurboRex_Wink)",    score: 97, color: "#0d7a7b" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="text-xs w-52 shrink-0" style={{ color: "#4a6060" }}>{row.label}</span>
                  <div className="flex-1 h-2 rounded-full" style={{ background: "#f0f9f9" }}>
                    <div className="h-2 rounded-full transition-all" style={{ width: `${row.score}%`, background: row.color }} />
                  </div>
                  <span className="text-xs font-semibold w-8 text-right" style={{ color: row.color }}>{row.score}%</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>Privacy score = difficulty of linking username to your real identity</p>
          </div>
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
