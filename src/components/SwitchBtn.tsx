import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import { MaterialUISwitch } from "./MaterialUISwitch";
import { useTheme } from "../context/ThemeContext";

export function SwitchBtn() {
  const { mode, toggleTheme } = useTheme();

  return (
    <FormControl>
      <FormLabel>Тема</FormLabel>
      <FormControlLabel
        control={
          <MaterialUISwitch checked={mode === "dark"} onChange={toggleTheme} />
        }
        label="Переключить тему"
      />
    </FormControl>
  );
}
