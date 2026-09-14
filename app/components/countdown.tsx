"use client";

import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function split(remaining: number) {
  return [
    { label: "Days", value: Math.floor(remaining / DAY) },
    { label: "Hours", value: Math.floor((remaining % DAY) / HOUR) },
    { label: "Minutes", value: Math.floor((remaining % HOUR) / MINUTE) },
    { label: "Seconds", value: Math.floor((remaining % MINUTE) / SECOND) },
  ];
}

export default function Countdown({ target }: { target: string }) {
  // null until the first client tick, so the server and client render the same
  // placeholder and hydration stays clean.
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const deadline = new Date(target).getTime();
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));

    tick();
    const id = setInterval(tick, SECOND);
    return () => clearInterval(id);
  }, [target]);

  const units = split(remaining ?? 0);
  const live = remaining === 0;

  return (
    <div
      role="timer"
      aria-live="off"
      className="grid w-full max-w-xl grid-cols-4 gap-px overflow-hidden rounded-2xl border border-black/[.08] bg-black/[.08] backdrop-blur-sm dark:border-white/[.14] dark:bg-white/[.14]"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center gap-1 bg-white/70 px-1 py-5 sm:px-4 dark:bg-black/70"
        >
          <span className="text-4xl font-semibold tabular-nums tracking-tight text-black sm:text-5xl dark:text-white">
            {remaining === null
              ? "––"
              : String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.08em] text-zinc-500 sm:text-[0.7rem] sm:tracking-[0.16em] dark:text-zinc-400">
            {unit.label}
          </span>
        </div>
      ))}

      {live && (
        <p className="col-span-4 bg-white/70 px-4 pb-5 text-center text-sm font-medium text-orange-600 dark:bg-black/70 dark:text-orange-400">
          Megathon is live. Go build.
        </p>
      )}
    </div>
  );
}
