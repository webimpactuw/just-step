import Image from "next/image";

export default function EventBanner() {
  return (
    <section
      className="relative overflow-hidden px-6 py-8 md:px-[100px]"
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 100%)",
      }}
    >
      <Image
        src="/Flower Image.png"
        alt=""
        aria-hidden="true"
        width={199}
        height={216}
        className="pointer-events-none absolute right-0 top-0 h-[216px] w-[199px]"
      />

      <div className="relative z-10">
        <h1 className="[font-family:var(--font-display)] text-[48px] leading-none text-[var(--color-text-light)] md:text-[64px]">
          Events & Workshops
        </h1>

        <p className="mt-4 w-full text-[20px] font-normal leading-[150%] tracking-normal text-[var(--color-text-light)] md:whitespace-nowrap">
          Join us for transformative dance experiences, workshops with master
          artists, and cultural celebrations
        </p>
      </div>
    </section>
  );
}