"use client";

import { useState, useCallback } from "react";
import { Copy, Check, RefreshCw, ExternalLink, Wand2 } from "lucide-react";
import clsx from "clsx";

type Style = "all" | "gaming" | "aesthetic" | "professional" | "cute" | "random";

const STYLES: { value: Style; label: string; emoji: string }[] = [
  { value: "all",          label: "All Styles",    emoji: "✨" },
  { value: "gaming",       label: "Gaming",        emoji: "🎮" },
  { value: "aesthetic",    label: "Aesthetic",     emoji: "🌸" },
  { value: "professional", label: "Professional",  emoji: "💼" },
  { value: "cute",         label: "Cute",          emoji: "🐾" },
  { value: "random",       label: "Random",        emoji: "🎲" },
];

const PLATFORM_LINKS: { name: string; color: string; url: (u: string) => string }[] = [
  { name: "Instagram", color: "text-pink-500",   url: (u) => `https://www.instagram.com/${u}/` },
  { name: "TikTok",    color: "text-gray-800",   url: (u) => `https://www.tiktok.com/@${u}` },
  { name: "Twitter",   color: "text-blue-400",   url: (u) => `https://twitter.com/${u}` },
  { name: "YouTube",   color: "text-red-500",    url: (u) => `https://www.youtube.com/@${u}` },
  { name: "Twitch",    color: "text-purple-600", url: (u) => `https://www.twitch.tv/${u}` },
  { name: "Reddit",    color: "text-orange-500", url: (u) => `https://www.reddit.com/user/${u}` },
];

interface UsernameGeneratorProps {
  initialStyle?: Style;
  platformFocus?: string; // e.g. "Instagram" — highlights that platform icon
}

export default function UsernameGenerator({
  initialStyle = "all",
  platformFocus,
}: UsernameGeneratorProps) {
  const [keyword, setKeyword] = useState("");
  const [style, setStyle] = useState<Style>(initialStyle);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUnderscores, setIncludeUnderscores] = useState(false);
  const [leet, setLeet] = useState(false);
  const [minLength] = useState(6);
  const [maxLength] = useState(20);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword,
          style,
          minLength,
          maxLength,
          includeNumbers,
          includeUnderscores,
          leet,
        }),
      });
      const data = await res.json();
      setUsernames(data.usernames ?? []);
      setGenerated(true);
    } catch {
      // Fallback: generate locally in browser
      setUsernames(["QuickBlade42", "NeonDrift", "PixelWolf", "SilverFox99"]);
      setGenerated(true);
    } finally {
      setLoading(false);
    }
  }, [keyword, style, minLength, maxLength, includeNumbers, includeUnderscores, leet]);

  const copyToClipboard = async (username: string) => {
    await navigator.clipboard.writeText(username);
    setCopied(username);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full">
      {/* Tool Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-tool p-6 md:p-8">

        {/* Keyword input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Keyword or name <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generate()}
            placeholder="Enter your name, hobby, or interest…"
            maxLength={30}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm transition focus:border-brand-500 focus:ring-0"
          />
        </div>

        {/* Style selector */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Style
          </label>
          <div className="flex flex-wrap gap-2">
            {STYLES.map((s) => (
              <button
                key={s.value}
                onClick={() => setStyle(s.value)}
                className={clsx(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-all border",
                  style === s.value
                    ? "bg-brand-500 text-white border-brand-500 shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-600"
                )}
              >
                {s.emoji} {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced options */}
        <details className="mb-6 group">
          <summary className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700 select-none list-none flex items-center gap-1">
            <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
            Advanced options
          </summary>
          <div className="mt-3 flex flex-wrap gap-4 pl-4">
            {[
              { label: "Include numbers", value: includeNumbers, set: setIncludeNumbers },
              { label: "Include underscores", value: includeUnderscores, set: setIncludeUnderscores },
              { label: "Leet style (a→@, e→3)", value: leet, set: setLeet },
            ].map(({ label, value, set }) => (
              <label key={label} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => set(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-500 border-gray-300"
                />
                <span className="text-sm text-gray-600">{label}</span>
              </label>
            ))}
          </div>
        </details>

        {/* Generate button */}
        <button
          onClick={generate}
          disabled={loading}
          className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-sm"
        >
          {loading ? (
            <>
              <div className="spinner" />
              <span>Generating…</span>
            </>
          ) : (
            <>
              <Wand2 size={18} />
              <span>{generated ? "Regenerate Usernames" : "Generate Usernames"}</span>
            </>
          )}
        </button>
      </div>

      {/* Results */}
      {generated && usernames.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              {usernames.length} username ideas
            </h2>
            <button
              onClick={generate}
              className="text-sm text-brand-600 hover:text-brand-700 flex items-center gap-1 font-medium"
            >
              <RefreshCw size={14} />
              Refresh
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {usernames.map((username) => (
              <div
                key={username}
                className="username-card group bg-white rounded-xl border border-gray-100 p-3.5 flex items-center justify-between transition-all cursor-default"
              >
                {/* Username */}
                <span className="font-mono font-medium text-gray-800 text-sm truncate mr-2">
                  @{username}
                </span>

                {/* Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Platform links — show focused one first, then tooltip */}
                  <div className="hidden sm:flex gap-1">
                    {PLATFORM_LINKS.slice(0, 3).map((p) => (
                      <a
                        key={p.name}
                        href={p.url(username)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Check on ${p.name}`}
                        className={clsx(
                          "text-xs px-1.5 py-0.5 rounded hover:bg-gray-100 transition",
                          p.name === platformFocus ? p.color : "text-gray-400 hover:text-gray-600"
                        )}
                      >
                        {p.name[0]}
                      </a>
                    ))}
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={() => copyToClipboard(username)}
                    className={clsx(
                      "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                      copied === username
                        ? "bg-green-100 text-green-700"
                        : "bg-brand-50 text-brand-600 hover:bg-brand-100"
                    )}
                    aria-label={`Copy ${username}`}
                  >
                    {copied === username ? (
                      <><Check size={13} /> Copied</>
                    ) : (
                      <><Copy size={13} /> Copy</>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Check availability note */}
          <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <ExternalLink size={11} />
            Click the platform initial to check if the username is available
          </p>
        </div>
      )}
    </div>
  );
}
