'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RollButton from '@/components/ui/RollButton';
import { cities } from '@/data/cities';

// The form asks first what people want, then what they can give.
// No backend yet: submission is simulated so the experience is complete.

const sources = ['A friend or colleague', 'I came to a gathering', 'LinkedIn', 'Instagram', 'Somewhere else'];

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block border-b border-ink/25 pb-4 pt-6 focus-within:border-ink">
      <span className="label flex items-baseline justify-between gap-4 text-ink/60">
        {label}
        {hint && <span className="normal-case tracking-normal text-ink/40">{hint}</span>}
      </span>
      <div className="mt-3">{children}</div>
      {error && <p className="mt-2 text-[13px] text-cherry">{error}</p>}
    </label>
  );
}

const input =
  'w-full bg-transparent font-display text-[clamp(20px,1.8vw,26px)] font-medium tracking-[-0.02em] text-ink placeholder:text-ink/30 focus:outline-none';

export default function JoinPage() {
  const [name, setName] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [meet, setMeet] = useState('');
  const [give, setGive] = useState('');
  const [source, setSource] = useState('');
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const linkedinOk = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/.test(linkedin.trim());
  const whatsappOk = /^\+?[0-9\s-]{7,}$/.test(whatsapp.trim());
  const errors = {
    name: name.trim().length < 2 ? 'Tell us your name.' : '',
    linkedin: !linkedinOk ? 'A LinkedIn profile link, like linkedin.com/in/your-name' : '',
    whatsapp: !whatsappOk ? 'A number with country code, like +92 300 0000000' : '',
    city: !city ? 'Pick the city you’re in most weeks.' : '',
    building: building.trim().length < 3 ? 'A line is enough.' : '',
    meet: meet.trim().length < 3 ? 'A line is enough.' : '',
  };
  const valid = Object.values(errors).every((e) => !e);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  const err = (k: keyof typeof errors) => (touched ? errors[k] : '');

  return (
    <div className="mx-auto max-w-[1600px] px-4 pb-28 pt-14 sm:px-6 sm:pt-20 lg:px-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="done" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="min-h-[60vh]">
            <h1 className="max-w-[14ch] font-display text-[clamp(52px,8vw,140px)] font-medium text-ink display-tight">
              Thank you, {name.trim().split(' ')[0]}.
            </h1>
            <p className="mt-8 max-w-[40ch] font-display text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.2] tracking-[-0.025em] text-ink/80">
              A person will read this, not a filter. If there’s a fit, your invitation will arrive on WhatsApp before the next coffee in your city. <span className="text-cherry">Bring a question.</span>
            </p>
            <div className="mt-12">
              <RollButton href="/" variant="outline">Back to the homepage</RollButton>
            </div>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0 }} className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h1 className="font-display text-[clamp(52px,7.4vw,132px)] font-medium text-ink display-tight">Who would you like to meet?</h1>
              <p className="mt-8 max-w-[44ch] text-[18px] leading-[1.6] text-ink/75">
                BYOC is invite-only. Tell us a little, honestly. A person reads every request, usually within a week, and invitations go out city by city. The coffee is on you.
              </p>
              <ul className="mt-12 border-t border-ink">
                {['You’ll hear about gatherings in your city first.', 'Your number stays yours until you say yes.', 'Every introduction is one you asked for.'].map((t) => (
                  <li key={t} className="flex gap-4 border-b border-ink/20 py-4 text-[16px] text-ink/80">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-cherry" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={submit} noValidate>
              <Field label="Your name" error={err('name')}>
                <input className={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="First and last name" autoComplete="name" />
              </Field>
              <Field label="Who would you like to meet?" error={err('meet')}>
                <textarea rows={2} className={`${input} resize-none`} value={meet} onChange={(e) => setMeet(e.target.value)} placeholder="Someone who’s expanded a software company into Saudi Arabia." />
              </Field>
              <Field label="What are you building?" error={err('building')}>
                <textarea rows={2} className={`${input} resize-none`} value={building} onChange={(e) => setBuilding(e.target.value)} placeholder="A company, a team, a fund, a move. Whatever’s taking your time." />
              </Field>
              <Field label="What could you help someone with?" hint="Optional">
                <textarea rows={2} className={`${input} resize-none`} value={give} onChange={(e) => setGive(e.target.value)} placeholder="Hiring in Pakistan. Raising a seed round. A first board meeting." />
              </Field>
              <Field label="Where are you most weeks?" error={err('city')}>
                <select className={`${input} appearance-none`} value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Choose a city</option>
                  {cities.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}, {c.country}
                    </option>
                  ))}
                  <option value="Other">Somewhere else</option>
                </select>
              </Field>
              <div className="grid gap-x-8 sm:grid-cols-2">
                <Field label="LinkedIn" error={err('linkedin')}>
                  <input className={input} value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/…" inputMode="url" />
                </Field>
                <Field label="WhatsApp" error={err('whatsapp')}>
                  <input className={input} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+92 300 0000000" inputMode="tel" autoComplete="tel" />
                </Field>
              </div>
              <Field label="How did you hear about us?" hint="Optional">
                <div className="flex flex-wrap gap-2">
                  {sources.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSource(s === source ? '' : s)}
                      className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${source === s ? 'border-ink bg-ink text-paper' : 'border-ink/30 text-ink hover:border-ink'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </Field>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <RollButton type="submit" size="lg">{sending ? 'Sending…' : 'Request an invitation'}</RollButton>
                {touched && !valid && <span className="text-[14px] text-cherry">A few things above need a look.</span>}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
