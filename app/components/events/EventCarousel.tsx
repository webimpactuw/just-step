"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variant, Variants } from "framer-motion";
import EventCard, { EventItem } from "./EventCard";

type Props = {
  title?: string;
  events: EventItem[];
  viewAllHref?: string;
};

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

type Role = "left" | "center" | "right"; // left=NEXT, center=CURRENT, right=PREV
type Direction = "next" | "prev";
type VariantKey = "left" | "center" | "right" | "wrapToLeft" | "wrapToRight";
type Phase = "idle" | "animating" | "resetting";

export default function EventCarousel({
  title = "Upcoming Events",
  events,
  viewAllHref = "/events",
}: Props) {
  const n = events?.length ?? 0;
  const [index, setIndex] = useState(0); // CURRENT index

  // Animation state
  const [isAnimating, setIsAnimating] = useState(false);
  const [dir, setDir] = useState<Direction>("next");
  const [doneCount, setDoneCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");


  // During an animation we temporarily remap roles -> where they move to
  // NOTE: during animation this map can include wrap variants too
  const [roleMap, setRoleMap] = useState<Record<Role, VariantKey>>({
    left: "left",
    center: "center",
    right: "right",
  });

  const { nextEvent, currentEvent, prevEvent } = useMemo(() => {
    if (n <= 0) return { nextEvent: null, currentEvent: null, prevEvent: null };
    if (n === 1)
      return { nextEvent: null, currentEvent: events[0], prevEvent: null };

    const prev = mod(index - 1, n);
    const next = mod(index + 1, n);

    if (n === 2) {
      const other = index === 0 ? 1 : 0;
      return {
        nextEvent: events[other],
        currentEvent: events[index],
        prevEvent: events[other],
      };
    }

    return {
      nextEvent: events[next], // left slot
      currentEvent: events[index], // center slot
      prevEvent: events[prev], // right slot
    };
  }, [events, index, n]);

  if (!n) return null;

  // 1 event: no carousel UI
  if (n === 1 && currentEvent) {
    return (
      <section className="relative overflow-hidden bg-[#8b3f16] px-4 pb-6 pt-8 text-white">
        <div className="mx-auto mb-4 flex max-w-[980px] justify-center">
          <h2 className="text-[28px] font-extrabold leading-none tracking-wide">
            {title}
          </h2>
        </div>

        <div className="mx-auto max-w-[720px]">
          <EventCard event={currentEvent} />
        </div>
      </section>
    );
  }

  // ----- Layout constants -----
  const POS = {
    leftX: "-42%", // NEXT card position
    centerX: "0%",
    rightX: "42%", // PREV card position
  };

  // Tune these for troubleshooting:
  const ANIM_SECONDS = 1; // set to 10 for slow debugging
const TRANSITION_ANIM = { duration: ANIM_SECONDS, ease: [0.22, 1, 0.36, 1] as const };
const TRANSITION_NONE = { duration: 0 };

  // Variants include normal slots AND wrap paths to avoid "mashing" through center.
const variants: Variants = {
  left: {
    x: POS.leftX,
    y: 0,
    scale: 0.98,
    opacity: 0.55,
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
    scale: 0.98,
    opacity: 0.55,
    filter: "blur(2px)",
  },
  wrapToLeft: {
    x: [POS.rightX, POS.leftX],
    y: [0, 0, 0],
    scale: [0.98, 0.92, 0.98],
    opacity: [0.55, 0.35, 0.55],
    filter: ["blur(2px)", "blur(3px)", "blur(2px)"],
  },
  wrapToRight: {
    x: [POS.leftX, POS.rightX],
    y: [0, 0, 0],
    scale: [0.98, 0.92, 0.98],
    opacity: [0.55, 0.35, 0.55],
    filter: ["blur(2px)", "blur(3px)", "blur(2px)"],
  },
};

  // Direction-aware z ordering to ensure correct overlap (prevents "teleport on top")
  const zFor = (role: Role) => {
    if (!isAnimating) return role === "center" ? 30 : 10;

    if (dir === "next") {
      // left slides onto center, center slides to right; right wraps behind
      if (role === "left") return 50;
      if (role === "center") return 30;
      return 0; // right (wrap behind)
    } else {
      // right slides onto center, center slides to left; left wraps behind
      if (role === "right") return 50;
      if (role === "center") return 30;
      return 0; // left (wrap behind)
    }
  };

  // Trigger animation, no setTimeout guessing
const animateStep = (nextDir: Direction) => {
  if (phase !== "idle") return;

  setPhase("animating");
  setDir(nextDir);
  setDoneCount(0);

  const nextMap: Record<Role, VariantKey> =
    nextDir === "next"
      ? { left: "center", center: "right", right: "wrapToLeft" }
      : { left: "wrapToRight", center: "left", right: "center" };

  setRoleMap(nextMap);
};

  // When all three animations complete, commit state and reset positions.
useEffect(() => {
  if (phase !== "animating") return;
  if (doneCount < 3) return;

  // 1) enter resetting phase (transitions disabled)
  setPhase("resetting");

  // 2) commit new current index + snap roles back to identity
  setIndex((i) => (dir === "next" ? mod(i + 1, n) : mod(i - 1, n)));
  setRoleMap({ left: "left", center: "center", right: "right" });

  // 3) next tick, return to idle so future clicks animate normally
  requestAnimationFrame(() => {
    setPhase("idle");
  });
}, [doneCount, dir, n, phase]);

  const goPrev = () => animateStep("prev");
  const goNext = () => animateStep("next");

  // Helper: count completions only once per motion element per cycle
  const onDone = () => setDoneCount((c) => c + 1);

  return (
    <section className="relative overflow-hidden bg-[#8b3f16] px-4 pb-6 pt-8 text-white">
      <div className="mx-auto mb-4 flex max-w-[980px] justify-center">
        <h2 className="text-[28px] font-extrabold leading-none tracking-wide">
          {title}
        </h2>
      </div>

      <div className="mx-auto flex max-w-[1100px] items-center justify-center gap-3">
        {/* Left arrow */}
        <button
          type="button"
          onClick={goPrev}
          disabled={isAnimating}
          aria-label="Previous event"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/55 bg-black/25 text-3xl leading-none transition hover:scale-105 hover:bg-black/35 disabled:cursor-not-allowed disabled:opacity-35"
        >
          ‹
        </button>

        {/* Stage */}
        <div className="relative h-[420px] w-full max-w-[980px]">
          {/* LEFT role = NEXT */}
          {nextEvent && (
            <motion.div
              className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: zFor("left") }}
              animate={roleMap.left}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
              initial={false}
            >
              <EventCard event={nextEvent} />
            </motion.div>
          )}

          {/* CENTER role = CURRENT */}
          {currentEvent && (
            <motion.div
              className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: zFor("center") }}
              animate={roleMap.center}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
              initial={false}
            >
              <EventCard event={currentEvent} />
            </motion.div>
          )}

          {/* RIGHT role = PREV */}
          {prevEvent && (
            <motion.div
              className="absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: zFor("right") }}
              animate={roleMap.right}
              variants={variants}
              transition={phase === "animating" ? TRANSITION_ANIM : TRANSITION_NONE}
              onAnimationComplete={onDone}
              initial={false}
            >
              <EventCard event={prevEvent} />
            </motion.div>
          )}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={goNext}
          disabled={phase !== "idle"}
          aria-label="Next event"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/55 bg-black/25 text-3xl leading-none transition hover:scale-105 hover:bg-black/35 disabled:cursor-not-allowed disabled:opacity-35"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2" aria-label="Carousel pagination">
        {Array.from({ length: n }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => !isAnimating && setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
            className={[
              "h-[10px] w-[10px] rounded-full border border-white/70 bg-transparent opacity-80",
              i === index ? "border-[#f0c36a] bg-[#f0c36a] opacity-100" : "",
              isAnimating ? "pointer-events-none" : "",
            ].join(" ")}
          />
        ))}
      </div>

      {/* View all */}
      <div className="mt-3 flex justify-center">
        <Link
          href={viewAllHref}
          className="px-3 py-2 text-[13px] font-bold tracking-wide text-white underline underline-offset-8 decoration-white/75 hover:decoration-white"
        >
          VIEW ALL EVENTS
        </Link>
      </div>
    </section>
  );
}