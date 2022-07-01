import { useState, useEffect } from "react";



function useTheme() {
  let userThemeSetting = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDarkTheme, setIsDarkTheme] = useState(userThemeSetting.matches);

  function toggleTheme() {
    setIsDarkTheme((prevValue) => !prevValue);
    applyBodyStyles();
  }

  function applyBodyStyles() {
    // console.log("BODY STYLES CHANGING TO DARK THEME? " + isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? "#141d2f" : "#f6f8ff";
  }

  useEffect(() => {
    applyBodyStyles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkTheme]);

  return [isDarkTheme, toggleTheme];
}

export default useTheme;
