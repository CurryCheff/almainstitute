import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/motion-primitives";
import { useToast } from "@/hooks/use-toast";
import campusAerial from "@/assets/campus-aerial.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({
      title: "Message sent",
      description: "Thank you. A member of our team will reply shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout
      hero={{
        eyebrow: "Contact",
        title: (
          <>
            We would be glad to <em className="text-gold">hear from you</em>.
          </>
        ),
        lede: "Whether you are a prospective family, an alumnus, or a neighbour in the Mutare community — write to us. We answer every message.",
        image: campusAerial,
        alt: "Alma Institute campus along Vumba Road",
      }}
    >
      {/* Contact cards */}
      <section className="bg-paper py-24">
        <div className="container-wide">
          <StaggerGroup className="grid gap-px overflow-hidden bg-border md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Visit",
                lines: ["Alma Institute", "Vumba Road", "Mutare, Zimbabwe"],
              },
              {
                icon: Phone,
                title: "Telephone",
                lines: ["+263 (0) 20 000 0000", "Admissions: +263 (0) 77 000 0000"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@almainstitute.co.zw", "admissions@almainstitute.co.zw"],
              },
            ].map((c) => (
              <StaggerItem key={c.title} className="bg-cream p-10">
                <c.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-2xl text-navy">{c.title}</h3>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  {c.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Form + hours */}
      <section className="bg-cream-deep py-32">
        <div className="container-wide grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-7">
            <FadeUp>
              <span className="eyebrow">Write to us</span>
              <h2 className="display-serif mt-6 text-4xl text-navy md:text-5xl">
                A message, properly addressed.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <form onSubmit={onSubmit} className="mt-12 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Full name
                    </label>
                    <input
                      required
                      name="name"
                      className="w-full border-b border-border bg-transparent py-3 text-navy focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border-b border-border bg-transparent py-3 text-navy focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    The matter
                  </label>
                  <select
                    name="topic"
                    defaultValue=""
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-navy focus:border-gold focus:outline-none"
                  >
                    <option value="" disabled>Choose a department…</option>
                    <option>Admissions / Enrolment</option>
                    <option>Headmaster's office</option>
                    <option>Academic enquiry</option>
                    <option>General</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Your message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="w-full border-b border-border bg-transparent py-3 text-navy focus:border-gold focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-4 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all duration-500 hover:bg-gold hover:text-navy hover:shadow-gold"
                >
                  {sent ? "Send another" : "Send message"}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </form>
            </FadeUp>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <FadeUp>
              <span className="eyebrow">Office hours</span>
              <h3 className="display-serif mt-6 text-3xl text-navy">When to find us.</h3>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {[
                  ["Monday – Friday", "7:30 — 17:00"],
                  ["Saturday", "8:00 — 12:00"],
                  ["Sunday", "Closed"],
                ].map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between py-4">
                    <span className="text-navy">{d}</span>
                    <span className="font-serif text-gold">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex items-start gap-3 rounded-sm bg-cream p-6">
                <Clock className="mt-1 h-5 w-5 text-gold" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Campus tours are available throughout the term by
                  appointment. Please contact the admissions office to
                  arrange a visit.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-navy-deep py-32 text-cream">
        <div className="container-wide grid gap-12 md:grid-cols-12 md:items-end">
          <FadeUp className="md:col-span-7">
            <span className="eyebrow !text-gold">Finding us</span>
            <h2 className="display-serif mt-6 text-4xl md:text-5xl">
              Just outside Mutare, along Vumba Road.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="text-cream/75">
              Our campus sits in a beautiful, picturesque setting on the
              edge of Mutare — a short drive from the city centre, with the
              Vumba mountains as a backdrop. Visitors should announce
              themselves at the main gate.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.15} className="container-wide mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm border border-cream/15">
            <img src={campusAerial} alt="Aerial view of Alma Institute" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-navy-deep/40" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto h-3 w-3 rounded-full bg-gold shadow-gold animate-pulse" />
              <p className="mt-4 font-serif text-xl text-cream">Alma Institute</p>
              <p className="text-xs uppercase tracking-[0.22em] text-cream/70">Vumba Road · Mutare</p>
            </div>
          </div>
        </FadeUp>
      </section>
    </PageLayout>
  );
};

export default Contact;
