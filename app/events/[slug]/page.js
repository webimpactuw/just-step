import Link from "next/link";
import { notFound } from "next/navigation";
import EventGallery from "../../components/events/EventGallery";
import { client } from "../../../sanity/lib/client";
import { EVENT_BY_SLUG_QUERY } from "../../../sanity/lib/queries";

export const dynamic = "force-dynamic";

function InfoRow({ icon, children }) {
  return (
    <div className="flex items-start gap-3 text-[#28282B]">
      <span className="mt-[2px] shrink-0 text-[#9f4b18]">{icon}</span>
      <span className="text-[16px] md:text-[18px]">{children}</span>
    </div>
  );
}

const calendarIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const clockIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const locationIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const dollarIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export default async function EventDetailPage({ params }) {
  const routeParams = await params;
  const slug = routeParams.slug;

  const event = await client.fetch(
    EVENT_BY_SLUG_QUERY,
    { slug: slug },
    { cache: "no-store" }
  );

  if (!event) {
    notFound();
  }

  const sponsors = event.sponsors || [];
  const gallerySlides =
    event.gallerySlides && event.gallerySlides.length > 0
      ? event.gallerySlides
      : [{ src: event.mainImageSrc, alt: event.title, objectPosition: "center" }];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <Link
          href="/events"
          className="mb-6 inline-flex items-center gap-2 font-[var(--font-alexandria)] text-[16px] text-[#28282B] transition-colors hover:text-[#3F6F7A]"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 4.5L7 10L12.5 15.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        <h1
          className="mb-6 text-left text-[#28282B] md:mb-8 md:text-center"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "48px", fontWeight: 400, lineHeight: "100%" }}
        >
          {event.title}
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="lg:self-start">
            <div className="overflow-hidden rounded-[10px] lg:hidden">
              <img
                src={event.mainImageSrc}
                alt={`${event.title} flyer`}
                className="h-auto w-full"
              />
            </div>

            <div className="relative hidden pb-3 pr-3 lg:block">
              <div
                className="absolute rounded-[10px] border-[3px] border-[#3F6F7A]"
                style={{ top: "12px", left: "12px", right: "0", bottom: "0" }}
              />
              <div className="relative overflow-hidden rounded-[10px]">
                <img
                  src={event.mainImageSrc}
                  alt={`${event.title} flyer`}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-4 font-[var(--font-alexandria)]">
              {event.dateLabel && (
                <InfoRow icon={calendarIcon}>{event.dateLabel}</InfoRow>
              )}

              {event.timeLabel && (
                <InfoRow icon={clockIcon}>{event.timeLabel}</InfoRow>
              )}

              {(event.locationName || event.locationAddress) && (
                <InfoRow icon={locationIcon}>
                  {event.locationName}
                  {event.locationAddress && (
                    <>
                      <br />
                      {event.locationAddress}
                    </>
                  )}
                </InfoRow>
              )}

              {event.ticketInfo && (
                <InfoRow icon={dollarIcon}>{event.ticketInfo}</InfoRow>
              )}
            </div>

            {event.detailDescription && (
              <p className="whitespace-pre-line font-[var(--font-alexandria)] text-[15px] leading-[180%] text-[#28282B] md:text-[16px]">
                {event.detailDescription}
              </p>
            )}

            {event.registerUrl && (
              <Link
                href={event.registerUrl}
                className="flex w-full items-center justify-center rounded-full bg-[#3F6F7A] px-8 py-3 font-[var(--font-alexandria)] text-[16px] font-bold text-white transition-colors hover:bg-[#325a63] md:w-fit"
              >
                REGISTER
              </Link>
            )}
          </div>
        </div>
      </div>

      {sponsors.length > 0 && (
        <section className="bg-white px-6 py-10 md:py-12">
          <h2
            className="mb-8 text-center text-[#28282B] md:mb-10"
            style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
          >
            Sponsors &amp; Partners
          </h2>

          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-12">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center justify-center">
                {sponsor.logoSrc && (
                  <img
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    className="max-h-[80px] w-[160px] object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {gallerySlides.length > 0 && (
        <section
          className="overflow-hidden px-4 py-14"
          style={{
            background: "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 100%)",
          }}
        >
          <h2
            className="mb-4 text-center text-white"
            style={{ fontFamily: '"Alcazar", serif', fontSize: "56px", fontWeight: 400, lineHeight: "none" }}
          >
            Gallery
          </h2>
          <EventGallery slides={gallerySlides} />
        </section>
      )}
    </main>
  );
}
