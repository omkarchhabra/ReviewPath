import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // Blazing fast Groq model
        messages: [
          {
            role: "system",
            content: "You are ReviewPath AI, an incredibly smart, read-only developer assistant. Your job is to analyze code, explain repositories, and provide very concise and helpful suggestions for fixes. You strictly NEVER execute code or attempt to forge commits."
          },
          ...messages
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Groq Error:", error);
    return NextResponse.json({ error: "Failed to connect to ReviewPath AI (Groq)" }, { status: 500 });
  }
}
