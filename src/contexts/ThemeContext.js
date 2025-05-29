import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Kullanıcının önceki tercihini localStorage'dan al
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Sistem tercihini kontrol et
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Tema değiştiğinde localStorage'a kaydet
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Body'ye tema class'ını ekle
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    
    // CSS custom properties'i güncelle
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--primary-color', '#8b5cf6');
      root.style.setProperty('--secondary-color', '#a855f7');
      root.style.setProperty('--accent-color', '#06b6d4');
      root.style.setProperty('--dark-color', '#0f172a');
      root.style.setProperty('--light-color', '#1e293b');
      root.style.setProperty('--text-primary', '#f8fafc');
      root.style.setProperty('--text-secondary', '#cbd5e1');
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--bg-tertiary', '#334155');
      root.style.setProperty('--border-color', '#475569');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.5)');
    } else {
      root.style.setProperty('--primary-color', '#6366f1');
      root.style.setProperty('--secondary-color', '#8b5cf6');
      root.style.setProperty('--accent-color', '#06b6d4');
      root.style.setProperty('--dark-color', '#0f172a');
      root.style.setProperty('--light-color', '#f8fafc');
      root.style.setProperty('--text-primary', '#1e293b');
      root.style.setProperty('--text-secondary', '#64748b');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--bg-tertiary', '#e2e8f0');
      root.style.setProperty('--border-color', '#e2e8f0');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.1)');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 