import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const projects = [
    {
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      color: '#A01F5D'
    },
    {
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      color: '#EE2024'
    },
    {
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      color: '#64B232'
    },
    {
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      color: '#2B7AC2'
    },
    {
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Vue.js', 'D3.js', 'Express'],
      color: '#8377B9'
    },
    {
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
      technologies: ['Go', 'Redis', 'MQTT'],
      color: '#5E56A7'
    },
    {
      image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg',
      technologies: ['Flutter', 'Firebase', 'GraphQL'],
      color: '#A01F5D'
    },
    {
      image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      color: '#EE2024'
    }
  ];

  const updatedProjects = projects.map((project, index) => ({
    ...project,
   ...t.portfolio.items[index]
  }));

  const filteredProjects = activeCategory === 0 
    ? updatedProjects
    : updatedProjects.filter(project => project.category === t.portfolio.categories[activeCategory]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
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
                background: 'linear-gradient(135deg, #5E56A7, #8377B9, #2B7AC2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.portfolio.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t.portfolio.subtitle}
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {t.portfolio.categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === index ? "default" : "outline"}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeCategory === index 
                    ? 'bg-[#A01F5D] text-white shadow-lg' 
                    : 'hover:bg-[#A01F5D]/10 hover:border-[#A01F5D]'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeCategory}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <CardContent className="p-6">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: project.color }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: `${project.color}20`,
                            color: project.color
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default PortfolioSection;