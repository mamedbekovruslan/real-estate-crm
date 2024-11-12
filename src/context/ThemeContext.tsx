// ThemeContext.ts
import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  toggleTheme: () => {
    throw new Error("toggleTheme is not implemented");
  },
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
