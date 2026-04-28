import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { treatments, categories } from "@/data";
import { Check, MessageCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z.string().min(1, "Please select a date"),
  time: z.enum(["morning", "afternoon", "evening"]),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setFormData(data);
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  const timeSlots = [
    { value: "morning", label: "Morning", time: "9 AM – 12 PM" },
    { value: "afternoon", label: "Afternoon", time: "12 PM – 4 PM" },
    { value: "evening", label: "Evening", time: "4 PM – 7 PM" },
  ];

  const selectedTime = watch("time");

  return (
    <div className="bg-brand-background min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <ScrollReveal>
            <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-3">
              Book an Appointment
            </h1>
            <p className="text-brand-body text-lg max-w-xl">
              Fill in the form below and we will confirm your appointment within a few hours.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-[640px] mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-8 shadow-card space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Your full name"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all ${
                      errors.name
                        ? "border-red-400 focus:border-red-400"
                        : watch("name") && !errors.name
                        ? "border-emerald-400 focus:border-emerald-400"
                        : "border-brand-accent focus:border-brand-primary"
                    }`}
                  />
                  {watch("name") && !errors.name && (
                    <Check size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                  )}
                </div>
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all ${
                      errors.phone
                        ? "border-red-400 focus:border-red-400"
                        : watch("phone") && !errors.phone
                        ? "border-emerald-400 focus:border-emerald-400"
                        : "border-brand-accent focus:border-brand-primary"
                    }`}
                  />
                  {watch("phone") && !errors.phone && (
                    <Check size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
                  )}
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white border border-brand-accent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Treatment */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Treatment of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("treatment")}
                  className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all ${
                    errors.treatment
                      ? "border-red-400 focus:border-red-400"
                      : "border-brand-accent focus:border-brand-primary"
                  }`}
                >
                  <option value="">Select a treatment</option>
                  {categories.slice(1).map((cat) => (
                    <optgroup key={cat} label={cat}>
                      {treatments
                        .filter((t) => t.category === cat)
                        .map((t) => (
                          <option key={t.id} value={t.slug}>
                            {t.name}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>
                {errors.treatment && (
                  <p className="text-red-500 text-xs mt-1">{errors.treatment.message}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("date")}
                  type="date"
                  min={today}
                  className={`w-full bg-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all ${
                    errors.date
                      ? "border-red-400 focus:border-red-400"
                      : "border-brand-accent focus:border-brand-primary"
                  }`}
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <label
                      key={slot.value}
                      className={`cursor-pointer text-center rounded-xl border-2 px-3 py-3 transition-all ${
                        selectedTime === slot.value
                          ? "border-brand-primary bg-brand-primary text-white"
                          : "border-brand-accent bg-white text-brand-body hover:bg-brand-accent/20"
                      }`}
                    >
                      <input
                        type="radio"
                        {...register("time")}
                        value={slot.value}
                        className="sr-only"
                      />
                      <span className="block text-sm font-medium">{slot.label}</span>
                      <span className={`block text-xs mt-0.5 ${selectedTime === slot.value ? "text-white/80" : "text-brand-body/70"}`}>
                        {slot.time}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Message / Notes <span className="text-brand-body/50">(optional)</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell us about your concern..."
                  className="w-full bg-white border border-brand-accent rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-brand-primary text-white font-medium py-4 rounded-full hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-primary transition-all duration-300"
              >
                Confirm Appointment
              </button>

              {/* WhatsApp Alternative */}
              <div className="text-center pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20SmileCare%20Dental."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-primary text-sm font-medium hover:underline"
                >
                  <MessageCircle size={16} />
                  Prefer to book via WhatsApp?
                </a>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-10 shadow-card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-emerald-500" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-3">
                Thank you, {formData?.name}!
              </h2>
              <p className="text-brand-body mb-6">
                We will confirm your appointment via WhatsApp or call within a few hours.
              </p>

              {formData && (
                <div className="bg-brand-background rounded-xl p-5 text-left text-sm space-y-2 mb-6">
                  <p>
                    <span className="font-medium text-brand-dark">Treatment:</span>{" "}
                    {treatments.find((t) => t.slug === formData.treatment)?.name || formData.treatment}
                  </p>
                  <p>
                    <span className="font-medium text-brand-dark">Date:</span>{" "}
                    {formData.date}
                  </p>
                  <p>
                    <span className="font-medium text-brand-dark">Time:</span>{" "}
                    {timeSlots.find((t) => t.value === formData.time)?.label}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I've%20just%20submitted%20an%20appointment%20request%20at%20SmileCare.%20Please%20confirm."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-6 py-3 rounded-full"
                >
                  <MessageCircle size={18} />
                  Send WhatsApp Confirmation
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center border border-brand-primary text-brand-primary font-medium px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
