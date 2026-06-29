import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "TikTok Username Generator — Free TikTok Handle Ideas",
  description:
    "Generate unique TikTok usernames instantly. Free TikTok handle generator with creative, trending, and viral-ready name ideas.",
  alternates: { canonical: "https://usernamegen.online/tiktok-username-generator" },
  openGraph: {
    title: "TikTok Username Generator — Free TikTok Handle Ideas",
    description: "Generate unique TikTok usernames instantly. Creative and viral-ready handle ideas in seconds.",
    url: "https://usernamegen.online/tiktok-username-generator",
  },
};

const RULES = [
  { rule: "Max length", detail: "24 characters" },
  { rule: "Min length", detail: "2 characters (in practice, very short names are all taken)" },
  { rule: "Allowed characters", detail: "Letters, numbers, underscores (_), periods (.)" },
  { rule: "Not allowed", detail: "Spaces and most special characters" },
  { rule: "Uniqueness", detail: "Every TikTok username must be globally unique" },
  { rule: "Change limit", detail: "You can change your TikTok username once every 30 days" },
];

const TIPS = [
  {
    emoji: "🎵",
    title: "Short wins on TikTok",
    body: "TikTok culture rewards brevity. Handles under 15 characters appear fully in comments, duets, and stitches. Longer names get truncated in the feed.",
  },
  {
    emoji: "🔥",
    title: "Think about your niche",
    body: "TikTok's algorithm is content-first, but a niche-specific handle (like dancewithjay or cookingwithsam) signals to new viewers what your channel is about before they watch a single video.",
  },
  {
    emoji: "📱",
    title: "Make it easy to say out loud",
    body: "TikTok creators often get mentioned in podcasts, YouTube videos, and IRL conversation. A handle people can say and spell from hearing it alone has a huge advantage.",
  },
  {
    emoji: "⚡",
    title: "Avoid heavy punctuation",
    body: "One underscore or period is fine. Two or more make the handle hard to type on mobile and difficult to remember. Keep it clean.",
  },
  {
    emoji: "🌍",
    title: "Check availability on Instagram too",
    body: "Most TikTok creators cross-post to Instagram Reels. Secure the same handle on both platforms before you start posting — it gets harder to reclaim once you have followers.",
  },
  {
    emoji: "🕐",
    title: "You only get one change per month",
    body: "TikTok limits username changes to once every 30 days. Take time to choose carefully — you cannot quickly undo a change if you regret it.",
  },
];

const FAQS = [
  {
    q: "How long can a TikTok username be?",
    a: "TikTok usernames can be between 2 and 24 characters. In practice, almost all short names are taken, so expect to use 8–20 characters for a unique handle.",
  },
  {
    q: "How do I change my TikTok username?",
    a: "Open TikTok, go to your profile, tap Edit Profile, then tap your username. Type your new username and tap Save. You can only change it once every 30 days.",
  },
  {
    q: "Can I use spaces in a TikTok username?",
    a: "No. TikTok usernames cannot contain spaces. Use underscores or periods to separate words — for example, luna_dance or luna.dance.",
  },
  {
    q: "What makes a TikTok username go viral?",
    a: "No username alone makes content go viral, but a memorable, short handle helps viewers remember and search for you after discovering your content. Niche-relevant names also help TikTok surface your profile to the right audience.",
  },
  {
    q: "Can I have the same TikTok username as someone on Instagram?",
    a: "Yes. TikTok and Instagram have separate username databases. However, for personal branding consistency, it is best to secure the same handle on both platforms.",
  },
  {
    q: "Is this TikTok username generator free?",
    a: "Yes, completely free with no sign-up required. Generate as many TikTok username ideas as you need.",
  },
];

const RELATED = [
  { label: "Instagram Username Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Aesthetic Username Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Cute Username Generator", href: "/cute-username-generator", emoji: "🐾" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function TikTokPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "TikTok Username Generator",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: "https://usernamegen.online/tiktok-username-generator",
            description: "Free TikTok username generator. Create unique TikTok handles instantly.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">TikTok Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🎵 TikTok
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            TikTok Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Find the perfect TikTok handle in seconds. Generate creative, memorable, and on-trend usernames for your TikTok account — free, no sign-up needed.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="aesthetic" platformFocus="TikTok" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} className="text-brand-500" />
            <h2 className="text-xl font-bold text-gray-900">TikTok username rules</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            TikTok has specific requirements for usernames. Our generator follows all of these rules so every suggestion is valid.
          </p>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            {RULES.map((r, i) => (
              <div key={r.rule} className={`flex items-start gap-4 px-5 py-4 text-sm ${i < RULES.length - 1 ? "border-b border-gray-50" : ""}`}>
                <span className="font-medium text-gray-700 w-40 shrink-0">{r.rule}</span>
                <span className="text-gray-500">{r.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a great TikTok username</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TIPS.map((tip) => (
              <div key={tip.title} className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{tip.emoji}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a TikTok username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              A TikTok username generator creates unique handle ideas for your TikTok account. TikTok has over 1 billion active users, meaning almost every simple name combination is already taken. A generator saves you from manually checking dozens of names by producing fresh, creative ideas instantly.
            </p>
            <p>
              Our tool lets you enter a keyword — your name, a theme, or a niche — and choose a style. The generator then produces 20 handle ideas tuned to TikTok culture. You can refresh as many times as needed until you find one that feels right.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-gray-800 hover:text-brand-600 select-none list-none">
                  {faq.q}
                  <ChevronRight size={16} className="shrink-0 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                  <p className="pt-3">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Related generators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-brand-300 hover:shadow-card transition-all">
                <div className="text-2xl mb-1">{r.emoji}</div>
                <div className="text-xs font-medium text-gray-600">{r.label}</div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
