import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import {configCompany} from "@/data/configCompany.ts";
import olx from '../assets/olx.png';
import prom from '../assets/prom.png';
// import whatsapp from '../assets/whatsapp.png';
import insa from '../assets/insta.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import logo from "@/assets/logo.png";

const NewFooter = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    { icon: facebook, href: configCompany.facebook, color: '#A01F5D' },
    // { icon: whatsapp, href: configCompany.whatsapp, color: '#EE2024' },
    { icon: linkedin, href: configCompany.linkedin, color: '#2B7AC2' },
    { icon: insa, href: configCompany.instagram, color: '#FBB216' },
    { icon: olx, href: configCompany.olx, color: '#64B232' },
    { icon: prom, href: configCompany.prom, color: '#FF4500' },
  ];

  const quickLinks = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.team, id: 'team' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 text-center">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="logo company" className={`h-11`} />
              <span className="text-xl font-bold"> {configCompany.name}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {language === 'en'
                  ? configCompany.infoEng
                  : configCompany.info
              }
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  // style={{ backgroundColor: social.color }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                      src={social.icon}
                      className={`w-5 h-5 max-w-5xl ${social.color} transition-all duration-300`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">
              {language === 'en' ? 'Quick Links' : 'Швидкі посилання'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-[#FBB216] transition-colors duration-200 hover:translate-x-1 transform inline-block cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">
              {language === 'en' ? 'Contact Info' : 'Контактна інформація'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#A01F5D] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{
                    language === 'en'
                        ? configCompany.addressEng
                        : configCompany.address
                }</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#EE2024] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{
                      configCompany.phone
                }</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#64B232] flex-shrink-0" />
                <span className="text-gray-300 text-sm">{
                        configCompany.email
                }</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {language === 'en'
                ? `© 2025 ${configCompany.name}. All rights reserved.`
                : `© 2025 ${configCompany.name}. Всі права захищені.`
            }
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default NewFooter;