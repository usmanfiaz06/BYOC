import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          <div>
            <div className="text-[15px] font-serif text-cream mb-4 tracking-[-0.02em]">☕ BYOC</div>
            <p className="text-[12px] text-cream/30 leading-[1.7] mb-6">
              The global community for founders, operators, and investors who believe the best relationships start with honest conversation over good coffee.
            </p>
            <div className="flex gap-3">
              <a href="http://linkedin.com/company/byoc-global" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center text-[10px] text-cream/40 hover:border-accent hover:text-accent transition-colors tracking-wider uppercase" aria-label="LinkedIn">in</a>
              <a href="https://instagram.com/byoc.global" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center text-[10px] text-cream/40 hover:border-accent hover:text-accent transition-colors tracking-wider uppercase" aria-label="Instagram">ig</a>
              <a href="mailto:usman.fiaz@byoc.global" className="w-8 h-8 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:border-accent hover:text-accent transition-colors" aria-label="Email">
                <Mail size={12} />
              </a>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-cream/20 tracking-[0.15em] uppercase mb-5">Community</div>
            <div className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Chapters', href: '/chapters' },
                { label: 'Events', href: '/events' },
                { label: 'Forum & Opportunities', href: '/community' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-[12px] text-cream/35 hover:text-cream/70 transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-cream/20 tracking-[0.15em] uppercase mb-5">Get Involved</div>
            <div className="space-y-3">
              {[
                { label: 'Host a Gathering', href: '/request-meetup' },
                { label: 'Collaborate', href: '/about#partner' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-[12px] text-cream/35 hover:text-cream/70 transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-cream/20 tracking-[0.15em] uppercase mb-5">Stay Connected</div>
            <p className="text-[12px] text-cream/30 leading-[1.6] mb-4">
              3,200+ practitioners building across borders. Five continents. One format.
            </p>
            <div className="text-[11px] text-cream/15 tracking-[0.03em]">usman.fiaz@byoc.global</div>
          </div>
        </div>
        <div className="mt-20 pt-6 border-t border-cream/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-cream/20">&copy; {new Date().getFullYear()} BYOC Global</p>
          <p className="text-[11px] text-cream/15">21+ countries · 140+ gatherings · 3,200+ members</p>
        </div>
      </div>
    </footer>
  );
}
