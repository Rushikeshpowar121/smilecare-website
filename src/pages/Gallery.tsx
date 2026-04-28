import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { galleryCases } from "@/data";
import { X, Maximize2 } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const filters = ["All", "Veneers", "Implants", "Whitening", "Invisalign", "Braces", "Full Makeover"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return galleryCases;
    return galleryCases.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-brand-background min-h-screen">
      {/* Hero */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-3">
              Smile Transformations
            </h1>
            <p className="text-brand-body text-lg max-w-xl">
              Real patients. Real results. See what is possible with expert care.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        <ScrollReveal>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-white text-brand-body hover:bg-brand-accent/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {filtered.map((c, i) => (
            <StaggerItem key={c.id}>
              <div
                className="bg-white rounded-2xl overflow-hidden group hover:shadow-card-hover transition-all duration-400"
              >
                <div className="relative pointer-events-none">
                  <BeforeAfterSlider beforeImage={c.beforeImage} afterImage={c.afterImage} />
                  <button 
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors z-30 pointer-events-auto"
                    onClick={() => setLightbox(i)}
                    aria-label="View fullscreen"
                  >
                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-3 rounded-full text-brand-dark transition-all transform scale-90 group-hover:scale-100 shadow-xl">
                      <Maximize2 size={20} />
                    </div>
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-brand-primary/10 text-brand-primary text-xs font-medium px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                    <span className="text-brand-body/60 text-xs">
                      Duration: {c.duration}
                    </span>
                  </div>
                  <p className="text-brand-dark font-medium text-sm">
                    {c.patientCode}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* CTA */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-20">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-brand-primary to-[#4A9A95] rounded-3xl p-10 text-center">
            <h2 className="font-heading font-semibold text-2xl text-white mb-3">
              Your transformation is one click away.
            </h2>
            <Link
              to="/book"
              className="inline-flex items-center bg-white text-brand-primary font-medium px-8 py-3.5 rounded-full hover:bg-brand-accent transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-brand-dark rounded-xl overflow-hidden p-2">
                <BeforeAfterSlider 
                  beforeImage={filtered[lightbox].beforeImage} 
                  afterImage={filtered[lightbox].afterImage} 
                />
              </div>
              <div className="mt-4 text-center text-white">
                <p className="font-medium">{filtered[lightbox].patientCode}</p>
                <p className="text-white/70 text-sm">{filtered[lightbox].category} — {filtered[lightbox].duration}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
