import { PageLayout } from "@/components/PageLayout";
import { FadeUp, Parallax, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import library from "@/assets/library.jpg";
import science from "@/assets/science.jpg";
import arts from "@/assets/arts.jpg";
import sports from "@/assets/sports.jpg";

const forms = [
  {
    forms: "Forms 1 – 3",
    name: "The Lower School",
    body: "A broad foundation across English, mathematics, the sciences, languages, and the humanities — building the study habits and confidence that carry scholars through their senior years.",
    subjects: ["English", "Mathematics", "Shona", "History", "Geography", "Integrated Science", "Biology", "Chemistry", "Physics", "ICT", "Visual Art", "Physical Education"],
  },
  {
    forms: "Forms 4 – 5",
    name: "The Middle School",
    body: "Scholars deepen their study in chosen disciplines and sit ZIMSEC O-Level and Cambridge IGCSE examinations at the end of Form 5 — a strong, internationally recognised platform for the Sixth Form.",
    subjects: ["English Language", "English Literature", "Mathematics", "Combined Science", "Biology", "Chemistry", "Physics", "Geography", "History", "Commerce", "Accounting", "Computer Science"],
  },
  {
    forms: "Form 6 · Lower & Upper",
    name: "The Sixth Form",
    body: "Scholars choose three or four advanced subjects and prepare for ZIMSEC A-Level and Cambridge AS/A-Level examinations, alongside university applications and leadership roles in the school community.",
    subjects: ["A-Level Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Business Studies", "Accounting", "Geography", "History", "Literature in English", "Computer Science"],
  },
];

const Academics = () => (
  <PageLayout
    hero={{
      eyebrow: "Academics",
      title: (
        <>
          A curriculum that rewards <em className="text-gold">attention</em>.
        </>
      ),
      lede: "Two world-class curricula — ZIMSEC and Cambridge — taught side by side from Form 1 to Form 6, with co-curricular life that develops the whole scholar.",
      image: library,
      alt: "Alma Institute library",
    }}
  >
    {/* The arc */}
    <section className="bg-paper py-32">
      <div className="container-prose grid gap-12 md:grid-cols-12">
        <FadeUp className="md:col-span-4">
          <span className="eyebrow">Two Curricula, One Education</span>
          <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
            ZIMSEC and Cambridge, taught with care.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our scholars sit examinations recognised both across Zimbabwe and
            around the world. The ZIMSEC pathway grounds them in nationally
            relevant content; the Cambridge pathway opens international
            university doors. Many of our students engage with both — a
            uniquely Alma advantage.
          </p>
        </FadeUp>
      </div>
    </section>

    {/* Curriculum tracks */}
    <section className="bg-cream-deep py-24">
      <div className="container-wide grid gap-px overflow-hidden bg-border md:grid-cols-2">
        {[
          {
            tag: "National",
            title: "ZIMSEC Curriculum",
            body: "A comprehensive, locally relevant education designed to meet national standards. ZIMSEC equips scholars for success in Zimbabwean examinations and prepares them for tertiary education and national development.",
            points: ["O-Level (Form 4)", "A-Level (Form 6)", "National relevance", "Strong tertiary pathway"],
          },
          {
            tag: "International",
            title: "Cambridge Curriculum",
            body: "A globally recognised framework that fosters critical thinking, problem-solving, and deep understanding across subjects — preparing scholars for higher education worldwide and future global careers.",
            points: ["IGCSE (Form 4)", "AS & A-Level (Form 6)", "International recognition", "Global university access"],
          },
        ].map((c) => (
          <FadeUp key={c.title} className="bg-cream p-12">
            <span className="text-xs uppercase tracking-[0.28em] text-gold">{c.tag}</span>
            <h3 className="mt-6 font-serif text-3xl text-navy md:text-4xl">{c.title}</h3>
            <p className="mt-6 leading-relaxed text-muted-foreground">{c.body}</p>
            <ul className="mt-8 space-y-2">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-navy">
                  <span className="h-px w-6 bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>

    {/* Forms */}
    <section className="bg-paper py-32">
      <div className="container-wide space-y-24">
        {forms.map((f, i) => (
          <FadeUp key={f.name}>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <div className="font-serif text-7xl text-gold/30 md:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-gold">{f.forms}</p>
                <h3 className="mt-4 font-serif text-3xl text-navy md:text-4xl">{f.name}</h3>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="font-serif text-xl leading-snug text-navy md:text-2xl">{f.body}</p>
                <div className="mt-10">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Subjects of study
                  </p>
                  <StaggerGroup className="mt-4 flex flex-wrap gap-2" staggerChildren={0.04}>
                    {f.subjects.map((s) => (
                      <StaggerItem
                        key={s}
                        className="rounded-full border border-border bg-cream px-4 py-2 text-xs text-navy"
                      >
                        {s}
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              </div>
            </div>
            {i < forms.length - 1 && <div className="mx-auto mt-24 h-px w-24 bg-gold/60" />}
          </FadeUp>
        ))}
      </div>
    </section>

    {/* Beyond the classroom */}
    <section className="bg-cream-deep py-32">
      <div className="container-wide">
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <FadeUp className="md:col-span-7">
            <span className="eyebrow">Beyond the Classroom</span>
            <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
              The disciplines do not end at the door.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground">
              From sports and the arts to STEM, debate, and community
              service, our co-curricular programme encourages teamwork,
              leadership, and the discovery of new passions.
            </p>
          </FadeUp>
        </div>
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {[
            { img: science, title: "Sciences & STEM", body: "Practical laboratory work, computing, and inquiry-led projects across biology, chemistry, and physics." },
            { img: arts, title: "Arts & Performance", body: "Visual art studios, music, drama, and an annual showcase that brings the whole school together." },
            { img: sports, title: "Sport & the Outdoors", body: "Inter-house competitions, team sports, and outdoor expeditions in the beautiful Vumba mountains nearby." },
          ].map((c) => (
            <StaggerItem key={c.title} className="group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-serif text-2xl text-cream">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/80">{c.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>

    {/* Outcomes */}
    <section className="bg-navy-deep py-32 text-cream">
      <div className="container-wide grid gap-16 md:grid-cols-12">
        <FadeUp className="md:col-span-5">
          <span className="eyebrow !text-gold">Where Alma Leads</span>
          <h2 className="display-serif mt-6 text-4xl md:text-5xl">
            Pathways our scholars pursue.
          </h2>
          <p className="mt-6 text-cream/75">
            With both ZIMSEC and Cambridge qualifications, our scholars
            graduate ready for top universities in Zimbabwe, the wider
            region, and abroad — across the sciences, the humanities, and
            the professions.
          </p>
        </FadeUp>
        <StaggerGroup className="md:col-span-6 md:col-start-7 grid grid-cols-2 gap-x-8 gap-y-6 self-center">
          {[
            "University of Zimbabwe", "NUST", "Africa University",
            "Midlands State", "UCT", "Wits",
            "Stellenbosch", "Pretoria", "Rhodes",
            "Nottingham", "Manchester", "Warwick",
          ].map((u) => (
            <StaggerItem key={u} className="font-serif text-lg text-cream/85">
              <span className="mr-3 text-gold">·</span>{u}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>

    <section className="relative overflow-hidden bg-cream py-24">
      <Parallax className="absolute inset-0 opacity-20" amount={40}>
        <img src={library} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
      </Parallax>
      <div className="container-prose relative text-center">
        <FadeUp>
          <p className="font-serif text-3xl leading-snug text-navy md:text-4xl">
            "We provide learners with crucial life skills — designed to boost
            their exam performance and prepare them to become adaptable
            citizens and leading professionals."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Alma Institute · Academic Office
          </p>
        </FadeUp>
      </div>
    </section>
  </PageLayout>
);

export default Academics;
