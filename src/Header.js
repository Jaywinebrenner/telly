import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import logo from './media/logoText.png'

function Header() {
  return (
    <div className="header">
      <h1>I am a header</h1>
      <MenuIcon/>
      <img className="header__logoText" src={logo}/>

      
    </div>
  )
}

export default Header
