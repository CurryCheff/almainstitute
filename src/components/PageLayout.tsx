import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image: string;
  alt: string;
}

/** Full-bleed editorial hero used on every interior page. */
export const PageHero = ({ eyebrow, title, lede, image, alt }: PageHeroProps) => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-navy-deep text-cream">
      <Navbar />
      <motion.img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/40 to-navy-deep" />

      <div className="container-wide relative flex min-h-[80vh] flex-col justify-end pb-20 pt-40">
        <motion.span
          className="eyebrow !text-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          className="display-serif mt-6 max-w-4xl text-5xl text-cream md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {lede && (
          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export const PageLayout = ({
  children,
  hero,
}: {
  children: ReactNode;
  hero: PageHeroProps;
}) => (
  <div className="min-h-screen bg-paper">
    <PageHero {...hero} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
