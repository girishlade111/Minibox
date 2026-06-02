'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const logos = [
  { name: 'Diamond', letter: 'D' },
  { name: 'Loop', letter: 'L' },
  { name: 'Rippling', letter: 'R' },
  { name: 'Arc', letter: 'A' },
  { name: 'Cursor', letter: 'C' },
  { name: 'Vercel', letter: 'V' },
];

export default function FooterCta() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/10">
            For Developers
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Deploy high-concurrency banking infrastructure
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Scale your banking infrastructure with our high-concurrency,
            low-latency architectures.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg shadow-white/10"
            >
              Read the docs
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-8">
              Trusted by leading companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">
                      {logo.letter}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
