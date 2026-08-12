import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-800"
    >
      <div className="flex flex-col items-center gap-4">
        <svg width="40" height="40" viewBox="0 0 20 20" fill="none" className="animate-spin-slow">
          <rect x="2" y="2" width="16" height="16" rx="2" stroke="#B8912F" strokeWidth="1.4" />
          <line x1="2" y1="10" x2="18" y2="10" stroke="#B8912F" strokeWidth="1.4" />
          <line x1="10" y1="2" x2="10" y2="18" stroke="#B8912F" strokeWidth="1.4" />
        </svg>
        <span className="font-display text-plaster-100/70 text-sm tracking-[0.3em] uppercase">ABS Enterprises</span>
        <div className="w-32 h-px bg-plaster-100/10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-brass-400"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
