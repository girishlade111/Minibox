'use client';

import Navbar from '@/components/minbox/Navbar';
import Hero from '@/components/minbox/Hero';
import WhatsIncluded from '@/components/minbox/WhatsIncluded';
import GallerySection from '@/components/minbox/GallerySection';
import FooterCta from '@/components/minbox/FooterCta';
import Footer from '@/components/minbox/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatsIncluded />
        <GallerySection />
        <FooterCta />
      </main>
      <Footer />
    </div>
  );
}
