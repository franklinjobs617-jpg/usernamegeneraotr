// Doubao (ByteDance) LLM API wrapper
// Docs: https://www.volcengine.com/docs/82379/1099455
// Model: doubao-lite-4k (free tier)

import type { Style } from "./generator";

const DOUBAO_API_URL = "https://ark.cn-beijing.volces.com/api/v3/chat/completions";

function buildPrompt(keyword: string, style: Style, count: number): string {
  const styleGuide: Record<string, string> = {
    gaming: "edgy, powerful, gamer-culture inspired (e.g. ShadowBlade99, VoidHunter)",
    aesthetic: "soft, dreamy, visual-art inspired (e.g. LunaDrift, PearlBloom)",
    professional: "clean, credible, work-appropriate (e.g. EliteStudio, ProCoreLabs)",
    cute: "playful, adorable, wholesome (e.g. HoneyPaws, MochiSmile)",
    random: "creative, unique, memorable, mix of styles",
    all: "creative and varied — include a mix of gaming, aesthetic, cute, and professional styles",
  };

  const styleDescription = styleGuide[style] || styleGuide.all;

  return `Generate exactly ${count} unique usernames for social media / online platforms.
${keyword ? `The username should incorporate or be inspired by the keyword: "${keyword}"` : "Generate creative usernames without a specific keyword."}
Style: ${styleDescription}

Rules:
- Each username must be between 6 and 20 characters
- Use only letters, numbers, and underscores (no spaces, no special characters)
- No offensive or inappropriate words
- Each must be unique and different from the others
- Mix in numbers or underscores occasionally for variety
- Make them memorable and catchy

Return ONLY a JSON array of strings, no explanation, no markdown fences. Example: ["Username1","Username2"]`;
}

export async function generateWithDoubao(
  keyword: string,
  style: Style,
  count: number = 20,
  apiKey: string,
  modelId: string,
): Promise<string[] | null> {
  if (!apiKey || !modelId) return null;

  try {
    const response = await fetch(DOUBAO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelId,
        messages: [
          {
            role: "user",
            content: buildPrompt(keyword, style, count),
          },
        ],
        max_tokens: 800,
        temperature: 0.9,
      }),
      signal: AbortSignal.timeout(8000), // 8s timeout
    });

    if (!response.ok) {
      console.error(`Doubao API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    const text: string = data?.choices?.[0]?.message?.content ?? "";

    // Parse JSON array from response
    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    if (!Array.isArray(parsed)) return null;

    // Sanitize: keep only valid usernames
    return parsed
      .filter((u: unknown): u is string => typeof u === "string")
      .map((u: string) => u.replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20))
      .filter((u: string) => u.length >= 4)
      .slice(0, count);
  } catch (err) {
    console.error("Doubao API failed, falling back to local generator:", err);
    return null;
  }
}
