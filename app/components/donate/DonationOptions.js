const donationOptions = [
  {
    name: "Zeffy",
    logo: "/zefy-logo.png",
    logoAlt: "Zeffy",
    description:
      "Support JustStep directly through our Zeffy by making a secure, fee-free donation on our page. Every donation, big or small, helps us continue our mission and truly makes a difference—your support means the world to us!",
    buttonText: "DONATE VIA ZEFFY",
    href: "https://www.zeffy.com/",
  },
  {
    name: "Benevity",
    logo: "/benevity-logo.png",
    logoAlt: "Benevity",
    description:
      "If your employer offers workplace giving, you can donate to JustStep through Benevity by searching for our nonprofit in your company’s portal. Many employers offer matching, so your gift can go twice as far.",
    buttonText: "DONATE VIA BENEVITY",
    href: "https://benevity.com/",
  },
];

function DonationCard({ option }) {
  return (
    <article className="w-full max-w-[544px] min-h-[476px] overflow-hidden rounded-[10px] border-[3px] border-[var(--color-dark-blue)] bg-[var(--background)]">
      <div className="flex h-[144px] items-center border-b-[3px] border-[var(--color-dark-blue)] bg-[#D6E8EE] px-8">
        <img
          src={option.logo}
          alt={option.logoAlt}
          className="max-h-20 max-w-[230px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-7 p-8">
        <p className="min-h-[180px] text-[20px] leading-[180%] text-[var(--foreground)]">
          {option.description}
        </p>

        <a
          href={option.href}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-full items-center justify-center rounded-[20px] border-[3px] border-[var(--color-dark-blue)] bg-[var(--color-dark-blue)] px-5 text-center text-[18px] font-bold leading-none text-[var(--color-text-light)] transition-colors duration-200 hover:bg-[var(--color-text-light)] hover:text-[var(--color-dark-blue)]"
        >
          {option.buttonText}
        </a>
      </div>
    </article>
  );
}

export default function DonationOptions() {
  return (
    <section className="bg-[var(--background)]">
      <div
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
          <h1 className="[font-family:var(--font-display)] text-[48px] leading-none text-[var(--color-text-light)] md:text-[64px]">
            Support Us
          </h1>

          <p className="mt-4 max-w-[979px] text-[18px] leading-[150%] tracking-wide text-[var(--color-text-light)] md:text-[20px]">
            Your generous donations help us continue our mission of preserving
            and promoting Indian dances
          </p>
        </div>
      </div>

      <div className="px-6 pb-[88px] pt-12 md:px-[100px]">
        <h2 className="mb-12 text-center [font-family:var(--font-display)] text-[44px] leading-none text-[var(--foreground)] md:text-[56px]">
          Donation Options
        </h2>

        <div className="mx-auto grid max-w-[1216px] grid-cols-1 justify-items-center gap-8 lg:grid-cols-2 lg:gap-[128px]">
          {donationOptions.map((option) => (
            <DonationCard key={option.name} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}