'use client';

import { motion } from 'framer-motion';
import { RiseWords, ScrubText } from '@/components/motion/Reveal';

const mirrors = [
  { who: 'The founder', rest: 'who can’t tell the team they’re worried.' },
  { who: 'The executive', rest: 'who has run out of people to think out loud with.' },
  { who: 'The newcomer', rest: 'with ambition and no phone numbers.' },
  { who: 'The operator', rest: 'about to cross a border for the first time.' },
];

export default function Thesis() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-36 lg:px-10">
      <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(44px,7.2vw,124px)] font-medium text-espresso display-tight">
        <RiseWords text="You can’t build a community." />
        <br />
        <span className="text-gold">
          <RiseWords text="You can only notice one." delay={0.25} />
        </span>
      </h2>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div />
        <ScrubText
          className="font-display text-[clamp(24px,2.7vw,44px)] font-medium leading-[1.18] tracking-[-0.025em] text-espresso"
          text="Communities don’t start with a logo or a launch. They start with a problem too heavy for one person and too common to belong to anyone alone. In 2020 that problem was isolation, and everyone had it. Most people still do. These days it just wears a suit."
        />
      </div>

      <ul className="mt-24 border-t border-espresso">
        {mirrors.map((m, i) => (
          <motion.li
            key={m.who}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.08 }}
            className="group relative overflow-hidden border-b border-espresso"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-espresso transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" />
            <div className="relative flex flex-col gap-1 py-6 transition-colors duration-500 group-hover:text-paper sm:flex-row sm:items-baseline sm:gap-6 sm:py-8">
              <span className="label w-10 shrink-0 text-gold">0{i + 1}</span>
              <span className="font-display text-[clamp(28px,3.8vw,64px)] font-medium leading-[1] tracking-[-0.04em]">{m.who}</span>
              <span className="text-[clamp(18px,1.8vw,28px)] leading-[1.25] tracking-[-0.01em] text-espresso/70 transition-colors duration-500 group-hover:text-paper/80">
                {m.rest}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <p className="max-w-[24ch] font-display text-[clamp(26px,3vw,48px)] font-medium leading-[1] tracking-[-0.035em] text-espresso">
          If you saw yourself in one of those, you already know why we meet.
        </p>
        <p className="label max-w-[40ch] text-espresso/50">
          Half of CEOs report feeling lonely in the role. — RHR International, in Harvard Business Review, 2012
        </p>
      </div>
    </section>
  );
}
