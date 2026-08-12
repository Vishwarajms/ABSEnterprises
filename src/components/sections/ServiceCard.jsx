import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';
import useTilt from '../../hooks/useTilt';

export default function ServiceCard({ service, index = 0, large = false, className = '' }) {
  const tilt = useTilt({ max: 4 });

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      variants={fadeUp}
      custom={index * 0.07}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      whileHover={{ y: -6 }}
      id={service.slug}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-ink-800/[0.06] scroll-mt-28 transition-shadow duration-500 hover:shadow-lift ${
        large ? 'bg-ink-800 text-plaster-100' : 'bg-plaster-100 text-ink-800'
      } ${className}`}
      style={{ ...tilt.style, transformStyle: 'preserve-3d' }}
    >
      {large && (
        <>
          <div className="absolute inset-0 grid-veil opacity-[0.07]" />
          <div className="absolute -right-14 -bottom-14 w-56 h-56 rounded-full bg-brass-400/10 blur-3xl" aria-hidden />
        </>
      )}
      <div className={`relative flex flex-col h-full ${large ? 'p-8 md:p-10' : 'p-7'}`} style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-start justify-between">
          <span className={`font-mono text-xs ${large ? 'text-brass-300/80' : 'text-brass-500'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={`grid place-items-center w-9 h-9 rounded-full border transition-all duration-300 group-hover:rotate-45 ${
              large
                ? 'border-plaster-100/15 text-plaster-100/50 group-hover:border-brass-400 group-hover:text-brass-300'
                : 'border-ink-800/10 text-ink-400 group-hover:border-brass-400 group-hover:text-brass-500'
            }`}
          >
            <ArrowUpRight size={15} />
          </span>
        </div>
        <h3 className={`font-display mt-5 ${large ? 'text-2xl md:text-3xl text-plaster-100' : 'text-xl text-ink-800'}`}>
          {service.title}
        </h3>
        <p className={`mt-2.5 leading-relaxed flex-1 ${large ? 'text-base text-plaster-100/60 max-w-sm' : 'text-sm text-ink-500'}`}>
          {service.shortDescription}
        </p>
        <div className={`mt-6 flex items-center gap-4 text-xs font-mono ${large ? 'text-plaster-100/40' : 'text-ink-400'}`}>
          <span>{service.mode}</span>
          <span className={`w-1 h-1 rounded-full ${large ? 'bg-plaster-100/30' : 'bg-ink-300'}`} />
          <span>{service.duration}</span>
        </div>
      </div>
    </motion.div>
  );
}
