import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export type EventItem = {
  id: string;
  title: string;
  start: string; // display-ready text, e.g. "2025-02-20 • 6:00 PM - 9:00 PM"
  description: string;
  imageSrc: string; // e.g. "/events/natyanjali.jpg"
  href: string; // e.g. "/events/natyanjali-festival"
  ctaLabel?: string; // default: "Learn More"
};

type Props = {
  event: EventItem;
};

export default function EventCard({ event }: Props) {
  return (
    <article className="overflow-hidden rounded-md border-2 border-black/10 bg-white text-neutral-900 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
      <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
        {/* Swap to next/image later if desired */}
        <img
          src={event.imageSrc}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-4 pb-4 pt-4">
        <h3 className="mb-1 text-xl font-extrabold leading-tight">
          {event.title}
        </h3>

        <div className="mb-3 text-xs font-bold text-[#8b3f16]">
          {event.start}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-neutral-800">
          {event.description}
        </p>

        <Link
          href={event.href}
          className="block w-full rounded-full border-2 border-[#8b3f16] px-3 py-2 text-center text-sm font-extrabold text-[#8b3f16] transition hover:-translate-y-[1px] hover:bg-[#8b3f16] hover:text-white"
        >
          {event.ctaLabel ?? "Learn More"}
        </Link>
      </div>
    </article>
  );
}