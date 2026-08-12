import { motion, useReducedMotion } from 'framer-motion';
import { viewportOnce } from '../../utils/motion';

const container = {
  hidden: {},
  show: (stagger = 0.045) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word = {
  hidden: { opacity: 0, y: '0.5em', filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Renders `text` as individually animated words. Falls back to plain text when the user
// prefers reduced motion.
export default function RevealText({ text, className = '', stagger = 0.045, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(' ');

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delayChildren: delay }}
      className={`inline ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] mr-[0.28em]">
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.span>
  );
}
