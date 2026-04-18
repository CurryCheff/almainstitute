import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, Compass, Feather, Sparkles } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeUp, Parallax, StaggerGroup, StaggerItem } from "@/components/motion-primitives";

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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/30 to-navy-deep" />
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
          A High School of Distinction · Est. 1894
        </motion.span>

        <motion.h1
          className="display-serif mt-6 max-w-5xl text-cream"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem]">A place where</span>
          <span className="block text-5xl italic text-gold md:text-7xl lg:text-[5.5rem]">young minds</span>
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem]">find their voice.</span>
        </motion.h1>

        <motion.p
          className="mt-10 max-w-xl text-lg leading-relaxed text-cream/80"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          From Form 1 to Form 6, Alma Institute prepares scholars to think
          rigorously, write beautifully, and lead with quiet conviction.
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
            Begin your application
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
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
    { v: "131", l: "Years of tradition" },
    { v: "412", l: "Scholars in residence" },
    { v: "1 : 8", l: "Faculty to student ratio" },
    { v: "98%", l: "University placement" },
  ];
  return (
    <section className="bg-navy py-20 text-cream">
      <div className="container-wide">
        <StaggerGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.l} className="border-l border-cream/15 pl-6">
              <div className="font-serif text-5xl text-gold md:text-6xl">{s.v}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/65">{s.l}</div>
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
          <span className="eyebrow">Our Manifesto</span>
          <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
            An education of <em className="text-gold">substance</em>.
          </h2>
        </FadeUp>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <FadeUp delay={0.15}>
          <p className="editorial-drop font-serif text-2xl leading-snug text-navy md:text-[1.6rem]">
            We believe that a school is, above all, a community of readers and
            makers. Our scholars learn to argue with care, to write with
            precision, and to listen as a discipline.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            From the first form to the sixth, every Alma student moves through a
            curriculum that braids the humanities, the sciences, and the arts —
            and through a campus life that asks them to lead, to serve, and to
            wonder.
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
      title: "Letters",
      body: "A humanities core anchored in close reading, original writing, and argument across English, history, and modern languages.",
    },
    {
      icon: Compass,
      title: "Sciences",
      body: "Inquiry-led laboratories in biology, chemistry, physics, and mathematics — taught as a way of seeing the world.",
    },
    {
      icon: Feather,
      title: "Arts",
      body: "Studios for painting, music, and theatre where craft, discipline, and imagination meet daily.",
    },
    {
      icon: Sparkles,
      title: "Character",
      body: "Houses, mentorship, service, and sport — the quiet architecture that forms a scholar into a citizen.",
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
            <StaggerItem
              key={it.title}
              className="group relative bg-cream p-10 transition-colors duration-500 hover:bg-navy"
            >
              <it.icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
              <h3 className="mt-8 font-serif text-2xl text-navy transition-colors duration-500 group-hover:text-cream">
                {it.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-cream/80">
                {it.body}
              </p>
              <span className="mt-8 block h-px w-10 bg-gold" />
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
            The Whitfield Library holds more than forty thousand volumes, a
            rare-books room, and a quiet upstairs gallery where Sixth Form
            scholars write their final dissertations. It is open from first
            light until evening prep.
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
    { img: science, title: "In the laboratories", form: "Form 4 · Chemistry" },
    { img: sports, title: "On the fields", form: "First XV · Lent term" },
    { img: arts, title: "In the studios", form: "Form 5 · Painting" },
    { img: students, title: "Through the cloisters", form: "House mornings" },
  ];
  return (
    <section className="bg-navy-deep py-32 text-cream">
      <div className="container-wide">
        <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
          <FadeUp>
            <span className="eyebrow !text-gold">Campus Life</span>
            <h2 className="display-serif mt-6 text-4xl text-cream md:text-5xl">
              A day at Alma is wider than a timetable.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-base leading-relaxed text-cream/75">
              Mornings begin with chapel and house meetings; afternoons turn to
              sport, music, and society. Evenings are for prep, conversation,
              and the slow work of becoming.
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
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-fade-bottom" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{it.form}</p>
                  <p className="mt-2 font-serif text-xl text-cream">{it.title}</p>
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
            alt="Dr. Augustin Vale, Headmaster of Alma Institute"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Dr. Augustin Vale · Headmaster
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
    <Parallax className="absolute inset-0 opacity-30" amount={50}>
      <img src={campusAerial} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
    </Parallax>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/85 to-navy-deep" />
    <div className="container-prose relative py-32 text-center">
      <FadeUp>
        <span className="eyebrow !text-gold justify-center">Admissions Open · Forms 1–6</span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="display-serif mx-auto mt-8 max-w-3xl text-4xl text-cream md:text-6xl">
          The next chapter of Alma <em className="text-gold">begins with you</em>.
        </h2>
      </FadeUp>
      <FadeUp delay={0.25}>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75">
          Applications for the upcoming Michaelmas term close on the fifteenth
          of February. We welcome day and boarding scholars.
        </p>
      </FadeUp>
      <FadeUp delay={0.4}>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-navy-deep transition-all duration-500 hover:shadow-gold"
          >
            Apply for entry
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
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
