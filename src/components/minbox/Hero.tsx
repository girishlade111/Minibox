'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

function BrowserMockup({
  className = '',
  style = {},
  delay = 0,
}: {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 + delay, ease: 'easeOut' }}
      className={`relative bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden ${className}`}
      style={style}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-4 flex-1 h-6 bg-gray-200 rounded-md" />
      </div>
      {/* Content Placeholder */}
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="h-4 bg-gray-100 rounded w-1/2" />
        <div className="h-32 bg-gray-50 rounded-lg border border-gray-100" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-16 bg-gray-100 rounded-lg" />
          <div className="h-16 bg-gray-100 rounded-lg" />
          <div className="h-16 bg-gray-100 rounded-lg" />
        </div>
        <div className="h-4 bg-gray-100 rounded w-2/3" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200">
              ✦ Modern Minimal UI Kit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.05] tracking-tight"
          >
            Modern minimal webflow
            <br />
            <span className="text-gray-400">UI kit for saas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Beautifully crafted minimal UI kit designed specifically for SaaS
            businesses with modern minimal style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg shadow-black/10"
            >
              Explore pages
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-black bg-white border-2 border-gray-200 rounded-full hover:border-black transition-colors duration-200"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* 3D Mockup Section */}
        <div className="relative flex items-center justify-center" style={{ perspective: '2000px' }}>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="flex items-center justify-center gap-0"
          >
            {/* Left Mockup */}
            <motion.div
              className="hidden md:block w-72 lg:w-80"
              style={{
                transform: 'rotateY(12deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <BrowserMockup delay={0.6} />
            </motion.div>

            {/* Center Mockup */}
            <motion.div
              className="w-80 lg:w-96 z-10 -mx-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <BrowserMockup delay={0.4} />
            </motion.div>

            {/* Right Mockup */}
            <motion.div
              className="hidden md:block w-72 lg:w-80"
              style={{
                transform: 'rotateY(-12deg) rotateX(5deg)',
                transformStyle: 'preserve-3d',
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <BrowserMockup delay={0.8} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcfcfc] to-transparent" />
    </section>
  );
}
