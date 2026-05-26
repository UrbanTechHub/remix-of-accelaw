import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, MapPin, GraduationCap, Award, Briefcase, Trophy, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { attorneys } from "@/data/attorneys";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function AttorneyDetail() {
  const { id } = useParams();
  const attorney = attorneys.find((a) => a.id === id);

  if (!attorney) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center pt-40">
          <h1 className="heading-section mb-6">Attorney Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The attorney you're looking for doesn't exist.
          </p>
          <Button asChild className="rounded-full">
            <Link to="/attorneys">View All Attorneys</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Link */}
      <div className="bg-secondary border-b border-border pt-24">
        <div className="container-wide py-4">
          <Link
            to="/attorneys"
            className="inline-flex items-center text-sm text-muted-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Attorneys
          </Link>
        </div>
      </div>

      {/* Attorney Profile */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <div className="card-elegant overflow-hidden sticky top-28 rounded-2xl">
                  <div className="aspect-[4/5] bg-secondary">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 sm:space-y-5">
                    <a
                      href={`mailto:${attorney.email}`}
                      className="flex items-center gap-3 sm:gap-4 text-muted-foreground"
                    >
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      </div>
                      <span className="text-xs sm:text-sm break-all">{attorney.email}</span>
                    </a>
                    <div className="flex items-start gap-3 sm:gap-4 text-muted-foreground">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                      </div>
                      <span className="text-xs sm:text-sm whitespace-pre-line">
                        {attorney.location}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                  {attorney.title}
                </p>
                <h1 className="heading-display text-foreground mb-6">
                  {attorney.name}
                </h1>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                  {attorney.practiceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-secondary text-muted-foreground rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              {/* Bio */}
              <ScrollReveal delay={0.1}>
                <div className="mb-10 sm:mb-14">
                  <h2 className="heading-card text-foreground mb-6">Biography</h2>
                  <p className="text-body text-muted-foreground leading-relaxed whitespace-pre-line">
                    {attorney.bio}
                  </p>
                </div>
              </ScrollReveal>

              {/* Notable Cases */}
              {attorney.notableCases && attorney.notableCases.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <h2 className="heading-card text-foreground">Notable Cases</h2>
                    </div>
                    <ul className="space-y-4 pl-4 sm:pl-16">
                      {attorney.notableCases.map((caseItem, index) => (
                        <li key={index} className="text-sm sm:text-base text-muted-foreground flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                          <span className="leading-relaxed">{caseItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Awards & Recognition */}
              {attorney.awards && attorney.awards.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <h2 className="heading-card text-foreground">Awards & Recognition</h2>
                    </div>
                    <ul className="space-y-3 pl-4 sm:pl-16">
                      {attorney.awards.map((award, index) => (
                        <li key={index} className="text-sm sm:text-base text-muted-foreground flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Education */}
              <ScrollReveal delay={0.4}>
                <div className="mb-10 sm:mb-14">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <h2 className="heading-card text-foreground">Education</h2>
                  </div>
                  <ul className="space-y-3 pl-4 sm:pl-16">
                    {attorney.education.map((edu, index) => (
                      <li key={index} className="text-sm sm:text-base text-muted-foreground">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Bar Admissions */}
              <ScrollReveal delay={0.5}>
                <div className="mb-10 sm:mb-14">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <h2 className="heading-card text-foreground">Bar Admissions</h2>
                  </div>
                  <ul className="space-y-3 pl-4 sm:pl-16">
                    {attorney.admissions.map((admission, index) => (
                      <li key={index} className="text-sm sm:text-base text-muted-foreground">
                        {admission}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Contact CTA */}
              <ScrollReveal delay={0.6}>
                <div className="card-elegant p-8 sm:p-10 bg-secondary rounded-2xl">
                  <h3 className="heading-card text-foreground mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                    Contact {attorney.name.split(" ").pop()} to discuss how we can 
                    assist with your legal needs.
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <Button asChild className="bg-primary text-primary-foreground rounded-full px-6">
                      <Link to="/contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full px-6">
                      <a href={`mailto:${attorney.email}`}>Send Email</a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
