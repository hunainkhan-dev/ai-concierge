# 🌿 Sage — AI Website Concierge

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Serverless-Vercel-000000?logo=vercel&logoColor=white)
![Groq](https://img.shields.io/badge/LLM-Groq-F55036)

An **embeddable AI concierge for business websites** — it answers customer questions (menu, hours, pricing, dietary, directions) and walks visitors through booking, 24/7, in any language. Shown here live on a fictional restaurant; the same widget re-brands to any business by editing one config object.

### 🔗 [**View Live Demo →**](https://ai-concierge-ax.vercel.app)

> Tap the glowing button, bottom-right, and ask it anything about the restaurant.

---

## ✨ What it does

- **Natural chat** grounded in the business's real facts — it won't invent prices or hours
- **Booking flow** — collects name, date, time and party size, then confirms
- **Suggested prompts**, typing indicator, smooth mobile-first UI
- **Re-brandable in minutes** — swap `src/lib/business.js` and it knows a salon, clinic, or store instead
- **Key stays private** — the LLM call runs in a Vercel serverless function; the API key never reaches the browser

---

## 🧱 Tech stack

| Layer | Tech |
|-------|------|
| Frontend | React 18 + Vite + Tailwind CSS |
| AI backend | Vercel serverless function (`/api/chat`) |
| LLM | Groq (Llama 3.3 70B) — fast + free tier |
| Hosting | Vercel (free, no card) |

---

## 🧠 How it works

```
Visitor → React chat widget → POST /api/chat (Vercel serverless)
        → injects business facts as a system prompt → Groq LLM → reply
```

The business knowledge lives in `src/lib/business.js` and is injected into the
system prompt, so answers are always grounded in real data — no hallucinated menu.

---

## 🚀 Run locally

```bash
npm install
cp .env.example .env         # add your free Groq key (console.groq.com/keys)
npm run dev                  # Vite UI on :5173
# in another terminal, for the /api function:
vercel dev                   # serves /api/chat on :3000
```

Deploy: push to GitHub, import on Vercel, add `GROQ_API_KEY` in project settings.

---

Built by **[Axiom Web Builder](https://axiomwebbuilder.com)** · Karachi 💛
_Saffron &amp; Sage is a fictional business used for the demo._
