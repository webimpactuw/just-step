import Hero from "./components/Hero";
import EventCarousel from "./components/events/EventCarousel";
import Testimonial from "./components/Testimonial";

export default function Home() {
  const events = [
    {
      id: "event-1",
      title: "Sample Event One",
      start: "Mar 12 • 6:00 PM – 8:00 PM",
      description:
        "This is a placeholder description for your first event.",
      imageSrc: "/events/event_placeholder_img.png",
      href: "/events/sample-event-one",
    },
    {
      id: "event-2",
      title: "Sample Event Two",
      start: "Mar 18 • 5:30 PM – 7:00 PM",
      description:
        "Another placeholder event to help visualize the carousel behavior.",
      imageSrc: "/events/event_placeholder_img.png",
      href: "/events/sample-event-two",
    },
    {
      id: "event-3",
      title: "Sample Event Three",
      start: "Mar 25 • 4:00 PM – 6:30 PM",
      description:
        "Add as many events as needed to test scrolling, dots, and arrows.",
      imageSrc: "/events/event_placeholder_img.png",
      href: "/events/sample-event-three",
    },
  ];

  return (
    <main>
      <Hero />
       <EventCarousel events={events} />
      <Testimonial />
    </main>
  );
}