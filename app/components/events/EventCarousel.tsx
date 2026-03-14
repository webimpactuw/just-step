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

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

type Role = "left" | "center" | "right"; // left=PREV, center=CURRENT, right=NEXT
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
    if (n <= 0) return { prevEvent: null, currentEvent: null, nextEvent: null };
    if (n === 1) {
      return { prevEvent: null, currentEvent: events[0], nextEvent: null };
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

  if (!n) return null;

  if (n === 1 && currentEvent) {
    return (
      <section className="relative overflow-hidden bg-[#9c4718] px-4 pb-10 pt-8 text-white">
        <div className="mx-auto flex max-w-[980px] justify-center">
          <h2
            className="text-center text-[44px] font-normal leading-none text-white"
            style={{ fontFamily: '"Alcazar", serif' }}
          >
            {title}
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[720px]">
          <EventCard event={currentEvent} />
        </div>
      </section>
    );
  }

  const POS = {
    leftX: "-48%",
    centerX: "0%",
    rightX: "48%",
  };

  const ANIM_SECONDS = 0.65;
  const TRANSITION_ANIM = {
    duration: ANIM_SECONDS,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const TRANSITION_NONE = { duration: 0 };

  const variants: Variants = {
    left: {
      x: POS.leftX,
      y: 0,
      scale: 0.9,
      opacity: 1,
      filter: "blur(2px)",
    },
    center: {
      x: POS.centerX,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
    },

    right: {
      x: POS.rightX,
      y: 0,
      scale: 0.9,
      opacity: 1,
      filter: "blur(2px)",
    },

    // right (next) wraps behind to left when clicking left arrow
    wrapToRight: {
      x: [POS.leftX, POS.rightX],
      y: [0, 0],
      scale: [0.9, 0.84, 0.9],
      opacity: [1, 1, 1],
      filter: ["blur(2px)", "blur(3px)", "blur(2px)"],
    },

    // left (prev) wraps behind to right when clicking right arrow
    wrapToLeft: {
      x: [POS.rightX, POS.leftX],
      y: [0, 0],
      scale: [0.9, 0.84, 0.9],
      opacity: [1, 1, 1],
      filter: ["blur(2px)", "blur(3px)", "blur(2px)"],
    },
  };

  const zFor = (role: Role) => {
    if (phase !== "animating") {
      if (role === "center") return 30;
      return 10;
    }

    if (dir === "next") {
      // right -> center, center -> left, left wraps behind to right
      if (role === "right") return 50;
      if (role === "center") return 30;
      return 0;
    } else {
      // left -> center, center -> right, right wraps behind to left
      if (role === "left") return 50;
      if (role === "center") return 30;
      return 0;
    }
  };

  const animateStep = (nextDir: Direction) => {
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

  const goPrev = () => animateStep("prev");
  const goNext = () => animateStep("next");
  const onDone = () => setDoneCount((c) => c + 1);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (phase !== "idle") return;

    const swipeThreshold = 20;

    if (info.offset.x <= -swipeThreshold) {
      goNext();
    } else if (info.offset.x >= swipeThreshold) {
      goPrev();
    }
  };

  return (
        <section className="relative overflow-hidden bg-[linear-gradient(90deg,#c7641f_0%,#9f4b18_38%,#7a2d0b_100%)] px-4 pb-10 pt-8 text-white">
      <div className="mx-auto flex max-w-[980px] justify-center">
        <h2
          className="text-center text-[44px] font-normal leading-none text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]"
          style={{ fontFamily: '"Alcazar", serif' }}
        >
          {title}
        </h2>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1320px] items-center justify-center gap-20">
        <button
          type="button"
          onClick={goPrev}
          disabled={phase !== "idle"}
          aria-label="Previous event"
          className="z-20 grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full bg-white text-[#9c4718] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="translate-x-[-1px]"
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

        <motion.div
          className="relative h-[470px] w-full max-w-[980px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {prevEvent && (
            <motion.div
              initial={false}
              className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: zFor("left") }}
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
              className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: zFor("center") }}
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
              className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: zFor("right") }}
              animate={roleMap.right}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
            >
              <EventCard event={nextEvent} />
            </motion.div>
          )}
        </motion.div>

        <button
          type="button"
          onClick={goNext}
          disabled={phase !== "idle"}
          aria-label="Next event"
          className="z-20 grid h-[54px] w-[54px] shrink-0 place-items-center rounded-full bg-white text-[#9c4718] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

      <div className="mt-8 flex justify-center gap-3" aria-label="Carousel pagination">
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
                "h-[14px] w-[14px] rounded-full transition",
                isActive
                  ? "border border-[#e2b15a] bg-[#e2b15a]"
                  : "border border-white bg-white",
                phase !== "idle" ? "pointer-events-none" : "",
              ].join(" ")}
            />
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href={viewAllHref}
          className="text-[15px] font-extrabold uppercase tracking-[0.01em] text-white underline underline-offset-[10px] decoration-[2px] hover:text-[#e2b15a] hover:decoration-[#e2b15a] transition-colors"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}