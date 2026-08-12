import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { company } from "../../data/company";
import { services } from "../../data/services";
import { navLinks } from "../../constants/nav";

export default function Footer() {
  const year = new Date().getFullYear();
  const featured = services.slice(0, 6);

  return (
    <footer className="relative overflow-hidden bg-ink-800 text-plaster-100/80">
      {/* Background */}
      <div className="absolute inset-0 grid-veil opacity-[0.06]" />
      <div className="noise-veil" />

      {/* Watermark */}
      <span
        className="absolute left-1/2 -bottom-6 -translate-x-1/2 font-display
        text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem]
        text-plaster-100/[0.025] whitespace-nowrap select-none pointer-events-none"
        aria-hidden
      >
        ABS Enterprises
      </span>

      <div className="container relative mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 text-center sm:text-left">
          {/* Company */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-block mb-6">
              <img
                src="./ABS_Logo-2.png"
                alt="ABS Enterprises Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain rounded-xl bg-plaster-100/95 px-3 sm:px-4 py-2 hover:bg-plaster-100 transition-all shadow-soft"
              />
            </Link>

            <p className="text-sm leading-relaxed max-w-sm">
              {company.tagline}. Every project completed for homes and offices
              across Pune comes with a written guarantee.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">
              {[
                [Facebook, company.social.facebook],
                [Instagram, company.social.instagram],
                [Linkedin, company.social.linkedin],
                [Youtube, company.social.youtube],
              ].map(([Icon, href], i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-plaster-100/15 hover:border-brass-400 hover:text-brass-300 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-plaster-100 mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-brass-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-plaster-100 mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="hover:text-brass-300 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 font-medium text-brass-300 hover:gap-2 transition-all"
                >
                  View all services
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-plaster-100 mb-5">
              Get in Touch
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex justify-center sm:justify-start items-start gap-3">
                <Phone
                  size={18}
                  className="text-brass-300 shrink-0 mt-0.5"
                />
                <a
                  href={company.phoneTel}
                  className="hover:text-brass-300 transition-colors break-all"
                >
                  {company.phoneDisplay}
                </a>
              </li>

              <li className="flex justify-center sm:justify-start items-start gap-3">
                <Mail
                  size={18}
                  className="text-brass-300 shrink-0 mt-0.5"
                />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-brass-300 transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>

              <li className="flex justify-center sm:justify-start items-start gap-3">
                <MapPin
                  size={18}
                  className="text-brass-300 shrink-0 mt-0.5"
                />
                <span>{company.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-plaster-100/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-plaster-100/50">
          <p>&copy; {year} ABS Enterprises. All rights reserved.</p>

          <p>
            Designed by{" "}
            <span className="text-brass-300 font-medium">V.M. Sudrik</span>
          </p>
        </div>
      </div>
    </footer>
  );
}