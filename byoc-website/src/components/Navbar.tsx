'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About us' },
  { href: '/chapters', label: 'Chapters' },
  { href: '/events', label: 'Events' },
  { href: '/community', label: 'Community' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/request-meetup', label: 'Host a Meetup' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 px-4 py-1.5 border border-card-border rounded-full bg-card/50">
              <span className="text-lg font-bold tracking-tight text-coffee-dark">☕ BYOC</span>
            </Link>
            <div className="hidden lg:block w-12 h-px bg-card-border" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[14px] text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-12 h-px bg-card-border" />
            <Link href="/events" className="text-[14px] text-foreground/70 hover:text-foreground transition-colors">
              Log in
            </Link>
            <Link
              href="/events"
              className="px-5 py-2 text-[14px] font-medium border border-coffee-dark text-coffee-dark rounded-full hover:bg-coffee-dark hover:text-cream transition-colors"
            >
              Join us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-card/50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-card-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-foreground/70 hover:text-foreground rounded-lg hover:bg-card/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium border border-coffee-dark text-coffee-dark rounded-full text-center mt-3"
            >
              Join us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
