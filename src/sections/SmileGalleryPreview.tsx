import { Link } from "react-router-dom";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const cases = [
  { label: "Veneers", before: "/images/gallery-before.jpg", after: "/images/gallery-after.jpg" },
  { label: "Dental Implants", before: "/images/gallery-before.jpg", after: "/images/gallery-after.jpg" },
  { label: "Teeth Whitening", before: "/images/gallery-before.jpg", after: "/images/gallery-after.jpg" },
];

export default function SmileGalleryPreview() {
  return (
    <section className="py-20 lg:py-24 bg-brand-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
            Real Smiles, Real Results
          </h2>
          <p className="text-brand-body text-lg max-w-xl mx-auto">
            See the transformations our patients have achieved with our personalised care.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cases.map((c, i) => (
            <StaggerItem key={i}>
              <div className="group">
                <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {c.label}
                </span>
                <div className="group-hover:shadow-lg transition-shadow duration-300 rounded-xl">
                  <BeforeAfterSlider beforeImage={c.before} afterImage={c.after} />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="text-center" delay={0.2}>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
          >
            See Full Gallery
            <ArrowRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
