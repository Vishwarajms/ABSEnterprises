import { motion } from 'framer-motion';
import { company } from '../../data/company';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ABS Enterprises on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] shadow-lift"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.94 9.94 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.49-10-10.01-10zm5.83 14.3c-.25.7-1.45 1.34-2 1.42-.51.08-1.15.11-1.86-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.25-5.04-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.6-.36.8-.36.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13.99 2.08 1.3 2.38 1.45.3.15.48.13.65-.08.18-.2.74-.86.94-1.16.2-.3.4-.24.68-.14.28.1 1.77.83 2.07.98.3.15.5.23.57.35.08.13.08.72-.17 1.42z" />
      </svg>
    </motion.a>
  );
}
