import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "UserNameGen privacy policy — how we handle your data.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-600 leading-relaxed">

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">1. Who we are</h2>
          <p>UserNameGen ("we", "us", "our") operates the website usernamegen.online. This privacy policy explains what information we collect, how we use it, and your rights.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">2. Information we collect</h2>
          <p>We do not require users to create accounts or provide personal information to use our username generator tool.</p>
          <p className="mt-2">We may collect the following data automatically:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring URL</li>
            <li>Device type and operating system</li>
            <li>IP address (anonymized)</li>
          </ul>
          <p className="mt-2">This data is collected via Google Analytics 4 and is used solely to improve the website experience.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">3. Cookies</h2>
          <p>This website uses cookies for analytics purposes (Google Analytics) and advertising (Google AdSense). You can manage cookie preferences through your browser settings. By continuing to use this site, you consent to the use of cookies as described in this policy.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">4. Google AdSense</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-brand-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">5. Affiliate links</h2>
          <p>Some links on this website are affiliate links. If you click an affiliate link and make a purchase, we may receive a commission at no additional cost to you. We only recommend products we believe offer genuine value.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">6. Third-party services</h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Google Analytics 4 — website traffic analysis</li>
            <li>Google AdSense — advertising</li>
            <li>Vercel — website hosting</li>
          </ul>
          <p className="mt-2">Each third-party service has its own privacy policy governing data use.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">7. Data retention</h2>
          <p>We do not store any personal data entered into our username generator tool. Analytics data is retained for 26 months via Google Analytics, after which it is automatically deleted.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">8. Your rights</h2>
          <p>Depending on your location, you may have rights including access to, correction, or deletion of data we hold about you. To exercise these rights, contact us at the address below.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">9. Contact</h2>
          <p>For privacy questions, email us at: <a href="mailto:privacy@usernamegen.online" className="text-brand-600 hover:underline">privacy@usernamegen.online</a></p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">10. Changes to this policy</h2>
          <p>We may update this policy periodically. Changes will be posted on this page with an updated date. Continued use of the site constitutes acceptance of the revised policy.</p>
        </section>

      </div>
    </div>
  );
}
