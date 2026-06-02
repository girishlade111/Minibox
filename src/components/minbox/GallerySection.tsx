'use client';

import { motion } from 'framer-motion';

interface GalleryCardProps {
  title: string;
  subtitle?: string;
  height?: string;
  bgColor?: string;
  delay?: number;
}

function GalleryCard({
  title,
  subtitle,
  height = 'h-64',
  bgColor = 'bg-gray-50',
  delay = 0,
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300 },
      }}
      className="group cursor-pointer"
    >
      <div
        className={`border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
      >
        {/* Browser chrome top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-50 border-b border-gray-100">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="ml-2 flex-1 h-4 bg-gray-200 rounded-sm" />
        </div>
        {/* Content Area */}
        <div className={`${height} ${bgColor} p-4`}>
          <div className="space-y-3">
            <div className="h-3 bg-gray-200 rounded w-2/3" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className={`rounded-lg bg-white border border-gray-100 ${height === 'h-64' ? 'h-28' : height === 'h-80' ? 'h-40' : 'h-32'}`} />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 bg-gray-200 rounded" />
              <div className="h-8 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-2 px-1">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}

interface GallerySubSectionProps {
  title: string;
  subtitle: string;
  cards: { title: string; subtitle?: string; height?: string }[];
  columns?: 2 | 3;
}

function GallerySubSection({
  title,
  subtitle,
  cards,
  columns = 3,
}: GallerySubSectionProps) {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </motion.div>
      <div
        className={`grid grid-cols-1 ${
          columns === 3
            ? 'md:grid-cols-2 lg:grid-cols-3'
            : 'md:grid-cols-2'
        } gap-6`}
      >
        {cards.map((card, i) => (
          <GalleryCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            height={card.height || 'h-64'}
            delay={i * 0.08}
          />
        ))}
      </div>
    </div>
  );
}

const homePages = [
  { title: 'Homepage 01', subtitle: 'Clean & minimal layout' },
  { title: 'Homepage 02', subtitle: 'Feature-rich hero section' },
  { title: 'Homepage 03', subtitle: 'Agency style layout' },
  { title: 'Homepage 04', subtitle: 'Startup focused design' },
  { title: 'Homepage 05', subtitle: 'Product showcase style' },
  { title: 'Homepage 06', subtitle: 'App landing page' },
];

const pricingPages = [
  { title: 'Pricing 01', subtitle: 'Simple pricing table' },
  { title: 'Pricing 02', subtitle: 'Comparison style layout' },
  { title: 'Pricing 03', subtitle: 'Toggle monthly/yearly' },
];

const morePages = [
  { title: 'About Us', subtitle: 'Company story', height: 'h-72' },
  { title: 'Contact', subtitle: 'Get in touch form', height: 'h-64' },
  { title: 'Features', subtitle: 'Feature showcase', height: 'h-80' },
  { title: 'Integrations', subtitle: 'Partner integrations', height: 'h-56' },
  { title: 'Blog', subtitle: 'Article listing', height: 'h-72' },
  { title: 'Blog Post', subtitle: 'Single article', height: 'h-80' },
];

const cmsPages = [
  { title: 'Blog Listing', subtitle: 'CMS powered', height: 'h-72' },
  { title: 'Blog Category', subtitle: 'Filtered posts', height: 'h-64' },
  { title: 'Team Members', subtitle: 'People directory', height: 'h-72' },
];

const accountPages = [
  { title: 'Sign In', subtitle: 'Login page', height: 'h-64' },
  { title: 'Sign Up', subtitle: 'Registration page', height: 'h-64' },
  { title: 'Forgot Password', subtitle: 'Reset password', height: 'h-56' },
  { title: '404 Page', subtitle: 'Error page', height: 'h-48' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 mb-4 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200">
            ✦ Page Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Explore all pages
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Browse through our collection of beautifully crafted pages designed
            for SaaS businesses.
          </p>
        </motion.div>

        {/* Home Pages */}
        <GallerySubSection
          title="Home Pages"
          subtitle="6 unique homepage designs to choose from"
          cards={homePages}
        />

        {/* Pricing Pages */}
        <GallerySubSection
          title="Pricing Pages"
          subtitle="Flexible pricing layouts for your SaaS product"
          cards={pricingPages}
        />

        {/* More Pages */}
        <GallerySubSection
          title="More Pages"
          subtitle="Additional pages for a complete website experience"
          cards={morePages}
        />

        {/* CMS Pages */}
        <GallerySubSection
          title="CMS Pages"
          subtitle="Dynamic content management system pages"
          cards={cmsPages}
        />

        {/* Account Pages */}
        <GallerySubSection
          title="Account Pages"
          subtitle="User account and authentication pages"
          cards={accountPages}
          columns={2}
        />
      </div>
    </section>
  );
}
