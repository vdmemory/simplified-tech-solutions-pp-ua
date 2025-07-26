import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage.ts";

const HeroSection = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
    <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
      <div className="absolute inset-0 bg-black w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
      </div>

      <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
            <motion.h1 className="banner-title text-white" variants={itemVariants}>{t.hero.title}</motion.h1>
            <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
              {t.hero.subtitle}
            </motion.p>
            <motion.p className="banner-subtitle text-gray-200 mt-4 sm:mt-6" variants={itemVariants}>
              {t.hero.description}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
              {/* Styled as a button but using an anchor tag for project navigation */}
              <button
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('portfolio');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Using the Button component from shadcn but with custom styling to match the explore button */}
              <button
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
              >
                {t.hero.ctaSecondary}
                <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>

    <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
      <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
        <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
            <Cpu className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">{t.hero.items[0].title}</h3>
          <p className="text-gray-600 text-xs md:text-sm">{t.hero.items[0].description}</p>
        </motion.div>

        <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
            <Code className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">{t.hero.items[1].title}</h3>
          <p className="text-gray-600 text-xs md:text-sm">{t.hero.items[1].description}</p>
        </motion.div>

        <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
            <Layers className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">{t.hero.items[2].title}</h3>
          <p className="text-gray-600 text-xs md:text-sm">{t.hero.items[2].description}</p>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>;
};

export default HeroSection;
