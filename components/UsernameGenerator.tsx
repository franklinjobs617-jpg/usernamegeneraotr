"use client";

import { useState, useCallback } from "react";
import { Copy, Check, RefreshCw, Wand2, ExternalLink, ChevronDown } from "lucide-react";
import clsx from "clsx";

type Style = "all" | "gaming" | "aesthetic" | "professional" | "cute" | "random";

const STYLES: { value: Style; label: string; emoji: string }[] = [
  { value: "all",          label: "All Styles",    emoji: "✦" },
  { value: "gaming",       label: "Gaming",        emoji: "🎮" },
  { value: "aesthetic",    label: "Aesthetic",     emoji: "🌸" },
  { value: "professional", label: "Professional",  emoji: "💼" },
  { value: "cute",         label: "Cute",          emoji: "🐾" },
  { value: "random",       label: "Random",        emoji: "🎲" },
];

const PLATFORMS = [
  { key: "ig",  label: "Instagram", url: (u: string) => `https://www.instagram.com/${u}/` },
  { key: "tt",  label: "TikTok",    url: (u: string) => `https://www.tiktok.com/@${u}` },
  { key: "tw",  label: "Twitter",   url: (u: string) => `https://twitter.com/${u}` },
  { key: "yt",  label: "YouTube",   url: (u: string) => `https://www.youtube.com/@${u}` },
  { key: "dc",  label: "Discord",   url: (u: string) => `https://discord.com/users/${u}` },
];

interface Props {
  initialStyle?: Style;
  platformFocus?: string;
  placeholder?: string;
}

export default function UsernameGenerator({
  initialStyle = "all",
  platformFocus,
  placeholder = "Enter a keyword or name…",
}: Props) {
  const [keyword, setKeyword]             = useState("");
  const [style, setStyle]                 = useState<Style>(initialStyle);
  const [includeNumbers, setNumbers]      = useState(true);
  const [includeUnderscores, setUnder]    = useState(false);
  const [leet, setLeet]                   = useState(false);
  const [showAdvanced, setShowAdvanced]   = useState(false);
  const [usernames, setUsernames]         = useState<string[]>([]);
  const [loading, setLoading]             = useState(false);
  const [copied, setCopied]               = useState<string | null>(null);
  const [generated, setGenerated]         = useState(false);

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, style, includeNumbers, includeUnderscores, leet }),
      });
      const data = await res.json();
      setUsernames(data.usernames ?? []);
      setGenerated(true);
    } catch {
      setUsernames(["VoidHunter42", "LunaDrift", "NeonBloom", "SteelFox"]);
      setGenerated(true);
    } finally {
      setLoading(false);
    }
  }, [keyword, style, includeNumbers, includeUnderscores, leet]);

  const copy = async (name: string) => {
    await navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full">
      {/* Tool card */}
      <div
        className="bg-white rounded-2xl border border-teal/20 p-6 md:p-8"
        style={{ boxShadow: "0 4px 24px rgba(13,122,123,0.10)" }}
      >
        {/* Keyword input */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-night mb-1.5">
            Keyword or name{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && generate()}
              placeholder={placeholder}
              maxLength={30}
              className="flex-1 px-4 py-3 border border-teal/20 rounded-xl text-night placeholder-gray-400 text-sm bg-teal-mist/40 focus:border-teal focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Style chips */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-night mb-2">Style</label>
          <div className="flex flex-wrap gap-2">
            {STYLES.map((s) => (
              <button
                key={s.value}
                onClick={() => setStyle(s.value)}
                className={clsx(
                  "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all border",
                  style === s.value
                    ? "bg-teal text-white border-teal"
                    : "bg-white text-muted border-teal/20 hover:border-teal hover:text-teal"
                )}
              >
                {s.emoji} {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced options */}
        <div className="mb-6">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-teal transition-colors"
          >
            <ChevronDown
              size={15}
              className={clsx("transition-transform", showAdvanced && "rotate-180")}
            />
            Advanced options
          </button>
          {showAdvanced && (
            <div className="mt-3 flex flex-wrap gap-5 pl-1">
              {[
                { label: "Include numbers",     val: includeNumbers, set: setNumbers },
                { label: "Include underscores", val: includeUnderscores, set: setUnder },
                { label: "Leet style (e→3, a→@)", val: leet, set: setLeet },
              ].map(({ label, val, set }) => (
                <label key={label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={(e) => set(e.target.checked)}
                    className="w-4 h-4 rounded accent-teal"
                  />
                  <span className="text-sm text-muted">{label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Generate button */}
        <button
          onClick={generate}
          disabled={loading}
          className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60"
          style={{
            background: loading ? "#0d7a7b" : "linear-gradient(135deg, #0d7a7b 0%, #095859 100%)",
            boxShadow: loading ? "none" : "0 4px 14px rgba(13,122,123,0.35)",
          }}
        >
          {loading ? (
            <><div className="spinner" /><span>Generating…</span></>
          ) : (
            <><Wand2 size={16} /><span>{generated ? "Regenerate" : "Generate Usernames"}</span></>
          )}
        </button>
      </div>

      {/* Results */}
      {generated && usernames.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-night">
              {usernames.length} username ideas
            </p>
            <button
              onClick={generate}
              className="flex items-center gap-1.5 text-sm text-teal hover:text-teal-dark font-medium transition-colors"
            >
              <RefreshCw size={13} /> Refresh
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {usernames.map((name) => (
              <div
                key={name}
                className="result-card bg-white border border-teal/15 rounded-xl px-4 py-3 flex items-center justify-between"
              >
                <span className="font-mono font-semibold text-night text-sm truncate mr-3">
                  @{name}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {/* Platform check links */}
                  <div className="hidden sm:flex gap-1">
                    {PLATFORMS.slice(0, 3).map((p) => (
                      <a
                        key={p.key}
                        href={p.url(name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Check on ${p.label}`}
                        className={clsx(
                          "text-xs px-1.5 py-0.5 rounded font-medium transition-colors",
                          p.label === platformFocus
                            ? "text-teal bg-teal-mist"
                            : "text-gray-400 hover:text-teal hover:bg-teal-mist"
                        )}
                      >
                        {p.label[0]}
                      </a>
                    ))}
                  </div>
                  {/* Copy */}
                  <button
                    onClick={() => copy(name)}
                    className={clsx(
                      "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                      copied === name
                        ? "bg-green-100 text-green-700"
                        : "bg-teal-light text-teal hover:bg-teal hover:text-white"
                    )}
                  >
                    {copied === name
                      ? <><Check size={12} /> Copied</>
                      : <><Copy size={12} /> Copy</>
                    }
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-400 text-center flex items-center justify-center gap-1">
            <ExternalLink size={11} />
            Click a platform initial (I, T, X) to check availability
          </p>
        </div>
      )}
    </div>
  );
}
