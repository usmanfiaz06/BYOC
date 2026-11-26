'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RollButton from '@/components/ui/RollButton';
import { RiseWords } from '@/components/motion/Reveal';

// Waitlist for the members' platform. No backend yet: submission is simulated.

const field =
  'w-full border-b border-paper/50 bg-transparent py-3 font-display text-[clamp(20px,2vw,28px)] font-medium tracking-[-0.02em] text-paper placeholder:text-paper/45 focus:border-paper focus:outline-none';

export default function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  const nameOk = name.trim().length >= 2;
  const emailOk = /^\S+@\S+\.\S+$/.test(email.trim());

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (nameOk && emailOk) setDone(true);
  };

  return (
    <section id="waitlist" className="bg-cherry text-paper">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-4 py-16 sm:px-6 sm:py-32 lg:grid-cols-[1.15fr_1fr] lg:px-10">
        <div>
          <h2 className="font-display text-[clamp(44px,6.6vw,116px)] font-medium display-tight">
            <RiseWords text="The BYOC platform is coming." />
          </h2>
          <p className="mt-8 max-w-[46ch] text-[18px] leading-[1.6] text-paper/85 sm:text-[20px]">
            Between coffees, the conversation keeps going. One home for members in 21 countries: see who’s in your city this week, ask the people who’ve been there, and pick up where the last coffee left off.
          </p>
          <p className="mt-5 max-w-[46ch] text-[18px] leading-[1.6] text-paper/85 sm:text-[20px]">We’re opening it city by city. The waitlist goes first.</p>
        </div>

        <div className="self-end">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="font-display text-[clamp(32px,3.6vw,60px)] font-medium leading-[1] tracking-[-0.04em]">
                  You’re on the list, {name.trim().split(' ')[0]}.
                </p>
                <p className="mt-5 text-[18px] leading-[1.6] text-paper/85">We’ll email you when your city opens. Nothing before that.</p>
              </motion.div>
            ) : (
              <motion.form key="form" exit={{ opacity: 0 }} onSubmit={submit} noValidate className="space-y-6">
                <label className="block">
                  <span className="label text-paper/70">Name</span>
                  <input id="waitlist-name" className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
                  {touched && !nameOk && <span className="mt-2 block text-[14px] text-paper">Tell us your name.</span>}
                </label>
                <label className="block">
                  <span className="label text-paper/70">Email</span>
                  <input id="waitlist-email" type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" autoComplete="email" />
                  {touched && !emailOk && <span className="mt-2 block text-[14px] text-paper">An email we can reach you at.</span>}
                </label>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <RollButton type="submit" variant="light" size="lg">Join the waitlist</RollButton>
                  <span className="label text-paper/70">One email when it opens</span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
