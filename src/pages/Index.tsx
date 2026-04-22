import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Compass, Feather, Sparkles } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { useIsMobile } from "@/hooks/use-mobile";

import heroCampus from "@/assets/school-building.jpg";
import library from "@/assets/library.jpg";
import students from "@/assets/students.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import headmaster from "@/assets/headmaster.jpg";
import almaLogo from "@/assets/alma-logo.png";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-navy-deep text-cream">
      <Navbar />
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Ivy-clad Gothic facade of Alma Institute at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/15 to-navy-deep/95" />
      </div>

      <div className="container-wide relative flex min-h-screen flex-col justify-end pb-24 pt-40">
        <motion.span
          className="eyebrow !text-gold"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Premier Private School · Mutare, Zimbabwe · Est. 2024
        </motion.span>

        <motion.h1
          className="display-serif mt-6 max-w-5xl text-cream"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem]">Enhance your</span>
          <span className="block text-5xl italic text-gold md:text-7xl lg:text-[5.5rem]">future</span>
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem]">with Alma Institute.</span>
        </motion.h1>

        <motion.p
          className="mt-10 max-w-xl text-lg leading-relaxed text-cream/80"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          A dual ZIMSEC and Cambridge curriculum, set on a tranquil campus
          along Vumba Road — preparing scholars to think rigorously, lead with
          conviction, and meet challenges positively.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
        >
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy-deep transition-all duration-500 hover:shadow-gold"
          >
            <span className="relative">Begin your application</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="link-underline text-sm uppercase tracking-[0.2em] text-cream/85 hover:text-gold"
          >
            Discover our story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "2", label: "Curricula · ZIMSEC & Cambridge" },
    { value: "1 : 12", label: "Teacher to student ratio" },
    { value: "20+", label: "Co-curricular societies" },
    { value: "100%", label: "Pass-focused mentorship" },
  ];
  return (
    <section className="bg-navy py-20 text-cream">
      <div className="container-wide">
        <StaggerGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="border-l border-cream/15 pl-6">
              <div className="font-serif text-5xl text-gold md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/65">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

const MottoParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBack = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yWord = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const yLogo = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] overflow-hidden bg-navy-deep text-cream"
    >
      {/* Background plate */}
      <motion.div style={{ y: yBack }} className="absolute inset-0 scale-125">
        <img
          src={campusAerial}
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/70 to-navy-deep" />
      </motion.div>

      {/* Giant scrolling word */}
      <motion.div
        style={{ y: yWord, opacity }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center"
        aria-hidden
      >
        <span className="block font-serif text-[22vw] font-medium leading-none tracking-tighter text-gold/10 md:text-[18vw]">
          ALMA
        </span>
      </motion.div>

      {/* Foreground content */}
      <div className="container-prose relative flex h-full flex-col items-center justify-center text-center">
        <motion.img
          style={{ y: yLogo }}
          src={almaLogo}
          alt="Alma Institute crest"
          className="mb-8 h-24 w-24 object-contain drop-shadow-[0_4px_20px_hsl(var(--gold)/0.35)] md:h-32 md:w-32"
        />
        <FadeUp>
          <span className="eyebrow !text-gold justify-center">The School Motto</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="display-serif mt-8 whitespace-nowrap text-[15vw] italic leading-none text-cream sm:text-6xl md:text-8xl lg:text-[8rem]">
            Alma <span className="text-gold">Mater</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            A nourishing mother — the school that shapes mind, character, and
            conviction for a lifetime.
          </p>
        </FadeUp>
      </div>
    </section>
  );
};

const Mission = () => (
  <section className="bg-paper py-32">
    <div className="container-prose grid gap-16 md:grid-cols-12">
      <div className="md:col-span-4">
        <FadeUp>
          <span className="eyebrow">Our Mission</span>
          <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
            An education of <em className="text-gold">substance</em>.
          </h2>
        </FadeUp>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <FadeUp delay={0.15}>
          <p className="editorial-drop font-serif text-2xl leading-snug text-navy md:text-[1.6rem]">
            To dedicate ourselves to safeguarding the welfare of learners
            through an education that nurtures knowledge, wisdom, and the
            confidence to meet challenges positively.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Set on a beautiful campus just outside the city of Mutare along
            Vumba Road, Alma Institute equips bright young Zimbabweans with
            crucial life skills — preparing them to become adaptable citizens
            and leading professionals through both the ZIMSEC and Cambridge
            curricula.
          </p>
        </FadeUp>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const isMobile = useIsMobile();
  const items = [
    {
      icon: BookOpen,
      title: "ZIMSEC",
      body: "A comprehensive, locally relevant curriculum designed to meet national standards and prepare scholars for tertiary education in Zimbabwe.",
    },
    {
      icon: Compass,
      title: "Cambridge",
      body: "A globally recognised framework that fosters critical thinking and deep understanding — opening doors to universities worldwide.",
    },
    {
      icon: Feather,
      title: "Co-Curricular",
      body: "Sports, arts, STEM, debate, and community service that build teamwork, leadership, and the discovery of new passions.",
    },
    {
      icon: Sparkles,
      title: "Character",
      body: "House mornings, mentorship, and service — the quiet architecture that forms a scholar into a thoughtful, principled citizen.",
    },
  ];
  return (
    <section className="bg-cream-deep py-32">
      <div className="container-wide">
        <div className="mb-16 max-w-2xl">
          <FadeUp>
            <span className="eyebrow">The four pillars</span>
            <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
              Four disciplines, one formation.
            </h2>
          </FadeUp>
        </div>
        <div className="grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: isMobile ? 32 : 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.25 : 0.6, margin: isMobile ? "0px 0px -10% 0px" : "0px" }}
              transition={{
                duration: isMobile ? 0.6 : 0.8,
                delay: i * (isMobile ? 0.1 : 0.18),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group h-full bg-cream p-10 transition-colors duration-500 hover:bg-navy">
                <item.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110" strokeWidth={1.4} />
                <h3 className="mt-8 font-serif text-2xl text-navy transition-colors duration-500 group-hover:text-cream">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cream/80">
                  {item.body}
                </p>
                <span className="mt-8 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => (
  <section className="bg-paper py-32">
    <div className="container-wide grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
      <FadeUp>
        <div className="aspect-[4/5] w-full overflow-hidden rounded-sm shadow-elegant">
          <img
            src={library}
            alt="The Whitfield Library at Alma Institute"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </FadeUp>
      <div>
        <FadeUp>
          <span className="eyebrow">A Living Tradition</span>
          <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
            The library is the heart of the school.
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Our library and resource centre is open from morning assembly
            until evening prep — a quiet space where Form 6 scholars draft
            their Cambridge coursework, and younger students discover the
            habits of close reading, careful note-taking, and original
            writing.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <Link
            to="/academics"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-navy hover:text-gold link-underline"
          >
            Explore academics <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="bg-cream py-32">
    <div className="container-prose grid items-center gap-14 md:grid-cols-12">
      <FadeUp className="md:col-span-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-soft">
          <img
            src={headmaster}
            alt="The Headmaster of Alma Institute"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          The Headmaster · Alma Institute
        </p>
      </FadeUp>
      <div className="md:col-span-7 md:col-start-6">
        <FadeUp>
          <span className="eyebrow">A Letter from the Headmaster</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <blockquote className="mt-8 font-serif text-3xl leading-tight text-navy md:text-[2.5rem]">
            <span className="text-gold">"</span>We do not aim to produce
            specialists at sixteen. We aim to produce <em>students</em> — people
            for whom learning is a lifelong appetite, and kindness a daily
            habit.<span className="text-gold">"</span>
          </blockquote>
        </FadeUp>
        <FadeUp delay={0.25}>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-navy hover:text-gold link-underline"
          >
            Read the full letter <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </div>
    </div>
  </section>
);

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.18, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
  <section ref={ref} className="relative overflow-hidden bg-navy-deep text-cream">
    <motion.div style={{ y: bgY }} className="absolute inset-[-10%] opacity-50">
      <img src={campusAerial} alt="" className="h-full w-full object-cover" loading="lazy" />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/70 to-navy-deep" />
    <motion.div
      style={{ x: wordX }}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[22vw] font-bold leading-none tracking-tighter text-gold/[0.06] whitespace-nowrap"
    >
      ALMA MATER
    </motion.div>
    <motion.img
      src={almaLogo}
      alt=""
      aria-hidden
      style={{ y: logoY, opacity: logoOpacity }}
      className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-auto -translate-x-1/2 -translate-y-1/2 select-none"
    />
    <motion.div style={{ y: contentY }} className="container-prose relative py-32 text-center">
      <FadeUp>
        <span className="eyebrow !text-gold justify-center">Enrolment Open · Forms 1 – 6</span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="display-serif mx-auto mt-8 max-w-3xl text-4xl text-cream md:text-6xl">
          Begin your journey with Alma <em className="text-gold">today</em>.
        </h2>
      </FadeUp>
      <FadeUp delay={0.25}>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75">
          We welcome day scholars at every form, across both the ZIMSEC and
          Cambridge tracks. Come and visit our campus along Vumba Road.
        </p>
      </FadeUp>
      <FadeUp delay={0.4}>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-navy-deep transition-all duration-500 hover:shadow-gold"
          >
            <span className="relative">Begin your application</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="link-underline text-sm uppercase tracking-[0.2em] text-cream/85 hover:text-gold"
          >
            Contact us
          </Link>
        </div>
      </FadeUp>
    </motion.div>
  </section>
  );
};

const Index = () => (
  <>
    <Hero />
    <Stats />
    <MottoParallax />
    <Mission />
    <Pillars />
    <FeatureSection />
    <Quote />
    <CTA />
    <Footer />
  </>
);

export default Index;