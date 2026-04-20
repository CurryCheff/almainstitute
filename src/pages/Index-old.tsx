import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Compass, Feather, Sparkles } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, Parallax, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { CountUp, Magnetic, Spotlight, Tilt, SplitText } from "@/components/interactive";

import heroCampus from "@/assets/hero-campus.jpg";
import library from "@/assets/library.jpg";
import students from "@/assets/students.jpg";
import science from "@/assets/science.jpg";
import sports from "@/assets/sports.jpg";
import arts from "@/assets/arts.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import headmaster from "@/assets/headmaster.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-navy-deep text-cream">
      <Navbar />
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Ivy-clad Gothic facade of Alma Institute at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy-deep/15 to-navy-deep/95" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-wide relative flex min-h-screen flex-col justify-end pb-24 pt-40"
      >
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
          <Magnetic>
            <Link
              to="/admissions"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-navy-deep transition-all duration-500 hover:shadow-gold"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Begin your application</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Link
            to="/about"
            className="link-underline text-sm uppercase tracking-[0.2em] text-cream/85 hover:text-gold"
          >
            Discover our story
          </Link>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-6 hidden flex-col items-center gap-3 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span className="rotate-90 text-[10px] uppercase tracking-[0.4em] text-cream/60">
            Scroll
          </span>
          <span className="block h-16 w-px bg-cream/30">
            <motion.span
              className="block h-6 w-px bg-gold"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Numbers = () => {
  const stats = [
    { v: "2", l: "Curricula · ZIMSEC & Cambridge" },
    { v: "1 : 12", l: "Teacher to student ratio" },
    { v: "20+", l: "Co-curricular societies" },
    { v: "100%", l: "Pass-focused mentorship" },
  ];
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-cream">
      <Spotlight />
      <div className="container-wide relative">
        <StaggerGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.l} className="group border-l border-cream/15 pl-6 transition-colors duration-500 hover:border-gold">
              <div className="font-serif text-5xl text-gold md:text-6xl">
                <CountUp value={s.v} />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/65 transition-colors duration-500 group-hover:text-cream">{s.l}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

const Manifesto = () => (
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
        <StaggerGroup className="grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <StaggerItem key={it.title}>
              <Tilt max={6} className="h-full">
                <div className="group relative h-full overflow-hidden bg-cream p-10 transition-colors duration-500 hover:bg-navy">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-700 group-hover:bg-gold/30" />
                  <it.icon className="relative h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" strokeWidth={1.4} />
                  <h3 className="relative mt-8 font-serif text-2xl text-navy transition-colors duration-500 group-hover:text-cream">
                    {it.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cream/80">
                    {it.body}
                  </p>
                  <span className="relative mt-8 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                </div>
              </Tilt>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

const FeatureSplit = () => (
  <section className="bg-paper py-32">
    <div className="container-wide grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
      <FadeUp>
        <Parallax className="aspect-[4/5] w-full rounded-sm shadow-elegant" amount={60}>
          <img
            src={library}
            alt="The Whitfield Library at Alma Institute"
            className="h-[120%] w-full object-cover"
            loading="lazy"
          />
        </Parallax>
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

const LifeGrid = () => {
  const items = [
    { img: science, title: "In the laboratories", form: "Form 4 · Sciences" },
    { img: sports, title: "On the fields", form: "Inter-house games" },
    { img: arts, title: "In the studios", form: "Form 5 · Visual Art" },
    { img: students, title: "Across the campus", form: "Morning assembly" },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-32 text-cream">
      <Spotlight />
      <div className="container-wide relative">
        <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
          <FadeUp>
            <span className="eyebrow !text-gold">Campus Life</span>
            <h2 className="display-serif mt-6 text-4xl text-cream md:text-5xl">
              A day at Alma is wider than a timetable.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-base leading-relaxed text-cream/75">
              Mornings begin with assembly and house meetings; afternoons
              turn to sport, music, debate, and society. Evenings are for
              prep, conversation, and the slow work of becoming.
            </p>
          </FadeUp>
        </div>
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <StaggerItem key={it.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-fade-bottom" />
                <div className="absolute inset-0 bg-gold/0 mix-blend-overlay transition-colors duration-700 group-hover:bg-gold/20" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{it.form}</p>
                  <p className="mt-2 font-serif text-xl text-cream">{it.title}</p>
                  <span className="mt-3 block h-px w-0 bg-gold transition-all duration-700 group-hover:w-12" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};

const HeadmasterQuote = () => (
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

const CTA = () => (
  <section className="relative overflow-hidden bg-navy-deep text-cream">
    <Parallax className="absolute inset-0 opacity-50" amount={50}>
      <img src={campusAerial} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
    </Parallax>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/70 to-navy-deep" />
    <Spotlight />
    <div className="container-prose relative py-32 text-center">
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
          <Magnetic>
            <Link
              to="/admissions"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-navy-deep transition-all duration-500 hover:shadow-gold"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Enrol now</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-cream/30 px-7 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Arrange a visit
          </Link>
        </div>
      </FadeUp>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen bg-paper">
    <Hero />
    <Numbers />
    <Manifesto />
    <Pillars />
    <FeatureSplit />
    <LifeGrid />
    <HeadmasterQuote />
    <CTA />
    <Footer />
  </div>
);

export default Index;
