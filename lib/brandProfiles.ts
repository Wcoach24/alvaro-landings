// brandProfiles.ts — per-company visual identity presets.
//
// Each landing renders in the host company's design language so the page feels
// native, not like a generic template. Curated from real inspection of each
// company's site (CSS variables, theme-color, font stacks) on 2026-06-21.
//
// Add a new company by inspecting their site and filling a BrandProfile.

export type BrandProfile = {
  slug: string;
  name: string;
  bg: string;
  ink: string;
  ink_dim: string;
  surface: string;
  border: string;
  accent: string;
  accent_text: string;
  hero_bg: string;
  hero_text: string;
  radius: string;
  shadow: string;
  heading_font: string;
  body_font: string;
  mono_font: string;
  google_fonts_url: string;
  heading_weight: number;
  heading_tracking: string;
  tone: string;
};

const INTER = 'Inter';
const INTER_TIGHT = 'Inter Tight';
const GEIST = 'Geist';
const GEIST_MONO = 'Geist Mono';
const JET_MONO = 'JetBrains Mono';
const LORA = 'Lora';

const URL = {
  inter: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap',
  inter_lora: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,500&family=JetBrains+Mono:wght@400;700&display=swap',
  geist: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;700&display=swap',
  inter_tight: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;700&display=swap',
};

export const BRAND_PROFILES: Record<string, BrandProfile> = {
  anthropic: {
    slug: 'anthropic', name: 'Anthropic',
    bg: '#F5F0E8', ink: '#1F1A17', ink_dim: '#605852',
    surface: '#FFFDF8', border: '#E0D7CB', accent: '#CC785C', accent_text: '#FFFFFF',
    hero_bg: '#1F1A17', hero_text: '#F5F0E8', radius: '8px', shadow: '0 1px 0 rgba(0,0,0,0.04)',
    heading_font: LORA, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_lora,
    heading_weight: 500, heading_tracking: '-0.01em',
    tone: 'thoughtful, careful, no exclamation marks',
  },
  openai: {
    slug: 'openai', name: 'OpenAI',
    bg: '#FFFFFF', ink: '#0E0E0E', ink_dim: '#5F5F5F',
    surface: '#FAFAFA', border: '#EBEBEB', accent: '#10A37F', accent_text: '#FFFFFF',
    hero_bg: '#0E0E0E', hero_text: '#FFFFFF', radius: '6px', shadow: 'none',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 700, heading_tracking: '-0.02em',
    tone: 'precise, technical, no metaphors',
  },
  cursor: {
    slug: 'cursor', name: 'Cursor',
    bg: '#F7F7F4', ink: '#14120B', ink_dim: '#5C5950',
    surface: '#FFFFFF', border: 'rgba(38, 37, 30, 0.10)', accent: '#14120B', accent_text: '#F7F7F4',
    hero_bg: '#14120B', hero_text: '#F7F7F4', radius: '12px', shadow: '0 1px 2px rgba(0,0,0,0.04)',
    heading_font: GEIST, body_font: GEIST, mono_font: GEIST_MONO,
    google_fonts_url: URL.geist,
    heading_weight: 600, heading_tracking: '-0.02em',
    tone: 'builder peer-to-peer, ship-first',
  },
  mistral: {
    slug: 'mistral', name: 'Mistral AI',
    bg: '#FFFDF7', ink: '#0E0E0E', ink_dim: '#555555',
    surface: '#FFFFFF', border: '#0E0E0E', accent: '#FFAF01', accent_text: '#0E0E0E',
    hero_bg: '#FF5229', hero_text: '#FFFFFF', radius: '4px', shadow: '0 0 0 1px #0E0E0E',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 700, heading_tracking: '-0.025em',
    tone: 'European, bold, energetic',
  },
  vercel: {
    slug: 'vercel', name: 'Vercel',
    bg: '#FAFAFA', ink: '#000000', ink_dim: '#666666',
    surface: '#FFFFFF', border: '#EAEAEA', accent: '#000000', accent_text: '#FFFFFF',
    hero_bg: '#000000', hero_text: '#FFFFFF', radius: '6px', shadow: 'none',
    heading_font: GEIST, body_font: GEIST, mono_font: GEIST_MONO,
    google_fonts_url: URL.geist,
    heading_weight: 600, heading_tracking: '-0.02em',
    tone: 'minimal, opinionated, ship-fast',
  },
  linear: {
    slug: 'linear', name: 'Linear',
    bg: '#08090A', ink: '#F7F8F8', ink_dim: '#8A8F98',
    surface: '#0F1011', border: '#1F2023', accent: '#5E6AD2', accent_text: '#FFFFFF',
    hero_bg: '#5E6AD2', hero_text: '#FFFFFF', radius: '8px', shadow: '0 1px 0 rgba(255,255,255,0.04)',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 600, heading_tracking: '-0.02em',
    tone: 'sharp, fast, no fluff',
  },
  elevenlabs: {
    slug: 'elevenlabs', name: 'ElevenLabs',
    bg: '#FFFFFF', ink: '#000000', ink_dim: '#666666',
    surface: '#FAFAFA', border: '#E5E5E5', accent: '#000000', accent_text: '#FFFFFF',
    hero_bg: '#000000', hero_text: '#FFFFFF', radius: '8px', shadow: 'none',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 700, heading_tracking: '-0.03em',
    tone: 'confident, multilingual, voice-forward',
  },
  perplexity: {
    slug: 'perplexity', name: 'Perplexity',
    bg: '#FBFBFA', ink: '#1E1E1E', ink_dim: '#5F5F5F',
    surface: '#FFFFFF', border: '#E5E5E2', accent: '#20B8CD', accent_text: '#0E2A30',
    hero_bg: '#091717', hero_text: '#FFFFFF', radius: '8px', shadow: '0 1px 2px rgba(0,0,0,0.04)',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 600, heading_tracking: '-0.02em',
    tone: 'curious, source-grounded',
  },
  xai: {
    slug: 'xai', name: 'xAI',
    bg: '#000000', ink: '#FFFFFF', ink_dim: '#8C8C8C',
    surface: '#0A0A0A', border: '#1A1A1A', accent: '#FFFFFF', accent_text: '#000000',
    hero_bg: '#000000', hero_text: '#FFFFFF', radius: '0', shadow: 'none',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 800, heading_tracking: '-0.03em',
    tone: 'irreverent, first-principles, no marketing',
  },
  cohere: {
    slug: 'cohere', name: 'Cohere',
    bg: '#FFFFFF', ink: '#000000', ink_dim: '#5F5F5F',
    surface: '#FAFAFA', border: '#EBEBEB', accent: '#FF7759', accent_text: '#FFFFFF',
    hero_bg: '#FFFFFF', hero_text: '#000000', radius: '8px', shadow: '0 1px 2px rgba(0,0,0,0.04)',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 600, heading_tracking: '-0.02em',
    tone: 'enterprise-friendly, secure, reliable',
  },
  runwayml: {
    slug: 'runwayml', name: 'Runway',
    bg: '#0A0A0A', ink: '#FFFFFF', ink_dim: '#9A9A9A',
    surface: '#141414', border: '#2A2A2A', accent: '#FFFFFF', accent_text: '#0A0A0A',
    hero_bg: '#000000', hero_text: '#FFFFFF', radius: '4px', shadow: 'none',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 700, heading_tracking: '-0.02em',
    tone: 'cinematic, creative-first',
  },
  __default__: {
    slug: '__default__', name: 'Default',
    bg: '#FAFAF8', ink: '#0E0E0E', ink_dim: '#666666',
    surface: '#FFFFFF', border: '#E5E5E5', accent: '#0E0E0E', accent_text: '#FFFFFF',
    hero_bg: '#0E0E0E', hero_text: '#FFFFFF', radius: '6px', shadow: '0 1px 2px rgba(0,0,0,0.04)',
    heading_font: INTER_TIGHT, body_font: INTER, mono_font: JET_MONO,
    google_fonts_url: URL.inter_tight,
    heading_weight: 600, heading_tracking: '-0.02em',
    tone: 'neutral, professional',
  },
};

export function getBrand(companySlugOrName: string): BrandProfile {
  if (!companySlugOrName) return BRAND_PROFILES.__default__;
  const key = companySlugOrName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
  if (BRAND_PROFILES[key]) return BRAND_PROFILES[key];
  const aliases: Record<string, string> = {
    anysphere: 'cursor',
    mistralai: 'mistral',
    runway: 'runwayml',
  };
  if (aliases[key]) return BRAND_PROFILES[aliases[key]];
  for (const k of Object.keys(BRAND_PROFILES)) {
    if (k === '__default__') continue;
    if (key.includes(k) || k.includes(key)) return BRAND_PROFILES[k];
  }
  return BRAND_PROFILES.__default__;
}
