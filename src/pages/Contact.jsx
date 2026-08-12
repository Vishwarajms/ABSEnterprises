import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import SEO, { organizationSchema, breadcrumbSchema } from '../components/SEO';
import Breadcrumb from '../components/ui/Breadcrumb';
import ContactForm from '../components/sections/ContactForm';
import ContactInfo from '../components/sections/ContactInfo';
import FAQ from '../components/sections/FAQ';
import { fadeUp, staggerContainer } from '../utils/motion';
import { company } from '../data/company';

const contactFaqs = [
  {
    q: 'How quickly will I get a response after submitting the form?',
    a: 'We aim to respond within one working day with either a call or an email to schedule a site visit.',
  },
  {
    q: 'Is the site visit and quote free?',
    a: 'Yes, the initial consultation and written quote are free, with no obligation to proceed.',
  },
  {
    q: 'Can I reach you directly on WhatsApp instead of the form?',
    a: 'Yes, tap the WhatsApp button on this page or call us directly during working hours.',
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact ABS Enterprises | Free Quote, Pune"
        description="Get a free, written quote for false ceiling, POP, drywall partition or interior design work in Pune. Call, WhatsApp or fill out the form."
        path="/contact"
        keywords={['contact ABS Enterprises', 'false ceiling quote Pune', 'interior contractor contact']}
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Contact', path: '/contact' }])]}
      />

      <section className="relative bg-ink-800 pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-veil opacity-[0.06]" />
        <div className="noise-veil" />
        <motion.div
          className="absolute top-0 right-0 w-[26rem] h-[26rem] rounded-full bg-brass-400/[0.1] blur-[100px]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container relative">
          <Breadcrumb items={[{ name: 'Contact' }]} />
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow text-brass-300 mt-8 mb-5">
            <span className="w-6 h-px bg-brass-400" /> Get In Touch
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            animate="show"
            className="font-display text-4xl md:text-5xl text-plaster-100 max-w-2xl leading-tight"
          >
            Let&rsquo;s talk about your space
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={0.16}
            initial="hidden"
            animate="show"
            className="mt-6 text-plaster-100/65 max-w-xl leading-relaxed"
          >
            Fill out the form, call us directly, or drop by the office. Every enquiry gets a
            written quote before any work begins.
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { icon: Phone, label: company.phoneDisplay, href: company.phoneTel },
              { icon: Mail, label: company.email, href: `mailto:${company.email}` },
              { icon: MessageCircle, label: 'WhatsApp Chat', href: company.whatsapp },
            ].map((c) => (
              <motion.a
                key={c.label}
                variants={fadeUp}
                href={c.href}
                className="flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full border border-plaster-100/15 text-plaster-100/75 text-sm hover:border-brass-400/50 hover:text-brass-200 transition-colors duration-300"
              >
                <c.icon size={15} /> {c.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </section>

      <FAQ faqs={contactFaqs} eyebrow="FAQ" title="Before you reach out" />
    </>
  );
}
