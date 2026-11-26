import type { Metadata } from 'next';
import JoinCTA from '@/components/JoinCTA';
import RollButton from '@/components/ui/RollButton';
import { getNextMeetup } from '@/data/meetups';
import { cities, stats } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Gatherings: the next coffee near you',
  description: 'Upcoming BYOC gatherings. One hour in a café with founders, executives and operators. Everyone buys their own cup. Invite-only.',
  alternates: { canonical: '/events' },
};

export const revalidate = 3600;

export default async function EventsPage() {
  const next = await getNextMeetup();

  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        <h1 className="font-display text-[clamp(56px,10vw,180px)] font-medium text-ink display-tight">The next coffee.</h1>
        <p className="mt-8 max-w-[52ch] text-[19px] leading-[1.6] text-ink/75">
          One hour, a small group, a café. Everyone buys their own cup. Gatherings are invite-only, and members hear first when one is planned in their city.
        </p>
      </section>

      {/* Next gathering */}
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 border-y-2 border-ink py-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          {next ? (
            <>
              <div>
                <p className="label text-ink/60">Next coffee · {next.proximity}</p>
                <p className="mt-4 font-display text-[clamp(48px,7vw,120px)] font-medium text-ink display-tight">{next.city}</p>
                <p className="mt-4 font-display text-[clamp(22px,2.2vw,34px)] font-medium tracking-[-0.03em] text-ink/80">
                  {next.weekday} {next.shortDate} · {next.localTime} {next.tzLabel}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {next.url && (
                  <RollButton href={next.url} external size="lg">
                    Save a seat
                  </RollButton>
                )}
                <RollButton href="/join" variant="outline" size="lg">
                  Request an invite
                </RollButton>
              </div>
            </>
          ) : (
            <>
              <p className="font-display text-[clamp(36px,5vw,80px)] font-medium text-ink display-tight">The next coffee is being planned.</p>
              <div className="md:justify-self-end">
                <RollButton href="/join" size="lg">Request an invite</RollButton>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Calendar */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10">
        <h2 className="font-display text-[clamp(32px,4vw,64px)] font-medium text-ink display-tight">Every upcoming gathering.</h2>
        <p className="mt-4 max-w-[52ch] text-[17px] leading-[1.6] text-ink/70">Gatherings are listed on our Luma calendar. Pick one to see the details and save a seat.</p>
        <div className="luma-embed-container mt-10 overflow-hidden border border-ink/15 bg-paper">
          <iframe
            src="https://luma.com/embed/calendar/cal-x5mKvnTRHwbEeV1/events"
            title="BYOC upcoming gatherings on Luma"
            width="100%"
            height="640"
            frameBorder="0"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </div>
      </section>

      {/* So far */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
          <div>
            <h2 className="font-display text-[clamp(44px,6vw,104px)] font-medium display-tight">
              {stats.gatherings}+ gatherings since {stats.since}.
            </h2>
            <p className="mt-6 max-w-[40ch] text-[18px] leading-[1.6] text-paper/70">
              It started with one coffee in Islamabad. It now happens in {stats.countries} countries.
            </p>
          </div>
          <p className="font-display text-[clamp(28px,3.4vw,56px)] font-medium leading-[1.08] tracking-[-0.04em]">
            {cities.map((c, i) => (
              <span key={c.name}>
                <span className={i === 0 ? 'text-sky' : 'text-paper'}>{c.name}</span>
                {i < cities.length - 1 ? <span className="text-paper/30">, </span> : '.'}
              </span>
            ))}
          </p>
        </div>
      </section>

      <JoinCTA />
    </div>
  );
}
