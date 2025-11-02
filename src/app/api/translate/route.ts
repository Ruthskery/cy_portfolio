import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

// Simple in-memory cache (use DB/Redis for production)
const cache = new Map<string, string>();

export async function POST(req: Request) {
  const { text, targetLang } = await req.json();
  const key = `${targetLang}:${text}`;

  if (cache.has(key)) {
    return NextResponse.json({ translated: cache.get(key) });
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `Translate this text naturally into ${targetLang}. Only output the translation.`,
      },
      { role: "user", content: text },
    ],
  });

  const translated = completion.choices[0].message?.content?.trim() || text;
  cache.set(key, translated);

  return NextResponse.json({ translated });
}
