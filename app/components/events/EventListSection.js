"use client";

import { useState } from "react";
import EventListCard from "./EventListCard";

const PER_PAGE = 3;

function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-2 font-[var(--font-alexandria)]">
      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        className="px-2 text-[#28282B] transition-colors hover:text-[#C05812] disabled:opacity-30"
      >
        «
      </button>

      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-2 text-[#28282B] transition-colors hover:text-[#C05812] disabled:opacity-30"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`h-10 w-10 rounded-full text-sm font-bold transition-colors ${
            n === page
              ? "bg-[#C05812] text-white"
              : "text-[#28282B] hover:text-[#C05812]"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-2 text-[#28282B] transition-colors hover:text-[#C05812] disabled:opacity-30"
      >
        ›
      </button>

      <button
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
        className="px-2 text-[#28282B] transition-colors hover:text-[#C05812] disabled:opacity-30"
      >
        »
      </button>
    </div>
  );
}

export default function EventListSection({ id, title, events, isPast = false }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(events.length / PER_PAGE));
  const visible = events.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  if (events.length === 0) {
    return null;
  }

  return (
    <section
      id={id}
      className="scroll-mt-[110px] bg-white px-4 py-6 md:px-8 md:py-8"
    >
      <div className="mx-auto max-w-[1138px]">
        <h2
          className="mb-6 text-center text-[#28282B]"
          style={{
            fontFamily: '"Alcazar", serif',
            fontSize: "40px",
            fontWeight: 400,
            lineHeight: "100%",
          }}
        >
          {title}
        </h2>

        <div className="flex flex-col gap-5">
          {visible.map((event) => (
            <EventListCard key={event.id} event={event} isPast={isPast} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </section>
  );
}