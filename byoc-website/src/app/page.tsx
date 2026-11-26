import Hero from '@/components/home/Hero';
import Origin from '@/components/home/Origin';
import Thesis from '@/components/home/Thesis';
import CupToMap from '@/components/home/CupToMap';
import Receipt from '@/components/home/Receipt';
import TheHour from '@/components/home/TheHour';
import FilmWall from '@/components/home/FilmWall';
import Ladder from '@/components/home/Ladder';
import Rules from '@/components/home/Rules';
import Precedent from '@/components/home/Precedent';
import CityList from '@/components/home/CityList';
import Closing, { OpportunitiesPreview } from '@/components/home/Closing';
import Waitlist from '@/components/home/Waitlist';
import { getNextMeetup } from '@/data/meetups';

// Revalidate hourly so the "next coffee" ribbon stays current.
export const revalidate = 3600;

export default async function Home() {
  const next = await getNextMeetup();
  const ribbon = next
    ? `Next coffee · ${next.city} · ${next.weekday} ${next.shortDate} · ${next.localTime} · Save a seat`
    : '212 gatherings since 2020 · The next coffee is being planned · Buy your own coffee';

  return (
    <>
      <Hero
        ribbon={ribbon}
        ribbonHref={next?.url}
        next={next ? { city: next.city, day: `${next.weekday} ${next.shortDate}`, time: `${next.localTime} ${next.tzLabel}`, proximity: next.proximity, url: next.url ?? '/events' } : null}
      />
      <Origin />
      <FilmWall />
      <Thesis />
      <CupToMap />
      <Receipt />
      <TheHour />
      <Ladder />
      <Rules />
      <Precedent />
      <CityList />
      <OpportunitiesPreview />
      <Waitlist />
      <Closing />
    </>
  );
}
