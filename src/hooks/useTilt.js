import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

// Subtle, professional tilt: small max angle, spring-damped, transform-only (no layout cost).
export default function useTilt({ max = 6, scale = 1.015 } = {}) {
  const prefersReducedMotion = useReducedMotion();
  const effectiveMax = prefersReducedMotion ? 0 : max;
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [effectiveMax, -effectiveMax]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-effectiveMax, effectiveMax]), springConfig);

  const onMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    ref,
    onMouseMove,
    onMouseLeave,
    style: { rotateX, rotateY, transformPerspective: 800 },
    hoverScale: prefersReducedMotion ? 1 : scale,
  };
}
