import { Link } from "react-router-dom";
import { ArrowRight, Scale, Building2, Users, Award, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AttorneyCard } from "@/components/AttorneyCard";
import { attorneys, practiceAreas } from "@/data/attorneys";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const stats = [
  { label: "Years of Excellence", value: "35+" },
  { label: "Attorneys", value: "50+" },
  { label: "Successful Cases", value: "10,000+" },
  { label: "Client Satisfaction", value: "98%" },
];

const Index = () => {
  const featuredAttorneys = attorneys.filter((a) => a.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden pb-32 md:pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-primary" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        </div>
        <div className="container-wide relative pt-20 md:pt-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm text-primary-foreground/80 tracking-wide">
                Trusted Legal Excellence Since 1989
              </span>
            </div>
            <h1 className="heading-display text-primary-foreground mb-8">
              Distinguished Legal Counsel for
              <span className="text-accent"> Complex Matters</span>
            </h1>
            <p className="text-body-lg text-primary-foreground/70 mb-12 max-w-2xl">
              At Acce Law Chambers, we combine deep legal expertise with a 
              client-focused approach to deliver exceptional outcomes for individuals 
              and organizations across Australia and the Asia-Pacific.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground font-medium rounded-full px-8"
              >
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 bg-primary-foreground text-foreground hover:bg-primary-foreground hover:text-foreground rounded-full px-8"
              >
                <Link to="/attorneys">Meet Our Attorneys</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card border-b border-border relative mt-0 md:-mt-16 mx-4 sm:mx-6 lg:mx-12 rounded-2xl z-10 shadow-lg">
        <div className="px-6 sm:px-8 py-10 md:py-16">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-accent">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 md:mt-3 tracking-wide">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
                  About Our Firm
                </p>
                <h2 className="heading-section text-foreground mb-8">
                  A Legacy of Legal Excellence in Australia
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6 leading-relaxed">
                  For over three decades, Acce Law Chambers has been at the forefront of 
                  legal practice in Sydney. Our attorneys bring unparalleled expertise 
                  and dedication to every matter, from complex corporate transactions to 
                  high-stakes litigation.
                </p>
                <p className="text-body text-muted-foreground mb-10 leading-relaxed">
                  We pride ourselves on our commitment to excellence, our innovative 
                  approach to legal challenges, and our unwavering dedication to achieving 
                  the best possible outcomes for our clients across Australia and the Asia-Pacific.
                </p>
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Scale, title: "Integrity", desc: "Upholding the highest ethical standards" },
                { icon: Building2, title: "Experience", desc: "Three decades of legal expertise" },
                { icon: Users, title: "Client Focus", desc: "Your success is our priority" },
                { icon: Award, title: "Excellence", desc: "Recognized industry leaders" },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-elegant p-6 sm:p-8 text-center">
                    <div className="inline-flex p-3 sm:p-4 bg-accent/10 rounded-xl mb-4 sm:mb-5">
                      <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Our Expertise
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Practice Areas
            </h2>
            <p className="text-body-lg text-muted-foreground">
              Our attorneys bring specialized knowledge across a comprehensive range 
              of legal disciplines, ensuring sophisticated counsel for every challenge.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {practiceAreas.slice(0, 6).map((area) => (
              <StaggerItem key={area.id}>
                <Link
                  to="/practice-areas"
                  className="card-elegant p-8 md:p-10 block h-full"
                >
                  <h3 className="heading-card text-foreground mb-4">
                    {area.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div className="flex items-center text-accent font-medium text-sm">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Attorneys */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
                  Our Team
                </p>
                <h2 className="heading-section text-foreground">
                  Featured Attorneys
                </h2>
              </div>
              <Button asChild variant="outline" className="self-start rounded-full px-6">
                <Link to="/attorneys">
                  View All Attorneys
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredAttorneys.map((attorney) => (
              <StaggerItem key={attorney.id}>
                <AttorneyCard attorney={attorney} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-wide section-padding relative">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="heading-section text-primary-foreground mb-8">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-body-lg text-primary-foreground/70 mb-12">
              Contact us today to schedule a confidential consultation with one 
              of our experienced attorneys.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground font-medium rounded-full px-8"
              >
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 bg-primary-foreground text-foreground hover:bg-primary-foreground hover:text-foreground rounded-full px-8"
              >
                <a href="tel:+19786414537">Call +1 (978) 641-4537</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
