import { motion } from 'framer-motion';
import { Building2, Home, Store, Stethoscope, UtensilsCrossed, Hammer } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { industries } from '../../data/company';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';

const icons = [Home, Building2, Store, Stethoscope, UtensilsCrossed, Hammer];

export default function IndustriesServed() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <SectionTitle
              eyebrow="Who We Work With"
              title="Industries we serve across Pune"
            />
          </div>

          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-8 divide-y divide-ink-800/[0.07]"
          >
            {industries.map((ind, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={ind.title}
                  variants={fadeUp}
                  className="group flex items-center gap-6 py-6 first:pt-0"
                >
                  <span className="font-mono text-xs text-ink-300 w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-plaster-200 text-ink-500 group-hover:bg-ink-800 group-hover:text-brass-400 transition-colors duration-300">
                    <Icon size={18} />
                  </span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className="font-display text-lg text-ink-800 shrink-0 sm:w-56">{ind.title}</h3>
                    <p className="text-sm text-ink-500">{ind.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
