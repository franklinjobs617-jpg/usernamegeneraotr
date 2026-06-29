import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Xbox Username Generator — Free Xbox Gamertag Ideas",
  description:
    "Generate cool Xbox gamertags instantly. Free Xbox username generator with unique, bold gaming name ideas. Find your perfect Xbox handle in seconds.",
  alternates: { canonical: "https://usernamegen.online/xbox-username-generator" },
};

const RULES = [
  { rule: "Length", detail: "1 to 12 characters (classic), or up to 15 with suffix numbers added by Xbox" },
  { rule: "Allowed characters", detail: "Letters and numbers only — no underscores, hyphens, or special characters" },
  { rule: "Not allowed", detail: "Spaces (shown with a middle dot in UI but stored without), offensive words, impersonation" },
  { rule: "First change", detail: "Free — every account gets one free gamertag change" },
  { rule: "Subsequent changes", detail: "Costs approximately $9.99 USD per change" },
  { rule: "Uniqueness", detail: "Xbox adds a number suffix (e.g. #1234) if your chosen name is taken, keeping the display name while ensuring uniqueness" },
];

const TIPS = [
  {
    emoji: "🕹️",
    title: "12 characters is the real limit",
    body: "Xbox gamertags display as up to 12 characters cleanly. If your name is taken, Xbox adds a # suffix — your chosen name still shows first. Focus on nailing those 12 characters.",
  },
  {
    emoji: "⚔️",
    title: "Bold and aggressive works on Xbox",
    body: "Xbox culture skews toward competitive gaming. Names like VoidStrike, IronFang, and SteelReaper feel natural in multiplayer lobbies. Soft or cutesy names can feel out of place.",
  },
  {
    emoji: "🔡",
    title: "No underscores or special characters",
    body: "Unlike PlayStation or Steam, Xbox gamertags cannot include underscores or hyphens. Your name must be letters and numbers only — plan your name accordingly.",
  },
  {
    emoji: "💸",
    title: "Use your one free change wisely",
    body: "Every Xbox account gets exactly one free gamertag change. After that, each change costs around $9.99. Take time to find the right name before using your free change.",
  },
  {
    emoji: "🌐",
    title: "Match your PlayStation and Steam names",
    body: "If you game across platforms, consistent gamertags help friends find you. Check your preferred name on all platforms before committing to any one of them.",
  },
  {
    emoji: "🔢",
    title: "Let Xbox handle the suffix",
    body: "If your gamertag is taken, Xbox automatically adds a numeric suffix that other players see. You can pick a clean name without worrying about adding numbers yourself.",
  },
];

const FAQS = [
  {
    q: "How long can an Xbox gamertag be?",
    a: "Xbox gamertags can be up to 12 characters long for the name portion. If your chosen name is already taken, Xbox automatically appends a unique numeric suffix (e.g. #1234) to distinguish you.",
  },
  {
    q: "How much does it cost to change an Xbox gamertag?",
    a: "Your first Xbox gamertag change is free. Every subsequent change costs approximately $9.99 USD. This cost applies through the Xbox console, Xbox app, and Xbox website.",
  },
  {
    q: "Can I use underscores in my Xbox gamertag?",
    a: "No. Xbox gamertags only support letters and numbers. Underscores, hyphens, periods, and special characters are not permitted in Xbox gamertags.",
  },
  {
    q: "What happens if my Xbox gamertag is already taken?",
    a: "If your preferred gamertag is taken, Xbox automatically adds a numeric suffix to your chosen name (e.g. VoidStrike#7291). Other players see your full name with the suffix; you can still use your chosen name as your identity.",
  },
  {
    q: "Can I use the same gamertag on Xbox and PlayStation?",
    a: "Yes, you can try to claim the same name on both platforms. They have separate name databases, so availability on one does not guarantee availability on the other. Check both before deciding.",
  },
  {
    q: "What are good Xbox gamertag ideas?",
    a: "Good Xbox gamertags are bold, short, and action-oriented. Popular styles include combining a powerful adjective with a weapon or creature (IronWolf, SteelReaper), or using gaming-culture references. Use our Gaming style to generate names in this style.",
  },
  {
    q: "Is the Xbox username generator free?",
    a: "Yes, completely free. No account or sign-up required.",
  },
];

const RELATED = [
  { label: "Discord Username Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Roblox Username Generator", href: "/roblox-username-generator", emoji: "🧱" },
  { label: "Gaming Username Generator", href: "/gaming-username-generator", emoji: "🎮" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function XboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Xbox Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/xbox-username-generator", description: "Free Xbox gamertag generator. Create cool Xbox username ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Xbox Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🕹️ Xbox
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Xbox Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate cool Xbox gamertags instantly. Bold, battle-ready name ideas for Xbox — because your one free gamertag change deserves a great name.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="gaming" platformFocus="Xbox" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} className="text-brand-500" />
            <h2 className="text-xl font-bold text-gray-900">Xbox gamertag rules</h2>
          </div>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for the perfect Xbox gamertag</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is an Xbox username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>An Xbox username generator creates unique gamertag ideas for your Xbox account. Xbox gamertags are your identity across all Xbox games, Xbox Live, and Game Pass — and since you only get one free change, getting it right matters.</p>
            <p>Our generator produces names in the bold, competitive style that fits Xbox culture. Since Xbox does not allow underscores or special characters, every generated name uses only letters and numbers — so every suggestion is technically valid for Xbox.</p>
            <p>Use the Gaming style for the most Xbox-appropriate results. If your preferred gamertag is taken, Xbox adds a suffix automatically — so you can still claim a clean version of your chosen name.</p>
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
