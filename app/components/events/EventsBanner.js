import Image from "next/image";

export default function EventsBanner() {
  return (
    <section
      className="relative overflow-hidden px-20 py-10"
      style={{
        background: "linear-gradient(90deg, #c7641f 0%, #9f4b18 38%, #7a2d0b 100%)",
      }}
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <Image src="/Flower.png" alt="" width={220} height={238} />
      </div>

      <div className="relative">
        <h1
          className="text-white"
          style={{ fontFamily: '"Alcazar", serif', fontSize: '52px', fontWeight: 400, lineHeight: '100%' }}
        >
          Events &amp; Workshops
        </h1>
        <p
          className="mt-3 text-white/90 font-[var(--font-alexandria)]"
          style={{ fontSize: '16px', fontWeight: 400 }}
        >
          Join us for transformative dance experiences, workshops with master artists, and cultural celebrations
        </p>
      </div>
    </section>
  );
}
