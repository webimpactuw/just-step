import Link from "next/link";

export type EventItem = {
  id: string;
  title: string;
  start: string;
  description: string;
  imageSrc: string;
  href: string;
  ctaLabel?: string;
};

type Props = {
  event: EventItem;
};

export default function EventCard({ event }: Props) {
  return (
    <article className="overflow-hidden rounded-[8px] border-[2px] border-black bg-[#f7f7f7] text-neutral-900 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
      <div className="bg-white p-[16px]">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-[6px] bg-neutral-100">
          <img
            src={event.imageSrc}
            alt={event.title}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover pointer-events-none"
          />
        </div>
      </div>

      <div className="px-5 pb-5 pt-2">
        <h3 className="mb-1 text-[20px] font-extrabold leading-tight text-[#222222]">
          {event.title}
        </h3>

        <div className="mb-4 text-[12px] font-semibold tracking-[0.02em] text-[#9a4c23]">
          {event.start}
        </div>

        <p className="mb-5 text-[14px] leading-[1.35] text-[#2f2f2f]">
          {event.description}
        </p>

        <Link
          href={event.href}
          className="block w-full rounded-full border-[2px] border-[#9a4c23] bg-transparent px-4 py-[11px] text-center text-[15px] font-extrabold text-[#9a4c23] transition hover:bg-[#9a4c23] hover:text-white"
        >
          {event.ctaLabel ?? "Learn More"}
        </Link>
      </div>
    </article>
  );
}