import type { Metadata } from 'next';
import OpportunityBoard from '@/components/opportunities/OpportunityBoard';
import RollButton from '@/components/ui/RollButton';
import { OPPORTUNITIES_UPDATED } from '@/data/opportunities';

export const metadata: Metadata = {
  title: 'Opportunities — BYOC',
  description: 'Senior roles, open calls for founders and board seats across the cities where BYOC meets. Every listing links to its source.',
};

export default function OpportunitiesPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-10">
      <span className="label text-espresso/60">Opportunities · Updated {OPPORTUNITIES_UPDATED}</span>
      <h1 className="mt-6 font-display text-[clamp(64px,12vw,220px)] font-medium text-espresso display-tight">What’s moving.</h1>
      <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr]">
        <p className="max-w-[52ch] text-[19px] leading-[1.6] text-espresso/80">
          Senior roles, open calls for founders and board seats across the cities where we meet. We don’t take money to list anything. Every item links to its original source and comes down after its deadline.
        </p>
        <div className="rounded-none bg-espresso p-7 text-paper">
          <p className="font-display text-[24px] font-medium leading-[1.1] tracking-[-0.02em]">Hiring?</p>
          <p className="mt-2 text-[15px] leading-[1.55] text-paper/75">Members post roles for free. They go to people who’ve met you over coffee.</p>
          <div className="mt-5">
            <RollButton href="/join" variant="gold" size="sm">Post a role</RollButton>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <OpportunityBoard showSearch />
      </div>
      <p className="label mt-10 max-w-[80ch] text-espresso/45">
        Listings are gathered from each organisation’s own hiring or programme page. Items marked “verify” were found but should be confirmed on the source before you apply.
      </p>
    </div>
  );
}
