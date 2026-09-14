// Light split through a prism: narrow spectral shafts raked across the frame.
// The gradient runs across each shaft's width (not its length), which is what
// gives the rainbow-edge read rather than a plain coloured glow.
//
// Each shaft carries one short slice of the spectrum instead of the whole
// rainbow — a prism separates wavelengths, and packing every hue into one
// heavily-blurred band just averages back out to grey.
type Beam = {
  className: string;
  rotate: string;
  width: string;
  spectrum: string;
  blur: string;
};

const beams: Beam[] = [
  {
    className: "-top-1/2 left-[3%] h-[200%]",
    rotate: "-22deg",
    width: "clamp(90px, 11vw, 200px)",
    spectrum:
      "transparent 0%, rgba(34,211,238,0.55) 22%, rgba(99,102,241,0.85) 58%, rgba(129,140,248,0.45) 82%, transparent 100%",
    blur: "60px",
  },
  {
    className: "-top-1/2 left-[23%] h-[200%]",
    rotate: "-14deg",
    width: "clamp(50px, 6vw, 110px)",
    spectrum:
      "transparent 0%, rgba(192,132,252,0.8) 30%, rgba(244,114,182,0.7) 70%, transparent 100%",
    blur: "40px",
  },
  {
    className: "-top-1/2 right-[6%] h-[200%]",
    rotate: "20deg",
    width: "clamp(80px, 10vw, 180px)",
    spectrum:
      "transparent 0%, rgba(244,114,182,0.6) 20%, rgba(251,146,60,0.85) 55%, rgba(250,204,21,0.55) 82%, transparent 100%",
    blur: "55px",
  },
  {
    className: "-top-1/2 right-[26%] h-[200%]",
    rotate: "30deg",
    width: "clamp(40px, 5vw, 90px)",
    spectrum:
      "transparent 0%, rgba(45,212,191,0.7) 32%, rgba(34,211,238,0.7) 72%, transparent 100%",
    blur: "35px",
  },
];

// Fades each shaft out at both ends so it reads as a beam, not a painted stripe.
const lengthMask =
  "linear-gradient(to bottom, transparent 0%, #000 22%, #000 68%, transparent 100%)";

export default function RefractionOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-25 dark:opacity-50"
    >
      {beams.map((beam) => (
        <div
          key={beam.className}
          className={`absolute mix-blend-multiply dark:mix-blend-screen ${beam.className}`}
          style={{
            width: beam.width,
            transform: `rotate(${beam.rotate})`,
            backgroundImage: `linear-gradient(90deg, ${beam.spectrum})`,
            filter: `blur(${beam.blur})`,
            maskImage: lengthMask,
            WebkitMaskImage: lengthMask,
          }}
        />
      ))}
    </div>
  );
}
