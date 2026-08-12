import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Phone, Sparkle } from 'lucide-react';
import { company } from '../../data/company';
import CursorSpotlight from '../ui/CursorSpotlight';
import TiltCard from '../ui/TiltCard';
import useParallax from '../../hooks/useParallax';

const marqueeItems = [
  'POP Ceiling', 'Gypsum Board', 'Drywall Partitions', 'Interior Design',
  'Fire-Rated Systems', 'Baffle Ceilings', 'Renovation Projects',
];

export default function Hero() {
  const blobA = useParallax(40);
  const blobB = useParallax(-30);

  return (
    <section className="relative min-h-[100vh] flex flex-col bg-ink-800 overflow-hidden pt-24">
      <div className="absolute inset-0 grid-veil opacity-[0.08]" />
      <div className="noise-veil" />
      <CursorSpotlight color="rgba(184,145,47,0.1)" size={620} />
      <motion.div
        ref={blobA.ref}
        style={{ y: blobA.y }}
        className="absolute top-16 -right-24 w-[30rem] h-[30rem] rounded-full bg-brass-400/[0.14] blur-[100px]"
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <motion.div
        ref={blobB.ref}
        style={{ y: blobB.y }}
        className="absolute -bottom-20 -left-16 w-[22rem] h-[22rem] rounded-full bg-clay/[0.12] blur-[90px]"
      />

      {/* Ceiling-plan motif, drawn as a floating architectural reference */}
      <motion.svg
        width="220" height="220" viewBox="0 0 220 220"
        className="absolute right-[4%] top-[16%] hidden xl:block opacity-[0.22] animate-float"
        aria-hidden
      >
        <circle cx="110" cy="110" r="95" stroke="#B8912F" strokeWidth="0.75" fill="none" strokeDasharray="2 6" />
        <rect x="35" y="35" width="150" height="150" rx="4" stroke="#B8912F" strokeWidth="1" fill="none" />
        <line x1="35" y1="110" x2="185" y2="110" stroke="#B8912F" strokeWidth="0.5" />
        <line x1="110" y1="35" x2="110" y2="185" stroke="#B8912F" strokeWidth="0.5" />
        <circle cx="110" cy="110" r="5" fill="#B8912F" />
      </motion.svg>
      <motion.svg
        width="120" height="120" viewBox="0 0 120 120"
        className="absolute left-[7%] bottom-[26%] hidden lg:block opacity-[0.16] animate-float-slow"
        aria-hidden
      >
        <rect x="8" y="8" width="104" height="104" rx="6" stroke="#F7F4EE" strokeWidth="1" fill="none" />
        <path d="M8 60 Q60 20 112 60" stroke="#F7F4EE" strokeWidth="0.75" fill="none" />
      </motion.svg>

      <div className="container relative flex-1 grid lg:grid-cols-12 gap-10 items-center pb-10">
        <div className="lg:col-span-7 lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-7 pl-1.5 pr-4 py-1.5 rounded-full border border-plaster-100/15 bg-plaster-100/[0.04]"
          >
            <span className="grid place-items-center w-6 h-6 rounded-full bg-brass-400 text-ink-900">
              <Sparkle size={11} fill="currentColor" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brass-200">
              Ceilings &amp; Interiors &middot; Pune
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="font-display font-normal text-[2.7rem] sm:text-6xl lg:text-[4.1rem] leading-[0.98] tracking-[-0.01em] text-plaster-100"
          >
            Ceilings and interiors
            <br />
            that <em className="not-italic text-gradient-shimmer font-medium">actually</em>{' '}
            <span className="relative inline-block">
              look finished
              <svg
                className="absolute left-0 -bottom-1 w-full"
                height="10" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden
              >
                <path d="M1 7.5C40 2 160 2 199 7.5" stroke="#B8912F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 text-plaster-100/60 text-lg max-w-lg leading-relaxed"
          >
            {company.tagline}. From POP ceilings and gypsum work to drywall partitions and full
            interiors, every ABS Enterprises project across Pune comes with a written guarantee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="btn-accent">
              Get a Free Quote <ArrowRight size={15} />
            </Link>
            <a href={company.phoneTel} className="btn-outline-light">
              <Phone size={15} /> {company.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0 w-full"
        >
          <div className="relative w-[90%] sm:w-[70%] lg:w-full max-w-[460px]">
            <TiltCard max={4} className="relative rounded-[2.25rem] overflow-hidden aspect-[4/5] w-full border border-plaster-100/10 shadow-lift">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Beautiful False Ceiling Interior" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-ink-900/20" />
              <div className="absolute inset-7 rounded-[1.6rem] border border-brass-400/30 z-10" />
              <motion.div
                className="absolute inset-7 rounded-[1.6rem] border border-brass-300/0"
                animate={{ borderColor: ['rgba(230,200,120,0)', 'rgba(230,200,120,0.35)', 'rgba(230,200,120,0)'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute top-7 left-7 right-7 flex items-center justify-between">
                <ShieldCheck size={20} className="text-brass-300" />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-plaster-100/40">Est. workmanship guarantee</span>
              </div>
            </TiltCard>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-5 left-4 sm:-bottom-7 sm:-left-10 rounded-2xl bg-plaster-100 p-4 sm:p-5 shadow-lift max-w-[12rem] sm:max-w-[13rem] z-20"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brass-500">Guaranteed in writing</p>
              <p className="font-display text-lg text-ink-800 mt-1 leading-snug">Quality. Safety. Reliability.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee service strip */}
      <div className="relative border-t border-plaster-100/10 py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-plaster-100/35 font-mono text-xs uppercase tracking-[0.18em]">
              {item}
              <span className="w-1 h-1 rounded-full bg-brass-400/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
