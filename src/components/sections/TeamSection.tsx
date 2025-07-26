import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const TeamSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: t.team.members[0].name,
      position: t.team.members[0].position,
      bio: t.team.members[0].bio,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      color: '#A01F5D'
    },
    {
      name: t.team.members[1].name,
      position: t.team.members[1].position,
      bio: t.team.members[1].bio,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      color: '#EE2024'
    },
    {
      name: t.team.members[2].name,
      position: t.team.members[2].position,
      bio: t.team.members[2].bio,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      color: '#64B232'
    },
    {
      name: t.team.members[3].name,
      position: t.team.members[3].position,
      bio: t.team.members[3].bio,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
      color: '#2B7AC2'
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
    <section id="team" className="py-20 bg-white" ref={ref}>
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
                background: 'linear-gradient(135deg, #64B232, #FBB216, #EE2024)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.team.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t.team.subtitle}
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="relative">
                    <motion.div
                      className="relative h-64 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6 text-center">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      style={{ color: member.color }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-gray-500 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
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

export default TeamSection;