import { motion } from 'framer-motion';
import { viewportOnce } from '../../utils/motion';

// Wrap any media block to reveal it with a curtain-style clip-path sweep as it enters view.
export default function ImageReveal({ children, className = '', delay = 0 }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: 'inset(0 0 0 100%)' }}
        whileInView={{ clipPath: 'inset(0 0 0 0%)' }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-10 bg-ink-800"
      />
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
