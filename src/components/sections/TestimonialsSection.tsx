import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = t.testimonials.items.map((item, index) => ({
    ...item,
    image: [
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    ][index],
    color: ['#A01F5D', '#EE2024', '#64B232'][index]
  }));

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
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
                background: 'linear-gradient(135deg, #8377B9, #5E56A7, #A01F5D)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.testimonials.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t.testimonials.subtitle}
            </motion.p>
          </motion.div>

          {/* Main Testimonial */}
          <motion.div variants={itemVariants} className="relative mb-12">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <motion.img
                      key={currentTestimonial}
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                      key={`content-${currentTestimonial}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Quote 
                        className="w-12 h-12 mb-6"
                        style={{ color: testimonials[currentTestimonial].color }}
                      />
                      
                      <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>

                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 fill-current"
                            style={{ color: testimonials[currentTestimonial].color }}
                          />
                        ))}
                      </div>

                      <div>
                        <p 
                          className="font-bold text-lg"
                          style={{ color: testimonials[currentTestimonial].color }}
                        >
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-3"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'w-8' 
                    : 'hover:scale-125'
                }`}
                style={{ 
                  backgroundColor: index === currentTestimonial 
                    ? testimonials[currentTestimonial].color 
                    : '#e5e7eb'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;