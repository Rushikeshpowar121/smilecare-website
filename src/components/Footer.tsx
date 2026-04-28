import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B4B45] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-semibold text-xl text-white mb-4">
              SmileCare
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Your smile is our passion.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#BADFE7] hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#BADFE7] hover:bg-white/20 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#BADFE7] hover:bg-white/20 transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-[#BADFE7] hover:bg-white/20 transition-colors duration-300"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Treatments", path: "/treatments" },
                { label: "Gallery", path: "/gallery" },
                { label: "About", path: "/about" },
                { label: "Book Appointment", path: "/book" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white hover:underline text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>42, Marine Drive, Mumbai 400001</li>
              <li><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
              <li><a href="mailto:hello@smilecare.in" className="hover:text-white">hello@smilecare.in</a></li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 mb-4">
              <p className="text-xs text-white/80">
                Mon – Fri: 9:00 AM – 7:00 PM
              </p>
              <p className="text-xs text-white/80">
                Sat: 9:00 AM – 5:00 PM | Sun: Closed
              </p>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            &copy; 2025 SmileCare Dental. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white hover:underline transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
