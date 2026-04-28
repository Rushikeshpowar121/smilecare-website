import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { MessageCircle } from "lucide-react";

export default function BookingStrip() {
  return (
    <section className="py-16 lg:py-20">
      <ScrollReveal>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="bg-gradient-to-r from-brand-primary to-[#4A9A95] rounded-3xl p-10 lg:p-14 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-white mb-3">
                  Ready for a Healthier Smile?
                </h2>
                <p className="text-white/80 text-lg">
                  Book your consultation today — it takes less than 2 minutes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center bg-white text-brand-primary font-medium px-8 py-4 rounded-full hover:bg-brand-accent hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  Book My Appointment
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-8 py-4 rounded-full hover:bg-[#1EBE5A] hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
