import Image from "next/image";

export default function TestimonialCard({ name, role, quote, image }) {
  return (
    <article className="flex w-full max-w-[430px] flex-col rounded-[10px] bg-[var(--color-tertiary)] p-8 text-[var(--color-text-light)] md:h-[400px]">
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full items-center gap-6">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            sizes="100px"
            className="h-[72px] w-[72px] shrink-0 rounded-full object-contain md:h-[100px] md:w-[100px]"
          />
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <h3 className="m-0 font-[family-name:var(--font-alexandria)] text-[20px] font-bold leading-none text-[var(--color-text-light)] md:text-[24px]">
              {name}
            </h3>
            <p className="m-0 font-[family-name:var(--font-alexandria)] text-[16px] font-normal leading-none text-[var(--color-accent)] md:text-[20px]">
              {role}
            </p>
          </div>
        </div>

        <p className="m-0 w-full font-[family-name:var(--font-alexandria)] text-[16px] font-normal leading-[180%] tracking-normal text-[var(--color-text-light)] md:text-[20px]">
          <span className="font-bold text-[var(--color-accent)]">"</span>
          {quote}
          <span className="font-bold text-[var(--color-accent)]">"</span>
        </p>
      </div>
    </article>
  );
}
