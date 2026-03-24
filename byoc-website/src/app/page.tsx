'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const chapters = [
  { city: 'Islamabad', flag: '🇵🇰' }, { city: 'Lahore', flag: '🇵🇰' },
  { city: 'Riyadh', flag: '🇸🇦' }, { city: 'San Francisco', flag: '🇺🇸' },
  { city: 'London', flag: '🇬🇧' }, { city: 'Dublin', flag: '🇮🇪' },
  { city: 'Kuala Lumpur', flag: '🇲🇾' }, { city: 'Singapore', flag: '🇸🇬' },
  { city: 'Dhaka', flag: '🇧🇩' }, { city: 'Dallas', flag: '🇺🇸' },
  { city: 'Gilgit', flag: '🇵🇰' }, { city: 'Berlin', flag: '🇩🇪' },
  { city: 'Doha', flag: '🇶🇦' }, { city: 'Dubai', flag: '🇦🇪' },
  { city: 'Toronto', flag: '🇨🇦' }, { city: 'Nairobi', flag: '🇰🇪' },
  { city: 'Jakarta', flag: '🇮🇩' }, { city: 'Karachi', flag: '🇵🇰' },
];

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="min-h-[93vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 w-full">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-start">

            {/* LEFT — Copy */}
            <div className="lg:pt-8">
              <h1 className="text-[46px] sm:text-[58px] lg:text-[68px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
                The global table
                <br />
                where builders
                <br />
                <span className="italic">actually</span> meet
                <span className="inline-flex items-center gap-1.5 ml-3 align-middle">
                  <span className="inline-block w-7 h-7 rounded-full bg-accent" />
                  <span className="inline-block w-5 h-5 rotate-45 border-2 border-accent" />
                </span>
              </h1>

              <p className="mt-8 text-[15px] leading-[1.75] text-muted max-w-[480px]">
                BYOC convenes founders, operators, and investors across 21 countries for one purpose: unscripted conversation. No panels. No pitches. No sponsors. Just a coffee shop, the right people, and the space to be direct.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-coffee-dark text-cream text-[13px] font-medium rounded-full hover:bg-coffee-medium transition-colors tracking-[0.04em] uppercase"
                >
                  Find a gathering
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-card-border text-[13px] text-coffee-dark rounded-full hover:border-foreground/30 transition-colors bg-card tracking-[0.04em] uppercase"
                >
                  Our story
                  <div className="w-6 h-6 rounded-full bg-coffee-dark flex items-center justify-center">
                    <Play size={8} className="text-cream ml-0.5" fill="currentColor" />
                  </div>
                </Link>
              </div>

              {/* Stats Row */}
              <div className="mt-16 grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 border border-card-border">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent text-[11px]">◆</span>
                    <div className="flex-1 h-px bg-card-border" />
                  </div>
                  <div className="text-[38px] font-serif tracking-[-0.02em] text-coffee-dark leading-none">21+</div>
                  <div className="text-[11px] text-muted mt-2 leading-relaxed tracking-[0.03em] uppercase">
                    Countries — five continents, one format
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-card-border">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent text-[11px]">◆</span>
                    <div className="flex-1 h-px bg-card-border" />
                    <span className="text-[10px] px-2.5 py-1 rounded-full border border-card-border text-muted tracking-[0.05em] uppercase">vetted</span>
                  </div>
                  <div className="text-[38px] font-serif tracking-[-0.02em] text-coffee-dark leading-none">3,200</div>
                  <div className="text-[11px] text-muted mt-2 leading-relaxed tracking-[0.03em] uppercase">
                    Members — founders, operators, investors
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Bento Grid */}
            <div>
            {/* Mobile-only intro tagline */}
            <p className="lg:hidden text-[15px] text-muted leading-[1.7] mb-6">
              A global community where founders, investors, and operators meet over coffee — no stages, no sponsors, no agendas.
            </p>
            <div className="grid grid-cols-2 gap-3 auto-rows-min">

              {/* Card: 80+ Gatherings */}
              <div className="bg-card rounded-2xl p-6 border border-card-border">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[44px] font-serif tracking-[-0.02em] text-coffee-dark leading-none">80+</div>
                    <div className="text-[11px] text-muted mt-2 tracking-[0.05em] uppercase">Gatherings held</div>
                  </div>
                  <Link href="/events" className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center hover:bg-coffee-dark hover:border-coffee-dark hover:text-cream transition-colors">
                    <ArrowRight size={13} className="-rotate-45" />
                  </Link>
                </div>
              </div>

              {/* Card: Community */}
              <div className="bg-card rounded-2xl p-6 border border-card-border">
                <div className="flex items-center gap-1.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-[10px]">◆</span>
                  ))}
                  <span className="text-[11px] text-muted ml-1.5 tracking-[0.03em]">Curated</span>
                </div>
                <div className="flex -space-x-2 mb-3">
                  {['🇵🇰', '🇺🇸', '🇬🇧', '🇦🇪'].map((flag, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-cream-dark border-2 border-card flex items-center justify-center text-[13px]">
                      {flag}
                    </div>
                  ))}
                </div>
                <div className="text-[13px] font-medium text-coffee-dark tracking-[-0.01em]">Cross-border network</div>
                <div className="text-[11px] text-muted mt-0.5 leading-[1.5]">Practitioners who build, fund, and scale across markets</div>
              </div>

              {/* Card: Format */}
              <div className="bg-card rounded-2xl p-6 border border-card-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-[13px] font-medium text-coffee-dark tracking-[-0.01em] leading-tight">
                    The format
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full border border-card-border text-muted tracking-[0.08em] uppercase">Original</span>
                </div>
                <div className="space-y-2 mt-4">
                  {['No stages', 'No sponsors', 'No agendas', 'No pretense'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-accent text-[8px]">◆</span>
                      <span className="text-[11px] text-muted tracking-[0.02em]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card: Featured — tall */}
              <div className="bg-card rounded-2xl border border-card-border overflow-hidden row-span-2">
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted tracking-[0.08em] uppercase">Featured</span>
                    <span className="text-muted-light text-lg leading-none tracking-widest">···</span>
                  </div>
                </div>
                <div className="mx-3 aspect-[4/5] rounded-xl bg-coffee-dark flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coffee-dark/90" />
                  <div className="text-7xl opacity-20">☕</div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="text-[10px] text-cream/40 tracking-[0.1em] uppercase">Global Series</div>
                    <div className="text-[14px] font-serif text-cream mt-1 italic">The Founders&apos; Table</div>
                  </div>
                </div>
                <div className="p-5 pt-3">
                  <div className="text-[11px] text-muted leading-[1.6]">Intimate conversations between people building at the frontier</div>
                </div>
              </div>

              {/* Card: Next */}
              <div className="bg-card rounded-2xl p-6 border border-card-border">
                <div className="flex items-center justify-between text-[10px] text-muted tracking-[0.08em] uppercase mb-3">
                  <span>Next gathering</span>
                  <span className="text-accent">This week</span>
                </div>
                <div className="text-[38px] font-serif tracking-[-0.02em] text-coffee-dark leading-none">18:00</div>
                <div className="text-[11px] text-muted mt-1 tracking-[0.02em]">Islamabad — Saturday</div>
                <div className="flex gap-[3px] mt-5 items-end">
                  {[14, 20, 10, 24, 16, 28, 12, 22, 18, 26].map((h, i) => (
                    <div key={i} className="w-[3px] bg-coffee-dark/60 rounded-full" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-4 border-y border-card-border overflow-hidden">
        <div className="flex whitespace-nowrap gap-10 animate-marquee">
          {[...chapters, ...chapters, ...chapters].map((ch, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-[12px] text-muted/50 tracking-[0.05em] uppercase">
              <span className="text-[14px]">{ch.flag}</span>
              <span>{ch.city}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ===== THESIS ===== */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">The Thesis</p>
              <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                Most networking is theatre. We built the alternative.
              </h2>
            </div>
            <div className="lg:pt-6">
              <p className="text-[15px] text-muted leading-[1.8] mb-8">
                Conferences optimise for speaker lineups and sponsor logos. Happy hours optimise for headcount. Neither creates the conditions for the conversations that actually move careers, companies, and ideas forward.
              </p>
              <p className="text-[15px] text-muted leading-[1.8]">
                BYOC is a deliberate departure. We convene small groups of high-calibre practitioners — founders, investors, operators, policymakers — in coffee shops across 21 countries, with nothing on the agenda except the quality of the room.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {[
              { title: 'No Stages', desc: 'Hierarchy flattens over coffee. Every voice carries equal weight.' },
              { title: 'No Sponsors', desc: 'Independence is non-negotiable. The community funds itself.' },
              { title: 'No Agendas', desc: 'Structure kills serendipity. We let conversations find their own direction.' },
              { title: 'No Pretense', desc: 'Titles stay outside. What matters is what you think, not what you run.' },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-7 border border-card-border group hover:border-accent/40 transition-colors">
                <div className="text-[10px] text-accent tracking-[0.15em] uppercase mb-4">◆</div>
                <h3 className="text-[15px] font-medium text-coffee-dark mb-2 tracking-[-0.01em]">{v.title}</h3>
                <p className="text-[12px] text-muted leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5 text-center">The Process</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em] text-center mb-20">
            Three steps. No complexity.
          </h2>

          <div className="space-y-16">
            {[
              { step: '01', title: 'Find your city', desc: 'Browse active chapters across five continents. Each follows the same format — intimate, unstructured, high-signal.' },
              { step: '02', title: 'Show up as yourself', desc: 'Buy your own coffee. Sit down. No name badges, no elevator pitches, no breakout sessions. Just conversation.' },
              { step: '03', title: 'Build from there', desc: 'The best partnerships, hires, and investments start with trust. Trust starts with a real conversation over a good cup of coffee.' },
            ].map((item) => (
              <div key={item.step} className="grid grid-cols-[60px_1fr] gap-8 items-start">
                <div className="text-[32px] font-serif text-accent/30 leading-none pt-1">{item.step}</div>
                <div>
                  <h3 className="text-[18px] font-medium text-coffee-dark mb-2 tracking-[-0.01em]">{item.title}</h3>
                  <p className="text-[14px] text-muted leading-[1.75]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHAPTERS ===== */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Global Presence</p>
              <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                Active chapters
              </h2>
            </div>
            <Link href="/chapters" className="inline-flex items-center gap-2 text-[12px] text-accent font-medium tracking-[0.05em] uppercase hover:gap-3 transition-all mt-4 md:mt-0">
              View all <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {chapters.map((ch) => (
              <div key={ch.city} className="bg-card rounded-xl p-4 border border-card-border hover:border-accent/40 transition-colors cursor-pointer group text-center">
                <div className="text-xl mb-1.5">{ch.flag}</div>
                <div className="text-[12px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em]">{ch.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5 text-center">From the Room</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em] text-center mb-16">
            In their words.
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { quote: "The only networking event I've ever attended where nobody was performing. Just sharp, honest conversation between people who are actually building.", author: "Founder & CEO", city: "San Francisco" },
              { quote: "I've spent 15 years on the conference circuit. BYOC in 90 minutes delivered more meaningful connections than any $5,000 ticket ever did.", author: "Managing Partner, VC", city: "London" },
              { quote: "What struck me was the quality of the room. Policymakers, founders, investors — all at the same table, all listening to each other.", author: "Director of Strategy", city: "Dubai" },
            ].map((t, i) => (
              <div key={i} className="bg-background rounded-2xl p-8 border border-card-border">
                <div className="text-accent text-[11px] mb-6">◆</div>
                <p className="text-[14px] text-foreground leading-[1.75] mb-8 font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-card-border pt-4">
                  <div className="text-[12px] font-medium text-coffee-dark">{t.author}</div>
                  <div className="text-[11px] text-muted mt-0.5">{t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVENTS ===== */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Calendar</p>
              <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                Upcoming gatherings
              </h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-[12px] text-accent font-medium tracking-[0.05em] uppercase hover:gap-3 transition-all mt-4 md:mt-0">
              All events <ArrowRight size={13} />
            </Link>
          </div>

          <div className="bg-card rounded-2xl border border-card-border overflow-hidden luma-embed-container">
            <iframe
              src="https://luma.com/embed/calendar/cal-x5mKvnTRHwbEeV1/events"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 'none' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 bg-coffee-dark">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-6">Get Involved</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-cream leading-[1.08] tracking-[-0.02em] mb-7">
            The table is set. Your seat is waiting.
          </h2>
          <p className="text-cream/40 text-[14px] mb-10 leading-[1.75]">
            Whether you&apos;re a first-time founder or a seasoned operator, BYOC exists so that the people building the future can find each other. No gatekeeping. No fees.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/events" className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-cream text-[13px] font-medium rounded-full hover:bg-accent/90 transition-colors tracking-[0.04em] uppercase">
              Find a gathering <ArrowRight size={15} />
            </Link>
            <Link href="/request-meetup" className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/15 text-cream/60 text-[13px] font-medium rounded-full hover:border-cream/30 hover:text-cream transition-colors tracking-[0.04em] uppercase">
              Host in your city
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
