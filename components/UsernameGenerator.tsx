"use client";

import { useState, useCallback, useEffect } from "react";
import { Copy, Check, RefreshCw, Wand2, ChevronDown, ExternalLink, Shield } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

export type Style = "all" | "gaming" | "aesthetic" | "professional" | "cute" | "random";

const STYLES: { value: Style; label: string; emoji: string }[] = [
  { value: "all",          label: "All",          emoji: "✦" },
  { value: "gaming",       label: "Gaming",       emoji: "🎮" },
  { value: "aesthetic",    label: "Aesthetic",    emoji: "🌸" },
  { value: "professional", label: "Professional", emoji: "💼" },
  { value: "cute",         label: "Cute",         emoji: "🐾" },
  { value: "random",       label: "Random",       emoji: "🎲" },
];

const PLATFORMS = [
  { key: "ig", label: "Instagram", url: (u: string) => `https://www.instagram.com/${u}/` },
  { key: "tt", label: "TikTok",    url: (u: string) => `https://www.tiktok.com/@${u}` },
  { key: "tw", label: "Twitter",   url: (u: string) => `https://twitter.com/${u}` },
  { key: "dc", label: "Discord",   url: (u: string) => `https://discord.com/users/${u}` },
];

// Static example results visible to crawlers and users before generation
const STATIC_EXAMPLES: Record<Style, string[]> = {
  all:          ["VoidHunter42","LunaDrift","NeonBloom","SteelFox","MochiSoft","PixelRaven","BunnyPaws","CrimsonWolf","AuroraHaze","SilentBolt"],
  gaming:       ["PhantomStrike","VoidReaper","SteelFang","NeonHawk","IronWolf","ShadowBolt","ApexViper","GhostRider","FrostClaw","CyberWolf"],
  aesthetic:    ["velvet.bloom","luna.drift","pearl.haze","mist.rose","aurora.soft","ivory.lune","sage.bloom","dusk.petal","silk.nova","cerise.dream"],
  professional: ["StudioElite","ProCoreLabs","EliteWorks","PrimeStudio","CoreDesign","ApexTeam","LeadGroup","FirstWorks","SharpStudio","KeyCorps"],
  cute:         ["BunnyPaws","HoneyPop","MochiSoft","KittyWink","SugarPetal","PeachGlow","DaisyBloom","FluffyJoy","CookiePop","PandaHugs"],
  random:       ["TurboRex","QuantumDrift","FuzzyPanda","NiftyBolt","GroovyRaven","ZestyFox","SlickWizard","PeppyNinja","CrispyHawk","WickedPulse"],
};

interface Props {
  initialStyle?: Style;
  platformFocus?: string;
  placeholder?: string;
}

export default function UsernameGenerator({
  initialStyle = "all",
  platformFocus,
  placeholder = "Enter a keyword or leave blank for random…",
}: Props) {
  const [keyword, setKeyword]           = useState("");
  const [style, setStyle]               = useState<Style>(initialStyle);
  const [includeNumbers, setNumbers]    = useState(true);
  const [includeUnder, setUnder]        = useState(false);
  const [leet, setLeet]                 = useState(false);
  const [showAdv, setShowAdv]           = useState(false);
  const [usernames, setUsernames]       = useState<string[]>([]);
  const [loading, setLoading]           = useState(false);
  const [copied, setCopied]             = useState<string | null>(null);
  const [generated, setGenerated]       = useState(false);
  const [toastMsg, setToastMsg]         = useState("");
  const [showToast, setShowToast]       = useState(false);
  const [copiedCount, setCopiedCount]   = useState(0);

  // Show toast
  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, []);

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, style, includeNumbers, includeUnderscores: includeUnder, leet }),
      });
      const data = await res.json();
      if (data.usernames?.length) {
        setUsernames(data.usernames);
        setGenerated(true);
        setCopiedCount(0);
      }
    } catch {
      // Fallback to static examples on error
      setUsernames(STATIC_EXAMPLES[style]);
      setGenerated(true);
    } finally {
      setLoading(false);
    }
  }, [keyword, style, includeNumbers, includeUnder, leet]);

  const copy = useCallback(async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = name;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(name);
    setCopiedCount((c) => c + 1);
    toast(`@${name} copied!`);
    setTimeout(() => setCopied(null), 2000);
  }, [toast]);

  // Handle Enter key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && document.activeElement?.tagName === "INPUT") generate();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [generate]);

  const displayNames = generated ? usernames : STATIC_EXAMPLES[style];

  return (
    <div className="w-full">
      {/* ── Tool card ── */}
      <div className="bg-white rounded-2xl" style={{ border: "1px solid rgba(13,122,123,0.2)", boxShadow: "0 4px 24px rgba(13,122,123,0.10)" }}>

        {/* Input area */}
        <div className="p-4 md:p-6">
          {/* Keyword */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0d1a1a" }}>
              Keyword <span className="font-normal" style={{ color: "#9ca3af" }}>(optional)</span>
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={placeholder}
              maxLength={30}
              className="w-full px-4 rounded-xl text-sm transition-colors"
              style={{
                height: "48px", // min-touch-target
                border: "1.5px solid rgba(13,122,123,0.2)",
                background: "#f0f9f9",
                color: "#0d1a1a",
                outline: "none",
              }}
            />
          </div>

          {/* Style chips — horizontal scroll on mobile */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" style={{ color: "#0d1a1a" }}>Style</label>
            <div className="scroll-x pb-1">
              {STYLES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setStyle(s.value)}
                  className="px-3.5 rounded-full text-sm font-semibold border transition-all whitespace-nowrap"
                  style={{
                    height: "38px",
                    minHeight: "38px",
                    background: style === s.value ? "#0d7a7b" : "#fff",
                    color:      style === s.value ? "#fff"    : "#4a6060",
                    borderColor: style === s.value ? "#0d7a7b" : "rgba(13,122,123,0.2)",
                  }}
                >
                  {s.emoji} {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced */}
          <div className="mb-4">
            <button
              onClick={() => setShowAdv(!showAdv)}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: "#4a6060", minHeight: "auto", background: "none", border: "none" }}
            >
              <ChevronDown size={15} className={clsx("transition-transform", showAdv && "rotate-180")} />
              Advanced options
            </button>
            {showAdv && (
              <div className="mt-3 flex flex-wrap gap-4 pl-1">
                {[
                  { label: "Include numbers",     val: includeNumbers, set: setNumbers },
                  { label: "Include underscores", val: includeUnder,   set: setUnder   },
                  { label: "Leet style (a→@)",    val: leet,           set: setLeet    },
                ].map(({ label, val, set }) => (
                  <label key={label} className="flex items-center gap-2 cursor-pointer" style={{ minHeight: "44px" }}>
                    <input type="checkbox" checked={val} onChange={(e) => set(e.target.checked)} className="w-4 h-4 rounded" style={{ accentColor: "#0d7a7b" }} />
                    <span className="text-sm" style={{ color: "#4a6060" }}>{label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Generate button */}
          <button
            onClick={generate}
            disabled={loading}
            className="w-full rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60"
            style={{
              height: "52px",
              background: loading ? "#0d7a7b" : "linear-gradient(135deg,#0d7a7b,#095859)",
              boxShadow: loading ? "none" : "0 4px 14px rgba(13,122,123,0.35)",
            }}
          >
            {loading
              ? <><div className="spinner" /><span>Generating…</span></>
              : <><Wand2 size={17} /><span>{generated ? "Regenerate" : "Generate Usernames"}</span></>
            }
          </button>
        </div>

        {/* ── Results ── */}
        <div style={{ borderTop: "1px solid rgba(13,122,123,0.1)" }}>
          <div className="px-4 md:px-6 py-3 flex items-center justify-between">
            <p className="text-xs font-semibold" style={{ color: generated ? "#0d1a1a" : "#9ca3af" }}>
              {generated ? `${usernames.length} username ideas` : "Sample usernames — click Generate for AI results"}
            </p>
            {generated && (
              <button
                onClick={generate}
                className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                style={{ color: "#0d7a7b", background: "none", border: "none", minHeight: "auto" }}
              >
                <RefreshCw size={13} /> New batch
              </button>
            )}
          </div>

          {/* Results grid */}
          <div className="px-4 md:px-6 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {displayNames.map((name) => (
              <div
                key={name}
                className="result-card bg-white rounded-xl flex items-center justify-between"
                style={{ border: "1px solid rgba(13,122,123,0.12)", padding: "10px 14px", minHeight: "48px" }}
              >
                <span className="font-mono font-semibold text-sm truncate mr-3" style={{ color: "#0d1a1a" }}>
                  @{name}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Platform check links — desktop only */}
                  <div className="hidden sm:flex gap-1">
                    {PLATFORMS.slice(0, 3).map((p) => (
                      <a
                        key={p.key}
                        href={p.url(name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Check on ${p.label}`}
                        className="inline-btn text-xs px-1.5 rounded font-semibold transition-colors"
                        style={{
                          minHeight: "auto",
                          color: p.label === platformFocus ? "#0d7a7b" : "#9ca3af",
                          background: p.label === platformFocus ? "#f0f9f9" : "transparent",
                        }}
                      >
                        {p.label[0]}
                      </a>
                    ))}
                  </div>
                  {/* Copy button */}
                  <button
                    onClick={() => copy(name)}
                    className="inline-btn items-center gap-1 px-3 rounded-lg text-xs font-bold transition-all"
                    style={{
                      minHeight: "32px",
                      background: copied === name ? "#dcfce7" : "#f0f9f9",
                      color:      copied === name ? "#166534" : "#0d7a7b",
                      border: "none",
                    }}
                  >
                    {copied === name ? <><Check size={12} />Copied</> : <><Copy size={12} />Copy</>}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Availability note */}
          <p className="px-4 md:px-6 pb-3 text-xs flex items-center gap-1" style={{ color: "#9ca3af" }}>
            <ExternalLink size={11} />
            Click I / T / X next to any name to check availability on that platform
          </p>
        </div>
      </div>

      {/* ── Post-generate next-step cards ── */}
      {generated && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "#0d1a1a" }}>💾 Save it securely</p>
            <p className="text-xs mb-2" style={{ color: "#4a6060" }}>Store your username + password in a password manager so you never lose it.</p>
            <Link href="#save-securely" className="inline-btn text-xs font-semibold" style={{ color: "#0d7a7b", minHeight: "auto" }}>
              See recommendations →
            </Link>
          </div>
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "#0d1a1a" }}>🔄 Try another style</p>
            <p className="text-xs mb-2" style={{ color: "#4a6060" }}>Not quite right? Switch the style above and regenerate for a completely different vibe.</p>
            <button onClick={generate} className="inline-btn text-xs font-semibold" style={{ color: "#0d7a7b", background: "none", border: "none", minHeight: "auto" }}>
              Regenerate now →
            </button>
          </div>
          <div className="bg-white rounded-xl p-4" style={{ border: "1px solid rgba(13,122,123,0.15)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "#0d1a1a" }}>🎯 Platform-specific</p>
            <p className="text-xs mb-2" style={{ color: "#4a6060" }}>Each platform has different rules. Use a dedicated generator for better results.</p>
            <Link href="/#platforms" className="inline-btn text-xs font-semibold" style={{ color: "#0d7a7b", minHeight: "auto" }}>
              Browse platforms →
            </Link>
          </div>
        </div>
      )}

      {/* ── Mobile toast ── */}
      <div className={clsx("copy-toast", showToast && "show")} aria-live="polite">
        ✓ {toastMsg}
      </div>
    </div>
  );
}
