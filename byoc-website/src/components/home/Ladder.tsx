'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, interpolate } from 'framer-motion';
import { RiseWords, FadeUp } from '@/components/motion/Reveal';

const rungs = [
  { title: 'First coffee', body: 'You’re a stranger who paid for your own cup.' },
  { title: 'Third coffee', body: 'Someone saves you a seat.' },
  { title: 'Tenth coffee', body: 'You’re the one making the introductions.' },
  { title: 'A year in', body: 'Someone at that table changed your plans.' },
];

export default function Ladder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const line = useTransform(scrollYProgress, (v: number) => interpolate([0, 1], ['0%', '100%'])(v));

  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-36 lg:px-10">
        <h2 className="mt-6 max-w-[15ch] font-display text-[clamp(44px,6.6vw,116px)] font-medium text-espresso display-tight">
          <RiseWords text="Friendship takes hours." />{' '}
          <span className="text-gold">
            <RiseWords text="We give you the hours." delay={0.2} />
          </span>
        </h2>
        <FadeUp className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <div />
          <p className="max-w-[52ch] text-[18px] leading-[1.6] text-espresso/80 sm:text-[20px]">
            Research from the University of Kansas suggests it takes roughly fifty hours together to turn an acquaintance into a friend. Nobody gets there in one evening, and we don’t try to. We just make it easy to come back.
          </p>
        </FadeUp>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-0 right-0 top-[52px] hidden h-[2px] bg-espresso/15 md:block">
            <motion.div style={{ width: line }} className="h-full bg-cherry" />
          </div>
          <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
            {rungs.map((r, i) => (
              <li key={r.title} className="relative">
                <div className="relative z-10 inline-flex bg-paper pr-4">
                  <span className="font-cond text-[clamp(72px,7vw,120px)] text-ink">0{i + 1}</span>
                </div>
                <h3 className="mt-2 font-display text-[clamp(30px,3vw,48px)] font-medium leading-none tracking-[-0.04em] text-espresso">{r.title}</h3>
                <p className="mt-3 max-w-[26ch] text-[17px] leading-[1.5] text-espresso/70">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
