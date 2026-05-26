export default function SupportUs() {
  return (
    <section
      className="relative overflow-hidden px-6 py-8 md:px-[100px]"
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 100%)",
      }}
    >
      <img
        src="/Flower Image.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[216px] w-[199px]"
      />

      <div className="relative z-10">
        <h1 className="[font-family:var(--font-display)] text-[40px] leading-none text-[var(--color-text-light)] md:text-[48px] lg:text-[64px]">
          Support Us
        </h1>

        <p className="mt-4 max-w-[979px] text-[16px] font-normal leading-[150%] tracking-normal text-[var(--color-text-light)] md:text-[20px]">
          Your generous donations help us continue our mission of preserving
          and promoting Indian dances
        </p>
      </div>
    </section>
  );
}