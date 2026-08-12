import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../utils/motion';

// Set these in a .env file (see README) — the form degrades gracefully with a clear
// error message if they are not configured, rather than failing silently.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="card p-8"
      noValidate
    >
      <h2 className="font-display text-2xl text-ink-800">Book a Free Consultation</h2>
      <p className="mt-2 text-sm text-ink-500">Tell us about your project. We usually reply within a day.</p>

      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-xs font-medium text-ink-600 mb-2">Name *</label>
          <input
            id="name"
            name="user_name"
            type="text"
            required
            className="w-full rounded-xl border border-ink-800/12 bg-plaster-50 px-4 py-3 text-sm text-ink-800 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
            placeholder="Your full name"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="block text-xs font-medium text-ink-600 mb-2">Phone *</label>
          <input
            id="phone"
            name="user_phone"
            type="tel"
            required
            className="w-full rounded-xl border border-ink-800/12 bg-plaster-50 px-4 py-3 text-sm text-ink-800 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
            placeholder="+91 00000 00000"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-xs font-medium text-ink-600 mb-2">Email *</label>
          <input
            id="email"
            name="user_email"
            type="email"
            required
            className="w-full rounded-xl border border-ink-800/12 bg-plaster-50 px-4 py-3 text-sm text-ink-800 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-xs font-medium text-ink-600 mb-2">What do you need?</label>
          <select
            id="service"
            name="service_interest"
            className="w-full rounded-xl border border-ink-800/12 bg-plaster-50 px-4 py-3 text-sm text-ink-800 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
            defaultValue="POP / False Ceiling"
          >
            <option>POP / False Ceiling</option>
            <option>Drywall Partition</option>
            <option>Interior Design</option>
            <option>Construction / Renovation</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-xs font-medium text-ink-600 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl border border-ink-800/12 bg-plaster-50 px-4 py-3 text-sm text-ink-800 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/20"
            placeholder="Room size, timeline, or anything else that helps us quote accurately"
          />
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full mt-7 disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : <>Send Message <Send size={15} /></>}
      </button>

      {status === 'success' && (
        <p className="mt-4 flex items-center gap-2 text-sm text-green-700">
          <CheckCircle2 size={16} /> Thanks — we\u2019ve received your message and will be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 flex items-center gap-2 text-sm text-clay">
          <AlertCircle size={16} /> Message not sent. Please call {' '}
          <a href="tel:+919767091545" className="underline">+91 97670 91545</a> directly, or check the EmailJS
          configuration in your .env file.
        </p>
      )}
    </motion.form>
  );
}
