import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Sparkles, Smile, ShieldCheck, Clock } from "lucide-react";

const whyChooseCards = [
  {
    icon: Sparkles,
    title: "Advanced Equipment",
    description: "Digital X-rays, intraoral cameras, laser dentistry",
  },
  {
    icon: Smile,
    title: "Gentle & Pain-Free",
    description: "Sedation options and anxiety-free techniques",
  },
  {
    icon: ShieldCheck,
    title: "Personalised Care",
    description: "Every treatment plan is tailored to you",
  },
  {
    icon: Clock,
    title: "Convenient Booking",
    description: "Online booking, WhatsApp, or call us anytime",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
            Why Choose Us
          </h2>
          <p className="text-brand-body text-lg max-w-xl mx-auto">
            We combine clinical excellence with genuine care for every patient who walks through our doors.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="bg-brand-accent/30 rounded-xl p-7 h-full group hover:border-2 hover:border-brand-primary transition-all duration-400">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center mb-5">
                  <card.icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-brand-dark mb-2">
                  {card.title}
                </h3>
                <p className="text-brand-body text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
