'use client';

import { useState } from 'react';
import {
  Send, CheckCircle, User, Mail, Phone, MapPin,
  Briefcase, MessageSquare, ArrowLeft, Sparkles,
} from 'lucide-react';

// lucide-react in this project doesn't ship a LinkedIn glyph, so use a small
// inline mark for the input prefix.
function LinkedinMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.6h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.65 21 11 21 14.3V21h-4v-5.9c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21H9z" />
    </svg>
  );
}

// Curating the room is the whole point of BYOC, so the join form collects just
// enough signal to make a thoughtful decision — and nothing more.

const referralOptions = [
  'A friend or colleague',
  'Attended a gathering',
  'LinkedIn',
  'Instagram',
  'A current member',
  'Search / other',
];

const benefits = [
  { title: 'A vetted, cross-border network', desc: 'Founders, operators, and investors across 21+ countries — curated, not crowded.' },
  { title: 'An invitation to the table', desc: 'Get notified when a gathering lands in your city, and reserve your seat first.' },
  { title: 'The member forum', desc: 'Continue the conversation, share opportunities, and find collaborators between meetups.' },
];

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // LinkedIn identity check — mirrors the lightweight verification used in the
  // community forum so members are recognisable by a real profile.
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [linkedinName, setLinkedinName] = useState('');
  const [linkedinError, setLinkedinError] = useState('');
  const [linkedinLoading, setLinkedinLoading] = useState(false);

  // WhatsApp number — a soft validity check keeps the field forgiving while
  // still nudging people toward an internationally-dialable number.
  const [whatsapp, setWhatsapp] = useState('');
  const [whatsappTouched, setWhatsappTouched] = useState(false);

  const [why, setWhy] = useState('');

  const validateLinkedin = (url: string) =>
    /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/.test(url.trim());

  const handleLinkedinChange = (url: string) => {
    setLinkedinUrl(url);
    setLinkedinError('');
    setLinkedinName('');
    if (!url.trim()) return;
    if (!validateLinkedin(url)) {
      setLinkedinError('Enter a valid LinkedIn profile URL (linkedin.com/in/your-name)');
      return;
    }
    setLinkedinLoading(true);
    const match = url.match(/linkedin\.com\/in\/([\w-]+)/);
    if (match) {
      const name = match[1]
        .split('-')
        .filter((part) => !/^\d+$/.test(part))
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
      setTimeout(() => {
        setLinkedinName(name);
        setLinkedinLoading(false);
      }, 600);
    }
  };

  const whatsappValid = /^\+?[0-9\s-]{7,}$/.test(whatsapp.trim());
  const whatsappError = whatsappTouched && whatsapp.trim().length > 0 && !whatsappValid;

  const canSubmit = Boolean(linkedinName) && whatsappValid && why.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    // No backend yet — simulate the request so the experience feels complete.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setSubmitted(false);
    setLinkedinUrl('');
    setLinkedinName('');
    setWhatsapp('');
    setWhatsappTouched(false);
    setWhy('');
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-accent" />
          </div>
          <h2 className="text-[32px] font-serif text-coffee-dark mb-4 tracking-[-0.02em]">You&apos;re on the list.</h2>
          <p className="text-[14px] text-muted leading-[1.7] mb-8">
            Welcome to BYOC{linkedinName ? `, ${linkedinName.split(' ')[0]}` : ''}. We review every request personally to keep the rooms high-signal — expect to hear from us over WhatsApp soon with the next gathering near you.
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-3 bg-coffee-dark text-cream rounded-full text-[13px] font-medium hover:bg-coffee-medium transition-colors tracking-[0.04em] uppercase"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  const inputBase =
    'w-full bg-card border border-card-border rounded-xl text-[13px] py-3.5 transition-colors';

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card mb-6">
              <Sparkles size={12} className="text-accent" />
              <span className="text-[11px] text-muted tracking-[0.04em] uppercase">Membership is free · Curated</span>
            </div>
            <h1 className="text-[46px] sm:text-[58px] lg:text-[64px] font-serif leading-[1.04] tracking-[-0.03em] text-coffee-dark">
              Join the BYOC
              <br />
              <span className="italic">community.</span>
            </h1>
            <p className="mt-6 text-[15px] text-muted leading-[1.8]">
              Tell us a little about yourself. We curate every room by hand, so a few honest details go a long way — no résumés, no gatekeeping, just the right people finding each other.
            </p>
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
            {/* Form */}
            <div className="bg-card lg:bg-transparent rounded-2xl lg:rounded-none border lg:border-0 border-card-border p-6 sm:p-8 lg:p-0">
              <div className="flex items-center gap-4 mb-9">
                <h2 className="text-[20px] font-serif text-coffee-dark tracking-[-0.01em] whitespace-nowrap">Your details</h2>
                <div className="flex-1 h-px bg-card-border" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" required>
                    <InputIcon icon={<User size={15} />}>
                      <input type="text" required placeholder="Your name" className={`${inputBase} pl-10 pr-4`} />
                    </InputIcon>
                  </Field>
                  <Field label="Email" required>
                    <InputIcon icon={<Mail size={15} />}>
                      <input type="email" required placeholder="you@email.com" className={`${inputBase} pl-10 pr-4`} />
                    </InputIcon>
                  </Field>
                </div>

                {/* WhatsApp */}
                <Field label="WhatsApp number" required hint="Include your country code — this is how we'll send your invite.">
                  <InputIcon icon={<Phone size={15} />}>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      onBlur={() => setWhatsappTouched(true)}
                      placeholder="+92 300 1234567"
                      className={`${inputBase} pl-10 pr-4 ${whatsappError ? '!border-red-400/60' : whatsappValid ? '!border-accent/40' : ''}`}
                    />
                  </InputIcon>
                  {whatsappError && (
                    <p className="text-[11px] text-red-500/80 mt-1.5">Enter a valid phone number with country code.</p>
                  )}
                </Field>

                {/* LinkedIn */}
                <Field label="LinkedIn profile" required hint="Helps us recognise you — your profile stays private to the team.">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
                      <LinkedinMark size={15} />
                    </span>
                    <input
                      type="url"
                      required
                      value={linkedinUrl}
                      onChange={(e) => handleLinkedinChange(e.target.value)}
                      placeholder="https://linkedin.com/in/your-name"
                      className={`${inputBase} pl-10 pr-10 ${linkedinError ? '!border-red-400/60' : linkedinName ? '!border-accent/40' : ''}`}
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                      {linkedinLoading && <div className="w-4 h-4 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />}
                      {linkedinName && !linkedinLoading && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#C8802A" opacity="0.15" /><path d="M5 8l2 2 4-4" stroke="#C8802A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      )}
                    </div>
                  </div>
                  {linkedinError && <p className="text-[11px] text-red-500/80 mt-1.5">{linkedinError}</p>}
                  {linkedinName && !linkedinError && (
                    <div className="flex items-center gap-2 mt-2 px-3 py-2 bg-accent/5 rounded-lg border border-accent/10">
                      <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-[10px] font-medium text-accent">{linkedinName[0]}</div>
                      <span className="text-[12px] text-coffee-dark font-medium">{linkedinName}</span>
                      <span className="text-[10px] text-muted ml-auto">Verified via LinkedIn</span>
                    </div>
                  )}
                </Field>

                {/* Location */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="City" required>
                    <InputIcon icon={<MapPin size={15} />}>
                      <input type="text" required placeholder="Where you're based" className={`${inputBase} pl-10 pr-4`} />
                    </InputIcon>
                  </Field>
                  <Field label="Country" required>
                    <input type="text" required placeholder="Your country" className={`${inputBase} px-4`} />
                  </Field>
                </div>

                {/* What you do */}
                <Field label="What you do" required hint="A title and company, or a sentence — whatever describes you best.">
                  <InputIcon icon={<Briefcase size={15} />}>
                    <input type="text" required placeholder="e.g. Founder at Acme, building fintech for MENA" className={`${inputBase} pl-10 pr-4`} />
                  </InputIcon>
                </Field>

                {/* Why join */}
                <Field
                  label="Why do you want to join?"
                  required
                  hint={`${why.trim().length}/10 min characters — what are you hoping to find at the table?`}
                >
                  <div className="relative">
                    <span className="absolute left-3.5 top-4 text-muted pointer-events-none">
                      <MessageSquare size={15} />
                    </span>
                    <textarea
                      rows={4}
                      required
                      value={why}
                      onChange={(e) => setWhy(e.target.value)}
                      placeholder="Tell us what draws you to BYOC, what you're working on, and who you'd love to meet."
                      className={`${inputBase} pl-10 pr-4 resize-none`}
                    />
                  </div>
                </Field>

                {/* Referral */}
                <Field label="How did you hear about us?">
                  <select className={`${inputBase} px-4 text-muted`} defaultValue="">
                    <option value="" disabled>Select one</option>
                    {referralOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </Field>

                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-coffee-dark text-cream text-[13px] font-medium rounded-xl hover:bg-coffee-medium transition-colors tracking-[0.04em] uppercase disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <><div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" /> Submitting</>
                  ) : (
                    <><Send size={15} /> Request to join</>
                  )}
                </button>
                {!canSubmit && (
                  <p className="text-[10px] text-muted/50 text-center -mt-1">
                    Add your verified LinkedIn, a valid WhatsApp number, and a short note to continue.
                  </p>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-card rounded-2xl border border-card-border p-7">
                <div className="text-[10px] text-accent tracking-[0.15em] uppercase mb-6">What you&apos;re joining</div>
                <div className="space-y-6">
                  {benefits.map((b) => (
                    <div key={b.title}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-accent text-[7px]">◆</span>
                        <h3 className="text-[13px] font-medium text-coffee-dark tracking-[-0.01em]">{b.title}</h3>
                      </div>
                      <p className="text-[11px] text-muted leading-[1.6] pl-4">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-coffee-dark rounded-2xl p-7">
                <div className="flex -space-x-2 mb-5">
                  {['🇵🇰', '🇺🇸', '🇬🇧', '🇦🇪', '🇸🇬'].map((flag, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-coffee-medium border-2 border-coffee-dark flex items-center justify-center text-[13px]">{flag}</div>
                  ))}
                </div>
                <div className="text-[32px] font-serif text-accent leading-none tracking-[-0.02em] mb-2">3,200+</div>
                <div className="text-[11px] text-cream/40 tracking-[0.05em] uppercase mb-4">Members across 21+ countries</div>
                <p className="text-[12px] text-cream/50 leading-[1.6]">
                  Every member is reviewed by a human. We keep the rooms intentionally small so the conversations stay real.
                </p>
              </div>

              <a href="/events" className="flex items-center gap-2 text-[12px] text-muted hover:text-coffee-dark transition-colors tracking-[0.03em] uppercase px-1">
                <ArrowLeft size={14} /> Browse gatherings instead
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Small presentational helpers, kept local to this page ──────────────────

function Field({
  label, required, hint, children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
      {hint && <p className="text-[10px] text-muted/60 mt-1.5">{hint}</p>}
    </div>
  );
}

function InputIcon({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">{icon}</span>
      {children}
    </div>
  );
}
