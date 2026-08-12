import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

export default function StatCounter({ value, suffix = '', label, index = 0, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.1}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="text-center sm:text-left"
    >
      <div className={`font-display text-4xl md:text-5xl font-medium ${light ? 'text-plaster-100' : 'text-ink-800'}`}>
        <CountUp end={value} duration={2.4} enableScrollSpy scrollSpyOnce />
        <span className="text-brass-400">{suffix}</span>
      </div>
      <p className={`mt-2 text-sm font-medium tracking-wide ${light ? 'text-plaster-100/60' : 'text-ink-500'}`}>
        {label}
      </p>
    </motion.div>
  );
}
