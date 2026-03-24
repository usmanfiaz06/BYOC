// Playful hand-drawn style SVG doodles for BYOC
// Coffee-themed and community-themed illustrations

export function CoffeeCupDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 45 C25 45 25 95 25 95 C25 105 35 110 50 110 L70 110 C85 110 95 105 95 95 L95 45"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M95 55 C95 55 110 55 112 65 C114 75 100 80 95 75"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M40 30 C40 20 45 15 45 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M55 25 C55 15 60 10 60 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M70 30 C70 20 75 15 75 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <path d="M20 45 L100 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function ChatBubbleDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15 C10 10 15 5 25 5 L95 5 C105 5 110 10 110 20 L110 55 C110 65 105 70 95 70 L40 70 L20 90 L25 70 L25 70 C15 70 10 65 10 55 Z"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <circle cx="40" cy="38" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="60" cy="38" r="4" fill="currentColor" opacity="0.4"/>
      <circle cx="80" cy="38" r="4" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

export function GlobeDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
      <ellipse cx="60" cy="60" rx="20" ry="45" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M15 45 L105 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 75 L105 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M60 15 L60 105" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function HandshakeDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50 L35 50 L55 35 L75 50 L85 45 L70 60 L50 55 L35 65 L10 65"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M130 50 L105 50 L85 45 L75 50 L85 55 L105 65 L130 65"
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M55 35 C55 35 65 25 75 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function StarDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 L23 15 L33 15 L25 22 L28 33 L20 26 L12 33 L15 22 L7 15 L17 15 Z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.15"/>
    </svg>
  );
}

export function PeopleDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person 1 */}
      <circle cx="40" cy="25" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M20 80 C20 55 30 45 40 45 C50 45 60 55 60 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Person 2 */}
      <circle cx="80" cy="20" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M60 80 C60 50 70 40 80 40 C90 40 100 50 100 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Person 3 */}
      <circle cx="120" cy="25" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M100 80 C100 55 110 45 120 45 C130 45 140 55 140 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

export function ArrowDoodle({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15 C15 15 35 15 50 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M42 8 L52 15 L42 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function CoffeeBeansPattern({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.06">
      <ellipse cx="30" cy="30" rx="12" ry="8" transform="rotate(30 30 30)" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 28 C28 25 32 25 36 28" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="90" cy="60" rx="12" ry="8" transform="rotate(-20 90 60)" stroke="currentColor" strokeWidth="2"/>
      <path d="M84 58 C88 55 92 55 96 58" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="150" cy="30" rx="12" ry="8" transform="rotate(45 150 30)" stroke="currentColor" strokeWidth="2"/>
      <path d="M144 28 C148 25 152 25 156 28" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="50" cy="120" rx="12" ry="8" transform="rotate(-15 50 120)" stroke="currentColor" strokeWidth="2"/>
      <path d="M44 118 C48 115 52 115 56 118" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="130" cy="140" rx="12" ry="8" transform="rotate(25 130 140)" stroke="currentColor" strokeWidth="2"/>
      <path d="M124 138 C128 135 132 135 136 138" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="170" cy="100" rx="12" ry="8" transform="rotate(-30 170 100)" stroke="currentColor" strokeWidth="2"/>
      <path d="M164 98 C168 95 172 95 176 98" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="20" cy="180" rx="12" ry="8" transform="rotate(10 20 180)" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 178 C18 175 22 175 26 178" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="100" cy="170" rx="12" ry="8" transform="rotate(-40 100 170)" stroke="currentColor" strokeWidth="2"/>
      <path d="M94 168 C98 165 102 165 106 168" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="180" cy="170" rx="12" ry="8" transform="rotate(35 180 170)" stroke="currentColor" strokeWidth="2"/>
      <path d="M174 168 C178 165 182 165 186 168" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
