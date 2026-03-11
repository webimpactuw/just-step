import Image from "next/image";

export default function Hero() {
  const scale = "calc(min(100vw, 1440px) / 1440px)";

  return (
    <section
      className="w-full overflow-x-hidden"
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 100%)",
      }}
    >
      {/* Reserve the scaled height */}
      <div
        className="relative mx-auto w-full"
        style={{
          height: `calc(1027px * ${scale})`,
        }}
      >
        {/* Fixed 1440px artboard, scaled as one unit */}
        <div
          className="absolute left-1/2 top-0 origin-top"
          style={{
            width: "1440px",
            height: "1027px",
            transform: `translateX(-50%) scale(${scale})`,
          }}
        >
          {/* Watermark/flower */}
          <div className="pointer-events-none absolute bottom-0 -right-[30px]">
            <Image src="/Flower.png" alt="" width={684} height={741} priority />
          </div>

          {/* LEFT COLUMN */}
          <div className="absolute left-[41px] top-0">
            {/* Top image */}
            <div className="absolute left-0 top-[124px]">
              <div className="relative h-[318.68px] w-[481.48px]">
                <div
                  className="absolute rounded-[10px] border-[3px]"
                  style={{
                    borderColor: "var(--color-accent)",
                    top: "8.26px",
                    left: "11.88px",
                    width: "481.48px",
                    height: "318.68px",
                    transform: "rotate(0.16deg)",
                  }}
                />
                <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                  <Image
                    src="/IMG_7384.JPG"
                    alt="Dancers holding flowers"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bottom image */}
            <div className="absolute left-0 top-[514px]">
              <div className="relative h-[437.97px] w-[661.7px]">
                <div
                  className="absolute rounded-[10px] border-[3px]"
                  style={{
                    borderColor: "var(--color-accent)",
                    top: "11.35px",
                    left: "16.3px",
                    width: "661.7px",
                    height: "437.97px",
                  }}
                />
                <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                  <Image
                    src="/IMG_7369.JPG"
                    alt="Dance performance outdoors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute left-[479px] top-[121px] flex w-[1099px] flex-col items-center">
            <Image
              src="/Hero-Text.png"
              alt="Celebrating Indian Dance"
              width={1099}
              height={357.42620849609375}
              priority
            />
            <p className="mt-[-10px] text-center font-[var(--font-alexandria)] text-[32px] font-normal leading-[1] text-white">
              workshops, performances, events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}