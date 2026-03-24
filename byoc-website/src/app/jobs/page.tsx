'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, MapPin, Clock, ExternalLink, Search, Filter,
  Building2, Globe, Banknote, PlusCircle, Tag
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

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
  linkedin?: string;
}

const sampleJobs: Job[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer',
    company: 'TechVenture Labs',
    location: 'Dubai, UAE',
    type: 'full-time',
    remote: true,
    salary: '$80k - $120k',
    description: 'Building the next generation of fintech solutions for MENA markets. Looking for someone passionate about scalable architecture and great UX.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    postedAgo: '2d ago',
    postedBy: 'BYOC Dubai Member',
  },
  {
    id: 2,
    title: 'Growth Lead',
    company: 'Startup Studio',
    location: 'San Francisco, USA',
    type: 'full-time',
    remote: false,
    salary: '$100k - $150k',
    description: 'Join our portfolio of 8 startups as a cross-portfolio growth lead. Deep expertise in B2B SaaS growth required.',
    tags: ['Growth', 'B2B SaaS', 'Analytics'],
    postedAgo: '3d ago',
    postedBy: 'BYOC SF Member',
  },
  {
    id: 3,
    title: 'AI Research Engineer',
    company: 'AI Innovations',
    location: 'London, UK',
    type: 'full-time',
    remote: true,
    salary: '£70k - £100k',
    description: 'Working on large language model applications for enterprise knowledge management. Strong ML background needed.',
    tags: ['Python', 'LLMs', 'Machine Learning', 'NLP'],
    postedAgo: '5d ago',
    postedBy: 'BYOC London Member',
  },
  {
    id: 4,
    title: 'Community Manager',
    company: 'BYOC Global',
    location: 'Remote',
    type: 'part-time',
    remote: true,
    description: 'Help us grow and nurture BYOC communities across new cities. Experience in community building and event management preferred.',
    tags: ['Community', 'Events', 'Social Media'],
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
    salary: '$30k - $50k',
    description: 'Design learning experiences for millions of students across South Asia. Looking for someone who cares deeply about accessibility and inclusion.',
    tags: ['Figma', 'UX Research', 'Design Systems'],
    postedAgo: '1w ago',
    postedBy: 'BYOC Lahore Member',
  },
  {
    id: 6,
    title: 'Summer Intern — Business Development',
    company: 'GreenTech Solutions',
    location: 'Berlin, Germany',
    type: 'internship',
    remote: false,
    description: 'Help us expand our climate-tech solutions into new European markets. Great opportunity for business students passionate about sustainability.',
    tags: ['Business Dev', 'CleanTech', 'Europe'],
    postedAgo: '2w ago',
    postedBy: 'BYOC Berlin Member',
  },
];

const jobTypes: { value: JobType; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
];

export default function JobsPage() {
  const [activeType, setActiveType] = useState<JobType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);

  const filteredJobs = sampleJobs.filter((job) => {
    const matchesType = activeType === 'all' || job.type === activeType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRemote = !remoteOnly || job.remote;
    return matchesType && matchesSearch && matchesRemote;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Opportunities
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl font-bold text-coffee-dark mb-4">
              Jobs & Opportunities
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted max-w-2xl">
              Roles and opportunities shared by BYOC community members worldwide.
              Hire from the community. Get hired by the community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent"
              />
            </div>

            {/* Type filter */}
            <div className="flex gap-2 flex-wrap">
              {jobTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setActiveType(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeType === type.value
                      ? 'bg-coffee-dark text-cream'
                      : 'bg-card border border-card-border text-muted hover:border-accent/30'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            {/* Remote toggle */}
            <button
              onClick={() => setRemoteOnly(!remoteOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                remoteOnly
                  ? 'bg-accent text-cream'
                  : 'bg-card border border-card-border text-muted hover:border-accent/30'
              }`}
            >
              <Globe size={14} />
              Remote
            </button>

            {/* Post job */}
            <button className="flex items-center gap-2 px-4 py-2 bg-coffee-dark text-cream rounded-full text-sm font-medium hover:bg-coffee-medium transition-colors">
              <PlusCircle size={16} />
              Post a Job
            </button>
          </div>

          {/* Jobs List */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  layout
                  className="bg-card rounded-2xl border border-card-border p-6 hover:shadow-lg hover:border-accent/20 transition-all group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Company icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Building2 size={22} className="text-accent" />
                    </div>

                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-coffee-dark group-hover:text-accent transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-sm text-muted">{job.company}</p>
                        </div>
                        {job.salary && (
                          <span className="flex items-center gap-1 text-sm font-medium text-accent">
                            <Banknote size={14} />
                            {job.salary}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted mb-4 line-clamp-2">{job.description}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-light">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                        <span className="px-2 py-0.5 bg-cream-dark rounded-full capitalize">{job.type}</span>
                        {job.remote && (
                          <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full flex items-center gap-1">
                            <Globe size={10} />
                            Remote
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {job.postedAgo}
                        </span>
                        <span className="text-muted">by {job.postedBy}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {job.tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 text-muted">
              <Briefcase size={40} className="mx-auto mb-4 opacity-30" />
              <p>No jobs match your filters. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
