'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Heart, Globe, Users, Coffee, MessageCircle, Lightbulb,
  ArrowRight, Shield, Zap, Target, Handshake
} from 'lucide-react';
import { CoffeeCupDoodle, GlobeDoodle, PeopleDoodle, HandshakeDoodle } from '@/components/DoodleSVGs';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const principles = [
  { icon: MessageCircle, title: 'Conversations create opportunities', desc: 'The best partnerships, ideas, and friendships start with a simple conversation.' },
  { icon: Heart, title: 'Trust builds in informal spaces', desc: 'Remove the formality, and people connect as humans — faster and deeper.' },
  { icon: Users, title: 'Quality over quantity', desc: 'A room of 30 right people beats a conference of 3,000 strangers.' },
  { icon: Lightbulb, title: 'Simplicity enables authenticity', desc: 'No scripts, no sponsors, no slides. Just real exchange of experience.' },
  { icon: Globe, title: 'Think beyond borders', desc: 'Your next collaborator might be in Doha, Dhaka, Dallas, or Dublin.' },
  { icon: Shield, title: 'Community cannot be forced', desc: 'It must be cultivated. Slowly, genuinely, one coffee at a time.' },
];

const whatWeRemoved = [
  'Stages & keynotes',
  'Panel discussions',
  'Formal agendas',
  'Sponsored messaging',
  'Corporate theatrics',
  'Name badge hierarchies',
];

const outcomes = [
  'Startup partnerships formed',
  'Hiring connections initiated',
  'Investment discussions started',
  'Policy dialogues shaped',
  'Cross-country collaborations explored',
  'New chapters launched',
  'Long-term friendships built',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                About BYOC
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl font-bold text-coffee-dark mb-6 leading-tight">
                Buy Your Own Coffee.
                <br />
                <span className="text-accent">Build Your Own Future.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-muted leading-relaxed max-w-lg">
                BYOC is a global networking community built around high-quality human conversations,
                meaningful connections, and cross-industry collaboration. It is not a conference, a pitch night,
                or a social mixer. It is a high-signal, low-noise environment where people meet as humans first.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card rounded-3xl p-8 border border-card-border flex flex-col items-center justify-center">
                <CoffeeCupDoodle className="w-20 h-20 text-accent/40" />
                <p className="text-sm text-muted mt-2 text-center">Buy your own</p>
              </div>
              <div className="bg-coffee-dark rounded-3xl p-8 flex flex-col items-center justify-center">
                <GlobeDoodle className="w-20 h-20 text-accent/50" />
                <p className="text-sm text-cream/60 mt-2 text-center">21+ countries</p>
              </div>
              <div className="bg-accent/10 rounded-3xl p-8 border border-accent/20 flex flex-col items-center justify-center">
                <PeopleDoodle className="w-28 h-16 text-accent/50" />
                <p className="text-sm text-muted mt-2 text-center">3,200+ members</p>
              </div>
              <div className="bg-card rounded-3xl p-8 border border-card-border flex flex-col items-center justify-center">
                <HandshakeDoodle className="w-24 h-16 text-coffee-medium/30" />
                <p className="text-sm text-muted mt-2 text-center">Real connections</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Coffee className="text-accent" size={28} />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-coffee-dark mb-6">
              Why &ldquo;Buy Your Own Coffee&rdquo;?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              It&apos;s both symbolic and practical. Buying your own coffee shows respect to host venues,
              maintains independence from sponsors, and reinforces the community&apos;s self-sustained nature.
              There are no free lunches here — and that&apos;s what makes it real.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What We Removed vs What We Keep */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-coffee-dark text-center mb-16">
              We removed everything that doesn&apos;t work.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Removed */}
              <motion.div variants={fadeInUp} className="bg-card rounded-2xl p-8 border border-card-border">
                <h3 className="text-lg font-semibold text-coffee-dark mb-6 flex items-center gap-2">
                  <span className="text-red-400">✕</span> What we removed
                </h3>
                <ul className="space-y-3">
                  {whatWeRemoved.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted">
                      <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-400 text-xs">✕</span>
                      <span className="line-through opacity-60">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What we keep */}
              <motion.div variants={fadeInUp} className="bg-coffee-dark rounded-2xl p-8 text-cream">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <span className="text-accent">✓</span> What remains
                </h3>
                <ul className="space-y-3">
                  {['Real conversations', 'Honest introductions', 'Organic connections', 'Cross-industry exchange', 'Mutual respect', 'Great coffee'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-cream/80">
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Our Beliefs</p>
              <h2 className="text-4xl font-bold text-coffee-dark">Core Principles</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p) => (
                <motion.div
                  key={p.title}
                  variants={fadeInUp}
                  className="bg-card rounded-2xl p-8 border border-card-border hover:border-accent/30 transition-all"
                >
                  <p.icon className="text-accent mb-4" size={24} />
                  <h3 className="text-md font-semibold text-coffee-dark mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Impact</p>
              <h2 className="text-4xl font-bold text-coffee-dark">What happens at BYOC</h2>
              <p className="text-muted mt-3 max-w-lg mx-auto">
                The most consistent feedback: &ldquo;It felt real.&rdquo;
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {outcomes.map((outcome) => (
                <motion.div
                  key={outcome}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 border border-card-border"
                >
                  <Zap size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-coffee-dark font-medium">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Intent */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">Beyond Networking</p>
              <h2 className="text-4xl font-bold text-coffee-dark">Strategic Intent</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { icon: Target, text: 'Elevate emerging market ecosystems globally' },
                { icon: Globe, text: 'Encourage founders to think beyond borders' },
                { icon: Handshake, text: 'Build bridges between private, public, and innovation sectors' },
                { icon: Lightbulb, text: 'Shift narrative from consumption to contribution' },
                { icon: Users, text: 'Enable informal diplomacy through founder relationships' },
              ].map((item) => (
                <motion.div
                  key={item.text}
                  variants={fadeInUp}
                  className="flex items-center gap-4 bg-card rounded-xl p-5 border border-card-border"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner CTA */}
      <section id="partner" className="py-24 bg-coffee-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-cream mb-4">
            Want to collaborate with BYOC?
          </h2>
          <p className="text-cream/60 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an ecosystem partner, venue host, or community leader — we&apos;d love to explore how we can build together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/request-meetup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-cream font-medium rounded-full hover:bg-accent/90 transition-all"
            >
              Host a Chapter
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:hello@byoc.global"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cream/20 text-cream font-medium rounded-full hover:border-cream/40 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
