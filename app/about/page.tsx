import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About UserNameGen",
  description: "Learn about UserNameGen — a free username generator for social media, gaming, and online platforms.",
  alternates: { canonical: "https://usernamegen.online/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">About UserNameGen</h1>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <p>
          UserNameGen is a free username generator built for anyone who has ever stared at a blank "choose your username" field and drawn a complete blank — or typed in their first choice only to see "Username already taken."
        </p>

        <p>
          We combine a curated word bank with AI to generate unique, creative usernames tailored to your style and platform. Whether you need a bold gaming handle, a soft aesthetic Instagram name, a clean professional username for LinkedIn, or a random throwaway account name, UserNameGen produces 20 ideas in seconds.
        </p>

        <h2 className="text-base font-semibold text-gray-800 mt-8 mb-2">What makes a good username generator?</h2>
        <p>
          Most username generators produce generic, unmemorable results by combining random words with random numbers. UserNameGen takes a different approach: it factors in your keyword, your chosen style, the culture of the platform, and generates names that actually sound like something a real person would use.
        </p>

        <h2 className="text-base font-semibold text-gray-800 mt-8 mb-2">Platform-specific generators</h2>
        <p>
          Every platform has its own rules. Instagram allows up to 30 characters and no spaces. Discord has a 32-character limit. Xbox gamertags must be 12 characters or fewer. Our{" "}
          <Link href="/instagram-username-generator" className="text-brand-600 hover:underline">Instagram username generator</Link>,{" "}
          <Link href="/discord-username-generator" className="text-brand-600 hover:underline">Discord username generator</Link>, and other dedicated tools are tuned to each platform's constraints and community style.
        </p>

        <h2 className="text-base font-semibold text-gray-800 mt-8 mb-2">Free, forever</h2>
        <p>
          UserNameGen is and will always be free to use. No account required, no usage limits, no paywalls. We keep the site running through a small number of relevant affiliate partnerships and non-intrusive advertising.
        </p>

        <h2 className="text-base font-semibold text-gray-800 mt-8 mb-2">Contact us</h2>
        <p>
          Questions, suggestions, or feedback? Reach us at{" "}
          <a href="mailto:hello@usernamegen.online" className="text-brand-600 hover:underline">hello@usernamegen.online</a>.
        </p>
      </div>
    </div>
  );
}
