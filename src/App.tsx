import React from "react";
import { Box, FormControl, FormLabel, FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "./components/MaterialUISwitch";
import { useTheme } from "./context/ThemeContext";

const App: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <FormControl>
        <FormLabel>Тема</FormLabel>
        <FormControlLabel
          control={
            <MaterialUISwitch
              checked={mode === "dark"}
              onChange={toggleTheme}
            />
          }
          label="Переключить тему"
        />
      </FormControl>
    </Box>
  );
};

export default App;
