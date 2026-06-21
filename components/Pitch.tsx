type Props = { pitch_oneliner: string; role: string };
export default function Pitch({ pitch_oneliner, role }: Props) {
  return (
    <section className="section section--surface" style={{ marginBottom: 28 }}>
      <p className="eyebrow" style={{ color: 'var(--ink-dim)', marginBottom: 8 }}>What I'd ship in week 1 as your {role}</p>
      <p style={{ fontSize: '1.25rem', lineHeight: 1.45, fontWeight: 500 }}>{pitch_oneliner}</p>
    </section>
  );
}
