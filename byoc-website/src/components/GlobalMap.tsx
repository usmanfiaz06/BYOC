'use client';

import { useState } from 'react';

const cities = [
  { name: 'Islamabad', country: 'Pakistan', flag: '🇵🇰', meetups: 54, x: 64.5, y: 32, region: 'South Asia' },
  { name: 'Lahore', country: 'Pakistan', flag: '🇵🇰', meetups: 8, x: 65.5, y: 34, region: 'South Asia' },
  { name: 'Karachi', country: 'Pakistan', flag: '🇵🇰', meetups: 5, x: 62, y: 38, region: 'South Asia' },
  { name: 'Gilgit', country: 'Pakistan', flag: '🇵🇰', meetups: 3, x: 65, y: 28, region: 'South Asia' },
  { name: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩', meetups: 3, x: 71, y: 37, region: 'South Asia' },
  { name: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', meetups: 6, x: 54, y: 38, region: 'Middle East' },
  { name: 'Dubai', country: 'UAE', flag: '🇦🇪', meetups: 5, x: 57, y: 38, region: 'Middle East' },
  { name: 'Doha', country: 'Qatar', flag: '🇶🇦', meetups: 4, x: 55.5, y: 39.5, region: 'Middle East' },
  { name: 'London', country: 'UK', flag: '🇬🇧', meetups: 6, x: 42.5, y: 19, region: 'Europe' },
  { name: 'Dublin', country: 'Ireland', flag: '🇮🇪', meetups: 4, x: 40, y: 18, region: 'Europe' },
  { name: 'Berlin', country: 'Germany', flag: '🇩🇪', meetups: 3, x: 46, y: 18.5, region: 'Europe' },
  { name: 'San Francisco', country: 'USA', flag: '🇺🇸', meetups: 5, x: 10, y: 30, region: 'North America' },
  { name: 'Dallas', country: 'USA', flag: '🇺🇸', meetups: 3, x: 16, y: 33, region: 'North America' },
  { name: 'Toronto', country: 'Canada', flag: '🇨🇦', meetups: 3, x: 19, y: 24, region: 'North America' },
  { name: 'Kuala Lumpur', country: 'Malaysia', flag: '🇲🇾', meetups: 4, x: 76, y: 52, region: 'Southeast Asia' },
  { name: 'Singapore', country: 'Singapore', flag: '🇸🇬', meetups: 3, x: 77, y: 55, region: 'Southeast Asia' },
  { name: 'Jakarta', country: 'Indonesia', flag: '🇮🇩', meetups: 2, x: 78.5, y: 58, region: 'Southeast Asia' },
  { name: 'Dar es Salaam', country: 'Tanzania', flag: '🇹🇿', meetups: 2, x: 52.5, y: 58, region: 'Africa' },
];

// Label positioning: offset from pin to avoid overlaps
const labelOffsets: Record<string, { dx: number; dy: number; anchor: string }> = {
  'Islamabad': { dx: 6, dy: -1, anchor: 'start' },
  'Lahore': { dx: 6, dy: 0, anchor: 'start' },
  'Karachi': { dx: -6, dy: 0, anchor: 'end' },
  'Gilgit': { dx: 6, dy: 0, anchor: 'start' },
  'Dhaka': { dx: 6, dy: 0, anchor: 'start' },
  'Riyadh': { dx: -6, dy: 0, anchor: 'end' },
  'Dubai': { dx: 6, dy: 0, anchor: 'start' },
  'Doha': { dx: -6, dy: 2, anchor: 'end' },
  'London': { dx: 6, dy: 0, anchor: 'start' },
  'Dublin': { dx: -6, dy: 0, anchor: 'end' },
  'Berlin': { dx: 6, dy: 0, anchor: 'start' },
  'San Francisco': { dx: 6, dy: -1, anchor: 'start' },
  'Dallas': { dx: 6, dy: 0, anchor: 'start' },
  'Toronto': { dx: 6, dy: 0, anchor: 'start' },
  'Kuala Lumpur': { dx: -6, dy: 0, anchor: 'end' },
  'Singapore': { dx: 6, dy: 0, anchor: 'start' },
  'Jakarta': { dx: 6, dy: 0, anchor: 'start' },
  'Dar es Salaam': { dx: 6, dy: 0, anchor: 'start' },
};

export default function GlobalMap() {
  const [selected, setSelected] = useState<typeof cities[0] | null>(null);

  return (
    <div className="relative">
      {/* Map container */}
      <div className="relative w-full bg-coffee-dark rounded-2xl overflow-hidden" style={{ aspectRatio: '2.4/1' }}>
        <svg
          viewBox="0 0 1000 420"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="1000" height="420" fill="#1A1A1A" />

          {/* Simplified world map paths — continents as filled shapes */}
          <g fill="#2A2520" stroke="#3A3530" strokeWidth="0.5">
            {/* North America */}
            <path d="M40,60 L80,40 L120,35 L160,40 L200,50 L220,70 L230,90 L220,120 L200,140 L180,150 L160,145 L140,155 L120,160 L100,150 L80,140 L60,130 L50,110 L40,90 Z" />
            {/* Central America & Caribbean */}
            <path d="M120,160 L140,155 L160,160 L170,175 L165,185 L155,190 L145,185 L130,180 L120,170 Z" />
            {/* South America */}
            <path d="M160,195 L180,190 L200,195 L220,210 L240,240 L250,270 L260,300 L255,330 L240,350 L220,360 L200,355 L185,340 L175,310 L170,280 L165,250 L160,220 Z" />
            {/* Europe */}
            <path d="M380,50 L400,40 L430,35 L460,40 L490,45 L500,60 L495,80 L485,90 L470,95 L450,90 L440,95 L430,100 L410,95 L395,90 L385,80 L380,65 Z" />
            {/* UK & Ireland */}
            <path d="M385,55 L395,50 L400,55 L398,65 L390,70 L383,65 Z" />
            <path d="M375,55 L380,52 L382,58 L378,62 L374,58 Z" />
            {/* Africa */}
            <path d="M410,140 L440,130 L470,135 L500,140 L520,150 L540,170 L555,200 L560,230 L555,260 L545,290 L530,310 L510,320 L490,315 L470,305 L455,280 L440,260 L430,230 L420,200 L410,170 Z" />
            {/* Middle East */}
            <path d="M500,100 L530,95 L560,100 L575,115 L580,135 L570,150 L555,160 L535,155 L515,145 L505,130 L500,115 Z" />
            {/* India & South Asia */}
            <path d="M580,135 L610,120 L640,115 L660,120 L670,140 L680,160 L685,180 L670,200 L650,215 L630,210 L615,195 L600,180 L590,160 L585,145 Z" />
            {/* Central Asia */}
            <path d="M530,60 L570,55 L610,50 L650,55 L670,65 L680,80 L670,95 L650,105 L620,110 L590,105 L560,95 L540,85 L530,70 Z" />
            {/* East Asia */}
            <path d="M680,60 L720,50 L760,45 L790,50 L810,65 L815,85 L800,100 L780,110 L760,115 L740,110 L720,100 L700,90 L690,75 Z" />
            {/* Southeast Asia */}
            <path d="M720,160 L740,155 L760,160 L775,175 L780,195 L770,210 L755,220 L740,225 L725,215 L715,200 L710,180 Z" />
            {/* Indonesia */}
            <path d="M730,230 L760,225 L790,230 L810,240 L800,250 L780,255 L755,250 L740,245 Z" />
            {/* Australia */}
            <path d="M780,280 L820,270 L860,275 L890,290 L895,310 L880,330 L855,340 L825,340 L800,330 L785,315 L780,295 Z" />
          </g>

          {/* Grid lines */}
          <g stroke="#2A2520" strokeWidth="0.3" opacity="0.5">
            <line x1="0" y1="105" x2="1000" y2="105" strokeDasharray="4,8" />
            <line x1="0" y1="210" x2="1000" y2="210" strokeDasharray="4,8" />
            <line x1="0" y1="315" x2="1000" y2="315" strokeDasharray="4,8" />
            <line x1="250" y1="0" x2="250" y2="420" strokeDasharray="4,8" />
            <line x1="500" y1="0" x2="500" y2="420" strokeDasharray="4,8" />
            <line x1="750" y1="0" x2="750" y2="420" strokeDasharray="4,8" />
          </g>

          {/* Connection lines between cities */}
          <g stroke="#C8802A" strokeWidth="0.3" opacity="0.15">
            {/* Connect some key city pairs */}
            <line x1="100" y1="126" x2="425" y2="80" />
            <line x1="425" y1="80" x2="540" y2="160" />
            <line x1="540" y1="160" x2="645" y2="134" />
            <line x1="645" y1="134" x2="770" y2="218" />
            <line x1="100" y1="126" x2="190" y2="101" />
          </g>

          {/* City pins and labels */}
          {cities.map((city) => {
            const cx = city.x * 10;
            const cy = city.y * 10;
            const offset = labelOffsets[city.name] || { dx: 6, dy: 0, anchor: 'start' };
            const isSelected = selected?.name === city.name;

            return (
              <g
                key={city.name}
                onClick={() => setSelected(isSelected ? null : city)}
                className="cursor-pointer"
              >
                {/* Pulse ring */}
                <circle cx={cx} cy={cy} r="8" fill="#C8802A" opacity="0.08">
                  <animate attributeName="r" values="4;12;4" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.12;0;0.12" dur="3s" repeatCount="indefinite" />
                </circle>

                {/* Outer ring on hover/select */}
                {isSelected && (
                  <circle cx={cx} cy={cy} r="6" fill="none" stroke="#C8802A" strokeWidth="1" opacity="0.5" />
                )}

                {/* Pin dot */}
                <circle cx={cx} cy={cy} r="3" fill="#C8802A" />
                <circle cx={cx} cy={cy} r="1.5" fill="#1A1A1A" />

                {/* City name — always visible */}
                <text
                  x={cx + offset.dx * 1.5}
                  y={cy + offset.dy * 1.5 + 1}
                  textAnchor={offset.anchor as 'start' | 'middle' | 'end'}
                  className="fill-cream/50 hover:fill-cream/90 transition-colors"
                  style={{ fontSize: '7.5px', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.04em' }}
                >
                  {city.name}
                </text>
              </g>
            );
          })}

          {/* BYOC Global label */}
          <text x="20" y="22" style={{ fontSize: '8px', letterSpacing: '0.2em', fontFamily: 'system-ui' }} className="fill-[#C8802A]">
            BYOC GLOBAL
          </text>

          {/* Stats */}
          <text x="980" y="22" textAnchor="end" style={{ fontSize: '22px', fontFamily: 'Georgia, serif' }} className="fill-cream/80">
            18
          </text>
          <text x="980" y="36" textAnchor="end" style={{ fontSize: '7px', letterSpacing: '0.12em', fontFamily: 'system-ui' }} className="fill-cream/30">
            CITIES
          </text>
          <text x="980" y="54" textAnchor="end" style={{ fontSize: '22px', fontFamily: 'Georgia, serif' }} className="fill-cream/80">
            140+
          </text>
          <text x="980" y="68" textAnchor="end" style={{ fontSize: '7px', letterSpacing: '0.12em', fontFamily: 'system-ui' }} className="fill-cream/30">
            GATHERINGS
          </text>

          {/* Legend */}
          <circle cx="20" cy="405" r="3" fill="#C8802A" />
          <text x="30" y="408" style={{ fontSize: '7px', letterSpacing: '0.08em', fontFamily: 'system-ui' }} className="fill-cream/30">
            ACTIVE CHAPTER
          </text>
        </svg>
      </div>

      {/* Selected city detail card */}
      {selected && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[320px] bg-card rounded-xl border border-card-border p-5 shadow-lg">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selected.flag}</span>
              <div>
                <div className="text-[15px] font-medium text-coffee-dark tracking-[-0.01em]">{selected.name}</div>
                <div className="text-[12px] text-muted">{selected.country}</div>
              </div>
            </div>
            <button onClick={() => setSelected(null)} className="text-muted hover:text-coffee-dark text-lg leading-none">&times;</button>
          </div>
          <div className="flex items-center gap-4 text-[12px] text-muted mb-3">
            <span className="text-accent">◆</span>
            <span>{selected.region}</span>
            <span className="text-muted/30">·</span>
            <span>{selected.meetups} gatherings</span>
          </div>
          <div className="flex gap-2">
            <a href="/events" className="flex-1 text-center px-3 py-2 bg-coffee-dark text-cream rounded-lg text-[11px] font-medium tracking-[0.03em] uppercase hover:bg-coffee-medium transition-colors">
              See events
            </a>
            <a href="/chapters" className="flex-1 text-center px-3 py-2 border border-card-border text-coffee-dark rounded-lg text-[11px] font-medium tracking-[0.03em] uppercase hover:border-accent/40 transition-colors">
              Chapter details
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
