import Link from "next/link";

export default function SupportMission() {
  return (
    <section className="bg-white pt-8 pb-16 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="mb-6 text-[#28282B]"
          style={{ fontFamily: '"Alcazar", serif', fontSize: '40px', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}
        >
          Support Our Mission
        </h2>
        <p
          className="mb-2 text-center text-[#28282B] font-[var(--font-alexandria)]"
          style={{ fontSize: '20px', fontWeight: 400, lineHeight: '150%' }}
        >
          All donations to our organization are tax-deductible to the fullest extent allowed
          by law. We are committed to transparency and accountability in all our
          operations, ensuring that every contribution directly supports our mission of
          preserving and promoting Indian classical dance.
        </p>
        <p
          className="mb-8 text-center font-[var(--font-alexandria)] text-[#3F6F7A]"
          style={{ fontSize: '20px', fontWeight: 700, lineHeight: '150%' }}
        >
          Tax ID Number: 83-2272271
        </p>
        <Link
          href="/donate"
          className="inline-flex items-center justify-center rounded-full bg-[#3F6F7A] px-8 py-3 text-base font-semibold text-white font-[var(--font-alexandria)] transition-colors hover:bg-[#325a63]"
        >
          Make a Donation
        </Link>
      </div>
    </section>
  );
}
