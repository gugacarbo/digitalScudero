import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import StyleContext from "./index";
import Themes from "../../Style/Themes";
import GlobalStyle from "../../Style/GlobalStyle";

export default ({ children }) => {
  const [theme, setTheme] = useState(Themes.dark);

  const handleSetTheme = (theme_) => {
    switch (theme_) {
      case "dark":
        setTheme(Themes.dark);
        localStorage.setItem("ds_theme", "dark");
        break;
      case "light":
        setTheme(Themes.light);
        localStorage.setItem("ds_theme", "light");
        break;
      default:
        setTheme(Themes.dark);
        localStorage.setItem("ds_theme", "dark");
        break;
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("ds_theme");
    if (localTheme) {
      handleSetTheme(localTheme);
    } else {
      const prefersColorScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      if (prefersColorScheme.matches) {
        handleSetTheme("dark");
      } else {
        handleSetTheme("light");
      }
    }
  }, []);

  return (
    <StyleContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        
        {children}
      </ThemeProvider>
    </StyleContext.Provider>
  );
};
