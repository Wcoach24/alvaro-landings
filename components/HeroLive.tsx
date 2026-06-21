'use client';
import { useEffect, useState } from 'react';

type Props = {
  company: string;
  role: string;
  hero_headline: string;
  hero_subline: string;
  jd_seen_at: string;
  landing_generated_at: string;
  build_minutes: number;
  hiring_manager?: string;
};

function diff(now: number, ts: string): string {
  const ms = now - new Date(ts).getTime();
  if (ms < 0) return 'just now';
  const min = Math.floor(ms / 60000);
  if (min < 60) return `${min} min ago`;
  const hours = Math.floor(min / 60);
  if (hours < 24) return `${hours}h ${min % 60}m ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function HeroLive(p: Props) {
  const [now, setNow] = useState<number>(() => new Date(p.landing_generated_at).getTime());

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section section--hero" style={{ marginBottom: 32 }}>
      <p className="eyebrow" style={{ marginBottom: 12 }}>Built by JobHunter · for {p.company}</p>
      <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', marginBottom: 16, maxWidth: '22ch' }}>{p.hero_headline}</h1>
      <p style={{ fontSize: '1.05rem', marginBottom: 22, maxWidth: 620, opacity: 0.92 }}>
        {p.hiring_manager ? `Hi ${p.hiring_manager}, ` : ''}{p.hero_subline}
      </p>
      <div className="mono" style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 14, fontSize: '0.78rem', padding: '10px 14px', borderRadius: 'var(--radius)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}>
        <span>JD scored {diff(now, p.jd_seen_at)}</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>Built in {p.build_minutes} min</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>Page age {diff(now, p.landing_generated_at)}</span>
      </div>
    </section>
  );
}
