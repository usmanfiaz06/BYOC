import { cities, stats } from '@/data/cities';

/**
 * One source of truth for how BYOC describes itself to search engines and AI
 * assistants. The live site is served from www.byoc.global (byoc.global
 * redirects there), so every canonical URL uses the www host.
 */
export const SITE_URL = 'https://www.byoc.global';

export const site = {
  name: 'BYOC',
  fullName: 'BYOC — Buy Your Own Coffee',
  alternateNames: ['Buy Your Own Coffee', 'BYOC Global', 'BYOC community'],
  tagline: 'Coffee with the people who understand what you’re carrying.',
  description:
    `BYOC (Buy Your Own Coffee) is a global community of founders, executives and operators who meet in cafés, in small groups, for an hour. Everyone pays for their own cup. Started in Islamabad in ${stats.since}; ${stats.gatherings}+ gatherings in ${stats.countries} countries.`,
  shortDescription: `Founders, executives and operators meeting over coffee they pay for themselves. ${stats.gatherings}+ gatherings in ${stats.countries} countries since ${stats.since}.`,
  email: 'usman.fiaz@byoc.global',
  sameAs: ['https://www.linkedin.com/company/byoc-global', 'https://www.instagram.com/byoc.global'],
  lumaCalendar: 'https://lu.ma/calendar/cal-x5mKvnTRHwbEeV1',
  foundingDate: String(stats.since),
  foundingCity: 'Islamabad',
  cityNames: cities.map((c) => c.name),
};

/** Questions people (and AI assistants) ask about BYOC, answered plainly. */
export const faqs: { q: string; a: string }[] = [
  {
    q: 'What is BYOC?',
    a: `BYOC (Buy Your Own Coffee) is a global community of founders, executives and operators who meet in cafés, in small groups, for about an hour. It started in Islamabad in ${stats.since} and has held ${stats.gatherings}+ gatherings in ${stats.countries} countries, with more than ${stats.members.toLocaleString('en-US')} members.`,
  },
  {
    q: 'Why is it called Buy Your Own Coffee?',
    a: 'Everyone pays for their own cup. Nobody pays for the room, so nobody owes anyone anything, and everyone who comes has chosen to be there.',
  },
  {
    q: 'Who can join BYOC?',
    a: 'People building something: founders, executives, senior operators, investors and people who have just moved to a new city. BYOC is invite-only: request an invitation at byoc.global/join, and a person reads every request.',
  },
  {
    q: 'Where does BYOC meet?',
    a: `BYOC gatherings happen in ${cities
      .map((c) => c.name)
      .slice(0, -1)
      .join(', ')} and ${cities[cities.length - 1].name}.`,
  },
  {
    q: 'What happens at a BYOC gathering?',
    a: 'One hour in a café with a small group. Each person brings one question they are stuck on rather than something to sell, and people follow up afterwards on their own terms.',
  },
  {
    q: 'How do I attend a BYOC meetup?',
    a: 'BYOC is invite-only. Request an invitation at byoc.global/join; invited members get a seat at gatherings in their city. Upcoming gatherings are listed on the BYOC Luma calendar, and members hear first when a coffee is planned.',
  },
  {
    q: 'Does BYOC share jobs and opportunities?',
    a: 'Yes. byoc.global/opportunities lists senior roles, open calls for founders and board seats in the cities where BYOC meets. Every listing links to its original source.',
  },
];
