import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const pastEvents = [
  { title: 'BYOC Islamabad', city: 'Islamabad', flag: '🇵🇰', date: 'March 2026', attendees: 45, tags: ['Founders', 'AI'] },
  { title: 'BYOC Riyadh', city: 'Riyadh', flag: '🇸🇦', date: 'February 2026', attendees: 35, tags: ['Investment'] },
  { title: 'BYOC London', city: 'London', flag: '🇬🇧', date: 'February 2026', attendees: 40, tags: ['Policy'] },
  { title: 'BYOC San Francisco', city: 'San Francisco', flag: '🇺🇸', date: 'January 2026', attendees: 30, tags: ['AI'] },
  { title: 'BYOC Dubai', city: 'Dubai', flag: '🇦🇪', date: 'January 2026', attendees: 50, tags: ['Cross-sector'] },
  { title: 'BYOC Kuala Lumpur', city: 'Kuala Lumpur', flag: '🇲🇾', date: 'December 2025', attendees: 25, tags: ['Community'] },
  { title: 'BYOC Singapore', city: 'Singapore', flag: '🇸🇬', date: 'November 2025', attendees: 28, tags: ['VC'] },
  { title: 'BYOC Berlin', city: 'Berlin', flag: '🇩🇪', date: 'October 2025', attendees: 22, tags: ['Design'] },
  { title: 'BYOC Lahore', city: 'Lahore', flag: '🇵🇰', date: 'October 2025', attendees: 38, tags: ['Tech'] },
];

export default function EventsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Gatherings</p>
              <h1 className="text-[46px] sm:text-[58px] lg:text-[68px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
                Every gathering
                <br />
                <span className="italic">is intentional.</span>
              </h1>
            </div>
            <div className="lg:pt-12">
              <p className="text-[15px] text-muted leading-[1.8]">
                BYOC gatherings are not events in the traditional sense. There are no registration pages with tiered pricing, no speaker lineups, no swag bags. Just a date, a coffee shop, and an invitation to show up as yourself. Browse what&apos;s coming up, or explore the archive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming — Luma */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h2 className="text-[28px] font-serif text-coffee-dark tracking-[-0.01em]">Upcoming Gatherings</h2>
            <div className="flex-1 h-px bg-card-border" />
          </div>

          <div className="bg-background rounded-2xl border border-card-border overflow-hidden luma-embed-container">
            <iframe
              src="https://luma.com/embed/calendar/cal-x5mKvnTRHwbEeV1/events"
              width="100%"
              height="600"
              frameBorder="0"
              style={{ border: 'none' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>

          <p className="text-[12px] text-muted mt-5 text-center tracking-[0.02em]">
            Gatherings are managed through Luma. Select any event above to register.
          </p>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Archive</p>
              <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                Invite-only. Intentionally small.
              </h2>
              <p className="mt-4 text-[15px] text-muted leading-[1.7]">Every gathering is capped, curated, and high-signal. 140+ intimate rooms across five continents — where the right people meet without the noise.</p>
            </div>
            <a
              href="https://luma.com/byoc-global?period=past"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] text-accent font-medium tracking-[0.05em] uppercase hover:gap-3 transition-all mt-4 md:mt-0"
            >
              Full archive <ArrowRight size={13} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, i) => (
              <div key={i} className="bg-card rounded-2xl border border-card-border p-6 hover:border-accent/40 transition-colors group">
                <div className="text-[11px] text-muted tracking-[0.05em] uppercase mb-4">{event.date}</div>
                <h3 className="text-[15px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em] mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-[12px] text-muted mb-5">
                  <span>{event.flag}</span>
                  <span>{event.city}</span>
                </div>
                <div className="flex items-center justify-between border-t border-card-border pt-4">
                  <span className="text-[11px] text-muted">{event.attendees} attendees</span>
                  <div className="flex gap-1.5">
                    {event.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-card-border text-muted tracking-[0.03em]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-coffee-dark">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-6">Host</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-cream leading-[1.08] tracking-[-0.02em] mb-7">
            The best gathering is the one you convene.
          </h2>
          <p className="text-cream/40 text-[14px] mb-10 leading-[1.75]">
            A great coffee spot and a commitment to creating space for honest conversation. That&apos;s the entire playbook.
          </p>
          <Link href="/request-meetup" className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-cream text-[13px] font-medium rounded-full hover:bg-accent/90 transition-colors tracking-[0.04em] uppercase">
            Host a gathering <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
