import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Goth Username Generator — Dark & Edgy Handle Ideas",
  description:
    "Generate dark, gothic, and edgy usernames instantly. Free goth username generator with mysterious, moody, and alternative handle ideas for any platform.",
  alternates: { canonical: "https://usernamegen.online/goth-username-generator" },
};

const GOTH_STYLES = [
  { name: "Classic goth", examples: ["CrimsonShroud", "NightShade_", "VoidRaven", "DarkIris"], desc: "Victorian-inspired darkness, ravens, shadows, and midnight imagery." },
  { name: "Pastel goth", examples: ["PinkVoid", "SoftSpecter", "LilacGrave", "PastelDark"], desc: "Cute meets creepy — soft colors with macabre themes." },
  { name: "Ethereal dark", examples: ["PhantomLune", "ShadowPetal", "NocturnBloom", "WraithSoft"], desc: "Romantic darkness — gothic meets aesthetic." },
  { name: "Cyber goth", examples: ["NeonVoid", "CyberWraith", "DarkPixel", "GlitchSoul"], desc: "Industrial and digital darkness — neon meets night." },
];

const DARK_WORDS = {
  nouns: ["Void", "Wraith", "Specter", "Shadow", "Raven", "Shroud", "Crypt", "Dusk", "Nocturne", "Phantom"],
  adjectives: ["Dark", "Crimson", "Obsidian", "Hollow", "Silent", "Pale", "Sinister", "Eternal", "Vile", "Noir"],
  nature: ["Thorn", "Raven", "Crow", "Ash", "Ember", "Eclipse", "Storm", "Night", "Moon", "Bone"],
};

const TIPS = [
  { emoji: "🖤", title: "Combine dark imagery with unexpected words", body: "The most memorable goth usernames pair something dark with something unexpected — SilentBloom, VoidPetal, PhantomLune. Pure darkness without contrast can feel unoriginal." },
  { emoji: "🌙", title: "Latin and Old English add depth", body: "Words like nox (night), umbra (shadow), morte (death), and lux (light) add sophistication. Mixed with English words, they create handles that feel genuinely unique." },
  { emoji: "🩸", title: "Avoid overdone combinations", body: "Names like DarkBlood, DeathAngel, and BlackRose are extremely common in goth communities. Aim for combinations that feel fresh while still fitting the aesthetic." },
  { emoji: "✦", title: "Underscores work well for goth style", body: "A single underscore — Shadow_Thorn, Void_Wraith — adds visual rhythm that fits the goth aesthetic well. More than one underscore starts to look messy." },
  { emoji: "🔠", title: "Mixed case creates emphasis", body: "CrimsonVoid and CRIMSONVOID feel different. Most goth accounts use standard CamelCase or all lowercase. All caps reads as aggressive rather than atmospheric." },
  { emoji: "🌹", title: "Pastel goth is a valid aesthetic too", body: "Goth is not monolithic. Pastel goth, soft goth, and ethereal dark aesthetics use softer imagery — lavender, roses, moons — combined with dark undertones. Our generator covers all sub-styles." },
];

const FAQS = [
  { q: "What is a goth username?", a: "A goth username is a handle that reflects gothic, dark, or alternative aesthetics. These usernames typically use dark imagery (shadows, ravens, voids, crypts), deep colors (crimson, obsidian, midnight), and atmospheric language (nocturne, specter, wraith)." },
  { q: "What are good goth username ideas?", a: "Good goth usernames combine dark imagery with strong, atmospheric words. Popular combinations include shadow + a noun (ShadowThorn), a dark adjective + nature (CrimsonRaven), or Latin-inspired words (NoxBloom, UmbraPhantom). Use our generator to get dozens of ideas instantly." },
  { q: "What words make a username gothic?", a: "Words that create gothic usernames include: void, wraith, specter, phantom, shadow, raven, crimson, obsidian, nocturne, shroud, crypt, dusk, thorn, and eclipse. Combining two or more of these produces strongly gothic handles." },
  { q: "What is pastel goth, and can I get username ideas for it?", a: "Pastel goth combines cute aesthetics (soft colors, kawaii imagery) with gothic or creepy themes (ghosts, graveyards, death). Good pastel goth usernames mix soft words with dark ones: PinkSpecter, LavenderVoid, SoftGrave. Select our Random or Cute style and look for names with this contrast." },
  { q: "Are goth usernames appropriate for all platforms?", a: "Yes, as long as the username does not violate platform rules. Most platforms prohibit usernames that promote violence or that are outright offensive. Atmospheric goth names that reference darkness, ravens, or shadows are generally fine on all major platforms." },
  { q: "Is the goth username generator free?", a: "Yes, completely free. No sign-up required." },
];

const RELATED = [
  { label: "Aesthetic Username Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
  { label: "Gaming Username Generator", href: "/gaming-username-generator", emoji: "🎮" },
  { label: "Discord Username Generator", href: "/discord-username-generator", emoji: "💬" },
];

export default function GothPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Goth Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/goth-username-generator", description: "Free goth username generator. Dark and edgy handle ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Goth Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-gray-200 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🖤 Goth
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Goth Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate dark, atmospheric, and edgy usernames for any platform. From classic goth to pastel goth — find a handle that matches your alternative aesthetic.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="random" />
        </section>

        <AffiliateCard />

        {/* Goth sub-styles */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Goth username styles</h2>
          <p className="text-gray-500 text-sm mb-6">Gothic aesthetics span many sub-styles. Here are the main ones with example handles for each.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GOTH_STYLES.map((s) => (
              <div key={s.name} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{s.name}</h3>
                <p className="text-xs text-gray-400 mb-3 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.examples.map((ex) => (
                    <span key={ex} className="font-mono text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dark word bank */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Gothic vocabulary for username inspiration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(DARK_WORDS).map(([category, words]) => (
              <div key={category} className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 capitalize">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {words.map((w) => (
                    <span key={w} className="text-xs bg-white border border-gray-200 text-gray-700 px-2 py-0.5 rounded font-mono">{w}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">Combine words from different columns to create original goth usernames — e.g. CrimsonRaven, PhantomThorn, VoidEclipse.</p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a great goth username</h2>
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
