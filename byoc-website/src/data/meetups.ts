// ─────────────────────────────────────────────────────────────────────────
// Upcoming BYOC meetups.
//
// This is the single source of truth for the "next gathering" surfaced on the
// home page. Add new gatherings here and the site will automatically pick the
// soonest one whose date is still in the future — no code changes required.
//
// `startsAt` is an ISO 8601 timestamp WITH an explicit timezone offset so the
// displayed time is correct regardless of where the visitor (or build server)
// is located. Example: Islamabad is UTC+5, so 18:00 local => "+05:00".
// ─────────────────────────────────────────────────────────────────────────

export interface Meetup {
  city: string;
  country: string;
  flag: string;
  /** ISO 8601 with timezone offset, e.g. "2026-06-13T18:00:00+05:00" */
  startsAt: string;
  /** IANA-ish label shown to users, e.g. "PKT", "GST" */
  timezone: string;
  venue?: string;
}

export const upcomingMeetups: Meetup[] = [
  { city: 'Islamabad', country: 'Pakistan', flag: '🇵🇰', startsAt: '2026-06-13T18:00:00+05:00', timezone: 'PKT', venue: 'Coffee Lab, F-7' },
  { city: 'Lahore', country: 'Pakistan', flag: '🇵🇰', startsAt: '2026-06-20T17:00:00+05:00', timezone: 'PKT', venue: 'Gloria Jean\'s, Gulberg' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', startsAt: '2026-06-27T19:00:00+04:00', timezone: 'GST', venue: 'Common Grounds, DIFC' },
  { city: 'London', country: 'United Kingdom', flag: '🇬🇧', startsAt: '2026-07-04T11:00:00+01:00', timezone: 'BST', venue: 'Monmouth Coffee' },
  { city: 'San Francisco', country: 'United States', flag: '🇺🇸', startsAt: '2026-07-11T10:00:00-07:00', timezone: 'PDT', venue: 'Sightglass, SoMa' },
];

export interface NextMeetup extends Meetup {
  date: Date;
  /** e.g. "18:00" in the meetup's own timezone */
  localTime: string;
  /** e.g. "Saturday" */
  weekday: string;
  /** e.g. "Jun 13" */
  shortDate: string;
  /** Human-friendly proximity, e.g. "This week", "Next week", "In 3 weeks" */
  proximity: string;
}

function buildFormatters(startsAt: string) {
  // Derive the meetup's UTC offset (in minutes) from the ISO string so we can
  // render the time in the gathering's own timezone, not the viewer's.
  const offsetMatch = startsAt.match(/([+-])(\d{2}):(\d{2})$/);
  let timeZone: string | undefined;
  if (offsetMatch) {
    const sign = offsetMatch[1] === '-' ? '-' : '+';
    // Etc/GMT signs are inverted, so flip them to keep things intuitive.
    const hours = parseInt(offsetMatch[2], 10);
    if (offsetMatch[3] === '00') {
      timeZone = `Etc/GMT${sign === '+' ? '-' : '+'}${hours}`;
    }
  }
  return { timeZone };
}

/**
 * Returns the soonest gathering still in the future relative to `now`.
 * Falls back to the last meetup in the list if every date has passed, so the
 * UI always has something to show.
 */
export function getNextMeetup(now: Date = new Date()): NextMeetup {
  const sorted = [...upcomingMeetups].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime(),
  );

  const upcoming = sorted.find((m) => new Date(m.startsAt).getTime() >= now.getTime());
  const meetup = upcoming ?? sorted[sorted.length - 1];
  const date = new Date(meetup.startsAt);

  const { timeZone } = buildFormatters(meetup.startsAt);

  const localTime = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', hour12: false, timeZone,
  }).format(date);

  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long', timeZone,
  }).format(date);

  const shortDate = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', timeZone,
  }).format(date);

  // Whole-week distance for a friendly proximity badge.
  const msPerDay = 1000 * 60 * 60 * 24;
  const dayDiff = Math.ceil((date.getTime() - now.getTime()) / msPerDay);
  let proximity: string;
  if (dayDiff <= 0) proximity = 'Today';
  else if (dayDiff <= 7) proximity = 'This week';
  else if (dayDiff <= 14) proximity = 'Next week';
  else proximity = `In ${Math.ceil(dayDiff / 7)} weeks`;

  return { ...meetup, date, localTime, weekday, shortDate, proximity };
}
