// src/contexts/ThemeContext.js
import React, { createContext, useState, useContext } from "react";

// Crie o contexto do tema
const ThemeContext = createContext();

// Crie um hook para facilitar o uso do contexto
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
