import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import logo from './media/logoText.png'
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar"


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ fontSize: 40 }} />
        <img className="header__logoText" src={logo} alt="logo" />
      </div>

      <div className="header__input">
        <input placeholder="Search Videos" type="text" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header
