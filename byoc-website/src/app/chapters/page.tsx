import type { Metadata } from 'next';
import JoinCTA from '@/components/JoinCTA';
import { cities, stats } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Cities: where BYOC meets',
  description: `BYOC meets in ${cities.map((c) => c.name).join(', ')}.`,
  alternates: { canonical: '/chapters' },
};

const regionOrder = ['South Asia', 'Middle East', 'Europe', 'North America', 'Southeast Asia', 'Africa', 'Oceania'];

export default function ChaptersPage() {
  const regions = regionOrder
    .map((r) => ({ region: r, list: cities.filter((c) => c.region === r) }))
    .filter((g) => g.list.length > 0);

  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        <h1 className="font-display text-[clamp(56px,10vw,180px)] font-medium text-ink display-tight">Where the coffee is.</h1>
        <p className="mt-8 max-w-[52ch] text-[19px] leading-[1.6] text-ink/75">
          {stats.gatherings}+ gatherings in {stats.countries} countries since {stats.since}. Every city keeps the same five rules and makes its own regulars.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 pb-24 sm:px-6 lg:px-10">
        {regions.map((g) => (
          <div key={g.region} className="grid gap-4 border-t-2 border-ink py-10 md:grid-cols-[260px_1fr] md:gap-10">
            <h2 className="font-display text-[22px] font-medium tracking-[-0.02em] text-ink/60">{g.region}</h2>
            <p className="font-display text-[clamp(36px,5vw,88px)] font-medium leading-[1.04] tracking-[-0.045em]">
              {g.list.map((c, i) => (
                <span key={c.name}>
                  <span className={c.note ? 'text-cherry' : 'text-ink'}>{c.name}</span>
                  {c.note && <sup className="ml-1 align-super text-[0.28em] font-medium tracking-normal text-cherry">since 2020</sup>}
                  {i < g.list.length - 1 ? <span className="text-ink/25">, </span> : null}
                </span>
              ))}
            </p>
          </div>
        ))}
        <p className="border-t border-ink/20 pt-8 font-display text-[clamp(22px,2vw,32px)] font-medium tracking-[-0.03em] text-ink">
          Your city isn’t on the list yet? Tell us where you are when you request an invite.
        </p>
      </section>

      <JoinCTA />
    </div>
  );
}
