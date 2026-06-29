// Local username generation — runs instantly, no API needed
// Used as primary fallback when Doubao API is unavailable

export type Style = "all" | "gaming" | "aesthetic" | "professional" | "cute" | "random";

const wordBanks = {
  gaming: {
    prefixes: ["Shadow", "Dark", "Neon", "Blaze", "Storm", "Hyper", "Ultra", "Ghost", "Void", "Apex", "Steel", "Cyber", "Phantom", "Nova", "Rage"],
    suffixes: ["Slayer", "Knight", "Hunter", "Warrior", "Blade", "Wolf", "Fox", "Hawk", "Strike", "Force", "Claw", "Sniper", "Reaper", "Titan", "Viper"],
    adjectives: ["Swift", "Silent", "Savage", "Epic", "Deadly", "Fierce", "Brutal", "Rapid", "Lethal", "Bold"],
  },
  aesthetic: {
    prefixes: ["Luna", "Rose", "Ivory", "Velvet", "Pearl", "Aurora", "Iris", "Sage", "Willow", "Mist", "Bloom", "Eden", "Nova", "Lyric", "Opal"],
    suffixes: ["Dream", "Glow", "Vibe", "Aura", "Bloom", "Haze", "Drift", "Soft", "Lune", "Muse", "Soul", "Petal", "Skye", "Halo", "Dusk"],
    adjectives: ["Soft", "Dreamy", "Pastel", "Gentle", "Ethereal", "Dainty", "Whimsy", "Bliss", "Serene", "Dewy"],
  },
  professional: {
    prefixes: ["Pro", "Elite", "Expert", "Chief", "Lead", "Senior", "Prime", "Ace", "Top", "Core", "Key", "First", "Main", "Head", "Alpha"],
    suffixes: ["Works", "Studio", "Labs", "Hub", "Base", "Desk", "Team", "Corp", "Co", "Group", "Zone", "Space", "Tech", "Dev", "Pro"],
    adjectives: ["Smart", "Sharp", "Precise", "Clean", "Efficient", "Skilled", "Savvy", "Adept", "Capable", "Agile"],
  },
  cute: {
    prefixes: ["Bunny", "Kitty", "Fluffy", "Cookie", "Honey", "Sugar", "Peach", "Pudding", "Mochi", "Panda", "Cupcake", "Sprinkle", "Daisy", "Lemon", "Berry"],
    suffixes: ["Paws", "Hugs", "Kisses", "Wink", "Smile", "Heart", "Love", "Joy", "Star", "Moon", "Bliss", "Charm", "Pie", "Cake", "Pop"],
    adjectives: ["Tiny", "Sweet", "Little", "Mini", "Baby", "Soft", "Fluffy", "Cuddly", "Bubbly", "Rosy"],
  },
  random: {
    prefixes: ["Cosmic", "Turbo", "Mega", "Ultra", "Pixel", "Fuzzy", "Sneaky", "Rapid", "Wicked", "Quirky", "Zesty", "Nifty", "Slick", "Groovy", "Peppy"],
    suffixes: ["Panda", "Rocket", "Wizard", "Ninja", "Pirate", "Viking", "Dragon", "Phoenix", "Unicorn", "Cobra", "Spark", "Bolt", "Rush", "Dash", "Flip"],
    adjectives: ["Wild", "Crazy", "Funky", "Zany", "Quirky", "Bold", "Vivid", "Lively", "Speedy", "Crispy"],
  },
};

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyLeet(str: string): string {
  return str
    .replace(/a/gi, "@")
    .replace(/e/gi, "3")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5");
}

export interface GenerateOptions {
  keyword?: string;
  style: Style;
  minLength: number;
  maxLength: number;
  includeNumbers: boolean;
  includeUnderscores: boolean;
  leet: boolean;
  count?: number;
}

export function generateUsernames(opts: GenerateOptions): string[] {
  const {
    keyword = "",
    style,
    minLength,
    maxLength,
    includeNumbers,
    includeUnderscores,
    leet,
    count = 20,
  } = opts;

  const styles: Style[] = style === "all" || style === "random"
    ? ["gaming", "aesthetic", "professional", "cute", "random"]
    : [style];

  const results = new Set<string>();

  const kw = keyword.trim().replace(/\s+/g, "");

  const maxAttempts = count * 15;
  let attempts = 0;

  while (results.size < count && attempts < maxAttempts) {
    attempts++;

    const activeStyle = getRandom(styles) as Exclude<Style, "all" | "random">;
    const bank = wordBanks[activeStyle] || wordBanks.random;

    const prefix = getRandom(bank.prefixes);
    const suffix = getRandom(bank.suffixes);
    const adj = getRandom(bank.adjectives);

    const patterns: string[] = [];

    if (kw) {
      // Keyword-based patterns
      patterns.push(
        `${kw}${suffix}`,
        `${prefix}${kw}`,
        `${kw}_${suffix.toLowerCase()}`,
        `${prefix}_${kw}`,
        `${kw}${getRandomNum(1, 999)}`,
        `${kw}${suffix}${getRandomNum(1, 99)}`,
        `${adj}${kw}`,
        `${kw}${adj}`,
      );
    } else {
      // Keywordless patterns
      patterns.push(
        `${prefix}${suffix}`,
        `${adj}${suffix}`,
        `${prefix}${adj}`,
        `${prefix}${suffix}${getRandomNum(1, 99)}`,
        `${getRandom(bank.prefixes)}${getRandom(bank.suffixes)}`,
        `${adj}${prefix}`,
      );
    }

    for (const raw of patterns) {
      let name = raw;

      if (!includeUnderscores) name = name.replace(/_/g, "");
      if (includeNumbers && !/_\d|\d$/.test(name)) {
        name += getRandomNum(1, 99);
      }
      if (leet) name = applyLeet(name);

      // Length filter
      if (name.length < minLength || name.length > maxLength) continue;

      // No spaces, clean
      if (/\s/.test(name)) continue;

      results.add(name);
      if (results.size >= count) break;
    }
  }

  return Array.from(results).slice(0, count);
}
