import { notFound } from 'next/navigation';
import { loadAllSlugs, loadLanding } from '@/lib/loadData';
import { getBrand } from '@/lib/brandProfiles';
import { brandCss } from '@/lib/brandStyle';

import HeroLive from '@/components/HeroLive';
import Pitch from '@/components/Pitch';
import JDMatch from '@/components/JDMatch';
import LiveAgents from '@/components/LiveAgents';
import CTA from '@/components/CTA';
import Disclosure from '@/components/Disclosure';

export const dynamicParams = false;

export function generateStaticParams() {
  return loadAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = loadLanding(params.slug);
  if (!data) return { title: 'Not found' };
  return {
    title: `${data.role} at ${data.company} — Álvaro Zamorano`,
    description: data.hero_subline,
    openGraph: {
      title: `${data.role} at ${data.company}`,
      description: data.hero_subline,
      type: 'website',
    },
  };
}

export default function LandingPage({ params }: { params: { slug: string } }) {
  const data = loadLanding(params.slug);
  if (!data) notFound();

  const brand = getBrand(data.company);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: brandCss(brand) }} />

      <main style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(20px, 4vw, 48px)' }}>
        <HeroLive
          company={data.company}
          role={data.role}
          hero_headline={data.hero_headline}
          hero_subline={data.hero_subline}
          jd_seen_at={data.jd_seen_at}
          landing_generated_at={data.landing_generated_at}
          build_minutes={data.build_minutes}
          hiring_manager={data.hiring_manager}
        />
        <Pitch pitch_oneliner={data.pitch_oneliner} role={data.role} />
        <JDMatch matches={data.jd_match} />
        <LiveAgents
          show_empresaai={data.show_empresaai}
          show_manolobot={data.show_manolobot}
          empresaai_url={data.empresaai_url}
          manolobot_url={data.manolobot_url}
        />
        <CTA cal_link={data.cal_link} cv_filename={data.cv_filename} company={data.company} />
        <Disclosure
          job_url={data.job_url}
          jd_seen_at={data.jd_seen_at}
          landing_generated_at={data.landing_generated_at}
          build_minutes={data.build_minutes}
          source_repo={data.source_repo}
          generator_version={data.generator_version}
          score={data.score}
          score_breakdown={data.score_breakdown}
        />
        <p style={{ marginTop: 24, fontSize: '0.78rem', color: 'var(--ink-dim)', textAlign: 'center' }}>
          © {new Date().getFullYear()} Álvaro Zamorano · azmglg@gmail.com · +34 636 306 462
        </p>
      </main>
    </>
  );
}
