import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden bg-navy-deep text-cream">
      <div className="container-wide grid gap-14 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-5">
          <Logo light />
          <p className="mt-8 max-w-sm font-serif text-xl leading-snug text-cream/85">
            "Per litteras ad lucem" — through letters, into the light.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/65">
            A high school of Forms 1 through 6, shaping principled, curious, and
            courageous young scholars on a historic campus since 1894.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="mb-6 text-xs uppercase tracking-[0.28em] text-gold">Visit</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>
                14 Ashworth Lane
                <br />
                Bramwell Hills, Province
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <span>+1 (555) 014‑1894</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:office@alma.edu" className="link-underline">
                office@alma.edu
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-6 text-xs uppercase tracking-[0.28em] text-gold">Explore</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/academics" className="link-underline">Academics</Link></li>
            <li><Link to="/admissions" className="link-underline">Admissions</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-wide flex flex-col items-start justify-between gap-4 py-6 text-xs text-cream/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Alma Institute. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Form 1 — Form 6 · Co‑educational</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
