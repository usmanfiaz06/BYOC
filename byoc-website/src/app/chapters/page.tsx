'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

interface Chapter {
  city: string;
  country: string;
  flag: string;
  region: string;
  meetups: number;
  status: 'active' | 'growing' | 'launching';
  hosts?: string[];
}

const chapters: Chapter[] = [
  { city: 'Islamabad', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 15, status: 'active', hosts: ['Founding Chapter'] },
  { city: 'Lahore', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 8, status: 'active' },
  { city: 'Karachi', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 5, status: 'active' },
  { city: 'Gilgit', country: 'Pakistan', flag: '🇵🇰', region: 'South Asia', meetups: 3, status: 'growing' },
  { city: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East', meetups: 6, status: 'active' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', region: 'Middle East', meetups: 5, status: 'active' },
  { city: 'Doha', country: 'Qatar', flag: '🇶🇦', region: 'Middle East', meetups: 4, status: 'active' },
  { city: 'London', country: 'UK', flag: '🇬🇧', region: 'Europe', meetups: 6, status: 'active' },
  { city: 'Dublin', country: 'Ireland', flag: '🇮🇪', region: 'Europe', meetups: 4, status: 'active' },
  { city: 'Berlin', country: 'Germany', flag: '🇩🇪', region: 'Europe', meetups: 3, status: 'growing' },
  { city: 'San Francisco', country: 'USA', flag: '🇺🇸', region: 'North America', meetups: 5, status: 'active' },
  { city: 'Dallas', country: 'USA', flag: '🇺🇸', region: 'North America', meetups: 3, status: 'growing' },
  { city: 'Toronto', country: 'Canada', flag: '🇨🇦', region: 'North America', meetups: 3, status: 'growing' },
  { city: 'Kuala Lumpur', country: 'Malaysia', flag: '🇲🇾', region: 'Southeast Asia', meetups: 4, status: 'active' },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', region: 'Southeast Asia', meetups: 3, status: 'active' },
  { city: 'Jakarta', country: 'Indonesia', flag: '🇮🇩', region: 'Southeast Asia', meetups: 2, status: 'growing' },
  { city: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩', region: 'South Asia', meetups: 3, status: 'growing' },
  { city: 'Nairobi', country: 'Kenya', flag: '🇰🇪', region: 'Africa', meetups: 2, status: 'launching' },
];

const regions = ['South Asia', 'Middle East', 'Europe', 'North America', 'Southeast Asia', 'Africa'];

const statusColors = {
  active: 'bg-green-100 text-green-800 border-green-200',
  growing: 'bg-amber-100 text-amber-800 border-amber-200',
  launching: 'bg-blue-100 text-blue-800 border-blue-200',
};

const statusLabels = {
  active: 'Active',
  growing: 'Growing',
  launching: 'Launching',
};

export default function ChaptersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Global Presence
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl font-bold text-coffee-dark mb-4">
              Our Chapters
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted max-w-2xl">
              BYOC is active across 21+ countries with local chapters led by trusted community hosts.
              Each chapter carries the same DNA — real conversations, no pretense.
            </motion.p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { num: '21+', label: 'Countries' },
              { num: '18+', label: 'City Chapters' },
              { num: '80+', label: 'Meetups Hosted' },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="text-center bg-card rounded-2xl p-4 border border-card-border">
                <div className="text-2xl font-bold text-coffee-dark">{s.num}</div>
                <div className="text-xs text-muted">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Chapters by Region */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regions.map((region) => {
            const regionChapters = chapters.filter((c) => c.region === region);
            if (regionChapters.length === 0) return null;
            return (
              <motion.div
                key={region}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="mb-16"
              >
                <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-coffee-dark mb-6 flex items-center gap-3">
                  <MapPin className="text-accent" size={24} />
                  {region}
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionChapters.map((ch) => (
                    <motion.div
                      key={ch.city}
                      variants={fadeInUp}
                      className="bg-card rounded-2xl p-6 border border-card-border hover:border-accent/30 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{ch.flag}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-coffee-dark group-hover:text-accent transition-colors">
                              {ch.city}
                            </h3>
                            <p className="text-sm text-muted">{ch.country}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[ch.status]}`}>
                          {statusLabels[ch.status]}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {ch.meetups} meetups
                        </span>
                        {ch.hosts && (
                          <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                            {ch.hosts[0]}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-coffee-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-cream mb-4">
            Don&apos;t see your city?
          </h2>
          <p className="text-cream/60 text-lg mb-8">
            Bring BYOC to your city and become a chapter host. All you need is a coffee shop and a desire to connect people.
          </p>
          <Link
            href="/request-meetup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream font-medium rounded-full hover:bg-accent/90 transition-all hover:scale-105"
          >
            Request a Chapter
            <ExternalLink size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
