import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Award, Trophy, Heart, ShieldCheck, Music } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedStat({ value, label }: { value: string, label: string }) {
  const numMatch = value.match(/\d+/);
  const number = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(number.toString(), "");
  
  const { count, ref } = useCountUp(number, 2000);

  return (
    <div className="text-center">
      <p ref={ref} className="font-heading font-bold text-4xl sm:text-5xl text-[#BADFE7] mb-2">
        {count}{suffix}
      </p>
      <p className="text-white/90 text-sm sm:text-base font-medium">{label}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-brand-background min-h-screen">
      {/* SECTION A: PAGE HERO */}
      <section className="bg-gradient-to-br from-[#2C7873] to-[#1B4B45] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <nav className="text-sm text-white/70 mb-6 flex items-center justify-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">About</span>
            </nav>
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              About SmileCare
            </h1>
            <p className="text-[#BADFE7] text-lg sm:text-xl max-w-2xl mx-auto">
              A clinic built on trust, care, and a passion for beautiful smiles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION B: CLINIC STORY */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-clinic.jpg"
                  alt="SmileCare Clinic Interior"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white/20">
                  <p className="font-heading font-bold text-brand-dark text-xl">Est. 2010</p>
                  <p className="text-brand-primary text-sm font-medium">15 Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-6">
                  15 Years of Transforming Smiles in Mumbai
                </h2>
                <div className="space-y-4 text-brand-body leading-relaxed">
                  <p>
                    SmileCare was founded in 2010 with a single mission — to make high-quality dental care accessible, comfortable, and anxiety-free for every patient. What began as a small two-chair clinic has grown into one of Mumbai's most trusted dental practices.
                  </p>
                  <p>
                    We believe a visit to the dentist should never feel intimidating. From the moment you walk in, our focus is entirely on you — your comfort, your concerns, and your goals.
                  </p>
                  <p>
                    Whether you need a routine check-up or a complete smile transformation, we bring the same level of dedication, precision, and warmth to every appointment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION C: DOCTOR DETAILED PROFILE */}
      <section className="py-20 lg:py-24 bg-brand-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            {/* Left Col */}
            <ScrollReveal className="lg:w-[45%] bg-[#F0F7F8] p-8 lg:p-12 flex flex-col justify-center items-center text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-transparent pointer-events-none" />
              <img
                src="/images/doctor-aisha.jpg"
                alt="Dr. Aisha Fernandez"
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white shadow-2xl mb-8"
              />
              <h3 className="font-heading font-semibold text-3xl text-brand-dark mb-2">
                Dr. Aisha Fernandez
              </h3>
              <p className="text-brand-primary font-medium mb-6">
                BDS, MDS — Prosthodontics
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <span className="px-3 py-1 bg-white text-brand-body text-xs font-medium rounded shadow-sm border border-brand-accent/50">
                  MDA Member
                </span>
                <span className="px-3 py-1 bg-white text-brand-body text-xs font-medium rounded shadow-sm border border-brand-accent/50">
                  NABH Accredited
                </span>
                <span className="px-3 py-1 bg-white text-brand-body text-xs font-medium rounded shadow-sm border border-brand-accent/50">
                  Invisalign Certified
                </span>
              </div>
            </ScrollReveal>

            {/* Right Col */}
            <ScrollReveal direction="right" className="lg:w-[55%] p-8 lg:p-12">
              <h4 className="font-heading font-semibold text-xl text-brand-primary mb-6 border-b border-brand-accent/30 pb-4">
                Smile Architect & Cosmetic Dentistry Specialist
              </h4>
              
              <div className="space-y-4 text-brand-body text-sm leading-relaxed mb-8">
                <p>
                  Dr. Aisha Fernandez graduated with distinction from the Government Dental College, Mumbai, and completed her post-graduation in Prosthodontics from KEM Hospital. She has been in clinical practice for over 10 years.
                </p>
                <p>
                  She has completed advanced training in cosmetic dentistry, implantology, and Invisalign from leading institutes across India and abroad. She is an Invisalign Certified Provider and a member of the Maharashtra Dental Association.
                </p>
                <p>
                  Dr. Aisha is known for her meticulous attention to detail, calm chairside manner, and ability to put even the most anxious patients at ease. She takes time to understand each patient's unique concerns before recommending any treatment.
                </p>
                <p>
                  Outside the clinic, she is passionate about dental education and regularly conducts free check-up camps for underprivileged children in Mumbai.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="font-heading font-semibold text-brand-dark mb-4">Education & Qualifications</h5>
                  <ul className="space-y-2 text-sm text-brand-body">
                    <li><span className="text-brand-primary mr-2">•</span>BDS — Govt Dental College, Mumbai (2009)</li>
                    <li><span className="text-brand-primary mr-2">•</span>MDS (Prosthodontics) — KEM Hospital (2012)</li>
                    <li><span className="text-brand-primary mr-2">•</span>Invisalign Certification — Align Tech (2015)</li>
                    <li><span className="text-brand-primary mr-2">•</span>Advanced Cosmetic Dentistry — IDEA (2017)</li>
                    <li><span className="text-brand-primary mr-2">•</span>Implantology Diploma — ICOI (2019)</li>
                  </ul>
                  <p className="mt-4 text-sm font-medium text-brand-dark">Languages: English, Hindi, Marathi</p>
                </div>
                
                <div>
                  <h5 className="font-heading font-semibold text-brand-dark mb-4">Availability</h5>
                  <ul className="space-y-2 text-sm text-brand-body">
                    <li className="flex justify-between"><span>Monday - Friday</span><span className="text-green-600 font-medium">9AM–7PM ✓</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span className="text-green-600 font-medium">9AM–5PM ✓</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span className="text-red-500 font-medium">Closed ✗</span></li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h5 className="font-heading font-semibold text-brand-dark mb-4">Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {['Dental Implants', 'Porcelain Veneers', 'Invisalign', 'Smile Makeover', 'Root Canal', 'Teeth Whitening', 'Gum Contouring', 'Dental Bonding'].map(skill => (
                    <span key={skill} className="px-3 py-1 border border-brand-primary text-brand-primary text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/book"
                className="inline-flex items-center bg-brand-primary text-white font-medium px-8 py-4 rounded-full hover:bg-brand-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book with Dr. Aisha
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION D: CLINIC VALUES */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-brand-body text-lg max-w-xl mx-auto">
              The principles that guide everything we do.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", icon: Trophy, desc: "We use the latest technology and techniques to deliver clinical outcomes that last." },
              { title: "Compassion", icon: Heart, desc: "We listen first. Every treatment plan is built around you, not a template." },
              { title: "Transparency", icon: ShieldCheck, desc: "No hidden surprises. We explain every step before we begin." },
              { title: "Comfort", icon: Music, desc: "From music in the background to sedation options, we make your visit stress-free." },
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#F0F7F8] p-8 rounded-2xl h-full border border-transparent hover:border-brand-primary hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                    <value.icon size={24} className="text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-brand-dark mb-3">{value.title}</h3>
                  <p className="text-brand-body text-sm leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION E: STATS / ACHIEVEMENTS */}
      <section className="bg-[#1B4B45] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/20 pattern-diagonal-lines sm:opacity-50"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-x divide-white/10">
            <AnimatedStat value="10+" label="Years of Practice" />
            <AnimatedStat value="5000+" label="Patients Treated" />
            <AnimatedStat value="15+" label="Awards Won" />
            <AnimatedStat value="98%" label="Patient Satisfaction" />
          </div>
        </div>
      </section>

      {/* SECTION F: AWARDS & ACCREDITATIONS */}
      <section className="py-20 lg:py-24 bg-brand-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
              Awards & Accreditations
            </h2>
          </ScrollReveal>

          <StaggerContainer className="flex flex-wrap justify-center gap-6">
            {[
              "NABH Accredited Clinic (2022)",
              "Best Cosmetic Dentist — 2021",
              "Invisalign Certified Provider",
              "ISO 9001:2015 Certified",
              "MDA Member — Maharashtra"
            ].map((award, i) => (
              <StaggerItem key={i}>
                <div className="bg-white border border-brand-accent/50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-brand-primary transition-all flex items-center gap-3">
                  <Award size={20} className="text-brand-primary flex-shrink-0" />
                  <span className="font-medium text-brand-dark text-sm">{award}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION G: CLINIC FACILITIES */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
              Our Clinic
            </h2>
            <p className="text-brand-body text-lg max-w-xl mx-auto">
              A modern, fully equipped dental practice designed for your comfort.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400",
              "https://images.unsplash.com/photo-1588776814546-1ffbb2b5694?w=400",
              "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400",
              "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400"
            ].map((img, i) => (
              <StaggerItem key={i}>
                <div className="rounded-2xl overflow-hidden aspect-square group">
                  <img src={img} alt={`Facility ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {['Digital X-Ray & 3D Imaging', 'Laser Dentistry', 'Sterilisation Room (ISO compliant)', "Dedicated Children's Zone"].map((facility, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-brand-background p-6 rounded-xl">
                <ShieldCheck size={28} className="mx-auto text-brand-primary mb-3" />
                <p className="font-medium text-brand-dark">{facility}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION H: PATIENT TESTIMONIALS */}
      <section className="py-20 lg:py-24 bg-brand-background border-t border-brand-accent/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
              Patient Stories
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rahul S.", text: "Dr. Aisha completely changed my view on dentists. Pain-free and professional.", treatment: "Root Canal" },
              { name: "Priya M.", text: "Got my veneers done here before my wedding. The results are absolutely stunning!", treatment: "Porcelain Veneers" },
              { name: "Amit K.", text: "Very modern clinic. The staff is polite and they actually listen to you.", treatment: "Dental Implants" },
            ].map((t, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl shadow-sm h-full flex flex-col relative overflow-hidden">
                  <p className="text-brand-body text-sm leading-relaxed mb-6 flex-1 relative z-10">"{t.text}"</p>
                  <div className="relative z-10 flex justify-between items-end">
                    <div>
                      <p className="font-heading font-semibold text-brand-dark">{t.name}</p>
                      <p className="text-xs text-brand-primary mt-1">{t.treatment}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION I: CTA STRIP */}
      <section className="bg-gradient-to-r from-brand-primary to-[#4A9A95] py-16 text-center">
        <div className="max-w-[800px] mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-white mb-6">
              Come visit us. We'd love to meet you.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center bg-white text-brand-primary font-medium px-8 py-3.5 rounded-full hover:bg-brand-accent transition-colors"
              >
                Book Your First Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center border border-white text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                Call Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
