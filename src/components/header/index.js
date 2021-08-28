import React from "react";
import "../../styles/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";

const index = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png"
          }
          alt="Google Drive"
        />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userPhoto} alt="User Photo" />
      </div>
    </div>
  );
};

export default index;
