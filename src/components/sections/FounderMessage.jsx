import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeLeft, fadeRight, viewportOnce } from '../../utils/motion';
import { company } from '../../data/company';
import ImageReveal from '../ui/ImageReveal';
import RevealText from '../ui/RevealText';

export default function FounderMessage() {
  return (
    <section className="section-pad bg-ink-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-veil opacity-[0.05]" />
      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <ImageReveal className="rounded-[2rem] aspect-[4/5] border border-plaster-100/10 overflow-hidden">
            <img src="./founder.png" alt="Founder ABS Enterprises" className="w-full h-full object-cover grayscale" />
          </ImageReveal>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <Quote className="text-brass-400" size={36} />
          <p className="mt-6 font-display text-2xl md:text-3xl text-plaster-100 leading-snug">
            &ldquo;<RevealText text={company.founder.quote} stagger={0.02} />&rdquo;
          </p>
          <div className="mt-7">
            <p className="text-plaster-100 font-medium">{company.founder.name}</p>
            <p className="text-plaster-100/50 text-sm">{company.founder.role}, ABS Enterprises</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
