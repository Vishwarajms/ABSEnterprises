import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../../constants/nav';
import { company } from '../../data/company';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome || open;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brass-400 z-[60] origin-left"
        style={{ scaleX: progress }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? 'bg-plaster-100/85 backdrop-blur-xl border-b border-ink-800/[0.06] shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between h-24">
          <Link to="/" className="flex items-center group">
            <img
              src="/ABS_Logo-2.png"
              alt="ABS Enterprises Logo"
              className="h-28 w-auto object-contain drop-shadow-md"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      solid ? 'text-ink-600 hover:text-ink-800' : 'text-plaster-100/80 hover:text-plaster-100'
                    } ${isActive ? (solid ? '!text-ink-800' : '!text-plaster-100') : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className={`absolute left-4 right-4 -bottom-0.5 h-[2px] ${
                            solid ? 'bg-brass-400' : 'bg-plaster-100'
                          }`}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={company.phoneTel}
              className={solid ? 'btn-primary' : 'btn-accent'}
              aria-label={`Call ABS Enterprises at ${company.phoneDisplay}`}
            >
              <Phone size={15} strokeWidth={2.25} />
              Call Now
            </a>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg ${solid ? 'text-ink-800' : 'text-plaster-100'}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden bg-plaster-100 border-t border-ink-800/[0.06]"
            >
              <ul className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `block px-3 py-3 rounded-xl text-base font-medium ${
                          isActive ? 'bg-ink-800 text-plaster-100' : 'text-ink-700 hover:bg-ink-800/5'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-2">
                  <a href={company.phoneTel} className="btn-accent w-full">
                    <Phone size={15} /> Call Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
