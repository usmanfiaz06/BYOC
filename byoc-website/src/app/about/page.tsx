import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">About BYOC</p>
              <h1 className="text-[46px] sm:text-[58px] lg:text-[68px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
                Buy your own coffee.
                <br />
                <span className="italic">Build your own future.</span>
              </h1>
            </div>
            <div className="lg:pt-12">
              <p className="text-[15px] text-muted leading-[1.8] mb-6">
                BYOC is a global community built around a single conviction: the most consequential professional relationships begin with unstructured, honest conversation — not conferences, not pitch nights, not happy hours.
              </p>
              <p className="text-[15px] text-muted leading-[1.8]">
                We operate across 21 countries with a consistent format: small groups, carefully chosen venues, zero programming. The result is a high-signal, low-noise environment where founders meet investors without a deck between them, where operators exchange playbooks without an NDA, and where policymakers sit with practitioners without a podium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[720px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">The Name</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em] mb-8">
            Why &ldquo;Buy Your Own Coffee&rdquo;?
          </h2>
          <p className="text-[15px] text-muted leading-[1.8]">
            The name is the philosophy. Buying your own coffee signals independence from sponsors, respect for host venues, and a community that sustains itself by design. There are no free lunches at BYOC — and that constraint is what keeps the signal clean. When no one is selling, everyone is free to listen.
          </p>
        </div>
      </section>

      {/* What We Removed */}
      <section className="py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">The Design</p>
            <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
              We designed by subtraction.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 max-w-[1100px] mx-auto">
            {/* Removed — left card */}
            <div className="bg-card rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-10 lg:p-14 border border-card-border relative">
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-card-border/50 opacity-30" />
              <div className="absolute top-12 right-12 w-12 h-12 rounded-full border border-card-border/30 opacity-20" />
              <div className="text-[10px] text-muted/40 tracking-[0.2em] uppercase mb-10">Removed</div>
              <div className="space-y-6">
                {['Stages & keynotes', 'Panel discussions', 'Formal agendas', 'Sponsored messaging', 'Corporate theatrics', 'Forced introductions'].map((item, i) => (
                  <div key={item} className="flex items-center gap-4 group" style={{ opacity: 0.35 + (i * 0.02) }}>
                    <span className="text-[18px] text-muted/20 font-light">×</span>
                    <span className="text-[16px] lg:text-[18px] text-muted/60 line-through decoration-muted/20 font-serif">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Remains — right card */}
            <div className="bg-coffee-dark rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/5" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent/8" />
              <div className="text-[10px] text-accent tracking-[0.2em] uppercase mb-10">What Remains</div>
              <div className="space-y-6">
                {['Unfiltered conversation', 'Honest introductions', 'Organic connection', 'Cross-sector exchange', 'Mutual accountability', 'Exceptional coffee'].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="text-accent text-[10px]">◆</span>
                    <span className="text-[16px] lg:text-[18px] text-cream/80 font-serif">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5 text-center">Core Beliefs</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em] text-center mb-20">
            Six principles. Non-negotiable.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {[
              { title: 'Conversations create opportunities', desc: 'The partnerships, ideas, and friendships that define careers start with a simple, honest conversation — not a pitch.' },
              { title: 'Trust builds in informal spaces', desc: 'Remove the formality, and people connect as humans. Faster, deeper, and with far less posturing.' },
              { title: 'Quality over quantity', desc: 'Thirty right people in a room outperform three thousand strangers at a convention centre. Every time.' },
              { title: 'Simplicity enables authenticity', desc: 'No scripts, no schedules, no slides. The less structure we impose, the more real the exchange becomes.' },
              { title: 'Think beyond borders', desc: 'Your next collaborator might be in Doha, Dhaka, Dallas, or Dublin. Geography is a feature, not a constraint.' },
              { title: 'Community cannot be manufactured', desc: 'It must be cultivated — slowly, genuinely, one gathering at a time. There are no shortcuts.' },
            ].map((p) => (
              <div key={p.title} className="bg-background rounded-2xl p-7 border border-card-border">
                <div className="text-accent text-[10px] mb-5">◆</div>
                <h3 className="text-[15px] font-medium text-coffee-dark mb-3 tracking-[-0.01em]">{p.title}</h3>
                <p className="text-[12px] text-muted leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Impact</p>
              <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em]">
                What happens when the right people share a table.
              </h2>
              <p className="mt-6 text-[15px] text-muted leading-[1.8]">
                We don&apos;t track ROI in the traditional sense. But the outcomes speak for themselves — measured in partnerships formed, capital deployed, careers redirected, and friendships that outlast any deal.
              </p>
            </div>
            <div className="space-y-4 lg:pt-8">
              {[
                'Startup co-founder partnerships formed',
                'Series A+ investment conversations initiated',
                'Cross-border hiring pipelines created',
                'Policy dialogues influenced',
                'New chapters launched by members',
                'Multi-year professional friendships built',
              ].map((outcome) => (
                <div key={outcome} className="flex items-center gap-4 bg-card rounded-xl p-5 border border-card-border">
                  <span className="text-accent text-[8px]">◆</span>
                  <span className="text-[13px] text-coffee-dark font-medium tracking-[-0.01em]">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Intent */}
      <section className="py-28 bg-card border-y border-card-border">
        <div className="max-w-[720px] mx-auto px-6 lg:px-10">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5 text-center">Strategic Intent</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-coffee-dark leading-[1.08] tracking-[-0.02em] text-center mb-16">
            Beyond networking.
          </h2>

          <div className="space-y-6">
            {[
              'Elevate emerging-market ecosystems by connecting their builders to global capital and expertise',
              'Encourage founders to think beyond domestic markets from day one',
              'Bridge private sector innovation with public sector decision-making',
              'Shift the narrative from consumption to contribution',
              'Enable informal diplomacy through founder-to-founder relationships across borders',
            ].map((text) => (
              <div key={text} className="flex items-start gap-5">
                <span className="text-accent text-[8px] mt-2 flex-shrink-0">◆</span>
                <p className="text-[14px] text-foreground leading-[1.7]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="partner" className="py-28 bg-coffee-dark">
        <div className="max-w-[680px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-6">Collaborate</p>
          <h2 className="text-[42px] sm:text-[52px] font-serif text-cream leading-[1.08] tracking-[-0.02em] mb-7">
            Let&apos;s build together.
          </h2>
          <p className="text-cream/40 text-[14px] mb-10 leading-[1.75]">
            Whether you&apos;re an ecosystem partner, a venue host, or a community leader — we&apos;re interested in conversations about shared ambition.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/request-meetup" className="inline-flex items-center gap-3 px-7 py-3.5 bg-accent text-cream text-[13px] font-medium rounded-full hover:bg-accent/90 transition-colors tracking-[0.04em] uppercase">
              Host a chapter <ArrowRight size={15} />
            </Link>
            <a href="mailto:usman.fiaz@byoc.global" className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/15 text-cream/60 text-[13px] font-medium rounded-full hover:border-cream/30 hover:text-cream transition-colors tracking-[0.04em] uppercase">
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
