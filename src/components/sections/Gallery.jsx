import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';

const projects = [
  { title: 'Layered Living Room Ceiling', location: 'Hadapsar', img: '/gallary/WhatsApp-Image-2026-01-22-at-12.51.47-PM.jpeg', span: 'lg:col-span-2 lg:row-span-2' },
  { title: 'Office Acoustic Ceiling', location: 'Kharadi', img: '/gallary/gallery-image-2.webp', span: '' },
  { title: 'Fire-Rated Partition Fit-out', location: 'Magarpatta', img: '/gallary/gallery-image-3.webp', span: '' },
  { title: 'Cove-Lit Bedroom Ceiling', location: 'Wagholi', img: '/gallary/gallery-image-4.webp', span: '' },
  { title: 'Retail Baffle Ceiling', location: 'Hadapsar', img: '/gallary/gallery-image-5.webp', span: '' },
  { title: 'Full Home Interior', location: 'Manjari', img: '/gallary/WhatsApp-Image-2026-01-22-at-12.51.39-PM.jpeg', span: '' },
];

function GalleryTile({ p }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-[1.5rem] bg-ink-800 ${p.span}`}
      style={{ minHeight: '13rem' }}
    >
      <img
        src={p.img}
        alt={p.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink-900/30 group-hover:bg-ink-900/50 transition-colors duration-500" />
      <span className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-plaster-100/15 text-plaster-100 opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300">
        <ArrowUpRight size={15} />
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-plaster-100/55 mb-1">{p.location}, Pune</p>
        <p className="text-plaster-100 font-display text-lg leading-snug">{p.title}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery({ compact = false }) {
  const items = compact ? projects.slice(0, 6) : projects;
  return (
    <section className="section-pad bg-plaster-200">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Our Works" title="A sample of recent projects" />
          {!compact && (
            <Link to="/gallery" className="btn-outline shrink-0">
              View All <ArrowRight size={15} />
            </Link>
          )}
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5"
        >
          {items.map((p) => (
            <GalleryTile key={p.title} p={p} />
          ))}
        </motion.div>

        {compact && (
          <div className="mt-10 flex justify-center">
            <Link to="/gallery" className="btn-outline">
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
