import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi"
import { FaBars } from "react-icons/fa"
import { Button__small } from '../BUTTON/Button'
import "./nav.css";
import { Logo } from '../LOGO/Logo';

export const Nav = () => {

  const [toggleNav, setToggleNav] = useState(false);

  
  const handleToggle = () => {
    //console.log("The hamburger is clicked!!!");
    setToggleNav( prevData => !prevData);
  }
  return (
    <nav className="navbar">

      <Logo className="navbar__logo" />

      <div className="navbar__content">
        <Link to="/home" className='navbar--links'>Home</Link>
        <Link to="/about_us" className='navbar--links'>About us</Link>
        <Link to="/product" className='navbar--links'>Product</Link>
        <Link to="/contact" className='navbar--links'>Contact</Link>

        <Link to="/search"> <BiSearchAlt2 className="searchIcon" /> </Link>

        <div className='button__nav'>
         <Link to="sign_in"> <Button__small className="btn_borderless btn__1" title="sign in" bck_color="transparent"/></Link>
          {/* <span className='line'></span> */}
         <Link to="sign_up"> <Button__small className="btn_borderless" title="sign up" bck_color="#62230D"/> </Link>
        </div>

      </div>

      {toggleNav ? (<div className="navbar__content2">
        <Link to="/home" className='navbar--links'>Home</Link>
        <Link to="/about_us" className='navbar--links'>About us</Link>
        <Link to="/product" className='navbar--links'>Product</Link>
        <Link to="/contact" className='navbar--links'>Contact</Link>

        <BiSearchAlt2 className="searchIcon" />

        <div className='button__nav'>
          <Button__small className="btn_borderless btn__1" title="sign in" bck_color="transparent"/>
          {/* <span className='line'></span> */}
          <Button__small className="btn_borderless" title="sign up" bck_color="#62230D"/>
        </div>

      </div>) : <></>}

      <FaBars className='bars' onClick={handleToggle}/>
    </nav>
  )
}
