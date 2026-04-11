# Telegram Agent Bridge

2-way Telegram bot for communicating with AI agents. Deployed on Cloud Run.

## Commands

- `/start` — welcome message
- `/agent <prompt>` — send a prompt to the configured LLM
- `/status` — show bridge health + config
- `/help` — show commands

## Deploy

```bash
cd telegram-agent-bridge
gcloud builds submit --config cloudbuild.yaml .
```

## Local dev

```bash
cd telegram-agent-bridge
npm install
TELEGRAM_BOT_TOKEN=xxx WEBHOOK_URL=xxx npm run dev
```

## Architecture

- Express server receives Telegram webhooks at `/webhook`
- `node-telegram-bot-api` processes updates
- `agent.ts` dispatches to OpenAI / Anthropic / OpenRouter if keys are set
- Falls back to echo mode if no LLM key is configured
