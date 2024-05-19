import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  setDark: () => void;
  setLight: () => void;

}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const setDark = () => {
    setDarkMode(true);
  };
  const setLight = () => {
    setDarkMode(false);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setLight,  setDark}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
