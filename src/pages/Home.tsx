import Hero from "@/sections/Hero";
import DoctorProfile from "@/sections/DoctorProfile";
import TreatmentsPreview from "@/sections/TreatmentsPreview";
import WhyChooseUs from "@/sections/WhyChooseUs";
import SmileGalleryPreview from "@/sections/SmileGalleryPreview";
import Testimonials from "@/sections/Testimonials";
import BookingStrip from "@/sections/BookingStrip";
import ClinicInfo from "@/sections/ClinicInfo";
import FAQ from "@/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorProfile />
      <TreatmentsPreview />
      <WhyChooseUs />
      <SmileGalleryPreview />
      <Testimonials />
      <BookingStrip />
      <ClinicInfo />
      <FAQ />
    </>
  );
}
