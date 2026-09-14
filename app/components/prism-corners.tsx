// Decorative spectral light in the corners, echoing the chromatic fringing on
// the hands artwork. Multiply on light grounds so the colour reads as ink,
// screen on dark grounds so it reads as glow.
const corners = [
  {
    position: "-left-56 -top-56",
    gradient:
      "bg-[conic-gradient(from_140deg_at_50%_50%,#22d3ee,#818cf8,#c084fc,#f472b6,#fb923c,#22d3ee)]",
  },
  {
    position: "-right-56 -top-56",
    gradient:
      "bg-[conic-gradient(from_300deg_at_50%_50%,#fb923c,#f472b6,#c084fc,#38bdf8,#fb923c)]",
  },
  {
    position: "-bottom-56 -left-56",
    gradient:
      "bg-[conic-gradient(from_20deg_at_50%_50%,#f472b6,#fb923c,#facc15,#4ade80,#38bdf8,#f472b6)]",
  },
  {
    position: "-bottom-56 -right-56",
    gradient:
      "bg-[conic-gradient(from_220deg_at_50%_50%,#a78bfa,#38bdf8,#22d3ee,#f472b6,#a78bfa)]",
  },
];

export default function PrismCorners() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {corners.map((corner) => (
        <div
          key={corner.position}
          className={`absolute size-[24rem] rounded-full opacity-25 blur-[90px] mix-blend-multiply sm:size-[30rem] dark:opacity-50 dark:mix-blend-screen ${corner.position} ${corner.gradient}`}
        />
      ))}
    </div>
  );
}
