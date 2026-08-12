import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, User, Tag, Wrench } from 'lucide-react';
import SEO, { organizationSchema, breadcrumbSchema, faqSchema, blogPostingSchema } from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import BlogCard from '../components/sections/BlogCard';
import CTABanner from '../components/sections/CTABanner';
import { fadeUp, viewportOnce } from '../utils/motion';
import { getBlogBySlug, getRelatedBlogs } from '../data/blogs';
import { getServiceBySlug } from '../data/services';

function slugifyHeading(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function BlogPost() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) return <Navigate to="/blog" replace />;

  const headings = blog.content.filter((b) => b.type === 'h2');
  const related = getRelatedBlogs(blog);
  const relatedService = blog.relatedServiceSlug ? getServiceBySlug(blog.relatedServiceSlug) : null;

  return (
    <>
      <SEO
        title={blog.metaTitle}
        description={blog.metaDescription}
        path={`/blog/${blog.slug}`}
        keywords={blog.keywords}
        type="article"
        schema={[
          organizationSchema,
          breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: blog.title, path: `/blog/${blog.slug}` }]),
          blogPostingSchema(blog),
          faqSchema(blog.faqs),
        ]}
      />

      <article className="pt-40 pb-20">
        <div className="container max-w-3xl">
          <Breadcrumb items={[{ name: 'Blog', path: '/blog' }, { name: blog.title }]} />

          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow mt-8 mb-5">
            <span className="w-6 h-px bg-brass-400" /> {blog.category}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            animate="show"
            className="font-display text-3xl md:text-[2.6rem] leading-tight text-ink-800"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={0.16}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-400 font-mono"
          >
            <span className="flex items-center gap-1.5"><User size={13} /> {blog.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(blog.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {blog.readingTime}</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.24}
            initial="hidden"
            animate="show"
            className="mt-10 aspect-[16/9] rounded-[1.75rem] relative overflow-hidden"
          >
            <img src={`https://image.pollinations.ai/prompt/${encodeURIComponent(blog.coverImageAlt || blog.title)}?width=1200&height=675&nologo=true`} alt={blog.coverImageAlt || blog.title} className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          {/* Table of contents */}
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            aria-label="Table of contents"
            className="mt-10 card p-6"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brass-500 mb-3">In this article</p>
            <ol className="space-y-2">
              {headings.map((h, i) => (
                <li key={i}>
                  <a href={`#${slugifyHeading(h.text)}`} className="text-sm text-ink-600 hover:text-brass-500">
                    {i + 1}. {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Content */}
          <div className="mt-10 prose-content">
            {blog.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <motion.h2
                    key={i}
                    id={slugifyHeading(block.text)}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="font-display text-2xl text-ink-800 mt-12 mb-4 scroll-mt-28"
                  >
                    {block.text}
                  </motion.h2>
                );
              }
              if (block.type === 'p') {
                return (
                  <p key={i} className="text-ink-600 leading-relaxed mb-5">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="mb-5 space-y-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-ink-600 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brass-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {blog.tags.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-plaster-200 text-xs text-ink-600">
                <Tag size={11} /> {t}
              </span>
            ))}
          </div>

          {relatedService && (
            <Link
              to={`/services#${relatedService.slug}`}
              className="mt-8 group flex items-center gap-4 rounded-2xl border border-ink-800/[0.08] bg-plaster-200 p-5 hover:border-brass-400/40 transition-colors duration-300"
            >
              <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-ink-800 text-brass-400">
                <Wrench size={18} />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-mono uppercase tracking-widest text-ink-400">Related Service</span>
                <span className="block font-display text-lg text-ink-800 group-hover:text-brass-500 transition-colors">
                  {relatedService.title}
                </span>
              </span>
            </Link>
          )}

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="font-display text-2xl text-ink-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {blog.faqs.map((f, i) => (
                <div key={i} className="card p-6">
                  <h3 className="font-display font-medium text-base text-ink-800">{f.q}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-plaster-200">
          <div className="container">
            <h2 className="font-display text-2xl text-ink-800 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((b, i) => (
                <BlogCard key={b.slug} blog={b} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="section-pad">
        <CTABanner />
      </div>
    </>
  );
}
