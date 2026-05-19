import Link from "next/link";
import Image from "next/image";

function AccentLines({ src, left, top }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{
        left,
        top,
        width: "38px",
        height: "31.13px",
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-contain"
        sizes="38px"
      />
    </div>
  );
}

function FramedImage({
  src,
  alt,
  left,
  top,
  width,
  height,
  frameLeft,
  frameTop,
}) {
  return (
    <div
      className="absolute"
      style={{
        left,
        top,
        width,
        height,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute rounded-[8.5px] border-[2.55px]"
        style={{
          left: frameLeft,
          top: frameTop,
          width,
          height,
          borderColor: "var(--color-accent)",
        }}
      />
      <div className="absolute inset-0 overflow-hidden rounded-[8.5px]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export default function Hero() {
  const scale = "calc(min(100vw, 1440px) / 1440px)";

  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, var(--color-primary) 0%, var(--color-primary-2) 70%, var(--color-primary-2) 100%)",
      }}
    >
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          height: `calc(700px * ${scale})`,
        }}
      >
        <div
          className="absolute left-1/2 top-0 origin-top"
          style={{
            width: "1440px",
            height: "700px",
            transform: `translateX(-50%) scale(${scale})`,
          }}
        >
          {/* Flower watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              right: "-30px",
              bottom: "-36px",
              width: "411.85px",
              height: "446.51px",
              opacity: 1.0,
            }}
          >
            <Image
              src="/Flower Image.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Left images */}
          <FramedImage
            src="/IMG_7384.jpg"
            alt="Dancers holding flowers"
            left="79px"
            top="37px"
            width="365.26px"
            height="241.76px"
            frameLeft="9.01px"
            frameTop="7.02px"
          />

          <FramedImage
            src="/IMG_7369.jpg"
            alt="Dance performance outdoors"
            left="79px"
            top="311px"
            width="501.89px"
            height="332.19px"
            frameLeft="12.36px"
            frameTop="9.65px"
          />

          {/* Heading */}
          <div
            className="absolute"
            style={{
              left: "570px",
              top: "80px",
              width: "800px",
              height: "260px",
            }}
          >
            <AccentLines src="/lines-top.png" left="658px" top="13px" />
            <AccentLines src="/lines-bottom.png" left="68px" top="217px" />

            <h1
              className="absolute left-0 top-[7.49px] w-[800px] text-center font-normal leading-[1]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "115px",
                color: "var(--color-text-light)",
              }}
            >
              Celebrating
              <br />
              Indian Dance
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="absolute text-center leading-[1]"
            style={{
              left: "570px",
              top: "350px",
              width: "800px",
              height: "39px",
              fontFamily: "var(--font-alexandria)",
              fontSize: "32px",
              fontWeight: 500,
              color: "var(--color-text-light)",
            }}
          >
            workshops, performances, events
          </p>

          {/* CTA */}
          <Link
            href="/events"
            className="absolute box-border flex items-center justify-center rounded-[20px] border-[3px] border-[var(--color-dark-blue)] bg-[var(--background)] px-[20px] leading-none text-[var(--color-dark-blue)] transition-colors duration-150 hover:bg-[var(--color-dark-blue)] hover:text-[var(--color-text-light)]"
            style={{
              left: "882px",
              top: "438px",
              width: "180px",
              height: "66px",
              fontFamily: "var(--font-alexandria)",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            JOIN US
          </Link>
        </div>
      </div>
    </section>
  );
}