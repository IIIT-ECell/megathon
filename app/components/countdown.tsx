"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function split(remaining: number) {
  return [
    { label: "days", value: Math.floor(remaining / DAY) },
    { label: "hours", value: Math.floor((remaining % DAY) / HOUR) },
    { label: "min", value: Math.floor((remaining % HOUR) / MINUTE) },
    { label: "sec", value: Math.floor((remaining % MINUTE) / SECOND) },
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
    <div role="timer" aria-live="off" className="flex flex-col items-center gap-3">
      <div className="grid auto-cols-max grid-flow-col gap-6 text-center sm:gap-10">
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            {/* The rolling column spans 00-99, so a larger value falls back to
                plain text rather than silently showing the wrong number. */}
            {unit.value > 99 ? (
              <span className="font-mono text-4xl font-semibold tabular-nums text-black sm:text-6xl dark:text-white">
                {unit.value}
              </span>
            ) : (
              <span className="countdown font-mono text-4xl font-semibold text-black sm:text-6xl dark:text-white">
                <span
                  style={{ "--value": unit.value } as CSSProperties}
                  aria-live="polite"
                  aria-label={String(unit.value)}
                >
                  {unit.value}
                </span>
              </span>
            )}
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-600 sm:text-sm dark:text-zinc-400">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {live && (
        <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
          Megathon is live. Go build.
        </p>
      )}
    </div>
  );
}
