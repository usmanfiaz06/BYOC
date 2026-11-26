'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'dark' | 'light' | 'outline' | 'gold' | 'outline-light';

const styles: Record<Variant, { base: string; fill: string; hoverText: string; dot: string }> = {
  dark: { base: 'bg-espresso text-paper', fill: 'bg-cherry', hoverText: 'group-hover:text-espresso', dot: 'bg-paper text-espresso' },
  light: { base: 'bg-paper text-espresso', fill: 'bg-espresso', hoverText: 'group-hover:text-paper', dot: 'bg-espresso text-paper' },
  outline: { base: 'border border-espresso/80 text-espresso', fill: 'bg-espresso', hoverText: 'group-hover:text-paper', dot: 'bg-espresso text-paper' },
  'outline-light': { base: 'border border-paper/40 text-paper', fill: 'bg-paper', hoverText: 'group-hover:text-espresso', dot: 'bg-paper text-espresso' },
  gold: { base: 'bg-cherry text-paper', fill: 'bg-paper', hoverText: 'group-hover:text-espresso', dot: 'bg-paper text-cherry' },
};

/** Letters roll up one after another on hover. */
function RollText({ text }: { text: string }) {
  const chars = Array.from(text);
  return (
    <span className="relative inline-flex overflow-hidden leading-[1.25]" aria-label={text}>
      {chars.map((c, i) => (
        <span key={i} aria-hidden className="relative inline-block">
          <span
            className="inline-block transition-transform duration-[550ms] ease-[cubic-bezier(.7,0,.2,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 14}ms` }}
          >
            {c === ' ' ? ' ' : c}
          </span>
          <span
            className="absolute left-0 top-full inline-block transition-transform duration-[550ms] ease-[cubic-bezier(.7,0,.2,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 14}ms` }}
          >
            {c === ' ' ? ' ' : c}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function RollButton({
  href,
  children,
  variant = 'dark',
  arrow = true,
  size = 'md',
  className = '',
  external = false,
  onClick,
  type,
}: {
  href?: string;
  children: string;
  variant?: Variant;
  arrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18 });
  const y = useSpring(my, { stiffness: 220, damping: 18 });
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const s = styles[variant];

  const pad = size === 'lg' ? 'pl-7 pr-2 py-2 text-[13px]' : size === 'sm' ? 'pl-4 pr-1.5 py-1.5 text-[11px]' : 'pl-5 pr-1.5 py-1.5 text-[12px]';
  const dot = size === 'lg' ? 'w-11 h-11' : size === 'sm' ? 'w-7 h-7' : 'w-9 h-9';

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.32);
  };
  const onEnter = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setOrigin({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const inner = (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerEnter={onEnter}
      onPointerLeave={reset}
      className={`group relative inline-flex items-center gap-4 overflow-hidden rounded-full font-mono font-medium uppercase tracking-[0.08em] isolate ${pad} ${s.base} ${arrow ? '' : 'pr-6'} ${className}`}
    >
      <span
        aria-hidden
        className={`absolute -z-10 aspect-square w-[260%] rounded-full scale-0 transition-transform duration-[650ms] ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-100 ${s.fill}`}
        style={{ left: `${origin.x}%`, top: `${origin.y}%`, translate: '-50% -50%' }}
      />
      <span className={`transition-colors duration-500 ${s.hoverText}`}>
        <RollText text={children} />
      </span>
      {arrow && (
        <span className={`relative flex ${dot} shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-500 group-hover:rotate-45 ${s.dot}`}>
          <ArrowUpRight size={size === 'sm' ? 13 : 16} strokeWidth={2.2} className="transition-transform duration-500 group-hover:-rotate-45" />
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {inner}
      </a>
    ) : (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
