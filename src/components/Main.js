import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { userDataContext } from "../contexts/userDataContext";

function Main(props) {
  const { userData } = useContext(userDataContext);
  console.log("IS DARK THEME? - " + props.isDarkTheme);
  return (
    <main className={props.isDarkTheme ? "dark-theme" : "light-theme"}>
      <SearchBar isDarkTheme={props.isDarkTheme} />
      {userData && <UserCard isDarkTheme={props.isDarkTheme} />}
    </main>
  );
}

export default Main;
