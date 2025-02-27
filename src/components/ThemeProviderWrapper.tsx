// ThemeProviderWrapper.tsx
import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeContext, ThemeMode } from "../context/ThemeContext";

export const ThemeProviderWrapper: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const initialMode = (localStorage.getItem("theme") as ThemeMode) || "light";
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
