'use client';

import Link from 'next/link';
import { ArrowRight, Play, ChevronRight, Quote, Coffee } from 'lucide-react';

const chapters = [
  { city: 'Islamabad', country: 'Pakistan', flag: '🇵🇰' },
  { city: 'Lahore', country: 'Pakistan', flag: '🇵🇰' },
  { city: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦' },
  { city: 'San Francisco', country: 'USA', flag: '🇺🇸' },
  { city: 'London', country: 'UK', flag: '🇬🇧' },
  { city: 'Dublin', country: 'Ireland', flag: '🇮🇪' },
  { city: 'Kuala Lumpur', country: 'Malaysia', flag: '🇲🇾' },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬' },
  { city: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩' },
  { city: 'Dallas', country: 'USA', flag: '🇺🇸' },
  { city: 'Gilgit', country: 'Pakistan', flag: '🇵🇰' },
  { city: 'Berlin', country: 'Germany', flag: '🇩🇪' },
  { city: 'Doha', country: 'Qatar', flag: '🇶🇦' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪' },
  { city: 'Toronto', country: 'Canada', flag: '🇨🇦' },
  { city: 'Nairobi', country: 'Kenya', flag: '🇰🇪' },
  { city: 'Jakarta', country: 'Indonesia', flag: '🇮🇩' },
  { city: 'Karachi', country: 'Pakistan', flag: '🇵🇰' },
];

const testimonials = [
  {
    quote: "The most refreshing networking experience I've ever had. No elevator pitches — just real human beings.",
    author: "Startup Founder",
    city: "San Francisco"
  },
  {
    quote: "I've attended hundreds of events. BYOC is the only one where I made genuine friends, not contacts.",
    author: "Tech Executive",
    city: "London"
  },
  {
    quote: "It didn't feel transactional. For the first time, networking felt like making friends.",
    author: "Investor",
    city: "Dubai"
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* ============ HERO — BENTO LAYOUT ============ */}
      <section className="min-h-[92vh] flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 w-full">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">

            {/* Left: Bento Grid */}
            <div className="grid grid-cols-2 gap-3 auto-rows-min">

              {/* Card: 80+ Meetups */}
              <div className="bg-card rounded-2xl p-5 border border-card-border">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[42px] font-light tracking-tight text-coffee-dark leading-none">80+</div>
                    <div className="text-[13px] text-muted mt-2 tracking-wide uppercase">Meetups hosted</div>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-card-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-cream transition-colors cursor-pointer">
                    <ArrowRight size={14} className="-rotate-45" />
                  </div>
                </div>
              </div>

              {/* Card: Curated Community */}
              <div className="bg-card rounded-2xl p-5 border border-card-border">
                <div className="flex items-center gap-1.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-[11px]">◆</span>
                  ))}
                  <span className="text-[12px] text-muted ml-1.5 tracking-wide">Curated</span>
                </div>
                <div className="flex -space-x-2 mt-3 mb-3">
                  {['🇵🇰', '🇺🇸', '🇬🇧', '🇦🇪'].map((flag, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-cream-dark border-2 border-card flex items-center justify-center text-sm">
                      {flag}
                    </div>
                  ))}
                </div>
                <div className="text-[14px] font-medium text-coffee-dark tracking-tight">Invite-only circles</div>
                <div className="text-[11px] text-muted mt-0.5 leading-relaxed">Founders, investors &amp; builders across 21+ countries</div>
              </div>

              {/* Card: The Ethos */}
              <div className="bg-card rounded-2xl p-5 border border-card-border">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-[14px] font-medium text-coffee-dark leading-tight tracking-tight">
                    The BYOC<br />ethos
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium uppercase tracking-wider">exclusive</span>
                </div>
                <div className="text-[11px] text-muted leading-relaxed">
                  No Stages. No Sponsors.<br />No Agendas. No Pretense.
                </div>
                <div className="mt-4 pt-3 border-t border-card-border">
                  <div className="text-[11px] text-muted uppercase tracking-widest">Entry</div>
                  <div className="text-[20px] font-light text-coffee-dark tracking-tight">By invitation</div>
                </div>
              </div>

              {/* Card: Featured — tall */}
              <div className="bg-card rounded-2xl border border-card-border overflow-hidden row-span-2">
                <div className="p-4 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted uppercase tracking-widest">Featured</span>
                    <span className="text-muted-light text-lg leading-none">···</span>
                  </div>
                </div>
                <div className="mx-3 aspect-[4/5] rounded-xl bg-coffee-dark flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/0 via-coffee-dark/0 to-coffee-dark/80" />
                  <div className="text-7xl opacity-30">☕</div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[12px] text-cream/50 uppercase tracking-widest">Global Series</div>
                    <div className="text-[15px] font-medium text-cream mt-0.5">The Founders&apos; Table</div>
                  </div>
                </div>
                <div className="p-4 pt-3">
                  <div className="text-[13px] text-muted leading-relaxed">Intimate, curated conversations with exceptional people</div>
                </div>
              </div>

              {/* Card: Next Gathering */}
              <div className="bg-card rounded-2xl p-5 border border-card-border">
                <div className="flex items-center justify-between text-[11px] text-muted uppercase tracking-widest mb-3">
                  <span>Next gathering</span>
                  <span className="text-accent">Live</span>
                </div>
                <div className="text-[36px] font-light tracking-tight text-coffee-dark leading-none">18:00</div>
                <div className="text-[11px] text-muted mt-1.5 tracking-wide uppercase">This Saturday</div>
                <div className="flex gap-[3px] mt-4">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-[3px] bg-coffee-dark/70 rounded-full" style={{ height: `${8 + Math.sin(i * 0.8) * 12 + 12}px` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Hero Text */}
            <div className="lg:pt-6">
              <h1 className="text-[44px] sm:text-[56px] lg:text-[66px] font-serif leading-[1.06] tracking-[-0.02em] text-coffee-dark">
                Intimate gatherings for exceptional
                {' '}people
                <span className="inline-flex items-center gap-1.5 ml-3 align-middle">
                  <span className="inline-block w-8 h-8 rounded-full bg-accent" />
                  <span className="inline-block w-6 h-6 rotate-45 border-2 border-accent" />
                </span>
              </h1>

              <p className="mt-7 text-[15px] leading-[1.7] text-muted max-w-[500px]">
                BYOC curates invite-only gatherings across 21+ countries where founders, investors, and builders connect through unfiltered conversation — no stages, no sponsors, no pretense. Just coffee and the people who are shaping what comes next.
              </p>

              <div className="mt-9 flex items-center gap-3">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-coffee-dark text-cream text-[13px] font-medium rounded-full hover:bg-coffee-medium transition-colors tracking-wide uppercase"
                >
                  Request invite
                  <ArrowRight size={15} />
                </Link>
                <button className="inline-flex items-center gap-2.5 px-5 py-3.5 border border-card-border text-[13px] text-coffee-dark rounded-full hover:border-foreground/30 transition-colors bg-card tracking-wide uppercase">
                  Watch film
                  <div className="w-7 h-7 rounded-full bg-coffee-dark flex items-center justify-center">
                    <Play size={9} className="text-cream ml-0.5" fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Stats Row */}
              <div className="mt-14 grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 border border-card-border">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent">◆</span>
                    <div className="flex-1 h-px bg-card-border" />
                  </div>
                  <div className="text-[36px] font-light tracking-tight text-coffee-dark leading-none">21+</div>
                  <div className="text-[12px] text-muted mt-2 leading-relaxed">
                    Countries — from San Francisco to Singapore, Nairobi to Berlin
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-card-border">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent">◆</span>
                    <div className="flex-1 h-px bg-card-border" />
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-card-border text-muted uppercase tracking-wider">elite</span>
                  </div>
                  <div className="text-[36px] font-light tracking-tight text-coffee-dark leading-none">3.2k</div>
                  <div className="text-[12px] text-muted mt-2 leading-relaxed">
                    Vetted members — founders, operators, and investors worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE DIVIDER ============ */}
      <section className="py-5 border-y border-card-border overflow-hidden">
        <div className="flex whitespace-nowrap gap-8 animate-marquee">
          {[...chapters, ...chapters, ...chapters].map((ch, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-[13px] text-muted/60 tracking-wide">
              <span>{ch.flag}</span>
              <span className="uppercase">{ch.city}</span>
              <span className="text-accent/40">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-4">The Philosophy</p>
            <h2 className="text-[40px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
              Networking, stripped bare.
            </h2>
            <p className="mt-5 text-[15px] text-muted max-w-xl mx-auto leading-[1.7]">
              We removed everything that makes networking performative. What remains is rare and real.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'No Stages', desc: 'Everyone sits at the same table. No keynotes, no panels — just eye-level conversations.', icon: '—' },
              { title: 'No Sponsors', desc: 'Entirely community-funded. You buy your own coffee. That\'s the whole model.', icon: '—' },
              { title: 'No Agendas', desc: 'No schedules, no forced networking. Just organic, serendipitous exchange.', icon: '—' },
              { title: 'No Pretense', desc: 'Come as a person, not a pitch deck. Titles stay at the door.', icon: '—' },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-2xl p-7 border border-card-border hover:border-accent/40 transition-all group"
              >
                <div className="text-accent text-[20px] font-light mb-4">{v.icon}</div>
                <h3 className="text-[15px] font-medium text-coffee-dark mb-2 tracking-tight">{v.title}</h3>
                <p className="text-[12px] text-muted leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-24 bg-card border-y border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-4">The Process</p>
            <h2 className="text-[40px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
              Intentionally simple.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Get Invited', desc: 'Request an invitation or get referred by an existing member. We keep gatherings intentionally intimate.' },
              { step: '02', title: 'Show Up', desc: 'Buy your own coffee. Come as you are — curious, open, and ready for real conversation.' },
              { step: '03', title: 'Connect Deeply', desc: 'No small talk. No pitching. Just meaningful exchange between people who are building things that matter.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <div className="w-14 h-14 rounded-full border border-card-border flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent font-light text-[15px]">{item.step}</span>
                </div>
                <h3 className="text-[15px] font-medium text-coffee-dark mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[12px] text-muted leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHAPTERS ============ */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-4">Global Presence</p>
              <h2 className="text-[40px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                Active chapters
              </h2>
              <p className="mt-3 text-[15px] text-muted max-w-lg leading-[1.7]">
                From Islamabad to San Francisco, Berlin to Doha — curated gatherings across every continent.
              </p>
            </div>
            <Link
              href="/chapters"
              className="inline-flex items-center gap-2 text-accent text-[13px] font-medium hover:gap-3 transition-all mt-4 md:mt-0 uppercase tracking-wide"
            >
              View all
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {chapters.map((ch) => (
              <div
                key={ch.city}
                className="bg-card rounded-xl p-4 border border-card-border hover:border-accent/40 transition-all cursor-pointer group"
              >
                <div className="text-xl mb-2">{ch.flag}</div>
                <div className="text-[13px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-tight">{ch.city}</div>
                <div className="text-[11px] text-muted">{ch.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 bg-card border-y border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="text-[40px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
              In their words.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-7 border border-card-border"
              >
                <Quote className="w-5 h-5 text-accent/30 mb-5" />
                <p className="text-[14px] text-foreground leading-[1.7] mb-7 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Coffee size={13} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-coffee-dark">{t.author}</div>
                    <div className="text-[11px] text-muted">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EVENTS ============ */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-4">Upcoming</p>
              <h2 className="text-[40px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                Next gatherings
              </h2>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-accent text-[13px] font-medium hover:gap-3 transition-all mt-4 md:mt-0 uppercase tracking-wide"
            >
              All events
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="bg-card rounded-2xl border border-card-border overflow-hidden luma-embed-container">
            <iframe
              src="https://luma.com/embed/calendar/cal-x5mKvnTRHwbEeV1/events"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 'none', borderRadius: '12px' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 bg-coffee-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium text-accent uppercase tracking-[0.2em] mb-6">Join Us</p>
          <h2 className="text-[40px] sm:text-[52px] font-serif text-cream leading-[1.08] tracking-[-0.02em] mb-7">
            Ready to pull up a chair?
          </h2>
          <p className="text-cream/40 text-[14px] mb-10 max-w-lg mx-auto leading-[1.7]">
            Request an invitation to your city&apos;s next gathering, or bring BYOC to a city near you. The only requirement is showing up as yourself.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-cream text-[13px] font-medium rounded-full hover:bg-accent/90 transition-colors uppercase tracking-wide"
            >
              Request invite
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/request-meetup"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/15 text-cream/70 text-[13px] font-medium rounded-full hover:border-cream/30 hover:text-cream transition-colors uppercase tracking-wide"
            >
              Host a gathering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
