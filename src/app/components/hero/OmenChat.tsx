'use client';

/* The split-screen "Omen" chat (right pane of AI mode).
   Answers come from Cyril's real backend (askMe); a scripted fallback
   covers errors so Omen always replies. Warm, concise, never invents. */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { askMe } from '@/app/api/askMe';
import { AI_SUGGESTIONS } from './data';
import { ArrowRight } from './icons';
import omen from '../../../../public/ai/omen.jpg';

type Msg = { role: 'me' | 'bot'; text: string; typing?: boolean };

const GREETING =
  "Hi! I'm Omen, Cyril's AI assistant. Ask me about his skills, work, or what he's looking for.";

function fallback(q: string): string {
  const t = (q || '').toLowerCase();
  if (t.includes('stack') || t.includes('skill') || t.includes('tech'))
    return 'Cyril works across Python, TypeScript, JavaScript and PHP — with React, Next.js, Node.js, FastAPI and Laravel, plus Docker, Azure DevOps and a strong focus on AI integration and prompt engineering.';
  if (t.includes('work') || t.includes('job') || t.includes('csi') || t.includes('role'))
    return "He's currently a Software Testing Engineer at CSI Interfusion, working with Azure DevOps, CI/CD and test management to keep releases stable.";
  if (t.includes('open') || t.includes('hire') || t.includes('available'))
    return 'Yes — Cyril is open to collaborating on AI, full-stack development, prompt engineering and modern web work. Reach him on LinkedIn (linkedin.com/in/cyril-imperial).';
  return 'Cyril is an aspiring Full-Stack Developer & AI Engineer. He interned at Pru Life UK, works as a Software Testing Engineer at CSI Interfusion, and graduated in July 2025. Ask me about his stack, projects or experience!';
}

export default function OmenChat({
  active,
  seedQuery,
  onSeedConsumed,
  onClose,
}: {
  active: boolean;
  seedQuery: string | null;
  onSeedConsumed: () => void;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const greeted = useRef(false);
  const busyRef = useRef(false);
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    msgsRef.current?.scrollTo({ top: msgsRef.current.scrollHeight });
  }, [messages]);

  // greet + focus when AI mode opens
  useEffect(() => {
    if (!active) return;
    if (!greeted.current) {
      greeted.current = true;
      setMessages([{ role: 'bot', text: GREETING }]);
    }
    const t = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(t);
  }, [active]);

  async function send(raw: string) {
    const text = (raw || '').trim();
    if (!text || busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setMessages((m) => [
      ...m,
      { role: 'me', text },
      { role: 'bot', text: 'Omen is typing…', typing: true },
    ]);
    setInput('');

    let reply: string;
    try {
      reply = await askMe(text);
    } catch {
      reply = fallback(text);
    }
    reply = (reply || fallback(text)).trim().replace(/^Omen:\s*/i, '');

    setMessages((m) => {
      const next = m.filter((x) => !x.typing);
      return [...next, { role: 'bot', text: reply }];
    });
    busyRef.current = false;
    setBusy(false);
  }

  // send a query seeded from the hero bar
  useEffect(() => {
    if (active && seedQuery) {
      send(seedQuery);
      onSeedConsumed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, seedQuery]);

  return (
    <div className="ai-right">
      <div className="ai-head">
        <div className="who">
          <Image src={omen} alt="Omen" width={36} height={36} />
          <div>
            <div className="n">Omen</div>
            <div className="s">Cyril&apos;s AI assistant</div>
          </div>
        </div>
        <button className="ai-close" onClick={onClose}>
          ← Back to portfolio
        </button>
      </div>

      <div className="ai-msgs" ref={msgsRef}>
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role === 'me' ? 'me' : 'bot'}${m.typing ? ' typing' : ''}`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="ai-suggest">
        {AI_SUGGESTIONS.map((s) => (
          <button key={s.q} onClick={() => send(s.q)} disabled={busy}>
            {s.label}
          </button>
        ))}
      </div>

      <form
        className="ai-form"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message Omen…"
          autoComplete="off"
        />
        <button type="submit" aria-label="Send" disabled={busy}>
          <ArrowRight />
        </button>
      </form>
    </div>
  );
}
