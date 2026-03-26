'use client';

import { useState } from 'react';

const cities = [
  { name: 'Islamabad', country: 'Pakistan', flag: '🇵🇰', meetups: 54, coords: [73.05, 33.69] as [number, number], region: 'South Asia' },
  { name: 'Lahore', country: 'Pakistan', flag: '🇵🇰', meetups: 8, coords: [74.35, 31.55] as [number, number], region: 'South Asia' },
  { name: 'Karachi', country: 'Pakistan', flag: '🇵🇰', meetups: 5, coords: [67.01, 24.86] as [number, number], region: 'South Asia' },
  { name: 'Gilgit', country: 'Pakistan', flag: '🇵🇰', meetups: 3, coords: [74.31, 35.92] as [number, number], region: 'South Asia' },
  { name: 'Dhaka', country: 'Bangladesh', flag: '🇧🇩', meetups: 3, coords: [90.41, 23.81] as [number, number], region: 'South Asia' },
  { name: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', meetups: 6, coords: [46.68, 24.71] as [number, number], region: 'Middle East' },
  { name: 'Dubai', country: 'UAE', flag: '🇦🇪', meetups: 5, coords: [55.27, 25.20] as [number, number], region: 'Middle East' },
  { name: 'Doha', country: 'Qatar', flag: '🇶🇦', meetups: 4, coords: [51.53, 25.29] as [number, number], region: 'Middle East' },
  { name: 'London', country: 'UK', flag: '🇬🇧', meetups: 6, coords: [-0.12, 51.51] as [number, number], region: 'Europe' },
  { name: 'Dublin', country: 'Ireland', flag: '🇮🇪', meetups: 4, coords: [-6.26, 53.35] as [number, number], region: 'Europe' },
  { name: 'Berlin', country: 'Germany', flag: '🇩🇪', meetups: 3, coords: [13.41, 52.52] as [number, number], region: 'Europe' },
  { name: 'San Francisco', country: 'USA', flag: '🇺🇸', meetups: 5, coords: [-122.42, 37.77] as [number, number], region: 'North America' },
  { name: 'Dallas', country: 'USA', flag: '🇺🇸', meetups: 3, coords: [-96.80, 32.78] as [number, number], region: 'North America' },
  { name: 'Toronto', country: 'Canada', flag: '🇨🇦', meetups: 3, coords: [-79.38, 43.65] as [number, number], region: 'North America' },
  { name: 'Kuala Lumpur', country: 'Malaysia', flag: '🇲🇾', meetups: 4, coords: [101.69, 3.14] as [number, number], region: 'Southeast Asia' },
  { name: 'Singapore', country: 'Singapore', flag: '🇸🇬', meetups: 3, coords: [103.85, 1.29] as [number, number], region: 'Southeast Asia' },
  { name: 'Jakarta', country: 'Indonesia', flag: '🇮🇩', meetups: 2, coords: [106.85, -6.21] as [number, number], region: 'Southeast Asia' },
  { name: 'Dar es Salaam', country: 'Tanzania', flag: '🇹🇿', meetups: 2, coords: [39.27, -6.79] as [number, number], region: 'Africa' },
];

// Label offsets to avoid overlapping pins
const labelConfig: Record<string, { dx: number; dy: number; anchor: 'start' | 'end' }> = {
  'San Francisco': { dx: -10, dy: 4, anchor: 'end' },
  'Dallas': { dx: 10, dy: 4, anchor: 'start' },
  'Toronto': { dx: 10, dy: 4, anchor: 'start' },
  'Dublin': { dx: -10, dy: 4, anchor: 'end' },
  'London': { dx: 10, dy: -6, anchor: 'start' },
  'Berlin': { dx: 10, dy: 4, anchor: 'start' },
  'Riyadh': { dx: -10, dy: 4, anchor: 'end' },
  'Dubai': { dx: 10, dy: -6, anchor: 'start' },
  'Doha': { dx: -10, dy: 10, anchor: 'end' },
  'Islamabad': { dx: 10, dy: -4, anchor: 'start' },
  'Lahore': { dx: 10, dy: 8, anchor: 'start' },
  'Karachi': { dx: -10, dy: 4, anchor: 'end' },
  'Gilgit': { dx: 10, dy: -6, anchor: 'start' },
  'Dhaka': { dx: 10, dy: 4, anchor: 'start' },
  'Kuala Lumpur': { dx: -10, dy: 4, anchor: 'end' },
  'Singapore': { dx: 10, dy: 6, anchor: 'start' },
  'Jakarta': { dx: 10, dy: 6, anchor: 'start' },
  'Dar es Salaam': { dx: 10, dy: 4, anchor: 'start' },
};

// Equirectangular projection: x = (lon + 180) * (1000/360), y = (90 - lat) * (500/180)
function projectX(lon: number): number {
  return (lon + 180) * (1000 / 360);
}
function projectY(lat: number): number {
  return (90 - lat) * (500 / 180);
}

// Simplified but recognizable continent outlines as SVG paths
// Coordinates are in projected space (viewBox 0 0 1000 500)

const continentPaths = {
  // North America - Alaska, Canada, USA, Mexico, Central America
  northAmerica: `
    M 30,78 L 40,72 55,68 70,65 80,62 95,60 110,58 120,60 130,65 140,70
    145,75 155,72 165,68 170,65 175,70 178,78 175,85 170,90 162,95
    155,100 148,105 142,108 136,112 130,118 125,122 120,125 118,130
    130,128 140,125 148,120 155,115 162,112 170,110 178,108 185,110
    190,115 195,118 200,120 205,118 210,115 218,110 225,108 230,112
    232,118 228,125 222,130 218,135 215,140 212,148 208,155 205,160
    200,165 195,168 190,172 185,175 182,180 180,186 178,192 176,196
    174,200 170,205 168,210 165,215 162,218 158,220 155,222 150,225
    148,230 145,232 140,235 136,234 132,230 128,226 125,222 122,218
    120,214 118,210 115,206 112,204 108,202 104,198 100,194 96,190
    92,188 88,185 84,182 80,178 78,175 76,172 74,168 72,165 70,162
    68,158 66,155 64,152 62,148 60,145 56,142 52,140 48,138 44,135
    40,132 38,128 36,125 34,122 32,118 30,115 28,110 26,106 24,100
    22,95 20,90 22,85 25,82 28,80 Z
  `,

  // South America
  southAmerica: `
    M 155,232 L 158,228 162,225 168,222 175,220 180,222 185,226
    190,230 195,235 198,240 202,248 205,255 208,262 210,270 212,278
    213,285 214,292 213,300 212,308 210,315 208,322 205,330 202,338
    198,345 194,352 190,358 185,362 180,368 175,372 170,378 166,382
    162,388 160,394 158,400 155,406 152,410 148,408 145,404 142,398
    140,392 138,385 136,378 134,370 132,362 130,355 128,348 127,340
    126,332 126,325 127,318 128,310 130,302 132,295 135,288 138,280
    140,272 142,265 144,258 146,250 148,242 150,236 Z
  `,

  // Europe (including British Isles, Iberia, Scandinavia, mainland)
  europe: `
    M 468,82 L 475,78 482,75 490,72 498,70 505,72 510,76 515,80
    518,85 520,90 525,88 530,85 535,82 540,80 545,82 548,86
    550,90 548,95 545,100 540,105 536,108 532,110 528,112 525,115
    530,118 535,120 540,122 545,125 548,128 550,132 548,135
    545,138 540,140 535,142 530,145 525,148 520,150 515,152
    510,155 505,158 502,162 500,165 495,168 490,170 485,168
    480,165 478,160 476,155 474,150 472,145 470,140 468,135
    466,130 464,125 462,120 460,115 458,112 456,108 455,105
    456,100 458,95 460,90 463,86 Z
  `,

  // British Isles
  britishIsles: `
    M 488,98 L 492,95 496,92 498,95 500,99 498,103 495,106 491,108
    488,105 486,102 Z
    M 482,100 L 485,97 487,100 486,104 483,106 480,104 Z
  `,

  // Africa
  africa: `
    M 470,172 L 478,170 485,168 492,170 498,172 505,175 512,178
    518,175 525,172 532,170 538,172 542,176 545,180 548,185
    552,190 555,195 558,200 560,208 562,215 563,222 564,230
    563,238 562,245 560,252 558,260 555,268 552,275 548,282
    545,290 540,296 535,302 530,308 525,312 520,316 515,320
    510,325 505,328 500,330 495,328 490,325 486,320 482,315
    478,310 475,305 472,298 470,292 468,285 467,278 466,270
    465,262 464,255 464,248 465,240 466,232 467,225 468,218
    468,210 468,202 468,195 468,188 468,180 Z
  `,

  // Asia (mainland - Russia, Middle East, India, China, Southeast Asia)
  asia: `
    M 550,90 L 560,85 575,80 590,76 608,72 625,68 642,66 660,65
    678,64 695,63 712,62 730,63 748,65 765,68 780,72 795,76
    808,80 818,85 828,88 838,92 845,98 850,104 855,110 856,118
    854,125 850,130 845,135 840,140 835,145 830,148 825,150
    828,155 832,160 835,165 832,170 828,175 822,180 818,185
    812,190 808,195 802,198 795,200 790,205 785,210 780,215
    775,220 770,225 768,230 770,234 775,238 772,242 768,245
    762,248 756,250 750,248 745,245 740,240 735,235 730,230
    725,228 720,230 715,235 712,240 710,245 708,250 705,255
    700,258 695,260 690,258 685,255 680,250 678,245 676,240
    674,235 672,230 668,226 665,222 660,220 655,218 650,216
    645,218 640,222 635,225 630,228 625,230 620,228 615,225
    610,220 605,215 600,210 595,205 590,200 585,195 580,190
    575,185 570,180 565,175 560,170 555,165 552,160 550,155
    548,148 547,140 548,132 550,125 552,118 554,112 555,105
    553,98 Z
  `,

  // India subcontinent (more detail)
  india: `
    M 668,175 L 675,172 682,170 690,172 695,178 700,185 705,192
    708,200 710,208 708,215 705,222 700,228 695,232 690,238
    685,242 680,245 675,242 672,238 670,232 668,225 666,218
    665,210 664,202 664,195 665,188 666,182 Z
  `,

  // Arabian Peninsula
  arabianPeninsula: `
    M 595,175 L 605,172 615,170 625,172 632,178 636,185 638,192
    636,200 632,208 625,215 618,218 610,220 602,218 596,212
    592,205 590,198 588,190 590,182 Z
  `,

  // Japan
  japan: `
    M 848,118 L 852,112 856,108 860,112 862,118 860,125 856,132
    852,138 848,135 846,128 847,122 Z
    M 842,138 L 846,135 848,140 846,145 842,148 840,144 Z
  `,

  // Australia
  australia: `
    M 755,310 L 770,305 785,302 800,300 815,302 828,305 838,310
    845,318 848,325 850,335 848,342 845,350 840,356 832,360
    825,362 815,364 805,366 795,368 785,366 775,362 768,358
    762,352 758,345 755,338 754,330 754,322 754,316 Z
  `,

  // New Zealand
  newZealand: `
    M 878,365 L 882,360 886,358 888,362 886,368 882,374 878,378
    876,375 875,370 Z
    M 880,378 L 884,376 886,380 884,385 880,388 878,384 Z
  `,

  // Indonesia archipelago (simplified)
  indonesia: `
    M 742,260 L 752,258 762,256 770,258 778,260 785,262 792,260
    798,258 805,260 810,262 815,260 820,258 825,260 828,264
    825,268 820,270 815,268 810,266 805,268 798,270 792,268
    785,270 778,268 770,270 762,268 752,266 745,264 Z
  `,

  // Greenland
  greenland: `
    M 290,48 L 305,42 320,38 335,40 345,45 350,52 348,60 342,65
    335,68 325,70 315,68 305,65 298,60 292,55 Z
  `,
};

function CoffeeCupPin({
  x,
  y,
  isSelected,
  onClick,
}: {
  x: number;
  y: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <g
      transform={`translate(${x}, ${y})`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Pulse animation */}
      <circle r={8} fill="#C8802A" opacity={0.15}>
        <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* Selection ring */}
      {isSelected && (
        <circle r={12} fill="none" stroke="#C8802A" strokeWidth={1.5} opacity={0.6} />
      )}
      {/* Coffee cup icon */}
      <g transform="translate(-8,-8) scale(0.7)">
        <circle cx="12" cy="12" r="12" fill="#1A1510" opacity="0.6" />
        <path
          d="M6 8h10v8c0 2.2-2.2 4-5 4s-5-1.8-5-4z"
          fill="none"
          stroke="#C8802A"
          strokeWidth="1.5"
        />
        <path
          d="M16 10h1.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H16"
          fill="none"
          stroke="#C8802A"
          strokeWidth="1.5"
        />
        <line x1="9" y1="5" x2="9" y2="7" stroke="#C8802A" strokeWidth="1" opacity="0.5" />
        <line x1="11" y1="4" x2="11" y2="7" stroke="#C8802A" strokeWidth="1" opacity="0.5" />
        <line x1="13" y1="5" x2="13" y2="7" stroke="#C8802A" strokeWidth="1" opacity="0.5" />
      </g>
    </g>
  );
}

export default function GlobalMap() {
  const [selected, setSelected] = useState<(typeof cities)[0] | null>(null);

  return (
    <div className="relative">
      <div className="relative w-full bg-coffee-dark rounded-2xl overflow-hidden border border-[#2a2520]">
        {/* Header bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4">
          <span className="text-[10px] text-accent tracking-[0.18em] uppercase font-medium">
            BYOC Global
          </span>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-[20px] font-serif text-cream/80 leading-none">18</div>
              <div className="text-[9px] text-cream/30 tracking-[0.1em] uppercase mt-0.5">
                Cities
              </div>
            </div>
            <div className="text-right">
              <div className="text-[20px] font-serif text-cream/80 leading-none">140+</div>
              <div className="text-[9px] text-cream/30 tracking-[0.1em] uppercase mt-0.5">
                Gatherings
              </div>
            </div>
          </div>
        </div>

        {/* SVG World Map */}
        <svg
          viewBox="0 0 1000 500"
          style={{ width: '100%', height: 'auto', aspectRatio: '2.4/1', display: 'block' }}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Background */}
          <rect x="0" y="0" width="1000" height="500" fill="#1A1510" />

          {/* Grid lines for subtle effect */}
          {[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="1000"
              y2={y}
              stroke="#222018"
              strokeWidth="0.5"
            />
          ))}
          {[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000].map(
            (x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="500"
                stroke="#222018"
                strokeWidth="0.5"
              />
            )
          )}

          {/* Continent shapes */}
          {Object.entries(continentPaths).map(([name, path]) => (
            <path
              key={name}
              d={path}
              fill="#2A2520"
              stroke="#3A3530"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
          ))}

          {/* City markers with coffee cup pins */}
          {cities.map((city) => {
            const x = projectX(city.coords[0]);
            const y = projectY(city.coords[1]);
            const config = labelConfig[city.name] || {
              dx: 10,
              dy: 4,
              anchor: 'start' as const,
            };
            const isSelected = selected?.name === city.name;

            return (
              <g key={city.name}>
                <CoffeeCupPin
                  x={x}
                  y={y}
                  isSelected={isSelected}
                  onClick={() => setSelected(isSelected ? null : city)}
                />
                {/* Label */}
                <text
                  x={x + config.dx}
                  y={y + config.dy}
                  textAnchor={config.anchor}
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: '7px',
                    fill: isSelected ? '#C8802A' : 'rgba(250,247,244,0.55)',
                    letterSpacing: '0.03em',
                    fontWeight: isSelected ? 600 : 400,
                    pointerEvents: 'none',
                  }}
                >
                  {city.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[9px] text-cream/25 tracking-[0.08em] uppercase">
            Active chapter
          </span>
        </div>
      </div>

      {/* Detail card */}
      {selected && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[300px] bg-card rounded-xl border border-card-border p-5 shadow-xl z-20">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selected.flag}</span>
              <div>
                <div className="text-[15px] font-medium text-coffee-dark tracking-[-0.01em]">
                  {selected.name}
                </div>
                <div className="text-[12px] text-muted">{selected.country}</div>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="text-muted hover:text-coffee-dark text-lg leading-none"
            >
              &times;
            </button>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-muted mb-4">
            <span className="text-accent text-[8px]">&#9670;</span>
            <span>{selected.region}</span>
            <span className="text-muted/30">&middot;</span>
            <span>{selected.meetups} gatherings</span>
          </div>
          <div className="flex gap-2">
            <a
              href="/events"
              className="flex-1 text-center px-3 py-2 bg-coffee-dark text-cream rounded-lg text-[11px] font-medium tracking-[0.03em] uppercase hover:bg-coffee-medium transition-colors"
            >
              Events
            </a>
            <a
              href="/chapters"
              className="flex-1 text-center px-3 py-2 border border-card-border text-coffee-dark rounded-lg text-[11px] font-medium tracking-[0.03em] uppercase hover:border-accent/40 transition-colors"
            >
              Chapter
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
