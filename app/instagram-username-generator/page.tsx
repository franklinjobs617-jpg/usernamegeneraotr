import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Instagram Username Generator — Free IG Handle Ideas",
  description:
    "Generate unique Instagram usernames instantly. Free IG handle generator with aesthetic, cute, and creative ideas. Check availability in one click.",
  alternates: { canonical: "https://usernamegen.online/instagram-username-generator" },
  openGraph: {
    title: "Instagram Username Generator — Free IG Handle Ideas",
    description: "Generate unique Instagram usernames instantly. Aesthetic, cute, and creative IG handles in seconds.",
    url: "https://usernamegen.online/instagram-username-generator",
  },
};

const RULES = [
  { rule: "Max length", detail: "30 characters" },
  { rule: "Allowed characters", detail: "Letters, numbers, periods (.), underscores (_)" },
  { rule: "Not allowed", detail: "Spaces, @, #, $, !, ?, and other special characters" },
  { rule: "Case", detail: "Not case-sensitive — @Luna and @luna are the same account" },
  { rule: "Change limit", detail: "You can change your username twice within 14 days" },
  { rule: "Uniqueness", detail: "Every username must be unique across all Instagram accounts" },
];

const TIPS = [
  {
    emoji: "🌸",
    title: "Keep it under 20 characters",
    body: "Instagram allows up to 30, but shorter handles are easier to tag, remember, and type on mobile. Aim for 10–18 characters for the sweet spot.",
  },
  {
    emoji: "🔍",
    title: "Make it searchable",
    body: "Instagram search works on usernames and names separately. If your username hints at your niche (photography, fitness, food), it helps new followers discover you organically.",
  },
  {
    emoji: "✨",
    title: "Use periods and underscores wisely",
    body: "If your preferred name is taken, try adding a period or underscore: luna.diary, luna_diary. Avoid multiple consecutive underscores — they look messy and are hard to type.",
  },
  {
    emoji: "🎨",
    title: "Match your aesthetic",
    body: "Aesthetic accounts perform better when the handle matches the vibe. Soft, lowercase names like peachbloom or velvet.haze signal a certain visual style before anyone sees a single post.",
  },
  {
    emoji: "🔗",
    title: "Check across platforms first",
    body: "Before committing, check the same handle on TikTok, Twitter, and YouTube. Consistent handles across platforms build stronger personal brands.",
  },
  {
    emoji: "🚫",
    title: "Avoid numbers at the end",
    body: "Usernames ending in 123 or 99 read as afterthoughts — someone who found their first choice taken. Try a word variation instead of appending numbers.",
  },
];

const FAQS = [
  {
    q: "How do I change my Instagram username?",
    a: "Go to your Instagram profile, tap Edit Profile, then tap your current username and type a new one. Instagram allows you to change your username twice within any 14-day period.",
  },
  {
    q: "What characters are allowed in an Instagram username?",
    a: "Instagram usernames can contain letters (a–z), numbers (0–9), periods (.), and underscores (_). Spaces and special characters like @, #, or ! are not allowed.",
  },
  {
    q: "How long can an Instagram username be?",
    a: "Instagram usernames can be up to 30 characters long. There is no minimum length requirement, but usernames shorter than 3 characters are rarely available.",
  },
  {
    q: "Can two Instagram accounts have the same username?",
    a: "No. Every Instagram username must be unique. If a username appears available but you cannot claim it, it may be reserved or recently deleted and in a holding period.",
  },
  {
    q: "What makes a good Instagram username for growth?",
    a: "A good Instagram username for growth is short, niche-relevant, easy to spell, and consistent with your content style. Avoid numbers, excessive underscores, and anything that dates quickly.",
  },
  {
    q: "Can I use my real name as my Instagram username?",
    a: "Yes, and for personal brands it often works well. However, if your name is common, it is likely taken. Use our generator to find creative variations of your name.",
  },
  {
    q: "Is the Instagram username generator free?",
    a: "Yes, completely free. No account or sign-up required. Generate as many Instagram username ideas as you like.",
  },
];

const RELATED = [
  { label: "TikTok Username Generator", href: "/tiktok-username-generator", emoji: "🎵" },
  { label: "Aesthetic Username Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Cute Username Generator", href: "/cute-username-generator", emoji: "🐾" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function InstagramPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Instagram Username Generator",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: "https://usernamegen.online/instagram-username-generator",
            description: "Free Instagram username generator. Generate unique IG handles instantly.",
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

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Instagram Username Generator</span>
        </nav>

        {/* Hero */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
            📸 Instagram
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Instagram Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate unique, creative Instagram usernames in seconds. Find the perfect IG handle — aesthetic, cute, funny, or professional — and check availability instantly.
          </p>
        </section>

        {/* Tool */}
        <section className="mb-10">
          <UsernameGenerator initialStyle="aesthetic" platformFocus="Instagram" />
        </section>

        {/* Affiliate */}
        <AffiliateCard />

        {/* Instagram Rules */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} className="text-brand-500" />
            <h2 className="text-xl font-bold text-gray-900">Instagram username rules</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Before you pick a username, make sure it meets Instagram requirements. Our generator follows all of these rules automatically.
          </p>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            {RULES.map((r, i) => (
              <div
                key={r.rule}
                className={`flex items-start gap-4 px-5 py-4 text-sm ${i < RULES.length - 1 ? "border-b border-gray-50" : ""}`}
              >
                <span className="font-medium text-gray-700 w-40 shrink-0">{r.rule}</span>
                <span className="text-gray-500">{r.detail}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            6 tips for a great Instagram username
          </h2>
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

        {/* What is */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is an Instagram username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              An Instagram username generator is a tool that creates unique, available-style handles for Instagram accounts. Instead of manually brainstorming and checking dozens of names, a generator produces creative ideas in seconds based on your keyword, name, or interests.
            </p>
            <p>
              Our generator is specifically tuned for Instagram — it understands that IG culture leans toward aesthetic, soft, and visually evocative handles. Whether you want something dreamy like <span className="font-mono text-brand-600 bg-brand-50 px-1 rounded">velvet.aurora</span>, bold like <span className="font-mono text-brand-600 bg-brand-50 px-1 rounded">NeonBloom_</span>, or clean and professional like <span className="font-mono text-brand-600 bg-brand-50 px-1 rounded">StudioLuna</span>, you can select the style that matches your content.
            </p>
            <p>
              Once you find a username you like, click the Instagram icon next to it to check if the handle is already taken. If it is, hit Refresh for a new batch of ideas.
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* Related */}
        <section className="mt-14">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Related generators</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {RELATED.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-brand-300 hover:shadow-card transition-all"
              >
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
