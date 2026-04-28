import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = "Hi, I'd like to book an appointment at SmileCare Dental.";
const CALL_NUMBER = "+919876543210";

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMobileBar(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 items-end">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.25 }}
              className="mb-2 w-80 bg-white rounded-2xl shadow-2xl border border-brand-accent/50 overflow-hidden"
            >
              <div className="bg-brand-primary p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">SmileCare</p>
                  <p className="text-white/70 text-xs">
                    We typically reply in a few minutes
                  </p>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="ml-auto text-white/70 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary text-xs font-bold">S</span>
                  </div>
                  <div className="bg-brand-background rounded-xl rounded-tl-none px-3 py-2 text-sm text-brand-body">
                    Hi! How can we help you today?
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Book Appointment", "Treatment Info", "Working Hours"].map(
                    (chip) => (
                      <button
                        key={chip}
                        className="px-3 py-1.5 bg-brand-accent/40 text-brand-primary text-xs rounded-full font-medium hover:bg-brand-accent transition-colors"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 bg-brand-background border border-brand-accent rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
                  />
                  <button className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center hover:bg-brand-primary-dark transition-colors">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          onClick={() => setChatOpen(!chatOpen)}
          className="w-12 h-12 rounded-full bg-brand-secondary text-white flex items-center justify-center shadow-lg hover:bg-brand-primary transition-colors duration-300"
          aria-label="Chat"
        >
          {chatOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </motion.button>

        {/* Call Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, type: "spring" }}
          href={`tel:${CALL_NUMBER}`}
          className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg hover:bg-brand-primary-dark transition-colors duration-300 group relative"
          aria-label="Call us"
        >
          <Phone size={20} />
          <span className="absolute right-14 bg-brand-dark text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Us
          </span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, type: "spring" }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute right-16 bg-brand-dark text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </motion.a>
      </div>

      {/* Mobile Bottom Bar */}
      <AnimatePresence>
        {showMobileBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-brand-accent/50 shadow-lg px-4 py-3 flex gap-3"
          >
            <a
              href={`tel:${CALL_NUMBER}`}
              className="flex-1 flex items-center justify-center gap-2 bg-brand-primary text-white py-3 rounded-full font-medium text-sm"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-medium text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
