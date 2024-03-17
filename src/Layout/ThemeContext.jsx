import { createContext, useState, useContext } from 'react';

// Create a context for the theme
export const ThemeContext = createContext();

// Create a provider component for the theme context
export const ThemeProvider = ({ children }) => {
  // State to manage the theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

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
