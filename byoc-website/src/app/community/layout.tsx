import type { Metadata } from 'next';

// The forum is a placeholder with sample posts; keep it out of search results.
export const metadata: Metadata = { title: 'Community', robots: { index: false, follow: true }, alternates: { canonical: '/community' } };

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
