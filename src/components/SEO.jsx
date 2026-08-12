import { Helmet } from 'react-helmet-async';
import { company } from '../data/company';

export const SITE_URL = 'https://absenterprisespune.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const LOGO_URL = `${SITE_URL}/logo-mark.png`;

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  keywords = [],
  schema = null,
  type = 'website',
  noindex = false,
}) {
  const url = `${SITE_URL}${path}`;
  // Accept either a single schema object or an array — each is rendered as its own
  // <script> tag, which is the safest, most widely-validated way to ship multiple
  // JSON-LD graphs on one page (rather than one script with a bare top-level array).
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="ABS Enterprises" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ABS Enterprises — False Ceiling &amp; Interior Design, Pune" />
      <meta property="og:site_name" content="ABS Enterprises" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((s, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

/* ---------------------------------------------------------------------- */
/*  Structured data builders                                              */
/* ---------------------------------------------------------------------- */

// Local Business / Home & Construction Business schema — the entity every other
// schema on the site references via @id, so it only needs to be defined once.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: 'ABS Enterprises',
  legalName: 'ABS Enterprises',
  description:
    'False ceiling, POP work, drywall partitions and interior design contractor serving Pune, Maharashtra.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: DEFAULT_IMAGE,
  telephone: company.phoneTel.replace('tel:', ''),
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.line,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.pincode,
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'City',
    name: 'Pune',
  },
  priceRange: '\u20b9\u20b9',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30',
    },
  ],
};

// Prepends Home automatically — Google's guidance is that breadcrumb trails should
// always originate at the site root.
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path || ''}`,
  })),
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/services#${service.slug}`,
  name: service.title,
  serviceType: service.title,
  description: service.description,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: { '@type': 'City', name: 'Pune' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    areaServed: 'Pune, Maharashtra',
  },
});

// A full catalogue ItemList — placed once on the Services page so search engines can
// see all twelve offerings as a structured group, not just as prose.
export const serviceCatalogueSchema = (services) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ABS Enterprises Service Catalogue',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: serviceSchema(s),
  })),
});

export const blogPostingSchema = (blog) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE_URL}/blog/${blog.slug}#article`,
  headline: blog.title,
  description: blog.metaDescription,
  image: DEFAULT_IMAGE,
  datePublished: blog.publishedDate,
  dateModified: blog.publishedDate,
  articleSection: blog.category,
  keywords: blog.keywords.join(', '),
  wordCount: blog.content.filter((b) => b.type === 'p').reduce((sum, b) => sum + b.text.split(' ').length, 0),
  author: { '@type': 'Organization', name: blog.author, url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'ABS Enterprises',
    logo: { '@type': 'ImageObject', url: LOGO_URL },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${blog.slug}` },
});

// Lets the Blog listing page expose all posts as a structured collection.
export const blogListSchema = (blogs) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ABS Enterprises Blog',
  itemListElement: blogs.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}/blog/${b.slug}`,
    name: b.title,
  })),
});

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'ABS Enterprises',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
};
