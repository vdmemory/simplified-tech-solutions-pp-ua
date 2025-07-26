import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, value: '150+', label: t.about.stats.projects, color: '#A01F5D' },
    { icon: Users, value: '50+', label: t.about.stats.clients, color: '#EE2024' },
    { icon: Clock, value: '8+', label: t.about.stats.experience, color: '#64B232' },
    { icon: Star, value: '98%', label: t.about.stats.satisfaction, color: '#2B7AC2' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #A01F5D, #EE2024, #FBB216)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.about.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t.about.subtitle}
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Description */}
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                variants={itemVariants}
              >
                {t.about.description}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {['Innovation', 'Quality', 'Support', 'Results'].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: stats[index]?.color }}
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Team working"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#A01F5D]/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: stat.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold mb-2"
                  style={{ color: stat.color }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;