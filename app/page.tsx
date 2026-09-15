import Image from "next/image";
import Countdown from "./components/countdown";
import PrismCorners from "./components/prism-corners";
import RefractionOverlay from "./components/refraction-overlay";

// When Megathon starts. Edit this one line to move the countdown.
// ISO 8601 with an explicit offset — +05:30 is IST.
const MEGATHON_START = "2026-09-16T14:00:00+05:30";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-white font-sans dark:bg-black">
      <Image
        src="/hands.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-center dark:invert"
      />

      {/* Sits under the scrims — above them, the screen blend would undo the
          darkening the copy relies on. */}
      {/* <PrismCorners /> */}
      {/* <RefractionOverlay /> */}

      {/* Two scrims so the copy stays readable: a flat veil and a radial fade
          that keeps the outer edges of the artwork vivid. Same values at every
          width so phones get the desktop composition. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/25 dark:bg-black/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_46%_at_50%_48%,rgba(255,255,255,0.94),rgba(255,255,255,0)_72%)] dark:bg-[radial-gradient(ellipse_72%_46%_at_50%_48%,rgba(0,0,0,0.94),rgba(0,0,0,0)_72%)]"
      />

      <main className="relative flex min-h-[78svh] w-full max-w-3xl flex-col items-center justify-center gap-8 px-6 py-12 text-center sm:min-h-svh sm:px-10 sm:py-24">
        {/* The mark is pale iridescent art built for a dark ground, so in light
            mode it gets inverted with a hue rotation to keep its violet cast. */}
        <Image
          src="/megathon_logo.png"
          alt="Megathon"
          width={800}
          height={677}
          priority
          className="h-28 w-auto invert-[0.88] hue-rotate-180 sm:h-32 dark:invert-0 dark:hue-rotate-0"
        />

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs dark:text-zinc-400">
          join the singularity
        </p>

        {/* <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-black sm:text-7xl dark:text-white">
          Megathon 2026
        </h1> */}

        <Countdown target={MEGATHON_START} />

      </main>
    </div>
  );
}
