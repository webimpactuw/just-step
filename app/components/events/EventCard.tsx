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
    <article className="flex h-[545px] w-[600px] max-w-[calc(100vw-64px)] shrink-0 flex-col gap-[22px] overflow-hidden rounded-[10px] border-[2px] border-[color:var(--color-dark-blue)] bg-[color:var(--background)] p-5 font-sans text-[color:var(--foreground)]">
      <div className="h-[280px] w-full shrink-0 overflow-hidden rounded-[10px] bg-[color:var(--color-text-light)]">
        <img
          src={event.imageSrc}
          alt={event.title}
          loading="lazy"
          draggable={false}
          className="pointer-events-none h-full w-full object-cover"
        />
      </div>

      <div className="flex h-[125px] w-full shrink-0 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="h-[29px] overflow-hidden text-[24px] font-bold leading-[29px] text-[color:var(--foreground)]">
            {event.title}
          </h3>

          <p className="h-[20px] overflow-hidden text-[16px] font-normal leading-[20px] text-[color:var(--color-dark-blue)]">
            {event.start}
          </p>
        </div>

        <p className="line-clamp-2 h-[44px] overflow-hidden text-[18px] font-normal leading-[22px] text-[color:var(--foreground)]">
          {event.description}
        </p>
      </div>

      <Link
        href={event.href}
        className="flex h-[56px] w-full shrink-0 items-center justify-center rounded-[20px] border-[3px] border-[color:var(--color-dark-blue)] bg-[color:var(--background)] px-5 text-center text-[18px] font-bold leading-[22px] text-[color:var(--color-dark-blue)] transition-colors hover:bg-[color:var(--color-dark-blue)] hover:text-[color:var(--color-text-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)]"
      >
        {event.ctaLabel ?? "LEARN MORE"}
      </Link>
    </article>
  );
}