import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <AboutSection />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
}
