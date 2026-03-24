'use client';

import { useState } from 'react';
import { Search, PlusCircle } from 'lucide-react';

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
    id: 1,
    title: 'Welcome to the BYOC Community Forum',
    body: 'A space for meaningful discussion between BYOC members worldwide. Share insights, ask questions, and collaborate. Keep it real, keep it respectful.',
    author: 'BYOC Team',
    role: 'Admin',
    city: 'Global',
    category: 'general',
    likes: 42,
    replies: 15,
    timeAgo: 'Pinned',
    pinned: true,
  },
  {
    id: 2,
    title: 'Looking for a technical co-founder — AI/EdTech',
    body: 'Building an AI-powered learning platform for emerging markets. Based in Lahore, open to remote. Seeking someone who shares the conviction that education access is a design problem, not a technology one.',
    author: 'Ahmad R.',
    role: 'Founder',
    city: 'Lahore',
    category: 'collaborations',
    likes: 18,
    replies: 7,
    timeAgo: '2h ago',
  },
  {
    id: 3,
    title: 'Takeaways from BYOC Berlin — cross-border GTM',
    body: 'Attended my first BYOC in Berlin. The most valuable 90 minutes I\'ve spent in months. Three conversations that directly shaped our Series A positioning for the European market.',
    author: 'Sarah K.',
    role: 'CEO, SaaS',
    city: 'Berlin',
    category: 'events',
    likes: 31,
    replies: 12,
    timeAgo: '5h ago',
  },
  {
    id: 4,
    title: 'Expanding into MENA — regulatory frameworks?',
    body: 'We\'re a Singapore-based SaaS company evaluating Saudi Arabia and UAE expansion. Would value introductions to local counsel or operators who\'ve navigated licensing in the region.',
    author: 'Wei L.',
    role: 'COO',
    city: 'Singapore',
    category: 'advice',
    likes: 24,
    replies: 19,
    timeAgo: '1d ago',
  },
  {
    id: 5,
    title: 'Product designer — open to advisory roles',
    body: 'Fifteen years in product design, last five at fintech scale-ups. Interested in advisory positions with early-stage companies building for underserved markets. DMs open.',
    author: 'Maria G.',
    role: 'Design Lead',
    city: 'San Francisco',
    category: 'introductions',
    likes: 15,
    replies: 8,
    timeAgo: '1d ago',
  },
  {
    id: 6,
    title: 'On the paradox of structured networking',
    body: 'After attending 10+ BYOC gatherings across 4 cities: the less you try to "network," the better your network becomes. The format works precisely because it doesn\'t try to.',
    author: 'Usman F.',
    role: 'Founder',
    city: 'Islamabad',
    category: 'resources',
    likes: 56,
    replies: 22,
    timeAgo: '2d ago',
  },
  {
    id: 7,
    title: 'Hiring: 3 roles, remote-friendly, BYOC members prioritised',
    body: 'Full-stack Engineer, Growth Lead, and Community Manager. Competitive compensation, distributed team across Dubai and London. Details on our careers page.',
    author: 'Fatima Z.',
    role: 'Founder & CEO',
    city: 'Dubai',
    category: 'collaborations',
    likes: 28,
    replies: 14,
    timeAgo: '3d ago',
  },
];

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-[600px]">
            <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-5">Member Forum</p>
            <h1 className="text-[46px] sm:text-[58px] font-serif leading-[1.05] tracking-[-0.03em] text-coffee-dark">
              Community
            </h1>
            <p className="mt-6 text-[15px] text-muted leading-[1.8]">
              A space for BYOC members to exchange ideas, seek introductions, share opportunities, and continue the conversations that started at the table.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            {/* Sidebar */}
            <div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-coffee-dark text-cream rounded-xl text-[13px] font-medium hover:bg-coffee-medium transition-colors tracking-[0.03em] uppercase mb-6">
                <PlusCircle size={15} />
                New Discussion
              </button>

              <div className="relative mb-8">
                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-card-border rounded-xl text-[13px]"
                />
              </div>

              <div className="bg-card rounded-2xl border border-card-border p-5">
                <div className="text-[10px] text-muted tracking-[0.1em] uppercase mb-4">Categories</div>
                <div className="space-y-0.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-[13px] transition-colors ${
                        activeCategory === cat.value
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-muted hover:text-coffee-dark'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-card-border p-5 mt-4">
                <div className="text-[10px] text-muted tracking-[0.1em] uppercase mb-4">Guidelines</div>
                <div className="space-y-3">
                  {[
                    'Be direct and constructive',
                    'No spam or self-promotion',
                    'Keep discussions substantive',
                    'Share knowledge generously',
                  ].map((g) => (
                    <div key={g} className="flex items-start gap-2">
                      <span className="text-accent text-[7px] mt-1.5">◆</span>
                      <span className="text-[11px] text-muted leading-[1.5]">{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[15px] font-medium text-coffee-dark tracking-[-0.01em]">
                  {activeCategory === 'all' ? 'All Discussions' : categories.find(c => c.value === activeCategory)?.label}
                </h2>
                <span className="text-[11px] text-muted tracking-[0.03em]">Sorted by recent</span>
              </div>

              <div className="space-y-3">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`bg-card rounded-2xl border ${post.pinned ? 'border-accent/30' : 'border-card-border'} p-6 hover:border-accent/40 transition-colors cursor-pointer group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-[12px] font-medium text-accent">
                        {post.author[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          {post.pinned && (
                            <span className="text-[9px] px-2 py-0.5 rounded-full border border-accent/30 text-accent tracking-[0.05em] uppercase">Pinned</span>
                          )}
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-card-border text-muted tracking-[0.03em] capitalize">{post.category}</span>
                        </div>
                        <h3 className="text-[14px] font-medium text-coffee-dark group-hover:text-accent transition-colors tracking-[-0.01em] mb-1.5">
                          {post.title}
                        </h3>
                        <p className="text-[12px] text-muted leading-[1.6] line-clamp-2 mb-3">{post.body}</p>
                        <div className="flex items-center gap-3 text-[11px] text-muted">
                          <span className="font-medium text-coffee-dark">{post.author}</span>
                          <span className="text-muted/40">·</span>
                          <span>{post.role}</span>
                          <span className="text-muted/40">·</span>
                          <span>{post.city}</span>
                          <span className="text-muted/40">·</span>
                          <span>{post.timeAgo}</span>
                          <span className="ml-auto">{post.likes} likes · {post.replies} replies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-[14px] text-muted">No discussions found. Be the first to start one.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
