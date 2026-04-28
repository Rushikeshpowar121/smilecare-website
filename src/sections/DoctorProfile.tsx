import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Award, Users, Trophy } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedStat({ value, label, icon: Icon }: { value: string, label: string, icon: any }) {
  // Extract number and suffix from string like "10+"
  const numMatch = value.match(/\d+/);
  const number = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(number.toString(), "");
  
  const { count, ref } = useCountUp(number, 2000);

  return (
    <div className="bg-brand-background rounded-xl p-4 text-center">
      <Icon size={20} className="text-brand-primary mx-auto mb-2" />
      <p ref={ref} className="font-heading font-bold text-xl text-brand-dark">
        {count}{suffix}
      </p>
      <p className="text-xs text-brand-body mt-1">{label}</p>
    </div>
  );
}

const skills = [
  "Dental Implants",
  "Veneers",
  "Invisalign",
  "Smile Makeover",
  "Root Canal",
  "Teeth Whitening",
];

const stats = [
  { icon: Award, value: "10+", label: "Years of Practice" },
  { icon: Users, value: "5000+", label: "Patients Treated" },
  { icon: Trophy, value: "15+", label: "Awards & Certifications" },
];

export default function DoctorProfile() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-brand-accent to-brand-secondary/30 rounded-[28px] blur-xl opacity-60" />
                <img
                  src="/images/doctor-aisha.jpg"
                  alt="Dr. Aisha Fernandez"
                  className="relative w-full max-w-[380px] aspect-square rounded-[24px] object-cover border-[3px] border-brand-accent shadow-xl"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="border-l-4 border-brand-accent pl-6 lg:pl-8">
              <span className="inline-block bg-brand-primary/10 text-brand-primary text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                BDS, MDS — Prosthodontics
              </span>
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-2">
                Dr. Aisha Fernandez
              </h2>
              <p className="text-brand-secondary font-medium text-lg mb-4">
                Smile Architect & Cosmetic Dentistry Specialist
              </p>
              <p className="text-brand-body leading-relaxed mb-6">
                Dr. Aisha has been transforming smiles for over 10 years, combining
                artistry with clinical precision. She believes every patient deserves
                a personalised approach and a comfortable, anxiety-free experience.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat) => (
                  <AnimatedStat key={stat.label} {...stat} />
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 border border-brand-primary text-brand-primary text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                to="/book"
                className="inline-flex items-center bg-brand-primary text-white font-medium px-7 py-3.5 rounded-full hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-primary transition-all duration-300"
              >
                Book with Dr. Aisha
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
