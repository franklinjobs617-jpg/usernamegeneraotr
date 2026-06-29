import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface RelatedPage {
  label: string;
  href: string;
  emoji: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface PageShellProps {
  badge: string;
  badgeBg: string;
  badgeColor: string;
  h1: string;
  lead: string;
  faqs: FAQ[];
  related: RelatedPage[];
  children: React.ReactNode;
}

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs mb-6" style={{ color: "#9ca3af" }}>
      <Link href="/" style={{ color: "#9ca3af" }} className="hover:text-teal transition-colors">Home</Link>
      <ChevronRight size={12} />
      <span style={{ color: "#4a6060" }}>{label}</span>
    </nav>
  );
}

export function RulesTable({ rules }: { rules: { rule: string; detail: string }[] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
      {rules.map((r, i) => (
        <div
          key={r.rule}
          className="flex items-start gap-4 px-5 py-4 text-sm"
          style={{ borderBottom: i < rules.length - 1 ? "1px solid rgba(13,122,123,0.08)" : "none" }}
        >
          <span className="font-semibold w-40 shrink-0" style={{ color: "#0d1a1a" }}>{r.rule}</span>
          <span style={{ color: "#4a6060" }}>{r.detail}</span>
        </div>
      ))}
    </div>
  );
}

export function TipsGrid({ tips }: { tips: { emoji: string; title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tips.map((t) => (
        <div
          key={t.title}
          className="bg-white rounded-xl p-5 flex gap-4"
          style={{ border: "1px solid rgba(13,122,123,0.15)" }}
        >
          <span className="text-2xl shrink-0">{t.emoji}</span>
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: "#0d1a1a" }}>{t.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: "#4a6060" }}>{t.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className="group bg-white rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(13,122,123,0.15)" }}
        >
          <summary
            className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold select-none list-none"
            style={{ color: "#0d1a1a" }}
          >
            {faq.q}
            <ChevronRight size={16} className="shrink-0 group-open:rotate-90 transition-transform" style={{ color: "#9ca3af" }} />
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed" style={{ borderTop: "1px solid rgba(13,122,123,0.08)", color: "#4a6060" }}>
            <p className="pt-3">{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function RelatedGrid({ related }: { related: RelatedPage[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {related.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className="bg-white rounded-xl p-4 text-center transition-all"
          style={{ border: "1px solid rgba(13,122,123,0.15)" }}
        >
          <div className="text-2xl mb-1">{r.emoji}</div>
          <div className="text-xs font-semibold" style={{ color: "#0d1a1a" }}>{r.label}</div>
        </Link>
      ))}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black mb-4" style={{ color: "#0d1a1a" }}>
      {children}
    </h2>
  );
}
