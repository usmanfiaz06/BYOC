'use client';

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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
  'San Francisco': { dx: -8, dy: 4, anchor: 'end' },
  'Dallas': { dx: 8, dy: 4, anchor: 'start' },
  'Toronto': { dx: 8, dy: 4, anchor: 'start' },
  'Dublin': { dx: -8, dy: 4, anchor: 'end' },
  'London': { dx: 8, dy: -4, anchor: 'start' },
  'Berlin': { dx: 8, dy: 4, anchor: 'start' },
  'Riyadh': { dx: -8, dy: 4, anchor: 'end' },
  'Dubai': { dx: 8, dy: -4, anchor: 'start' },
  'Doha': { dx: -8, dy: 8, anchor: 'end' },
  'Islamabad': { dx: 8, dy: -2, anchor: 'start' },
  'Lahore': { dx: 8, dy: 6, anchor: 'start' },
  'Karachi': { dx: -8, dy: 4, anchor: 'end' },
  'Gilgit': { dx: 8, dy: -4, anchor: 'start' },
  'Dhaka': { dx: 8, dy: 4, anchor: 'start' },
  'Kuala Lumpur': { dx: -8, dy: 4, anchor: 'end' },
  'Singapore': { dx: 8, dy: 4, anchor: 'start' },
  'Jakarta': { dx: 8, dy: 4, anchor: 'start' },
  'Dar es Salaam': { dx: 8, dy: 4, anchor: 'start' },
};

export default function GlobalMap() {
  const [selected, setSelected] = useState<typeof cities[0] | null>(null);

  return (
    <div className="relative">
      <div className="relative w-full bg-coffee-dark rounded-2xl overflow-hidden border border-[#2a2520]">
        {/* Header bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4">
          <span className="text-[10px] text-accent tracking-[0.18em] uppercase font-medium">BYOC Global</span>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-[20px] font-serif text-cream/80 leading-none">18</div>
              <div className="text-[9px] text-cream/30 tracking-[0.1em] uppercase mt-0.5">Cities</div>
            </div>
            <div className="text-right">
              <div className="text-[20px] font-serif text-cream/80 leading-none">140+</div>
              <div className="text-[9px] text-cream/30 tracking-[0.1em] uppercase mt-0.5">Gatherings</div>
            </div>
          </div>
        </div>

        {/* Map */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 130, center: [30, 20] }}
          style={{ width: '100%', height: 'auto', aspectRatio: '2.4/1' }}
        >
          <ZoomableGroup>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2A2520"
                    stroke="#3A3530"
                    strokeWidth={0.4}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#332D26', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* City markers */}
            {cities.map((city) => {
              const config = labelConfig[city.name] || { dx: 8, dy: 4, anchor: 'start' as const };
              const isSelected = selected?.name === city.name;

              return (
                <Marker
                  key={city.name}
                  coordinates={city.coords}
                  onClick={() => setSelected(isSelected ? null : city)}
                  className="cursor-pointer"
                >
                  {/* Pulse */}
                  <circle r={6} fill="#C8802A" opacity={0.15}>
                    <animate attributeName="r" values="4;10;4" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
                  </circle>
                  {/* Selection ring */}
                  {isSelected && <circle r={6} fill="none" stroke="#C8802A" strokeWidth={1.5} opacity={0.6} />}
                  {/* Outer dot */}
                  <circle r={3.5} fill="#C8802A" />
                  {/* Inner dot */}
                  <circle r={1.5} fill="#1A1A1A" />
                  {/* Label */}
                  <text
                    textAnchor={config.anchor}
                    x={config.dx}
                    y={config.dy}
                    style={{
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '8px',
                      fill: isSelected ? '#C8802A' : 'rgba(250,247,244,0.55)',
                      letterSpacing: '0.03em',
                      fontWeight: isSelected ? 600 : 400,
                    }}
                  >
                    {city.name}
                  </text>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* Legend */}
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[9px] text-cream/25 tracking-[0.08em] uppercase">Active chapter</span>
        </div>
      </div>

      {/* Detail card */}
      {selected && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[300px] bg-card rounded-xl border border-card-border p-5 shadow-xl z-20">
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
          <div className="flex items-center gap-3 text-[12px] text-muted mb-4">
            <span className="text-accent text-[8px]">◆</span>
            <span>{selected.region}</span>
            <span className="text-muted/30">·</span>
            <span>{selected.meetups} gatherings</span>
          </div>
          <div className="flex gap-2">
            <a href="/events" className="flex-1 text-center px-3 py-2 bg-coffee-dark text-cream rounded-lg text-[11px] font-medium tracking-[0.03em] uppercase hover:bg-coffee-medium transition-colors">Events</a>
            <a href="/chapters" className="flex-1 text-center px-3 py-2 border border-card-border text-coffee-dark rounded-lg text-[11px] font-medium tracking-[0.03em] uppercase hover:border-accent/40 transition-colors">Chapter</a>
          </div>
        </div>
      )}
    </div>
  );
}
