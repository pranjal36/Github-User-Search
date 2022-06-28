import React from "react";

function ListItem(props) {
  return (
    <li className={`user-card--contact-item ${!props.item ? "unavailable" : ""}`}>
      <div className="user-card--contact-icon-wrapper">
        <img className="user-card--contact-icon" src={props.icon} alt="" />
      </div>
      <div className="user-card--contact-text">
        <p>{props.item ? props.item : "Not Available"}</p>
      </div>
    </li>
  );
}

export default ListItem;
