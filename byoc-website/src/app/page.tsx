'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin, Users, Globe, Calendar, ArrowRight, Coffee,
  ChevronRight, Play, Quote, Sparkles
} from 'lucide-react';
import { CoffeeCupDoodle, ChatBubbleDoodle, GlobeDoodle, PeopleDoodle, CoffeeBeansPattern } from '@/components/DoodleSVGs';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

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

const stats = [
  { number: '80+', label: 'Meetups Hosted', icon: Calendar },
  { number: '21+', label: 'Countries', icon: Globe },
  { number: '3,200+', label: 'Community Members', icon: Users },
  { number: '18+', label: 'City Chapters', icon: MapPin },
];

const testimonials = [
  {
    quote: "It felt real. No pitches, no agendas — just genuine human connection over coffee.",
    author: "Startup Founder",
    city: "San Francisco"
  },
  {
    quote: "I met people I would never meet otherwise. Conversations here go deeper than any conference.",
    author: "Tech Executive",
    city: "London"
  },
  {
    quote: "It didn't feel transactional. For the first time, networking felt like making friends.",
    author: "Investor",
    city: "Dubai"
  },
];

const values = [
  {
    title: 'No Stages',
    description: 'Everyone is equal. No keynotes, no panels — just conversations.',
    icon: '🎤',
  },
  {
    title: 'No Sponsors',
    description: 'Community-led, sponsor-independent. You buy your own coffee.',
    icon: '☕',
  },
  {
    title: 'No Agendas',
    description: 'Organic exchange of experience, perspective, and intent.',
    icon: '📋',
  },
  {
    title: 'No Pretense',
    description: 'Come as a human, not a title. Listen more than pitch.',
    icon: '🤝',
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <CoffeeBeansPattern className="absolute top-0 left-0 w-full h-full text-coffee-dark pointer-events-none" />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-6">
                <Sparkles size={16} />
                Active in 21+ countries
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-coffee-dark leading-[1.1] tracking-tight"
              >
                Where real
                <br />
                conversations
                <br />
                <span className="text-accent">start.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg text-muted max-w-lg leading-relaxed"
              >
                BYOC is the world&apos;s most authentic networking community. No stages. No sponsors. No agendas. Just humans, coffee, and conversations that matter.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-coffee-dark text-cream font-medium rounded-full hover:bg-coffee-medium transition-all hover:scale-105"
                >
                  Find a Meetup
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-coffee-dark/20 text-coffee-dark font-medium rounded-full hover:border-coffee-dark/40 transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Bento Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card rounded-3xl p-6 border border-card-border shadow-sm">
                <div className="text-4xl font-bold text-coffee-dark">80+</div>
                <div className="text-sm text-muted mt-1">Meetups Globally</div>
                <CoffeeCupDoodle className="w-16 h-16 text-accent/30 mt-3" />
              </div>
              <div className="bg-coffee-dark rounded-3xl p-6 text-cream">
                <div className="text-4xl font-bold">21+</div>
                <div className="text-sm text-cream/60 mt-1">Countries</div>
                <GlobeDoodle className="w-16 h-16 text-accent/40 mt-3" />
              </div>
              <div className="bg-accent/10 rounded-3xl p-6 border border-accent/20">
                <div className="text-4xl font-bold text-coffee-dark">3,200+</div>
                <div className="text-sm text-muted mt-1">Community Members</div>
                <PeopleDoodle className="w-24 h-12 text-accent/40 mt-3" />
              </div>
              <div className="bg-card rounded-3xl p-6 border border-card-border shadow-sm flex flex-col items-center justify-center text-center">
                <ChatBubbleDoodle className="w-16 h-16 text-coffee-medium/30 mb-2" />
                <div className="text-sm font-medium text-coffee-dark">Real Talk.</div>
                <div className="text-xs text-muted mt-1">No corporate theatrics</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ CITY MARQUEE ============ */}
      <section className="py-8 border-y border-card-border bg-cream overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-8">
          {[...chapters, ...chapters].map((ch, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm text-muted font-medium">
              <span>{ch.flag}</span>
              <span>{ch.city}</span>
              <span className="text-accent">•</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============ WHAT IS BYOC ============ */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              The Concept
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-coffee-dark">
              Networking, reimagined.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              We stripped away everything that makes networking feel forced. What&apos;s left is pure human connection — the way it should be.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-card rounded-2xl p-8 border border-card-border hover:border-accent/30 transition-all hover:shadow-lg group"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-coffee-dark mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ SHOWREEL ============ */}
      <section className="py-24 bg-coffee-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              See It In Action
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-cream">
              This is what BYOC looks like.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-coffee-medium/50 border border-cream/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer">
                  <Play size={32} className="text-cream ml-1" fill="currentColor" />
                </div>
                <p className="text-cream/60 text-sm">Watch the BYOC Showreel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ STATS BANNER ============ */}
      <section className="py-16 bg-cream border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-coffee-dark">{stat.number}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CHAPTERS PREVIEW ============ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                  Global Presence
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-coffee-dark">
                  Our Chapters
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-3 text-muted max-w-lg">
                  From Islamabad to San Francisco, Berlin to Doha — BYOC brings people together everywhere.
                </motion.p>
              </div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/chapters"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all mt-4 md:mt-0"
                >
                  View all chapters
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {chapters.map((ch) => (
                <motion.div
                  key={ch.city}
                  variants={fadeInUp}
                  className="bg-card rounded-xl p-4 border border-card-border hover:border-accent/30 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="text-2xl mb-2">{ch.flag}</div>
                  <div className="font-medium text-sm text-coffee-dark group-hover:text-accent transition-colors">{ch.city}</div>
                  <div className="text-xs text-muted">{ch.country}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">What People Say</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-coffee-dark">
                Voices from the community
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-card rounded-2xl p-8 border border-card-border relative"
                >
                  <Quote className="w-8 h-8 text-accent/20 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Coffee size={14} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-coffee-dark">{t.author}</div>
                      <div className="text-xs text-muted">{t.city}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Simple by Design</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-coffee-dark">How BYOC works</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Find a Meetup', desc: 'Browse upcoming BYOC gatherings in your city or explore chapters worldwide.' },
                { step: '02', title: 'Buy Your Own Coffee', desc: 'Show up, grab your drink, and come as you are — human first, title second.' },
                { step: '03', title: 'Connect & Grow', desc: 'Have real conversations. Build lasting relationships. Create opportunities together.' },
              ].map((item) => (
                <motion.div key={item.step} variants={fadeInUp} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-coffee-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ UPCOMING EVENTS PREVIEW ============ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                  Don&apos;t Miss Out
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-coffee-dark">
                  Upcoming Events
                </motion.h2>
              </div>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all mt-4 md:mt-0"
                >
                  View all events
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-card rounded-2xl border border-card-border overflow-hidden luma-embed-container"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ SOCIAL ============ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Follow The Journey
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-coffee-dark mb-4">
              @byoc.global
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted mb-8">
              Follow us on social media for community highlights, event recaps, and behind-the-scenes moments.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <a
                href="https://instagram.com/byoc.global"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-card-border rounded-full hover:border-accent/30 hover:shadow-md transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/byoc-global"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-card-border rounded-full hover:border-accent/30 hover:shadow-md transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 bg-coffee-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <CoffeeBeansPattern className="w-full h-full text-cream" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold text-cream mb-6">
              Ready to join the world&apos;s most
              <br />
              <span className="text-accent">authentic</span> community?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-cream/60 text-lg mb-8 max-w-2xl mx-auto">
              Find a meetup near you, or bring BYOC to your city. No applications, no fees — just show up and be yourself.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream font-medium rounded-full hover:bg-accent/90 transition-all hover:scale-105"
              >
                Find a Meetup
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/request-meetup"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cream/20 text-cream font-medium rounded-full hover:border-cream/40 transition-all"
              >
                Host in Your City
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
