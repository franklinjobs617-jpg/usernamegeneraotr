import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Come Up with a Good Username — 10 Proven Methods",
  description: "Struggling to come up with a username? Here are 10 proven methods to create a unique, memorable handle for any platform — with real examples and expert tips.",
  alternates: { canonical: "https://usernamegen.online/blog/how-to-come-up-with-a-username" },
  openGraph: { title: "How to Come Up with a Good Username — 10 Proven Methods", type: "article" },
};

const METHODS = [
  {
    n: "01",
    title: "Start with your name, then modify it",
    body: "Your real name is the most natural starting point — but it is almost certainly taken in its plain form. Modify it in a way that still feels like you: drop a vowel (johnsmth), reverse the order (smithjohn), shorten to a nickname (jsmith), or add a middle initial (jbsmith). Avoid simply appending numbers — it signals you arrived too late.",
    example: "johnsmith → jsmith / smithj / jbsmith",
    link: null,
  },
  {
    n: "02",
    title: "Combine two unrelated words",
    body: "Some of the most memorable usernames combine two words with no obvious connection. The contrast creates intrigue and helps the name stick. Pick one concrete noun and one abstract concept, or one colour and one animal. The combination should feel slightly surprising but easy to say. Research on memory retention shows that unexpected word combinations are significantly more memorable than descriptive ones.",
    example: "BlueMapleFox · QuantumRaven · CrimsonDrift",
    link: null,
  },
  {
    n: "03",
    title: "Use your niche or hobby as a qualifier",
    body: "If your name is taken, adding your primary interest or profession solves the problem — and makes your account more findable. Someone searching 'john photography' or 'john bakes' will find you even without knowing your exact handle. This works especially well for content creators and freelancers. According to Instagram's own creator advice, niche-specific handles drive higher profile click-through rates from search.",
    example: "johnbakes · sarahillustrates · markbuilds",
    link: { text: "Instagram Creator Guide", url: "https://creators.instagram.com/" },
  },
  {
    n: "04",
    title: "Pick a character or archetype",
    body: "Archetypes — the Wolf, the Ghost, the Phantom, the Sage — carry immediate associations. Pick one that reflects how you want to be perceived, then add a prefix or suffix that makes it unique. This works particularly well for gaming accounts, where bold personas are the norm. Xbox's own gamertag guidelines encourage names that reflect your gaming identity.",
    example: "IronWolf · SilentPhantom · VoidSage",
    link: { text: "Xbox Gamertag tips", url: "https://support.xbox.com/en-US/help/account-profile/profile/gamertag-update" },
  },
  {
    n: "05",
    title: "Use aesthetic words if the vibe matters",
    body: "For visual platforms — Instagram, TikTok, Pinterest — your username signals your aesthetic before anyone sees your content. Words like velvet, bloom, mist, luna, and aurora communicate a visual style instantly. Combining two aesthetic words creates a handle that feels intentional. This approach aligns with how Instagram's algorithm surfaces content: accounts with consistent aesthetic identity perform better in discovery.",
    example: "velvet.bloom · luna.drift · mist.sage",
    link: { text: "Our aesthetic generator", url: "/aesthetic-username-generator" },
  },
  {
    n: "06",
    title: "Translate a meaningful word into another language",
    body: "If the English word you want is taken, try its equivalent in another language. Spanish, Japanese, Latin, and French work particularly well — their words are often short, phonetically interesting in English, and less likely to be taken. Latin is especially effective for a timeless, distinctive feel.",
    example: "nox (Latin: night) · soleil (French: sun) · kaze (Japanese: wind)",
    link: null,
  },
  {
    n: "07",
    title: "Use a generator as a starting point",
    body: "When you are out of ideas or every variation is taken, a username generator produces combinations you would never think of manually. The key is to use one that understands platform context — an Instagram handle should feel different from a gaming gamertag. Use generated results as a starting point, then personalise them.",
    example: "Try: usernamegen.online — free, no sign-up required",
    link: { text: "Generate usernames free", url: "/" },
  },
  {
    n: "08",
    title: "Use alliteration or rhyme for memorability",
    body: "Names that alliterate or rhyme are significantly easier to remember — this is well-documented in consumer psychology research on brand naming. Find a word that starts with the same letter as your name, or that rhymes with a key concept. Even if only the first two syllables alliterate, the effect works.",
    example: "PixelPete · LunaLux · NeonNick · SilverSage",
    link: { text: "Nielsen Norman Group on memorable names", url: "https://www.nngroup.com/articles/brand-names/" },
  },
  {
    n: "09",
    title: "Add a location — but only if long-term",
    body: "Adding your city or region instantly makes a taken name available and can help local discovery. But it only makes sense if you plan to stay in that location long-term, or if location is genuinely part of your brand. Avoid for anonymous or privacy-focused accounts.",
    example: "johnsmithnyc · sarahlondon · markchicago",
    link: null,
  },
  {
    n: "10",
    title: "Check availability on all platforms before committing",
    body: "The worst username mistake is picking a name on one platform, building an audience, then discovering it is taken everywhere else. Before committing, check Instagram, TikTok, Twitter, YouTube, Discord, and your email provider. Namecheckr and similar tools can check multiple platforms simultaneously. Consistency across platforms compounds significantly over time.",
    example: "Check: Instagram / TikTok / Twitter / YouTube / Discord",
    link: { text: "Namecheckr — check multiple platforms", url: "https://www.namecheckr.com/" },
  },
];

const PLATFORM_GUIDES = [
  { label: "Instagram",  href: "/instagram-username-generator",  note: "Max 30 chars, aesthetic style recommended" },
  { label: "TikTok",     href: "/tiktok-username-generator",     note: "Max 24 chars, niche-first naming works well" },
  { label: "Gaming",     href: "/gaming-username-generator",     note: "Bold archetypes, under 12 chars for Xbox" },
  { label: "Discord",    href: "/discord-username-generator",    note: "Globally unique since 2023 — plan ahead" },
  { label: "Gmail",      href: "/gmail-username-generator",      note: "Permanent — periods are invisible to Gmail" },
  { label: "Aesthetic",  href: "/aesthetic-username-generator",  note: "Nature + celestial words, lowercase preferred" },
];

export default function HowToPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Come Up with a Good Username — 10 Proven Methods", description: "10 proven methods to create a unique, memorable username for any platform.", url: "https://usernamegen.online/blog/how-to-come-up-with-a-username", author: { "@type": "Organization", name: "UserNameGen" }, publisher: { "@type": "Organization", name: "UserNameGen", url: "https://usernamegen.online" }, datePublished: "2026-06-29", dateModified: new Date().toISOString().split("T")[0] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "HowTo", name: "How to Come Up with a Good Username", description: "10 proven methods to create a unique, memorable username for any platform.", step: METHODS.map((m) => ({ "@type": "HowToStep", name: m.title, text: m.body })) }) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#f0f9f9 0%,#e0f2f2 60%,#f8fafa 100%)" }} className="relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs mb-5" style={{ color: "#9ca3af" }}>
            <Link href="/" style={{ color: "#9ca3af", minHeight: "auto" }}>Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: "#4a6060" }}>Username Guide</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ background: "#0d7a7b", color: "#fff" }}>
            ✦ Guide · 5 min read
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight tracking-tight mb-3" style={{ color: "#0d1a1a" }}>
            How to Come Up with a Good Username — 10 Proven Methods
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#4a6060" }}>
            Every name you try is taken. Sound familiar? With over 5 billion social media users worldwide, coming up with a unique, memorable username is harder than it looks. Here are 10 methods that actually work — with real examples for each.
          </p>

          {/* Quick-jump TOC */}
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#0d7a7b" }}>Jump to method</p>
            <div className="flex flex-wrap gap-2">
              {METHODS.map((m) => (
                <a key={m.n} href={`#m${m.n}`}
                  className="inline-btn text-xs px-2.5 py-1 rounded-lg font-semibold"
                  style={{ background: "#f0f9f9", color: "#0d7a7b", minHeight: "auto" }}>
                  {m.n}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8 md:space-y-10">
          {METHODS.map((m, idx) => (
            <article key={m.n} id={`m${m.n}`} className="scroll-mt-20">
              <div className="flex items-start gap-3 md:gap-4">
                {/* Number badge */}
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 text-white" style={{ background: "#0d1a1a", minHeight: "auto" }}>
                  {m.n}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base md:text-lg font-black mb-2" style={{ color: "#0d1a1a" }}>{m.title}</h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a6060" }}>{m.body}</p>

                  {/* Example box */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-3 rounded-xl mb-3" style={{ background: "#f0f9f9", border: "1px solid rgba(13,122,123,0.12)" }}>
                    <span className="text-xs font-bold shrink-0" style={{ color: "#0d7a7b" }}>Example</span>
                    <span className="font-mono text-xs" style={{ color: "#0d1a1a" }}>{m.example}</span>
                  </div>

                  {/* Authority link */}
                  {m.link && (
                    m.link.url.startsWith("/") ? (
                      <Link href={m.link.url} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg" style={{ background: "#0d7a7b", color: "#fff", minHeight: "auto" }}>
                        {m.link.text} <ChevronRight size={12} />
                      </Link>
                    ) : (
                      <a href={m.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#0d7a7b", minHeight: "auto" }}>
                        {m.link.text} <ExternalLink size={11} />
                      </a>
                    )
                  )}
                </div>
              </div>
              {idx < METHODS.length - 1 && (
                <div className="mt-8 border-b" style={{ borderColor: "rgba(13,122,123,0.08)" }} />
              )}
            </article>
          ))}
        </div>

        {/* Summary box */}
        <section className="mt-12">
          <h2 className="text-xl font-black mb-4" style={{ color: "#0d1a1a" }}>The short version</h2>
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <ol className="space-y-2.5">
              {[
                "Start with your name and modify it — don't invent from scratch",
                "Avoid birth years and random numbers — they date your account",
                "Keep it under 15 characters — shorter is almost always better",
                "Match the platform culture — gaming names ≠ aesthetic handles ≠ email addresses",
                "Check availability on all platforms before you commit to anything",
                "Use a generator when stuck — then personalise the result",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#4a6060" }}>
                  <span className="font-bold shrink-0" style={{ color: "#0d7a7b" }}>{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Platform guides */}
        <section className="mt-12">
          <h2 className="text-xl font-black mb-2" style={{ color: "#0d1a1a" }}>Platform-specific generators</h2>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>Different platforms have different rules. Use a dedicated generator for better results.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLATFORM_GUIDES.map((p) => (
              <Link key={p.href} href={p.href}
                className="bg-white rounded-xl px-4 py-3.5 flex items-center justify-between gap-3"
                style={{ border: "1px solid rgba(13,122,123,0.15)", minHeight: "56px" }}>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0d1a1a" }}>{p.label} Username Generator</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>{p.note}</p>
                </div>
                <ChevronRight size={16} className="shrink-0" style={{ color: "#0d7a7b" }} />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 mb-12 rounded-2xl p-6 md:p-8 text-center" style={{ background: "linear-gradient(135deg,#0d1a1a,#0d3333)" }}>
          <p className="text-white font-black text-lg md:text-xl mb-2">Ready to find your username?</p>
          <p className="text-sm mb-5" style={{ color: "#9ca3af" }}>Generate 20 unique username ideas in seconds — free, no sign-up required.</p>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white" style={{ background: "#0d7a7b", boxShadow: "0 4px 14px rgba(13,122,123,0.4)", minHeight: "auto" }}>
            ✦ Generate usernames free <ChevronRight size={14} />
          </Link>
        </section>
      </div>
    </>
  );
}
