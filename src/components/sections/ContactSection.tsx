import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';
import {configCompany} from "@/data/configCompany.ts";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: language === "ua" ? configCompany.address : configCompany.addressEng,
      color: '#A01F5D'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: configCompany.phone,
      color: '#EE2024'
    },
    {
      icon: Mail,
      label: 'Email',
      value: configCompany.email,
      color: '#64B232'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: t.contact.info.hours,
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

  const actionEmail = `https://formsubmit.co/${configCompany.formEmail}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
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
              {t.contact.title}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {t.contact.subtitle}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <form action={actionEmail} method="POST" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.name}
                        </label>
                        <Input
                          name="name"
                          required
                          className="border-gray-300 focus:border-[#A01F5D] focus:ring-[#A01F5D]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.email}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          required
                          className="border-gray-300 focus:border-[#A01F5D] focus:ring-[#A01F5D]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.subject}
                      </label>
                      <Input
                        name="subject"
                        required
                        className="border-gray-300 focus:border-[#A01F5D] focus:ring-[#A01F5D]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.message}
                      </label>
                      <Textarea
                        name="message"
                        required
                        rows={5}
                        className="border-gray-300 focus:border-[#A01F5D] focus:ring-[#A01F5D]"
                      />
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#A01F5D] to-[#EE2024] hover:from-[#A01F5D]/90 hover:to-[#EE2024]/90 text-white py-3 text-lg font-semibold"
                      >
                          <Send className="mr-2 w-5 h-5" />
                          {t.contact.form.send}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                          style={{ backgroundColor: info.color }}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {info.label}
                          </h3>
                          <p className="text-gray-600">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}


            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;