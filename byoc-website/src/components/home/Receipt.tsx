'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, interpolate } from 'framer-motion';
import { RiseWords, FadeUp } from '@/components/motion/Reveal';

const rows: [string, string][] = [
  ['1 × Flat white', '4.00'],
  ['1 × Honest question', '0.00'],
  ['1 × Answer from someone who’s been there', '0.00'],
  ['Introductions you said yes to', '0.00'],
];

export default function Receipt() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'center 45%'] });
  const printed = useTransform(scrollYProgress, (v: number) => interpolate([0, 1], ['-100%', '0%'])(v));
  const stamp = useTransform(scrollYProgress, (v: number) => interpolate([0.85, 1], [2.4, 1])(v));
  const stampOpacity = useTransform(scrollYProgress, (v: number) => interpolate([0.85, 0.95], [0, 1])(v));

  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-4 py-16 sm:px-6 sm:py-36 lg:grid-cols-[1.25fr_1fr] lg:px-10">
        <div>
          <h2 className="mt-6 font-display text-[clamp(44px,6.6vw,116px)] font-medium text-espresso display-tight">
            <RiseWords text="Four dollars buys a room where nobody is selling." />
          </h2>
          <FadeUp className="mt-10 max-w-[48ch] space-y-5 text-[18px] leading-[1.6] text-espresso/80 sm:text-[20px]">
            <p>
              Everyone pays for their own cup, so nobody owes anyone anything. The founder and the minister wait in the same queue, and both of them pay.
            </p>
            <p>It’s a small cost, and that’s the point. People who pay their own way arrive meaning to be there.</p>
          </FadeUp>
        </div>

        {/* Printer + receipt */}
        <div ref={ref} className="relative mx-auto hidden w-full max-w-[420px] sm:block">
          <div className="relative z-10 h-6 rounded-full bg-espresso">
            <div className="absolute inset-x-6 top-1/2 h-1 -translate-y-1/2 rounded-full bg-black/60" />
          </div>
          <div className="relative -mt-3 overflow-hidden px-5">
            <motion.div style={{ y: printed }} className="relative bg-[#FFFDF8] px-7 pb-10 pt-10 font-mono text-[13px] text-espresso">
              <div className="text-center">
                <p className="label text-[12px]">BYOC · Buy your own coffee</p>
                <p className="mt-1 text-[11px] text-espresso/60">Any city · Any café · Since 2020</p>
              </div>
              <div className="my-5 border-t border-dashed border-espresso/40" />
              <ul className="space-y-3">
                {rows.map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4">
                    <span>{k}</span>
                    <span className="tabular-nums">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="my-5 border-t border-dashed border-espresso/40" />
              <div className="flex justify-between text-[15px] font-semibold">
                <span>Paid by</span>
                <span>You</span>
              </div>
              <div className="mt-2 flex justify-between">
                <span>Owed to anyone</span>
                <span className="tabular-nums">0.00</span>
              </div>
              <motion.div
                style={{ scale: stamp, opacity: stampOpacity }}
                className="absolute bottom-16 right-6 rotate-[-12deg] rounded-none border-[3px] border-cherry px-3 py-1 font-display text-[22px] font-medium uppercase tracking-[-0.02em] text-cherry"
              >
                Paid · Thank you
              </motion.div>
              <p className="mt-8 text-center text-[11px] text-espresso/55">Same queue. Same price. Same level.</p>
              {/* torn edge */}
              <svg className="absolute -bottom-3 left-0 h-3 w-full text-[#FFFDF8]" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden>
                <path d="M0 0 L0 2 L2.5 4 L5 2 L7.5 4 L10 2 L12.5 4 L15 2 L17.5 4 L20 2 L22.5 4 L25 2 L27.5 4 L30 2 L32.5 4 L35 2 L37.5 4 L40 2 L42.5 4 L45 2 L47.5 4 L50 2 L52.5 4 L55 2 L57.5 4 L60 2 L62.5 4 L65 2 L67.5 4 L70 2 L72.5 4 L75 2 L77.5 4 L80 2 L82.5 4 L85 2 L87.5 4 L90 2 L92.5 4 L95 2 L97.5 4 L100 2 L100 0 Z" fill="currentColor" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
