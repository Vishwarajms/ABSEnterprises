import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Absolutely-positioned radial glow that eases toward the pointer within its parent section.
// Parent must be `relative`. Listens on the parent (not this layer, which stays
// pointer-events-none so it never blocks clicks) and drives motion values directly —
// no React re-renders on mousemove, so this stays 60fps-safe even on lower-end devices.
export default function CursorSpotlight({ color = 'rgba(184,145,47,0.16)', size = 480 }) {
  const wrapperRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const mvX = useMotionValue(-9999);
  const mvY = useMotionValue(-9999);
  const x = useSpring(mvX, { stiffness: 90, damping: 22, mass: 0.6 });
  const y = useSpring(mvY, { stiffness: 90, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const parent = wrapperRef.current?.parentElement;
    if (!parent) return undefined;

    const handleMove = (e) => {
      const rect = parent.getBoundingClientRect();
      mvX.set(e.clientX - rect.left);
      mvY.set(e.clientY - rect.top);
    };
    const handleLeave = () => {
      mvX.set(-9999);
      mvY.set(-9999);
    };

    parent.addEventListener('mousemove', handleMove, { passive: true });
    parent.addEventListener('mouseleave', handleLeave, { passive: true });
    return () => {
      parent.removeEventListener('mousemove', handleMove);
      parent.removeEventListener('mouseleave', handleLeave);
    };
  }, [mvX, mvY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div ref={wrapperRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
          translateX: '-50%',
          translateY: '-50%',
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
