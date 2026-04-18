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
    body: "A broad foundation in English, mathematics, history, geography, two languages, the sciences, and the arts. Scholars are introduced to the practice of close reading and original writing.",
    subjects: ["English", "Mathematics", "History", "Geography", "Latin", "French / Spanish", "Biology", "Chemistry", "Physics", "Music", "Visual Art", "Games"],
  },
  {
    forms: "Forms 4 – 5",
    name: "The Middle School",
    body: "Scholars deepen their training in the disciplines through more demanding seminars and laboratory work. The school certificate examinations are taken at the end of Form 5.",
    subjects: ["English Literature", "Pure & Applied Mathematics", "Modern History", "Geography", "Biology", "Chemistry", "Physics", "Modern Languages", "Latin", "Economics", "Computer Science", "Studio Art"],
  },
  {
    forms: "Forms 6.1 – 6.2",
    name: "The Sixth Form",
    body: "Scholars choose three or four advanced subjects, write an extended dissertation, and prepare for university entrance. Sixth Formers also lead houses, tutor younger pupils, and direct school societies.",
    subjects: ["A-Level Literature", "A-Level Mathematics & Further Maths", "A-Level History", "A-Level Sciences", "A-Level Languages", "Philosophy & Theology", "Politics", "Economics", "Music Performance", "Theatre Studies", "Extended Project"],
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
      lede: "Six forms. Three schools within a school. One coherent education in the humanities, the sciences, and the arts.",
      image: library,
      alt: "The Whitfield Library — Alma Institute",
    }}
  >
    {/* The arc */}
    <section className="bg-paper py-32">
      <div className="container-prose grid gap-12 md:grid-cols-12">
        <FadeUp className="md:col-span-4">
          <span className="eyebrow">The Arc of Study</span>
          <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
            From foundations to mastery.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            We design our curriculum the way a good novel is written: each form
            builds on the last, surprises emerge, and the whole resolves into
            something far greater than its parts. By Form 6, our scholars are
            doing university‑level work in three or four chosen disciplines.
          </p>
        </FadeUp>
      </div>
    </section>

    {/* Forms */}
    <section className="bg-cream-deep py-32">
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
    <section className="bg-paper py-32">
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
              More than forty societies, eighteen sports, three orchestras, and
              two annual theatrical productions — each led, in part, by Sixth
              Form scholars themselves.
            </p>
          </FadeUp>
        </div>
        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {[
            { img: science, title: "Sciences & Research", body: "Independent investigation in our four laboratories, with summer fellowships at partner universities." },
            { img: arts, title: "Arts & Performance", body: "Studios, practice rooms, and a 320‑seat theatre — open to every form, every term." },
            { img: sports, title: "Sport & the Outdoors", body: "Eighteen team sports, a rowing programme on the Carrick, and weekend expeditions in the highlands." },
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
          <span className="eyebrow !text-gold">University Placement</span>
          <h2 className="display-serif mt-6 text-4xl md:text-5xl">
            Where Alma scholars go next.
          </h2>
          <p className="mt-6 text-cream/75">
            In the past five years, ninety‑eight percent of our Sixth Form
            leavers have proceeded directly to university — and most to their
            first‑choice institutions.
          </p>
        </FadeUp>
        <StaggerGroup className="md:col-span-6 md:col-start-7 grid grid-cols-2 gap-x-8 gap-y-6 self-center">
          {[
            "Cambridge", "Oxford", "Edinburgh", "St Andrews",
            "Trinity Dublin", "King's College", "McGill", "Toronto",
            "ETH Zürich", "Sciences Po", "Bocconi", "UCT",
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
            "I left Alma not knowing every answer, but knowing how to ask the
            right questions. That, it turns out, is everything."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Eliza Marsh, Form 6 (2022) — now reading English at Cambridge
          </p>
        </FadeUp>
      </div>
    </section>
  </PageLayout>
);

export default Academics;
