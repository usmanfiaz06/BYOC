'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { RiseWords, FadeUp } from '@/components/motion/Reveal';

function Year({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [v, setV] = useState(1600);
  useEffect(() => {
    if (!inView) return;
    const c = animate(1600, to, { duration: 1.6, ease: [0.2, 0.8, 0.2, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {v}
    </span>
  );
}

const items = [
  { year: 1688, place: 'Tower Street, London', body: 'Merchants traded shipping news over coffee at Edward Lloyd’s.', became: 'It became Lloyd’s of London.' },
  { year: 1698, place: 'Exchange Alley, London', body: 'Brokers gathered at Jonathan’s Coffee House to swap prices.', became: 'It became the London Stock Exchange.' },
];

export default function Precedent() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-36 lg:px-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-display text-[clamp(44px,6.6vw,116px)] font-medium text-espresso display-tight">
          <RiseWords text="This has worked before." />
        </h2>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-none bg-espresso/15 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.year} className="group bg-bg p-8 transition-colors duration-500 hover:bg-cherry hover:text-paper sm:p-12">
            <p className="font-display text-[clamp(72px,11vw,200px)] font-medium leading-[0.8] tracking-[-0.06em] text-espresso group-hover:text-paper">
              <Year to={it.year} />
            </p>
            <p className="label mt-8 text-espresso/60 group-hover:text-paper/80">{it.place}</p>
            <p className="mt-4 max-w-[34ch] text-[19px] leading-[1.5] text-espresso/80 group-hover:text-paper/90">{it.body}</p>
            <p className="mt-2 font-display text-[clamp(22px,2vw,32px)] font-medium leading-[1.1] tracking-[-0.03em] text-espresso group-hover:text-paper">{it.became}</p>
          </div>
        ))}
      </div>

      <FadeUp className="mt-14 grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <div />
        <p className="font-display text-[clamp(26px,2.8vw,46px)] font-medium leading-[1.1] tracking-[-0.03em] text-espresso">
          People called these places penny universities: a cup of coffee bought you a seat in the conversation.{' '}
          <span className="text-cherry">We kept the price of entry. We opened the door wider.</span>
        </p>
      </FadeUp>
    </section>
  );
}
