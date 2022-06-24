import { Button } from "antd";
import { useState, useContext, useCallback, createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const Toolbar = () => {
  return (
    <div>
      <ThemeContent />
    </div>
  );
};
const ThemeContext = createContext(themes.light);

const ThemeContent = () => {
  const theme = useContext(ThemeContext);

  return (
    <Button style={{ background: theme.background, color: theme.foreground }}>
      Theme Context
    </Button>
  );
};

function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  });

  return (
      <ThemeContext.Provider value={themes[theme]}>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default ThemeSwitch;
