import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Shield, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      color: '#A01F5D',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    },
    {
      icon: Shield,
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      color: '#EE2024',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    {
      icon: Smartphone,
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      color: '#64B232',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'
    },
    {
      icon: Cloud,
      title: t.services.items[3].title,
      description: t.services.items[3].description,
      color: '#2B7AC2',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
    }
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
    <section id="services" className="py-20 bg-white" ref={ref}>
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
                background: 'linear-gradient(135deg, #2B7AC2, #8377B9, #5E56A7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.services.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t.services.subtitle}
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    />
                    <motion.div
                      className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: service.color }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6">
                    <motion.h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-semibold group/btn"
                      style={{ color: service.color }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;