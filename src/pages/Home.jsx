import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO, { organizationSchema, faqSchema, websiteSchema } from '../components/SEO';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProcessSteps from '../components/sections/ProcessSteps';
import IndustriesServed from '../components/sections/IndustriesServed';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';
import ServiceCard from '../components/sections/ServiceCard';
import BlogCard from '../components/sections/BlogCard';
import SectionTitle from '../components/ui/SectionTitle';
import ImageReveal from '../components/ui/ImageReveal';
import { fadeLeft, fadeRight, viewportOnce } from '../utils/motion';
import { company } from '../data/company';
import { services } from '../data/services';
import { blogs } from '../data/blogs';

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const latestBlogs = blogs.slice(0, 3);

  return (
    <>
      <SEO
        title="ABS Enterprises | False Ceiling &amp; Interior Design Contractor, Pune"
        description="POP ceilings, gypsum false ceilings, drywall partitions and complete interior design for homes and offices in Pune. Written guarantee on every project."
        path="/"
        keywords={['false ceiling Pune', 'POP ceiling contractor', 'interior design Pune', 'drywall partition Pune']}
        schema={[organizationSchema, websiteSchema, faqSchema(company.faqsHome)]}
      />

      <Hero />

      {/* About preview */}
      <section className="section-pad">
        <div className="container grid lg:grid-cols-12 gap-14 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5 relative"
          >
            <ImageReveal className="rounded-[2rem] aspect-square border border-ink-800/[0.06] overflow-hidden" delay={0.1}>
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" alt="About ABS Enterprises Interior" className="w-full h-full object-cover" />
            </ImageReveal>
            <div className="absolute -bottom-8 -right-6 card px-6 py-5 shadow-lift hidden sm:block">
              <p className="font-display text-3xl text-ink-800">10+</p>
              <p className="text-xs text-ink-500 mt-1">Years shaping<br />Pune interiors</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <SectionTitle
              eyebrow="About ABS Enterprises"
              title="A Pune contractor built around a written guarantee"
              description="We specialise in false ceilings, POP work, drywall partitions and complete interiors — handled by one accountable team from first site visit to final handover."
            />
            <ul className="mt-6 space-y-3">
              {['Warranty on every project', 'Full responsibility from start to finish', 'Premium craftsmanship, checked room by room', 'Strict on-site safety standards'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-600">
                  <CheckCircle2 size={16} className="text-brass-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline mt-8">
              More About Us <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-pad bg-plaster-200 overflow-hidden relative border-t border-b border-plaster-300/30">
        <div className="container relative grid md:grid-cols-12 gap-8 items-center max-w-5xl">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="md:col-span-4 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brass-400/30 shadow-lift">
              <img
                src="./founder.png"
                alt="Amit Patil - Founder of ABS Enterprises"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="md:col-span-8 space-y-4 text-center md:text-left"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brass-600">Founder's Vision</span>
            <blockquote className="font-display text-lg md:text-xl text-ink-800 italic leading-relaxed">
              &ldquo;{company.founder.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-ink-900 text-base">{company.founder.name}</p>
              <p className="text-ink-500 text-xs mt-0.5">{company.founder.role}, ABS Enterprises</p>
            </div>
          </motion.div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Featured services */}
      <section className="section-pad bg-plaster-200">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="What We Do"
              title="Ceiling and interior services, done properly"
              description="A full range of ceiling, partition and interior services for homes and commercial spaces."
            />
            <Link to="/services" className="btn-outline shrink-0">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((s, i) => (
              <div key={s.slug} className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <ServiceCard service={s} index={i} large={i === 0} className="h-full min-h-[18rem]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <IndustriesServed />
      <Gallery compact />
      <Testimonials />
      <FAQ faqs={company.faqsHome} eyebrow="FAQ" title="Common questions before you start" />

      {/* Latest blogs */}
      <section className="section-pad">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="From the Journal" title="Latest guides and insights" />
            <Link to="/blog" className="btn-outline shrink-0">
              All Articles <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {latestBlogs.map((b, i) => (
              <BlogCard key={b.slug} blog={b} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-pad">
        <CTABanner />
      </div>
    </>
  );
}
