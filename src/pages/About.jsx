import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO, { organizationSchema, breadcrumbSchema, faqSchema } from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import StatCounter from '../components/ui/StatCounter';
import FounderMessage from '../components/sections/FounderMessage';
import MissionVisionGoal from '../components/sections/MissionVisionGoal';
import CompanyJourney from '../components/sections/CompanyJourney';
import Gallery from '../components/sections/Gallery';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import { company } from '../data/company';

const strengths = [
  'Written guarantee on every project',
  'One accountable team from quote to handover',
  'Transparent, itemised pricing',
  'Strict on-site safety standards',
  'Local knowledge of Pune societies and buildings',
  'Clean, dust-managed job sites',
];

export default function About() {
  return (
    <>
      <SEO
        title="About ABS Enterprises | False Ceiling &amp; Interior Contractor, Pune"
        description="Learn about ABS Enterprises, a Pune-based false ceiling and interior design contractor built on written guarantees, transparent pricing and hands-on craftsmanship."
        path="/about"
        keywords={['about ABS Enterprises', 'false ceiling company Pune', 'interior contractor Pune']}
        schema={[organizationSchema, breadcrumbSchema([{ name: 'About', path: '/about' }]), faqSchema(company.faqsAbout)]}
      />

      <section className="relative bg-ink-800 pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 grid-veil opacity-[0.06]" />
        <div className="noise-veil" />
        <div className="container relative">
          <Breadcrumb items={[{ name: 'About' }]} />
          <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end pb-16">
            <div className="lg:col-span-8">
              <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow text-brass-300 mb-5">
                <span className="w-6 h-px bg-brass-400" /> Our Story
              </motion.p>
              <motion.h1
                variants={fadeUp}
                custom={0.08}
                initial="hidden"
                animate="show"
                className="font-display text-4xl md:text-6xl text-plaster-100 leading-[1.03] max-w-2xl"
              >
                Building spaces that inspire, one ceiling at a time
              </motion.h1>
            </div>
            <motion.p
              variants={fadeUp}
              custom={0.16}
              initial="hidden"
              animate="show"
              className="lg:col-span-4 text-plaster-100/55 leading-relaxed lg:pb-2 lg:border-l lg:border-plaster-100/10 lg:pl-8"
            >
              ABS Enterprises is a Pune-based false ceiling and interior design contractor, founded
              on a simple idea: every project should be delivered with the same care as if it were
              the founder&rsquo;s own home.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 border-t border-plaster-100/10"
          >
            {company.stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-8 px-1 md:px-8 ${i > 0 ? 'border-l border-plaster-100/10' : ''} ${i < 2 ? 'border-b md:border-b-0 border-plaster-100/10' : ''}`}
              >
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} index={i} light />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <FounderMessage />
      <MissionVisionGoal />

      {/* Strengths */}
      <section className="section-pad">
        <div className="container grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Our Strengths"
              title="What makes ABS Enterprises different"
              description="Fifteen years of combined site experience distilled into a process clients can rely on."
            />
            <Link to="/services" className="btn-ghost mt-6">
              See everything we do <ArrowRight size={14} />
            </Link>
          </div>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {strengths.map((s) => (
              <motion.div key={s} variants={fadeUp} className="flex items-start gap-3 p-5 rounded-2xl bg-plaster-200">
                <CheckCircle2 size={18} className="text-brass-500 shrink-0 mt-0.5" />
                <span className="text-sm text-ink-700">{s}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CompanyJourney />
      <Gallery compact />
      <FAQ faqs={company.faqsAbout} eyebrow="FAQ" title="Questions about working with us" />

      <div className="section-pad">
        <CTABanner />
      </div>
    </>
  );
}
