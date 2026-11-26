'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, interpolate } from 'framer-motion';
import { RiseWords, FadeUp } from '@/components/motion/Reveal';

export default function Origin() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const clip = useTransform(scrollYProgress, (v: number) => interpolate([0.1, 0.45], ['inset(18% 22% 18% 22%)', 'inset(0% 0% 0% 0%)'])(v));
  const imgScale = useTransform(scrollYProgress, (v: number) => interpolate([0.1, 0.6], [1.25, 1])(v));

  return (
    <section id="origin" className="bg-cherry text-paper">
      <div className="mx-auto max-w-[1600px] px-4 pb-16 pt-14 sm:px-6 sm:pt-28 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <h2 className="font-display text-[clamp(44px,7vw,120px)] font-medium display-tight">
            <RiseWords text="It started because we were bored." />
          </h2>
          <FadeUp className="self-end md:text-right">
            <p className="font-display text-[clamp(24px,2.4vw,38px)] font-medium leading-[1.05] tracking-[-0.03em]">
              2020.
              <br />
              Islamabad.
              <br />
              Lockdown.
            </p>
          </FadeUp>
        </div>

        <div ref={ref} className="relative mt-14 aspect-[4/3] w-full sm:aspect-[16/8]">
          <motion.div style={{ clipPath: clip }} className="absolute inset-0 overflow-hidden">
            <motion.div style={{ scale: imgScale }} className="absolute inset-0">
              <Image src="/images/circle.jpg" alt="A small BYOC group talking around a café table, coffee cups in hand" fill sizes="100vw" className="object-cover grayscale contrast-[1.08]" />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <FadeUp>
            <p className="max-w-[46ch] text-[18px] leading-[1.6] text-paper/90 sm:text-[20px]">
              In 2020 the world went indoors. Meetings turned into rectangles. The people we used to bump into turned into names in a group chat.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-[46ch] text-[18px] leading-[1.6] text-paper/90 sm:text-[20px]">
              A few of us in Islamabad missed something you can’t put in a calendar invite: sitting across from someone, talking until the coffee went cold. So we did. Each of us paid for our own cup. Nobody gave a talk. Nobody checked their phone for two hours.
            </p>
            <p className="mt-6 max-w-[46ch] text-[18px] leading-[1.6] text-paper/90 sm:text-[20px]">
              We met again the next week. Other people heard. 212 gatherings later, it’s still just that, in 21 countries.
            </p>
          </FadeUp>
        </div>

        <div className="mt-20 flex items-end justify-between gap-8 border-t border-paper/25 pt-8">
          <p className="max-w-[22ch] font-display text-[clamp(28px,3.6vw,60px)] font-medium leading-[0.98] tracking-[-0.04em]">
            <RiseWords text="We never set out to build a community." />
            <br />
            <span className="text-paper/60">
              <RiseWords text="We kept showing up, and so did everyone else." delay={0.3} />
            </span>
          </p>
          <span className="mb-2 hidden h-5 w-5 shrink-0 bg-paper sm:block" aria-hidden />
        </div>
      </div>
    </section>
  );
}
