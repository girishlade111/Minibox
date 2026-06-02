'use client';

import { motion } from 'framer-motion';
import { Check, Layers, Layout, Figma } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const figmaFeatures = [
  'Auto layout with constraints',
  'Component variants',
  'Responsive design tokens',
  'Well organized layers',
  'Free Google Fonts',
  'Icon set included',
];

export default function WhatsIncluded() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 mb-4 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/10">
            What&apos;s Included
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Everything you need to
            <br />
            <span className="text-gray-500">build your website</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 - Sections & Components */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Layers className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">70+</h3>
            <p className="text-lg font-medium text-white mb-3">
              Sections & Components
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Well researched layouts, crafted and designed with modern minimal
              aesthetic. Each component is carefully designed to ensure
              consistency and visual harmony.
            </p>
          </motion.div>

          {/* Card 2 - Unique UI Pages */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Layout className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">24+</h3>
            <p className="text-lg font-medium text-white mb-3">
              Unique UI Pages
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Every single page has unique layouts ensuring high performance and
              smooth user experience. Designed with pixel-perfect precision and
              attention to detail.
            </p>
          </motion.div>

          {/* Card 3 - Figma UI Kit */}
          <motion.div
            variants={itemVariants}
            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Figma className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Figma</h3>
            <p className="text-lg font-medium text-white mb-3">
              UI Kit Included
            </p>
            <ul className="space-y-2.5">
              {figmaFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-400">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Floating window overlay */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -right-4 -bottom-4 w-48 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-2xl hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-gray-500 font-medium">
                  Pre-made global components
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 bg-white/5 rounded w-full" />
                <div className="h-2 bg-white/5 rounded w-3/4" />
                <div className="h-2 bg-white/5 rounded w-5/6" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
