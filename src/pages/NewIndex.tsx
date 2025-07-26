import { useEffect } from 'react';
import NewNavbar from '@/components/NewNavbar';
import NewFooter from '@/components/NewFooter';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TeamSection from '@/components/sections/TeamSection';
import BrandsSection from '@/components/sections/BrandsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

const NewIndex = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NewNavbar />

      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="portfolio">
          <PortfolioSection />
        </div>
        
        <div id="team">
          <TeamSection />
        </div>
        
        <div id="brands">
          <BrandsSection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <NewFooter />
    </div>
  );
};

export default NewIndex;