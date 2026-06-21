import { BrandProfile } from './brandProfiles';

export function brandCss(b: BrandProfile): string {
  return `
@import url('${b.google_fonts_url}');
:root {
  --bg: ${b.bg};
  --ink: ${b.ink};
  --ink-dim: ${b.ink_dim};
  --surface: ${b.surface};
  --border: ${b.border};
  --accent: ${b.accent};
  --accent-text: ${b.accent_text};
  --hero-bg: ${b.hero_bg};
  --hero-text: ${b.hero_text};
  --radius: ${b.radius};
  --shadow: ${b.shadow};
  --font-heading: '${b.heading_font}', 'Inter Tight', -apple-system, system-ui, sans-serif;
  --font-body: '${b.body_font}', -apple-system, system-ui, sans-serif;
  --font-mono: '${b.mono_font}', 'JetBrains Mono', ui-monospace, Menlo, monospace;
  --heading-weight: ${b.heading_weight};
  --heading-tracking: ${b.heading_tracking};
}
body { background: var(--bg); color: var(--ink); font-family: var(--font-body); }
h1, h2, h3, h4 { font-family: var(--font-heading); font-weight: var(--heading-weight); letter-spacing: var(--heading-tracking); line-height: 1.1; margin: 0; }
a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
a:hover { opacity: 0.75; }
code, .mono { font-family: var(--font-mono); }
::selection { background: var(--accent); color: var(--accent-text); }
.section { padding: 28px; border-radius: var(--radius); }
.section--surface { background: var(--surface); border: 1px solid var(--border); }
.section--hero    { background: var(--hero-bg); color: var(--hero-text); }
.eyebrow { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.7; }
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px; border-radius: var(--radius); font-weight: 600; font-size: 0.95rem; text-decoration: none; border: 1px solid var(--border); transition: transform 80ms ease, background 80ms ease, color 80ms ease; }
.btn:hover { transform: translateY(-1px); opacity: 1; }
.btn--primary { background: var(--accent); color: var(--accent-text); border-color: var(--accent); }
.btn--secondary { background: var(--surface); color: var(--ink); }
.btn--ghost { background: transparent; color: var(--hero-text); border-color: rgba(255,255,255,0.3); }
`;
}
