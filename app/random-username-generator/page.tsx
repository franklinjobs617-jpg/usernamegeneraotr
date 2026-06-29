import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Random Username Generator — Unique Name Ideas Instantly",
  description:
    "Generate completely random usernames instantly. Free random username generator for any platform — unique, creative, and secure handle ideas with one click.",
  alternates: { canonical: "https://usernamegen.online/random-username-generator" },
};

const WHY_RANDOM = [
  { emoji: "🔒", title: "Privacy protection", body: "Using random usernames across different platforms prevents cross-platform tracking. Bad actors use software to link accounts with the same username — random names break this chain." },
  { emoji: "🎯", title: "Availability", body: "Common names and words are almost always taken on major platforms. A random combination of words produces names that are genuinely unique and likely available." },
  { emoji: "🧠", title: "No decision fatigue", body: "Staring at a blank username field and brainstorming can take longer than expected. A random generator solves the problem instantly — click, pick, done." },
  { emoji: "🔐", title: "Security accounts", body: "For accounts where you do not want to be identified — throwaway emails, forum accounts, trial services — a random username is the safest choice." },
];

const FAQS = [
  { q: "What is a random username generator?", a: "A random username generator creates unique handle ideas without input from the user. It combines words, prefixes, suffixes, and occasionally numbers to produce names that are unlikely to already be taken on major platforms." },
  { q: "Why should I use a random username?", a: "Random usernames protect your privacy by preventing cross-platform linking of your accounts. They are also more likely to be available than names based on your real name or common words. For accounts where anonymity matters, a random username is the safest choice." },
  { q: "Are randomly generated usernames secure?", a: "A random username provides privacy by being non-identifiable, but it does not replace a strong password. For maximum account security, pair a random username with a unique, strong password stored in a password manager." },
  { q: "How do I create a truly random username?", a: "Click Generate on our tool with no keyword entered and the Random style selected. The generator combines words from an unpredictable combination of categories, producing names you would not arrive at through manual brainstorming." },
  { q: "Can I use random usernames on every platform?", a: "Yes. Random usernames work on any platform that accepts letters, numbers, and common characters. Our generator produces names that follow standard username rules — no spaces or unusual special characters." },
  { q: "Is the random username generator free?", a: "Yes, completely free. No account or sign-up required. Generate unlimited random username ideas." },
];

const RELATED = [
  { label: "Instagram Username Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Aesthetic Username Generator", href: "/aesthetic-username-generator", emoji: "🌸" },
  { label: "Gaming Username Generator", href: "/gaming-username-generator", emoji: "🎮" },
  { label: "Discord Username Generator", href: "/discord-username-generator", emoji: "💬" },
];

export default function RandomPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Random Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/random-username-generator", description: "Free random username generator. Unique handle ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Random Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
            🎲 Random
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Random Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate completely random, unique usernames with one click. No keyword needed — just hit Generate and get 20 fresh ideas instantly, for any platform.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="random" />
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-brand-500" />
            <h2 className="text-xl font-bold text-gray-900">Why use a random username?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_RANDOM.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a random username generator?</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>A random username generator creates unique handle ideas without requiring any input. Unlike keyword-based generators, the random mode combines words from completely unpredictable categories — producing names you would never arrive at through manual brainstorming.</p>
            <p>Random usernames are particularly valuable for privacy-conscious users. Since platforms like Instagram, Reddit, and Discord are frequently scraped by tools that cross-reference usernames, using different random names across accounts limits how much of your online footprint can be connected.</p>
            <p>Our generator uses AI combined with a large word bank to produce random names that are memorable and pronounceable — not just random character strings. Every result is something a real person might actually use.</p>
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
