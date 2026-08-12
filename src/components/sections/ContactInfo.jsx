import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';
import { company } from '../../data/company';

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="card p-8"
      >
        <h2 className="font-display text-xl text-ink-800">Office Details</h2>
        <ul className="mt-6 space-y-5 text-sm">
          <li className="flex gap-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-800 text-brass-400 shrink-0">
              <MapPin size={17} />
            </span>
            <div>
              <p className="font-medium text-ink-800">Address</p>
              <p className="text-ink-500 mt-0.5">{company.address.full}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-800 text-brass-400 shrink-0">
              <Phone size={17} />
            </span>
            <div>
              <p className="font-medium text-ink-800">Phone</p>
              <a href={company.phoneTel} className="text-ink-500 hover:text-brass-500 mt-0.5 block">
                {company.phoneDisplay}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-800 text-brass-400 shrink-0">
              <Mail size={17} />
            </span>
            <div>
              <p className="font-medium text-ink-800">Email</p>
              <a href={`mailto:${company.email}`} className="text-ink-500 hover:text-brass-500 mt-0.5 block">
                {company.email}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink-800 text-brass-400 shrink-0">
              <Clock size={17} />
            </span>
            <div>
              <p className="font-medium text-ink-800">Working Hours</p>
              {company.hours.map((h) => (
                <p key={h.day} className="text-ink-500 mt-0.5">
                  {h.day}: {h.time}
                </p>
              ))}
            </div>
          </li>
        </ul>
        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 btn-outline w-full"
        >
          <MessageCircle size={15} /> Chat on WhatsApp
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="card overflow-hidden aspect-[4/3]"
      >
        <iframe
          title="ABS Enterprises location map"
          src={company.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
}
