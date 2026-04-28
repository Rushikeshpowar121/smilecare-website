import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { treatments, categories, categoryColors } from "@/data";
import { ArrowRight, Clock } from "lucide-react";
import Icon from "@/components/Icon";

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return treatments;
    return treatments.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-brand-background min-h-screen">
      {/* Hero */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <nav className="text-sm text-brand-body mb-4">
              <Link to="/" className="hover:text-brand-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-brand-dark">Treatments</span>
            </nav>
            <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-3">
              All Our Treatments
            </h1>
            <p className="text-brand-body text-lg max-w-xl">
              Comprehensive dental care tailored to your needs — from preventive to transformative.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-[72px] z-30 bg-brand-background/95 backdrop-blur-sm border-b border-brand-accent/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <ScrollReveal>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-primary text-white shadow-md"
                      : "bg-white text-brand-body hover:bg-brand-accent/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((treatment) => {
            return (
              <StaggerItem key={treatment.id}>
                <Link to={`/treatments/${treatment.slug}`} className="block">
                  <div className="bg-white rounded-xl p-6 h-full group hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-400 border-l-[3px] border-l-transparent hover:border-l-brand-primary">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-accent/50 flex items-center justify-center">
                        <Icon name={treatment.icon} size={20} className="text-brand-primary" />
                      </div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          categoryColors[treatment.category] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {treatment.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-brand-dark mb-2">
                      {treatment.name}
                    </h3>
                    <p className="text-brand-body text-sm leading-relaxed mb-4">
                      {treatment.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 bg-brand-secondary/15 text-brand-primary text-xs px-2.5 py-1 rounded-md">
                        <Clock size={12} />
                        {treatment.duration}
                      </span>
                      <span className="inline-flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
