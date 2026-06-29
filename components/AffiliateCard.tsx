import { ShieldCheck, ExternalLink } from "lucide-react";

interface Product {
  name: string;
  tagline: string;
  href: string;
  badge?: string;
}

const PRODUCTS: Product[] = [
  {
    name: "NordPass",
    tagline: "Securely store all your usernames and passwords in one place. Autofills on any device.",
    href: "https://nordpass.com", // replace with affiliate link
    badge: "Most popular",
  },
  {
    name: "Dashlane",
    tagline: "Unlimited password storage with real-time breach alerts and dark web monitoring.",
    href: "https://dashlane.com", // replace with affiliate link
  },
  {
    name: "1Password",
    tagline: "Trusted by 15M+ people. One click to fill usernames and passwords everywhere.",
    href: "https://1password.com", // replace with affiliate link
  },
];

export default function AffiliateCard() {
  return (
    <section
      className="rounded-2xl p-6 md:p-8 mt-10"
      style={{ background: "#0d1a1a" }}
    >
      <div className="flex items-start gap-3 mb-6">
        <div
          className="p-2 rounded-xl shrink-0"
          style={{ background: "rgba(13,122,123,0.3)" }}
        >
          <ShieldCheck className="text-teal-light" size={20} />
        </div>
        <div>
          <h2 className="text-base font-bold text-white mb-0.5">
            Save your username securely
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A password manager stores all your handles and passwords — autofills instantly on every device and browser.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PRODUCTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col justify-between rounded-xl p-4 transition-all"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(13,122,123,0.2)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,122,123,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-sm">{p.name}</span>
                {p.badge && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{ background: "rgba(13,122,123,0.4)", color: "#b2e8e8" }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{p.tagline}</p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-teal-light">
              Try free <ExternalLink size={11} />
            </div>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-4">
        * Affiliate links — we may earn a commission at no extra cost to you.
      </p>
    </section>
  );
}
