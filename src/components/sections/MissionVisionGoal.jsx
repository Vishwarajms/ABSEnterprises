import { motion } from 'framer-motion';
import { Target, Eye, Flag } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';
import SectionTitle from '../ui/SectionTitle';
import { company } from '../../data/company';

const blocks = [
  { icon: Target, title: 'Our Mission', text: company.mission },
  { icon: Eye, title: 'Our Vision', text: company.vision },
  { icon: Flag, title: 'Our Goal', text: company.goal },
];

export default function MissionVisionGoal() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionTitle eyebrow="What Drives Us" title="Mission, vision and goal" align="center" />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-3 gap-6"
        >
          {blocks.map((b) => (
            <motion.div key={b.title} variants={fadeUp} className="card p-8 text-center">
              <span className="mx-auto grid place-items-center w-12 h-12 rounded-full bg-ink-800 text-brass-400">
                <b.icon size={20} />
              </span>
              <h3 className="font-display text-xl mt-5 text-ink-800">{b.title}</h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
