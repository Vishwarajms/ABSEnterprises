import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, viewportOnce } from '../../utils/motion';
import { company } from '../../data/company';
import CursorSpotlight from '../ui/CursorSpotlight';
import RevealText from '../ui/RevealText';

export default function CTABanner() {
  return (
    <section className="container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-[2rem] bg-ink-800 px-8 py-20 md:px-16 md:py-28 text-center"
      >
        <div className="absolute inset-0 grid-veil opacity-[0.06]" />
        <div className="noise-veil" />
        <CursorSpotlight color="rgba(184,145,47,0.12)" size={520} />
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brass-400/10 blur-3xl animate-float-slow"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-clay/10 blur-3xl animate-float"
          aria-hidden
        />
        <svg
          className="absolute right-[8%] top-[12%] hidden lg:block opacity-[0.2] animate-spin-slow"
          width="130" height="130" viewBox="0 0 130 130" aria-hidden
        >
          <circle cx="65" cy="65" r="60" stroke="#B8912F" strokeWidth="0.75" fill="none" strokeDasharray="1 8" />
          <circle cx="65" cy="65" r="42" stroke="#B8912F" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="relative max-w-xl mx-auto">
          <p className="eyebrow justify-center mb-5 text-brass-300">
            <span className="w-6 h-px bg-brass-400" /> Let&rsquo;s Get Started
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-plaster-100 leading-tight">
            <RevealText text="Ready to make your renovation vision real?" />
          </h2>
          <p className="mt-4 text-plaster-100/65">
            Tell us about your space and we&rsquo;ll get back with a written quote, usually within a day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-accent">
              Get a Free Quote <ArrowRight size={15} />
            </Link>
            <a href={company.phoneTel} className="btn-outline-light">
              <Phone size={15} /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
