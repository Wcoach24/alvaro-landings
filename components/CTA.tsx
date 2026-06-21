type Props = { cal_link?: string; cv_filename: string; company: string };

export default function CTA({ cal_link, cv_filename, company }: Props) {
  return (
    <section className="section section--hero" style={{ marginBottom: 28, padding: 28 }}>
      <p className="eyebrow" style={{ marginBottom: 10, opacity: 0.75 }}>If this lands · two CTAs</p>
      <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>20 minutes is all I need to know if {company} is the right fit.</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <a href={cal_link ?? `mailto:azmglg@gmail.com?subject=Reply%20to%20auto-landing%20-%20${encodeURIComponent(company)}`} target={cal_link ? '_blank' : undefined} rel="noreferrer" className="btn btn--primary">
          {cal_link ? 'Book 20-min slot →' : 'Email me back →'}
        </a>
        <a href={`/cv/${cv_filename}`} download className="btn btn--secondary">Download CV (PDF)</a>
        <a href="https://github.com/Wcoach24" target="_blank" rel="noreferrer" className="btn btn--ghost">See the code</a>
      </div>
    </section>
  );
}
