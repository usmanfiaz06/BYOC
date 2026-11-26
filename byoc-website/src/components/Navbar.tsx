'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Wordmark from '@/components/brand/Wordmark';
import RollButton from '@/components/ui/RollButton';

export const navLinks = [
  { href: '/about', label: 'Manifesto' },
  { href: '/events', label: 'Gatherings' },
  { href: '/chapters', label: 'Cities' },
  { href: '/opportunities', label: 'Opportunities' },
];

/** Link whose underline draws in from the left and leaves to the right. */
export function NavLink({ href, label, active, onClick, light }: { href: string; label: string; active?: boolean; onClick?: () => void; light?: boolean }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative py-1 label ${light ? 'text-paper/80 hover:text-paper' : 'text-espresso/70 hover:text-espresso'} transition-colors`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-right scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:origin-left group-hover:scale-x-100 ${light ? 'bg-paper' : 'bg-espresso'} ${active ? '!scale-x-100' : ''}`}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  // Menu state is keyed to the path, so navigating closes it.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (fn: (v: boolean) => boolean) => setOpenFor(fn(open) ? pathname : null);
  // The compact bar stays hidden while the homepage masthead is on screen.
  // Detected from the DOM so it also works when the site is served under a sub-path.
  const [showBar, setShowBar] = useState(!isHome);
  const scrolled = showBar;

  useEffect(() => {
    const update = () => {
      const hero = document.querySelector('[data-home-hero]');
      setShowBar(!hero || window.scrollY > window.innerHeight * 0.55);
    };
    const raf = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update);
    };
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: scrolled || open ? 0 : -90 }}
        transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link href="/" aria-label="BYOC home" className="text-espresso transition-transform duration-500 hover:-rotate-3">
            <Wordmark className="h-7 w-auto" />
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <NavLink key={l.href} {...l} active={pathname === l.href} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block">
              <RollButton href="/join" size="sm">Apply to join</RollButton>
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-espresso/30 lg:hidden"
            >
              <span className={`absolute h-[1.5px] w-4 bg-espresso transition-transform duration-500 ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
              <span className={`absolute h-[1.5px] w-4 bg-espresso transition-transform duration-500 ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-espresso px-6 pb-12 pt-24 text-paper lg:hidden"
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link href={l.href} className="block border-b border-paper/15 py-3 font-display text-[42px] font-medium leading-none tracking-[-0.04em]">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <div className="mt-8">
              <RollButton href="/join" variant="gold" size="lg">Apply to join</RollButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
