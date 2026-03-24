const cities = [
  { name: 'Islamabad', x: 67, y: 30 },
  { name: 'Lahore', x: 68, y: 32 },
  { name: 'Karachi', x: 65, y: 37 },
  { name: 'Gilgit', x: 67, y: 27 },
  { name: 'Dhaka', x: 72, y: 35 },
  { name: 'Riyadh', x: 55, y: 37 },
  { name: 'Dubai', x: 58, y: 37 },
  { name: 'Doha', x: 56, y: 38 },
  { name: 'London', x: 42, y: 20 },
  { name: 'Dublin', x: 39, y: 19 },
  { name: 'Berlin', x: 46, y: 19 },
  { name: 'San Francisco', x: 12, y: 30 },
  { name: 'Dallas', x: 18, y: 33 },
  { name: 'Toronto', x: 20, y: 24 },
  { name: 'Kuala Lumpur', x: 77, y: 52 },
  { name: 'Singapore', x: 78, y: 54 },
  { name: 'Jakarta', x: 79, y: 56 },
  { name: 'Dar es Salaam', x: 53, y: 56 },
];

export default function GlobalMap() {
  return (
    <div className="relative w-full aspect-[2.2/1] bg-coffee-dark rounded-2xl overflow-hidden">
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        {[...Array(12)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${(i + 1) * 8}%`} x2="100%" y2={`${(i + 1) * 8}%`} stroke="#FAF7F4" strokeWidth="0.5" />
        ))}
        {[...Array(20)].map((_, i) => (
          <line key={`v${i}`} x1={`${(i + 1) * 5}%`} y1="0" x2={`${(i + 1) * 5}%`} y2="100%" stroke="#FAF7F4" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Subtle continent hints — very abstract dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        {/* North America outline dots */}
        {[[10,18],[12,20],[14,22],[16,24],[18,26],[20,22],[15,28],[17,30],[19,32],[14,16],[16,18],[18,20],[20,20],[22,22],[21,28],[13,32],[16,35]].map(([cx,cy], i) => (
          <circle key={`na${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#FAF7F4" />
        ))}
        {/* South America */}
        {[[24,50],[25,54],[26,58],[27,62],[26,66],[25,70],[24,74],[23,52],[22,56]].map(([cx,cy], i) => (
          <circle key={`sa${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#FAF7F4" />
        ))}
        {/* Europe */}
        {[[42,16],[44,18],[46,16],[48,18],[43,20],[45,20],[47,20],[41,22],[44,22],[46,22]].map(([cx,cy], i) => (
          <circle key={`eu${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#FAF7F4" />
        ))}
        {/* Africa */}
        {[[47,38],[48,42],[49,46],[50,50],[51,54],[52,58],[48,36],[50,40],[52,44],[53,48],[50,56],[48,52]].map(([cx,cy], i) => (
          <circle key={`af${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#FAF7F4" />
        ))}
        {/* Asia */}
        {[[58,24],[60,22],[62,20],[64,22],[66,24],[68,26],[70,28],[72,30],[74,32],[76,34],[65,30],[67,32],[70,34],[73,36],[62,28],[64,26],[78,40],[80,44],[76,48],[78,52],[80,56]].map(([cx,cy], i) => (
          <circle key={`as${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#FAF7F4" />
        ))}
        {/* Australia */}
        {[[82,62],[84,64],[86,66],[84,68],[82,66],[85,62]].map(([cx,cy], i) => (
          <circle key={`au${i}`} cx={`${cx}%`} cy={`${cy}%`} r="2" fill="#FAF7F4" />
        ))}
      </svg>

      {/* City pins */}
      {cities.map((city) => (
        <div
          key={city.name}
          className="absolute group"
          style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          {/* Pulse ring */}
          <div className="absolute inset-0 w-4 h-4 -ml-2 -mt-2 rounded-full bg-accent/20 animate-ping" style={{ animationDuration: '3s' }} />
          {/* Pin dot */}
          <div className="relative w-2.5 h-2.5 rounded-full bg-accent border-2 border-coffee-dark shadow-[0_0_8px_rgba(200,128,42,0.4)]" />
          {/* Label */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <span className="text-[10px] text-cream/80 bg-coffee-dark/90 px-2 py-0.5 rounded tracking-[0.03em]">{city.name}</span>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-[10px] text-cream/30 tracking-[0.05em] uppercase">Active chapter</span>
        </div>
      </div>

      {/* Stats overlay */}
      <div className="absolute top-5 right-5 text-right">
        <div className="text-[28px] font-serif text-cream/90 leading-none tracking-[-0.02em]">18</div>
        <div className="text-[10px] text-cream/30 tracking-[0.05em] uppercase mt-1">Cities</div>
      </div>
      <div className="absolute top-5 left-5">
        <div className="text-[10px] text-accent tracking-[0.15em] uppercase">BYOC Global</div>
      </div>
    </div>
  );
}
