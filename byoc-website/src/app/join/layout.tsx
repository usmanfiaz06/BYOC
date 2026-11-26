import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the community',
  description: 'Apply to join BYOC (Buy Your Own Coffee): founders, executives and operators meeting over coffee in 21 countries. By application, free to join.',
  alternates: { canonical: '/join' },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
