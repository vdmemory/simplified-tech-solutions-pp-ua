import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const FAQSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const colors = ['#A01F5D', '#EE2024', '#64B232', '#2B7AC2'];

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
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#A01F5D] to-[#EE2024] flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <HelpCircle className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #A01F5D, #EE2024, #FBB216)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.faq.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={itemVariants}
            >
              {t.faq.subtitle}
            </motion.p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div variants={containerVariants} className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown 
                      className="w-5 h-5"
                      style={{ color: colors[index % colors.length] }}
                    />
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div 
                    className="px-6 py-4 border-t"
                    style={{ 
                      borderTopColor: colors[index % colors.length],
                      backgroundColor: `${colors[index % colors.length]}05`
                    }}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.div
              className="inline-block p-6 bg-gradient-to-r from-[#A01F5D]/10 to-[#EE2024]/10 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-700 mb-4">
                Still have questions? We're here to help!
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#A01F5D] to-[#EE2024] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;