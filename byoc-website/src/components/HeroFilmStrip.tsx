'use client';

import { useEffect, useRef } from 'react';

type Film = {
  src: string;
  poster: string;
  cat: string;
  place: string;
  year: string;
  featured?: boolean;
};

// Ordered so the featured headline film lands in the middle of the row and
// the strip opens scrolled to it.
const films: Film[] = [
  { src: '/videos/singapore.mp4',    poster: '/videos/posters/singapore.jpg',    cat: 'Gathering',  place: 'Singapore',     year: '2026' },
  { src: '/videos/dublin.mp4',       poster: '/videos/posters/dublin.jpg',       cat: 'Gathering',  place: 'Dublin',        year: '2025' },
  { src: '/videos/experience.mp4',   poster: '/videos/posters/experience.jpg',   cat: 'Film',       place: 'The Experience',year: '2026' },
  { src: '/videos/riyadh.mp4',       poster: '/videos/posters/riyadh.jpg',       cat: 'Gathering',  place: 'Riyadh',        year: '2025' },
  { src: '/videos/headline.mp4',     poster: '/videos/posters/headline.jpg',     cat: 'Feature',    place: 'BYOC',          year: '2026', featured: true },
  { src: '/videos/sanfrancisco.mp4', poster: '/videos/posters/sanfrancisco.jpg', cat: 'Gathering',  place: 'San Francisco', year: '2026' },
  { src: '/videos/kualalumpur.mp4',  poster: '/videos/posters/kualalumpur.jpg',  cat: 'Gathering',  place: 'Kuala Lumpur',  year: '2025' },
  { src: '/videos/mayreel.mp4',      poster: '/videos/posters/mayreel.jpg',      cat: 'Film',       place: 'May Sessions',  year: '2026' },
  { src: '/videos/video2025.mp4',    poster: '/videos/posters/video2025.jpg',    cat: 'On Set',     place: 'In the Room',   year: '2025' },
];

export default function HeroFilmStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  // Open scrolled to the featured film, centred in the viewport.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const featured = featuredRef.current;
    if (!scroller || !featured) return;
    const left =
      featured.offsetLeft - (scroller.clientWidth - featured.clientWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: 'auto' });
  }, []);

  // Only play films while they're actually on screen — keeps the row alive
  // without nine videos decoding at once off-screen.
  useEffect(() => {
    const vids = scrollerRef.current?.querySelectorAll('video');
    if (!vids?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        }
      },
      { threshold: 0.4 },
    );
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  // Drag-to-scroll for the cinematic film-reel feel on desktop.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let down = false, startX = 0, startLeft = 0, moved = false;
    const onDown = (e: PointerEvent) => {
      down = true; moved = false;
      startX = e.clientX;
      startLeft = scroller.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroller.scrollLeft = startLeft - dx;
    };
    const onUp = () => { down = false; };
    // Swallow click after a drag so videos don't toggle by accident.
    const onClick = (e: MouseEvent) => { if (moved) { e.preventDefault(); e.stopPropagation(); } };
    scroller.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    scroller.addEventListener('click', onClick, true);
    return () => {
      scroller.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      scroller.removeEventListener('click', onClick, true);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-coffee-dark border-y border-white/5 py-16 sm:py-20">
      {/* cinematic texture + edge vignette */}
      <div className="pointer-events-none absolute inset-0 film-grain opacity-[0.06] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,transparent_55%,rgba(0,0,0,0.7)_100%)]" />

      {/* header */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span>◆</span> On Film
          </p>
          <h2 className="text-[34px] sm:text-[46px] font-serif text-cream leading-[1.05] tracking-[-0.02em]">
            Scenes from the table
          </h2>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-1.5 text-[10px] font-mono text-cream/35 tracking-[0.15em] uppercase pb-2">
          <span>Sound [Off]</span>
          <span>{films.length} Films · Drag to scroll →</span>
        </div>
      </div>

      {/* film strip */}
      <div
        ref={scrollerRef}
        className="relative flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-6 lg:px-10 pb-4 cursor-grab active:cursor-grabbing select-none"
      >
        {films.map((film, i) => (
          <figure
            key={i}
            ref={film.featured ? featuredRef : undefined}
            className={`group relative shrink-0 snap-center transition-transform duration-500 ${
              film.featured ? 'z-10 lg:-translate-y-3' : ''
            }`}
          >
            <div
              className={`relative overflow-hidden rounded-xl bg-black aspect-[9/16] ${
                film.featured
                  ? 'h-[420px] sm:h-[520px] lg:h-[600px] ring-2 ring-accent/40 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]'
                  : 'h-[300px] sm:h-[380px] lg:h-[440px] ring-1 ring-white/10 opacity-80 group-hover:opacity-100 transition-opacity'
              }`}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src={film.src}
                poster={film.poster}
                muted
                loop
                playsInline
                preload="metadata"
              />

              {/* legibility gradients */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

              {/* top label */}
              <figcaption className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-[0.18em] uppercase text-cream/70">
                  {film.cat}
                </span>
                {film.featured && (
                  <span className="text-[8px] font-mono tracking-[0.18em] uppercase text-accent px-2 py-0.5 rounded-full bg-accent/10 ring-1 ring-accent/30">
                    Featured
                  </span>
                )}
              </figcaption>

              {/* bottom label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <span
                  className={`font-serif text-cream leading-tight ${
                    film.featured ? 'text-[20px] sm:text-[24px]' : 'text-[15px] sm:text-[17px]'
                  }`}
                >
                  {film.place}
                </span>
                <span className="text-[9px] font-mono tracking-[0.15em] text-cream/45 pb-1">
                  {film.year}
                </span>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
