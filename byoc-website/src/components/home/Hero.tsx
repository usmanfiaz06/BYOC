'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, interpolate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import RollButton from '@/components/ui/RollButton';
import { NavLink, navLinks } from '@/components/Navbar';

const EASE = [0.7, 0, 0.2, 1] as const;

/** Who you'll meet, paired with a city. */
const lines: { who: string; city: string }[] = [
  { who: 'just closed a round', city: 'Riyadh' },
  { who: 'is hiring their first VP', city: 'Dublin' },
  { who: 'moved here last month', city: 'Singapore' },
  { who: 'made the mistake you’re about to make', city: 'Islamabad' },
  { who: 'crossed the border you’re eyeing', city: 'San Francisco' },
  { who: 'carries the same weight you do', city: 'Kuala Lumpur' },
];

export interface HeroNext {
  city: string;
  day: string;
  time: string;
  proximity: string;
  url: string;
}

function Ribbon({ text, href }: { text: string; href?: string }) {
  const row = (
    <div className="flex w-max animate-marquee-fast">
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="label px-6 text-[11px] font-medium text-ink">
              {text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-cherry py-2">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {row}
        </a>
      ) : (
        row
      )}
    </div>
  );
}

function Roll({ k, children, delay = 0 }: { k: string; children: string; delay?: number }) {
  const words = children.split(' ');
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span key={k} className="inline">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-105%' }}
              transition={{ duration: 0.55, ease: EASE, delay: delay + i * 0.04 }}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}

function RotatingLine() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % lines.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <h1 className="max-w-[16ch] font-display text-[clamp(40px,6.4vw,116px)] font-medium leading-[0.95] tracking-[-0.045em] text-paper">
      <span className="text-paper/65">Coffee with someone who </span>
      <Roll k={`w${i}`}>{lines[i].who}</Roll>
      <span className="text-paper/65"> in </span>
      <Roll k={`c${i}`} delay={0.15}>{`${lines[i].city}.`}</Roll>
    </h1>
  );
}

export default function Hero({ ribbon, ribbonHref, next }: { ribbon: string; ribbonHref?: string; next: HeroNext | null }) {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, (v: number) => interpolate([0, 1], ['0%', '18%'])(v));
  const imgScale = useTransform(scrollYProgress, (v: number) => interpolate([0, 1], [1.04, 1.16])(v));

  return (
    <section className="-mt-16" data-home-hero>
      <Ribbon text={ribbon} href={ribbonHref} />

      {/* Masthead */}
      <div className="px-4 pt-3 sm:px-6 lg:px-10">
        <svg viewBox="0 0 1000 96" className="rise-in block h-auto w-full text-ink" role="img" aria-label="Buy your own coffee">
          <text
            x="0"
            y="93"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{ fontFamily: 'var(--font-cond)', fontVariationSettings: '"wdth" 62', fontWeight: 800, fontSize: 124, letterSpacing: '-0.01em' }}
          >
            BUY YOUR OWN COFFEE
          </text>
        </svg>
      </div>

      {/* Nav row */}
      <div className="mx-4 mt-3 flex items-center justify-between py-3 sm:mx-6 lg:mx-10">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          <NavLink href="/" label="Home" active />
          {navLinks.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </div>
        <span className="hidden items-center gap-3 sm:flex">
          <span className="label text-ink/70">Est. 2020</span>
          <span className="h-2.5 w-2.5 rounded-full bg-cherry" />
        </span>
      </div>

      {/* Photo, with the line set on it */}
      <div ref={photoRef} className="relative mx-4 h-[86vh] min-h-[560px] overflow-hidden bg-ink sm:mx-6 lg:mx-10">
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
          <Image src="/images/hero-crowd.jpg" alt="A full café of BYOC members at an evening gathering" fill priority sizes="100vw" className="object-cover object-[50%_45%]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/15 to-ink/80" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-6 p-5 sm:p-8">
          <RotatingLine />
          <p className="hidden shrink-0 text-right font-display text-[18px] font-medium leading-[1.15] tracking-[-0.01em] text-paper md:block">
            33°41′N
            <br />
            73°03′E
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-8 sm:pb-8">
          <div className="border-t border-paper/40 pt-5">
            {next ? (
              <a href={next.url} target="_blank" rel="noopener noreferrer" className="group grid items-end gap-4 text-paper sm:grid-cols-[1fr_1fr_auto]">
                <span className="flex items-center gap-3 font-display text-[clamp(22px,2.4vw,40px)] font-medium leading-none tracking-[-0.03em]">
                  <span className="h-4 w-4 shrink-0 bg-paper" />
                  Next coffee · {next.city}
                </span>
                <span className="font-display text-[clamp(22px,2.4vw,40px)] font-medium leading-none tracking-[-0.03em]">
                  {next.day} <span className="text-paper/60">{next.time}</span>
                </span>
                <span className="label flex items-center gap-2 text-paper">
                  Save a seat
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/60 transition-colors duration-300 group-hover:bg-paper group-hover:text-ink">
                    <ArrowUpRight size={16} />
                  </span>
                </span>
              </a>
            ) : (
              <div className="flex items-center justify-between text-paper">
                <span className="flex items-center gap-3 font-display text-[clamp(22px,2.4vw,40px)] font-medium leading-none tracking-[-0.03em]">
                  <span className="h-4 w-4 bg-paper" /> 212 gatherings since 2020
                </span>
                <span className="font-display text-[clamp(22px,2.4vw,40px)] font-medium leading-none tracking-[-0.03em]">21 countries</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Caption row */}
      <div className="mx-4 flex flex-col gap-6 py-5 sm:mx-6 md:flex-row md:items-start md:justify-between lg:mx-10">
        <p className="max-w-[56ch] text-[15px] leading-[1.5] text-ink/80">
          BYOC (Buy Your Own Coffee) is a gathering of founders, executives and operators who meet in cafés, in small groups, for an hour. Everyone pays for their own cup. Since 2020, in 21 countries.
        </p>
        <div className="flex shrink-0 gap-3">
          <RollButton href="/events" variant="outline" size="sm">See the next coffee</RollButton>
          <RollButton href="/join" size="sm">Apply to join</RollButton>
        </div>
      </div>
    </section>
  );
}
