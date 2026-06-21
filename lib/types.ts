export type LandingData = {
  slug: string;
  company: string;
  role: string;
  job_url: string;
  job_archetype: string;
  location: string;
  hiring_manager?: string;
  jd_seen_at: string;
  landing_generated_at: string;
  build_minutes: number;
  score: number;
  score_breakdown: { label: string; points: number }[];
  hero_headline: string;
  hero_subline: string;
  pitch_oneliner: string;
  jd_match: { requirement: string; proof: string; metric?: string }[];
  empresaai_url?: string;
  manolobot_url?: string;
  show_empresaai: boolean;
  show_manolobot: boolean;
  cal_link?: string;
  cv_filename: string;        // legacy: filename under /public/cv/
  cv_url?: string;            // preferred: absolute URL (e.g. existing CV hosted elsewhere)
  source_repo?: string;
  generator_version: string;
};

export function buildMinutes(jd_seen: string, landing_at: string): number {
  const a = new Date(jd_seen).getTime();
  const b = new Date(landing_at).getTime();
  return Math.max(1, Math.round((b - a) / 60000));
}
