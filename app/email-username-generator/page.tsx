import type { Metadata } from "next";
import UsernameGenerator from "@/components/UsernameGenerator";
import { Breadcrumb, FAQSection, RelatedGrid, SectionTitle } from "@/components/PageShell";
import { Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Username Generator — Professional Email Name Ideas",
  description: "Generate professional email usernames instantly. Clean, work-ready address ideas for Gmail, Outlook, and business email. Free email name generator.",
  alternates: { canonical: "https://usernamegen.online/email-username-generator" },
};

// ── Unique module: Format preview tool (static version) ──
const FORMATS = [
  { format: "firstname.lastname",  example: (f: string, l: string) => `${f}.${l}`,    use: "Most common professional format" },
  { format: "f.lastname",          example: (f: string, l: string) => `${f[0]}.${l}`, use: "Shorter — used in large organisations" },
  { format: "firstnamelastname",   example: (f: string, l: string) => `${f}${l}`,     use: "No separator — common in tech" },
  { format: "firstname_lastname",  example: (f: string, l: string) => `${f}_${l}`,    use: "Underscore format — less common" },
  { format: "lastname.firstname",  example: (f: string, l: string) => `${l}.${f}`,    use: "European and enterprise format" },
  { format: "firstname+initial",   example: (f: string, l: string) => `${f}${l[0]}`,  use: "Compact format for short domains" },
];

const SAMPLE_FIRST = "john";
const SAMPLE_LAST  = "smith";

const PROVIDERS = [
  { name: "Google Workspace", desc: "Gmail at your own domain. Best for businesses wanting a branded address.", href: "https://workspace.google.com", badge: "Top pick" },
  { name: "Zoho Mail",        desc: "Free business email for up to 5 users. A solid budget-friendly alternative.", href: "https://www.zoho.com/mail" },
  { name: "Microsoft 365",    desc: "Outlook-based professional email with full Office suite.", href: "https://www.microsoft.com/microsoft-365" },
];

const FAQS = [
  { q: "What is a good professional email username?", a: "The best professional email usernames use your real name in a standard format: firstname.lastname, f.lastname, or firstnamelastname. Avoid numbers, underscores, and anything playful unless you are in a creative industry." },
  { q: "How do I create a professional email address?", a: "For a fully professional email, register a domain name and set up Google Workspace or Zoho Mail. This gives you an address like you@yourname.com instead of a generic @gmail.com." },
  { q: "What email username should I use for freelancing?", a: "For freelancing, use your name or a variation: john.smith, jsmith, or johnsmithdesign. Adding your profession (johnsmith.dev, sarah.writes) helps clients understand what you do." },
  { q: "Can I use underscores in an email address?", a: "Technically yes, but underscores are easy to confuse with hyphens and look less clean. For professional email, periods are preferred." },
  { q: "Is the email username generator free?", a: "Yes, completely free. No account or sign-up required." },
];

const RELATED = [
  { label: "Instagram Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Discord Generator",   href: "/discord-username-generator",   emoji: "💬" },
  { label: "Random Generator",    href: "/random-username-generator",    emoji: "🎲" },
  { label: "Username Generator",  href: "/",                             emoji: "✦"  },
];

export default function EmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Email Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/email-username-generator", description: "Free email username generator.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <section style={{ background: "linear-gradient(160deg, #eff6ff 0%, #dbeafe 60%, #f0f9f9 100%)" }} className="relative overflow-hidden">
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
            Generate clean, professional email username ideas instantly. Whether you need a work address, a freelance email, or a clean personal handle — find the right format here.
          </p>
          <UsernameGenerator initialStyle="professional" placeholder="Enter your name…" />
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4">

        {/* ── UNIQUE MODULE: Format preview ── */}
        <section className="mt-10">
          <SectionTitle>Professional email username formats</SectionTitle>
          <p className="text-sm mb-5" style={{ color: "#4a6060" }}>
            Different organisations use different email naming conventions. Here are the most common formats — all shown using the example name <span className="font-mono font-semibold">john smith</span>.
          </p>
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            {FORMATS.map((f, i) => (
              <div
                key={f.format}
                className="flex flex-col sm:flex-row sm:items-center gap-2 px-5 py-4"
                style={{ borderTop: i > 0 ? "1px solid rgba(13,122,123,0.08)" : "none" }}
              >
                <span className="font-mono text-xs w-44 shrink-0" style={{ color: "#2563eb" }}>{f.format}</span>
                <span className="font-mono text-sm font-semibold w-44 shrink-0" style={{ color: "#0d1a1a" }}>
                  {f.example(SAMPLE_FIRST, SAMPLE_LAST)}@company.com
                </span>
                <span className="text-xs" style={{ color: "#4a6060" }}>{f.use}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Business email upsell */}
        <section className="mt-10 rounded-2xl p-6 md:p-8" style={{ background: "#0d1a1a" }}>
          <div className="flex items-start gap-3 mb-5">
            <div className="p-2 rounded-xl shrink-0" style={{ background: "rgba(37,99,235,0.3)" }}>
              <Mail size={20} style={{ color: "#93c5fd" }} />
            </div>
            <div>
              <h2 className="text-base font-bold text-white mb-0.5">Want a professional email at your own domain?</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>A branded address like you@yourname.com looks far more professional than Gmail. These providers make it easy.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROVIDERS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer sponsored"
                className="flex flex-col justify-between rounded-xl p-4 transition-colors"
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
