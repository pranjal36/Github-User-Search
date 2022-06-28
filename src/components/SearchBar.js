import React, { useContext } from "react";
import { userDataContext } from "../contexts/userDataContext";
import SearchIcon from "../images/icon-search.svg";

function SearchBar() {
  const [inputText, setInputText] = React.useState("");
  const { error, clearError, fetchUserData } = useContext(userDataContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputText(value);
    clearError();
  }

  function handleSubmit(e) {
    // console.log(e);
    e.preventDefault();
    fetchUserData(inputText);
    setInputText("");
  }

  return (
    <form className="user-search-bar">
      <img className="user-search-bar--icon" src={SearchIcon} alt="" />
      <input
        className="user-search-bar--input"
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder={!error ? "Search GitHub username…" : ""}
        maxLength={39} /* Max character length for github username */
      />
      <button onClick={handleSubmit} className="user-search-bar--button">
        Search
      </button>
      {error && <p className="user-search-bar--no-results">No results</p>}
    </form>
  );
}

export default SearchBar;
