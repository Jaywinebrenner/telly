import React, {useState} from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import logo from './media/logoText.png'
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';


function Header() {

  const [inputSearch, setInputSearch] = useState('');


  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ fontSize: 40 }} />

        <Link to="/">
          <img className="header__logoText" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="header__input">
        <input
          className="header__inputField"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search Videos"
          type="text"
        />
        <Link className="header__inputLinkWrapper" to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header
