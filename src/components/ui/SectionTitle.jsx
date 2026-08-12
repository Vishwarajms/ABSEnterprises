import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';
import RevealText from './RevealText';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={`eyebrow mb-4 ${light ? 'text-brass-300' : ''}`}
        >
          <span className="w-6 h-px bg-brass-400" />
          {eyebrow}
        </motion.p>
      )}
      <h2 className={`text-3xl md:text-[2.6rem] leading-[1.1] font-medium ${light ? 'text-plaster-100' : 'text-ink-800'}`}>
        <RevealText text={title} />
      </h2>
      {description && (
        <motion.p
          variants={fadeUp}
          custom={0.16}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className={`mt-4 text-base leading-relaxed ${light ? 'text-plaster-100/70' : 'text-ink-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
