import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { useMemo } from "react";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}

export default App;
