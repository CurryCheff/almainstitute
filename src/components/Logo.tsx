import { Link } from "react-router-dom";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link
    to="/"
    aria-label="Alma Institute — Home"
    className="group inline-flex items-center gap-3"
  >
    <span
      className={`grid h-9 w-9 place-items-center rounded-full border ${
        light ? "border-cream/60 text-cream" : "border-navy/30 text-navy"
      } transition-colors group-hover:border-gold group-hover:text-gold`}
    >
      <span className="font-serif text-base font-semibold leading-none">A</span>
    </span>
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif text-lg font-semibold tracking-tight ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        Alma Institute
      </span>
      <span
        className={`mt-1 text-[10px] uppercase tracking-[0.28em] ${
          light ? "text-cream/70" : "text-muted-foreground"
        }`}
      >
        Est. 1894
      </span>
    </span>
  </Link>
);

export default Logo;
