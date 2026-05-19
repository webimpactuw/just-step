"use client";

import { useState } from "react";
import EventListCard from "./EventListCard";

const PER_PAGE = 3;

function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-2 font-[var(--font-alexandria)]">
      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        className="px-2 text-[#28282B] disabled:opacity-30 hover:text-[#9f4b18] transition-colors"
      >
        «
      </button>
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-2 text-[#28282B] disabled:opacity-30 hover:text-[#9f4b18] transition-colors"
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`h-8 w-8 rounded-full text-sm font-bold transition-colors ${
            n === page
              ? "bg-[#F5A623] text-white"
              : "text-[#28282B] hover:text-[#F5A623]"
          }`}
        >
          {n}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-2 text-[#28282B] disabled:opacity-30 hover:text-[#9f4b18] transition-colors"
      >
        ›
      </button>
      <button
        onClick={() => setPage(totalPages)}
        disabled={page === totalPages}
        className="px-2 text-[#28282B] disabled:opacity-30 hover:text-[#9f4b18] transition-colors"
      >
        »
      </button>
    </div>
  );
}

export default function EventListSection({ title, events, isPast = false }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(events.length / PER_PAGE));
  const visible = events.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="bg-white px-8 py-14">
      <div className="mx-auto max-w-3xl">
        <h2
          className="mb-10 text-center text-[#28282B]"
          style={{ fontFamily: '"Alcazar", serif', fontSize: '40px', fontWeight: 400, lineHeight: '100%' }}
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
