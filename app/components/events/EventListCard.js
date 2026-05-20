import Link from "next/link";

export default function EventListCard({ event, isPast = false }) {
  return (
    <div className="flex gap-6 rounded-[8px] bg-[#D6E8F0] p-6 items-start">
      <div className="flex-shrink-0 flex flex-col items-center w-[72px] pt-1">
        <span
          className="text-[#28282B] leading-none"
          style={{ fontFamily: '"Alcazar", serif', fontSize: '52px', fontWeight: 400 }}
        >
          {event.day}
        </span>
        <span
          className="text-[#28282B]"
          style={{ fontFamily: '"Alcazar", serif', fontSize: '24px', fontWeight: 400 }}
        >
          {event.month}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3
          className="font-bold text-[#28282B] font-[var(--font-alexandria)]"
          style={{ fontSize: '20px' }}
        >
          {event.title}
        </h3>

        <div className="flex items-center gap-2 font-[var(--font-alexandria)]" style={{ fontSize: '13px', color: '#9f4b18' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>{event.time}</span>
        </div>

        <div className="flex items-center gap-2 font-[var(--font-alexandria)]" style={{ fontSize: '13px', color: '#3F6F7A' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{event.location}</span>
        </div>

        <p className="text-[#28282B] font-[var(--font-alexandria)] leading-relaxed" style={{ fontSize: '14px' }}>
          {event.description}
        </p>

        <div className="flex gap-3 mt-2 flex-wrap">
          {!isPast && event.registerHref && (
            <Link
              href={event.registerHref}
              className="px-5 py-2 rounded-full bg-[#3F6F7A] text-white font-bold font-[var(--font-alexandria)] text-sm hover:bg-[#325a63] transition-colors"
            >
              REGISTER
            </Link>
          )}
          <Link
            href={event.href}
            className="px-5 py-2 rounded-full border border-[#28282B] text-[#28282B] font-bold font-[var(--font-alexandria)] text-sm hover:bg-[#28282B] hover:text-white transition-colors"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
