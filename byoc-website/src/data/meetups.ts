// ─────────────────────────────────────────────────────────────────────────
// Next BYOC meetup — sourced live from the public Luma calendar.
//
// The home page shows the soonest upcoming gathering. Rather than maintain a
// hand-written list, we read the same Luma calendar that powers the embedded
// calendar widget (cal-x5mKvnTRHwbEeV1) via its public iCal feed, parse the
// events, and surface the next one. If the feed is unreachable or empty, the
// caller gets `null` and renders a graceful "to be announced" state.
// ─────────────────────────────────────────────────────────────────────────

const LUMA_CALENDAR_ID = 'cal-x5mKvnTRHwbEeV1';
const LUMA_ICS_URL = `https://api.lu.ma/ics/get?entity=calendar&id=${LUMA_CALENDAR_ID}`;

export interface Meetup {
  city: string;
  country: string;
  flag: string;
  /** UTC instant the gathering starts. */
  date: Date;
  /** Link to the specific Luma event, when available. */
  url?: string;
  /** IANA timezone used to render the local time, e.g. "Asia/Karachi". */
  timeZone: string;
}

export interface NextMeetup extends Meetup {
  /** e.g. "18:00" rendered in the gathering's own timezone. */
  localTime: string;
  /** Short timezone label for that date, e.g. "PKT", "GMT+5". */
  tzLabel: string;
  /** e.g. "Saturday". */
  weekday: string;
  /** e.g. "Jun 13". */
  shortDate: string;
  /** Friendly proximity, e.g. "Today", "This week", "In 3 weeks". */
  proximity: string;
}

// Known BYOC cities → flag, timezone, country. Used to localise the time and
// flag from an event's free-text title/location. Order doesn't matter; we
// match the longest city name first so "San Francisco" beats a stray "San".
const CITY_INFO: Record<string, { flag: string; timeZone: string; country: string }> = {
  islamabad: { flag: '🇵🇰', timeZone: 'Asia/Karachi', country: 'Pakistan' },
  lahore: { flag: '🇵🇰', timeZone: 'Asia/Karachi', country: 'Pakistan' },
  karachi: { flag: '🇵🇰', timeZone: 'Asia/Karachi', country: 'Pakistan' },
  gilgit: { flag: '🇵🇰', timeZone: 'Asia/Karachi', country: 'Pakistan' },
  london: { flag: '🇬🇧', timeZone: 'Europe/London', country: 'United Kingdom' },
  dublin: { flag: '🇮🇪', timeZone: 'Europe/Dublin', country: 'Ireland' },
  berlin: { flag: '🇩🇪', timeZone: 'Europe/Berlin', country: 'Germany' },
  'kuala lumpur': { flag: '🇲🇾', timeZone: 'Asia/Kuala_Lumpur', country: 'Malaysia' },
  singapore: { flag: '🇸🇬', timeZone: 'Asia/Singapore', country: 'Singapore' },
  jakarta: { flag: '🇮🇩', timeZone: 'Asia/Jakarta', country: 'Indonesia' },
  dhaka: { flag: '🇧🇩', timeZone: 'Asia/Dhaka', country: 'Bangladesh' },
  riyadh: { flag: '🇸🇦', timeZone: 'Asia/Riyadh', country: 'Saudi Arabia' },
  doha: { flag: '🇶🇦', timeZone: 'Asia/Qatar', country: 'Qatar' },
  dubai: { flag: '🇦🇪', timeZone: 'Asia/Dubai', country: 'UAE' },
  'san francisco': { flag: '🇺🇸', timeZone: 'America/Los_Angeles', country: 'United States' },
  dallas: { flag: '🇺🇸', timeZone: 'America/Chicago', country: 'United States' },
  virginia: { flag: '🇺🇸', timeZone: 'America/New_York', country: 'United States' },
  toronto: { flag: '🇨🇦', timeZone: 'America/Toronto', country: 'Canada' },
  'dar es salaam': { flag: '🇹🇿', timeZone: 'Africa/Dar_es_Salaam', country: 'Tanzania' },
};

const FALLBACK_CITY = { flag: '📍', timeZone: 'UTC', country: '' };

interface RawEvent {
  start: Date;
  summary: string;
  location: string;
  url?: string;
}

/** Parse an ICS date value like "20250613T123000Z" or "20250613" into a Date. */
function parseIcsDate(value: string): Date | null {
  const m = value.match(/(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2}))?/);
  if (!m) return null;
  const [, y, mo, d, h = '00', mi = '00', s = '00'] = m;
  // Luma emits times in UTC ("Z"); treat date-only and TZID-less values as UTC too.
  return new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +s));
}

function parseIcs(ics: string): RawEvent[] {
  // Unfold folded lines (continuation lines begin with a space or tab).
  const text = ics.replace(/\r\n/g, '\n').replace(/\n[ \t]/g, '');
  const events: RawEvent[] = [];

  for (const chunk of text.split('BEGIN:VEVENT').slice(1)) {
    const body = chunk.split('END:VEVENT')[0];
    const get = (name: string) => {
      const m = body.match(new RegExp(`^${name}[^:\\n]*:(.*)$`, 'm'));
      return m ? m[1].trim() : '';
    };

    if (get('STATUS').toUpperCase() === 'CANCELLED') continue;
    const start = parseIcsDate(get('DTSTART'));
    if (!start) continue;

    const summary = get('SUMMARY');
    const location = get('LOCATION');
    const description = get('DESCRIPTION');
    const urlMatch = `${description} ${location}`.match(/https?:\/\/(?:lu\.ma|luma\.com)\/[^\s\\]+/);

    events.push({ start, summary, location, url: urlMatch?.[0] });
  }

  return events;
}

function resolveCity(raw: RawEvent): { city: string; flag: string; timeZone: string; country: string } {
  const haystack = `${raw.summary} ${raw.location}`.toLowerCase();
  const keys = Object.keys(CITY_INFO).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (haystack.includes(key)) {
      const info = CITY_INFO[key];
      const city = key.replace(/\b\w/g, (c) => c.toUpperCase());
      return { city, ...info };
    }
  }
  // Couldn't match a known city — fall back to a cleaned-up title.
  const city = raw.summary.replace(/byoc|meetup|networking|global|[-—|].*$/gi, '').trim() || 'TBA';
  return { city, ...FALLBACK_CITY };
}

function toNextMeetup(raw: RawEvent, now: Date): NextMeetup {
  const { city, flag, timeZone, country } = resolveCity(raw);
  const date = raw.start;

  const localTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', hour12: false, timeZone,
  }).format(date);

  const tzParts = new Intl.DateTimeFormat('en-US', {
    timeZone, timeZoneName: 'short',
  }).formatToParts(date);
  const tzLabel = tzParts.find((p) => p.type === 'timeZoneName')?.value ?? 'UTC';

  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone }).format(date);
  const shortDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone }).format(date);

  const dayDiff = Math.ceil((date.getTime() - now.getTime()) / 86_400_000);
  let proximity: string;
  if (dayDiff <= 0) proximity = 'Today';
  else if (dayDiff <= 7) proximity = 'This week';
  else if (dayDiff <= 14) proximity = 'Next week';
  else proximity = `In ${Math.ceil(dayDiff / 7)} weeks`;

  return { city, country, flag, date, url: raw.url, timeZone, localTime, tzLabel, weekday, shortDate, proximity };
}

/**
 * Fetches the Luma calendar and returns the soonest gathering still in the
 * future, or `null` if there are none / the feed is unreachable. Cached and
 * revalidated hourly so the home page stays fresh without a request per view.
 */
export async function getNextMeetup(now: Date = new Date()): Promise<NextMeetup | null> {
  try {
    const res = await fetch(LUMA_ICS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const ics = await res.text();

    const upcoming = parseIcs(ics)
      .filter((e) => e.start.getTime() >= now.getTime())
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    return upcoming.length > 0 ? toNextMeetup(upcoming[0], now) : null;
  } catch {
    return null;
  }
}
