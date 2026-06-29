import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, RulesTable, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Username Generator — Free IG Handle Ideas",
  description: "Generate unique Instagram usernames instantly. Free IG handle generator with aesthetic, cute, and creative ideas. Check availability in one click.",
  alternates: { canonical: "https://usernamegen.online/instagram-username-generator" },
};

const RULES = [
  { rule: "Max length", detail: "30 characters" },
  { rule: "Allowed", detail: "Letters, numbers, periods (.), underscores (_)" },
  { rule: "Not allowed", detail: "Spaces, @, #, $, and other special characters" },
  { rule: "Case", detail: "Not case-sensitive — @Luna and @luna are the same account" },
  { rule: "Change limit", detail: "You can change your username twice within 14 days" },
  { rule: "Uniqueness", detail: "Every username must be globally unique" },
];

const TIPS = [
  { emoji: "🌸", title: "Keep it under 20 characters", body: "Instagram allows 30, but shorter handles are easier to tag, remember, and type on mobile. 10–18 characters is the sweet spot." },
  { emoji: "🔍", title: "Make it searchable", body: "If your username hints at your niche — photography, fitness, food — it helps new followers discover you through Instagram search." },
  { emoji: "✨", title: "Use periods and underscores wisely", body: "If your name is taken, try luna.diary or luna_diary. Avoid multiple consecutive underscores — they look messy and are hard to type." },
  { emoji: "🎨", title: "Match your aesthetic", body: "Soft, lowercase names like peachbloom or velvet.haze signal a visual style before anyone sees a single post." },
  { emoji: "🔗", title: "Check across platforms first", body: "Before committing, verify the same handle on TikTok, Twitter, and YouTube. Consistent handles build stronger personal brands." },
  { emoji: "🚫", title: "Avoid numbers at the end", body: "Usernames ending in 123 read as afterthoughts. Try a word variation instead of appending numbers." },
];

// ── Unique module: IG style inspiration cards ──
const IG_STYLES = [
  { style: "Soft girl",     color: "#fce7f3", text: "#9d174d", examples: ["peachbloom", "honeylune", "rosesoft"] },
  { style: "Cottagecore",   color: "#ecfdf5", text: "#065f46", examples: ["willowdaisy", "fernbloom", "meadowsage"] },
  { style: "Dark academia", color: "#1c1917", text: "#d6d3d1", examples: ["inkmist", "nocturnelux", "shadowpage"] },
  { style: "Y2K",           color: "#ede9fe", text: "#5b21b6", examples: ["chrome.star", "pixieglow", "velvet.y2k"] },
  { style: "Minimalist",    color: "#f0f9f9", text: "#0d7a7b", examples: ["studiolunar", "sageplain", "mistworks"] },
  { style: "Bold creator",  color: "#0d1a1a", text: "#0d7a7b", examples: ["byjayla", "withsoleil", "shotbyluna"] },
];

const FAQS = [
  { q: "How do I change my Instagram username?", a: "Go to your profile, tap Edit Profile, then tap your username and type a new one. Instagram allows two changes within any 14-day period." },
  { q: "What characters are allowed in an Instagram username?", a: "Letters (a–z), numbers (0–9), periods (.), and underscores (_). Spaces and special characters like @, #, or ! are not allowed." },
  { q: "How long can an Instagram username be?", a: "Up to 30 characters. There is no minimum, but handles shorter than 3 characters are rarely available." },
  { q: "Can two accounts have the same Instagram username?", a: "No. Every Instagram username is globally unique. If a name seems available but cannot be claimed, it may be reserved or recently deleted." },
  { q: "What makes a good Instagram username for growth?", a: "Short, niche-relevant, easy to spell, and consistent with your content style. Avoid numbers, excessive underscores, and anything that dates quickly." },
  { q: "Is the Instagram username generator free?", a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "TikTok Generator",     href: "/tiktok-username-generator",     emoji: "🎵" },
  { label: "Aesthetic Generator",  href: "/aesthetic-username-generator",  emoji: "🌸" },
  { label: "Cute Generator",       href: "/cute-username-generator",       emoji: "🐾" },
  { label: "Random Generator",     href: "/random-username-generator",     emoji: "🎲" },
];

export default function InstagramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Instagram Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/instagram-username-generator", description: "Free Instagram username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #fdf2f8 0%, #fce7f3 60%, #f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-60px] w-48 h-48 rounded-full opacity-10" style={{ background: "#ec4899" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Instagram Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#ec4899", color: "#fff" }}>
            📸 Instagram
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Instagram Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Find the perfect IG handle — aesthetic, cute, or bold. Generate 20 unique Instagram username ideas instantly and check availability in one click.
          </p>
          <UsernameGenerator initialStyle="aesthetic" platformFocus="Instagram" placeholder="Enter your name or niche…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">
        <AffiliateCard />

        {/* ── UNIQUE MODULE: IG Style Inspiration ── */}
        <section className="mt-14">
          <SectionTitle>Instagram username styles — find your vibe</SectionTitle>
          <p className="text-sm mb-6" style={{ color: "#4a6060" }}>
            Instagram rewards aesthetic consistency. Your username is the first signal of your visual identity. Here are the main IG content styles and example handles for each.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {IG_STYLES.map((s) => (
              <div key={s.style} className="rounded-xl p-4 overflow-hidden" style={{ background: s.color, border: `1px solid ${s.color}` }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: s.text }}>{s.style}</p>
                <div className="flex flex-col gap-1">
                  {s.examples.map((ex) => (
                    <span key={ex} className="font-mono text-xs font-semibold" style={{ color: s.text }}>@{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "#9ca3af" }}>
            Select the Aesthetic or Cute style in the generator above to get names in these directions.
          </p>
        </section>

        {/* Rules */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Instagram username rules</SectionTitle>
          </div>
          <RulesTable rules={RULES} />
        </section>

        {/* Tips */}
        <section className="mt-14">
          <SectionTitle>6 tips for a great Instagram username</SectionTitle>
          <TipsGrid tips={TIPS} />
        </section>

        {/* What is */}
        <section className="mt-14">
          <SectionTitle>What is an Instagram username generator?</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#4a6060" }}>
            <p>An Instagram username generator creates unique handle ideas for your IG account. With over 2 billion active Instagram users, almost every simple name combination is taken. A generator saves you from manually checking dozens of names by producing fresh, creative ideas instantly.</p>
            <p>Our tool is specifically tuned for Instagram culture — it understands that IG leans toward aesthetic, soft, and visually evocative handles. Select a style that matches your content, enter a keyword or niche, and get 20 ideas you can check immediately by clicking the platform initial next to each result.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <SectionTitle>Frequently asked questions</SectionTitle>
          <FAQSection faqs={FAQS} />
        </section>

        {/* Related */}
        <section className="mt-14 mb-16">
          <h2 className="text-base font-bold mb-4" style={{ color: "#4a6060" }}>Related generators</h2>
          <RelatedGrid related={RELATED} />
        </section>
      </div>
    </>
  );
}
