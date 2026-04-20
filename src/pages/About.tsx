import { PageLayout } from "@/components/PageLayout";
import { FadeUp, Parallax, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import campusAerial from "@/assets/campus-aerial.jpg";
import library from "@/assets/library.jpg";
import headmaster from "@/assets/headmaster.jpg";
import students from "@/assets/students.jpg";

const About = () => (
  <PageLayout
    hero={{
      eyebrow: "About the Institute",
      title: (
        <>
          A school built on <em className="text-gold">welfare</em>,
          <br /> wisdom, and learning.
        </>
      ),
      lede: "Established in 2024 just outside Mutare along Vumba Road, Alma Institute is a premier private school offering the ZIMSEC and Cambridge curricula from Form 1 through Form 6.",
      image: campusAerial,
      alt: "Aerial view of Alma Institute's campus",
    }}
  >
    {/* Letter from the Head */}
    <section className="bg-paper py-32">
      <div className="container-prose grid gap-16 md:grid-cols-12">
        <FadeUp className="md:col-span-5">
          <span className="eyebrow">From the Headmaster</span>
          <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
            On joining the Alma family.
          </h2>
          <div className="mt-10 overflow-hidden rounded-sm shadow-soft">
            <img src={headmaster} alt="The Headmaster of Alma Institute" className="w-full object-cover" loading="lazy" />
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            The Headmaster · Alma Institute
          </p>
        </FadeUp>
        <div className="md:col-span-6 md:col-start-7">
          <FadeUp delay={0.1}>
            <p className="editorial-drop font-serif text-xl leading-snug text-navy md:text-2xl">
              When a young person walks through our gates for the first time,
              we are not asking what they already know. We are asking what
              they are curious about — and how we might widen that curiosity
              into a life of meaning.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our six forms are organised around a simple conviction: that
              every learner deserves a safe, comfortable environment in
              which to grow. We pair the depth of the Cambridge curriculum
              with the local relevance of ZIMSEC, so that our scholars are
              equally at home in Mutare or anywhere in the world.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I invite you to visit us. Walk our grounds. Sit in on a Form 6
              lesson. Have a conversation with our teachers. You will know,
              very quickly, whether Alma is your school.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="mt-10 font-serif text-2xl italic text-navy">— The Headmaster</p>
          </FadeUp>
        </div>
      </div>
    </section>

    {/* History / Milestones */}
    <section className="bg-cream-deep py-32">
      <div className="container-wide">
        <FadeUp>
          <span className="eyebrow">Our Story</span>
          <h2 className="display-serif mt-6 max-w-2xl text-4xl text-navy md:text-5xl">
            A young school with serious ambition.
          </h2>
        </FadeUp>
        <StaggerGroup className="mt-20 grid gap-px overflow-hidden bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            { year: "2024", title: "Alma Institute is founded", body: "Doors open along Vumba Road, just outside Mutare — a school built on welfare, wisdom, and warmth." },
            { year: "Form 1–6", title: "A complete journey", body: "From the foundational years through A-Levels, scholars progress through one coherent education." },
            { year: "ZIMSEC", title: "Locally rooted", body: "A comprehensive national curriculum that prepares scholars for Zimbabwean tertiary education." },
            { year: "Cambridge", title: "Globally connected", body: "An internationally recognised pathway that opens doors to universities the world over." },
          ].map((m) => (
            <StaggerItem key={m.title} className="bg-cream p-10">
              <div className="font-serif text-5xl text-gold">{m.year}</div>
              <h3 className="mt-6 font-serif text-xl text-navy">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>

    {/* Values */}
    <section className="bg-paper py-32">
      <div className="container-wide grid gap-16 md:grid-cols-2 md:items-center md:gap-20">
        <FadeUp>
          <Parallax className="aspect-[4/5] w-full rounded-sm shadow-elegant" amount={50}>
            <img src={library} alt="Alma Institute library and study space" className="h-[120%] w-full object-cover" loading="lazy" />
          </Parallax>
        </FadeUp>
        <div>
          <FadeUp>
            <span className="eyebrow">What we value</span>
            <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
              Five things we never compromise on.
            </h2>
          </FadeUp>
          <StaggerGroup className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["Welfare", "Every learner deserves a safe and comfortable environment."],
              ["Rigour", "We teach the difficult thing well, in both ZIMSEC and Cambridge tracks."],
              ["Curiosity", "We treat questions as the highest form of intelligence."],
              ["Service", "We measure character by what is done for others."],
              ["Joy", "We believe a school should be a place students love."],
            ].map(([k, v]) => (
              <StaggerItem key={k} className="grid grid-cols-12 items-baseline gap-4 py-6">
                <span className="col-span-4 font-serif text-2xl text-navy md:col-span-3">{k}</span>
                <span className="col-span-8 text-muted-foreground md:col-span-9">{v}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>

    {/* Faculty */}
    <section className="bg-navy-deep py-32 text-cream">
      <div className="container-wide grid gap-12 md:grid-cols-12 md:items-end">
        <FadeUp className="md:col-span-7">
          <span className="eyebrow !text-gold">The Faculty</span>
          <h2 className="display-serif mt-6 text-4xl md:text-5xl">
            Teachers who genuinely admire <em className="text-gold">their students</em>.
          </h2>
        </FadeUp>
        <FadeUp className="md:col-span-4 md:col-start-9" delay={0.1}>
          <p className="text-cream/75">
            Our staff are qualified to teach both ZIMSEC and Cambridge
            syllabi, and many bring experience from research, industry, and
            the arts. Class sizes are kept small so every scholar is known.
          </p>
        </FadeUp>
      </div>
      <FadeUp delay={0.2} className="mt-16">
        <Parallax className="container-wide aspect-[21/9] overflow-hidden" amount={60}>
          <img src={students} alt="Scholars on the Alma Institute campus" className="h-[120%] w-full object-cover" loading="lazy" />
        </Parallax>
      </FadeUp>
    </section>
  </PageLayout>
);

export default About;
