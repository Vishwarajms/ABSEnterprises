import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';
import { getBlogBySlug } from '../../data/blogs';

const tones = [
  'from-ink-700 to-ink-900',
  'from-brass-600 to-ink-800',
  'from-clay to-ink-800',
  'from-ink-600 to-brass-700',
];

export default function ServiceIndexRow({ service, index }) {
  const [open, setOpen] = useState(false);
  const relatedBlog = service.relatedBlogSlug ? getBlogBySlug(service.relatedBlogSlug) : null;

  return (
    <motion.div
      variants={fadeUp}
      custom={Math.min(index * 0.04, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      id={service.slug}
      className="group border-b border-ink-800/[0.08] scroll-mt-28"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-6 py-7 text-left"
      >
        <span className="kicker-number w-10 shrink-0 hidden sm:block">{String(index + 1).padStart(2, '0')}</span>

        <span
          className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${tones[index % tones.length]} relative overflow-hidden hidden md:block transition-transform duration-500 group-hover:scale-105`}
        >
          <span className="absolute inset-0 grid-veil opacity-20" />
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-2xl text-ink-800 group-hover:text-brass-500 transition-colors duration-300 truncate">
            {service.title}
          </h3>
          <p className="mt-1 text-sm text-ink-500 truncate hidden sm:block">{service.shortDescription}</p>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-ink-400 shrink-0">
          <span>{service.mode}</span>
          <span className="w-1 h-1 rounded-full bg-ink-300" />
          <span>{service.duration}</span>
        </div>

        <span
          className={`shrink-0 grid place-items-center w-10 h-10 rounded-full border border-ink-800/10 text-ink-500 transition-all duration-300 ${
            open ? 'rotate-90 bg-ink-800 text-plaster-100 border-ink-800' : 'group-hover:border-brass-400 group-hover:text-brass-500'
          }`}
        >
          <ArrowRight size={16} />
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-9 pl-0 sm:pl-16 grid md:grid-cols-3 gap-8">
          <p className="md:col-span-1 text-sm text-ink-600 leading-relaxed">{service.description}</p>
          <div className="md:col-span-1">
            <p className="kicker-number mb-3">Benefits</p>
            <ul className="space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="text-sm text-ink-600 flex items-start gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-brass-400 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <p className="kicker-number mb-3">Our Process</p>
            <ol className="space-y-2">
              {service.process.map((p, i) => (
                <li key={p} className="text-sm text-ink-600 flex items-start gap-2.5">
                  <span className="font-mono text-xs text-brass-500 mt-0.5 shrink-0">{i + 1}</span> {p}
                </li>
              ))}
            </ol>
            {relatedBlog && (
              <Link
                to={`/blog/${relatedBlog.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-800 hover:text-brass-500"
              >
                <BookOpen size={14} /> Read our guide: {relatedBlog.title}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
