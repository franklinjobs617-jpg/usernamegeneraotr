import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import { Breadcrumb, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Mail, ExternalLink, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Username Generator — Professional Email Name Ideas",
  description:
    "Generate professional email usernames instantly. Clean, work-ready address ideas for Gmail, Outlook, and business email — plus format guides for every use case.",
  alternates: { canonical: "https://usernamegen.online/email-username-generator" },
};

const FORMATS = [
  { format: "firstname.lastname",   example: "john.smith",    use: "Most common professional format — universally recognised" },
  { format: "f.lastname",           example: "j.smith",       use: "Shorter — used in large organisations with many employees" },
  { format: "firstnamelastname",    example: "johnsmith",     use: "No separator — common in tech companies" },
  { format: "lastname.firstname",   example: "smith.john",    use: "European and enterprise format" },
  { format: "firstname+initial",    example: "johnbs",        use: "Compact format — useful when domain is long" },
  { format: "firstname_lastname",   example: "john_smith",    use: "Underscore format — less common, avoid for Gmail" },
];

// ── NEW: Business email naming by company size ──
const BUSINESS_FORMATS = [
  {
    size: "Startup / small team (1–10 people)",
    rec: "firstname@ or firstname.lastname@",
    example: "sarah@ or sarah.jones@",
    why: "Friendly and personal — reflects small team culture. Easy to remember for clients.",
    color: "#f0f9f9", text: "#0d7a7b",
  },
  {
    size: "Growing company (10–100 people)",
    rec: "firstname.lastname@ or f.lastname@",
    example: "sarah.jones@ or s.jones@",
    why: "Distinguishes team members with the same first name. Scales cleanly.",
    color: "#eff6ff", text: "#1e40af",
  },
  {
    size: "Enterprise (100+ people)",
    rec: "f.lastname@ or lastname.f@",
    example: "s.jones@ or jones.s@",
    why: "Short enough to type quickly, unique enough to avoid collisions across large directories.",
    color: "#f5f3ff", text: "#5b21b6",
  },
];

// ── NEW: Professional email checklist ──
const PRO_CHECKLIST = [
  { item: "Uses your real name or a professional variation", good: true },
  { item: "Hosted at your own domain (not @gmail.com)", good: true },
  { item: "Under 25 characters total including domain", good: true },
  { item: "Easy to spell when said aloud", good: true },
  { item: "Contains numbers from your birth year", good: false },
  { item: "Uses a nickname or handle", good: false },
  { item: "Hosted at @hotmail.com or @yahoo.com", good: false },
  { item: "Contains underscores (for Gmail accounts)", good: false },
];

const PROVIDERS = [
  { name: "Google Workspace", desc: "Gmail at your own domain. Includes Drive, Meet, and Docs. Best for businesses wanting a branded address.", href: "https://workspace.google.com", badge: "Top pick" },
  { name: "Zoho Mail",        desc: "Free business email for up to 5 users. A solid budget-friendly alternative for small teams.", href: "https://www.zoho.com/mail" },
  { name: "Microsoft 365",    desc: "Outlook-based professional email with the full Office suite. Best for Microsoft-first teams.", href: "https://www.microsoft.com/microsoft-365" },
];

const FAQS = [
  { q: "What is a good professional email username?", a: "The best professional email usernames use your real name in a standard format: firstname.lastname, f.lastname, or firstnamelastname. Avoid numbers, underscores for Gmail, and anything playful unless you are in a creative industry." },
  { q: "How do I create a professional email address?", a: "For a fully professional email, register a domain and set up Google Workspace or Zoho Mail. This gives you you@yourname.com instead of @gmail.com. If you just need a clean Gmail, use firstname.lastname as the username." },
  { q: "What email username should I use for freelancing?", a: "Use your name or a professional variation: john.smith, jsmith, or johnsmithdesign. Adding your profession (johnsmith.dev, sarah.writes) helps clients immediately understand what you do." },
  { q: "What is the difference between a Gmail username and a business email username?", a: "A Gmail username is for @gmail.com personal accounts. A business email username is part of a custom domain address (you@yourcompany.com). Business email looks more professional and is managed through providers like Google Workspace or Zoho Mail." },
  { q: "Can I use underscores in an email username?", a: "Technically yes on most email providers, but no on Gmail. For consistency and professionalism, periods are preferred over underscores in all professional email addresses." },
  { q: "Is the email username generator free?", a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "Gmail Username Generator", href: "/gmail-username-generator",  emoji: "📬" },
  { label: "Discord Generator",        href: "/discord-username-generator", emoji: "💬" },
  { label: "Random Generator",         href: "/random-username-generator",  emoji: "🎲" },
  { label: "Username Generator",       href: "/",                           emoji: "✦"  },
];

export default function EmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Email Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/email-username-generator", description: "Free email username generator. Professional email name ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg,#eff6ff 0%,#dbeafe 60%,#f0f9f9 100%)" }} className="relative overflow-hidden">
        <div className="absolute top-[-60px] right-[-40px] w-48 h-48 rounded-full opacity-10" style={{ background: "#3b82f6" }} />
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumb label="Email Username Generator" />
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5" style={{ background: "#2563eb", color: "#fff" }}>
            ✉️ Email
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4" style={{ color: "#0d1a1a" }}>
            Email Username Generator
          </h1>
          <p className="text-base md:text-lg max-w-2xl mb-8" style={{ color: "#4a6060" }}>
            Generate clean, professional email username ideas instantly. Whether you need a work address, a freelance email, or a Gmail handle — find the right format for every use case.
          </p>
          <UsernameGenerator initialStyle="professional" placeholder="Enter your name…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">

        {/* ── MODULE 1: Format table ── */}
        <section className="mt-10">
          <SectionTitle>Professional email username formats</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Different organisations use different email naming conventions. All examples below use the name <span className="font-mono font-semibold">john smith</span>.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            {FORMATS.map((f, i) => (
              <div key={f.format} className="flex flex-col sm:flex-row sm:items-center gap-2 px-5 py-4" style={{ borderTop: i > 0 ? "1px solid rgba(13,122,123,0.08)" : "none" }}>
                <span className="font-mono text-xs w-44 shrink-0" style={{ color: "#2563eb" }}>{f.format}</span>
                <span className="font-mono text-sm font-semibold w-40 shrink-0" style={{ color: "#0d1a1a" }}>{f.example}@domain.com</span>
                <span className="text-xs" style={{ color: "#4a6060" }}>{f.use}</span>
              </div>
            ))}
          </div>
          {/* Gmail crosslink */}
          <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: "#4a6060" }}>
            <span>Using Gmail specifically?</span>
            <Link href="/gmail-username-generator" className="font-semibold flex items-center gap-1" style={{ color: "#0d7a7b" }}>
              See our Gmail username guide <ExternalLink size={11} />
            </Link>
          </div>
        </section>

        {/* ── MODULE 2: Business email by company size (NEW) ── */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <Building2 size={18} style={{ color: "#0d7a7b" }} />
            <SectionTitle>Business email naming by company size</SectionTitle>
          </div>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            The right email format depends on your team size. Here is what works at each stage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {BUSINESS_FORMATS.map((b) => (
              <div key={b.size} className="rounded-xl p-5" style={{ background: b.color }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: b.text }}>{b.size}</p>
                <p className="font-mono text-sm font-bold mb-1" style={{ color: b.text }}>{b.rec}</p>
                <p className="font-mono text-xs mb-3" style={{ color: b.text, opacity: 0.8 }}>e.g. {b.example}</p>
                <p className="text-xs leading-relaxed" style={{ color: b.text, opacity: 0.85 }}>{b.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MODULE 3: Professional email checklist (NEW) ── */}
        <section className="mt-14">
          <SectionTitle>Professional email address checklist</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Before finalising your email address, run through this checklist. Green = best practice. Red = avoid.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRO_CHECKLIST.map((c) => (
              <div key={c.item} className="bg-white rounded-xl px-4 py-3 flex items-center gap-3" style={{ border: `1px solid ${c.good ? "rgba(13,122,123,0.2)" : "rgba(239,68,68,0.2)"}` }}>
                <span className="text-base shrink-0">{c.good ? "✅" : "❌"}</span>
                <span className="text-sm" style={{ color: "#0d1a1a" }}>{c.item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Business email upsell */}
        <section className="mt-14 rounded-2xl p-6 md:p-8" style={{ background: "#0d1a1a" }}>
          <div className="flex items-start gap-3 mb-5">
            <div className="p-2 rounded-xl shrink-0" style={{ background: "rgba(37,99,235,0.3)" }}>
              <Mail size={20} style={{ color: "#93c5fd" }} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white mb-0.5">Want a professional email at your own domain?</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>A branded address like you@yourname.com looks significantly more professional than @gmail.com. These providers make setup easy.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROVIDERS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer sponsored"
                className="flex flex-col justify-between rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white text-sm">{p.name}</span>
                    {p.badge && <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(37,99,235,0.4)", color: "#93c5fd" }}>{p.badge}</span>}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>{p.desc}</p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: "#93c5fd" }}>
                  Learn more <ExternalLink size={11} />
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs mt-3" style={{ color: "#4b5563" }}>* Affiliate links — we may earn a commission at no extra cost to you.</p>
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
