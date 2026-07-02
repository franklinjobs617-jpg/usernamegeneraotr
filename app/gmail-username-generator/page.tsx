import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import AffiliateCard from "@/components/AffiliateCard";
import { Breadcrumb, TipsGrid, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Gmail Username Generator — Creative Gmail Name Ideas",
  description:
    "Generate unique Gmail username ideas instantly. Free Gmail name generator — creative, available, and memorable @gmail.com address ideas for personal and professional use.",
  alternates: { canonical: "https://usernamegen.online/gmail-username-generator" },
};

const GMAIL_RULES = [
  { rule: "Length",               detail: "6 to 30 characters" },
  { rule: "Allowed characters",   detail: "Letters (a–z), numbers (0–9), and periods (.)" },
  { rule: "Not allowed",          detail: "Spaces, hyphens, underscores, and other special characters" },
  { rule: "Periods are invisible",detail: "john.smith@gmail.com and johnsmith@gmail.com are the same inbox — Gmail ignores periods entirely" },
  { rule: "Case insensitive",     detail: "JohnSmith and johnsmith are identical Gmail addresses" },
  { rule: "Permanent",            detail: "You cannot rename a Gmail address after creation — choose carefully" },
];

const GMAIL_SCENARIOS = [
  {
    scenario: "Personal account",
    goal: "Memorable, creative, reflects your personality",
    formats: ["firstname + hobby (johnbakes)", "nickname (thejohnsmith)", "name + interest (johnruns)"],
    avoid: "Birth year, random numbers",
    color: "#dbeafe", text: "#1e40af",
  },
  {
    scenario: "Freelancing",
    goal: "Professional-sounding, easy to say aloud",
    formats: ["firstname.lastname (john.smith)", "name + craft (johnsmithdesign)", "initial + lastname (jsmith)"],
    avoid: "Nicknames, numbers, hard-to-spell words",
    color: "#dcfce7", text: "#166534",
  },
  {
    scenario: "Privacy / backup",
    goal: "Not linkable to your real name",
    formats: ["Random word combo (pixelraven42)", "Unrelated words (bluemapletree)", "Initials + random (js_cloud)"],
    avoid: "Real name, birth year, location",
    color: "#f0f9f9", text: "#0d7a7b",
  },
];

const AVAILABILITY_HACKS = [
  { n:"1", hack: "Add your profession or hobby",   example: "johnsmith → johnsmithcooks",    why: "Adds a unique qualifier that also describes you" },
  { n:"2", hack: "Use a meaningful number",         example: "johnsmith → johnsmith7",        why: "Avoid birth year — it is the first thing people guess" },
  { n:"3", hack: "Flip the name order",             example: "johnsmith → smithjohn",         why: "Surprisingly often available when normal order is not" },
  { n:"4", hack: "Add a location or context word",  example: "johnsmith → johnsmithnyc",      why: "Works well for freelancers and local businesses" },
  { n:"5", hack: "Use initials + full last name",   example: "johnsmith → jbsmith",           why: "Clean, professional, usually available" },
];

const TIPS = [
  { emoji: "📧", title: "Periods do not matter in Gmail", body: "Gmail ignores periods — john.smith and johnsmith go to the same inbox. If johnsmith is taken, john.smith is NOT a different address." },
  { emoji: "🔤", title: "Keep it under 15 characters", body: "Gmail allows 30, but shorter addresses are easier to give verbally, type on mobile, and fit on business cards." },
  { emoji: "🚫", title: "Avoid birth years", body: "johnsmith1994 reveals your age to every recipient and dates your address. In 10 years you will regret it." },
  { emoji: "💼", title: "Say it out loud first", body: "You will give this address over the phone and in meetings. If you have to spell it out every time, it is too complicated." },
  { emoji: "🔒", title: "Do not use Gmail as your username everywhere", body: "Using your email as a username on every platform creates a cross-platform trail. Use different usernames for privacy-sensitive accounts." },
  { emoji: "🔁", title: "Gmail addresses are permanent", body: "Unlike social handles, Gmail usernames cannot be renamed. You can add aliases, but the original address never changes." },
];

const FAQS = [
  { q: "How do I create a unique Gmail username?", a: "Start with your name or a keyword, then add a qualifier — your profession, a hobby, a meaningful number, or an initial. Use our generator to produce creative variations instantly. Check each one at accounts.google.com/signup." },
  { q: "Does Gmail allow underscores in usernames?", a: "No. Gmail usernames can only contain letters (a–z), numbers (0–9), and periods (.). Underscores, hyphens, and other special characters are not allowed." },
  { q: "Are periods in Gmail usernames meaningful?", a: "No — Gmail completely ignores periods. john.smith@gmail.com and johnsmith@gmail.com are the exact same inbox. You cannot register john.smith if johnsmith is already taken." },
  { q: "Can I change my Gmail username?", a: "No. Gmail addresses are permanent and cannot be renamed. You can create a new Gmail account, but the original address stays active. This is why choosing carefully from the start matters more than on most platforms." },
  { q: "What Gmail username should I use for job applications?", a: "Use firstname.lastname or firstnamelastname. If taken, add a professional qualifier like your industry or city (johnsmithdesign, johnsmithnyc). Avoid nicknames, numbers, and anything that seems unprofessional." },
  { q: "How long can a Gmail username be?", a: "Between 6 and 30 characters. Shorter addresses (8–15 characters) are significantly easier to share verbally and remember." },
  { q: "What is the difference between a Gmail username and a Google account username?", a: "They are the same thing. Your Gmail username is also your Google account username, used to log in to YouTube, Drive, and all Google services." },
  { q: "Is the Gmail username generator free?", a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "Email Username Generator", href: "/email-username-generator",  emoji: "✉️" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
  { label: "Professional Generator",   href: "/email-username-generator",   emoji: "💼" },
  { label: "Username Generator",       href: "/",                           emoji: "✦"  },
];

export default function GmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Gmail Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/gmail-username-generator", description: "Free Gmail username generator. Creative @gmail.com address ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#eff6ff 0%,#dbeafe 50%,#f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#3b82f6" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Gmail Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#ea4335", color: "#fff" }}>
            <Mail size={12} /> Gmail
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Gmail Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Find a creative, memorable @gmail.com address that is actually available. Generate unique Gmail username ideas instantly — for personal accounts, freelancing, or privacy.
          </p>
          <UsernameGenerator initialStyle="professional" placeholder="Enter your name or a keyword…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">

        {/* Rules */}
        <section className="mt-10">
          <SectionTitle>Gmail username rules</SectionTitle>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            {GMAIL_RULES.map((r, i) => (
              <div key={r.rule} className="flex items-start gap-4 px-5 py-4 text-sm" style={{ borderTop: i > 0 ? "1px solid rgba(13,122,123,0.08)" : "none" }}>
                <span className="font-semibold w-44 shrink-0" style={{ color: "#0d1a1a" }}>{r.rule}</span>
                <span style={{ color: "#4a6060" }}>{r.detail}</span>
              </div>
            ))}
          </div>
          {/* Period quirk callout */}
          <div className="mt-4 flex items-start gap-3 p-4 rounded-xl" style={{ background: "#fef3c7", border: "1px solid #fcd34d" }}>
            <span className="text-lg shrink-0">⚠️</span>
            <div>
              <p className="text-sm font-bold" style={{ color: "#92400e" }}>The period quirk most people miss</p>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#92400e" }}>
                Gmail treats john.smith and johnsmith as identical. If johnsmith@gmail.com is taken, john.smith is NOT available — it routes to the same inbox. Our generator avoids period-only variations to show you genuinely different options.
              </p>
            </div>
          </div>
        </section>

        {/* ── UNIQUE MODULE 1: Which type do you need? ── */}
        <section className="mt-14">
          <SectionTitle>Which type of Gmail username do you need?</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>The right naming strategy depends entirely on what you are using the account for.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GMAIL_SCENARIOS.map((s) => (
              <div key={s.scenario} className="rounded-xl p-5" style={{ background: s.color }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: s.text }}>{s.scenario}</p>
                <p className="text-xs font-semibold mb-2" style={{ color: s.text }}>Goal: {s.goal}</p>
                <div className="space-y-1 mb-3">
                  {s.formats.map((f) => (
                    <p key={f} className="text-xs font-mono" style={{ color: s.text }}>✓ {f}</p>
                  ))}
                </div>
                <p className="text-xs" style={{ color: s.text, opacity: 0.75 }}>Avoid: {s.avoid}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── UNIQUE MODULE 2: Availability hacks ── */}
        <section className="mt-14">
          <SectionTitle>5 ways to find an available Gmail username</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>With 1.8 billion Gmail users, your first choice is almost certainly taken. Here are five proven strategies.</p>
          <div className="space-y-3">
            {AVAILABILITY_HACKS.map((h) => (
              <div key={h.n} className="bg-white rounded-xl px-5 py-4 flex gap-4 items-start" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs shrink-0 text-white" style={{ background: "#0d7a7b" }}>{h.n}</div>
                <div>
                  <p className="text-sm font-bold mb-0.5" style={{ color: "#0d1a1a" }}>{h.hack}</p>
                  <p className="font-mono text-xs mb-1" style={{ color: "#0d7a7b" }}>{h.example}</p>
                  <p className="text-xs" style={{ color: "#4a6060" }}>{h.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AffiliateCard />

        <section className="mt-14">
          <SectionTitle>6 tips for choosing the perfect Gmail username</SectionTitle>
          <TipsGrid tips={TIPS} />
        </section>

        {/* What is */}
        <section className="mt-14">
          <SectionTitle>What is a Gmail username generator?</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#4a6060" }}>
            <p>A Gmail username generator creates unique @gmail.com address ideas based on your name, interests, or keywords. With over 1.8 billion active Gmail users, almost every combination of a common name is already taken — a generator produces creative alternatives you would not think of manually.</p>
            <p>Unlike generic username generators, a Gmail-specific tool understands Gmail rules: no underscores or hyphens, periods are invisible, and the address is permanent. Every suggestion from our tool follows these constraints, so all results are technically valid Gmail usernames ready to check.</p>
            <p>
              Remember: Gmail usernames cannot be changed after creation. Take time to explore variations, then check availability directly at{" "}
              <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer" className="font-semibold inline-flex items-center gap-1" style={{ color: "#0d7a7b" }}>
                accounts.google.com <ExternalLink size={11} />
              </a>
            </p>
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle>Frequently asked questions</SectionTitle>
          <FAQSection faqs={FAQS} />
        </section>

        <section className="mt-14 mb-16">
          <h2 className="text-base font-bold mb-4" style={{ color: "#4a6060" }}>Related generators</h2>
          <RelatedGrid related={RELATED} />
        </section>
      </div>
    </>
  );
}
