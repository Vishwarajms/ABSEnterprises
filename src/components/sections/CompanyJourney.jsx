import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';
import SectionTitle from '../ui/SectionTitle';

const milestones = [
  {
    stage: 'Foundation',
    title: 'Built on hands-on craftsmanship',
    text: 'ABS Enterprises started with a simple standard: every ceiling and partition should be finished the way the founder would want it in his own home.',
  },
  {
    stage: 'Growth',
    title: 'From single rooms to full interiors',
    text: 'As word spread across Pune societies, the work grew from single-room POP ceilings to full home interiors and commercial partition fit-outs.',
  },
  {
    stage: 'Today',
    title: '10+ years, 300+ projects delivered',
    text: 'Today the team works across residential, commercial and hospitality projects throughout Pune, still holding to the same written-guarantee standard.',
  },
];

export default function CompanyJourney() {
  return (
    <section className="section-pad bg-plaster-200">
      <div className="container">
        <SectionTitle eyebrow="Our Journey" title="How we got here" align="center" />
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-ink-800/10 md:left-1/2" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.stage}
              variants={fadeUp}
              custom={i * 0.15}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={`relative flex md:items-center gap-6 mb-12 last:mb-0 ${
                i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-ink-800 border-4 border-plaster-200 z-10" />
              <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 1 ? 'md:pr-14' : 'md:pl-14 md:ml-auto'}`}>
                <span className="font-mono text-xs uppercase tracking-widest text-brass-500">{m.stage}</span>
                <h3 className="font-display text-lg text-ink-800 mt-2">{m.title}</h3>
                <p className="text-sm text-ink-500 mt-2 leading-relaxed">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
