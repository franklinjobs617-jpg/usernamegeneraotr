import { NextRequest, NextResponse } from "next/server";
import { generateUsernames } from "@/lib/generator";
import { generateWithDoubao } from "@/lib/doubao";
import type { Style } from "@/lib/generator";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      keyword = "",
      style = "all",
      minLength = 6,
      maxLength = 20,
      includeNumbers = true,
      includeUnderscores = false,
      leet = false,
    } = body;

    const apiKey = process.env.DOUBAO_API_KEY ?? "";
    const modelId = process.env.DOUBAO_MODEL_ID ?? "";

    let usernames: string[] | null = null;

    // Try Doubao first
    if (apiKey && modelId) {
      usernames = await generateWithDoubao(keyword, style as Style, 20, apiKey, modelId);
    }

    // Fallback to local generator
    if (!usernames || usernames.length < 5) {
      usernames = generateUsernames({
        keyword,
        style: style as Style,
        minLength,
        maxLength,
        includeNumbers,
        includeUnderscores,
        leet,
        count: 20,
      });
    }

    return NextResponse.json({ usernames, source: usernames ? "ai" : "local" });
  } catch (err) {
    console.error("Generate route error:", err);
    return NextResponse.json({ error: "Generation failed" }, { status: 500 });
  }
}
