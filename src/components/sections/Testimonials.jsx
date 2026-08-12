import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';
import { testimonials } from '../../data/company';
import SectionTitle from '../ui/SectionTitle';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="section-pad bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-veil opacity-[0.05]" />
      <span
        className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[14rem] leading-none text-plaster-100/[0.03] select-none pointer-events-none hidden md:block"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="container relative">
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted across Pune homes and offices"
          align="center"
          light
        />

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.testimonial-pagination' }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="h-full rounded-[1.75rem] bg-plaster-100/[0.04] border border-plaster-100/10 p-7 flex flex-col transition-colors duration-300 hover:bg-plaster-100/[0.06] hover:border-brass-400/20">
                  <Quote className="text-brass-400" size={22} />
                  <p className="mt-5 text-plaster-100/80 text-[0.95rem] leading-relaxed flex-1">{t.quote}</p>
                  <div className="mt-6 pt-5 border-t border-plaster-100/10 flex items-center justify-between">
                    <div>
                      <p className="text-plaster-100 font-medium text-sm">{t.name}</p>
                      <p className="text-plaster-100/45 text-xs mt-0.5">{t.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} size={12} className="fill-brass-400 text-brass-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination flex justify-center gap-2" />
        </motion.div>
      </div>

      <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background: rgba(247,244,238,0.3);
          opacity: 1;
          width: 6px; height: 6px;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #B8912F;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
