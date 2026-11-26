'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cities } from '@/data/cities';
import RollButton from '@/components/ui/RollButton';
import { RiseWords } from '@/components/motion/Reveal';

export default function CityList() {
  return (
    <section className="pb-24 pt-8 sm:pb-36">
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-end lg:px-10">
        <h2 className="font-display text-[clamp(44px,6.6vw,116px)] font-medium text-espresso display-tight">
          <RiseWords text="Where the coffee is." />
        </h2>
      </div>

      <ul className="mt-14 border-t-2 border-espresso">
        {cities.map((c, i) => (
          <motion.li
            key={c.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.03 }}
            className="group relative overflow-hidden border-b border-espresso"
          >
            <Link href="/chapters" className="relative block" data-cursor="Visit">
              <span className="absolute inset-0 origin-top scale-y-0 bg-espresso transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" />
              <div className="relative mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-cond text-[clamp(34px,5.2vw,88px)] text-ink transition-colors duration-500 group-hover:text-paper">
                    {c.name}
                  </span>
                  <span className="label hidden text-espresso/55 transition-colors duration-500 group-hover:text-paper/70 sm:inline">
                    {c.note ?? c.country}
                  </span>
                </div>
                <span className="label shrink-0 rounded-full border border-espresso px-4 py-2 text-[10px] text-espresso transition-colors duration-500 group-hover:border-paper group-hover:text-paper">
                  {i === 0 ? 'Where it began' : 'View city'}
                </span>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="mx-auto mt-12 flex max-w-[1600px] flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-10">
        <p className="max-w-[30ch] font-display text-[clamp(24px,2.4vw,40px)] font-medium leading-[1.05] tracking-[-0.03em] text-espresso">
          Your city isn’t on the list yet? Tell us where you are.
        </p>
        <RollButton href="/join" size="lg">Apply to join</RollButton>
      </div>
    </section>
  );
}
