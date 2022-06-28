import { useState, useEffect } from "react";

function useTheme() {
  let userThemeSetting = window.matchMedia("(prefers-color-scheme: dark)");
  // Set theme based on the prefers-color-scheme value (user preference)
  const [isDarkTheme, setIsDarkTheme] = useState(userThemeSetting.matches);

  function toggleTheme() {
    setIsDarkTheme((prevValue) => !prevValue);
    applyBodyStyles();
  }

  function applyBodyStyles() {
    console.log("BODY STYLES CHANGING TO DARK THEME? " + isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? "#141d2f" : "#f6f8ff";
  }

  useEffect(() => {
    applyBodyStyles();
  }, [isDarkTheme]);

  return [isDarkTheme, toggleTheme];
}

export default useTheme;
