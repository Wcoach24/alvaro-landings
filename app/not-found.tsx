export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: 540,
        margin: '0 auto',
        padding: '120px 24px',
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#0E0E0E',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: 14, letterSpacing: '-0.04em' }}>
        404
      </h1>
      <p style={{ fontSize: '1rem', marginBottom: 20, color: '#5F5F5F' }}>
        No landing for this slug yet. My agent only generates pages for roles it
        scores at ≥ 9.
      </p>
      <a
        href="https://alvarozamorano.com"
        style={{
          display: 'inline-block',
          padding: '12px 20px',
          background: '#0E0E0E',
          color: '#FFF',
          textDecoration: 'none',
          borderRadius: 6,
          fontWeight: 600,
        }}
      >
        alvarozamorano.com →
      </a>
    </main>
  );
}
