'use client';

import { motion } from 'framer-motion';
import { RiseWords } from '@/components/motion/Reveal';

const rules = ['Pay for your own.', 'Bring a question, not a pitch.', 'Ask before you advise.', 'What’s said over coffee stays there.', 'Follow up within a week.'];

const promises = [
  'Your number stays yours until you say yes.',
  'Nobody pays to reach you.',
  'Every introduction is one you asked for.',
  'Everyone sits at the same level.',
];

export default function Rules() {
  return (
    <section className="bg-espresso text-paper">
      <div className="mx-auto max-w-[1600px] px-4 py-24 sm:px-6 sm:py-36 lg:px-10">
        <h2 className="mt-6 font-display text-[clamp(44px,6.6vw,116px)] font-medium display-tight">
          <RiseWords text="Five rules." /> <span className="text-sky"><RiseWords text="All of them short." delay={0.15} /></span>
        </h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <ol>
            {rules.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                className="group flex items-baseline gap-5 border-b border-paper/15 py-5 sm:gap-8"
              >
                <span className="font-display text-[clamp(20px,2vw,30px)] font-medium text-sky tabular-nums">{i + 1}</span>
                <span className="font-display text-[clamp(28px,3.6vw,60px)] font-medium leading-[1] tracking-[-0.04em] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-3">
                  {r}
                </span>
              </motion.li>
            ))}
          </ol>

          <div className="self-end rounded-none bg-paper p-8 text-espresso sm:p-10">
            <p className="label text-espresso/60">What we promise</p>
            <ul className="mt-6 space-y-5">
              {promises.map((p) => (
                <li key={p} className="flex gap-4 border-b border-espresso/10 pb-5 last:border-0 last:pb-0">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cherry" />
                  <span className="font-display text-[22px] font-medium leading-[1.15] tracking-[-0.02em]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
