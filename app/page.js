import Hero from "./components/home/Hero";
import EventCarousel from "./components/events/EventCarousel";
import Mission from "./components/home/Mission";
import Testimonial from "./components/home/Testimonial";
import { client } from "../sanity/lib/client";
import { EVENTS_QUERY } from "../sanity/lib/queries";

const fallbackEvents = [
  {
    id: "event-1",
    title: "Sample Event One",
    start: "Mar 12 • 6:00 PM – 8:00 PM",
    description: "This is a placeholder description for your first event.",
    imageSrc: "/events/event_placeholder_img.png",
    href: "/events/sample-event-one",
    ctaLabel: "LEARN MORE",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  let sanityEvents = [];

  try {
    sanityEvents = await client.fetch(EVENTS_QUERY, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Failed to fetch Sanity events:", error);
  }

  const upcomingEvents = sanityEvents.filter(
    (event) => event.status !== "past"
  );

  const pastEvents = sanityEvents.filter(
    (event) => event.status === "past"
  );

  const hasUpcomingEvents = upcomingEvents.length > 0;
  const hasPastEvents = pastEvents.length > 0;

  const events = hasUpcomingEvents
    ? upcomingEvents
    : hasPastEvents
      ? pastEvents
      : fallbackEvents;

  const carouselTitle = hasUpcomingEvents
    ? "Upcoming Events"
    : hasPastEvents
      ? "Past Events"
      : "Upcoming Events";

  return (
    <main>
      <Hero />
      <Mission />
      <EventCarousel title={carouselTitle} events={events} />
      <Testimonial />
    </main>
  );
}