import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const words = "Exceptional Dental Care, Just for You".split(" ");

  return (
    <section 
      className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-cover bg-center bg-[#E8F4F5]"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      {/* Organic blob background */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] rounded-full bg-[#BADFE7] opacity-15 blur-3xl pointer-events-none animate-float-bg" />
      <div className="absolute left-[-100px] top-1/3 w-[400px] h-[400px] rounded-full bg-[#BADFE7] opacity-15 blur-3xl pointer-events-none animate-float-bg" style={{ animationDelay: '3s' }} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <h1 className="font-heading font-semibold text-brand-dark text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-6">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.12 * i,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-brand-body text-lg leading-relaxed mb-8 max-w-lg"
            >
              Personalised treatments in a warm, comfortable environment. Your
              smile is in expert hands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                to="/book"
                className="inline-flex items-center bg-brand-primary text-white font-medium px-7 py-3.5 rounded-full hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-primary transition-all duration-300"
              >
                Book an Appointment
              </Link>
              <Link
                to="/treatments"
                className="inline-flex items-center border-2 border-brand-primary text-brand-primary font-medium px-7 py-3.5 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                View Treatments
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {[
                "10+ Years Experience",
                "5000+ Smiles",
                "Pain-Free Care",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-brand-body relative"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-green" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/60 to-brand-secondary/30 rounded-[32px] blur-2xl pointer-events-none" />
              <img
                src="/images/hero-clinic.jpg"
                alt="Modern dental clinic interior"
                className="relative w-full max-w-[480px] h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5] animate-float-image"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
