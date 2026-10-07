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
  { label: "Attorneys", value: "50+" },
  { label: "Successful cases", value: "10,000+" },
  { label: "Client satisfaction", value: "98%" },
  { label: "Years of excellence", value: "35+" },
];

const values = [
  { icon: Scale, title: "Integrity", desc: "Counsel grounded in sound judgment and unwavering legal principle." },
  { icon: Building2, title: "Experience", desc: "Deep expertise for matters that demand absolute precision." },
  { icon: Users, title: "Client focus", desc: "Strategic advice shaped entirely around your objectives." },
  { icon: Award, title: "Excellence", desc: "A consistently high standard of representation." },
];

const Index = () => {
  const featuredAttorneys = attorneys.filter((attorney) => attorney.featured);

  return (
    <Layout>
      {/* Hero — cream editorial with offset-framed image */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-72 bg-stone/10" />
        <div className="container-wide relative pb-24 pt-32 md:pb-32 md:pt-40">
          <div className="grid items-start gap-16 lg:grid-cols-[0.9fr_0.8fr] lg:gap-24">
            <ScrollReveal direction="right" className="relative z-10">
              <p className="eyebrow-label mb-8 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-stone" />
                Sydney · Established Excellence
              </p>
              <h1 className="heading-display max-w-3xl text-foreground">
                Sophisticated <br className="hidden sm:block" />
                legal <span className="italic text-stone">advocacy.</span>
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-plum md:text-xl">
                Strategic representation for complex corporate, civil, and commercial
                matters across Australia and the Asia-Pacific.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none bg-primary px-8 py-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform duration-300 hover:-translate-y-1 hover:bg-primary"
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
                  className="rounded-none border-stone bg-transparent px-8 py-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:border-plum hover:bg-transparent hover:text-plum"
                >
                  <Link to="/attorneys">Meet the firm</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.12} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
              <div className="relative">
                <div className="absolute -right-4 -top-4 h-full w-full border border-stone/40" />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={chambersInterior}
                    alt="Interior of Acce Law Chambers with a library and curved staircase"
                    width={1200}
                    height={1504}
                    className="h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/15" />
                </div>
                <div className="absolute -bottom-8 left-6 bg-primary px-7 py-5 shadow-xl md:left-10">
                  <p className="font-serif text-4xl text-primary-foreground">35+</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                    Years of precedent
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats — dark aubergine band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-12 md:py-16 ${i % 2 === 0 ? "border-r border-primary-foreground/10" : ""} ${i < 2 ? "border-b border-primary-foreground/10 md:border-b-0" : ""} ${i > 0 ? "md:border-l md:border-primary-foreground/10" : ""} px-4 md:px-8`}
            >
              <p className="font-serif text-3xl md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[10px] uppercase leading-tight tracking-[0.2em] text-stone">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise — numbered editorial rail */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-wide">
          <ScrollReveal className="mb-12 flex items-end justify-between gap-6">
            <h2 className="heading-section text-foreground">Expertise</h2>
            <Button asChild variant="link" className="w-fit rounded-none px-0 text-xs font-bold uppercase tracking-[0.16em] text-plum hover:text-plum">
              <Link to="/practice-areas" className="border-b border-stone pb-1">
                View all practices
              </Link>
            </Button>
          </ScrollReveal>
          <StaggerContainer>
            {practiceAreas.slice(0, 4).map((area, index) => (
              <StaggerItem key={area.id}>
                <Link
                  to="/practice-areas"
                  className="group flex items-center gap-6 border-b border-stone/40 py-6 transition-colors hover:bg-secondary/50 md:py-8"
                >
                  <span className="font-serif text-sm italic text-stone md:mr-4">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-plum md:text-2xl">
                    {area.name}
                  </h3>
                  <ChevronRight className="ml-auto h-5 w-5 shrink-0 text-stone transition-transform group-hover:translate-x-1 group-hover:text-plum" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The Firm — values with left rules on stone tint */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-wide">
          <div className="grid items-start gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <ScrollReveal direction="right">
              <p className="eyebrow-label mb-4">The Firm</p>
              <h2 className="heading-section text-foreground">A considered approach to complex matters.</h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-plum">
                Acce Law Chambers brings experienced counsel, commercial clarity, and disciplined advocacy to the decisions that matter most.
              </p>
              <Button asChild variant="outline" className="mt-10 rounded-none border-foreground/30 px-8 py-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:border-plum hover:bg-transparent hover:text-plum">
                <Link to="/about">
                  Discover our story
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
            <StaggerContainer className="grid gap-10 sm:grid-cols-2">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="border-l-2 border-primary pl-6 md:pl-8">
                    <value.icon className="mb-4 h-6 w-6 text-plum" strokeWidth={1.25} />
                    <h3 className="font-serif text-xl text-foreground md:text-2xl">{value.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow-label mb-4">The people behind the practice</p>
              <h2 className="heading-section text-foreground">Measured counsel. Proven advocacy.</h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-none border-foreground/30 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:border-plum hover:bg-transparent hover:text-plum">
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

      {/* CTA — dark aubergine */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide flex flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-end md:py-28">
          <ScrollReveal className="max-w-2xl">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-stone">Begin the conversation</p>
            <h2 className="heading-section text-primary-foreground">The right advice changes what comes next.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/65">
              Speak with our team about your matter and the path forward.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.12}>
            <Button asChild size="lg" className="rounded-none bg-stone px-8 py-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:bg-stone">
              <Link to="/contact">Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
