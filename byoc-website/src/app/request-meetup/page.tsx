'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function RequestMeetupPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-accent" />
          </div>
          <h2 className="text-[32px] font-serif text-coffee-dark mb-4 tracking-[-0.02em]">Request submitted.</h2>
          <p className="text-[14px] text-muted leading-[1.7] mb-8">
            Thank you for your interest in hosting a BYOC gathering. Our team will review your submission and respond within a few days.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-3 bg-coffee-dark text-cream rounded-full text-[13px] font-medium hover:bg-coffee-medium transition-colors tracking-[0.04em] uppercase"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[600px]">
            <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Start a Chapter</p>
            <h1 className="text-[46px] sm:text-[58px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
              Host a gathering.
            </h1>
            <p className="mt-6 text-[15px] text-muted leading-[1.8]">
              Think your city needs a BYOC chapter? We agree. All you need is a great coffee spot, the right instinct for curation, and a commitment to keeping things real.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16">
            {/* Form */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-[20px] font-serif text-coffee-dark tracking-[-0.01em]">Tell us about your city</h2>
                <div className="flex-1 h-px bg-card-border" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Your Name</label>
                    <input type="text" required placeholder="Full name" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Email</label>
                    <input type="email" required placeholder="you@company.com" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">LinkedIn Profile</label>
                  <input type="url" required placeholder="linkedin.com/in/..." className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">City</label>
                    <input type="text" required placeholder="Your city" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Country</label>
                    <input type="text" required placeholder="Your country" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Local ecosystem</label>
                  <textarea rows={3} placeholder="Describe the tech/startup landscape in your city..." className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px] resize-none" />
                </div>

                <div>
                  <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Why BYOC in your city?</label>
                  <textarea rows={3} placeholder="What gap would BYOC fill? Who would attend?" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px] resize-none" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Venue in mind?</label>
                    <input type="text" placeholder="Coffee shop, coworking, etc." className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Expected attendance</label>
                    <select className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px] text-muted">
                      <option value="">Select range</option>
                      <option value="10-20">10–20 people</option>
                      <option value="20-40">20–40 people</option>
                      <option value="40-60">40–60 people</option>
                      <option value="60+">60+</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-coffee-dark text-cream text-[13px] font-medium rounded-xl hover:bg-coffee-medium transition-colors tracking-[0.04em] uppercase mt-2">
                  <Send size={15} />
                  Submit request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card rounded-2xl border border-card-border p-7 mb-5">
                <div className="text-[10px] text-accent tracking-[0.15em] uppercase mb-6">What makes a great chapter</div>
                <div className="space-y-6">
                  {[
                    { title: 'A considered venue', desc: 'Warm, accessible, with good coffee. Atmosphere matters more than size.' },
                    { title: 'A thoughtful host', desc: 'You don\'t need to be famous. You need taste, follow-through, and genuine care for people.' },
                    { title: 'Community-first instinct', desc: 'BYOC is not a personal brand exercise. It\'s about creating space for others.' },
                    { title: 'Intentional curation', desc: 'The magic is in the mix — founders, operators, investors, policymakers, all at one table.' },
                    { title: 'Local context', desc: 'Every city has its own ecosystem. The best chapters are deeply rooted in theirs.' },
                  ].map((item) => (
                    <div key={item.title}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-accent text-[7px]">◆</span>
                        <h3 className="text-[13px] font-medium text-coffee-dark tracking-[-0.01em]">{item.title}</h3>
                      </div>
                      <p className="text-[11px] text-muted leading-[1.6] pl-4">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-coffee-dark rounded-2xl p-7">
                <div className="text-[38px] font-serif text-accent leading-none tracking-[-0.02em] mb-3">21+</div>
                <div className="text-[11px] text-cream/40 tracking-[0.05em] uppercase mb-4">Countries with active chapters</div>
                <p className="text-[12px] text-cream/50 leading-[1.6]">
                  Join a growing network of community leaders who believe the best professional relationships start with honest conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
