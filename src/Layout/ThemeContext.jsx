import { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider component for the theme context
export const ThemeProvider = ({ children }) => {
  // State to manage the theme, initializing with the value from localStorage if available
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('isDarkMode');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      localStorage;
      return newMode;
    });
  };

  // Effect to update theme preference in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Provide the current theme and the function to toggle it
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily access the theme context in functional components
export const useTheme = () => {
  return useContext(ThemeContext);
};
