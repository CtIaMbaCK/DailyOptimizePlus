import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <AboutSection />
      <Features />
      <Testimonials />
    </div>
  );
}
