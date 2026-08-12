import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SEO, { organizationSchema, breadcrumbSchema, blogListSchema } from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/sections/BlogCard';
import CTABanner from '../components/sections/CTABanner';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import { blogs } from '../data/blogs';

export default function Blogs() {
  const [featured, ...rest] = blogs;
  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <>
      <SEO
        title="Blog | False Ceiling &amp; Interior Design Guides | ABS Enterprises"
        description="Practical guides on false ceiling design, POP vs gypsum, lighting layouts, drywall partitions and renovation costs in Pune, written by our own site team."
        path="/blog"
        keywords={['false ceiling blog', 'interior design guides Pune', 'POP ceiling tips']}
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Blog', path: '/blog' }]), blogListSchema(blogs)]}
      />

      {/* Light, editorial hero — deliberately breaks from the dark heroes on other pages */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-plaster-200">
        <div className="container relative">
          <Breadcrumb items={[{ name: 'Blog' }]} />
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow mt-8 mb-5">
            <span className="w-6 h-px bg-brass-400" /> The Journal
          </motion.p>
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.h1
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              animate="show"
              className="lg:col-span-8 font-display text-4xl md:text-6xl text-ink-800 leading-[1.02]"
            >
              Practical guides from our own site experience
            </motion.h1>
            <motion.div variants={fadeUp} custom={0.16} initial="hidden" animate="show" className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
              {categories.map((c) => (
                <span key={c} className="px-3.5 py-1.5 rounded-full border border-ink-800/12 text-xs font-medium text-ink-600">
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.p
            variants={fadeUp}
            custom={0.22}
            initial="hidden"
            animate="show"
            className="mt-6 text-ink-500 max-w-xl leading-relaxed"
          >
            No filler, no stock advice — just what we&rsquo;ve learned installing ceilings and
            interiors across Pune, written up so you can plan your own project with confidence.
          </motion.p>
        </div>
      </section>

      <section className="section-pad pt-16">
        <div className="container">
          <SectionTitle eyebrow="Featured" title="Start here" />
          <div className="mt-10">
            <BlogCard blog={featured} featured />
          </div>

          <div className="mt-24">
            <SectionTitle eyebrow="All Articles" title="More guides" />
            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-10 divide-y divide-ink-800/[0.08] border-t border-ink-800/[0.08]"
            >
              {rest.map((b, i) => (
                <motion.article key={b.slug} variants={fadeUp} custom={i * 0.05}>
                  <Link
                    to={`/blog/${b.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-7"
                  >
                    <span className="font-mono text-xs text-ink-300 sm:w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="hidden md:inline-block px-3 py-1 rounded-full bg-plaster-200 text-ink-500 text-xs shrink-0 w-fit">
                      {b.category}
                    </span>
                    <h3 className="flex-1 font-display text-xl text-ink-800 group-hover:text-brass-500 transition-colors duration-300">
                      {b.title}
                    </h3>
                    <span className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-ink-400 shrink-0">
                      <Clock size={12} /> {b.readingTime}
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-ink-400 group-hover:text-brass-500 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-pad">
        <CTABanner />
      </div>
    </>
  );
}
