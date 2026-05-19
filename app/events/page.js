import EventsBanner from "../components/events/EventsBanner";
import EventListSection from "../components/events/EventListSection";

const upcomingEvents = [
  {
    id: "upcoming-1",
    day: "17",
    month: "May",
    title: "Chenchu Lakshmi Ballet",
    time: "3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    location: "Snohomish County PUD",
    description: "Don't miss the magic of Chenchu Lakshmi – a Kuchipudi ballet performed in collaboration with Kalamandapam Kuchipudi Dance School!",
    href: "#",
    registerHref: "#",
  },
  {
    id: "upcoming-2",
    day: "17",
    month: "May",
    title: "Chenchu Lakshmi Ballet",
    time: "3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    location: "Snohomish County PUD",
    description: "Don't miss the magic of Chenchu Lakshmi – a Kuchipudi ballet performed in collaboration with Kalamandapam Kuchipudi Dance School!",
    href: "#",
    registerHref: "#",
  },
  {
    id: "upcoming-3",
    day: "17",
    month: "May",
    title: "Chenchu Lakshmi Ballet",
    time: "3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    location: "Snohomish County PUD",
    description: "Don't miss the magic of Chenchu Lakshmi – a Kuchipudi ballet performed in collaboration with Kalamandapam Kuchipudi Dance School!",
    href: "#",
    registerHref: "#",
  },
];

const pastEvents = [
  {
    id: "past-1",
    day: "17",
    month: "May",
    title: "Dance Against COVID",
    time: "3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    location: "Snohomish County PUD",
    description: "Dance Against COVID brought the energy of Indian classical dance online during the pandemic, uniting dancers through virtual workshops and safe recording sessions. Beyond staying connected, the initiative helped raise funds for food banks and communities in need.",
    href: "#",
  },
  {
    id: "past-2",
    day: "17",
    month: "May",
    title: "Dance Against COVID",
    time: "3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    location: "Snohomish County PUD",
    description: "Dance Against COVID brought the energy of Indian classical dance online during the pandemic, uniting dancers through virtual workshops and safe recording sessions. Beyond staying connected, the initiative helped raise funds for food banks and communities in need.",
    href: "#",
  },
  {
    id: "past-3",
    day: "17",
    month: "May",
    title: "Dance Against COVID",
    time: "3:00 PM - 5:00 PM & 6:00 PM - 8:00 PM",
    location: "Snohomish County PUD",
    description: "Dance Against COVID brought the energy of Indian classical dance online during the pandemic, uniting dancers through virtual workshops and safe recording sessions. Beyond staying connected, the initiative helped raise funds for food banks and communities in need.",
    href: "#",
  },
];

export default function Events() {
  return (
    <main>
      <EventsBanner />
      <EventListSection title="Upcoming Events" events={upcomingEvents} isPast={false} />
      <EventListSection title="Past Events" events={pastEvents} isPast={true} />
    </main>
  );
}
