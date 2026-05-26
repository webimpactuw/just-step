import Link from "next/link";
import Image from "next/image";
import EventGallery from "../../components/events/EventGallery";

const sponsors = [
  { name: "Sponsor 1", logo: "/Sponsor1.png" },
  { name: "Sponsor 2", logo: "/Sponsor2.png" },
  { name: "Sponsor 3", logo: "/Sponsor3.png" },
  { name: "Sponsor 4", logo: "/Sponsor4.png" },
];

const gallerySlides = [
  { src: "/Flyer1.jpg", alt: "Chenchu Lakshmi flyer – left", objectPosition: "left center" },
  { src: "/Flyer1.jpg", alt: "Chenchu Lakshmi flyer – center", objectPosition: "center" },
  { src: "/Flyer1.jpg", alt: "Chenchu Lakshmi flyer – right", objectPosition: "right center" },
];

export default function ChenchuLakshmiBallet() {
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
          Chenchu Lakshmi Ballet
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          <div className="lg:self-start">
            <div className="overflow-hidden rounded-[10px] lg:hidden">
              <Image
                src="/Flyer1.jpg"
                alt="Chenchu Lakshmi Ballet flyer"
                width={600}
                height={750}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="relative hidden pb-3 pr-3 lg:block">
              <div
                className="absolute rounded-[10px] border-[3px] border-[#3F6F7A]"
                style={{ top: "12px", left: "12px", right: "0", bottom: "0" }}
              />
              <div className="relative overflow-hidden rounded-[10px]">
                <Image
                  src="/Flyer1.jpg"
                  alt="Chenchu Lakshmi Ballet flyer"
                  width={600}
                  height={750}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-4 font-[var(--font-alexandria)]">
              <div className="flex items-start gap-3 text-[#28282B]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0 text-[#9f4b18]">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-[16px] md:text-[18px]">Sunday, May 17, 2026</span>
              </div>

              <div className="flex items-start gap-3 text-[#28282B]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0 text-[#9f4b18]">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[16px] md:text-[18px]">Shows at 3:00 PM – 5:00 PM &amp; 6:00 PM – 8:00 PM PST</span>
              </div>

              <div className="flex items-start gap-3 text-[#28282B]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0 text-[#9f4b18]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[16px] md:text-[18px]">Snohomish County PUD<br />2320 California St, Everett, WA 98201, USA</span>
              </div>

              <div className="flex items-start gap-3 text-[#28282B]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0 text-[#9f4b18]">
                  <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span className="text-[16px] md:text-[18px]">General Admission Ticket: $25</span>
              </div>
            </div>

            <p className="font-[var(--font-alexandria)] text-[15px] leading-[180%] text-[#28282B] md:text-[16px]">
              We are pleased to invite you to the KKDS 2026 production ballet, themed &ldquo;Chenchu
              Lakshmi&rdquo;. This timeless Kuchipudi ballet tells the story of devotion triumphing over
              tyranny. The demon king Hiranyakashipu persecutes devotees of Vishnu, but his son
              Prahlada remains steadfast in faith. When challenged, Vishnu appears as Narasimha
              from a pillar and destroys the tyrant, restoring dharma. His cosmic fury is calmed
              when Lakshmi incarnates as Chenchu Lakshmi, transforming Him into the serene
              Narahari and bringing harmony and Loka Kalyanam to the world. This experience will
              leave you in awe! Secure your spot now and get ready for an unforgettable journey!
              Don&rsquo;t miss out on the chance to reserve your spot with family and friends!
            </p>

            <Link
              href="#"
              className="flex w-full items-center justify-center rounded-full bg-[#3F6F7A] px-8 py-3 font-[var(--font-alexandria)] text-[16px] font-bold text-white transition-colors hover:bg-[#325a63] md:w-fit"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-white px-6 py-10 md:py-12">
        <h2
          className="mb-8 text-center text-[#28282B] md:mb-10"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "40px", fontWeight: 400, lineHeight: "100%" }}
        >
          Sponsors &amp; Partners
        </h2>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-12">
          {sponsors.map((s) => (
            <div key={s.name} className="flex items-center justify-center">
              <Image
                src={s.logo}
                alt={s.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        className="overflow-hidden px-4 py-14"
        style={{
          background: "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 100%)",
        }}
      >
        <h2
          className="mb-10 text-center text-white"
          style={{ fontFamily: '"Alcazar", serif', fontSize: "44px", fontWeight: 400, lineHeight: "none" }}
        >
          Gallery
        </h2>
        <EventGallery slides={gallerySlides} />
      </section>

      <div className="border-t border-[#28282B]/10 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link
            href="/events"
            className="flex flex-col gap-1 font-[var(--font-alexandria)] transition-colors hover:text-[#3F6F7A]"
          >
            <span className="flex items-center gap-2 text-[13px] text-[#28282B]/60">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12.5 4.5L7 10L12.5 15.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Date
            </span>
            <span className="text-[16px] font-bold text-[#28282B]">Previous event name</span>
          </Link>

          <Link
            href="/events"
            className="flex flex-col items-end gap-1 font-[var(--font-alexandria)] transition-colors hover:text-[#3F6F7A]"
          >
            <span className="flex items-center gap-2 text-[13px] text-[#28282B]/60">
              Date
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7.5 4.5L13 10L7.5 15.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[16px] font-bold text-[#28282B]">Next event name</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
