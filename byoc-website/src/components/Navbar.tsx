'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/chapters', label: 'Chapters' },
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/community', label: 'Community' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/request-meetup', label: 'Host a Meetup' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/byoc-logo.png"
              alt="BYOC - Buy Your Own Coffee"
              width={100}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-full transition-colors hover:bg-cream-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/events"
              className="px-5 py-2 text-sm font-medium bg-coffee-dark text-cream rounded-full hover:bg-coffee-medium transition-colors"
            >
              Join a Meetup
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-card-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground rounded-lg hover:bg-cream-dark transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium bg-coffee-dark text-cream rounded-lg text-center mt-2"
              >
                Join a Meetup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
