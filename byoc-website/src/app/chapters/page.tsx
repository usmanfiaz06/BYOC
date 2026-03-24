import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GlobalMap from '@/components/GlobalMap';

interface Chapter {
  city: string;
  country: string;
  flag: string;
  region: string;
  meetups: number;
  status: 'active' | 'growing' | 'launching';
  note?: string;
}

const chapters: Chapter[] = [
  { city: 'Islamabad', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 54, status: 'active', note: 'Founding chapter' },
  { city: 'Lahore', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 8, status: 'active' },
  { city: 'Karachi', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 5, status: 'active' },
  { city: 'Gilgit', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 3, status: 'growing' },
  { city: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩', region: 'South Asia', meetups: 3, status: 'growing' },
  { city: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East', meetups: 6, status: 'active' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', region: 'Middle East', meetups: 5, status: 'active' },
  { city: 'Doha', country: 'Qatar', flag: '🇶🇦', region: 'Middle East', meetups: 4, status: 'active' },
  { city: 'London', country: 'UK', flag: '🇬🇧', region: 'Europe', meetups: 6, status: 'active' },
  { city: 'Dublin', country: 'Ireland', flag: '🇮🇪', region: 'Europe', meetups: 4, status: 'active' },
  { city: 'Berlin', country: 'Germany', flag: '🇩🇪', region: 'Europe', meetups: 3, status: 'growing' },
  { city: 'San Francisco', country: 'USA', flag: '🇺🇸', region: 'North America', meetups: 5, status: 'active' },
  { city: 'Dallas', country: 'USA', flag: '🇺🇸', region: 'North America', meetups: 3, status: 'growing' },
  { city: 'Toronto', country: 'Canada', flag: '🇨🇦', region: 'North America', meetups: 3, status: 'growing' },
  { city: 'Kuala Lumpur', country: 'Malaysia', flag: '🇲🇾', region: 'Southeast Asia', meetups: 4, status: 'active' },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', region: 'Southeast Asia', meetups: 3, status: 'active' },
  { city: 'Jakarta', country: 'Indonesia', flag: '🇮🇩', region: 'Southeast Asia', meetups: 2, status: 'growing' },
  { city: 'Dar es Salaam', country: 'Tanzania', flag: '🇹🇿', region: 'Africa', meetups: 2, status: 'active' },
];

const regions = ['South Asia', 'Middle East', 'Europe', 'North America', 'Southeast Asia', 'Africa'];

const statusStyle: Record<string, string> = {
  active: 'text-coffee-dark',
  growing: 'text-accent',
  launching: 'text-muted',
};

export default function ChaptersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Global Presence</p>
              <h1 className="text-[46px] sm:text-[58px] lg:text-[68px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
                18 cities.
                <br />
                <span className="italic">One format.</span>
              </h1>
            </div>
            <div className="lg:pt-12">
              <p className="text-[15px] text-muted leading-[1.8] mb-6">
                Every BYOC chapter operates with the same DNA — intimate gatherings, zero programming, curated rooms. What changes is the city, the coffee, and the particular mix of builders at the table.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { num: '21+', label: 'Countries' },
                  { num: '18', label: 'Chapters' },
                  { num: '140+', label: 'Gatherings' },
                ].map((s) => (
                  <div key={s.label} className="bg-card rounded-2xl p-5 border border-card-border text-center">
                    <div className="text-[28px] font-serif text-coffee-dark tracking-[-0.02em]">{s.num}</div>
                    <div className="text-[10px] text-muted mt-1 tracking-[0.05em] uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters by Region */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {regions.map((region) => {
            const regionChapters = chapters.filter((c) => c.region === region);
            if (regionChapters.length === 0) return null;
            return (
              <div key={region} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-[24px] font-serif text-coffee-dark tracking-[-0.01em]">{region}</h2>
                  <div className="flex-1 h-px bg-card-border" />
                  <span className="text-[11px] text-muted tracking-[0.05em] uppercase">{regionChapters.length} {regionChapters.length === 1 ? 'chapter' : 'chapters'}</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionChapters.map((ch) => (
                    <div key={ch.city} className="bg-background rounded-2xl p-6 border border-card-border hover:border-accent/40 transition-colors group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{ch.flag}</span>
                          <div>
                            <h3 className="text-[15px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em]">{ch.city}</h3>
                            <p className="text-[12px] text-muted">{ch.country}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] tracking-[0.05em] uppercase ${statusStyle[ch.status]}`}>
                          {ch.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-[12px] text-muted">
                        <span>{ch.meetups} gatherings</span>
                        {ch.note && (
                          <span className="text-[10px] px-2.5 py-1 rounded-full border border-card-border text-accent tracking-[0.03em]">
                            {ch.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Map */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Global Footprint</p>
            <h2 className="text-[32px] sm:text-[42px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">Where we gather</h2>
          </div>
          <GlobalMap />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-coffee-dark">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-6">Start a Chapter</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-cream leading-[1.08] tracking-[-0.02em] mb-7">
            Your city isn&apos;t listed yet?
          </h2>
          <p className="text-cream/40 text-[14px] mb-10 leading-[1.75]">
            Bring BYOC to your city. All you need is a good coffee shop, a handful of the right people, and the willingness to create space for real conversation.
          </p>
          <Link href="/request-meetup" className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-cream text-[13px] font-medium rounded-full hover:bg-accent/90 transition-colors tracking-[0.04em] uppercase">
            Request a chapter <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
