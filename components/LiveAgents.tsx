'use client';
import { useEffect, useState } from 'react';

type Props = {
  show_empresaai: boolean;
  show_manolobot: boolean;
  empresaai_url?: string;
  manolobot_url?: string;
};

type Stat = { label: string; value: string | number };

export default function LiveAgents({
  show_empresaai,
  show_manolobot,
  empresaai_url,
  manolobot_url,
}: Props) {
  const [empresaai, setEmpresaai] = useState<Stat[] | null>(null);
  const [manolobot, setManolobot] = useState<Stat[] | null>(null);
  const [loadedAt, setLoadedAt] = useState<string>('');

  useEffect(() => {
    setLoadedAt(new Date().toLocaleTimeString());
    if (show_empresaai) {
      const fallback = [
        { label: 'Active agents', value: 7 },
        { label: 'Hours saved/week', value: 40 },
        { label: 'Uptime', value: '24/7' },
      ];
      if (empresaai_url) {
        fetch(empresaai_url).then((r) => r.json()).then((j) => setEmpresaai([
          { label: 'Active agents', value: j.agents ?? 7 },
          { label: 'Tasks today', value: j.tasks_today ?? '—' },
          { label: 'Hours saved/week', value: j.hours_saved ?? 40 },
        ])).catch(() => setEmpresaai(fallback));
      } else setEmpresaai(fallback);
    }
    if (show_manolobot) {
      const fallback = [
        { label: 'Apps live', value: 19 },
        { label: 'Apps per day', value: 1 },
        { label: 'Public at', value: 'manoloelrobot.com' },
      ];
      if (manolobot_url) {
        fetch(manolobot_url).then((r) => r.json()).then((j) => setManolobot([
          { label: 'Apps live', value: j.apps_live ?? 19 },
          { label: 'Ideas in queue', value: j.queue ?? 12 },
          { label: 'Apps per day', value: 1 },
        ])).catch(() => setManolobot(fallback));
      } else setManolobot(fallback);
    }
  }, [show_empresaai, show_manolobot, empresaai_url, manolobot_url]);

  if (!show_empresaai && !show_manolobot) return null;

  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: 14 }}>Running right now</h2>
      <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {show_empresaai && (
          <AgentCard title="empresaAI" blurb="My 7-agent autonomous operations system on a dedicated Mac Mini." stats={empresaai} link="https://github.com/Wcoach24" />
        )}
        {show_manolobot && (
          <AgentCard title="ManoloBot" blurb="Public robot that ships one Next.js app per day from follower ideas." stats={manolobot} link="https://manoloelrobot.com" />
        )}
      </div>
      <p className="mono" style={{ marginTop: 10, fontSize: '0.72rem', color: 'var(--ink-dim)' }}>
        client-side fetch · loaded {loadedAt || '—'}
      </p>
    </section>
  );
}

function AgentCard({ title, blurb, stats, link }: { title: string; blurb: string; stats: Stat[] | null; link: string }) {
  return (
    <div className="section section--surface" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }} />
        <h3 style={{ fontSize: '1.05rem' }}>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer" className="mono" style={{ fontSize: '0.72rem', marginLeft: 'auto' }}>live ↗</a>
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--ink-dim)' }}>{blurb}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 'auto' }}>
        {(stats ?? []).map((s, i) => (
          <div key={i}>
            <div className="mono" style={{ fontSize: '0.68rem', color: 'var(--ink-dim)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{s.value}</div>
          </div>
        ))}
        {!stats && (<div className="mono" style={{ fontSize: '0.78rem', color: 'var(--ink-dim)' }}>loading…</div>)}
      </div>
    </div>
  );
}
