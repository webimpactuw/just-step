import TestimonialCard from "./TestimonialCard";

const testimonialData = [
  {
    id: 1,
    name: "Manasa",
    role: "Participant",
    quote:
      "At first I thought online dance would be weird, but it was actually super fun! The teachers made it easy to follow, and I learned a whole routine from my living room.",
    image: "/Profile-Pic-1.png",
  },
  {
    id: 2,
    name: "Vandana",
    role: "Parent",
    quote:
      "My daughter looked forward to every session. The instructors did a wonderful job keeping the kids engaged online, and we loved that the workshop supported a local women’s shelter.",
    image: "/Profile-Pic-2.png",
  },
  {
    id: 3,
    name: "Madhu",
    role: "Parent",
    quote:
      "This was such a positive experience during a difficult time. My child stayed active, connected with other kids virtually, and learned about giving back to the community through dance.",
    image: "/Profile-Pic-3.png",
  },
];

export default function Testimonial() {
  return (
    <section className="flex w-full flex-col gap-8 bg-[var(--background)] px-6 py-12 md:gap-12 md:px-8 md:py-[88px]">
      <h2 className="m-0 text-center font-[family-name:var(--font-display)] text-[40px] font-normal leading-none text-[var(--foreground)] md:text-[56px]">
        Testimonials
      </h2>

      <div className="mx-auto flex w-full max-w-[1376px] flex-col items-stretch gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-8 min-[1390px]:justify-between">
        {testimonialData.map((item) => (
          <TestimonialCard
            key={item.id}
            name={item.name}
            role={item.role}
            quote={item.quote}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}