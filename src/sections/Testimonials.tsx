import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { testimonials } from "@/data";
import { Star, Quote } from "lucide-react";

function TestimonialCard({ t }: { t: any }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.review.length > 120;

  return (
    <div className="bg-brand-background rounded-2xl p-8 h-full min-h-[280px] flex flex-col relative overflow-hidden">
      <Quote className="absolute -top-2 -left-2 w-24 h-24 text-brand-primary opacity-[0.04] rotate-180 pointer-events-none" />
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-brand-accent"
          loading="lazy"
        />
        <div>
          <p className="font-heading font-semibold text-brand-dark">
            {t.name}
          </p>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < t.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-brand-body text-sm leading-relaxed flex-1 mb-4 relative z-10">
        <p className={expanded ? "" : "line-clamp-3"}>"{t.review}"</p>
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-brand-primary font-medium text-xs mt-1 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
      <span className="inline-block self-start bg-brand-primary/10 text-brand-primary text-xs font-medium px-3 py-1 rounded-full relative z-10">
        {t.treatment}
      </span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-brand-dark mb-4">
            What Our Patients Say
          </h2>
          <p className="text-brand-body text-lg max-w-xl mx-auto">
            Real stories from real patients who trusted us with their smiles.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, bulletClass: "swiper-bullet", bulletActiveClass: "swiper-bullet-active" }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>

      <style>{`
        .swiper-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #BADFE7;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .swiper-bullet-active {
          background: #2C7873;
          width: 24px;
          border-radius: 4px;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #2C7873;
          background: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-next {
          right: 0;
        }
        .swiper-button-prev {
          left: 0;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
