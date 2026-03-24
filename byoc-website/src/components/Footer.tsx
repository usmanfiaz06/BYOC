import Link from 'next/link';
import { Mail, MapPin, Coffee } from 'lucide-react';

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/byoc-global', Icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://instagram.com/byoc.global', Icon: InstagramIcon },
  { label: 'Twitter / X', href: 'https://twitter.com/byocglobal', Icon: XIcon },
  { label: 'Email', href: 'mailto:hello@byoc.global', Icon: ({ size }: { size?: number }) => <Mail size={size} /> },
];

const footerLinks = {
  community: [
    { label: 'About BYOC', href: '/about' },
    { label: 'Chapters', href: '/chapters' },
    { label: 'Events', href: '/events' },
    { label: 'Community Forum', href: '/community' },
  ],
  getInvolved: [
    { label: 'Host a Meetup', href: '/request-meetup' },
    { label: 'Jobs & Opportunities', href: '/jobs' },
    { label: 'Partner with Us', href: '/about#partner' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream/80">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-lg font-bold text-cream mb-4">☕ BYOC</div>
            <p className="text-[13px] text-cream/50 leading-relaxed mb-6">
              The world&apos;s most authentic networking community. Real conversations. Real connections. 21+ countries.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[12px] font-semibold text-cream uppercase tracking-widest mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-cream/50 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-[12px] font-semibold text-cream uppercase tracking-widest mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-cream/50 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-[12px] font-semibold text-cream uppercase tracking-widest mb-4">Stay Connected</h3>
            <p className="text-[13px] text-cream/50 mb-4 leading-relaxed">
              Join 3,200+ leaders, founders, and builders across the globe.
            </p>
            <div className="flex items-center gap-2 text-[12px] text-cream/30">
              <Coffee size={14} />
              <span>Buy your own coffee. Build your own future.</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-cream/30">
            &copy; {new Date().getFullYear()} BYOC Global. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[12px] text-cream/30">
            <MapPin size={12} />
            <span>Active in 21+ countries worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
