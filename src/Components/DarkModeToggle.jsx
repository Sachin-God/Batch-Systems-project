import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <button onClick={toggleDarkMode} className="px-2 py-2 md:px-4 md:py-2 text-sm md:text-lg bg-black text-white font-semibold rounded-md border border-black hover:text-black hover:bg-transparent transition duration-300 ease-in-out dark:bg-white dark:text-gray-900 dark:border dark:border-black">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  );
};

export default DarkModeToggle;
