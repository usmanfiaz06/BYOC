'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, Pause, X } from 'lucide-react';

type Film = {
  src: string;
  poster: string;
  cat: string;
  place: string;
  year: string;
  featured?: boolean;
};

// Ordered so the featured headline film lands in the middle of the reel and
// the strip opens scrolled to it.
const films: Film[] = [
  { src: '/videos/singapore.mp4',    poster: '/videos/posters/singapore.jpg',    cat: 'Gathering', place: 'Singapore',      year: '2026' },
  { src: '/videos/dublin.mp4',       poster: '/videos/posters/dublin.jpg',       cat: 'Gathering', place: 'Dublin',         year: '2025' },
  { src: '/videos/experience.mp4',   poster: '/videos/posters/experience.jpg',   cat: 'Film',      place: 'The Experience', year: '2026' },
  { src: '/videos/riyadh.mp4',       poster: '/videos/posters/riyadh.jpg',       cat: 'Gathering', place: 'Riyadh',         year: '2025' },
  { src: '/videos/headline.mp4',     poster: '/videos/posters/headline.jpg',     cat: 'Feature',   place: 'BYOC',           year: '2026', featured: true },
  { src: '/videos/sanfrancisco.mp4', poster: '/videos/posters/sanfrancisco.jpg', cat: 'Gathering', place: 'San Francisco',  year: '2026' },
  { src: '/videos/kualalumpur.mp4',  poster: '/videos/posters/kualalumpur.jpg',  cat: 'Gathering', place: 'Kuala Lumpur',   year: '2025' },
  { src: '/videos/mayreel.mp4',      poster: '/videos/posters/mayreel.jpg',      cat: 'Film',      place: 'May Sessions',   year: '2026' },
  { src: '/videos/video2025.mp4',    poster: '/videos/posters/video2025.jpg',    cat: 'On Set',    place: 'In the Room',    year: '2025' },
];

const featuredIndex = films.findIndex((f) => f.featured);

// Viewfinder crop ticks in the four corners of a frame.
function CropTicks() {
  return (
    <div className="pointer-events-none absolute inset-2 z-10">
      <span className="absolute top-0 left-0 w-3 h-3 border-l border-t border-cream/40" />
      <span className="absolute top-0 right-0 w-3 h-3 border-r border-t border-cream/40" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-cream/40" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-cream/40" />
    </div>
  );
}

// Rule-of-thirds viewfinder grid + centre crosshair.
function ViewfinderGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      <div className="absolute inset-y-0 left-1/3 w-px bg-cream/15" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-cream/15" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-cream/15" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-cream/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-px bg-cream/30" />
        <div className="h-4 w-px bg-cream/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default function HeroFilmStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const lightboxVideoRef = useRef<HTMLVideoElement | null>(null);

  // Index of the non-featured frame currently playing inline (with sound).
  const [playing, setPlaying] = useState<number | null>(null);
  // Index of the frame "popped out" into the cinematic viewer (with sound).
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Open scrolled to the featured film, centred in the viewport.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const featured = featuredRef.current;
    if (!scroller || !featured) return;
    const left =
      featured.offsetLeft - (scroller.clientWidth - featured.clientWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: 'auto' });
  }, []);

  // The featured film runs muted as ambient motion while it's on screen and
  // not popped out. Nothing else autoplays.
  useEffect(() => {
    const v = videoRefs.current[featuredIndex];
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lightbox === null) {
          v.muted = true;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [lightbox]);

  // Lock scroll + close-on-Escape while the viewer is open.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  // Drag-to-scroll for the film-reel feel on desktop.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let down = false, startX = 0, startLeft = 0, moved = false;
    const onDown = (e: PointerEvent) => {
      down = true; moved = false;
      startX = e.clientX; startLeft = scroller.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      scroller.scrollLeft = startLeft - dx;
    };
    const onUp = () => { down = false; };
    const onClick = (e: MouseEvent) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    };
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

  // Non-featured frames: click toggles inline playback with sound, one at a time.
  const toggleInline = useCallback((i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    if (playing === i && !v.paused) {
      v.pause();
      setPlaying(null);
      return;
    }
    if (playing !== null && playing !== i) videoRefs.current[playing]?.pause();
    v.muted = false;
    v.play().catch(() => {});
    setPlaying(i);
  }, [playing]);

  // Featured frame "pops out": stop everything inline, open the viewer with sound.
  const openLightbox = useCallback((i: number) => {
    if (playing !== null) videoRefs.current[playing]?.pause();
    setPlaying(null);
    videoRefs.current[featuredIndex]?.pause();
    setLightbox(i);
  }, [playing]);

  // Force sound playback once the popped-out video mounts (the open click is the gesture).
  useEffect(() => {
    if (lightbox === null) return;
    const v = lightboxVideoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
  }, [lightbox]);

  const lb = lightbox === null ? null : films[lightbox];

  return (
    <section className="relative overflow-hidden bg-coffee-dark border-y border-white/5 py-16 sm:py-20">
      {/* cinematic texture + vignette */}
      <div className="pointer-events-none absolute inset-0 film-grain opacity-[0.06] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,transparent_55%,rgba(0,0,0,0.72)_100%)]" />

      {/* viewfinder: section corner brackets + faint rule-of-thirds */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <span className="absolute top-5 left-5 w-6 h-6 border-l-2 border-t-2 border-cream/20" />
        <span className="absolute top-5 right-5 w-6 h-6 border-r-2 border-t-2 border-cream/20" />
        <span className="absolute bottom-5 left-5 w-6 h-6 border-l-2 border-b-2 border-cream/20" />
        <span className="absolute bottom-5 right-5 w-6 h-6 border-r-2 border-b-2 border-cream/20" />
        <div className="absolute inset-y-0 left-1/3 w-px bg-cream/[0.04]" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-cream/[0.04]" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-cream/[0.04]" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-cream/[0.04]" />
      </div>

      {/* header / camera HUD */}
      <div className="relative z-[2] max-w-[1400px] mx-auto px-6 lg:px-10 mb-9 flex items-end justify-between gap-6">
        <div>
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span>◆</span> On Film
          </p>
          <h2 className="text-[34px] sm:text-[46px] font-serif text-cream leading-[1.05] tracking-[-0.02em]">
            Scenes from the table
          </h2>
        </div>
        <div className="hidden sm:flex flex-col items-end gap-2 text-[10px] font-mono text-cream/40 tracking-[0.15em] uppercase pb-2">
          <span className="flex items-center gap-1.5 text-cream/55">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0533D] animate-rec" /> Rec · 24 fps
          </span>
          <span>Kodak 5219 · 35mm</span>
          <span>Tap a frame to play ►</span>
        </div>
      </div>

      {/* film reel: sprocket bands bracket the scrolling row */}
      <div className="relative z-[2] border-y border-cream/10 bg-black/30">
        <div className="film-perfs h-[16px]" />
        <div
          ref={scrollerRef}
          className="relative flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-6 lg:px-10 py-6 cursor-grab active:cursor-grabbing select-none"
        >
          {films.map((film, i) => {
            const isFeatured = !!film.featured;
            const isPlaying = playing === i;
            const frameNo = String(i + 1).padStart(2, '0');
            return (
              <figure
                key={i}
                ref={isFeatured ? featuredRef : undefined}
                className={`group relative shrink-0 snap-center transition-transform duration-500 ${
                  isFeatured ? 'z-10 lg:-translate-y-3' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-[4px] bg-black aspect-[9/16] ${
                    isFeatured
                      ? 'h-[420px] sm:h-[520px] lg:h-[600px] ring-2 ring-accent/50 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]'
                      : 'h-[300px] sm:h-[380px] lg:h-[440px] ring-1 ring-cream/10'
                  }`}
                >
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                      isFeatured || isPlaying
                        ? 'saturate-100'
                        : 'saturate-[0.85] contrast-[1.05] opacity-85 group-hover:opacity-100'
                    }`}
                    src={film.src}
                    poster={film.poster}
                    loop={isFeatured}
                    muted={isFeatured}
                    playsInline
                    preload="metadata"
                    onEnded={() => { if (!isFeatured) setPlaying(null); }}
                  />

                  {/* legibility gradients */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45" />

                  <CropTicks />
                  {isFeatured && <ViewfinderGrid />}

                  {/* top row: category + frame number */}
                  <figcaption className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-[0.18em] uppercase text-cream/70">
                      {film.cat}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.12em] text-cream/45">
                      {isFeatured ? 'FEATURE' : `F-${frameNo}`}
                    </span>
                  </figcaption>

                  {/* play / pause control */}
                  <button
                    type="button"
                    onClick={() => (isFeatured ? openLightbox(i) : toggleInline(i))}
                    aria-label={
                      isFeatured
                        ? `Play ${film.place} with sound`
                        : isPlaying ? `Stop ${film.place}` : `Play ${film.place}`
                    }
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    <span
                      className={`flex flex-col items-center gap-2 transition-all duration-300 ${
                        isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                      }`}
                    >
                      <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/45 backdrop-blur-sm ring-1 ring-cream/30 flex items-center justify-center text-cream group-hover:scale-105 group-hover:ring-accent/60 transition-all">
                        {isPlaying
                          ? <Pause size={18} fill="currentColor" />
                          : <Play size={18} fill="currentColor" className="ml-0.5" />}
                      </span>
                      {isFeatured && !isPlaying && (
                        <span className="text-[8px] font-mono tracking-[0.18em] uppercase text-cream/70">
                          Play · Sound
                        </span>
                      )}
                    </span>
                  </button>

                  {/* bottom row: place + year */}
                  <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between">
                    <span
                      className={`font-serif text-cream leading-tight ${
                        isFeatured ? 'text-[20px] sm:text-[24px]' : 'text-[15px] sm:text-[17px]'
                      }`}
                    >
                      {film.place}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.15em] text-cream/50 pb-1">
                      {film.year}
                    </span>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
        <div className="film-perfs h-[16px]" />
      </div>

      {/* popped-out cinematic viewer (with sound) */}
      {lb && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          {/* viewfinder HUD */}
          <div className="pointer-events-none absolute inset-0">
            <span className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-cream/25" />
            <span className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-cream/25" />
            <span className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-cream/25" />
            <span className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-cream/25" />
          </div>
          <div className="absolute top-7 left-8 flex items-center gap-2 text-[10px] font-mono tracking-[0.18em] uppercase text-cream/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0533D] animate-rec" /> Rec
          </div>
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-7 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 ring-1 ring-cream/20 flex items-center justify-center text-cream transition-colors"
          >
            <X size={18} />
          </button>

          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <video
              ref={lightboxVideoRef}
              key={lb.src}
              className="max-h-[84vh] max-w-[92vw] w-auto h-auto rounded-[4px] ring-1 ring-cream/15"
              src={lb.src}
              poster={lb.poster}
              controls
              autoPlay
              playsInline
            />
            <ViewfinderGrid className="opacity-60" />
            <div className="pointer-events-none absolute -bottom-8 left-0 right-0 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-cream/45">
              <span className="text-cream/70">{lb.cat} — {lb.place}</span>
              <span>{lb.year}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
