import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the UserNameGen team.",
  alternates: { canonical: "https://usernamegen.online/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact</h1>
      <p className="text-sm text-gray-500 mb-8">
        Have a question, suggestion, or found a bug? We'd love to hear from you.
      </p>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-5">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">General enquiries</p>
          <a href="mailto:hello@usernamegen.online" className="text-brand-600 hover:underline text-sm">
            hello@usernamegen.online
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Privacy & data</p>
          <a href="mailto:privacy@usernamegen.online" className="text-brand-600 hover:underline text-sm">
            privacy@usernamegen.online
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Partnership & affiliate enquiries</p>
          <a href="mailto:partners@usernamegen.online" className="text-brand-600 hover:underline text-sm">
            partners@usernamegen.online
          </a>
        </div>
        <p className="text-xs text-gray-400 pt-2 border-t border-gray-50">
          We typically respond within 2 business days.
        </p>
      </div>
    </div>
  );
}
