import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { AttorneyCard } from "@/components/AttorneyCard";
import { SearchBar } from "@/components/SearchBar";
import { attorneys } from "@/data/attorneys";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const practiceAreaFilters = [
  "All",
  "Corporate Law",
  "Litigation",
  "Real Estate",
  "Intellectual Property",
  "Employment Law",
  "Tax",
];

export default function Attorneys() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPracticeArea, setSelectedPracticeArea] = useState("All");

  const filteredAttorneys = useMemo(() => {
    return attorneys.filter((attorney) => {
      const matchesSearch =
        attorney.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attorney.practiceAreas.some((area) =>
          area.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesPracticeArea =
        selectedPracticeArea === "All" ||
        attorney.practiceAreas.some((area) =>
          area.toLowerCase().includes(selectedPracticeArea.toLowerCase())
        );

      return matchesSearch && matchesPracticeArea;
    });
  }, [searchQuery, selectedPracticeArea]);

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
              Our Team
            </p>
            <h1 className="heading-display text-primary-foreground mb-6">
              Our Attorneys
            </h1>
            <p className="text-body-lg text-primary-foreground/70">
              Meet our distinguished team of attorneys, each bringing exceptional 
              expertise and dedication to serving our clients' legal needs across Australia and the Asia-Pacific.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="lg:w-96">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search by name, title, or practice area..."
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {practiceAreaFilters.map((area) => (
                <Button
                  key={area}
                  variant={selectedPracticeArea === area ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPracticeArea(area)}
                  className={`rounded-full text-xs sm:text-sm ${
                    selectedPracticeArea === area
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {filteredAttorneys.length > 0 ? (
            <>
              <ScrollReveal>
                <p className="text-sm text-muted-foreground mb-8 sm:mb-10">
                  Showing {filteredAttorneys.length} attorney
                  {filteredAttorneys.length !== 1 ? "s" : ""}
                </p>
              </ScrollReveal>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredAttorneys.map((attorney) => (
                  <StaggerItem key={attorney.id}>
                    <AttorneyCard attorney={attorney} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          ) : (
            <ScrollReveal className="text-center py-16 sm:py-20">
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                No attorneys found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedPracticeArea("All");
                }}
              >
                Clear Filters
              </Button>
            </ScrollReveal>
          )}
        </div>
      </section>
    </Layout>
  );
}
