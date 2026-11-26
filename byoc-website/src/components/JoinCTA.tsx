import RollButton from '@/components/ui/RollButton';

/** The one call to action used across pages: join the community. */
export default function JoinCTA({ title = 'The hardest coffee to buy is the first one.', line = 'After that, someone saves you a seat.' }: { title?: string; line?: string }) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
        <h2 className="max-w-[14ch] font-display text-[clamp(44px,7vw,124px)] font-medium display-tight">{title}</h2>
        <p className="mt-6 font-display text-[clamp(22px,2.2vw,36px)] font-medium tracking-[-0.03em] text-sky">{line}</p>
        <div className="mt-10">
          <RollButton href="/join" variant="gold" size="lg">Join the community</RollButton>
        </div>
        <p className="label mt-5 text-paper/50">By application · Free to join · The coffee is on you</p>
      </div>
    </section>
  );
}
