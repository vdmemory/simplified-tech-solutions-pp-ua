import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const BrandsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mock brand logos - in real project these would be actual brand logos
  const brands = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/120x60/A01F5D/FFFFFF?text=TechCorp' },
    { name: 'InnovateLab', logo: 'https://via.placeholder.com/120x60/EE2024/FFFFFF?text=InnovateLab' },
    { name: 'StartupHub', logo: 'https://via.placeholder.com/120x60/FBB216/FFFFFF?text=StartupHub' },
    { name: 'CloudTech', logo: 'https://via.placeholder.com/120x60/64B232/FFFFFF?text=CloudTech' },
    { name: 'SecureNet', logo: 'https://via.placeholder.com/120x60/2B7AC2/FFFFFF?text=SecureNet' },
    { name: 'DataFlow', logo: 'https://via.placeholder.com/120x60/8377B9/FFFFFF?text=DataFlow' },
    { name: 'MobileTech', logo: 'https://via.placeholder.com/120x60/5E56A7/FFFFFF?text=MobileTech' },
    { name: 'WebSolutions', logo: 'https://via.placeholder.com/120x60/A01F5D/FFFFFF?text=WebSolutions' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="brands" className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            >
              {t.brands.title}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              variants={itemVariants}
            >
              {t.brands.subtitle}
            </motion.p>
          </motion.div>

          {/* Brands Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Logos Marquee */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 overflow-hidden"
          >
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full h-8 object-contain filter grayscale opacity-60"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;