'use client';

import Image from 'next/image';
import { RiseWords } from '@/components/motion/Reveal';
import RollButton from '@/components/ui/RollButton';
import OpportunityBoard from '@/components/opportunities/OpportunityBoard';

export function OpportunitiesPreview() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <h2 className="mt-6 font-display text-[clamp(44px,6.6vw,116px)] font-medium text-espresso display-tight">
              <RiseWords text="What’s moving this month." />
            </h2>
          </div>
          <p className="max-w-[44ch] text-[18px] leading-[1.6] text-espresso/75">
            Senior roles, open calls for founders and board seats in the cities where we meet. We don’t take money to list anything. Every item links to its source and comes down after its deadline.
          </p>
        </div>
        <div className="mt-14">
          <OpportunityBoard limit={5} />
        </div>
        <div className="mt-10">
          <RollButton href="/opportunities" size="lg">See everything that’s open</RollButton>
        </div>
      </div>
    </section>
  );
}

export default function Closing() {
  return (
    <section className="relative overflow-hidden bg-espresso text-paper">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/laugh.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso/80 to-espresso" />
      <div className="relative mx-auto max-w-[1600px] px-4 py-28 sm:px-6 sm:py-44 lg:px-10">
        <h2 className="max-w-[13ch] font-display text-[clamp(52px,8.4vw,150px)] font-medium display-tight">
          <RiseWords text="The hardest coffee to buy is the first one." />
        </h2>
        <p className="mt-8 font-display text-[clamp(24px,2.6vw,42px)] font-medium tracking-[-0.03em] text-sky">After that, someone saves you a seat.</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <RollButton href="/chapters" variant="gold" size="lg">Find your city</RollButton>
          <RollButton href="/join" variant="outline-light" size="lg">Apply to join</RollButton>
        </div>
        <p className="label mt-6 text-paper/50">By application · Free to join · The coffee is on you</p>
      </div>
    </section>
  );
}
