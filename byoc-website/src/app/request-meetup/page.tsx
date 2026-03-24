'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Send, Coffee, Users, CheckCircle, Globe, Heart } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function RequestMeetupPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-coffee-dark mb-4">Request Submitted!</h2>
          <p className="text-muted leading-relaxed mb-8">
            Thank you for your interest in hosting a BYOC meetup. Our team will review your request and get back to you soon.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-coffee-dark text-cream rounded-full font-medium hover:bg-coffee-medium transition-colors"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Bring BYOC to Your City
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl font-bold text-coffee-dark mb-4">
              Host a Meetup
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted max-w-2xl">
              Think your city needs a BYOC chapter? Tell us about it. All you need is a coffee spot,
              a passion for connecting people, and a desire to build community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-coffee-dark mb-8">
                Tell us about your city
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">LinkedIn Profile *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/johndoe"
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-coffee-dark mb-2">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your city"
                      className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coffee-dark mb-2">Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your country"
                      className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    What&apos;s the tech/startup scene like in your city?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the ecosystem..."
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Why do you want to bring BYOC to your city?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Share your motivation..."
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Do you have a venue in mind?
                  </label>
                  <input
                    type="text"
                    placeholder="Coffee shop, coworking space, etc."
                    className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-coffee-dark mb-2">
                    Estimated attendance for first meetup
                  </label>
                  <select className="w-full px-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent transition-colors">
                    <option value="">Select range</option>
                    <option value="10-20">10–20 people</option>
                    <option value="20-40">20–40 people</option>
                    <option value="40-60">40–60 people</option>
                    <option value="60+">60+ people</option>
                  </select>
                </motion.div>

                <motion.button
                  variants={fadeInUp}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-coffee-dark text-cream font-medium rounded-xl hover:bg-coffee-medium transition-all hover:scale-[1.02]"
                >
                  <Send size={18} />
                  Submit Request
                </motion.button>
              </form>
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-coffee-dark mb-8">
                What makes a great BYOC chapter?
              </motion.h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Coffee,
                    title: 'A great coffee spot',
                    desc: 'Find a venue that&apos;s warm, accessible, and has good coffee. The atmosphere matters more than the size.',
                  },
                  {
                    icon: Users,
                    title: 'A passionate host',
                    desc: 'You don&apos;t need to be a famous founder. You need to care about connecting people genuinely.',
                  },
                  {
                    icon: Heart,
                    title: 'Community-first mindset',
                    desc: 'BYOC is not about personal branding. It&apos;s about creating a space where others can shine.',
                  },
                  {
                    icon: Globe,
                    title: 'Diverse attendees',
                    desc: 'The magic of BYOC is mixing industries, experience levels, and backgrounds intentionally.',
                  },
                  {
                    icon: MapPin,
                    title: 'Local relevance',
                    desc: 'Every city has its own ecosystem. Bring BYOC energy to your local context.',
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-coffee-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current chapters count */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 bg-coffee-dark rounded-2xl p-8 text-cream"
              >
                <div className="text-4xl font-bold text-accent mb-2">21+</div>
                <div className="text-cream/60 text-sm mb-4">countries already have BYOC chapters</div>
                <p className="text-cream/80 text-sm leading-relaxed">
                  Join a growing network of community leaders building the world&apos;s most authentic networking experience, one city at a time.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
