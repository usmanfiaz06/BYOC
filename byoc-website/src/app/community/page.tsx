'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, ThumbsUp, MessageCircle, Clock, Filter,
  TrendingUp, AlertCircle, Search, PlusCircle, User, Flag
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

type Category = 'all' | 'general' | 'introductions' | 'advice' | 'resources' | 'events' | 'collaborations';

interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  city: string;
  category: Category;
  likes: number;
  replies: number;
  timeAgo: string;
  pinned?: boolean;
}

const categories: { value: Category; label: string; color: string }[] = [
  { value: 'all', label: 'All Posts', color: 'bg-muted-light' },
  { value: 'general', label: 'General', color: 'bg-blue-100' },
  { value: 'introductions', label: 'Introductions', color: 'bg-green-100' },
  { value: 'advice', label: 'Advice', color: 'bg-amber-100' },
  { value: 'resources', label: 'Resources', color: 'bg-purple-100' },
  { value: 'events', label: 'Events', color: 'bg-red-100' },
  { value: 'collaborations', label: 'Collaborations', color: 'bg-teal-100' },
];

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Welcome to the BYOC Community Forum!',
    body: 'This is a space for meaningful discussions among BYOC members worldwide. Share insights, ask questions, and connect with fellow community members. Keep it real, keep it respectful.',
    author: 'BYOC Team',
    city: 'Global',
    category: 'general',
    likes: 42,
    replies: 15,
    timeAgo: 'Pinned',
    pinned: true,
  },
  {
    id: 2,
    title: 'Looking for co-founder in AI/EdTech space',
    body: 'Building an AI-powered learning platform for emerging markets. Looking for a technical co-founder who shares the vision of democratizing education. Based in Lahore but open to remote.',
    author: 'Ahmad R.',
    city: 'Lahore',
    category: 'collaborations',
    likes: 18,
    replies: 7,
    timeAgo: '2h ago',
  },
  {
    id: 3,
    title: 'BYOC Berlin was amazing — recap and takeaways',
    body: 'Just attended my first BYOC in Berlin. The conversations about cross-border startup building were incredible. Met 3 potential advisors for our Series A. Highly recommend the Berlin chapter!',
    author: 'Sarah K.',
    city: 'Berlin',
    category: 'events',
    likes: 31,
    replies: 12,
    timeAgo: '5h ago',
  },
  {
    id: 4,
    title: 'Best resources for founders expanding to MENA?',
    body: 'We\'re a SaaS startup looking to expand from Singapore into Saudi Arabia and UAE. Would love recommendations on regulatory frameworks, local partners, and cultural considerations.',
    author: 'Wei L.',
    city: 'Singapore',
    category: 'advice',
    likes: 24,
    replies: 19,
    timeAgo: '1d ago',
  },
  {
    id: 5,
    title: 'Hi from San Francisco! Product designer here',
    body: 'Long-time BYOC member, first time posting here. I\'m a product designer at a fintech startup. Would love to connect with other designers in the community. Let\'s chat about design for emerging markets!',
    author: 'Maria G.',
    city: 'San Francisco',
    category: 'introductions',
    likes: 15,
    replies: 8,
    timeAgo: '1d ago',
  },
  {
    id: 6,
    title: 'The art of networking without networking',
    body: 'After attending 10+ BYOC meetups across 4 cities, here\'s my biggest learning: the less you try to "network," the better connections you make. BYOC gets this right by removing all the artificial structure.',
    author: 'Usman F.',
    city: 'Islamabad',
    category: 'resources',
    likes: 56,
    replies: 22,
    timeAgo: '2d ago',
  },
  {
    id: 7,
    title: 'Open roles at our startup — remote friendly',
    body: 'We\'re hiring for 3 roles: Full-stack Engineer, Growth Lead, and Community Manager. Remote-friendly, competitive comp. Check our jobs page for details. BYOC members get priority.',
    author: 'Fatima Z.',
    city: 'Dubai',
    category: 'collaborations',
    likes: 28,
    replies: 14,
    timeAgo: '3d ago',
  },
];

const communityGuidelines = [
  'Be respectful and constructive',
  'No spam, promotions, or self-promotion',
  'Keep discussions relevant to community topics',
  'Share knowledge generously',
  'Report inappropriate content',
];

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = samplePosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
              Member Forum
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl font-bold text-coffee-dark mb-4">
              Community
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted max-w-2xl">
              A space for BYOC members to discuss, ask, share, and collaborate. Keep it real.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* New Post */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-coffee-dark text-cream rounded-xl font-medium hover:bg-coffee-medium transition-colors mb-6">
                <PlusCircle size={18} />
                New Discussion
              </button>

              {/* Search */}
              <div className="relative mb-6">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-accent"
                />
              </div>

              {/* Categories */}
              <div className="bg-card rounded-2xl border border-card-border p-4">
                <h3 className="text-sm font-semibold text-coffee-dark mb-3 flex items-center gap-2">
                  <Filter size={14} />
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat.value
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-muted hover:bg-cream-dark'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-card rounded-2xl border border-card-border p-4 mt-4">
                <h3 className="text-sm font-semibold text-coffee-dark mb-3 flex items-center gap-2">
                  <AlertCircle size={14} />
                  Community Guidelines
                </h3>
                <ul className="space-y-2">
                  {communityGuidelines.map((g) => (
                    <li key={g} className="text-xs text-muted flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Posts */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-coffee-dark">
                  {activeCategory === 'all' ? 'All Discussions' : categories.find(c => c.value === activeCategory)?.label}
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <TrendingUp size={14} />
                  Sorted by recent
                </div>
              </div>

              <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-4">
                <AnimatePresence mode="wait">
                  {filteredPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      variants={fadeInUp}
                      layout
                      className={`bg-card rounded-2xl border ${post.pinned ? 'border-accent/30 bg-accent/5' : 'border-card-border'} p-6 hover:shadow-md transition-all cursor-pointer group`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <User size={18} className="text-accent" />
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Header */}
                          <div className="flex items-center gap-2 mb-1">
                            {post.pinned && (
                              <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">Pinned</span>
                            )}
                            <span className="text-xs px-2 py-0.5 bg-cream-dark rounded-full text-muted capitalize">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-md font-semibold text-coffee-dark group-hover:text-accent transition-colors mb-2">
                            {post.title}
                          </h3>

                          {/* Body preview */}
                          <p className="text-sm text-muted line-clamp-2 mb-3">{post.body}</p>

                          {/* Footer */}
                          <div className="flex items-center gap-4 text-xs text-muted-light">
                            <span className="font-medium text-muted">{post.author}</span>
                            <span>• {post.city}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.timeAgo}
                            </span>
                            <span className="flex items-center gap-1">
                              <ThumbsUp size={12} />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle size={12} />
                              {post.replies} replies
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16 text-muted">
                  <MessageSquare size={40} className="mx-auto mb-4 opacity-30" />
                  <p>No discussions found. Be the first to start one!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
