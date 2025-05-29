import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  // Debug için console log
  React.useEffect(() => {
    console.log('ThemeToggle rendered, isDarkMode:', isDarkMode);
  }, [isDarkMode]);

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="toggle-container"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="theme-icon moon" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaSun className="theme-icon sun" />
          </motion.div>
        )}
      </motion.div>
      
      <div className="toggle-bg">
        <motion.div
          className="toggle-slider"
          animate={{ x: isDarkMode ? 24 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
      
      <span className="toggle-label">
        {isDarkMode ? 'Karanlık' : 'Aydınlık'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle; 