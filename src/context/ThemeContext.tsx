'use client';

import {
  createContext,
  useState,
  useEffect,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from 'react';

import { ChildProps } from '@/types/common';

type ContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext({} as ContextProps);

export const ThemeProvider: FC<ChildProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load the theme from localStorage when the component mounts
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setIsDarkMode(currentTheme === 'night');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('theme-day', isDarkMode);
    document.documentElement.classList.toggle('theme-night', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'night' : 'day');
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
