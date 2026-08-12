import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import { fadeUp, viewportOnce } from '../utils/motion';

const categories = ['All', 'False Ceiling', 'Drywall Partition', 'Interior Design'];

const galleryItems = [
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.51.39-PM.jpeg',
    title: 'Commercial Grid False Ceiling',
    category: 'False Ceiling',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.51.40-PM.jpeg',
    title: 'Modern Residential POP Design',
    category: 'False Ceiling',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.51.41-PM.jpeg',
    title: 'Acoustic Drywall Partitioning',
    category: 'Drywall Partition',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.51.42-PM.jpeg',
    title: 'Warm Cove Lighting Ceiling',
    category: 'False Ceiling',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.51.47-PM.jpeg',
    title: 'Executive Office Cabin Design',
    category: 'Interior Design',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.51.49-PM.jpeg',
    title: 'Living Room Wooden Accent Ceiling',
    category: 'Interior Design',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.52.14-PM.jpeg',
    title: 'Metal Stud Wall Framing',
    category: 'Drywall Partition',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.52.18-PM.jpeg',
    title: 'Decorative Gypsum Ceiling Board',
    category: 'False Ceiling',
  },
  {
    src: './gallary/WhatsApp-Image-2026-01-22-at-12.52.21-PM.jpeg',
    title: 'Contemporary Workspace Interior',
    category: 'Interior Design',
  },
  {
    src: './gallary/about-us-page-cta-image.webp',
    title: 'Corporate Conference Room Layout',
    category: 'Interior Design',
  },
  {
    src: './gallary/gallery-image-1.webp',
    title: 'Minimalist Gypsum Board Ceiling',
    category: 'False Ceiling',
  },
  {
    src: './gallary/gallery-image-2.webp',
    title: 'Stepped POP Ceiling & Spotlights',
    category: 'False Ceiling',
  },
  {
    src: './gallary/gallery-image-3.webp',
    title: 'Glass & Drywall Combined Partition',
    category: 'Drywall Partition',
  },
  {
    src: './gallary/gallery-image-4.webp',
    title: 'Luxury Perimeter Cove Ceiling',
    category: 'False Ceiling',
  },
  {
    src: './gallary/gallery-image-5.webp',
    title: 'Reception Lobby Wall Paneling',
    category: 'Interior Design',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEO
        title="Gallery | ABS Enterprises"
        description="View our portfolio of false ceiling, interior design, and remodeling projects across Pune."
        path="/gallery"
      />
      
      {/* Intro Header */}
      <section className="relative bg-ink-800 pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-veil opacity-[0.06]" />
        <div className="noise-veil" />
        <div className="container relative">
          <Breadcrumb items={[{ name: 'Gallery' }]} />
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow text-brass-300 mb-5">
                <span className="w-6 h-px bg-brass-400" /> Portfolio
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={0.08}
                initial="hidden"
                animate="show"
                className="font-display text-4xl md:text-6xl text-plaster-100 leading-[1.03]"
              >
                Our Work Gallery
              </motion.h1>
            </div>
            <motion.p
              variants={fadeUp}
              custom={0.16}
              initial="hidden"
              animate="show"
              className="lg:col-span-4 text-plaster-100/55 leading-relaxed lg:pb-2 lg:border-l lg:border-plaster-100/10 lg:pl-8"
            >
              Explore our project archive showing high-end false ceilings, partition designs, and complete office and residential interiors completed in Pune.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 pb-6 bg-plaster-100">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 border-b border-ink-800/10 pb-6">
            <div className="flex items-center gap-2 text-ink-500 font-mono text-xs uppercase tracking-wider mr-2">
              <Filter size={14} /> Filter:
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brass-400 text-ink-900 shadow-soft'
                      : 'bg-plaster-200 text-ink-600 hover:bg-plaster-300 hover:text-ink-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 bg-plaster-100">
        <div className="container">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  key={item.src}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative overflow-hidden rounded-[1.5rem] aspect-square bg-plaster-200 cursor-pointer shadow-soft border border-ink-800/[0.04]"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-brass-300 mb-1">{item.category}</span>
                    <h3 className="text-plaster-100 font-display text-lg leading-snug flex items-center justify-between">
                      {item.title}
                      <span className="p-2 rounded-full bg-plaster-100/10 backdrop-blur-sm text-plaster-100">
                        <Maximize2 size={14} />
                      </span>
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[100] bg-ink-900/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-plaster-100/10 hover:bg-plaster-100/20 text-plaster-100 transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-plaster-100/10 hover:bg-plaster-100/20 text-plaster-100 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-plaster-100/10 hover:bg-plaster-100/20 text-plaster-100 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            <div className="max-w-4xl w-full h-[75vh] flex flex-col items-center justify-center gap-4" onClick={e => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-lift border border-plaster-100/10"
              />
              <div className="text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-brass-300">{filteredItems[lightboxIndex].category}</span>
                <h3 className="text-plaster-100 font-display text-xl mt-1">{filteredItems[lightboxIndex].title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
