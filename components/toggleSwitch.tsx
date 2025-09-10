import React from 'react';
import { SunMedium, Moon } from 'lucide-react';
import { useDarkMode } from '../context/ThemeContext';

function ToggleSwitch() {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-14 h-8 flex items-center rounded-full px-1 transition-colors ${
        darkMode ? 'bg-gray-700' : 'bg-gray-300'
      }`}
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      <div className="w-full flex justify-between items-center z-10 px-1 text-yellow-500 dark:text-white">
        <Moon size={16} />
        <SunMedium size={16} />
      </div>
    </button>
  );
}

export default ToggleSwitch;
