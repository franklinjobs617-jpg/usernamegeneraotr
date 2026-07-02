import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs mb-5" style={{ color: "#9ca3af" }}>
      <Link href="/" style={{ color: "#9ca3af", minHeight: "auto" }}>Home</Link>
      <ChevronRight size={12} />
      <span style={{ color: "#4a6060" }}>{label}</span>
    </nav>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-black mb-3" style={{ color: "#0d1a1a" }}>
      {children}
    </h2>
  );
}

export function RulesTable({ rules }: { rules: { rule: string; detail: string; source?: string; sourceUrl?: string }[] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
      {rules.map((r, i) => (
        <div
          key={r.rule}
          className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-4 sm:px-5 py-3.5 text-sm"
          style={{ borderTop: i > 0 ? "1px solid rgba(13,122,123,0.08)" : "none" }}
        >
          <span className="font-semibold sm:w-36 md:w-44 shrink-0 text-xs sm:text-sm" style={{ color: "#0d1a1a" }}>{r.rule}</span>
          <span className="text-xs sm:text-sm leading-relaxed" style={{ color: "#4a6060" }}>
            {r.detail}
            {r.source && r.sourceUrl && (
              <> — <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#0d7a7b" }}>{r.source}</a></>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TipsGrid({ tips }: { tips: { emoji: string; title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
      {tips.map((t) => (
        <div key={t.title} className="bg-white rounded-xl p-4 flex gap-3 md:gap-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
          <span className="text-xl md:text-2xl shrink-0">{t.emoji}</span>
          <div>
            <h3 className="font-bold text-sm mb-1" style={{ color: "#0d1a1a" }}>{t.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: "#4a6060" }}>{t.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-2">
      {faqs.map((faq) => (
        <details key={faq.q} className="group bg-white rounded-xl overflow-hidden" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
          <summary
            className="flex items-center justify-between px-4 py-4 cursor-pointer text-sm font-semibold select-none list-none"
            style={{ color: "#0d1a1a", minHeight: "52px" }}
          >
            <span className="pr-3">{faq.q}</span>
            <ChevronRight size={16} className="shrink-0 group-open:rotate-90 transition-transform" style={{ color: "#9ca3af" }} />
          </summary>
          <div className="px-4 pb-4 text-sm leading-relaxed" style={{ borderTop: "1px solid rgba(13,122,123,0.08)", color: "#4a6060" }}>
            <p className="pt-3">{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

interface RelatedPage { label: string; href: string; emoji: string; }

export function RelatedGrid({ related }: { related: RelatedPage[] }) {
  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div className="scroll-x sm:hidden">
        {related.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="bg-white rounded-xl p-4 flex flex-col items-center gap-2 w-28"
            style={{ border: "1px solid rgba(13,122,123,0.15)", minHeight: "auto", flexShrink: 0 }}
          >
            <span className="text-2xl">{r.emoji}</span>
            <span className="text-xs font-semibold text-center" style={{ color: "#0d1a1a" }}>{r.label}</span>
          </Link>
        ))}
      </div>
      {/* Desktop: grid */}
      <div className="hidden sm:grid grid-cols-4 gap-3">
        {related.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="bg-white rounded-xl p-4 text-center transition-all"
            style={{ border: "1px solid rgba(13,122,123,0.15)", minHeight: "auto" }}
          >
            <div className="text-2xl mb-1.5">{r.emoji}</div>
            <div className="text-xs font-semibold" style={{ color: "#0d1a1a" }}>{r.label}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
