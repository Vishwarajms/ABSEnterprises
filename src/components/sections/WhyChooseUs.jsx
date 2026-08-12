import { motion } from 'framer-motion';
import { ShieldCheck, HandCoins, Sparkles, HardHat, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import StatCounter from '../ui/StatCounter';
import { company } from '../../data/company';
import { fadeUp, fadeRight, staggerContainer, viewportOnce } from '../../utils/motion';

const icons = [ShieldCheck, HandCoins, Sparkles, HardHat];

export default function WhyChooseUs() {
  const [feature, ...rest] = company.valueProps;
  const FeatureIcon = icons[0];

  return (
    <section className="section-pad">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Perfection in every step we take"
              description="Each move we make is a measured advance toward excellence, backed by a written guarantee on every project."
            />
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 pt-8 border-t border-ink-800/10">
              {company.stats.map((s, i) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Feature strip — the first value prop gets special treatment */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative overflow-hidden rounded-[1.75rem] bg-ink-800 p-8 md:p-10 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="absolute inset-0 grid-veil opacity-[0.07]" />
              <div
                className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-brass-400/10 blur-3xl"
                aria-hidden
              />
              <span className="relative shrink-0 grid place-items-center w-16 h-16 rounded-2xl bg-brass-400 text-ink-900">
                <FeatureIcon size={26} />
              </span>
              <div className="relative flex-1">
                <p className="kicker-number text-brass-300/80 mb-2">01 &middot; The foundation</p>
                <h3 className="font-display text-2xl text-plaster-100">{feature.title}</h3>
                <p className="mt-2 text-plaster-100/60 leading-relaxed max-w-md">{feature.description}</p>
              </div>
              <ArrowUpRight size={22} className="relative hidden sm:block text-plaster-100/25 shrink-0" />
            </motion.div>

            {/* Remaining value props as a compact, unified list rather than repeated cards */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid sm:grid-cols-3 gap-5"
            >
              {rest.map((v, i) => {
                const Icon = icons[i + 1];
                return (
                  <motion.div
                    key={v.title}
                    variants={fadeUp}
                    custom={i * 0.1}
                    className="card card-hover p-6 flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <Icon size={20} className="text-brass-500" />
                      <span className="kicker-number">{String(i + 2).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-lg mt-6 text-ink-800">{v.title}</h3>
                    <p className="mt-2 text-sm text-ink-500 leading-relaxed">{v.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
