import React, { useContext } from "react";
import ListItem from "./ListItem";
import { userDataContext } from "../contexts/userDataContext";

// Icons
import LocationIcon from "../images/icon-location.svg";
import WebsiteIcon from "../images/icon-website.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import CompanyIcon from "../images/icon-company.svg";

function UserCard() {
  const { userData } = useContext(userDataContext);
  if (!userData) return;
  const date = new Date(userData.created_at);
  console.log(date);
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="user-card">
      <div className="user-card--user">
        <div className="user-card--user-avatar-wrapper">
          <img className="user-card--user-avatar" src={userData.avatar_url} alt="" />
        </div>
        <div className="user-card--user-info">
          <h2 className="user-card--title">{userData.name}</h2>
          <h3 className="user-info--username">@{userData.login}</h3>
          <p className="user-info--joined-date">
            Joined {date.toLocaleDateString("en-US", dateOptions)}
          </p>
        </div>
      </div>

      <div className="user-card--bio">
        <p>
          {/* Putting a default bio here is not used for production purposes (only to match the original design document as a prototype) */}
          {userData.bio || "This profile has no bio"}
        </p>
      </div>

      <div className="user-card--stats">
        <div className="user-repos">
          <p className="user-stat-title">Repos</p>
          <p className="user-stat-number">{userData.public_repos}</p>
        </div>
        <div className="user-followers">
          <p className="user-stat-title">Followers</p>
          <p className="user-stat-number">{userData.followers}</p>
        </div>
        <div className="user-following">
          <p className="user-stat-title">Following</p>
          <p className="user-stat-number">{userData.following}</p>
        </div>
      </div>

      <ul className="user-card--contact">
        <ListItem item={userData.location} icon={LocationIcon} />
        <ListItem item={userData.blog} icon={WebsiteIcon} />
        <ListItem item={userData.twitter_username} icon={TwitterIcon} />
        <ListItem item={userData.company} icon={CompanyIcon} />
      </ul>
    </div>
  );
}

export default UserCard;
