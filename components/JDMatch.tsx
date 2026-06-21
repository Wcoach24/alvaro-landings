type Match = { requirement: string; proof: string; metric?: string };

export default function JDMatch({ matches }: { matches: Match[] }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: 14 }}>Your JD → my track record</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {matches.map((m, i) => (
          <div key={i} className="section section--surface" style={{ padding: 18, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 18, alignItems: 'start' }}>
            <div>
              <p className="eyebrow" style={{ color: 'var(--ink-dim)', marginBottom: 6 }}>You need</p>
              <p style={{ fontSize: '0.95rem' }}>{m.requirement}</p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 18 }}>
              <p className="eyebrow" style={{ color: 'var(--ink-dim)', marginBottom: 6 }}>I have</p>
              <p style={{ fontSize: '0.95rem' }}>{m.proof}</p>
              {m.metric && (
                <p className="mono" style={{ marginTop: 8, fontSize: '0.78rem', background: 'var(--accent)', color: 'var(--accent-text)', padding: '3px 10px', borderRadius: 'var(--radius)', display: 'inline-block', fontWeight: 600 }}>
                  {m.metric}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
