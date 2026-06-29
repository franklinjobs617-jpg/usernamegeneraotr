import { Shield, ExternalLink } from "lucide-react";

interface AffiliateProduct {
  name: string;
  tagline: string;
  commission: string;
  href: string;
  badge?: string;
}

const PRODUCTS: AffiliateProduct[] = [
  {
    name: "NordPass",
    tagline: "Secure, remember, and autofill all your usernames & passwords.",
    commission: "Top pick",
    href: "https://nordpass.com", // replace with your affiliate link
    badge: "Most popular",
  },
  {
    name: "Dashlane",
    tagline: "Store unlimited passwords and get real-time breach alerts.",
    commission: "Recommended",
    href: "https://dashlane.com", // replace with your affiliate link
  },
  {
    name: "1Password",
    tagline: "Trusted by 15M+ people. Your usernames safe in one place.",
    commission: "Premium",
    href: "https://1password.com", // replace with your affiliate link
  },
];

export default function AffiliateCard() {
  return (
    <section className="bg-brand-50 border border-brand-100 rounded-2xl p-6 md:p-8 mt-10">
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2 bg-brand-100 rounded-lg shrink-0">
          <Shield className="text-brand-600" size={20} />
        </div>
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Save your username securely
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            A password manager stores all your usernames and passwords — autofills them instantly on any device.
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
            className="group bg-white rounded-xl border border-gray-100 p-4 hover:border-brand-300 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-gray-900 text-sm">{p.name}</span>
                {p.badge && (
                  <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{p.tagline}</p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs font-medium text-brand-600 group-hover:text-brand-700">
              Try free <ExternalLink size={11} />
            </div>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3">
        * This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>
    </section>
  );
}
