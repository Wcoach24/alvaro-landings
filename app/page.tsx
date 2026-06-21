export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '60px 24px',
        fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
        color: '#0E0E0E',
      }}
    >
      <h1 style={{ fontSize: '2.4rem', marginBottom: 18, letterSpacing: '-0.02em' }}>
        Álvaro Zamorano · auto-generated job landings
      </h1>
      <p style={{ fontSize: '1rem', marginBottom: 14, color: '#5F5F5F' }}>
        My agent JobHunter v2 scans Greenhouse, Ashby, and Lever job boards every
        day. When it finds a role that scores ≥ 9 against my profile, it generates
        a dedicated landing in the host company’s design language and submits an
        application. Each page is built in under an hour.
      </p>
      <p style={{ fontSize: '1rem', color: '#5F5F5F' }}>
        If you arrived here without a slug, you probably want{' '}
        <a href="https://alvarozamorano.com">alvarozamorano.com</a> or my{' '}
        <a href="https://linkedin.com/in/alvarozamorano" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>
      <p style={{ marginTop: 28, fontSize: '0.85rem', padding: '14px 18px', background: '#FAFAF8', border: '1px solid #E5E5E5', borderRadius: 6 }}>
        The decision to apply was mine. The build was the agent’s. Every claim on every landing is verifiable —{' '}<a href="https://github.com/Wcoach24" target="_blank" rel="noreferrer">source on GitHub</a>.
      </p>
    </main>
  );
}
