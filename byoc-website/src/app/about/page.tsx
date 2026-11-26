import type { Metadata } from 'next';
import Image from 'next/image';
import JoinCTA from '@/components/JoinCTA';
import { stats } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Manifesto: why we meet',
  description: `Why BYOC exists: people gather around a shared problem. Started in Islamabad in ${stats.since} as a coffee during lockdown; now ${stats.gatherings}+ gatherings in ${stats.countries} countries.`,
  alternates: { canonical: '/about' },
};

const principles = [
  {
    t: 'The problem comes first.',
    b: 'Nobody joins a community. People join each other, around something they couldn’t carry alone. Ours was a lockdown. Yours might be a hire, a raise, a move, or a decision you can’t take to your board. We don’t invent reasons to meet. Our members bring them.',
  },
  { t: 'Paying is the point.', b: 'Four dollars is the cheapest independence there is. It means no one owns the room, and no one in it owes anyone anything.' },
  { t: 'Small on purpose.', b: 'You can’t be honest with two hundred people. You can be honest with eight. Every gathering stays small enough that each person is heard.' },
  { t: 'Questions over answers.', b: 'We put questions in the middle of the group and let the room answer.' },
  { t: 'Regulars, not members.', b: 'A membership is something you have. Being a regular is something you do. We care about the second one.' },
  { t: 'Invite-only, by design.', b: 'Every person at the table was asked to be there. That is how the conversations stay honest and the rooms stay small.' },
];

const forList = ['People building something: a company, a team, a fund, a policy, or a life in a new city.', 'People who listen as hard as they talk.', 'People who’d rather be useful than impressive.'];
const notList = ['Collecting cards.', 'Pitching a room.', 'Being seen.'];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-10">
        <h1 className="font-display text-[clamp(56px,10vw,180px)] font-medium text-ink display-tight">Why we meet.</h1>
        <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.6] text-ink/75">
          What we’ve learned in {stats.gatherings}+ gatherings since {stats.since}, and what we borrowed from people who studied it longer.
        </p>
      </section>

      <section className="bg-cherry text-paper">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <h2 className="font-display text-[clamp(40px,5.6vw,96px)] font-medium display-tight">It started because we were bored.</h2>
            <p className="mt-8 max-w-[46ch] text-[18px] leading-[1.6] text-paper/90">
              In 2020 the world went indoors. A few of us in Islamabad missed sitting across from someone, talking until the coffee went cold. So we did. Each of us paid for our own cup. We met again the next week. Other people heard. It now happens in {stats.countries} countries.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image src="/images/circle.jpg" alt="A small BYOC group talking around a café table" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-32 lg:px-10">
        <ol className="border-t-2 border-ink">
          {principles.map((p, i) => (
            <li key={p.t} className="grid gap-3 border-b border-ink/20 py-8 md:grid-cols-[80px_1fr_1.2fr] md:gap-8">
              <span className="font-display text-[22px] font-medium text-cherry tabular-nums">{i + 1}</span>
              <h2 className="font-display text-[clamp(28px,3.2vw,52px)] font-medium leading-[1] tracking-[-0.04em] text-ink">{p.t}</h2>
              <p className="max-w-[52ch] text-[18px] leading-[1.6] text-ink/75">{p.b}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 sm:px-6 sm:pb-32 md:grid-cols-2 lg:px-10">
        <div className="border-t-2 border-ink pt-8">
          <h2 className="font-display text-[clamp(32px,3.6vw,60px)] font-medium tracking-[-0.04em] text-ink">Who this is for</h2>
          <ul className="mt-6 space-y-4">
            {forList.map((t) => (
              <li key={t} className="flex gap-4 text-[19px] leading-[1.5] text-ink/85">
                <span className="mt-3 h-2 w-2 shrink-0 bg-cherry" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-2 border-ink pt-8">
          <h2 className="font-display text-[clamp(32px,3.6vw,60px)] font-medium tracking-[-0.04em] text-ink">Who it isn’t for</h2>
          <ul className="mt-6 space-y-4">
            {notList.map((t) => (
              <li key={t} className="flex gap-4 text-[19px] leading-[1.5] text-ink/85">
                <span className="mt-3 h-2 w-2 shrink-0 bg-ink/30" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JoinCTA />
    </div>
  );
}
