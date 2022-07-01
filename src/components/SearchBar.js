import React, { useState, useEffect, useContext} from "react";
import { userDataContext } from "../contexts/userDataContext";
import SearchIcon from "../images/icon-search.svg";
import axios from "axios";
import {Card} from "antd";
import {useSearchParams} from "react-router-dom";


function SearchBar() {
  const [inputText, setInputText] = React.useState("");
  const { error, clearError, fetchUserData } = useContext(userDataContext);
  const [users, setusers] = useState([]);
  const [usermatch, setusermatch] = useState([]);
  const [sp,setSp] = useSearchParams();
  const [flag, setflag] = useState(true);

  useEffect(() => {
    setflag(true);
    const loadusers = async () => {
      const response = await axios.get("https://api.github.com/search/users?"+sp.toString()+"&per_page=10");
      setusers(response.data.items);
      // console.log(response.data.items);
      };
      console.log(window.location.href);
      console.log("click");
      loadusers();
    },[sp]);

  function handleChange(e) {
    const { value } = e.target;
    setInputText(value);
    clearError();
    const nsp =  new URLSearchParams(sp);
    nsp.set('q',value);
    setSp(nsp);
    setusermatch(users);
  }

  function setter(e){
   
    if((e.target.innerHTML).length>0){
      setSp({q: e.target.innerHTML});
      setInputText(e.target.innerHTML);
    }
    fetchUserData(e.target.innerHTML);
    setflag(false);
    console.log("click two");
  }

  function handleSubmit(e) {
    // console.log(e);
    e.preventDefault();
    fetchUserData(inputText);
    setInputText("");
    setflag(false);
  }

  return (
    <form className="user-search-bar">
      <img className="user-search-bar--icon" src={SearchIcon} alt="" />
      <input
        className="user-search-bar--input"
        type="text"
        value={inputText}
        onChange={(e)=> handleChange(e)}
        placeholder={!error ? "Search GitHub username…" : ""}
        maxLength={39}
      />
      <button onClick={handleSubmit} className="user-search-bar--button">
        Search
      </button>
      {error && <p className="user-search-bar--no-results">No results</p>}
      {flag && usermatch && usermatch.map((item,index) => (
        <div className="suggestee" onClick={setter} key={index} style={{marginLeft: "35%", marginTop: "5px"}}>
          <Card style={{midth: "50%"}} title={`${item.login}`}>
          
          </Card>
        </div>
      ))}
    </form>
  );
}

export default SearchBar;
