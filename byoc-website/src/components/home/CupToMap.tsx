'use client';

import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
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
        <circle cx={x} cy={y} r={primary ? 6 : 4} fill={primary ? '#2340FF' : '#F7F5F0'} className="pulse-ring" opacity={0.6} />
        <circle cx={x} cy={y} r={primary ? 5.5 : 3.6} fill={primary ? '#2340FF' : '#F7F5F0'} stroke="#1A0C05" strokeWidth="1.2" />
      </motion.g>
      {anchor && <text x={anchor === 'start' ? x + 8 : x - 8} y={y + 3.5} textAnchor={anchor} fontSize={primary ? 12 : 9.5} fill="#F7F5F0" opacity={primary ? 1 : 0.8} fontFamily="var(--font-inter-tight)" fontWeight={500}>
        {name}
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

  // A real photo of a cup, shot from above. Scrolling pushes the camera into
  // the dark centre of the coffee until it fills the screen and becomes the map.
  const zoom = useTransform(p, (v: number) => {
    const t = Math.min(Math.max((v - 0.06) / 0.36, 0), 1);
    return 1 + Math.pow(t, 2.2) * 11;
  });
  const dark = useTransform(p, (v: number) => interpolate([0.26, 0.42], [0, 1])(v));
  const introOpacity = useTransform(p, (v: number) => interpolate([0, 0.1, 0.18], [1, 1, 0])(v));
  const introY = useTransform(p, (v: number) => interpolate([0.08, 0.18], [0, -40])(v));
  const mapOpacity = useTransform(p, (v: number) => interpolate([0.4, 0.52], [0, 1])(v));
  const mapScale = useTransform(p, (v: number) => interpolate([0.4, 0.8], [1.2, 1])(v));
  const outroOpacity = useTransform(p, (v: number) => interpolate([0.62, 0.72], [0, 1])(v));
  const outroY = useTransform(p, (v: number) => interpolate([0.62, 0.72], [40, 0])(v));

  return (
    <section ref={ref} className="relative h-[420vh] bg-ink" aria-label="From one cup to 21 countries">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* The cup */}
        <motion.div style={{ scale: zoom, transformOrigin: '71% 50%' }} className="absolute inset-0 will-change-transform">
          <Image src="/images/coffee-top.jpg" alt="A cup of black coffee seen from above" fill sizes="100vw" className="object-cover object-[50%_50%]" />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/30" />
        <motion.div style={{ opacity: dark }} className="absolute inset-0 bg-[#120804]" />

        {/* Intro line */}
        <motion.div style={{ opacity: introOpacity, y: introY }} className="absolute inset-x-0 bottom-0 z-20 px-4 pb-10 sm:px-6 lg:px-10">
          <h2 className="max-w-[16ch] font-display text-[clamp(40px,6vw,104px)] font-medium text-paper display-tight">
            Every gathering starts with one cup.
          </h2>
        </motion.div>

        {/* Coffee → world */}
        <motion.div style={{ opacity: mapOpacity, scale: mapScale }} className="absolute inset-0 z-10 flex items-center justify-center px-2">
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-[170vw] max-w-none shrink-0 -translate-x-[22vw] sm:w-[min(96vw,165vh)] sm:translate-x-0" role="img" aria-label="World map of BYOC cities">
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
              Twenty-one countries. <span className="text-sky">One habit.</span>
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
      </div>
    </section>
  );
}
