import { useState, useEffect } from "react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const clinicImages = [
  "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400",
  "https://images.unsplash.com/photo-1588776814546-1ffbb2b5694?w=400",
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400",
];

function ImageWithSkeleton({ src, alt }: { src: string, alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full aspect-square rounded-xl overflow-hidden group bg-gray-200">
      {!loaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
      />
    </div>
  );
}

export default function ClinicInfo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      // Get current time in IST
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));
      
      const day = istTime.getDay(); // 0 is Sunday
      const hour = istTime.getHours();
      
      if (day === 0) {
        setIsOpen(false);
      } else if (day === 6) {
        // Saturday 9am - 5pm (17:00)
        setIsOpen(hour >= 9 && hour < 17);
      } else {
        // Mon-Fri 9am - 7pm (19:00)
        setIsOpen(hour >= 9 && hour < 19);
      }
    };
    
    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
            Find Us
          </h2>
          <p className="text-brand-body text-lg max-w-xl mx-auto">
            A warm, modern space designed for your comfort and peace of mind.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <ScrollReveal direction="left">
            <div className="bg-brand-background rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Address</p>
                    <p className="text-brand-body text-sm">
                      42, Marine Drive, Mumbai 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Phone</p>
                    <a href="tel:+919876543210" className="text-brand-body text-sm hover:text-brand-primary transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">WhatsApp</p>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-brand-body text-sm hover:text-[#25D366] transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Email</p>
                    <a href="mailto:hello@smilecare.in" className="text-brand-body text-sm hover:text-brand-primary transition-colors">hello@smilecare.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-brand-dark">Working Hours</p>
                      {isOpen ? (
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Open Now</span>
                      ) : (
                        <span className="bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Closed</span>
                      )}
                    </div>
                    <table className="text-brand-body text-sm mt-2 w-full max-w-xs">
                      <tbody>
                        <tr><td className="py-1">Monday – Friday:</td><td className="text-right font-medium">9:00 AM – 7:00 PM</td></tr>
                        <tr><td className="py-1">Saturday:</td><td className="text-right font-medium">9:00 AM – 5:00 PM</td></tr>
                        <tr><td className="py-1">Sunday:</td><td className="text-right font-medium">Closed</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand-primary text-white font-medium px-6 py-3 rounded-full hover:bg-brand-primary-dark transition-colors text-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Photos */}
          <ScrollReveal direction="right">
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {clinicImages.map((img, i) => (
                <StaggerItem key={i}>
                  <ImageWithSkeleton src={img} alt={`Clinic interior ${i + 1}`} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
