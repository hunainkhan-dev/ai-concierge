import { useEffect, useRef, useState } from 'react';
import { business } from '../lib/business.js';

const GREETING = `Hi! I'm the ${business.name} concierge 🌿 Ask me about the menu, hours, dietary options, or booking a table.`;
const SUGGESTIONS = ['What are your vegan options?', 'When are you open?', 'Book a table for 4 on Saturday'];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, loading, open]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput('');
    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // send only role+content, skip the local greeting so history stays clean
        body: JSON.stringify({ messages: next.filter((m, i) => !(i === 0 && m.role === 'assistant')) }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || 'Sorry — I had trouble answering just now.';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Network error — please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-saffron text-ink shadow-[0_8px_30px_rgba(232,163,61,.35)] transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <IconClose /> : <IconChat />}
      </button>

      {/* Panel */}
      {open && (
        <div className="glass fixed bottom-24 right-5 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] animate-pop flex-col overflow-hidden rounded-2xl border border-line shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron/15 text-saffron">🌿</span>
            <div className="leading-tight">
              <p className="font-display text-lg text-cream">{business.name} Concierge</p>
              <p className="text-[11px] text-sage">● Online · replies instantly</p>
            </div>
          </div>

          {/* Log */}
          <div ref={logRef} className="scroll-slim flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} text={m.content} />
            ))}
            {loading && <Typing />}
            {messages.length <= 1 && !loading && (
              <div className="space-y-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full rounded-lg border border-line bg-panel/60 px-3 py-2 text-left text-sm text-muted transition hover:border-saffron/50 hover:text-cream"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-line p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 rounded-full border border-line bg-ink px-4 py-2.5 text-sm text-cream outline-none placeholder:text-muted focus:border-saffron/60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="grid h-9 w-9 place-items-center rounded-full bg-saffron text-ink transition hover:bg-saffron-dark disabled:opacity-40"
              aria-label="Send"
            >
              <IconSend />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, text }) {
  const mine = role === 'user';
  return (
    <div className={`flex ${mine ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          mine ? 'rounded-br-sm bg-saffron text-ink' : 'rounded-bl-sm border border-line bg-panel text-cream'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-line bg-panel px-4 py-3">
        <Dot /> <Dot d=".2s" /> <Dot d=".4s" />
      </div>
    </div>
  );
}
const Dot = ({ d = '0s' }) => (
  <span className="h-1.5 w-1.5 rounded-full bg-muted animate-blink" style={{ animationDelay: d }} />
);

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
);
const IconSend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
);
