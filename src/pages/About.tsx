import { Link } from "react-router-dom";
import { ArrowRight, Scale, Award, Users, Building2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description: "We uphold the highest ethical standards in every interaction, ensuring trust and transparency with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in all we do, continuously improving our skills and knowledge to serve our clients better.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Our clients' success is our success. We listen, understand, and tailor our approach to meet their unique needs.",
  },
  {
    icon: Building2,
    title: "Innovation",
    description: "We embrace innovation in legal practice, leveraging technology and creative solutions to achieve optimal outcomes.",
  },
];

const timeline = [
  { year: "1989", event: "Founded in Sydney, Australia" },
  { year: "1995", event: "Expanded to include corporate and M&A practice" },
  { year: "2002", event: "Opened Melbourne office" },
  { year: "2010", event: "Recognized as a top-tier firm by Chambers Asia-Pacific" },
  { year: "2018", event: "Launched technology and IP practice group" },
  { year: "2024", event: "Celebrating 35 years of legal excellence" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        </div>
        <div className="container-wide relative">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Our Story
            </p>
            <h1 className="heading-display text-primary-foreground mb-6">
              About Acce Law Chambers
            </h1>
            <p className="text-body-lg text-primary-foreground/70">
              For over three decades, we have built a reputation for excellence, 
              integrity, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
                  Our Mission
                </p>
                <h2 className="heading-section text-foreground mb-8">
                  Delivering Excellence in Legal Service
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6 leading-relaxed">
                  At Acce Law Chambers, our mission is to provide exceptional 
                  legal counsel that empowers our clients to achieve their goals. 
                  We combine deep legal expertise with a genuine understanding of 
                  our clients' needs to deliver tailored solutions that make a 
                  meaningful difference.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Founded in 1989, our firm has grown from a 
                  small litigation practice to a full-service law firm with attorneys 
                  recognized as leaders in their respective fields. Throughout our 
                  growth, we have remained committed to the founding principles of 
                  excellence, integrity, and client service.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="card-elegant p-8 sm:p-10 bg-secondary rounded-2xl">
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground italic leading-relaxed">
                  "The law is not an end in itself, but a means to achieving justice 
                  and protecting the interests of those we serve."
                </blockquote>
                <p className="mt-6 sm:mt-8 text-accent font-medium">— Acce Law Chambers</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Our Values
            </p>
            <h2 className="heading-section text-foreground mb-6">
              What We Stand For
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Our values guide every decision we make and every interaction we have 
              with our clients, colleagues, and community.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-elegant p-8 sm:p-10 bg-card text-center h-full">
                  <div className="inline-flex p-4 bg-accent/10 rounded-xl mb-6">
                    <value.icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <h3 className="heading-card text-foreground mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Our History
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Over Three Decades of Excellence
            </h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              <StaggerContainer className="space-y-12 md:space-y-16" staggerDelay={0.15}>
                {timeline.map((item, index) => (
                  <StaggerItem key={item.year}>
                    <div
                      className={`relative flex items-center gap-6 md:gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        } hidden md:block`}
                      >
                        <div className="card-elegant p-6 inline-block rounded-xl">
                          <p className="text-muted-foreground leading-relaxed">{item.event}</p>
                        </div>
                      </div>
                      <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-accent rounded-full shrink-0 shadow-lg">
                        <div className="w-3 h-3 bg-background rounded-full" />
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-2xl sm:text-3xl font-semibold text-accent">
                          {item.year}
                        </p>
                        <p className="text-muted-foreground md:hidden mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-wide section-padding relative">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="heading-section text-primary-foreground mb-8">
              Join Our Legacy of Excellence
            </h2>
            <p className="text-body-lg text-primary-foreground/70 mb-12">
              Whether you need legal counsel or want to join our team, we'd 
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground font-medium rounded-full px-8"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground rounded-full px-8"
              >
                <Link to="/attorneys">Meet Our Team</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
