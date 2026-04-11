import TelegramBot from "node-telegram-bot-api";

export async function handleMessage(
  bot: TelegramBot,
  chatId: number,
  text: string,
  msg: TelegramBot.Message
) {
  if (text.startsWith("/start")) {
    await bot.sendMessage(
      chatId,
      `👋 Welcome to the AI Agent Bridge.\n\nCommands:\n/agent <prompt> — ask the agent\n/status — health check\n/help — show this message`
    );
    return;
  }

  if (text.startsWith("/help")) {
    await bot.sendMessage(
      chatId,
      `Available commands:\n/start — welcome\n/agent <text> — run a prompt through the agent dispatcher\n/status — show bridge status\n\nYou can also send any text and it will be echoed back with agent context.`
    );
    return;
  }

  if (text.startsWith("/status")) {
    await bot.sendMessage(
      chatId,
      `Bridge: online\nWebhook: ${process.env.WEBHOOK_URL || "manual"}\nLLM: ${process.env.OPENAI_API_KEY ? "OpenAI" : process.env.ANTHROPIC_API_KEY ? "Anthropic" : process.env.OPENROUTER_API_KEY ? "OpenRouter" : "none configured"}`
    );
    return;
  }

  let prompt = text;
  if (text.startsWith("/agent ")) {
    prompt = text.slice(7).trim();
  }

  if (!prompt) {
    await bot.sendMessage(chatId, "Please send a non-empty message or use /agent <prompt>.");
    return;
  }

  await bot.sendChatAction(chatId, "typing");
  const reply = await callLLM(prompt, msg.from?.username || "user");
  await bot.sendMessage(chatId, reply, { parse_mode: "Markdown" });
}

async function callLLM(prompt: string, user: string): Promise<string> {
  const openaiKey = process.env.OPENAI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openrouterKey = process.env.OPENROUTER_API_KEY;

  if (openaiKey) {
    return await openaiCompletion(prompt, openaiKey);
  }
  if (anthropicKey) {
    return await anthropicCompletion(prompt, anthropicKey);
  }
  if (openrouterKey) {
    return await openrouterCompletion(prompt, openrouterKey);
  }

  return `🤖 *Agent echo* (no LLM key configured)\n\nUser: ${user}\nPrompt: ${prompt}\n\n_To enable real agent responses, set OPENAI_API_KEY, ANTHROPIC_API_KEY, or OPENROUTER_API_KEY._`;
}

async function openaiCompletion(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.choices?.[0]?.message?.content || "(no response)";
}

async function anthropicCompletion(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.content?.[0]?.text || "(no response)";
}

async function openrouterCompletion(prompt: string, apiKey: string): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || "anthropic/claude-3.5-sonnet",
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data));
  return data.choices?.[0]?.message?.content || "(no response)";
}
