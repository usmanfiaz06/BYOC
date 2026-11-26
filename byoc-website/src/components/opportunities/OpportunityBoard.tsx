'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { opportunities, type OpportunityCategory } from '@/data/opportunities';

const tabs: { key: OpportunityCategory; label: string; blurb: string }[] = [
  { key: 'roles', label: 'Senior roles', blurb: 'Director, VP, Head of and C-level roles in the cities where we meet.' },
  { key: 'founders', label: 'For founders', blurb: 'Accelerators, grants and open calls with real deadlines.' },
  { key: 'executives', label: 'For executives', blurb: 'Board seats, fellowships and investor programmes.' },
  { key: 'funding', label: 'Funding news', blurb: 'Who just raised in the cities where we meet, and new funds now investing.' },
];


export default function OpportunityBoard({ limit, showSearch = false }: { limit?: number; showSearch?: boolean }) {
  const [tab, setTab] = useState<OpportunityCategory>('roles');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const filtered = opportunities.filter(
      (o) => o.category === tab && (!needle || `${o.title} ${o.org} ${o.location} ${o.summary}`.toLowerCase().includes(needle)),
    );
    return limit ? filtered.slice(0, limit) : filtered;
  }, [tab, q, limit]);

  const counts = useMemo(
    () => Object.fromEntries(tabs.map((t) => [t.key, opportunities.filter((o) => o.category === t.key).length])) as Record<OpportunityCategory, number>,
    [],
  );

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={`relative rounded-full px-5 py-2.5 text-[14px] font-medium tracking-[-0.01em] transition-colors ${tab === t.key ? 'text-paper' : 'text-espresso hover:bg-espresso/5'}`}
            >
              {tab === t.key && <motion.span layoutId="opp-tab" className="absolute inset-0 rounded-full bg-espresso" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span className="relative">
                {t.label} <span className="opacity-60">{counts[t.key]}</span>
              </span>
            </button>
          ))}
        </div>
        {showSearch && (
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a city, company or role"
            className="w-full rounded-full border border-espresso/25 bg-paper px-5 py-3 text-[14px] text-espresso placeholder:text-espresso/40 md:w-[340px]"
          />
        )}
      </div>
      <p className="label mt-5 text-espresso/55">{tabs.find((t) => t.key === tab)?.blurb}</p>

      <ul className="mt-6 border-t-2 border-espresso">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((o, i) => (
            <motion.li
              key={`${tab}-${o.url}`}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.025 }}
              className="group border-b border-espresso/20"
            >
              <a href={o.url} target="_blank" rel="noopener noreferrer" className="relative grid gap-2 py-5 sm:grid-cols-[1.4fr_1fr_auto] sm:items-center sm:gap-6" data-cursor="Open">
                <div>
                  {o.featured && <span className="label mb-2 mr-2 inline-block bg-cherry px-2 py-1 text-[12px] text-paper">Editor’s pick</span>}
                  {o.category === 'funding' && o.kind && <span className="label mb-2 inline-block border border-espresso/30 px-2 py-1 text-[12px] text-espresso">{o.kind}</span>}
                  <p className="font-display text-[clamp(20px,1.9vw,28px)] font-medium leading-[1.1] tracking-[-0.03em] text-espresso transition-colors group-hover:text-cherry">
                    {o.title}
                  </p>
                  <p className="mt-1 text-[15px] text-espresso/70">{o.org}</p>
                </div>
                <div className="text-[14px] leading-[1.45] text-espresso/70">
                  <p>{o.location}</p>
                  <p className="mt-1 text-[14px] text-espresso/55">
                    {o.when.replace(/\s*\(.*\)\s*$/, '')}
                    {!o.verified && <span className="ml-2 rounded-full bg-gold/25 px-2 py-0.5 text-espresso">verify</span>}
                  </p>
                </div>
                <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-all duration-500 group-hover:rotate-45 group-hover:border-espresso group-hover:bg-espresso group-hover:text-paper sm:flex">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {list.length === 0 && <p className="py-10 text-[16px] text-espresso/60">Nothing open for that search this week. If you’re hiring there, tell us. It’ll reach people who’ve sat across from you.</p>}
    </div>
  );
}
