import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aesthetic Username Generator — Soft, Dreamy Handle Ideas",
  description:
    "Generate aesthetic usernames for Instagram, TikTok, and more. Soft, dreamy, and visually beautiful username ideas — free and instant.",
  alternates: { canonical: "https://usernamegen.online/aesthetic-username-generator" },
};

const STYLES = [
  { name: "Soft girl", examples: ["peachbloom", "velvet.haze", "honey.lune"], desc: "Pastel tones, soft imagery, gentle and feminine vibes." },
  { name: "Dark aesthetic", examples: ["midnight.iris", "noir.petal", "shadowbloom"], desc: "Deep, moody, and mysterious — dark florals and shadow imagery." },
  { name: "Cottagecore", examples: ["willowdaisy", "fernbloom", "meadow.soft"], desc: "Nature-inspired, rustic, and wholesome woodland vibes." },
  { name: "Ethereal / angel", examples: ["lunahalo", "pearl.drift", "celestia"], desc: "Otherworldly, light, and angelic — stars, moons, and clouds." },
  { name: "Y2K / retro", examples: ["chrome.star", "pixie2000", "velvet.y2k"], desc: "Early 2000s nostalgia — metallic, bubbly, and fun." },
  { name: "Minimalist", examples: ["studiolunar", "sage.plain", "mist.works"], desc: "Clean, simple, lowercase — effortlessly understated." },
];

const TIPS = [
  { emoji: "🌸", title: "Go lowercase", body: "Aesthetic accounts overwhelmingly use lowercase usernames. luna.drift reads softer and more intentional than LunaDrift. Most platforms allow mixed case — use it strategically." },
  { emoji: "🌙", title: "Use nature and celestial imagery", body: "Words like bloom, petal, lunar, mist, aurora, and velvet are perennially aesthetic. They evoke mood without being literal, and they age well." },
  { emoji: "✦", title: "A single period adds depth", body: "A period between two words (luna.bloom, velvet.haze) creates a visual rhythm that plain CamelCase does not. One period is elegant — two or more look cluttered." },
  { emoji: "🎨", title: "Match your color palette", body: "If your feed is warm and peachy, lean into honey, gold, and rose. If it is cool and moody, try silver, mist, and twilight. Your username is the first line of your visual brand." },
  { emoji: "🔤", title: "Keep it under 15 characters", body: "Aesthetic names work best when they feel effortless. Long usernames undercut the minimalist quality that aesthetic accounts aim for." },
  { emoji: "🔍", title: "Check all platforms at once", body: "Aesthetic creators usually post on Instagram, TikTok, Pinterest, and Tumblr simultaneously. Claim the same handle on all platforms before announcing your rebrand." },
];

const FAQS = [
  {
    q: "What is an aesthetic username?",
    a: "An aesthetic username is a handle designed to evoke a specific visual or emotional mood — soft, dreamy, dark, cottagecore, ethereal, or minimalist. These usernames typically use nature words, celestial imagery, soft adjectives, and intentional punctuation like periods.",
  },
  {
    q: "What words make a username aesthetic?",
    a: "Words commonly used in aesthetic usernames include: luna, velvet, bloom, petal, mist, aurora, ivory, pearl, willow, sage, haze, drift, soft, lune, and celestia. Combining two of these words — like velvet.bloom or luna.drift — creates a classic aesthetic handle.",
  },
  {
    q: "Are lowercase usernames more aesthetic?",
    a: "Yes, for most aesthetic styles. Lowercase usernames (like peachbloom or velvet.haze) feel softer and more intentional than CamelCase or ALL CAPS versions. Most platforms allow lowercase, though Instagram and TikTok are case-insensitive.",
  },
  {
    q: "What aesthetic username style is most popular on TikTok?",
    a: "Soft girl, cottagecore, and ethereal styles are most popular on TikTok. Names combining nature imagery with soft adjectives (willowdream, peachbloom, lunaglow) perform consistently well.",
  },
  {
    q: "Can I use the same aesthetic username on Instagram and TikTok?",
    a: "Yes, and it is recommended for brand consistency. Check availability on both platforms — and Pinterest, Tumblr, and Twitter — before committing to an aesthetic handle.",
  },
  {
    q: "Is the aesthetic username generator free?",
    a: "Yes, completely free. No account or sign-up needed.",
  },
];

const RELATED = [
  { label: "Instagram Username Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Cute Username Generator", href: "/cute-username-generator", emoji: "🐾" },
  { label: "TikTok Username Generator", href: "/tiktok-username-generator", emoji: "🎵" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function AestheticPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Aesthetic Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/aesthetic-username-generator", description: "Free aesthetic username generator. Soft, dreamy handle ideas for Instagram and TikTok.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Aesthetic Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🌸 Aesthetic
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Aesthetic Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate soft, dreamy, and visually beautiful usernames for Instagram, TikTok, and beyond. Find an aesthetic handle that matches your vibe — free and instant.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="aesthetic" />
        </section>

        <AffiliateCard />

        {/* Aesthetic styles showcase */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Aesthetic username styles</h2>
          <p className="text-gray-500 text-sm mb-6">
            The aesthetic universe contains many distinct sub-styles. Each has its own visual language and naming conventions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {STYLES.map((s) => (
              <div key={s.name} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{s.name}</h3>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.examples.map((ex) => (
                    <span key={ex} className="font-mono text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a perfect aesthetic username</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">What makes a username aesthetic?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>An aesthetic username communicates a visual mood before anyone sees a single post. The best aesthetic handles combine evocative imagery (nature, celestial, textile) with intentional structure — lowercase, a single period, or two soft words joined together.</p>
            <p>Popular aesthetic word categories include celestial terms (luna, aurora, nova), nature words (bloom, petal, willow, mist), tactile textures (velvet, ivory, silk), and abstract moods (haze, drift, soft, lune). Combining two from different categories — like velvet.aurora or mist.bloom — creates handles that feel both original and instantly aesthetic.</p>
            <p>Our generator is specifically tuned for the aesthetic style, pulling from a curated vocabulary of soft, dreamy, and visually evocative words. Select the Aesthetic style and enter a keyword or leave it blank for fully random aesthetic ideas.</p>
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
