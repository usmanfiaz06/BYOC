'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/chapters', label: 'Chapters' },
  { href: '/events', label: 'Events' },
  { href: '/community', label: 'Community' },
  { href: '/request-meetup', label: 'Host' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[60px]">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2 px-4 py-1.5 border border-card-border rounded-full bg-card/60 hover:bg-card transition-colors">
              <span className="text-[15px] font-serif tracking-[-0.02em] text-coffee-dark">☕ BYOC</span>
            </Link>
            <div className="hidden lg:block w-10 h-px bg-card-border" />
          </div>
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-[13px] text-foreground/60 hover:text-foreground transition-colors tracking-[0.01em]">{link.label}</Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="w-10 h-px bg-card-border" />
            <Link href="/events" className="px-5 py-2 text-[12px] font-medium border border-coffee-dark text-coffee-dark rounded-full hover:bg-coffee-dark hover:text-cream transition-colors tracking-[0.04em] uppercase">Join us</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-card-border">
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[13px] text-foreground/60 hover:text-foreground transition-colors tracking-[0.01em]">{link.label}</Link>
            ))}
            <Link href="/events" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[12px] font-medium border border-coffee-dark text-coffee-dark rounded-full text-center mt-4 tracking-[0.04em] uppercase">Join us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
