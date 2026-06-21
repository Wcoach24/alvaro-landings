import fs from 'fs';
import path from 'path';
import { LandingData } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');

export function loadAllSlugs(): string[] {
  if (!fs.existsSync(DATA_DIR)) return [];
  return fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
}

export function loadLanding(slug: string): LandingData | null {
  const fp = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(fp)) return null;
  return JSON.parse(fs.readFileSync(fp, 'utf-8')) as LandingData;
}
