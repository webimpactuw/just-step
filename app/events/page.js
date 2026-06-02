import EventsBanner from "../components/events/EventsBanner";
import EventListSection from "../components/events/EventListSection";
import { client } from "../../sanity/lib/client";
import { EVENT_LIST_QUERY } from "../../sanity/lib/queries";

export const dynamic = "force-dynamic";

export default async function Events() {
  let events = [];

  try {
    events = await client.fetch(EVENT_LIST_QUERY, {}, { cache: "no-store" });
  } catch (error) {
    console.error("Failed to fetch Sanity events:", error);
  }

  const upcomingEvents = events.filter((event) => event.status !== "past");
  const pastEvents = events.filter((event) => event.status === "past");

  return (
    <main>
      <EventsBanner />

      <EventListSection
        id="upcoming-events"
        title="Upcoming Events"
        events={upcomingEvents}
        isPast={false}
        spacing="top"
      />

      <EventListSection
        id="past-events"
        title="Past Events"
        events={pastEvents}
        isPast={true}
        spacing="tight"
      />
    </main>
  );
}