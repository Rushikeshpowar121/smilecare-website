import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { treatments } from "@/data";
import { CheckCircle2, Clock, ChevronRight } from "lucide-react";
import Icon from "@/components/Icon";

export default function TreatmentDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = useMemo(
    () => treatments.find((t) => t.slug === slug),
    [slug]
  );

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-background">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-semibold text-brand-dark mb-4">
            Treatment not found
          </h2>
          <Link
            to="/treatments"
            className="text-brand-primary font-medium hover:underline"
          >
            Back to Treatments
          </Link>
        </div>
      </div>
    );
  }

  const related = useMemo(
    () =>
      treatment.relatedTreatments
        .map((s) => treatments.find((t) => t.slug === s))
        .filter(Boolean)
        .slice(0, 3),
    [treatment]
  );



  return (
    <div className="bg-brand-background min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <nav className="text-sm text-brand-body mb-4">
              <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <ChevronRight size={14} className="inline mx-1" />
              <Link to="/treatments" className="hover:text-brand-primary transition-colors">Treatments</Link>
              <ChevronRight size={14} className="inline mx-1" />
              <span className="text-brand-dark">{treatment.name}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${treatment.categoryColor}`}>
                {treatment.category}
              </span>
              <span className="inline-flex items-center gap-1 bg-brand-secondary/15 text-brand-primary text-xs px-3 py-1 rounded-full">
                <Clock size={12} />
                {treatment.duration}
              </span>
            </div>
            <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-4">
              {treatment.name}
            </h1>
            <Link
              to="/book"
              className="inline-flex items-center bg-brand-primary text-white font-medium px-7 py-3 rounded-full hover:bg-brand-primary-dark transition-colors"
            >
              Book This Treatment
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Main Content */}
          <div className="space-y-12">
            {/* What is this treatment? */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-4">
                  What is {treatment.name}?
                </h2>
                <div className="text-brand-body leading-relaxed space-y-4">
                  {treatment.fullDescription.split(". ").map((sentence, i, arr) => (
                    <p key={i}>{sentence}{i < arr.length - 1 ? "." : ""}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Benefits */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-6">
                  Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {treatment.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-brand-body text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Procedure Steps */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-6">
                  The Procedure — Step by Step
                </h2>
                <div className="space-y-6">
                  {treatment.procedure.map((step, i) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                          {step.step}
                        </div>
                        {i < treatment.procedure.length - 1 && (
                          <div className="w-0.5 flex-1 bg-brand-accent mt-2 min-h-[24px]" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h3 className="font-heading font-semibold text-brand-dark mb-1">
                          {step.title}
                        </h3>
                        <p className="text-brand-body text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Is This Right For Me? */}
            <ScrollReveal>
              <div className="bg-brand-accent/30 rounded-2xl p-8 border border-brand-accent">
                <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-4">
                  Is This Right for Me?
                </h2>
                <ul className="space-y-3">
                  {treatment.eligibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-body text-sm">
                      <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Before & After */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-6">
                  Before & After
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600"
                      alt="Before treatment"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600"
                      alt="After treatment"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-brand-primary/80 text-white text-xs font-medium px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* FAQs */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-brand-accent/30 pb-4 last:border-0">
                      <h3 className="font-medium text-brand-dark mb-2">{faq.question}</h3>
                      <p className="text-brand-body text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Related Treatments */}
            {related.length > 0 && (
              <ScrollReveal>
                <div>
                  <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-6">
                    You might also be interested in...
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {related.map((rt) => {
                      if (!rt) return null;
                      return (
                        <Link
                          key={rt.id}
                          to={`/treatments/${rt.slug}`}
                          className="bg-white rounded-xl p-5 group hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
                        >
                          <Icon name={rt.icon} size={20} className="text-brand-primary mb-3" />
                          <h3 className="font-heading font-semibold text-brand-dark text-sm mb-1">
                            {rt.name}
                          </h3>
                          <p className="text-brand-body text-xs line-clamp-2">
                            {rt.description}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Desktop Sticky CTA */}
          <div className="hidden lg:block">
            <div className="sticky top-[100px] bg-white rounded-2xl p-6 shadow-card">
              <div className="w-12 h-12 rounded-full bg-brand-accent/50 flex items-center justify-center mb-4">
                <Icon name={treatment.icon} size={24} className="text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-brand-dark mb-2">
                Interested in {treatment.name}?
              </h3>
              <p className="text-brand-body text-sm mb-5">
                Book a consultation with Dr. Aisha to discuss your goals and create a personalised plan.
              </p>
              <Link
                to="/book"
                className="block w-full text-center bg-brand-primary text-white font-medium py-3 rounded-full hover:bg-brand-primary-dark transition-colors mb-3"
              >
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border border-brand-primary text-brand-primary font-medium py-3 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-brand-accent/50 px-4 py-3 shadow-lg md:hidden">
        <Link
          to="/book"
          className="block w-full text-center bg-brand-primary text-white font-medium py-3 rounded-full"
        >
          Book This Treatment
        </Link>
      </div>
    </div>
  );
}
