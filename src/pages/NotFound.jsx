import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | ABS Enterprises" description="This page could not be found." path="/404" />
      <section className="min-h-[80vh] grid place-items-center pt-20">
        <div className="text-center px-6">
          <p className="font-display text-8xl text-ink-800/10">404</p>
          <h1 className="font-display text-2xl text-ink-800 mt-4">This page went missing during renovation</h1>
          <p className="mt-3 text-ink-500">The page you\u2019re looking for doesn\u2019t exist or has moved.</p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <ArrowLeft size={15} /> Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
