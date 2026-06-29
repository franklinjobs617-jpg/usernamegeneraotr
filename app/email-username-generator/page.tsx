import type { Metadata } from "next";
import Link from "next/link";
import UsernameGenerator from "@/components/UsernameGenerator";
import { ChevronRight, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Email Username Generator — Professional Email Name Ideas",
  description:
    "Generate professional email usernames instantly. Free email name generator with clean, work-ready address ideas for Gmail, Outlook, and business email.",
  alternates: { canonical: "https://usernamegen.online/email-username-generator" },
};

const EMAIL_FORMATS = [
  { format: "firstname.lastname", example: "john.smith@company.com", use: "Most common professional format" },
  { format: "f.lastname", example: "j.smith@company.com", use: "Shorter, used in large organisations" },
  { format: "firstnamelastname", example: "johnsmith@company.com", use: "No separator, common in tech" },
  { format: "firstname_lastname", example: "john_smith@company.com", use: "Underscore format, less common" },
  { format: "lastname.firstname", example: "smith.john@company.com", use: "European and enterprise format" },
  { format: "nickname or handle", example: "jsmith@gmail.com", use: "Personal and freelance accounts" },
];

const PROVIDERS = [
  {
    name: "Google Workspace",
    desc: "Professional email at your own domain. Includes Gmail, Drive, Meet, and Docs. Best for businesses and freelancers wanting a branded address.",
    cta: "Start free trial",
    href: "https://workspace.google.com",
    highlight: true,
  },
  {
    name: "Zoho Mail",
    desc: "Free business email for up to 5 users. A solid alternative to Google Workspace for small teams on a budget.",
    cta: "Get free plan",
    href: "https://www.zoho.com/mail",
    highlight: false,
  },
  {
    name: "Microsoft 365",
    desc: "Outlook-based professional email with full Office suite. Best for teams already in the Microsoft ecosystem.",
    cta: "View plans",
    href: "https://www.microsoft.com/microsoft-365",
    highlight: false,
  },
];

const TIPS = [
  { emoji: "💼", title: "Use your real name for professional email", body: "For work and business email, your actual name is almost always the right choice. Handles like john.smith or j.smith are standard and immediately credible." },
  { emoji: "🔤", title: "Avoid numbers in professional addresses", body: "john.smith99@gmail.com signals that your preferred name was taken. For professional contexts, try a variation — j.smith, johnsmith.dev — before appending numbers." },
  { emoji: "📧", title: "Get your own domain", body: "A branded email (you@yourname.com or you@yourbusiness.com) is significantly more professional than Gmail or Outlook. Google Workspace costs from $6/month and includes full Gmail functionality." },
  { emoji: "🔒", title: "Keep personal and professional separate", body: "Use different email addresses for work, personal accounts, newsletters, and online purchases. A username generator helps you create clean, memorable addresses for each purpose." },
  { emoji: "🌐", title: "Think about the full address", body: "Your email username only looks professional if the domain matches. creative.studio@gmail.com is fine; creative.studio@hotmail.com is dated. Match the username to an appropriate provider." },
  { emoji: "✉️", title: "Shorter is better for email", body: "Email addresses get typed into forms, shared verbally, and printed on business cards. Under 20 characters total (username + domain) is the practical sweet spot." },
];

const FAQS = [
  { q: "What is a good professional email username?", a: "The best professional email usernames use your real name in a standard format: firstname.lastname, f.lastname, or firstnamelastname. Avoid numbers, underscores, and anything playful unless you are in a creative industry." },
  { q: "How do I create a professional email address?", a: "For a fully professional email, register a domain name and set up Google Workspace or Zoho Mail. This gives you an address like you@yourname.com instead of a generic @gmail.com address. If you just need a clean Gmail address, use firstname.lastname as the username." },
  { q: "Can I use underscores in an email address?", a: "Technically yes — most email providers allow underscores in usernames. However, underscores are easy to confuse with hyphens and look less clean than periods. For professional email, periods are preferred." },
  { q: "What email username should I use for freelancing?", a: "For freelancing, use your name or a variation of it: john.smith, jsmith, or johnsmithdesign. Adding your profession (johnsmith.dev, sarah.writes) can help clients immediately understand what you do." },
  { q: "Is the email username generator free?", a: "Yes, completely free. No account or sign-up required." },
  { q: "What is the difference between an email username and an email address?", a: "The email username is the part before the @ symbol. The full email address includes the username, the @ symbol, and the domain (e.g. gmail.com). When someone asks for your email username, they want just the first part." },
];

const RELATED = [
  { label: "Instagram Username Generator", href: "/instagram-username-generator", emoji: "📸" },
  { label: "Discord Username Generator", href: "/discord-username-generator", emoji: "💬" },
  { label: "Random Username Generator", href: "/random-username-generator", emoji: "🎲" },
  { label: "Username Generator", href: "/", emoji: "✦" },
];

export default function EmailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Email Username Generator", applicationCategory: "UtilitiesApplication", operatingSystem: "Web", url: "https://usernamegen.online/email-username-generator", description: "Free email username generator. Professional email name ideas instantly.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">

        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-600">Email Username Generator</span>
        </nav>

        <section className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
            ✉️ Email
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Email Username Generator
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl">
            Generate clean, professional email username ideas instantly. Whether you need a work address, a freelance email, or a clean personal handle — find the right format here.
          </p>
        </section>

        <section className="mb-10">
          <UsernameGenerator initialStyle="professional" />
        </section>

        {/* Business email upsell — high CPC placement */}
        <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 mt-10">
          <div className="flex items-start gap-3 mb-5">
            <div className="p-2 bg-blue-100 rounded-lg shrink-0">
              <Mail className="text-blue-600" size={20} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">Want a professional email at your own domain?</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                A branded address like you@yourname.com looks far more professional than Gmail. These providers make it easy.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROVIDERS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`group bg-white rounded-xl border p-4 hover:shadow-card transition-all flex flex-col justify-between ${p.highlight ? "border-blue-200" : "border-gray-100"}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900 text-sm">{p.name}</span>
                    {p.highlight && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Top pick</span>}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-600 group-hover:text-blue-700">
                  {p.cta} <ExternalLink size={11} />
                </div>
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">* Affiliate links. We may earn a commission at no extra cost to you.</p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Professional email username formats</h2>
          <p className="text-gray-500 text-sm mb-5">Different organisations use different email naming conventions. Here are the most common formats and when to use each.</p>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
            {EMAIL_FORMATS.map((f, i) => (
              <div key={f.format} className={`grid grid-cols-3 gap-4 px-5 py-4 text-sm ${i < EMAIL_FORMATS.length - 1 ? "border-b border-gray-50" : ""}`}>
                <span className="font-mono text-brand-600 font-medium">{f.format}</span>
                <span className="text-gray-500 font-mono text-xs">{f.example}</span>
                <span className="text-gray-400 text-xs">{f.use}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">6 tips for a professional email username</h2>
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
