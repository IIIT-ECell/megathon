import Image from "next/image";

const columns = [
  {
    title: "Event",
    links: [
      { label: "About", href: "#about" },
      { label: "Tracks", href: "#tracks" },
      { label: "Timeline", href: "#timeline" },
      { label: "Prizes", href: "#prizes" },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Register", href: "#register" },
      { label: "Rules", href: "#rules" },
      { label: "FAQ", href: "#faq" },
      { label: "Sponsors", href: "#sponsors" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/ecell_iiith" },
      { label: "LinkedIn", href: "https://linkedin.com/company/ecell-iiith" },
      { label: "X", href: "https://x.com/ecell_iiith" },
      { label: "Email", href: "mailto:ecell@iiit.ac.in" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full shrink-0 overflow-hidden bg-zinc-50 font-sans dark:bg-black">
      {/* Spectral hairline in place of a plain top border. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#22d3ee,#a78bfa,#f472b6,#fb923c,#facc15,transparent)] opacity-70"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pt-16 pb-12 sm:flex-row sm:justify-between sm:gap-8 sm:px-10">
        <div className="flex flex-col gap-4">
          <Image
            src="/ecell_logo.png"
            alt="E-Cell IIIT Hyderabad"
            width={160}
            height={160}
            className="h-20 w-20 object-contain"
          />
          <p className="max-w-xs text-base leading-7 text-zinc-600 sm:text-sm sm:leading-6 dark:text-zinc-400">
            Megathon is the flagship hackathon of E-Cell, IIIT Hyderabad
          </p>
        </div>

        {/* <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-400 sm:text-xs dark:text-zinc-500">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-zinc-600 transition-colors hover:text-black sm:text-sm dark:text-zinc-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 pb-10 text-sm text-zinc-500 sm:text-xs sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} Megathon · E-Cell, IIIT Hyderabad</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-black dark:hover:text-white">
            Privacy
          </a>
          <a href="#terms" className="hover:text-black dark:hover:text-white">
            Terms
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Oversized wordmark, clipped at the baseline so it bleeds off the page. */}
      <div
        aria-hidden
        className="-mb-[2vw] select-none"
      >
        <p className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-center text-[19vw] font-bold leading-[0.78] tracking-[-0.045em] whitespace-nowrap text-transparent">
          MEGATHON
        </p>
      </div>
    </footer>
  );
}
