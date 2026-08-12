import { useRef } from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';

// Returns a ref + a `y` motion value that drifts as the element scrolls through the viewport.
// `range` is the total px of drift (positive = moves down slower than scroll, i.e. classic parallax).
export default function useParallax(range = 60) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const effectiveRange = prefersReducedMotion ? 0 : range;
  const y = useTransform(scrollYProgress, [0, 1], [effectiveRange, -effectiveRange]);
  return { ref, y };
}
