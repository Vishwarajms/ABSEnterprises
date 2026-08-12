import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';
import SectionTitle from '../ui/SectionTitle';

function FAQItem({ q, a, index, open, onToggle, idPrefix }) {
  const isOpen = open === index;
  const buttonId = `${idPrefix}-q-${index}`;
  const panelId = `${idPrefix}-a-${index}`;
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.06}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="border-b border-ink-800/[0.08]"
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          onClick={() => onToggle(isOpen ? null : index)}
          className="w-full flex items-center gap-5 py-6 text-left"
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className={`font-mono text-xs shrink-0 transition-colors duration-300 ${isOpen ? 'text-brass-500' : 'text-ink-300'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`flex-1 font-display text-lg font-normal transition-colors duration-300 ${isOpen ? 'text-ink-800' : 'text-ink-700'}`}>
            {q}
          </span>
          <span
            className={`shrink-0 grid place-items-center w-8 h-8 rounded-full border transition-all duration-300 ${
              isOpen ? 'rotate-45 bg-ink-800 text-plaster-100 border-ink-800' : 'text-ink-500 border-ink-800/15'
            }`}
          >
            <Plus size={15} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-9 text-ink-500 leading-relaxed pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ({ faqs, eyebrow = 'FAQ', title = 'Have a question?' }) {
  const [open, setOpen] = useState(0);
  const idPrefix = eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow={eyebrow}
              title={title}
              description="Answers to what clients ask us most before starting a project."
            />
          </div>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} index={i} open={open} onToggle={setOpen} idPrefix={idPrefix} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
