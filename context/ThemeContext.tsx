import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<{ darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);  // Initialize as false
  const [hasMounted, setHasMounted] = useState(false);  // Track if component has mounted

  useEffect(() => {
    // Only run on the client side
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    } else if (storedTheme === 'light') {
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    setHasMounted(true);  // Indicate that the component has mounted
  }, []);

  useEffect(() => {
    if (hasMounted) { // Only update after component has mounted
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [darkMode, hasMounted]);

  // Prevent render mismatch by returning null until mounted
  if (!hasMounted) return null;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a ThemeProvider');
  }
  return context;
};
