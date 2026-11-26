'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue, interpolate } from 'framer-motion';

const steps = [
  { n: '01', title: 'One hour.', body: 'Long enough to say something true. Short enough to say yes to.', img: '/images/two-talk.jpg' },
  { n: '02', title: 'A small group.', body: 'Small enough that nobody hides. Big enough that someone surprises you.', img: '/images/circle-2.jpg' },
  { n: '03', title: 'One question each.', body: 'Bring what you’re stuck on, not what you’re selling.', img: '/images/debate.jpg' },
  { n: '04', title: 'Then you follow up.', body: 'What happens next is up to you. It usually happens.', img: '/images/listen.jpg' },
];

function Panel({ s, i, progress }: { s: (typeof steps)[number]; i: number; progress: MotionValue<number> }) {
  // Each panel's photo drifts against the scroll for depth.
  const imgX = useTransform(progress, (v: number) => interpolate([0, 1], [`${-6 + i * 4}%`, `${-14 + i * 4}%`])(v));
  return (
    <article className="relative h-[78vh] w-[78vw] shrink-0 overflow-hidden rounded-none bg-espresso lg:w-[62vw]">
      <motion.div style={{ x: imgX }} className="absolute inset-y-0 -left-[10%] -right-[10%]">
        <Image src={s.img} alt="" fill sizes="70vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
      <span
        className="absolute right-8 top-4 font-display text-[clamp(96px,11vw,200px)] font-medium leading-none tracking-[-0.06em] text-transparent"
        style={{ WebkitTextStroke: '2px rgba(251,248,242,0.75)' }}
        aria-hidden
      >
        {s.n}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
        <h3 className="font-display text-[clamp(44px,6vw,108px)] font-medium text-paper display-tight">{s.title}</h3>
        <p className="mt-5 max-w-[30ch] font-display text-[clamp(20px,1.9vw,30px)] font-medium leading-[1.2] tracking-[-0.02em] text-paper/80">{s.body}</p>
      </div>
    </article>
  );
}

export default function TheHour() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, (v: number) => interpolate([0, 1], ['0%', '-76%'])(v));
  const bar = useTransform(scrollYProgress, (v: number) => interpolate([0, 1], ['0%', '100%'])(v));

  return (
    <>
      {/* Desktop & tablet: pinned, scroll moves sideways through the hour */}
      <section ref={ref} className="relative hidden h-[400vh] bg-bg md:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-center gap-6 pl-6 lg:pl-10">
            <div className="flex h-[78vh] w-[38vw] shrink-0 flex-col justify-between pr-6">
              <h2 className="font-display text-[clamp(56px,7.4vw,132px)] font-medium text-espresso display-tight">
                What actually happens.
              </h2>
              <p className="max-w-[26ch] font-display text-[clamp(22px,2vw,32px)] font-medium leading-[1.15] tracking-[-0.025em] text-espresso/70">
                The same four beats, in every city, every time.
              </p>
            </div>
            {steps.map((s, i) => (
              <Panel key={s.n} s={s} i={i} progress={scrollYProgress} />
            ))}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
          <div className="absolute bottom-6 left-6 right-6 h-[3px] rounded-full bg-espresso/10 lg:left-10 lg:right-10">
            <motion.div style={{ width: bar }} className="h-full rounded-full bg-cherry" />
          </div>
        </div>
      </section>

      {/* Phone: a swipeable row of photo cards */}
      <section className="py-14 md:hidden">
        <h2 className="px-4 font-display text-[44px] font-medium text-espresso display-tight">What actually happens.</h2>
        <p className="mt-3 px-4 text-[15px] text-espresso/60">Swipe through the hour.</p>
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2">
          {steps.map((s) => (
            <article key={s.n} className="relative h-[62vh] w-[82vw] shrink-0 snap-center overflow-hidden bg-espresso">
              <Image src={s.img} alt="" fill sizes="82vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
              <span className="absolute right-4 top-1 font-display text-[96px] font-medium leading-none tracking-[-0.06em] text-transparent" style={{ WebkitTextStroke: '1.5px rgba(251,248,242,0.75)' }} aria-hidden>
                {s.n}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-[38px] font-medium text-paper display-tight">{s.title}</h3>
                <p className="mt-3 text-[17px] font-medium leading-[1.3] text-paper/85">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
