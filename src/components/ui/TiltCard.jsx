import { motion } from 'framer-motion';
import useTilt from '../../hooks/useTilt';

// Wraps any card in a subtle, spring-smoothed 3D tilt driven by pointer position.
// Everything animated here is transform/opacity — no layout properties — to stay GPU-cheap.
export default function TiltCard({ children, className = '', max = 5, ...props }) {
  const tilt = useTilt({ max });

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      whileHover={{ scale: tilt.hoverScale }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ ...tilt.style, transformStyle: 'preserve-3d' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
