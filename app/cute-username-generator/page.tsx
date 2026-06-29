import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cute Username Generator — Adorable & Sweet Handle Ideas",
  description:
    "Generate cute usernames for Instagram, TikTok, and more. Adorable, sweet, and wholesome username ideas — free and instant.",
  alternates: { canonical: "https://usernamegen.online/cute-username-generator" },
};

const EXAMPLES = [
  { category: "Animal-inspired", names: ["BunnyPaws", "KittyBliss", "PandaHugs", "FoxySmile"] },
  { category: "Sweet & food", names: ["HoneyPop", "MochiSoft", "SugarPetal", "CookieJoy"] },
  { category: "Nature & soft", names: ["DaisyBloom", "PeachGlow", "RoseDream", "LilyHaze"] },
  { category: "Bubbly & fun", names: ["BubblePop", "SparkleJoy", "GlitterStar", "PixieDust"] },
];

const TIPS = [
  { emoji: "🐾", title: "Animal words are timeless", body: "Bunny, kitty, panda, fox, and bear are perennially cute and never feel dated. Pair with a soft adjective or action word for instant charm." },
  { emoji: "🍡", title: "Food names create warmth", body: "Honey, mochi, cookie, peach, and sugar evoke comfort and sweetness. They work especially well on lifestyle and food accounts." },
  { emoji: "✨", title: "Add sparkle words", body: "Words like sparkle, glitter, shimmer, and glow amplify cuteness without being overwhelming. Use one per username — not three." },
  { emoji: "💕", title: "Keep it positive", body: "Cute usernames work best when they convey happiness, softness, or playfulness. Avoid anything that could read as sarcastic or edgy — it undercuts the cute effect." },
  { emoji: "🔡", title: "CamelCase or all lowercase", body: "HoneyPaws reads playfully cute. honeypaws reads softly cute. Both work — choose based on whether you want a bubbly or aesthetic feel." },
  { emoji: "🌈", title: "Avoid numbers if possible", body: "Numbers rarely add cuteness. If your preferred name is taken, try a synonym or a different pairing rather than appending 123 or your birth year." },
];

const FAQS = [
  { q: "What are some cute username ideas?", a: "Popular cute username styles include animal + action (BunnyHops, KittyWink), food + emotion (HoneyBliss, MochiSmile), and nature + soft adjective (PeachBloom, DaisyGlow). Use our Cute style to generate dozens of ideas instantly." },
  { q: "What makes a username cute?", a: "Cute usernames typically combine soft, round-sounding words with wholesome imagery. Animal names (bunny, kitty, panda), sweet foods (honey, mochi, cookie), and nature words (peach, daisy, rose) are the core vocabulary of cute usernames." },
  { q: "Are cute usernames good for Instagram?", a: "Yes, especially for lifestyle, food, animal, and personal brand accounts. A cute handle signals warmth and approachability, which can increase profile clicks and follows from new visitors." },
  { q: "Can I use a cute username for gaming?", a: "Absolutely. Some gamers deliberately choose cute or unexpected names as a personal brand move. Names like BunnySniper or KittyRage create memorable contrast in gaming contexts." },
  { q: "Is the cute username generator free?", a: "Yes, completely free. No sign-up or account needed." },
];

const RELATED = [
  { label: "Aesthetic Username Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Instagram Username Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "TikTok Username Generator", href: "/tiktok-username-generator", emoji: "🎵" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function CutePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Cute Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/cute-username-generator", description: "Free cute username generator. Adorable and sweet handle ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Cute Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🐾 Cute
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Cute Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate adorable, sweet, and wholesome usernames for Instagram, TikTok, and any platform. Find a cute handle that makes people smile — free and instant.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="cute" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cute username ideas by category</h2>
          <p className="text-gray-500 text-sm mb-6">Need inspiration? Here are some examples of what cute usernames look like across different sub-styles.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXAMPLES.map((cat) => (
              <div key={cat.category} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-700 text-sm mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.names.map((n) => (
                    <span key={n} className="font-mono text-xs bg-pink-50 text-pink-600 px-2.5 py-1 rounded-lg">{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a great cute username</h2>
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
