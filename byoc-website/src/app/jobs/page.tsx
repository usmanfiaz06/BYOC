'use client';

import { useState } from 'react';
import { Search, Globe, PlusCircle } from 'lucide-react';

type JobType = 'all' | 'full-time' | 'part-time' | 'contract' | 'internship';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: JobType;
  remote: boolean;
  salary?: string;
  description: string;
  tags: string[];
  postedAgo: string;
  postedBy: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer',
    company: 'TechVenture Labs',
    location: 'Dubai, UAE',
    type: 'full-time',
    remote: true,
    salary: '$80k–$120k',
    description: 'Building next-generation fintech infrastructure for MENA markets. Looking for someone who thinks in systems and ships with conviction.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    postedAgo: '2d ago',
    postedBy: 'BYOC Dubai member',
  },
  {
    id: 2,
    title: 'Growth Lead',
    company: 'Startup Studio',
    location: 'San Francisco, USA',
    type: 'full-time',
    remote: false,
    salary: '$100k–$150k',
    description: 'Cross-portfolio growth leadership across 8 B2B SaaS companies. Requires deep expertise in acquisition, activation, and retention at scale.',
    tags: ['Growth', 'B2B SaaS', 'Analytics'],
    postedAgo: '3d ago',
    postedBy: 'BYOC SF member',
  },
  {
    id: 3,
    title: 'AI Research Engineer',
    company: 'AI Innovations',
    location: 'London, UK',
    type: 'full-time',
    remote: true,
    salary: '£70k–£100k',
    description: 'Applied LLM research for enterprise knowledge management. Strong ML foundations required — we value rigour over hype.',
    tags: ['Python', 'LLMs', 'Machine Learning'],
    postedAgo: '5d ago',
    postedBy: 'BYOC London member',
  },
  {
    id: 4,
    title: 'Community Manager',
    company: 'BYOC Global',
    location: 'Remote',
    type: 'part-time',
    remote: true,
    description: 'Help grow and nurture BYOC chapters across new cities. Experience in community building and event curation. Taste matters more than tenure.',
    tags: ['Community', 'Events', 'Ops'],
    postedAgo: '1w ago',
    postedBy: 'BYOC Team',
  },
  {
    id: 5,
    title: 'Product Designer',
    company: 'EdTech Startup',
    location: 'Lahore, Pakistan',
    type: 'full-time',
    remote: true,
    salary: '$30k–$50k',
    description: 'Designing learning experiences for millions of students across South Asia. Deep care for accessibility and inclusion is non-negotiable.',
    tags: ['Figma', 'UX Research', 'Design Systems'],
    postedAgo: '1w ago',
    postedBy: 'BYOC Lahore member',
  },
  {
    id: 6,
    title: 'Summer Intern — Business Development',
    company: 'GreenTech Solutions',
    location: 'Berlin, Germany',
    type: 'internship',
    remote: false,
    description: 'European market expansion for a climate-tech platform. Ideal for business students with conviction about sustainability and commercial acumen.',
    tags: ['Business Dev', 'CleanTech', 'Europe'],
    postedAgo: '2w ago',
    postedBy: 'BYOC Berlin member',
  },
];

const jobTypes: { value: JobType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
];

export default function JobsPage() {
  const [activeType, setActiveType] = useState<JobType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesType = activeType === 'all' || job.type === activeType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRemote = !remoteOnly || job.remote;
    return matchesType && matchesSearch && matchesRemote;
  });

  return (
    <div>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[600px]">
            <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Opportunities</p>
            <h1 className="text-[46px] sm:text-[58px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
              Jobs &amp; Roles
            </h1>
            <p className="mt-6 text-[15px] text-muted leading-[1.8]">
              Opportunities shared by BYOC members. The community is the referral — every role listed here comes from someone at the table.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search roles, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-card-border rounded-xl text-[13px]"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {jobTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveType(type.value)}
                  className={`px-4 py-2.5 rounded-full text-[12px] font-medium transition-colors tracking-[0.03em] uppercase ${
                    activeType === type.value
                      ? 'bg-coffee-dark text-cream'
                      : 'bg-card border border-card-border text-muted hover:border-accent/40'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setRemoteOnly(!remoteOnly)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-medium transition-colors tracking-[0.03em] uppercase ${
                remoteOnly
                  ? 'bg-accent text-cream'
                  : 'bg-card border border-card-border text-muted hover:border-accent/40'
              }`}
            >
              <Globe size={13} />
              Remote
            </button>

            <button className="flex items-center gap-2 px-4 py-2.5 bg-coffee-dark text-cream rounded-full text-[12px] font-medium hover:bg-coffee-medium transition-colors tracking-[0.03em] uppercase ml-auto">
              <PlusCircle size={14} />
              Post a role
            </button>
          </div>

          {/* Jobs List */}
          <div className="space-y-3">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-card rounded-2xl border border-card-border p-6 hover:border-accent/40 transition-colors group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-[13px] font-medium text-accent">
                    {job.company[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-[15px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em]">{job.title}</h3>
                        <p className="text-[12px] text-muted mt-0.5">{job.company}</p>
                      </div>
                      {job.salary && (
                        <span className="text-[13px] font-medium text-accent">{job.salary}</span>
                      )}
                    </div>
                    <p className="text-[12px] text-muted leading-[1.6] mb-4">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-muted">
                      <span className="px-2.5 py-1 rounded-full border border-card-border tracking-[0.03em]">{job.location}</span>
                      <span className="px-2.5 py-1 rounded-full border border-card-border tracking-[0.03em] capitalize">{job.type}</span>
                      {job.remote && (
                        <span className="px-2.5 py-1 rounded-full border border-accent/30 text-accent tracking-[0.03em]">Remote</span>
                      )}
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full border border-card-border tracking-[0.03em]">{tag}</span>
                      ))}
                      <span className="ml-auto text-muted/60">{job.postedAgo} · {job.postedBy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[14px] text-muted">No roles match your filters. Adjust your search or check back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
