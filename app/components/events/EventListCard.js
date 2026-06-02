import Link from "next/link";

function ClockIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[16.67px] w-[16.67px] shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[1px] h-[20px] w-[16px] shrink-0"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function EventListCard({ event, isPast = false }) {
  const accentColor = isPast ? "#82442B" : "#3F6F7A";
  const desktopHeight = isPast ? "md:h-[350px]" : "md:h-[325px]";

  return (
    <>
      {/* Mobile */}
      <article
        className="overflow-hidden rounded-[10px] border-[3px] bg-[#FAFAFA] md:hidden"
        style={{ borderColor: accentColor }}
      >
        <div
          className="flex items-center justify-center gap-4 px-4 py-6"
          style={{ backgroundColor: accentColor }}
        >
          <span
            className="text-center text-[#FAFAFA]"
            style={{
              fontFamily: '"Alexandria", sans-serif',
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            {event.day}
          </span>

          <span
            className="text-center text-[#FAFAFA]"
            style={{
              fontFamily: '"Alcazar", serif',
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "100%",
            }}
          >
            {event.month}
          </span>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <h3
            className="text-[#28282B]"
            style={{
              fontFamily: '"Alexandria", sans-serif',
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "110%",
            }}
          >
            {event.title}
          </h3>

          {event.time && (
            <div className="flex items-center gap-2 text-[#28282B]">
              <ClockIcon />
              <span
                style={{
                  fontFamily: '"Alexandria", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "120%",
                }}
              >
                {event.time}
              </span>
            </div>
          )}

          {event.location && (
            <div className="flex items-start gap-2 text-[#28282B]">
              <LocationIcon />
              <span
                style={{
                  fontFamily: '"Alexandria", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "150%",
                }}
              >
                {event.location}
              </span>
            </div>
          )}

          {event.description && (
            <p
              className="text-[#28282B]"
              style={{
                fontFamily: '"Alexandria", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25px",
              }}
            >
              {event.description}
            </p>
          )}

          <div className="flex flex-col gap-3 pt-1">
            {!isPast && event.registerHref && (
              <Link
                href={event.registerHref}
                className="flex h-12 items-center justify-center rounded-[20px] bg-[#3F6F7A] px-5 font-bold text-[#FAFAFA] transition-colors hover:bg-[#325a63]"
                style={{
                  fontFamily: '"Alexandria", sans-serif',
                  fontSize: "16px",
                  lineHeight: "100%",
                }}
              >
                REGISTER
              </Link>
            )}

            <Link
              href={event.href}
              className="flex h-12 items-center justify-center rounded-[20px] border-[3px] bg-[#FAFAFA] px-5 font-bold transition-colors hover:text-[#FAFAFA]"
              style={{
                borderColor: "#3F6F7A",
                color: "#3F6F7A",
                fontFamily: '"Alexandria", sans-serif',
                fontSize: "16px",
                lineHeight: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3F6F7A";
                e.currentTarget.style.color = "#FAFAFA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAFA";
                e.currentTarget.style.color = "#3F6F7A";
              }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </article>

      {/* Desktop */}
      <article
        className={`hidden w-full max-w-[1138px] overflow-hidden rounded-[10px] border-[3px] bg-[#FAFAFA] md:flex ${desktopHeight}`}
        style={{ borderColor: accentColor }}
      >
        <div
          className="flex h-full w-[208px] shrink-0 flex-col items-center justify-center rounded-l-[7px] px-4 py-8"
          style={{ backgroundColor: accentColor }}
        >
          <span
            className="flex h-[78px] w-[176px] items-center justify-center text-center text-[#FAFAFA]"
            style={{
              fontFamily: '"Alexandria", sans-serif',
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            {event.day}
          </span>

          <span
            className="flex h-[51px] w-[176px] items-center justify-center text-center text-[#FAFAFA]"
            style={{
              fontFamily: '"Alcazar", serif',
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: "100%",
            }}
          >
            {event.month}
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center px-8 py-8">
          <h3
            className="mb-4 truncate text-[#28282B]"
            style={{
              fontFamily: '"Alexandria", sans-serif',
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            {event.title}
          </h3>

          {event.time && (
            <div className="mb-2 flex items-center gap-2 text-[#28282B]">
              <ClockIcon />
              <span
                className="truncate"
                style={{
                  fontFamily: '"Alexandria", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "100%",
                }}
              >
                {event.time}
              </span>
            </div>
          )}

          {event.location && (
            <div className="mb-4 flex items-start gap-2 text-[#28282B]">
              <LocationIcon />
              <span
                className="truncate"
                style={{
                  fontFamily: '"Alexandria", sans-serif',
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "150%",
                }}
              >
                {event.location}
              </span>
            </div>
          )}

          {event.description && (
            <p
              className="mb-6 max-w-[759px] overflow-hidden text-[#28282B]"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: isPast ? 3 : 2,
                WebkitBoxOrient: "vertical",
                fontFamily: '"Alexandria", sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25px",
              }}
            >
              {event.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {!isPast && event.registerHref && (
              <Link
                href={event.registerHref}
                className="flex h-12 items-center justify-center rounded-[20px] bg-[#3F6F7A] px-5 font-bold text-[#FAFAFA] transition-colors hover:bg-[#325a63]"
                style={{
                  fontFamily: '"Alexandria", sans-serif',
                  fontSize: "16px",
                  lineHeight: "100%",
                }}
              >
                REGISTER
              </Link>
            )}

            <Link
              href={event.href}
              className="flex h-12 items-center justify-center rounded-[20px] border-[3px] bg-[#FAFAFA] px-5 font-bold transition-colors hover:text-[#FAFAFA]"
              style={{
                borderColor: "#3F6F7A",
                color: "#3F6F7A",
                fontFamily: '"Alexandria", sans-serif',
                fontSize: "16px",
                lineHeight: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3F6F7A";
                e.currentTarget.style.color = "#FAFAFA";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAFA";
                e.currentTarget.style.color = "#3F6F7A";
              }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}