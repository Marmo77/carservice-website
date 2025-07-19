import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {motion, AnimatePresence} from 'framer-motion'
import { HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { facebookUrl, GoogleMaps, instagramUrl, phoneNumber} from '../../data/data'
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Hysteresis thresholds
  const SCROLL_ON = 16; // px
  const SCROLL_OFF = 4; // px

  useEffect(() => {
    let lastScrolled = scrolled;
    const handleScroll = () => {
      const y = window.scrollY;
      if (!lastScrolled && y > SCROLL_ON) {
        setScrolled(true);
        lastScrolled = true;
      } else if (lastScrolled && y < SCROLL_OFF) {
        setScrolled(false);
        lastScrolled = false;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [scrolled]);

  const menuItems = [
    ['Strona główna', ""],
    ['Sprzedaż samochodów', "sprzedaz samochodow"],
    ['Serwis', 'serwis'],
    ['V-tech/chip tuning', "chip tuning vtech"],
    ['Autoholowanie', "pomoc drogowa"],
    ['Kontakt', "kontakt"],
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-0 shadow-xl' : 'bg-transparent py-2'}`}>
      {/* Top bar - Updated with gold accents */}
      <div className="bg-gradient-to-r from-primary to-secondary border-b border-border/50">
        <div className="max-w-site mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm">
            <a href={`tel:+48${phoneNumber.replace(/\s/g, '')}`}>
              <div className="flex items-center gap-2 group">
                  <HiOutlinePhone className="text-highlight transition-all group-hover:text-contrast" />
                  <span className="group-hover:text-contrast transition-all">{phoneNumber}</span>
              </div>
            </a>
            <a href={`${GoogleMaps}`} target='_blank'>
              <div className="flex items-center gap-2 group">
                <HiOutlineLocationMarker className="text-highlight transition-all group-hover:text-contrast" />
                <span className="group-hover:text-contrast transition-all">Dojazd do nas</span>
              </div>
            </a>
            </div>
          
          <div className="flex gap-4">
            {/* Social Media Icons */}
            <a href={`${facebookUrl}`} target='_blank' className="p-2 rounded-full bg-surface hover:bg-highlight transition-all group">
              <FaFacebookF className="text-light group-hover:text-primary" />
            </a>
            <a href={`${instagramUrl}`} target='_blank' className="p-2 rounded-full bg-surface hover:bg-highlight transition-all group">
              <FaInstagram className="text-light group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar - Premium with gold accent */}
      <div className={`max-w-site mx-auto px-4 py-3 flex justify-between items-center transition-all ${scrolled ? 'py-3' : 'py-4'}`}>
        {/* Logo with gold accent */}
        <div className="flex items-center">
          <div className="text-2xl font-bold tracking-wider text-contrast font-Lexend uppercase mr-1">
            Twój<span className="text-highlight">Mechanik</span>
          </div>
          <span className="text-xs text-highlight font-light tracking-widest self-end py-[3px]">.pl</span>
        </div>

        {/* Desktop Menu - Gold underline effect */}
        <div className="hidden md:flex items-center gap-8 font-Inter text-sm">
          {menuItems.map((item, i) => (
            <motion.a
              key={i}
              href={`#${item[1].toLowerCase().replace(/\s/g, '-')}`}
              className="relative text-light py-1 px-2"
              whileHover={{ color: '#D4AF37' }}
            >
              {item[0]}
              <motion.div 
                className="absolute bottom-0 left-0 h-px bg-highlight" 
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger - Gold when active */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-surface hover:bg-highlight transition-all"
          >
            {open ? 
              <FiX size={24} className="text-highlight" /> : 
              <FiMenu size={24} className="text-light" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Animated with framer-motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-border"
          >
            <div className="flex flex-col space-y-3 font-Inter text-light text-sm p-4">
              {menuItems.map((item, i) => (
                <a
                  key={i}
                  href={`#${item[1].toLowerCase().replace(/\s/g, '-')}`}
                  className="py-2 px-4 rounded-lg hover:bg-primary/50 hover:text-highlight transition-all border-l-2 border-transparent hover:border-highlight"
                  onClick={() => setOpen(false)}
                >
                  {item[0]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
