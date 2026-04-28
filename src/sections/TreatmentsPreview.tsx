import { Link } from "react-router-dom";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { treatments, categoryColors } from "@/data";
import { previewTreatments } from "@/data";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/Icon";

export default function TreatmentsPreview() {
  const preview = treatments.filter((t) => previewTreatments.includes(t.slug));

  return (
    <section className="py-20 lg:py-24 bg-brand-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
            Our Treatments
          </h2>
          <p className="text-brand-body text-lg max-w-xl mx-auto">
            From preventive care to smile transformations, we offer a full range of dental services.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {preview.map((treatment) => {
            return (
              <StaggerItem key={treatment.id}>
                <Link to={`/treatments/${treatment.slug}`} className="block">
                  <div className="bg-white rounded-xl p-7 h-full group hover:-translate-y-1.5 hover:shadow-card-hover hover:border-l-[3px] hover:border-l-brand-primary transition-all duration-400 border-l-[3px] border-l-transparent">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-accent/50 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                        <Icon name={treatment.icon} size={22} className="text-brand-primary" />
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
                    <span className="inline-flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal className="text-center" delay={0.3}>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-medium px-8 py-3.5 rounded-full hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-primary transition-all duration-300"
          >
            Explore All 20+ Treatments
            <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
