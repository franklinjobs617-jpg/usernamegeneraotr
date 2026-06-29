import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Roblox Username Generator — Free Roblox Name Ideas",
  description:
    "Generate cool Roblox usernames instantly. Free Roblox name generator with gaming, cool, and unique handle ideas for your Roblox account.",
  alternates: { canonical: "https://usernamegen.online/roblox-username-generator" },
  openGraph: {
    title: "Roblox Username Generator — Free Roblox Name Ideas",
    description: "Generate cool Roblox usernames instantly. Unique gaming handle ideas for your Roblox account.",
    url: "https://usernamegen.online/roblox-username-generator",
  },
};

const RULES = [
  { rule: "Length", detail: "3 to 20 characters" },
  { rule: "Allowed characters", detail: "Letters (a–z, A–Z), numbers (0–9), underscores (_)" },
  { rule: "Not allowed", detail: "Spaces, hyphens, periods, and all other special characters" },
  { rule: "Start character", detail: "Must start with a letter, not a number or underscore" },
  { rule: "Uniqueness", detail: "Every Roblox username must be unique globally" },
  { rule: "Change cost", detail: "Changing your username costs 1,000 Robux (approximately $10)" },
];

const TIPS = [
  {
    emoji: "🎮",
    title: "Think about your game persona",
    body: "Your Roblox username follows you across every game. Choose something that represents how you want to be known — whether as a skilled fighter, a builder, or a role-player.",
  },
  {
    emoji: "💰",
    title: "Choose carefully — changes cost Robux",
    body: "Unlike most platforms, changing your Roblox username costs 1,000 Robux. Take time to find a name you will be happy with long term before committing.",
  },
  {
    emoji: "⚔️",
    title: "Gaming names work best",
    body: "Bold, action-oriented names like ShadowBlade or VoidHunter fit Roblox culture well. Overly cute or professional names can feel out of place in gaming contexts.",
  },
  {
    emoji: "🔢",
    title: "Numbers can help, but place them smartly",
    body: "If your preferred name is taken, adding a number works — but put it in the middle or after a meaningful word, not just at the end. VoidX99 reads better than Void99.",
  },
  {
    emoji: "📏",
    title: "Keep it under 15 characters",
    body: "Roblox allows up to 20 characters, but shorter names look cleaner in leaderboards, group chats, and friend lists. Aim for 8–14 characters.",
  },
  {
    emoji: "🔤",
    title: "No spaces — use underscores",
    body: "Roblox does not allow spaces. If you want a two-word name, use an underscore: Shadow_Blade instead of Shadow Blade. One underscore maximum looks cleanest.",
  },
];

const FAQS = [
  {
    q: "How long can a Roblox username be?",
    a: "Roblox usernames must be between 3 and 20 characters long. Names shorter than 3 characters are not allowed, and names over 20 characters will be rejected.",
  },
  {
    q: "How much does it cost to change a Roblox username?",
    a: "Changing your Roblox username costs 1,000 Robux, which is approximately $10 USD. This is a one-time cost each time you change your name, so choose carefully.",
  },
  {
    q: "Can I use spaces in a Roblox username?",
    a: "No. Roblox usernames cannot contain spaces. Use underscores to separate words — for example, Shadow_Blade or Dark_Wolf.",
  },
  {
    q: "What characters are allowed in a Roblox username?",
    a: "Roblox usernames can contain letters (a–z, A–Z), numbers (0–9), and underscores (_). Spaces, hyphens, periods, and other special characters are not allowed.",
  },
  {
    q: "Can my Roblox username start with a number?",
    a: "No. Roblox usernames must start with a letter. Starting with a number or underscore is not permitted.",
  },
  {
    q: "What are cool Roblox username ideas?",
    a: "Cool Roblox usernames typically combine action words with powerful imagery — names like ShadowBlade, VoidHunter, PhantomStrike, or NeonWolf are popular styles. Use our Gaming style option to generate names in this style.",
  },
  {
    q: "Is the Roblox username generator free?",
    a: "Yes, completely free with no account or sign-up required. Generate as many Roblox username ideas as you need.",
  },
];

const RELATED = [
  { label: "Xbox Username Generator", href: "/xbox-username-generator", emoji: "🕹️" },
  { label: "Discord Username Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Gaming Username Generator", href: "/gaming-username-generator", emoji: "🎮" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function RobloxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Roblox Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/roblox-username-generator", description: "Free Roblox username generator. Create cool Roblox names instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Roblox Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🧱 Roblox
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Roblox Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Find the perfect Roblox username — cool, unique, and gaming-ready. Generate hundreds of Roblox name ideas instantly, for free.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="gaming" platformFocus="Roblox" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} className="text-brand-500" />
            <h2 className="text-xl font-bold text-gray-900">Roblox username rules</h2>
          </div>
          <p className="text-gray-500 text-sm mb-5">
            Roblox has strict username requirements. Since changing your name costs Robux, it is important to get it right the first time.
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a great Roblox username</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a Roblox username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>A Roblox username generator creates unique name ideas for your Roblox account. With over 380 million registered Roblox users, most simple name combinations are already taken — a generator saves you time by instantly producing creative alternatives.</p>
            <p>Our generator is tuned to Roblox naming conventions: no spaces or special characters, starts with a letter, and uses the bold, gaming-style vocabulary that fits the Roblox community. Select the Gaming style for names with the right energy for Roblox culture.</p>
            <p>Remember: changing your Roblox username costs 1,000 Robux. Use our generator to find several names you like, then check availability on Roblox before deciding.</p>
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
