import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gaming Username Generator — Cool Gamer Tag Ideas",
  description:
    "Generate cool gaming usernames and gamertags instantly. Free gaming name generator with bold, edgy, and battle-ready handle ideas for any game or platform.",
  alternates: { canonical: "https://usernamegen.online/gaming-username-generator" },
};

const GAMING_STYLES = [
  { name: "FPS / shooter", examples: ["PhantomStrike", "VoidSniper", "SteelReaper", "NeonHawk"], desc: "Fast, lethal, and precise — built for competitive shooters." },
  { name: "RPG / fantasy", examples: ["IronSage", "ShadowBlade", "DragonFang", "StormCaster"], desc: "Epic, lore-inspired names for fantasy and role-playing games." },
  { name: "Stealth / ninja", examples: ["SilentViper", "GhostStrike", "NullShade", "VoidKnight"], desc: "Quiet, dangerous, and elusive — built for stealth gameplay." },
  { name: "Speed / racing", examples: ["TurboRex", "NeonRush", "HyperBolt", "ApexDash"], desc: "Fast-paced energy for racing and speed-run communities." },
];

const TIPS = [
  { emoji: "⚔️", title: "Bold beats clever in gaming", body: "In gaming communities, powerful-sounding names are respected more than witty ones. SteelFang and VoidSlayer read as skilled players — punny names can undercut your perceived skill level." },
  { emoji: "🎮", title: "Think about the leaderboard", body: "Imagine your name at the top of a leaderboard. Does it look like a winner? Shorter, punchy names (IronFang, VoidX) stand out more than long descriptive names." },
  { emoji: "🔢", title: "X works better than numbers", body: "If your preferred name is taken, adding an X (IronFangX, VoidX) looks cleaner and more intentional than adding numbers. X has strong gaming-culture associations." },
  { emoji: "🌐", title: "Check all your gaming platforms", body: "Use the same or similar gamertag on Xbox, PlayStation, Steam, Discord, and Twitch. Consistency makes it easier for friends and followers to find you across ecosystems." },
  { emoji: "📏", title: "Under 12 characters is optimal", body: "Short names display better on leaderboards, kill feeds, and team lists. Xbox enforces a 12-character limit — designing around that ensures cross-platform compatibility." },
  { emoji: "🚫", title: "Avoid overused tropes", body: "Names with Shadow, Dark, or Ninja followed by a number are extremely common. Our generator specifically avoids the most oversaturated combinations to give you something more original." },
];

const FAQS = [
  { q: "What makes a good gaming username?", a: "A good gaming username is short (under 12 characters), bold, easy to remember, and fits the gaming genre. Names combining a powerful adjective with an action word or creature (SteelReaper, VoidFang) work consistently well across gaming communities." },
  { q: "What are the most popular gaming username styles?", a: "The most popular gaming username styles are: power + animal (IronWolf, SteelFang), void/shadow + action (VoidStrike, ShadowBlast), and elemental + noun (FrostBlade, StormRider). These styles are popular because they are short, memorable, and sound skilled." },
  { q: "Can I use the same gaming username on Xbox, PlayStation, and Steam?", a: "You can try, but each platform has a separate username database. Xbox limits gamertags to 12 characters and does not allow special characters. PlayStation and Steam allow more flexibility. Check availability on each platform before committing." },
  { q: "Should my gaming username reflect my playstyle?", a: "It helps, but it is not required. A stealth-focused player with the gamertag SilentViper has a coherent identity. A sniper named BunnyHops creates memorable contrast. Either approach works — consistency with your content matters more than literal accuracy." },
  { q: "What gaming username should I use for YouTube or Twitch?", a: "For content platforms, choose a name that is easy to say, spell, and search for. Avoid numbers and excessive underscores. A name people can recall from hearing it once has a huge advantage for channel growth." },
  { q: "Is the gaming username generator free?", a: "Yes, completely free. No account required." },
];

const RELATED = [
  { label: "Xbox Username Generator", href: "/xbox-username-generator", emoji: "🕹️" },
  { label: "Discord Username Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Roblox Username Generator", href: "/roblox-username-generator", emoji: "🧱" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
];

export default function GamingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Gaming Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/gaming-username-generator", description: "Free gaming username generator. Cool gamertag ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Gaming Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🎮 Gaming
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Gaming Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate cool gamertags and gaming usernames instantly. Bold, battle-ready handle ideas for Xbox, Discord, Twitch, Steam, and every game you play.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="gaming" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Gaming username styles</h2>
          <p className="text-gray-500 text-sm mb-6">Different game genres have different naming conventions. Here are the main styles with examples.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GAMING_STYLES.map((s) => (
              <div key={s.name} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{s.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.examples.map((ex) => (
                    <span key={ex} className="font-mono text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a great gaming username</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a gaming username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>A gaming username generator creates unique gamertag ideas for online games, streaming platforms, and gaming communities. With hundreds of millions of registered accounts across platforms like Xbox, Steam, Discord, and Twitch, finding an available name that sounds good is harder than ever.</p>
            <p>Our generator is specifically tuned for gaming culture — it combines power words, action verbs, and strong imagery to produce names that fit naturally in leaderboards, kill feeds, and Discord servers. Select the Gaming style for the most battle-ready results, or try Random for unexpected combinations that stand out.</p>
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
