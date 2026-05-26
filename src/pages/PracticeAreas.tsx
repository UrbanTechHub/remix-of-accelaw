import { Link } from "react-router-dom";
import { Building2, Scale, Home, Lightbulb, Users, FileText, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/data/attorneys";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Scale,
  Home,
  Lightbulb,
  Users,
  FileText,
};

const detailedAreas = [
  {
    ...practiceAreas[0],
    details: "Our corporate attorneys advise on a full spectrum of business matters, including entity formation, governance, securities compliance, and complex commercial transactions. We work with emerging startups and Fortune 500 companies alike, providing strategic counsel tailored to each client's unique objectives.",
  },
  {
    ...practiceAreas[1],
    details: "Our litigation team has a proven track record of success in state and federal courts across the country. We handle complex commercial disputes, class actions, white-collar defense, and regulatory enforcement matters, always with an eye toward achieving the most favorable outcome efficiently.",
  },
  {
    ...practiceAreas[2],
    details: "Our real estate practice encompasses all aspects of commercial and residential real estate law, from acquisitions and dispositions to development, financing, and leasing. We represent developers, investors, lenders, and operators in transactions of all sizes.",
  },
  {
    ...practiceAreas[3],
    details: "We help clients protect their most valuable assets—their ideas. Our IP team handles patent prosecution, trademark registration, copyright matters, trade secret protection, and IP litigation. We also counsel on licensing, technology transfers, and IP due diligence in M&A transactions.",
  },
  {
    ...practiceAreas[4],
    details: "Our employment lawyers provide comprehensive counsel on all aspects of the employer-employee relationship. We advise on compliance, draft policies and agreements, conduct workplace investigations, and defend against discrimination, harassment, and wage claims.",
  },
  {
    ...practiceAreas[5],
    details: "Our tax and estate planning attorneys help individuals and families preserve and transfer wealth across generations. We design sophisticated estate plans, establish trusts, navigate gift and estate tax issues, and advise fiduciaries on trust administration.",
  },
];

export default function PracticeAreas() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        </div>
        <div className="container-wide relative">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
              Our Expertise
            </p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Practice Areas
            </h1>
            <p className="text-body-lg text-primary-foreground/70">
              Our attorneys bring deep expertise across a comprehensive range of 
              legal disciplines, delivering sophisticated solutions for complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16 md:space-y-20">
            {detailedAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Building2;
              return (
                <ScrollReveal key={area.id} delay={index * 0.1}>
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-accent/10 rounded-xl">
                          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                        </div>
                        <h2 className="heading-section text-foreground">
                          {area.name}
                        </h2>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                        {area.details}
                      </p>
                      <Button asChild variant="outline" className="rounded-full px-6">
                        <Link to="/contact">
                          Discuss Your Needs
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div
                      className={`card-elegant p-10 sm:p-12 bg-secondary rounded-2xl ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <IconComponent className="h-20 w-20 sm:h-24 sm:w-24 text-accent/30 mx-auto" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="heading-section text-foreground mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8">
              Our experienced attorneys are ready to help you navigate your 
              legal challenges with skill and dedication.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-full px-8">
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
