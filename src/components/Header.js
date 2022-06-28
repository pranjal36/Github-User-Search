import React from "react";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

function Header(props) {
  return (
    <header className={`header ${props.isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <h1 className="header--title">devfinder</h1>
      <div className="header--theme-toggler" onClick={props.toggleTheme}>
        {/* If dark theme, show LIGHT text and sun (light) icon to indicate the option to switch to light theme (or vice versa) */}
        <span>{props.isDarkTheme ? "LIGHT" : "DARK"}</span>
        <img src={props.isDarkTheme ? sunIcon : moonIcon} alt="" />
      </div>
    </header>
  );
}

export default Header;
