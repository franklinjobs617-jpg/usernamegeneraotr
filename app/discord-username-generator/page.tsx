import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Discord Username Generator — Free Discord Name Ideas",
  description:
    "Generate unique Discord usernames instantly. Free Discord handle generator with cool, gaming, and creative name ideas for your Discord account.",
  alternates: { canonical: "https://usernamegen.online/discord-username-generator" },
};

const RULES = [
  { rule: "Length", detail: "2 to 32 characters" },
  { rule: "Allowed characters", detail: "Most Unicode characters, letters, numbers, underscores, periods, hyphens" },
  { rule: "Not allowed", detail: "Spaces at the start or end; the word \"discord\"; usernames that imply official Discord accounts" },
  { rule: "Format (new)", detail: "Since 2023, Discord uses a single @username system — no more #0000 discriminators" },
  { rule: "Uniqueness", detail: "Usernames must be globally unique (case-insensitive)" },
  { rule: "Display name", detail: "Separate from username — your display name can be anything and changes per server" },
];

const TIPS = [
  {
    emoji: "💬",
    title: "Username vs display name",
    body: "Discord has two names: your @username (unique, used to find you) and your display name (can be different in each server). Put creativity into your display name — keep your username simple and memorable.",
  },
  {
    emoji: "🎮",
    title: "Match your gaming identity",
    body: "Most Discord users are gamers. A handle that fits your gaming persona — bold, edgy, or clever — will feel natural in gaming servers and communities.",
  },
  {
    emoji: "🔗",
    title: "Keep it consistent with other platforms",
    body: "If you already have a handle on Twitch, Steam, or Xbox, use the same or similar name on Discord. Friends can find you faster, and it builds a cohesive online identity.",
  },
  {
    emoji: "✍️",
    title: "Avoid very long names",
    body: "Discord allows up to 32 characters, but long names get cut off in voice channels and small server windows. Stay under 18 characters for the best readability.",
  },
  {
    emoji: "🌐",
    title: "Since 2023, discriminators are gone",
    body: "Discord removed the old tag system (e.g. Username#1234). Now every username must be globally unique, like a Twitter handle. This means more names are taken — be creative.",
  },
  {
    emoji: "🔒",
    title: "Do not include personal information",
    body: "Discord is often used in public servers with strangers. Avoid usernames that include your real name, location, or year of birth.",
  },
];

const FAQS = [
  {
    q: "How long can a Discord username be?",
    a: "Discord usernames can be between 2 and 32 characters long. For best readability in servers and voice channels, aim for 8–18 characters.",
  },
  {
    q: "Does Discord still use the # discriminator system?",
    a: "No. Discord removed the discriminator system (e.g. Username#1234) in 2023. Every user now has a unique @username, similar to Twitter or Instagram handles.",
  },
  {
    q: "How do I change my Discord username?",
    a: "Click the user settings gear icon at the bottom left, go to My Account, then click on your username and type a new one. Note that changing your username too frequently may trigger a temporary cooldown.",
  },
  {
    q: "Can I have spaces in my Discord username?",
    a: "No, spaces are not allowed in Discord usernames. However, your display name (the name shown in servers) can include spaces. Usernames can use underscores or hyphens instead.",
  },
  {
    q: "What is the difference between a Discord username and a display name?",
    a: "Your Discord username is your unique @handle used to search for and add you. Your display name is what appears in servers and can be customized per server. You can have a different display name in every server while keeping one username.",
  },
  {
    q: "Is the Discord username generator free?",
    a: "Yes, completely free with no account required. Generate as many Discord username ideas as you need.",
  },
];

const RELATED = [
  { label: "Xbox Username Generator", href: "/xbox-username-generator", emoji: "🕹️" },
  { label: "Roblox Username Generator", href: "/roblox-username-generator", emoji: "🧱" },
  { label: "Gaming Username Generator", href: "/gaming-username-generator", emoji: "🎮" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function DiscordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Discord Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/discord-username-generator", description: "Free Discord username generator. Create unique Discord handles instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Discord Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
            💬 Discord
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Discord Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate unique Discord usernames instantly. Since Discord removed discriminators in 2023, every handle must be globally unique — find yours now.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="gaming" platformFocus="Discord" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Info size={18} className="text-brand-500" />
            <h2 className="text-xl font-bold text-gray-900">Discord username rules</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a great Discord username</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a Discord username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>A Discord username generator creates unique handle ideas for your Discord account. Since Discord moved to a unique username system in 2023, finding an available name has become significantly harder — especially for common words and names.</p>
            <p>Our generator produces creative combinations tuned to Discord culture: gaming-oriented, bold, and memorable. Select the Gaming or Random style for names that fit well in Discord servers, or try Professional for work and study communities.</p>
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
