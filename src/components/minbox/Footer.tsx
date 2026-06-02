'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  Minbox: ['About', 'Blog', 'Careers', 'Press'],
  'Landing Pages': ['Homepage 01', 'Homepage 02', 'Homepage 03', 'Homepage 04'],
  Pages: ['Pricing', 'Contact', 'Features', 'Integrations'],
  Social: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
};

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: <Facebook size={18} />,
  Twitter: <Twitter size={18} />,
  Instagram: <Instagram size={18} />,
  LinkedIn: <Linkedin size={18} />,
};

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-black tracking-tight">
                Minbox
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Modern minimal UI kit designed specifically for SaaS businesses.
            </p>
          </div>

          {/* Minbox Links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Minbox</h4>
            <ul className="space-y-2.5">
              {footerLinks.Minbox.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Landing Pages Links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">
              Landing Pages
            </h4>
            <ul className="space-y-2.5">
              {footerLinks['Landing Pages'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages Links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Pages</h4>
            <ul className="space-y-2.5">
              {footerLinks.Pages.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-black transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Social</h4>
            <div className="flex gap-3">
              {footerLinks.Social.map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center text-gray-500 transition-all duration-200"
                  aria-label={name}
                >
                  {socialIcons[name]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Minbox. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-black transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-black transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
