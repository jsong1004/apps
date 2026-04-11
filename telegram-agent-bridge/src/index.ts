import express from "express";
import TelegramBot from "node-telegram-bot-api";
import { handleMessage } from "./agent.js";

const app = express();
app.use(express.json());

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEBHOOK_URL = process.env.WEBHOOK_URL;
const PORT = Number(process.env.PORT || "8080");

if (!TOKEN) {
  console.error("TELEGRAM_BOT_TOKEN is required");
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { webHook: true });

app.get("/health", (_req, res) => {
  res.json({ status: "ok", bot: !!TOKEN, webhook: WEBHOOK_URL || "not set" });
});

app.post("/webhook", (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";
  console.log(`[${chatId}] ${text}`);
  try {
    await handleMessage(bot, chatId, text, msg);
  } catch (err) {
    console.error("Agent dispatch error:", err);
    await bot.sendMessage(chatId, "Agent error. Check logs.");
  }
});

async function start() {
  if (WEBHOOK_URL) {
    await bot.setWebHook(WEBHOOK_URL);
    console.log("Webhook set to", WEBHOOK_URL);
  } else {
    console.warn("WEBHOOK_URL not set — manual webhook config required for Cloud Run");
  }
  app.listen(PORT, () => {
    console.log(`Telegram agent bridge listening on port ${PORT}`);
  });
}

start();
