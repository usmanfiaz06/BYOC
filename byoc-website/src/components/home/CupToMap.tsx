'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue, interpolate } from 'framer-motion';
import { geoContains, geoNaturalEarth1 } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';
import type { FeatureCollection } from 'geojson';
import land110 from 'world-atlas/land-110m.json';
import { cities, stats } from '@/data/cities';

const W = 1000;
const H = 520;
const STEP = 7.5;

/** Land as a field of dots, plus a projection for placing the cities. */
function useDotMap() {
  return useMemo(() => {
    const topo = land110 as unknown as Topology<{ land: GeometryCollection }>;
    const land = feature(topo, topo.objects.land) as unknown as FeatureCollection;
    const projection = geoNaturalEarth1().fitSize([W, H], land);
    const dots: [number, number][] = [];
    for (let y = STEP / 2; y < H; y += STEP) {
      for (let x = STEP / 2; x < W; x += STEP) {
        const ll = projection.invert?.([x, y]);
        if (ll && geoContains(land, ll)) dots.push([x, y]);
      }
    }
    const pins = cities.map((c) => {
      const p = projection(c.coords) ?? [0, 0];
      return { ...c, x: p[0], y: p[1] };
    });
    return { dots, pins };
  }, []);
}

/** Top-down coffee cup on a saucer. `half` clips it to the left or right side. */
function CupHalf({ side, progress }: { side: 'left' | 'right'; progress: MotionValue<number> }) {
  const dir = side === 'left' ? -1 : 1;
  const x = useTransform(progress, (v: number) => interpolate([0.18, 0.46], ['0vw', `${dir * 62}vw`])(v));
  const rotate = useTransform(progress, (v: number) => interpolate([0.18, 0.46], [0, dir * 18])(v));
  const clip = side === 'left' ? 'inset(0 50% 0 0)' : 'inset(0 0 0 50%)';
  return (
    <motion.div style={{ x, rotate, clipPath: clip }} className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="h-[min(78vmin,640px)] w-[min(78vmin,640px)]" aria-hidden>
        <circle cx="200" cy="200" r="176" fill="#F7F5F0" stroke="#111010" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="128" fill="none" stroke="#111010" strokeWidth="1" />
        <rect x="308" y="186" width="70" height="30" rx="15" fill="#F7F5F0" stroke="#111010" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="112" fill="#F7F5F0" stroke="#111010" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="98" fill="#E9E5DC" stroke="#111010" strokeWidth="1" />
      </svg>
    </motion.div>
  );
}

// Only some cities carry a label, so clusters (Gulf, Europe, Pakistan) stay legible.
const LABELS: Record<string, 'start' | 'end'> = {
  Islamabad: 'start', Riyadh: 'end', Dubai: 'start', London: 'end', Berlin: 'start', 'San Francisco': 'end',
  Toronto: 'start', Singapore: 'start', 'Dar es Salaam': 'start', Dhaka: 'start', Jakarta: 'start',
};

function Pin({ x, y, name, i, progress, primary }: { x: number; y: number; name: string; i: number; progress: MotionValue<number>; primary?: boolean }) {
  const anchor = LABELS[name];
  const start = 0.5 + i * 0.012;
  const scale = useTransform(progress, (v: number) => interpolate([start, start + 0.04], [0, 1])(v));
  const opacity = useTransform(progress, (v: number) => interpolate([start, start + 0.03], [0, 1])(v));
  return (
    <motion.g style={{ opacity }}>
      <motion.g style={{ scale, transformOrigin: `${x}px ${y}px` }}>
        <circle cx={x} cy={y} r={primary ? 6 : 4} fill={primary ? '#C8231B' : '#F7F5F0'} className="pulse-ring" opacity={0.6} />
        <circle cx={x} cy={y} r={primary ? 5.5 : 3.6} fill={primary ? '#C8231B' : '#F7F5F0'} stroke="#1A0C05" strokeWidth="1.2" />
      </motion.g>
      {anchor && <text x={anchor === 'start' ? x + 8 : x - 8} y={y + 3.5} textAnchor={anchor} fontSize={primary ? 12 : 9.5} fill="#F7F5F0" opacity={primary ? 1 : 0.8} fontFamily="var(--font-geist-mono)" style={{ letterSpacing: '0.06em' }}>
        {name.toUpperCase()}
      </text>}
    </motion.g>
  );
}

function Counter({ value, progress, at, suffix = '' }: { value: number; progress: MotionValue<number>; at: number; suffix?: string }) {
  const v = useTransform(progress, (v: number) => interpolate([at, at + 0.12], [0, value])(v));
  const [n, setN] = useState(0);
  useMotionValueEvent(v, 'change', (latest) => setN(Math.round(latest)));
  return (
    <span>
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

export default function CupToMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const { dots, pins } = useDotMap();

  // Coffee surface grows from the cup to fill the screen. Sizes are in px so
  // the circle starts exactly on the coffee inside the drawn cup.
  const [vp, setVp] = useState({ w: 1440, h: 900 });
  useEffect(() => {
    const on = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  const cupPx = Math.min(0.78 * Math.min(vp.w, vp.h), 640);
  const r0 = (cupPx * 98) / 400;
  const rMax = Math.hypot(vp.w, vp.h) / 2 + 40;
  const clip = useTransform(p, (v) => {
    const t = Math.min(Math.max((v - 0.2) / 0.3, 0), 1);
    const eased = t * t * (3 - 2 * t);
    return `circle(${r0 + (rMax - r0) * eased}px at 50% 50%)`;
  });
  const crema = useTransform(p, (v: number) => interpolate([0, 0.18, 0.27], [1, 1, 0])(v));
  const cremaRotate = useTransform(p, (v: number) => interpolate([0, 0.4], [0, 120])(v));
  const introOpacity = useTransform(p, (v: number) => interpolate([0, 0.06, 0.16, 0.22], [1, 1, 1, 0])(v));
  const introY = useTransform(p, (v: number) => interpolate([0.12, 0.22], [0, -60])(v));
  const mapOpacity = useTransform(p, (v: number) => interpolate([0.36, 0.5], [0, 1])(v));
  const mapScale = useTransform(p, (v: number) => interpolate([0.36, 0.8], [1.25, 1])(v));
  const outroOpacity = useTransform(p, (v: number) => interpolate([0.62, 0.72], [0, 1])(v));
  const outroY = useTransform(p, (v: number) => interpolate([0.62, 0.72], [40, 0])(v));

  return (
    <section ref={ref} className="relative h-[420vh] bg-bg" aria-label="From one cup to 21 countries">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Intro line */}
        <motion.div style={{ opacity: introOpacity, y: introY }} className="absolute inset-x-0 top-[9vh] z-20 px-4 text-center">
          <h2 className="mx-auto mt-3 max-w-[18ch] font-display text-[clamp(34px,5vw,84px)] font-medium text-espresso display-tight">
            Every gathering starts with one cup.
          </h2>
        </motion.div>

        {/* Cup halves */}
        <div className="absolute inset-0 z-10">
          <CupHalf side="left" progress={p} />
          <CupHalf side="right" progress={p} />
        </div>

        {/* Coffee → world */}
        <motion.div style={{ clipPath: clip }} className="absolute inset-0 z-[15] bg-[#1A0C05]">
          {/* crema + latte art while it's still a cup */}
          <motion.div style={{ opacity: crema, rotate: cremaRotate, width: r0 * 2, height: r0 * 2 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden>
              <defs>
                <radialGradient id="crema" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="#6b3410" stopOpacity="0" />
                  <stop offset="92%" stopColor="#a8693a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#c08a55" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="100" fill="url(#crema)" />
              <path d="M100 150 C 60 120, 52 92, 68 74 C 80 61, 96 66, 100 80 C 104 66, 120 61, 132 74 C 148 92, 140 120, 100 150 Z" fill="#E9D3B4" opacity="0.92" />
              <path d="M100 150 L100 58" stroke="#E9D3B4" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            </svg>
          </motion.div>

          <motion.div style={{ opacity: mapOpacity, scale: mapScale }} className="absolute inset-0 flex items-center justify-center px-2">
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-[min(96vw,165vh)]" role="img" aria-label="World map of BYOC cities">
              {dots.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r={1.7} fill="#F7F5F0" opacity={0.42} />
              ))}
              {pins.map((c, i) => (
                <Pin key={c.name} x={c.x} y={c.y} name={c.name} i={i} progress={p} primary={i === 0} />
              ))}
            </svg>
          </motion.div>

          {/* Outro */}
          <motion.div style={{ opacity: outroOpacity, y: outroY }} className="absolute inset-x-0 bottom-0 z-20 px-4 pb-8 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-6 border-t border-paper/20 pt-6 md:flex-row md:items-end md:justify-between">
              <h3 className="max-w-[14ch] font-display text-[clamp(32px,4.4vw,76px)] font-medium text-paper display-tight">
                Twenty-one countries. <span className="text-gold">One habit.</span>
              </h3>
              <dl className="grid grid-cols-3 gap-6 text-paper sm:gap-10">
                {[
                  { v: stats.gatherings, s: '+', l: 'Gatherings', at: 0.66 },
                  { v: stats.members, s: '+', l: 'Members', at: 0.69 },
                  { v: stats.countries, s: '', l: 'Countries', at: 0.72 },
                ].map((d) => (
                  <div key={d.l}>
                    <dd className="font-display text-[clamp(30px,3.6vw,60px)] font-medium leading-none tracking-[-0.04em]">
                      <Counter value={d.v} progress={p} at={d.at} suffix={d.s} />
                    </dd>
                    <dt className="label mt-2 text-paper/60">{d.l}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
