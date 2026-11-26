'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cities } from '@/data/cities';
import RollButton from '@/components/ui/RollButton';
import { RiseWords } from '@/components/motion/Reveal';

/** The cities set as one run of large type, wrapping like a paragraph. */
export default function CityList() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-32 lg:px-10">
      <h2 className="font-display text-[clamp(44px,6.6vw,116px)] font-medium text-ink display-tight">
        <RiseWords text="Where the coffee is." />
      </h2>

      <p className="mt-14 font-display text-[clamp(36px,5.4vw,96px)] font-medium leading-[1.02] tracking-[-0.045em]">
        {cities.map((c, i) => (
          <motion.span
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: 0.6, delay: Math.min(i, 12) * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline"
          >
            <Link
              href="/chapters"
              className={`transition-colors duration-300 hover:text-cherry ${i === 0 ? 'text-cherry' : 'text-ink'}`}
            >
              {c.name}
            </Link>
            {i === 0 && (
              <sup className="ml-1 align-super text-[0.28em] font-medium tracking-normal text-cherry">since 2020</sup>
            )}
            {i < cities.length - 1 && <span className="text-ink/25">, </span>}
            {i === cities.length - 1 && <span className="text-ink">.</span>}
          </motion.span>
        ))}
      </p>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink/20 pt-8 md:flex-row md:items-center">
        <p className="max-w-[34ch] font-display text-[clamp(22px,2vw,32px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
          Your city isn’t on the list yet? Tell us where you are.
        </p>
        <RollButton href="/join" size="lg">Request an invite</RollButton>
      </div>
    </section>
  );
}
