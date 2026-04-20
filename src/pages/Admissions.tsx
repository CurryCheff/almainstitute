import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { useToast } from "@/hooks/use-toast";
import students from "@/assets/students.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";

const steps = [
  {
    n: "01",
    title: "Inquiry",
    body: "Submit a short online inquiry. Our admissions office will respond within five working days with a warm welcome and next steps.",
  },
  {
    n: "02",
    title: "Visit & Interview",
    body: "Tour the campus along Vumba Road, meet our staff, and sit a friendly conversational interview with a senior teacher.",
  },
  {
    n: "03",
    title: "Application",
    body: "Submit school reports from the previous two years, two references, and a short letter of intent from the prospective scholar.",
  },
  {
    n: "04",
    title: "Assessment",
    body: "Form 1–5 candidates sit short papers in English and mathematics. Form 6 candidates also discuss their chosen A-Level subjects.",
  },
  {
    n: "05",
    title: "Offer & Enrolment",
    body: "Offers are released in advance of each term. Families confirm a place and select either the ZIMSEC, Cambridge, or combined pathway.",
  },
];

const Admissions = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Inquiry received",
      description: "Our admissions office will be in touch within five working days.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout
      hero={{
        eyebrow: "Admissions · Forms 1 – 6",
        title: (
          <>
            Begin your <em className="text-gold">Alma</em> story.
          </>
        ),
        lede: "We welcome day scholars of every background to join Alma Institute, just outside Mutare on Vumba Road. Choose between the ZIMSEC and Cambridge curricula — or combine the two for the broadest possible education.",
        image: students,
        alt: "Scholars walking through the south archway",
      }}
    >
      {/* Key dates */}
      <section className="bg-navy py-20 text-cream">
        <div className="container-wide grid gap-10 md:grid-cols-3">
          {[
            { k: "Inquiries open", v: "1 September" },
            { k: "Application deadline", v: "15 February" },
            { k: "Offers released", v: "1 April" },
          ].map((d) => (
            <FadeUp key={d.k} className="border-l border-cream/15 pl-6">
              <p className="text-xs uppercase tracking-[0.28em] text-gold">{d.k}</p>
              <p className="mt-3 font-serif text-3xl text-cream md:text-4xl">{d.v}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper py-32">
        <div className="container-wide">
          <FadeUp>
            <span className="eyebrow">The Process</span>
            <h2 className="display-serif mt-6 max-w-2xl text-4xl text-navy md:text-5xl">
              Five steps, taken with care.
            </h2>
          </FadeUp>
          <div className="relative mt-20">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />
            <StaggerGroup className="space-y-12">
              {steps.map((s) => (
                <StaggerItem key={s.n} className="grid gap-6 md:grid-cols-12 md:gap-10">
                  <div className="relative md:col-span-2">
                    <span className="relative z-10 inline-grid h-12 w-12 place-items-center rounded-full bg-navy font-serif text-sm text-cream">
                      {s.n}
                    </span>
                  </div>
                  <div className="md:col-span-9 md:col-start-3">
                    <h3 className="font-serif text-2xl text-navy md:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Fees & bursaries */}
      <section className="bg-cream-deep py-32">
        <div className="container-wide grid gap-16 md:grid-cols-2 md:gap-20">
          <FadeUp>
            <span className="eyebrow">Fees</span>
            <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">An honest investment.</h2>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {[
                ["Forms 1 – 3 (ZIMSEC)", "Contact for fees"],
                ["Forms 1 – 3 (Cambridge)", "Contact for fees"],
                ["Forms 4 – 5 (O-Level / IGCSE)", "Contact for fees"],
                ["Form 6 (A-Level)", "Contact for fees"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 py-5">
                  <span className="text-navy">{k}</span>
                  <span className="font-serif text-xl text-gold">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Fees include tuition, books, and standard examination entries.
              Please contact the admissions office for the current term's
              fee schedule in USD or ZWG.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <span className="eyebrow">Bursaries</span>
            <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
              For families of every means.
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Alma Institute is committed to ensuring that talented young
              Zimbabweans are not turned away for financial reasons. A
              limited number of bursaries and scholarships are awarded each
              year on the basis of academic promise and family circumstance.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Means-tested bursaries for promising scholars",
                "Academic scholarships at Forms 1 and 6",
                "Sport and arts awards at every entry point",
                "Sibling discounts for families with multiple children",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-navy">
                  <Check className="mt-1 h-4 w-4 text-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="relative overflow-hidden bg-navy-deep py-32 text-cream">
        <motion.img
          src={campusAerial}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-15"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
        <div className="container-prose relative grid gap-12 md:grid-cols-12">
          <FadeUp className="md:col-span-5">
            <span className="eyebrow !text-gold">Begin your inquiry</span>
            <h2 className="display-serif mt-6 text-4xl text-cream md:text-5xl">
              Tell us about your young scholar.
            </h2>
            <p className="mt-6 text-cream/75">
              Share a few details and our admissions office will be in touch
              within five working days to arrange a visit.
            </p>
          </FadeUp>

          <FadeUp delay={0.15} className="md:col-span-6 md:col-start-7">
            <form onSubmit={onSubmit} className="space-y-6">
              {[
                { name: "parent", label: "Parent or guardian name", type: "text", nameField: true },
                { name: "student", label: "Student name", type: "text", nameField: true },
                { name: "email", label: "Email address", type: "email", nameField: false },
              ].map((f) => (
                <div key={f.name}>
                  <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-cream/65">
                    {f.label}
                  </label>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    maxLength={f.nameField ? 100 : 255}
                    {...(f.nameField && {
                      pattern: "[A-Za-z\\s'\\-]+",
                      title: "Name may only contain letters, spaces, hyphens, and apostrophes.",
                      onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key.length === 1 && !/[A-Za-z\s'\-]/.test(e.key) && !e.ctrlKey && !e.metaKey) {
                          e.preventDefault();
                        }
                      },
                      onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => {
                        const text = e.clipboardData.getData("text");
                        if (!/^[A-Za-z\s'\-]+$/.test(text)) e.preventDefault();
                      },
                    })}
                    className="w-full border-b border-cream/30 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-cream/65">
                  Form of entry
                </label>
                <select
                  required
                  name="form"
                  defaultValue=""
                  className="w-full border-b border-cream/30 bg-transparent py-3 text-cream focus:border-gold focus:outline-none [&>option]:text-navy"
                >
                  <option value="" disabled>Choose a form…</option>
                  <option>Form 1</option>
                  <option>Form 2</option>
                  <option>Form 3</option>
                  <option>Form 4</option>
                  <option>Form 5</option>
                  <option>Form 6 (Sixth Form)</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-cream/65">
                  A note about your scholar
                </label>
                <textarea
                  name="note"
                  rows={4}
                  className="w-full border-b border-cream/30 bg-transparent py-3 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                  placeholder="Interests, current school, any questions for us…"
                />
              </div>
              <button
                type="submit"
                className="group mt-4 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-navy-deep transition-all duration-500 hover:shadow-gold"
              >
                {submitted ? "Submit another" : "Submit inquiry"}
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </PageLayout>
  );
};

export default Admissions;
