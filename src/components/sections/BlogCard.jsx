import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';
import ImageReveal from '../ui/ImageReveal';

export default function BlogCard({ blog, index = 0, featured = false }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index * 0.08}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`group card overflow-hidden flex flex-col hover:shadow-lift hover:-translate-y-1 transition-all duration-400 ${
        featured ? 'md:col-span-2 md:flex-row' : ''
      }`}
    >
      <ImageReveal className={featured ? 'md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden' : 'aspect-[16/10] overflow-hidden'}>
        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-[1.06]">
          <img src={`https://image.pollinations.ai/prompt/${encodeURIComponent(blog.title + ' interior design')}?width=800&height=600&nologo=true`} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ink-900/10 group-hover:bg-ink-900/20 transition-colors" />
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-plaster-100/90 text-ink-800 text-xs font-medium z-10">
            {blog.category}
          </span>
        </div>
      </ImageReveal>
      <div className={`p-6 flex flex-col flex-1 ${featured ? 'md:justify-center' : ''}`}>
        <div className="flex items-center gap-3 text-xs text-ink-400 font-mono">
          <span>{new Date(blog.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {blog.readingTime}</span>
        </div>
        <h3 className={`font-display text-ink-800 mt-3 leading-snug group-hover:text-brass-500 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        <p className="mt-2.5 text-sm text-ink-500 leading-relaxed line-clamp-2">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 hover:text-brass-500 w-fit"
        >
          Read article <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
