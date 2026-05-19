"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { PanInfo, Variants } from "framer-motion";
import EventCard, { EventItem } from "./EventCard";

type Props = {
  title?: string;
  events: EventItem[];
  viewAllHref?: string;
};

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

type Role = "left" | "center" | "right";
type Direction = "next" | "prev";
type VariantKey = "left" | "center" | "right" | "wrapToLeft" | "wrapToRight";
type Phase = "idle" | "animating" | "resetting";

export default function EventCarousel({
  title = "Upcoming Events",
  events,
  viewAllHref = "/events",
}: Props) {
  const n = events?.length ?? 0;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Direction>("next");
  const [doneCount, setDoneCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [activeIndex, setActiveIndex] = useState(0);

  const [roleMap, setRoleMap] = useState<Record<Role, VariantKey>>({
    left: "left",
    center: "center",
    right: "right",
  });

  const { prevEvent, currentEvent, nextEvent } = useMemo(() => {
    if (n <= 0) {
      return { prevEvent: null, currentEvent: null, nextEvent: null };
    }

    if (n === 1) {
      return {
        prevEvent: null,
        currentEvent: events[0],
        nextEvent: null,
      };
    }

    const prev = mod(index - 1, n);
    const next = mod(index + 1, n);

    if (n === 2) {
      const other = index === 0 ? 1 : 0;

      return {
        prevEvent: events[other],
        currentEvent: events[index],
        nextEvent: events[other],
      };
    }

    return {
      prevEvent: events[prev],
      currentEvent: events[index],
      nextEvent: events[next],
    };
  }, [events, index, n]);

  useEffect(() => {
    if (n <= 0) return;

    setIndex((i) => mod(i, n));
    setActiveIndex((i) => mod(i, n));
  }, [n]);

  if (!n) return null;

  const CENTER_X = 0;

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
      x: CENTER_X,
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
    if (phase !== "idle") return;

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
    if (phase !== "animating") return;
    if (doneCount < 3) return;

    setPhase("resetting");
    setIndex((i) => (dir === "next" ? mod(i + 1, n) : mod(i - 1, n)));
    setRoleMap({ left: "left", center: "center", right: "right" });

    requestAnimationFrame(() => {
      setPhase("idle");
    });
  }, [doneCount, dir, n, phase]);

  const goPrev = (): void => animateStep("prev");
  const goNext = (): void => animateStep("next");

  const onDone = (): void => {
    if (phase !== "animating") return;
    setDoneCount((c) => c + 1);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    if (phase !== "idle") return;

    const swipeThreshold = 20;

    if (info.offset.x <= -swipeThreshold) {
      goNext();
    } else if (info.offset.x >= swipeThreshold) {
      goPrev();
    }
  };

  if (n === 1 && currentEvent) {
    return (
      <section className="relative flex w-full flex-col items-center gap-4 overflow-hidden bg-[linear-gradient(120deg,var(--color-primary)_0%,var(--color-primary-2)_70%,var(--color-primary-2)_100%)] px-4 py-14 font-sans text-[color:var(--color-text-light)]">
        <div className="flex h-[59px] w-full items-center justify-center">
          <h2 className="[font-family:var(--font-display),serif] text-center text-[44px] font-normal leading-none text-[color:var(--color-text-light)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
            {title}
          </h2>
        </div>

        <div className="flex h-[566px] w-full max-w-[1166px] items-start justify-center pt-[18px]">
          <EventCard event={currentEvent} />
        </div>

        <Link
          href={viewAllHref}
          className="relative inline-flex h-[20px] w-[128px] items-center justify-center whitespace-nowrap text-center text-[16px] font-bold normal-case leading-[20px] text-[color:var(--color-text-light)] transition-colors after:absolute after:left-0 after:top-full after:h-[5px] after:w-full after:bg-[color:var(--color-text-light)] after:content-[''] hover:text-[color:var(--color-accent)] hover:after:bg-[color:var(--color-accent)]"
        >
          View All Events
        </Link>
      </section>
    );
  }

  return (
    <section className="relative flex w-full flex-col items-center gap-4 overflow-hidden bg-[linear-gradient(120deg,var(--color-primary)_0%,var(--color-primary-2)_70%,var(--color-primary-2)_100%)] px-4 py-14 font-sans text-[color:var(--color-text-light)]">
      <div className="flex h-[59px] w-full items-center justify-center">
        <h2 className="[font-family:var(--font-display),serif] text-center text-[44px] font-normal leading-none text-[color:var(--color-text-light)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
          {title}
        </h2>
      </div>

      <div className="relative flex h-[566px] w-full max-w-[1260px] items-center justify-center">
        <motion.div
          className="relative h-[566px] w-full max-w-[1166px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {prevEvent && (
            <motion.div
              initial={false}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[18px] w-[600px] -translate-x-1/2"
              style={{
                zIndex: zFor("left"),
                transformOrigin: "center center",
              }}
              animate={roleMap.left}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
            >
              <EventCard event={prevEvent} />
            </motion.div>
          )}

          {currentEvent && (
            <motion.div
              initial={false}
              className="absolute left-1/2 top-[18px] w-[600px] -translate-x-1/2"
              style={{
                zIndex: zFor("center"),
                transformOrigin: "center center",
              }}
              animate={roleMap.center}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
            >
              <EventCard event={currentEvent} />
            </motion.div>
          )}

          {nextEvent && (
            <motion.div
              initial={false}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[18px] w-[600px] -translate-x-1/2"
              style={{
                zIndex: zFor("right"),
                transformOrigin: "center center",
              }}
              animate={roleMap.right}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
            >
              <EventCard event={nextEvent} />
            </motion.div>
          )}
        </motion.div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-50 flex h-[50px] w-full max-w-[1260px] -translate-x-1/2 -translate-y-1/2 items-center justify-between px-[30px]">
          <button
            type="button"
            onClick={goPrev}
            disabled={phase !== "idle"}
            aria-label="Previous event"
            className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-[color:var(--color-text-light)] text-[color:var(--color-secondary)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="-translate-x-[1px]"
            >
              <path
                d="M12.5 4.5L7 10L12.5 15.5"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={phase !== "idle"}
            aria-label="Next event"
            className="pointer-events-auto grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full bg-[color:var(--color-text-light)] text-[color:var(--color-secondary)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg width="36" height="36" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M7.5 4.5L13 10L7.5 15.5"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="flex h-[35px] items-center justify-center gap-[13px] py-[10px]"
        aria-label="Carousel pagination"
      >
        {Array.from({ length: n }).map((_, i) => {
          const isActive = i === activeIndex;

          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                if (phase !== "idle") return;
                setIndex(i);
                setActiveIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
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

      <Link
        href={viewAllHref}
        className="relative inline-flex h-[20px] w-[128px] items-center justify-center whitespace-nowrap text-center text-[16px] font-bold normal-case leading-[20px] text-[color:var(--color-text-light)] transition-colors after:absolute after:left-0 after:top-full after:h-[5px] after:w-full after:bg-[color:var(--color-text-light)] after:content-[''] hover:text-[color:var(--color-accent)] hover:after:bg-[color:var(--color-accent)]"
      >
        View All Events
      </Link>
    </section>
  );
}