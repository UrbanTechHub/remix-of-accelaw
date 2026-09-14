import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  ChevronRight,
  Scale,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AttorneyCard } from "@/components/AttorneyCard";
import { attorneys, practiceAreas } from "@/data/attorneys";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import chambersInterior from "@/assets/acce-legal-interior.jpg";

const stats = [
  { label: "Years of excellence", value: "35+" },
  { label: "Attorneys", value: "50+" },
  { label: "Successful cases", value: "10,000+" },
  { label: "Client satisfaction", value: "98%" },
];

const values = [
  { icon: Scale, title: "Integrity", desc: "Counsel grounded in sound judgment and principle." },
  { icon: Building2, title: "Experience", desc: "Deep expertise for matters that demand precision." },
  { icon: Users, title: "Client focus", desc: "Clear advice shaped around your objectives." },
  { icon: Award, title: "Excellence", desc: "A consistently high standard of representation." },
];

const Index = () => {
  const featuredAttorneys = attorneys.filter((attorney) => attorney.featured);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="container-wide relative flex min-h-[760px] items-center pb-20 pt-32 md:min-h-[860px] md:pb-28 md:pt-40">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.92fr_0.78fr] lg:gap-24">
            <ScrollReveal direction="right" className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
                  Established excellence
                </span>
              </div>
              <h1 className="heading-display max-w-3xl text-primary-foreground">
                Sophisticated <br className="hidden sm:block" />
                legal <span className="italic text-accent">advocacy.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
                Comprehensive legal counsel and strategic representation for complex corporate,
                civil, and commercial matters across Australia and the Asia-Pacific.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-accent px-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-300 hover:-translate-y-1 hover:bg-accent"
                >
                  <Link to="/contact">
                    Schedule consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-none border-primary-foreground/30 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:border-accent hover:bg-transparent hover:text-accent"
                >
                  <Link to="/attorneys">Meet the firm</Link>
                </Button>
              </div>
              <div className="mt-16 grid max-w-lg grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-7 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl text-accent">{stat.value}</p>
                    <p className="mt-1 text-[10px] uppercase leading-tight tracking-[0.16em] text-primary-foreground/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.12} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
              <div className="absolute -right-5 -top-5 h-32 w-32 border-r border-t border-accent/50" />
              <div className="relative overflow-hidden border border-primary-foreground/10 bg-navy-light p-3 shadow-2xl shadow-primary/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={chambersInterior}
                    alt="Interior of Acce Law Chambers with a library and curved staircase"
                    width={1200}
                    height={1504}
                    className="h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/25" />
                  <div className="absolute bottom-5 left-5 border-l-2 border-accent bg-primary/90 px-5 py-4 backdrop-blur-sm">
                    <p className="font-serif text-3xl text-primary-foreground">Sydney</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">
                      Counsel with perspective
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 hidden border-l-4 border-accent bg-navy-light px-7 py-5 shadow-xl md:block">
                <p className="font-serif text-4xl text-primary-foreground">35+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                  Years of precedent
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/50" />
      </section>

      <section className="border-b border-border bg-card">
        <div className="container-wide grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {[
            { number: "01", label: "Corporate & commercial" },
            { number: "02", label: "Dispute resolution" },
            { number: "03", label: "Property & finance" },
            { number: "04", label: "Technology & IP" },
          ].map((item) => (
            <Link
              key={item.number}
              to="/practice-areas"
              className="group flex min-h-28 items-center gap-5 px-4 py-6 transition-colors hover:bg-secondary sm:px-7"
            >
              <span className="font-sans text-xs tracking-[0.15em] text-accent">{item.number}</span>
              <span className="font-serif text-lg text-foreground transition-colors group-hover:text-accent sm:text-xl">
                {item.label}
              </span>
              <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid items-start gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <ScrollReveal direction="right">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">The firm</p>
              <h2 className="heading-section text-foreground">A considered approach to complex matters.</h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
                Acce Law Chambers brings experienced counsel, commercial clarity, and disciplined advocacy to the decisions that matter most.
              </p>
              <Button asChild variant="outline" className="mt-8 rounded-none border-foreground/20 px-6 uppercase tracking-[0.15em] text-xs hover:border-accent hover:bg-transparent hover:text-accent">
                <Link to="/about">
                  Discover our story
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
            <StaggerContainer className="grid border-t border-border sm:grid-cols-2">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="border-b border-border py-7 sm:px-7 sm:first:pl-0 sm:nth-[3]:pl-0">
                    <value.icon className="mb-5 h-7 w-7 text-accent" strokeWidth={1.25} />
                    <h3 className="font-serif text-2xl text-foreground">{value.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20 md:py-28">
        <div className="container-wide">
          <ScrollReveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Areas of practice</p>
              <h2 className="heading-section text-foreground">Expertise where the stakes are highest.</h2>
            </div>
            <Button asChild variant="link" className="w-fit rounded-none px-0 text-xs uppercase tracking-[0.16em] text-accent hover:text-accent">
              <Link to="/practice-areas">
                View all practices <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
          <StaggerContainer className="grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 6).map((area, index) => (
              <StaggerItem key={area.id}>
                <Link to="/practice-areas" className="group block border-b border-border p-7 transition-colors hover:bg-card md:min-h-56 md:p-9">
                  <div className="mb-10 flex items-center justify-between text-xs tracking-[0.2em] text-accent">
                    <span>0{index + 1}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent">{area.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">The people behind the practice</p>
              <h2 className="heading-section text-foreground">Measured counsel. Proven advocacy.</h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-none border-foreground/20 px-6 uppercase tracking-[0.15em] text-xs hover:border-accent hover:bg-transparent hover:text-accent">
              <Link to="/attorneys">Meet all attorneys <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {featuredAttorneys.map((attorney) => (
              <StaggerItem key={attorney.id}>
                <AttorneyCard attorney={attorney} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-wide flex flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-end md:py-28">
          <ScrollReveal className="max-w-2xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Begin the conversation</p>
            <h2 className="heading-section text-primary-foreground">The right advice changes what comes next.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/65">
              Speak with our team about your matter and the path forward.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.12}>
            <Button asChild size="lg" className="rounded-none bg-accent px-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground hover:bg-accent">
              <Link to="/contact">Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;