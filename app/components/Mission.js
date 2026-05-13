import Link from "next/link";
import Image from "next/image";

const values = [
  {
    label: "Community",
    icon: "/icons/community.svg",
  },
  {
    label: "Tradition",
    icon: "/icons/tradition.svg",
  },
  {
    label: "Inclusion",
    icon: "/icons/inclusion.svg",
  },
];

export default function Mission() {
  return (
    <section className="flex min-h-[540px] w-full flex-col items-center justify-center gap-8 bg-background px-[300px] py-[88px]">
      <p className="w-[840px] text-center font-sans text-[28px] font-normal leading-none tracking-normal text-foreground">
        We are a{" "}
        <span className="font-bold text-[var(--color-dark-blue)]">
          501(c)(3) nonprofit organization
        </span>{" "}
        who preserves and promotes the rich heritage of Indian dance through
        education, performance, and community engagement.
      </p>

      <div className="flex h-[150px] w-[840px] items-center justify-between rounded-[20px] px-[50px]">
        {values.map((item) => (
          <div
            key={item.label}
            className="flex h-[120px] w-[150px] flex-col items-center justify-center gap-2 rounded-[20px] p-2.5"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={67}
              height={60}
              className="h-[60px] w-[67px] object-contain"
            />

            <p className="text-center font-sans text-[24px] font-bold leading-none text-foreground">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/about"
        className="box-border inline-flex h-[48px] min-w-[165px] items-center justify-center rounded-[20px] border-[3px] border-[var(--color-dark-blue)] bg-background px-5 font-sans text-[18px] font-bold leading-none text-[var(--color-dark-blue)] transition-colors duration-150 hover:bg-[var(--color-dark-blue)] hover:text-[var(--color-text-light)]"
      >
        LEARN MORE
      </Link>
    </section>
  );
}