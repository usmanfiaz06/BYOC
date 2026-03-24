'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ExternalLink, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const pastEvents = [
  {
    title: 'BYOC Islamabad #15',
    city: 'Islamabad',
    country: 'Pakistan',
    flag: '🇵🇰',
    date: 'March 2026',
    attendees: 45,
    tags: ['Founders', 'Tech', 'AI'],
  },
  {
    title: 'BYOC Riyadh #6',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    date: 'February 2026',
    attendees: 35,
    tags: ['Startups', 'Investment'],
  },
  {
    title: 'BYOC London #6',
    city: 'London',
    country: 'UK',
    flag: '🇬🇧',
    date: 'February 2026',
    attendees: 40,
    tags: ['Tech', 'Policy'],
  },
  {
    title: 'BYOC San Francisco #5',
    city: 'San Francisco',
    country: 'USA',
    flag: '🇺🇸',
    date: 'January 2026',
    attendees: 30,
    tags: ['AI', 'Founders'],
  },
  {
    title: 'BYOC Dubai #5',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    date: 'January 2026',
    attendees: 50,
    tags: ['Cross-industry', 'Investment'],
  },
  {
    title: 'BYOC Kuala Lumpur #4',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    flag: '🇲🇾',
    date: 'December 2025',
    attendees: 25,
    tags: ['Founders', 'Community'],
  },
  {
    title: 'BYOC Singapore #3',
    city: 'Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    date: 'November 2025',
    attendees: 28,
    tags: ['Tech', 'VC'],
  },
  {
    title: 'BYOC Berlin #3',
    city: 'Berlin',
    country: 'Germany',
    flag: '🇩🇪',
    date: 'October 2025',
    attendees: 22,
    tags: ['Startups', 'Design'],
  },
  {
    title: 'BYOC Lahore #8',
    city: 'Lahore',
    country: 'Pakistan',
    flag: '🇵🇰',
    date: 'October 2025',
    attendees: 38,
    tags: ['Founders', 'Tech'],
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Gatherings Worldwide
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl font-bold text-coffee-dark mb-4">
              Events
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted max-w-2xl">
              Join an upcoming BYOC meetup or browse past events from around the world.
              Every gathering is a chance to make real connections.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events — Luma Embed */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <h2 className="text-3xl font-bold text-coffee-dark">Upcoming Events</h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-2xl border border-card-border overflow-hidden shadow-sm luma-embed-container"
            >
              <iframe
                src="https://luma.com/embed/calendar/cal-x5mKvnTRHwbEeV1/events"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ border: 'none', borderRadius: '12px' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-muted mt-4 text-center">
              Events are managed through Luma. Click on any event above to register.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Archive</p>
                <h2 className="text-3xl font-bold text-coffee-dark">Past Events</h2>
                <p className="text-muted mt-2">A look back at 80+ meetups that brought people together.</p>
              </div>
              <a
                href="https://luma.com/byoc-global?period=past"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all mt-4 md:mt-0"
              >
                View all on Luma
                <ExternalLink size={16} />
              </a>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-card rounded-2xl border border-card-border overflow-hidden hover:shadow-lg transition-all group"
                >
                  {/* Event color header */}
                  <div className="h-2 bg-gradient-to-r from-accent to-coffee-medium" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted mb-3">
                      <Clock size={14} />
                      {event.date}
                    </div>
                    <h3 className="text-lg font-semibold text-coffee-dark group-hover:text-accent transition-colors mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted mb-4">
                      <span>{event.flag}</span>
                      <span>{event.city}, {event.country}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted">
                        <Users size={14} />
                        {event.attendees} attendees
                      </div>
                      <div className="flex gap-1">
                        {event.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-coffee-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-cream mb-4">
            Want to host a BYOC meetup?
          </h2>
          <p className="text-cream/60 text-lg mb-8">
            All you need is a great coffee spot and a passion for connecting people.
          </p>
          <Link
            href="/request-meetup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream font-medium rounded-full hover:bg-accent/90 transition-all hover:scale-105"
          >
            Host a Meetup
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
