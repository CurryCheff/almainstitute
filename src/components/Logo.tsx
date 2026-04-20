import { Link } from "react-router-dom";
import almaLogo from "@/assets/alma-logo.png";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link
    to="/"
    aria-label="Alma Institute — Home"
    className="group inline-flex items-center gap-3"
  >
    <span
      className={`grid h-11 w-11 place-items-center rounded-full transition-transform duration-500 group-hover:scale-105 ${
        light ? "bg-cream/10 ring-1 ring-cream/20" : ""
      }`}
    >
      <img
        src={almaLogo}
        alt="Alma Institute crest"
        className="h-10 w-10 object-contain"
      />
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
        Est. 2024
      </span>
    </span>
  </Link>
);

export default Logo;
