'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import Wordmark from '@/components/brand/Wordmark';
import { navLinks } from '@/components/Navbar';
import RollButton from '@/components/ui/RollButton';

/** Giant marquee whose speed and direction follow the scroll. */
function VelocityMarquee({ text }: { text: string }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1500, 0, 1500], [-5, 0, 5], { clamp: false });
  const dir = useRef(1);
  const x = useTransform(base, (v) => `${((v % 50) + 50) % 50 - 50}%`);

  useAnimationFrame((_, delta) => {
    let move = dir.current * -2.2 * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * -Math.abs(f) * (delta / 1000);
    base.set(base.get() + move);
  });

  return (
    <div className="overflow-hidden py-4">
      <motion.div style={{ x }} className="flex w-max whitespace-nowrap">
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className="pr-[0.25em] font-cond text-[clamp(110px,19vw,340px)] text-ink">
            {text}
            <span className="text-cherry"> · </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-line bg-bg">
      <VelocityMarquee text="Buy your own coffee" />

      <div className="mx-auto grid max-w-[1600px] gap-12 border-t border-line px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr_1.4fr] lg:px-10">
        <div>
          <Wordmark className="h-12 w-auto text-espresso" />
          <p className="mt-5 max-w-[30ch] text-[15px] leading-[1.55] text-espresso/70">Started in Islamabad in 2020. Poured in 21 countries since.</p>
        </div>
        <ul className="space-y-2.5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="label text-espresso/70 transition-colors hover:text-cherry">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/join" className="label text-espresso/70 transition-colors hover:text-cherry">Apply</Link>
          </li>
        </ul>
        <ul className="space-y-2.5">
          {[
            { href: 'https://instagram.com/byoc.global', label: 'Instagram' },
            { href: 'http://linkedin.com/company/byoc-global', label: 'LinkedIn' },
            { href: 'mailto:usman.fiaz@byoc.global', label: 'Email us' },
          ].map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="label text-espresso/70 transition-colors hover:text-cherry">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <p className="font-display text-[22px] font-medium leading-[1.1] tracking-[-0.02em] text-espresso">One email when there’s a coffee near you. Nothing else.</p>
          {done ? (
            <p className="mt-5 text-[15px] text-espresso/70">Thank you. We’ll write when there’s a coffee near you.</p>
          ) : (
            <form
              className="mt-5 flex items-center gap-3 border-b border-espresso pb-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (/^\S+@\S+\.\S+$/.test(email)) setDone(true);
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Your email"
                className="flex-1 bg-transparent py-2 text-[15px] text-espresso placeholder:text-espresso/40"
              />
              <RollButton type="submit" size="sm">Subscribe</RollButton>
            </form>
          )}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-2 px-4 pb-8 sm:flex-row sm:px-6 lg:px-10">
        <span className="label text-espresso/45">© {new Date().getFullYear()} BYOC Global</span>
        <span className="label text-espresso/45">Everyone pays for their own cup</span>
      </div>
    </footer>
  );
}
