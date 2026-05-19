import Image from "next/image";

export default function TestimonialCard({ name, role, quote, image }) {
  return (
    <article className="flex h-[400px] w-full max-w-[430px] flex-col rounded-[10px] bg-[var(--color-tertiary)] p-8 text-[var(--color-text-light)]">
      <div className="flex h-[304px] w-full flex-col gap-6">
        <div className="flex h-[100px] w-full items-center gap-6">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            sizes="100px"
            className="h-[100px] w-[100px] shrink-0 rounded-full object-contain"
          />

          <div className="flex h-[61px] min-w-0 flex-col justify-center gap-2">
            <h3 className="m-0 font-[family-name:var(--font-alexandria)] text-[24px] font-bold leading-none text-[var(--color-text-light)]">
              {name}
            </h3>

            <p className="m-0 font-[family-name:var(--font-alexandria)] text-[20px] font-normal leading-none text-[var(--color-accent)]">
              {role}
            </p>
          </div>
        </div>

        <p className="m-0 h-[180px] w-full font-[family-name:var(--font-alexandria)] text-[20px] font-normal leading-[180%] tracking-normal text-[var(--color-text-light)]">
          <span className="font-bold text-[var(--color-accent)]">“</span>
          {quote}
          <span className="font-bold text-[var(--color-accent)]">”</span>
        </p>
      </div>
    </article>
  );
}