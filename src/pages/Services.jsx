import { motion } from 'framer-motion';
import SEO, { organizationSchema, breadcrumbSchema, serviceCatalogueSchema } from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceIndexRow from '../components/sections/ServiceIndexRow';
import ProcessSteps from '../components/sections/ProcessSteps';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';
import { fadeUp, fadeLeft } from '../utils/motion';
import { services } from '../data/services';

const serviceFaqs = [
  {
    q: 'Do you provide a written quote before any work begins?',
    a: 'Yes, every service starts with a site visit and a clear, itemised written quote so you know exactly what you are paying for.',
  },
  {
    q: 'Can services be combined into one project, like a ceiling and a partition together?',
    a: 'Yes. Most of our larger projects combine several services under one team and one timeline, which is usually more efficient than hiring separate contractors.',
  },
  {
    q: 'Do you handle both residential and commercial work?',
    a: 'Yes, our team works on homes, offices, retail spaces and hospitality interiors across Pune.',
  },
  {
    q: 'What warranty applies to your services?',
    a: 'All work carries a written workmanship guarantee, detailed in your project quote before installation begins.',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | POP Ceiling, Gypsum, Drywall &amp; Interiors | ABS Enterprises"
        description="False ceiling, POP work, gypsum board ceilings, drywall partitions, fire-rated systems and complete interior design services for homes and offices in Pune."
        path="/services"
        keywords={['false ceiling services Pune', 'POP ceiling', 'gypsum ceiling', 'drywall partition', 'interior design services']}
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Services', path: '/services' }]), serviceCatalogueSchema(services)]}
      />

      {/* Split hero — headline left, live index preview right, distinct from other page headers */}
      <section className="relative bg-ink-800 pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-veil opacity-[0.06]" />
        <div className="noise-veil" />
        <div className="container relative grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Breadcrumb items={[{ name: 'Services' }]} />
            <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow text-brass-300 mt-8 mb-5">
              <span className="w-6 h-px bg-brass-400" /> What We Do
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              animate="show"
              className="font-display text-4xl md:text-[3.4rem] leading-[1.02] text-plaster-100 max-w-xl"
            >
              Twelve services, <span className="text-brass-300">one</span> accountable team
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.16}
              initial="hidden"
              animate="show"
              className="mt-6 text-plaster-100/60 max-w-md leading-relaxed"
            >
              From a single POP cornice to a full commercial fit-out — every service below is
              priced transparently, in writing, before work begins.
            </motion.p>
          </div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 hidden lg:block rounded-t-2xl border border-b-0 border-plaster-100/10 bg-plaster-100/[0.03] p-6"
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-plaster-100/35 mb-4">Jump to</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="text-sm text-plaster-100/55 hover:text-brass-300 transition-colors truncate block"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionTitle
            eyebrow="Full Catalogue"
            title="Explore each service"
            description="Tap any row to see the full description, benefits and step-by-step process — or get in touch and we'll recommend the right combination for your project."
          />
          <div className="mt-14 border-t border-ink-800/[0.08]">
            {services.map((s, i) => (
              <ServiceIndexRow key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <FAQ faqs={serviceFaqs} eyebrow="FAQ" title="Questions about our services" />

      <div className="section-pad">
        <CTABanner />
      </div>
    </>
  );
}
