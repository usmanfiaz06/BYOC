import { redirect } from 'next/navigation';

// The member platform is coming; until then, send people to request an invite.
export default function CommunityPage() {
  redirect('/join');
}
