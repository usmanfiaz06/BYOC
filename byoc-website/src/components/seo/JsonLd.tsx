import { SITE_URL, site, faqs } from '@/lib/site';
import { cities } from '@/data/cities';

function Script({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

/** Who BYOC is: used on every page. */
export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: site.name,
            legalName: 'BYOC Global',
            alternateName: site.alternateNames,
            url: SITE_URL,
            logo: `${SITE_URL}/images/byoc-logo.svg`,
            description: site.description,
            foundingDate: site.foundingDate,
            foundingLocation: { '@type': 'Place', name: 'Islamabad, Pakistan' },
            email: site.email,
            sameAs: site.sameAs,
            areaServed: cities.map((c) => ({ '@type': 'City', name: c.name, containedInPlace: { '@type': 'Country', name: c.country } })),
            knowsAbout: ['Founder community', 'Executive networking', 'Startup ecosystems', 'Cross-border business', 'Coffee meetups'],
          },
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: site.fullName,
            alternateName: site.alternateNames,
            publisher: { '@id': `${SITE_URL}/#organization` },
            inLanguage: 'en',
          },
        ],
      }}
    />
  );
}

/** The next gathering as a schema.org Event, so it can show in event search. */
export function EventJsonLd({ city, country, start, url }: { city: string; country: string; start: string; url?: string }) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: `BYOC ${city} — Buy Your Own Coffee`,
        description: `An hour over coffee with founders, executives and operators in ${city}. Everyone buys their own cup.`,
        startDate: start,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: { '@type': 'Place', name: `A café in ${city}`, address: { '@type': 'PostalAddress', addressLocality: city, addressCountry: country } },
        organizer: { '@id': `${SITE_URL}/#organization`, '@type': 'Organization', name: site.name, url: SITE_URL },
        image: [`${SITE_URL}/images/hero-crowd.jpg`],
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: url ?? `${SITE_URL}/events` },
        url: url ?? `${SITE_URL}/events`,
      }}
    />
  );
}

/** Mirrors the visible FAQ section on the homepage. */
export function FaqJsonLd() {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }}
    />
  );
}
