"use client";

import { useState } from "react";
import Image from "next/image";

type GallerySlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type Props = {
  slides: GallerySlide[];
};

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

const CARD_W = 480;
const CARD_H = 460;
const SIDE_OFFSET = 230;
const SIDE_SCALE = 0.78;
const SIDE_BLUR = "blur(5px)";

const prevArrow = (
  <svg width="36" height="36" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="-translate-x-[1px]">
    <path d="M12.5 4.5L7 10L12.5 15.5" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const nextArrow = (
  <svg width="36" height="36" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M7.5 4.5L13 10L7.5 15.5" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function EventGallery({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const n = slides.length;
  const prevIdx = mod(current - 1, n);
  const nextIdx = mod(current + 1, n);

  const dots = (
    <div className="flex items-center gap-3">
      {slides.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setCurrent(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={[
            "h-[15px] w-[15px] rounded-full transition",
            i === current
              ? "border border-white bg-white"
              : "border border-white/60 bg-white/30",
          ].join(" ")}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center gap-5 md:hidden">
        <div className="relative w-full" style={{ height: CARD_H }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-[10px] border-[3px] border-white/30"
            style={{ width: "90%", height: CARD_H, top: 0 }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              style={{ objectPosition: slides[current].objectPosition ?? "center" }}
            />
          </div>

          <div className="pointer-events-none absolute left-0 top-1/2 z-50 flex w-full -translate-y-1/2 items-center justify-between px-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setCurrent(mod(current - 1, n))}
              className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-white text-[#3F6F7A] transition hover:scale-105"
            >
              {prevArrow}
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setCurrent(mod(current + 1, n))}
              className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-white text-[#3F6F7A] transition hover:scale-105"
            >
              {nextArrow}
            </button>
          </div>
        </div>
        {dots}
      </div>

      <div className="hidden flex-col items-center gap-6 md:flex">
        <div
          className="relative mx-auto w-full max-w-[1100px]"
          style={{ height: CARD_H }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute overflow-hidden rounded-[10px]"
            style={{
              width: CARD_W,
              height: CARD_H,
              left: "50%",
              top: 0,
              transform: `translateX(calc(-50% - ${SIDE_OFFSET}px)) scale(${SIDE_SCALE})`,
              filter: SIDE_BLUR,
              opacity: 0.85,
              zIndex: 1,
            }}
          >
            <Image
              src={slides[prevIdx].src}
              alt={slides[prevIdx].alt}
              fill
              className="object-cover"
              style={{ objectPosition: slides[prevIdx].objectPosition ?? "center" }}
            />
          </div>

          <div
            className="absolute overflow-hidden rounded-[10px] border-[3px] border-white/30"
            style={{
              width: CARD_W,
              height: CARD_H,
              left: "50%",
              top: 0,
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              style={{ objectPosition: slides[current].objectPosition ?? "center" }}
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute overflow-hidden rounded-[10px]"
            style={{
              width: CARD_W,
              height: CARD_H,
              left: "50%",
              top: 0,
              transform: `translateX(calc(-50% + ${SIDE_OFFSET}px)) scale(${SIDE_SCALE})`,
              filter: SIDE_BLUR,
              opacity: 0.85,
              zIndex: 1,
            }}
          >
            <Image
              src={slides[nextIdx].src}
              alt={slides[nextIdx].alt}
              fill
              className="object-cover"
              style={{ objectPosition: slides[nextIdx].objectPosition ?? "center" }}
            />
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-50 flex w-full max-w-[1100px] -translate-x-1/2 -translate-y-1/2 items-center justify-between px-6">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setCurrent(mod(current - 1, n))}
              className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-white text-[#3F6F7A] transition hover:scale-105"
            >
              {prevArrow}
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setCurrent(mod(current + 1, n))}
              className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-white text-[#3F6F7A] transition hover:scale-105"
            >
              {nextArrow}
            </button>
          </div>
        </div>
        {dots}
      </div>
    </>
  );
}
