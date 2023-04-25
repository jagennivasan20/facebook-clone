import React, { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import {
  Add,
  Flag,
  ExpandMore,
  Forum,
  Home,
  NotificationsOutlined,
  Search,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
const Header = () => {
  const user = useSelector((state) => state.userData.user);

  const [headerOption, setHeaderOption] = useState("home");

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />

        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="header__center">
        <div
          className={`header__option ${
            headerOption === "home" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("home")}
        >
          <Home fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "flag" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("flag")}
        >
          <Flag fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "subs" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("subs")}
        >
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "store" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("store")}
        >
          <StorefrontOutlined fontSize="large" />
        </div>
        <div
          className={`header__option ${
            headerOption === "super" ? "header__option--active" : null
          }`}
          onClick={() => setHeaderOption("super")}
        >
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
