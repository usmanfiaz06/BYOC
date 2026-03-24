'use client';

import { useState } from 'react';
import { Search, PlusCircle, ArrowLeft, MessageCircle, Send, Globe, MapPin, Briefcase } from 'lucide-react';

type Tab = 'discussions' | 'opportunities';
type Category = 'all' | 'general' | 'introductions' | 'advice' | 'resources' | 'events' | 'collaborations';

interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  role: string;
  city: string;
  category: Category;
  likes: number;
  replies: number;
  timeAgo: string;
  pinned?: boolean;
  comments?: { author: string; role: string; city: string; text: string; timeAgo: string }[];
}

interface Opportunity {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  remote: boolean;
  salary?: string;
  description: string;
  tags: string[];
  postedAgo: string;
  postedBy: string;
  applyUrl?: string;
}

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'general', label: 'General' },
  { value: 'introductions', label: 'Introductions' },
  { value: 'advice', label: 'Advice' },
  { value: 'resources', label: 'Resources' },
  { value: 'events', label: 'Events' },
  { value: 'collaborations', label: 'Collaborations' },
];

const posts: Post[] = [
  {
    id: 1, title: 'Welcome to the BYOC Community Forum', body: 'A space for meaningful discussion between BYOC members worldwide. Share insights, ask questions, and collaborate. Keep it real, keep it respectful.', author: 'BYOC Team', role: 'Admin', city: 'Global', category: 'general', likes: 42, replies: 15, timeAgo: 'Pinned', pinned: true,
    comments: [
      { author: 'Ahmad R.', role: 'Founder', city: 'Lahore', text: 'Great to see this space live. Looking forward to connecting with the community here.', timeAgo: '2w ago' },
      { author: 'Sarah K.', role: 'CEO', city: 'Berlin', text: 'This is exactly what was missing. The post-gathering conversations can now continue.', timeAgo: '1w ago' },
    ],
  },
  {
    id: 2, title: 'Looking for a technical co-founder — AI/EdTech', body: 'Building an AI-powered learning platform for emerging markets. Based in Lahore, open to remote. Seeking someone who shares the conviction that education access is a design problem, not a technology one.', author: 'Ahmad R.', role: 'Founder', city: 'Lahore', category: 'collaborations', likes: 18, replies: 7, timeAgo: '2h ago',
    comments: [
      { author: 'Wei L.', role: 'COO', city: 'Singapore', text: 'Interesting thesis. We explored similar terrain in SEA. Happy to share learnings — DM me.', timeAgo: '1h ago' },
    ],
  },
  {
    id: 3, title: 'Takeaways from BYOC Berlin — cross-border GTM', body: 'Attended my first BYOC in Berlin. The most valuable 90 minutes I\'ve spent in months. Three conversations that directly shaped our Series A positioning for the European market.', author: 'Sarah K.', role: 'CEO, SaaS', city: 'Berlin', category: 'events', likes: 31, replies: 12, timeAgo: '5h ago',
    comments: [
      { author: 'Maria G.', role: 'Design Lead', city: 'San Francisco', text: 'Berlin chapter is exceptional. The mix of founders and policymakers in that room was unique.', timeAgo: '3h ago' },
    ],
  },
  {
    id: 4, title: 'Expanding into MENA — regulatory frameworks?', body: 'We\'re a Singapore-based SaaS company evaluating Saudi Arabia and UAE expansion. Would value introductions to local counsel or operators who\'ve navigated licensing in the region.', author: 'Wei L.', role: 'COO', city: 'Singapore', category: 'advice', likes: 24, replies: 19, timeAgo: '1d ago', comments: [],
  },
  {
    id: 5, title: 'Product designer — open to advisory roles', body: 'Fifteen years in product design, last five at fintech scale-ups. Interested in advisory positions with early-stage companies building for underserved markets. DMs open.', author: 'Maria G.', role: 'Design Lead', city: 'San Francisco', category: 'introductions', likes: 15, replies: 8, timeAgo: '1d ago', comments: [],
  },
  {
    id: 6, title: 'On the paradox of structured networking', body: 'After attending 10+ BYOC gatherings across 4 cities: the less you try to "network," the better your network becomes. The format works precisely because it doesn\'t try to.', author: 'Usman F.', role: 'Founder', city: 'Islamabad', category: 'resources', likes: 56, replies: 22, timeAgo: '2d ago',
    comments: [
      { author: 'Fatima Z.', role: 'Founder & CEO', city: 'Dubai', text: 'Couldn\'t agree more. The anti-structure is the structure. It self-selects for people who value substance.', timeAgo: '1d ago' },
    ],
  },
  {
    id: 7, title: 'Hiring: 3 roles, remote-friendly, BYOC members prioritised', body: 'Full-stack Engineer, Growth Lead, and Community Manager. Competitive compensation, distributed team across Dubai and London. Details on our careers page.', author: 'Fatima Z.', role: 'Founder & CEO', city: 'Dubai', category: 'collaborations', likes: 28, replies: 14, timeAgo: '3d ago', comments: [],
  },
];

const opportunities: Opportunity[] = [
  { id: 1, title: 'Senior Full-Stack Engineer', company: 'TechVenture Labs', location: 'Dubai, UAE', type: 'Full-time', remote: true, salary: '$80k–$120k', description: 'Building next-generation fintech infrastructure for MENA markets. Looking for someone who thinks in systems and ships with conviction.', tags: ['React', 'Node.js', 'TypeScript'], postedAgo: '2d ago', postedBy: 'BYOC Dubai member' },
  { id: 2, title: 'Growth Lead', company: 'Startup Studio', location: 'San Francisco, USA', type: 'Full-time', remote: false, salary: '$100k–$150k', description: 'Cross-portfolio growth leadership across 8 B2B SaaS companies. Deep expertise in acquisition and retention at scale.', tags: ['Growth', 'B2B SaaS'], postedAgo: '3d ago', postedBy: 'BYOC SF member' },
  { id: 3, title: 'AI Research Engineer', company: 'AI Innovations', location: 'London, UK', type: 'Full-time', remote: true, salary: '£70k–£100k', description: 'Applied LLM research for enterprise knowledge management. Strong ML foundations required — rigour over hype.', tags: ['Python', 'LLMs', 'ML'], postedAgo: '5d ago', postedBy: 'BYOC London member' },
  { id: 4, title: 'Community Manager', company: 'BYOC Global', location: 'Remote', type: 'Part-time', remote: true, description: 'Help grow and nurture BYOC chapters across new cities. Taste matters more than tenure.', tags: ['Community', 'Events'], postedAgo: '1w ago', postedBy: 'BYOC Team' },
  { id: 5, title: 'Product Designer', company: 'EdTech Startup', location: 'Lahore, Pakistan', type: 'Full-time', remote: true, salary: '$30k–$50k', description: 'Designing learning experiences for millions of students across South Asia. Deep care for accessibility is non-negotiable.', tags: ['Figma', 'UX', 'Design Systems'], postedAgo: '1w ago', postedBy: 'BYOC Lahore member' },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<Tab>('discussions');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showNewForm, setShowNewForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.body.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredOpps = opportunities.filter((opp) => {
    return opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || opp.company.toLowerCase().includes(searchQuery.toLowerCase()) || opp.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  // Discussion detail view
  if (selectedPost) {
    return (
      <div>
        <section className="py-16 sm:py-28">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
            <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-[12px] text-muted hover:text-coffee-dark transition-colors tracking-[0.04em] uppercase mb-8">
              <ArrowLeft size={14} /> Back to community
            </button>

            <div className="bg-card rounded-2xl border border-card-border p-6 sm:p-8 mb-6">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {selectedPost.pinned && <span className="text-[9px] px-2 py-0.5 rounded-full border border-accent/30 text-accent tracking-[0.05em] uppercase">Pinned</span>}
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-card-border text-muted tracking-[0.03em] capitalize">{selectedPost.category}</span>
              </div>
              <h1 className="text-[22px] sm:text-[28px] font-serif text-coffee-dark tracking-[-0.02em] mb-4">{selectedPost.title}</h1>
              <p className="text-[14px] text-muted leading-[1.8] mb-6">{selectedPost.body}</p>
              <div className="flex items-center gap-3 text-[12px] text-muted border-t border-card-border pt-4 flex-wrap">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-[11px] font-medium text-accent">{selectedPost.author[0]}</div>
                <span className="font-medium text-coffee-dark">{selectedPost.author}</span>
                <span className="text-muted/40">·</span>
                <span>{selectedPost.role}</span>
                <span className="text-muted/40">·</span>
                <span>{selectedPost.city}</span>
                <span className="text-muted/40">·</span>
                <span>{selectedPost.timeAgo}</span>
                <span className="sm:ml-auto">{selectedPost.likes} likes · {selectedPost.replies} replies</span>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-4 mb-8">
              <div className="text-[11px] text-muted tracking-[0.08em] uppercase mb-4">Replies ({selectedPost.comments?.length || 0})</div>
              {selectedPost.comments?.map((c, i) => (
                <div key={i} className="bg-card rounded-xl border border-card-border p-5">
                  <p className="text-[13px] text-foreground leading-[1.7] mb-3">{c.text}</p>
                  <div className="flex items-center gap-2 text-[11px] text-muted flex-wrap">
                    <span className="font-medium text-coffee-dark">{c.author}</span>
                    <span className="text-muted/40">·</span>
                    <span>{c.role}, {c.city}</span>
                    <span className="text-muted/40">·</span>
                    <span>{c.timeAgo}</span>
                  </div>
                </div>
              ))}
              {(!selectedPost.comments || selectedPost.comments.length === 0) && (
                <p className="text-[13px] text-muted py-6 text-center">No replies yet. Be the first to contribute.</p>
              )}
            </div>

            {/* Reply form */}
            <div className="bg-card rounded-2xl border border-card-border p-5">
              <textarea rows={3} placeholder="Write a reply..." className="w-full bg-transparent text-[13px] resize-none border-none p-0 mb-4 placeholder:text-muted/40" />
              <div className="flex justify-end">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-coffee-dark text-cream rounded-full text-[12px] font-medium hover:bg-coffee-medium transition-colors tracking-[0.03em] uppercase">
                  <Send size={13} /> Reply
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // New discussion form
  if (showNewForm) {
    return (
      <div>
        <section className="py-16 sm:py-28">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-10">
            <button onClick={() => setShowNewForm(false)} className="flex items-center gap-2 text-[12px] text-muted hover:text-coffee-dark transition-colors tracking-[0.04em] uppercase mb-8">
              <ArrowLeft size={14} /> Back
            </button>
            <h1 className="text-[28px] sm:text-[36px] font-serif text-coffee-dark tracking-[-0.02em] mb-8">
              {activeTab === 'discussions' ? 'Start a discussion' : 'Post an opportunity'}
            </h1>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setShowNewForm(false); }}>
              <div>
                <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Title</label>
                <input type="text" required placeholder={activeTab === 'discussions' ? 'Discussion topic...' : 'Role title...'} className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
              </div>
              {activeTab === 'opportunities' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Company</label>
                    <input type="text" required placeholder="Company name" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Location</label>
                    <input type="text" required placeholder="City, Country" className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px]" />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">
                  {activeTab === 'discussions' ? 'Details' : 'Description'}
                </label>
                <textarea rows={5} required placeholder="Share your thoughts..." className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px] resize-none" />
              </div>
              {activeTab === 'discussions' && (
                <div>
                  <label className="block text-[11px] text-muted tracking-[0.06em] uppercase mb-2">Category</label>
                  <select className="w-full px-4 py-3.5 bg-card border border-card-border rounded-xl text-[13px] text-muted">
                    {categories.filter(c => c.value !== 'all').map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              )}
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-coffee-dark text-cream text-[13px] font-medium rounded-xl hover:bg-coffee-medium transition-colors tracking-[0.04em] uppercase">
                <Send size={14} /> Publish
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[600px]">
            <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Member Hub</p>
            <h1 className="text-[36px] sm:text-[46px] lg:text-[58px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
              Community
            </h1>
            <p className="mt-4 sm:mt-6 text-[14px] sm:text-[15px] text-muted leading-[1.8]">
              Exchange ideas, share opportunities, and continue the conversations that started at the table.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mt-8 sm:mt-10 bg-card rounded-full border border-card-border p-1 w-fit">
            <button
              onClick={() => { setActiveTab('discussions'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-medium transition-colors tracking-[0.03em] uppercase ${activeTab === 'discussions' ? 'bg-coffee-dark text-cream' : 'text-muted hover:text-coffee-dark'}`}
            >
              <MessageCircle size={14} /> Discussions
            </button>
            <button
              onClick={() => { setActiveTab('opportunities'); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-medium transition-colors tracking-[0.03em] uppercase ${activeTab === 'opportunities' ? 'bg-coffee-dark text-cream' : 'text-muted hover:text-coffee-dark'}`}
            >
              <Briefcase size={14} /> Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top bar: search + new + filter toggle (mobile) */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder={activeTab === 'discussions' ? 'Search discussions...' : 'Search roles, companies, skills...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-card-border rounded-xl text-[13px]"
              />
            </div>
            <div className="flex gap-2">
              {activeTab === 'discussions' && (
                <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 px-4 py-3 bg-card border border-card-border rounded-xl text-[12px] text-muted tracking-[0.03em] uppercase">
                  Filter
                </button>
              )}
              <button onClick={() => setShowNewForm(true)} className="flex items-center gap-2 px-4 py-3 bg-coffee-dark text-cream rounded-xl text-[12px] font-medium hover:bg-coffee-medium transition-colors tracking-[0.03em] uppercase">
                <PlusCircle size={14} />
                {activeTab === 'discussions' ? 'New post' : 'Post role'}
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar — hidden on mobile unless toggled */}
            {activeTab === 'discussions' && (
              <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                <div className="bg-card rounded-2xl border border-card-border p-4 sm:p-5 mb-4">
                  <div className="text-[10px] text-muted tracking-[0.1em] uppercase mb-3">Categories</div>
                  <div className="flex flex-wrap lg:flex-col gap-1">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { setActiveCategory(cat.value); setShowFilters(false); }}
                        className={`text-left px-3 py-2 rounded-lg text-[12px] transition-colors ${activeCategory === cat.value ? 'bg-accent/10 text-accent font-medium' : 'text-muted hover:text-coffee-dark'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="bg-card rounded-2xl border border-card-border p-4 sm:p-5 hidden lg:block">
                  <div className="text-[10px] text-muted tracking-[0.1em] uppercase mb-3">Guidelines</div>
                  <div className="space-y-2.5">
                    {['Be direct and constructive', 'No spam or self-promotion', 'Keep discussions substantive', 'Share knowledge generously'].map((g) => (
                      <div key={g} className="flex items-start gap-2">
                        <span className="text-accent text-[7px] mt-1.5">◆</span>
                        <span className="text-[11px] text-muted leading-[1.5]">{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Main content */}
            <div className={activeTab === 'opportunities' ? 'lg:col-span-2' : ''}>
              {/* DISCUSSIONS TAB */}
              {activeTab === 'discussions' && (
                <div className="space-y-3">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className={`bg-card rounded-2xl border ${post.pinned ? 'border-accent/30' : 'border-card-border'} p-4 sm:p-6 hover:border-accent/40 transition-colors cursor-pointer group`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-[11px] sm:text-[12px] font-medium text-accent">
                          {post.author[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            {post.pinned && <span className="text-[9px] px-2 py-0.5 rounded-full border border-accent/30 text-accent tracking-[0.05em] uppercase">Pinned</span>}
                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-card-border text-muted tracking-[0.03em] capitalize">{post.category}</span>
                          </div>
                          <h3 className="text-[13px] sm:text-[14px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em] mb-1">
                            {post.title}
                          </h3>
                          <p className="text-[11px] sm:text-[12px] text-muted leading-[1.6] line-clamp-2 mb-2 sm:mb-3">{post.body}</p>
                          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-muted flex-wrap">
                            <span className="font-medium text-coffee-dark">{post.author}</span>
                            <span className="hidden sm:inline text-muted/40">·</span>
                            <span className="hidden sm:inline">{post.city}</span>
                            <span className="text-muted/40">·</span>
                            <span>{post.timeAgo}</span>
                            <span className="ml-auto flex items-center gap-1"><MessageCircle size={11} /> {post.replies}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredPosts.length === 0 && (
                    <div className="text-center py-16"><p className="text-[13px] text-muted">No discussions found.</p></div>
                  )}
                </div>
              )}

              {/* OPPORTUNITIES TAB */}
              {activeTab === 'opportunities' && (
                <div className="space-y-3">
                  {filteredOpps.map((opp) => (
                    <div key={opp.id} className="bg-card rounded-2xl border border-card-border p-4 sm:p-6 hover:border-accent/40 transition-colors group">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 text-[12px] sm:text-[13px] font-medium text-accent">
                          {opp.company[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                            <div>
                              <h3 className="text-[14px] sm:text-[15px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em]">{opp.title}</h3>
                              <p className="text-[11px] sm:text-[12px] text-muted mt-0.5">{opp.company}</p>
                            </div>
                            {opp.salary && <span className="text-[12px] sm:text-[13px] font-medium text-accent">{opp.salary}</span>}
                          </div>
                          <p className="text-[11px] sm:text-[12px] text-muted leading-[1.6] mb-3 sm:mb-4">{opp.description}</p>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-muted">
                            <span className="flex items-center gap-1 px-2 py-1 rounded-full border border-card-border"><MapPin size={10} /> {opp.location}</span>
                            <span className="px-2 py-1 rounded-full border border-card-border">{opp.type}</span>
                            {opp.remote && <span className="flex items-center gap-1 px-2 py-1 rounded-full border border-accent/30 text-accent"><Globe size={10} /> Remote</span>}
                            {opp.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 rounded-full border border-card-border hidden sm:inline">{tag}</span>
                            ))}
                            <span className="ml-auto text-muted/50 hidden sm:inline">{opp.postedAgo} · {opp.postedBy}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredOpps.length === 0 && (
                    <div className="text-center py-16"><p className="text-[13px] text-muted">No opportunities found.</p></div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
