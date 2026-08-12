import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import ScrollToTop from './components/ui/ScrollToTop';
import Loader from './components/ui/Loader';
import PageTransition from './components/ui/PageTransition';
import useRouteScrollReset from './hooks/useRouteScrollReset';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function AppRoutes() {
  const location = useLocation();
  useRouteScrollReset();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
      <ScrollToTop />
    </HelmetProvider>
  );
}
