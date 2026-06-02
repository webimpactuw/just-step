"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { MouseEventHandler } from "react";
import type { PanInfo, Variants } from "framer-motion";

type GallerySlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type Props = {
  slides: GallerySlide[];
};

type Role = "left" | "center" | "right";
type Direction = "next" | "prev";
type VariantKey = "left" | "center" | "right" | "wrapToLeft" | "wrapToRight";
type Phase = "idle" | "animating" | "resetting";

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function GalleryCard({
  slide,
  onClick,
}: {
  slide: GallerySlide;
  onClick?: () => void;
}) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className="flex h-auto w-full max-w-[600px] flex-col gap-6 rounded-[10px] border-[2px] border-[#3F6F7A] bg-[#FAFAFA] p-5 text-left md:h-[545px] md:w-[600px]"
      aria-label={onClick ? `Open full image: ${slide.alt}` : undefined}
    >
      <div className="h-[360px] w-full overflow-hidden rounded-[10px] md:h-[505px] md:w-[560px]">
        <img
          src={slide.src}
          alt={slide.alt}
          className="h-full w-full object-cover"
          style={{
            objectPosition: slide.objectPosition ?? "center",
          }}
        />
      </div>
    </Wrapper>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled = false,
  label,
}: {
  direction: "left" | "right";
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-[color:var(--color-text-light)] text-[color:var(--color-secondary)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className={direction === "left" ? "-translate-x-[1px]" : ""}
      >
        {direction === "left" ? (
          <path
            d="M12.5 4.5L7 10L12.5 15.5"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M7.5 4.5L13 10L7.5 15.5"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

export default function EventGallery({ slides }: Props) {
  const n = slides?.length ?? 0;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Direction>("next");
  const [doneCount, setDoneCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [roleMap, setRoleMap] = useState<Record<Role, VariantKey>>({
    left: "left",
    center: "center",
    right: "right",
  });

  const { prevSlide, currentSlide, nextSlide } = useMemo(() => {
    if (n <= 0) {
      return { prevSlide: null, currentSlide: null, nextSlide: null };
    }

    if (n === 1) {
      return {
        prevSlide: null,
        currentSlide: slides[0],
        nextSlide: null,
      };
    }

    const prev = mod(index - 1, n);
    const next = mod(index + 1, n);

    if (n === 2) {
      const other = index === 0 ? 1 : 0;

      return {
        prevSlide: slides[other],
        currentSlide: slides[index],
        nextSlide: slides[other],
      };
    }

    return {
      prevSlide: slides[prev],
      currentSlide: slides[index],
      nextSlide: slides[next],
    };
  }, [slides, index, n]);

  useEffect(() => {
    if (n <= 0) {
      return;
    }

    setIndex((i) => mod(i, n));
    setActiveIndex((i) => mod(i, n));
  }, [n]);

  const SIDE_LEFT_X = -225;
  const SIDE_RIGHT_X = 225;

  const SIDE_WIDTH = 464;
  const SIDE_HEIGHT = 436.6;
  const CARD_WIDTH = 600;
  const CARD_HEIGHT = 545;

  const SIDE_SCALE_X = SIDE_WIDTH / CARD_WIDTH;
  const SIDE_SCALE_Y = SIDE_HEIGHT / CARD_HEIGHT;

  const CARD_TOP = 18;
  const SIDE_TOP = 48.29;

  const SIDE_SCALE_OFFSET_Y = (CARD_HEIGHT - SIDE_HEIGHT) / 2;
  const SIDE_Y = SIDE_TOP - CARD_TOP - SIDE_SCALE_OFFSET_Y;

  const SIDE_BLUR = "blur(6.4px)";

  const ANIM_SECONDS = 0.65;

  const TRANSITION_ANIM = {
    duration: ANIM_SECONDS,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const TRANSITION_NONE = { duration: 0 };

  const variants: Variants = {
    left: {
      x: SIDE_LEFT_X,
      y: SIDE_Y,
      scaleX: SIDE_SCALE_X,
      scaleY: SIDE_SCALE_Y,
      opacity: 1,
      filter: SIDE_BLUR,
    },
    center: {
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      filter: "blur(0px)",
    },
    right: {
      x: SIDE_RIGHT_X,
      y: SIDE_Y,
      scaleX: SIDE_SCALE_X,
      scaleY: SIDE_SCALE_Y,
      opacity: 1,
      filter: SIDE_BLUR,
    },
    wrapToRight: {
      x: [SIDE_LEFT_X, SIDE_RIGHT_X],
      y: [SIDE_Y, SIDE_Y],
      scaleX: [SIDE_SCALE_X, 0.72, SIDE_SCALE_X],
      scaleY: [SIDE_SCALE_Y, 0.76, SIDE_SCALE_Y],
      opacity: [1, 1, 1],
      filter: [SIDE_BLUR, "blur(8px)", SIDE_BLUR],
    },
    wrapToLeft: {
      x: [SIDE_RIGHT_X, SIDE_LEFT_X],
      y: [SIDE_Y, SIDE_Y],
      scaleX: [SIDE_SCALE_X, 0.72, SIDE_SCALE_X],
      scaleY: [SIDE_SCALE_Y, 0.76, SIDE_SCALE_Y],
      opacity: [1, 1, 1],
      filter: [SIDE_BLUR, "blur(8px)", SIDE_BLUR],
    },
  };

  const zFor = (role: Role): number => {
    if (phase !== "animating") {
      if (role === "center") return 30;
      return 10;
    }

    if (dir === "next") {
      if (role === "right") return 50;
      if (role === "center") return 30;
      return 0;
    }

    if (role === "left") return 50;
    if (role === "center") return 30;
    return 0;
  };

  const animateStep = (nextDir: Direction): void => {
    if (phase !== "idle" || n <= 1) {
      return;
    }

    setPhase("animating");
    setDir(nextDir);
    setDoneCount(0);

    setActiveIndex((i) => (nextDir === "next" ? mod(i + 1, n) : mod(i - 1, n)));

    const nextMap: Record<Role, VariantKey> =
      nextDir === "next"
        ? {
            left: "wrapToRight",
            center: "left",
            right: "center",
          }
        : {
            left: "center",
            center: "right",
            right: "wrapToLeft",
          };

    setRoleMap(nextMap);
  };

  useEffect(() => {
    if (phase !== "animating") {
      return;
    }

    if (doneCount < 3) {
      return;
    }

    setPhase("resetting");
    setIndex((i) => (dir === "next" ? mod(i + 1, n) : mod(i - 1, n)));
    setRoleMap({ left: "left", center: "center", right: "right" });

    requestAnimationFrame(() => {
      setPhase("idle");
    });
  }, [doneCount, dir, n, phase]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        animateStep("prev");
      }

      if (event.key === "ArrowRight") {
        animateStep("next");
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, phase]);

  if (!n || !currentSlide) {
    return null;
  }

  const goPrev = (): void => animateStep("prev");
  const goNext = (): void => animateStep("next");

  const onDone = (): void => {
    if (phase !== "animating") {
      return;
    }

    setDoneCount((c) => c + 1);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    if (phase !== "idle") {
      return;
    }

    const swipeThreshold = 20;

    if (info.offset.x <= -swipeThreshold) {
      goNext();
    } else if (info.offset.x >= swipeThreshold) {
      goPrev();
    }
  };

  if (n === 1) {
    return (
      <>
        <div className="flex w-full justify-center px-4">
          <GalleryCard
            slide={currentSlide}
            onClick={() => setIsLightboxOpen(true)}
          />
        </div>

        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-[#28282B] shadow-lg transition hover:bg-[color:var(--color-accent)] hover:text-white"
              aria-label="Close image preview"
            >
              <span className="text-3xl leading-none">&times;</span>
            </button>

            <img
              src={currentSlide.src}
              alt={currentSlide.alt}
              className="max-h-[90vh] max-w-[92vw] object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative mx-auto flex h-[566px] w-full max-w-[1260px] items-center justify-center overflow-hidden">
        <motion.div
          className="relative h-[566px] w-full max-w-[1166px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {prevSlide && (
            <motion.div
              initial={false}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[18px] hidden w-[600px] md:block"
              style={{
                zIndex: zFor("left"),
                transformOrigin: "center center",
                marginLeft: "-300px",
              }}
              animate={roleMap.left}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
            >
              <GalleryCard slide={prevSlide} />
            </motion.div>
          )}

          <motion.div
            initial={false}
            className="absolute left-1/2 top-[18px] w-[min(90vw,600px)] md:w-[600px]"
            style={{
              zIndex: zFor("center"),
              transformOrigin: "center center",
              marginLeft: "calc(-1 * min(90vw, 600px) / 2)",
            }}
            animate={roleMap.center}
            variants={variants}
            transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
            onAnimationComplete={onDone}
          >
            <GalleryCard
              slide={currentSlide}
              onClick={() => setIsLightboxOpen(true)}
            />
          </motion.div>

          {nextSlide && (
            <motion.div
              initial={false}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[18px] hidden w-[600px] md:block"
              style={{
                zIndex: zFor("right"),
                transformOrigin: "center center",
                marginLeft: "-300px",
              }}
              animate={roleMap.right}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
            >
              <GalleryCard slide={nextSlide} />
            </motion.div>
          )}
        </motion.div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-50 flex h-[50px] w-full max-w-[1260px] -translate-x-1/2 -translate-y-1/2 items-center justify-between px-[30px]">
          <ArrowButton
            direction="left"
            onClick={() => goPrev()}
            disabled={phase !== "idle"}
            label="Previous gallery image"
          />

          <ArrowButton
            direction="right"
            onClick={() => goNext()}
            disabled={phase !== "idle"}
            label="Next gallery image"
          />
        </div>
      </div>

      <div
        className="flex h-[35px] items-center justify-center gap-[13px] py-[10px]"
        aria-label="Gallery pagination"
      >
        {Array.from({ length: n }).map((_, i) => {
          const isActive = i === activeIndex;

          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (phase !== "idle") {
                  return;
                }

                setIndex(i);
                setActiveIndex(i);
              }}
              aria-label={`Go to gallery image ${i + 1}`}
              aria-current={isActive ? "true" : "false"}
              className={[
                "h-[15px] w-[15px] rounded-full transition",
                isActive
                  ? "border border-[color:var(--color-accent)] bg-[color:var(--color-accent)]"
                  : "border border-[color:var(--color-text-light)] bg-[color:var(--color-text-light)]",
                phase !== "idle" ? "pointer-events-none" : "",
              ].join(" ")}
            />
          );
        })}
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-[#28282B] shadow-lg transition hover:bg-[color:var(--color-accent)] hover:text-white"
            aria-label="Close image preview"
          >
            <span className="text-3xl leading-none">&times;</span>
          </button>

          <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2 md:left-8">
            <ArrowButton
              direction="left"
              onClick={(event) => {
                event.stopPropagation();
                goPrev();
              }}
              disabled={phase !== "idle"}
              label="Previous gallery image"
            />
          </div>

          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            className="max-h-[90vh] max-w-[92vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2 md:right-8">
            <ArrowButton
              direction="right"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              disabled={phase !== "idle"}
              label="Next gallery image"
            />
          </div>
        </div>
      )}
    </>
  );
}