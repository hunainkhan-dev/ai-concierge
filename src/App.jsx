import ChatWidget from './components/ChatWidget.jsx';
import { business } from './lib/business.js';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      {/* Demo ribbon */}
      <div className="border-b border-line bg-panel/60 px-4 py-2 text-center text-xs text-muted">
        ⚡ Live AI demo — a reusable <span className="text-saffron">website concierge</span> by{' '}
        <a href="https://axiomwebbuilder.com" className="underline decoration-saffron/50 hover:text-cream">Axiom Web Builder</a>. Tap the button, bottom-right.
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <span className="font-display text-2xl tracking-wide text-cream">{business.name}</span>
        <span className="hidden text-sm text-muted sm:block">{business.tagline} · {business.city}</span>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 text-center">
        <p className="animate-fadeup text-sm uppercase tracking-[0.3em] text-saffron">{business.city} · est. 2026</p>
        <h1 className="mx-auto mt-5 max-w-3xl animate-fadeup font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-7xl">
          A kitchen that answers<br />before you even arrive.
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-fadeup text-lg text-muted">
          Meet our AI concierge — it knows the menu, the hours, and the dietary details, and books your table in seconds. No hold music.
        </p>
        <div className="mt-9 flex animate-fadeup flex-wrap justify-center gap-3">
          <button
            onClick={() => document.querySelector('[aria-label="Open assistant"]')?.click()}
            className="rounded-full bg-saffron px-7 py-3.5 font-semibold text-ink transition hover:bg-saffron-dark"
          >
            Ask the AI concierge →
          </button>
          <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="rounded-full border border-line px-7 py-3.5 font-semibold text-cream transition hover:border-saffron/60">
            {business.phone}
          </a>
        </div>
      </section>

      {/* Menu */}
      <section className="mx-auto max-w-4xl px-5 py-14">
        <h2 className="text-center font-display text-4xl text-cream">The Menu</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-saffron/50" />
        <ul className="mt-10 divide-y divide-line">
          {business.menu.map((m) => (
            <li key={m.name} className="flex items-baseline justify-between gap-4 py-4">
              <div>
                <span className="font-display text-xl text-cream">{m.name}</span>
                {m.tag && <span className="ml-3 rounded-full border border-line px-2 py-0.5 text-[11px] uppercase tracking-wide text-sage">{m.tag}</span>}
              </div>
              <span className="whitespace-nowrap text-muted">{m.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-sm text-muted">Open {business.hours} · {business.address}</p>
      </section>

      {/* Product pitch */}
      <section className="border-t border-line bg-panel/40">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-saffron">What you're actually looking at</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-4xl text-cream">
            The same concierge drops into any business website in a day.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { t: 'Answers 24/7', d: 'Menu, hours, pricing, dietary and booking questions — instantly, in any language, while you sleep.' },
              { t: 'Re-brandable in minutes', d: 'One config object holds the business info. Swap it and the assistant knows a salon, clinic or store instead.' },
              { t: 'Private & cheap to run', d: 'The LLM key stays server-side on Vercel. Runs on free/near-free infrastructure.' },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-line bg-ink/60 p-6">
                <h3 className="font-display text-2xl text-saffron">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://axiomwebbuilder.com" className="rounded-full bg-saffron px-7 py-3.5 font-semibold text-ink transition hover:bg-saffron-dark">
              Add this to your site →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
        {business.name} is a fictional demo. Concierge &amp; site built by{' '}
        <a href="https://axiomwebbuilder.com" className="text-cream underline decoration-saffron/50">Axiom Web Builder</a> · Karachi 💛
      </footer>

      <ChatWidget />
    </div>
  );
}
