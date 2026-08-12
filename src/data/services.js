// Service catalogue rewritten from the "Our Services" list on the live Services page.
export const services = [
  {
    slug: 'pop-ceiling',
    title: 'POP Ceiling',
    shortDescription: 'Elegant, customizable POP ceiling designs to enhance your home\u2019s aesthetics.',
    description:
      'Plaster of Paris remains the most versatile ceiling material for Indian homes \u2014 it takes cove lighting, curves and multi-level detailing without the cost of a full gypsum grid. We hand-finish every POP ceiling to a smooth, paint-ready surface and design the lighting layout around how each room is actually used.',
    mode: 'On-site installation',
    duration: '3\u20136 working days per room',
    benefits: [
      'Seamless, joint-free finish',
      'Supports cove and profile lighting',
      'Custom curves and multi-level designs',
      'Cost-effective for large ceiling areas',
    ],
    process: ['Site measurement', 'Design & lighting layout', 'Framing and plastering', 'Sanding, priming, handover'],
    relatedBlogSlug: 'pop-vs-gypsum-false-ceiling-comparison',
  },
  {
    slug: 'design-false-ceiling',
    title: 'Design False Ceiling',
    shortDescription: 'Statement ceiling designs that anchor the visual identity of a room.',
    description:
      'A designed false ceiling is where the ceiling stops being a surface and becomes part of the room\u2019s architecture \u2014 stepped levels, geometric cut-outs and integrated lighting channels that pull a whole interior scheme together.',
    mode: 'On-site installation',
    duration: '5\u201310 working days',
    benefits: ['Layered depth and shadow lines', 'Integrated LED profiles', 'Matches any interior theme', 'Improves room proportions visually'],
    process: ['Concept sketches', 'Client sign-off', 'Structural framing', 'Finishing and lighting fit-out'],
    relatedBlogSlug: 'false-ceiling-lighting-ideas',
  },
  {
    slug: 'drywall-partitions',
    title: 'Drywall Partitions',
    shortDescription: 'Strong, lightweight wall systems for quick and flexible space management.',
    description:
      'Drywall partitions let you reconfigure a floor plan without the mess and time of masonry work. We build them on galvanised steel or wood framing with gypsum board cladding, ready for paint, wallpaper or veneer.',
    mode: 'On-site installation',
    duration: '2\u20135 working days per partition',
    benefits: ['Faster than brick-and-mortar walls', 'Lightweight on existing structures', 'Easy to route electrical and data cabling', 'Clean, dust-light installation'],
    process: ['Layout marking', 'Frame erection', 'Board fixing and jointing', 'Finishing'],
    relatedBlogSlug: 'drywall-partition-guide-offices',
  },
  {
    slug: 'false-ceiling-installations',
    title: 'False Ceiling Installations',
    shortDescription: 'End-to-end false ceiling installation for new builds and renovations.',
    description:
      'From the first site visit to the final touch-up, we manage the complete false ceiling installation \u2014 material selection, framing, board work, electrical coordination and finishing \u2014 under one team and one written quote.',
    mode: 'On-site installation',
    duration: 'Scoped per project',
    benefits: ['Single point of accountability', 'Coordinated with electrical and HVAC work', 'Written guarantee on workmanship', 'Consistent finish across rooms'],
    process: ['Consultation', 'Design finalisation', 'Installation', 'Quality check and handover'],
  },
  {
    slug: 'gypsum-board-false-ceilings',
    title: 'Gypsum Board False Ceilings',
    shortDescription: 'Modern gypsum false ceilings for homes, offices and studios.',
    description:
      'Gypsum board ceilings give you a lighter structure, faster installation and easier future access to wiring and ducting compared to POP \u2014 ideal for offices and larger commercial floors as much as homes.',
    mode: 'On-site installation',
    duration: '4\u20138 working days',
    benefits: ['Lightweight metal grid system', 'Fire and moisture resistant boards available', 'Faster turnaround than POP', 'Easy access panels for maintenance'],
    process: ['Grid layout', 'Framework suspension', 'Board fixing', 'Jointing and finishing'],
    relatedBlogSlug: 'pop-vs-gypsum-false-ceiling-comparison',
  },
  {
    slug: 'gypsum-false-ceilings-pune',
    title: 'Gypsum False Ceilings in Pune',
    shortDescription: 'Localised gypsum ceiling expertise, sized and priced for Pune homes.',
    description:
      'Every Pune building has its own quirks \u2014 slab height, monsoon humidity, society regulations. We\u2019ve installed gypsum ceilings across Hadapsar, Wagholi, Kharadi and Magarpatta long enough to plan around all three before work starts.',
    mode: 'On-site installation',
    duration: '4\u20138 working days',
    benefits: ['Local site experience across Pune societies', 'Humidity-appropriate board selection', 'Familiarity with society work-hour rules', 'Faster material sourcing locally'],
    process: ['Site & society compliance check', 'Design', 'Installation', 'Handover'],
    relatedBlogSlug: 'false-ceiling-cost-guide-pune',
  },
  {
    slug: 'gypsum-wall',
    title: 'Gypsum Wall',
    shortDescription: 'Gypsum board wall systems for partitions, cladding and feature walls.',
    description:
      'Beyond ceilings, gypsum board is an efficient way to build feature walls, wardrobe backs and acoustic cladding \u2014 a smooth, paintable surface on a lightweight frame.',
    mode: 'On-site installation',
    duration: '2\u20134 working days',
    benefits: ['Smooth, paint-ready finish', 'Good acoustic dampening', 'Lightweight framing', 'Quick to install'],
    process: ['Layout', 'Framing', 'Board fixing', 'Finishing'],
  },
  {
    slug: 'pop-work',
    title: 'POP Work',
    shortDescription: 'General POP application \u2014 cornices, mouldings and wall detailing.',
    description:
      'Beyond full ceilings, we take on standalone POP work: cornices, decorative mouldings, arches and wall detailing that adds architectural character without a full renovation.',
    mode: 'On-site installation',
    duration: '1\u20133 working days',
    benefits: ['Detailed moulding and cornice work', 'Repairs and touch-ups', 'Custom arches and niches', 'Matches existing plaster finishes'],
    process: ['Assessment', 'Mixing and application', 'Detailing', 'Finishing'],
  },
  {
    slug: 'baffle-metal-ceiling',
    title: 'Baffle Metal Ceiling',
    shortDescription: 'Linear metal baffle systems for a clean, contemporary commercial look.',
    description:
      'Baffle ceilings use vertical metal fins to conceal services while keeping a room visually open \u2014 a popular choice for offices, retail and F&B spaces that want a modern, industrial finish.',
    mode: 'On-site installation',
    duration: 'Scoped per project',
    benefits: ['Conceals ducting and wiring', 'Excellent acoustic performance', 'Modern, linear aesthetic', 'Low maintenance metal finish'],
    process: ['Layout planning', 'Suspension grid', 'Baffle fixing', 'Final alignment check'],
  },
  {
    slug: 'fire-rated-drywall-partition',
    title: 'Fire Rated Drywall Partition',
    shortDescription: 'Fire-rated partition systems for compliance-driven commercial spaces.',
    description:
      'For offices, server rooms and commercial kitchens where fire compliance is non-negotiable, we install rated drywall partitions using certified board assemblies to the required fire rating.',
    mode: 'On-site installation',
    duration: 'Scoped per project',
    benefits: ['Certified fire-rated assemblies', 'Meets commercial compliance needs', 'Sound insulation benefits', 'Documented for audits'],
    process: ['Compliance requirement review', 'Framing to spec', 'Rated board installation', 'Sign-off documentation'],
    relatedBlogSlug: 'drywall-partition-guide-offices',
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Creative and functional interior designs that transform your living or workspace.',
    description:
      'We extend past the ceiling into full interior planning \u2014 layout, lighting, colour and finishes that work together as one scheme rather than a series of separate decisions.',
    mode: 'Design + execution',
    duration: 'Scoped per project',
    benefits: ['Cohesive design across every room', 'Lighting layout planning', 'Colour and material consultation', 'Single team from concept to finish'],
    process: ['Consultation', 'Concept design', 'Material selection', 'Execution and styling'],
    relatedBlogSlug: 'how-to-choose-false-ceiling-design-for-home',
  },
  {
    slug: 'construction-renovation',
    title: 'Construction and Renovation Projects',
    shortDescription: 'Complete interior solutions from planning to finishing for homes and offices.',
    description:
      'When a space needs more than a ceiling refresh, our team manages the full renovation \u2014 civil work, partitions, ceilings, electrical coordination and finishing \u2014 as one accountable project.',
    mode: 'Full-scope project management',
    duration: 'Scoped per project',
    benefits: ['One team, one written quote', 'Coordinated trades and timelines', 'Transparent cost tracking', 'Guaranteed workmanship'],
    process: ['Planning & costing', 'Civil and structural work', 'Ceilings and partitions', 'Finishing and handover'],
    relatedBlogSlug: 'false-ceiling-cost-guide-pune',
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
