'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, interpolate, type MotionValue } from 'framer-motion';
import { Play, X } from 'lucide-react';

type Film = { src: string; poster: string; place: string; year: string };

const films: Film[] = [
  { src: '/videos/headline.mp4', poster: '/videos/posters/headline.jpg', place: 'BYOC', year: '2026' },
  { src: '/videos/singapore.mp4', poster: '/videos/posters/singapore.jpg', place: 'Singapore', year: '2026' },
  { src: '/videos/dublin.mp4', poster: '/videos/posters/dublin.jpg', place: 'Dublin', year: '2025' },
  { src: '/videos/riyadh.mp4', poster: '/videos/posters/riyadh.jpg', place: 'Riyadh', year: '2025' },
  { src: '/videos/sanfrancisco.mp4', poster: '/videos/posters/sanfrancisco.jpg', place: 'San Francisco', year: '2026' },
  { src: '/videos/kualalumpur.mp4', poster: '/videos/posters/kualalumpur.jpg', place: 'Kuala Lumpur', year: '2025' },
  { src: '/videos/experience.mp4', poster: '/videos/posters/experience.jpg', place: 'The experience', year: '2026' },
  { src: '/videos/mayreel.mp4', poster: '/videos/posters/mayreel.jpg', place: 'May sessions', year: '2026' },
  { src: '/videos/video2025.mp4', poster: '/videos/posters/video2025.jpg', place: 'In the room', year: '2025' },
];

// Five columns of phone-shaped frames. Each column drifts at its own speed and
// direction as you scroll, so the wall feels alive rather than gridded.
const columns: number[][] = [
  [1, 5, 8, 2, 6],
  [2, 6, 4, 0, 7],
  [0, 3, 7, 5, 1],
  [4, 8, 1, 6, 3],
  [7, 1, 3, 8, 5],
];
const drift = [-14, 10, -18, 8, -12]; // % of column height, start → end

function Tile({ film, onOpen }: { film: Film; onOpen: () => void }) {
  // A still frame by default (a few KB). The film itself only loads and plays
  // while you hover it, so the wall never floods the connection.
  const [live, setLive] = useState(false);
  return (
    <button
      type="button"
      onClick={onOpen}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setLive(true)}
      onPointerLeave={() => setLive(false)}
      aria-label={`Play ${film.place} ${film.year} with sound`}
      className="group relative block aspect-[9/16] w-full overflow-hidden bg-[#1c1b1a]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={film.poster} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]" />
      {live && <video src={film.src} poster={film.poster} muted loop playsInline autoPlay className="absolute inset-0 h-full w-full scale-[1.06] object-cover" />}
      <span className="absolute inset-0 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/0" />
      <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-[14px] font-medium text-paper">
          {film.place} · {film.year}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
          <Play size={12} fill="currentColor" />
        </span>
      </span>
    </button>
  );
}

function Column({ ids, i, progress, onOpen }: { ids: number[]; i: number; progress: MotionValue<number>; onOpen: (n: number) => void }) {
  const y = useTransform(progress, (v: number) => `${interpolate([0, 1], [0, drift[i]])(v)}%`);
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-3 ${i === 2 ? 'pt-0' : i % 2 ? 'pt-[30%]' : 'pt-[12%]'} ${i > 2 ? 'hidden md:flex' : ''}`}>
      {ids.map((n, k) => (
        <Tile key={`${n}-${k}`} film={films[n]} onOpen={() => onOpen(n)} />
      ))}
    </motion.div>
  );
}

export default function FilmWall() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const titleScale = useTransform(scrollYProgress, (v: number) => interpolate([0.15, 0.5], [1.25, 1])(v));
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <section ref={ref} className="relative h-[170vh] overflow-hidden bg-ink" aria-label="Films from BYOC gatherings">
      {/* The wall: taller than the section, so the drift never shows an edge */}
      <div className="absolute inset-x-0 -top-[18%] grid grid-cols-3 gap-3 px-3 md:grid-cols-5">
        {columns.map((ids, i) => (
          <Column key={i} ids={ids} i={i} progress={scrollYProgress} onOpen={setOpen} />
        ))}
      </div>

      {/* Title set across the wall; difference blending inverts it over the footage */}
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <motion.h2 style={{ scale: titleScale }} className="text-center font-cond text-[clamp(72px,15vw,280px)] text-paper">
            Scenes from
            <br />
            21 countries
          </motion.h2>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[15px] text-paper/70">Tap any film to watch with sound</p>

      {/* Full-screen player */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${films[open].place} film`}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative h-[86vh] max-w-full"
              style={{ aspectRatio: '9 / 16' }}
              onClick={(e) => e.stopPropagation()}
            >
              <video src={films[open].src} poster={films[open].poster} autoPlay controls playsInline className="h-full w-full bg-black object-cover" />
              <p className="absolute -top-8 left-0 text-[15px] text-paper/80">
                {films[open].place} · {films[open].year}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close film"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
