import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
import AuthModal from './AuthModal';
import clsx from 'clsx';

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navlinks = [
    { name: 'Home', link: '/', category: 'normal' },
    { name: 'Campaigns', link: '/campaigns', category: 'normal' },
    { name: 'Register For ReachOut World Day', link: '/register-for-reachout-world-day', category: 'active' },
    { name: 'Rhapsody Subscriptions', link: 'https://rhapsodysubscriptions.org/zone/official', category: 'normal' },
  ];

  const slideInVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Language Dropdown */}
        <select
          className="bg-white border border-btnPrimary text-gray-700 p-2 rounded-full w-60"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          {/* Add more languages as needed */}
        </select>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-medium hover:text-blue-500 transition',
                  isActive ? 'font-bold text-blue-500' : 'text-gray-600',
                  link.category === 'active' && 'text-red-600'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Login/Register Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-300 text-xs font-medium text-[#3a416f] px-4 py-2 rounded-full mx-4"
        >
          LOGIN/REGISTER
        </button>

        {/* Auth Modal */}
        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Mobile Menu Toggle */}
        <FiMenu
          onClick={() => setMenu(true)}
          className="text-3xl cursor-pointer md:hidden"
        />
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={slideInVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.section
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="bg-white absolute top-0 left-0 w-3/4 h-full p-8 flex flex-col gap-8 z-50"
            >
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="text-3xl cursor-pointer mb-8 self-end"
              />
              {navlinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.link}
                    onClick={() => setMenu(false)}
                    className="font-semibold text-blue-900 hover:text-gray-500 transition"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
