import { MetadataRoute } from "next";

const BASE = "https://usernamegen.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { url: "/",                               priority: 1.0,  changeFreq: "weekly" },
    { url: "/instagram-username-generator",   priority: 0.9,  changeFreq: "weekly" },
    { url: "/random-username-generator",      priority: 0.9,  changeFreq: "weekly" },
    { url: "/tiktok-username-generator",      priority: 0.85, changeFreq: "weekly" },
    { url: "/roblox-username-generator",      priority: 0.85, changeFreq: "weekly" },
    { url: "/aesthetic-username-generator",   priority: 0.85, changeFreq: "weekly" },
    { url: "/email-username-generator",       priority: 0.85, changeFreq: "weekly" },
    { url: "/xbox-username-generator",        priority: 0.8,  changeFreq: "monthly" },
    { url: "/discord-username-generator",     priority: 0.8,  changeFreq: "monthly" },
    { url: "/gaming-username-generator",      priority: 0.8,  changeFreq: "monthly" },
    { url: "/cute-username-generator",        priority: 0.75, changeFreq: "monthly" },
    { url: "/goth-username-generator",        priority: 0.75, changeFreq: "monthly" },
    { url: "/about",                          priority: 0.4,  changeFreq: "yearly"  },
    { url: "/contact",                        priority: 0.3,  changeFreq: "yearly"  },
    { url: "/privacy",                        priority: 0.2,  changeFreq: "yearly"  },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));
}
