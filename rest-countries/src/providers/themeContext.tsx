"use client";
import { useContext, createContext, useState, ReactNode } from "react";

interface ThemeContext {
  theme: string;
  toggleTheme: () => void;
}
const defaultContextValue: ThemeContext = {
  theme: "light",
  toggleTheme: () => {},
};
const ThemeContext = createContext<ThemeContext>(defaultContextValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
