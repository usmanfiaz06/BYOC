import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request an invitation',
  description: 'BYOC (Buy Your Own Coffee) is invite-only. Request an invitation to meet founders, executives and operators over coffee in 21 countries.',
  alternates: { canonical: '/join' },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
