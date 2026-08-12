import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';
import SectionTitle from '../ui/SectionTitle';
import { company } from '../../data/company';

export default function ProcessSteps() {
  return (
    <section className="section-pad bg-plaster-200 relative overflow-hidden">
      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="How It Works"
            title="Our proven 6-step process"
            description="A consistent, documented process from the first conversation to final handover — the same sequence, every project."
          />
          <span className="font-display text-7xl md:text-8xl text-ink-800/[0.06] leading-none select-none hidden md:block">
            6 Steps
          </span>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {company.process.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              custom={i * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={`relative ${i % 3 === 1 ? 'lg:translate-y-10' : ''}`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl text-ink-800/15 tabular-nums">{step.step}</span>
                <div className="flex-1 h-px bg-ink-800/10 mb-2" />
              </div>
              <h3 className="font-display text-xl text-ink-800 mt-4 leading-snug">{step.title}</h3>
              <p className="mt-2.5 text-sm text-ink-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
