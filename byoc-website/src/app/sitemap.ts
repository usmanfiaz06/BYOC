import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1, freq: 'weekly' },
    { path: '/join', priority: 0.9, freq: 'monthly' },
    { path: '/events', priority: 0.8, freq: 'weekly' },
    { path: '/opportunities', priority: 0.8, freq: 'weekly' },
    { path: '/chapters', priority: 0.7, freq: 'monthly' },
    { path: '/about', priority: 0.7, freq: 'monthly' },
  ];
  return pages.map((p) => ({ url: `${SITE_URL}${p.path}`, lastModified: now, changeFrequency: p.freq, priority: p.priority }));
}
