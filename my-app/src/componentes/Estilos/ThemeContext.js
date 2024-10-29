// src/componentes/Estilos/ThemeContext.js

import React, { createContext, useState, useContext } from 'react';

// Cria o contexto
const ThemeContext = createContext();

// Provider do tema
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Valor inicial do tema

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode); // Alterna o tema
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook para usar o contexto
export const useTheme = () => {
    return useContext(ThemeContext);
};
