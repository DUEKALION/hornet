import React from 'react'
import "./footer.css";
import { Logo } from '../LOGO/Logo'
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";


export const Footer = () => {
  return (
    <div className="footer__container">

        <div className='footer'>

            <div className='footer__handles'>
                <Logo className="footer__logo"/>
                <p className='footer__handles-text'> Make Your Fashion Look More Charming</p>

                <div className='footer__handles-icons'>
                <BsInstagram className="social__icons"/>

                <FiFacebook className="social__icons"/>
                
                <FiTwitter className="social__icons"/>

                <FiLinkedin className="social__icons" />
              
                </div>
            </div>

            <div className='footer--contact'>

              <h3 className="footer__sub-heading"> Company </h3>

              <ul className="footer__sub-list">

                <li className='footer__sub-item'>About us</li>
                <li className='footer__sub-item'>Product </li>
                <li className='footer__sub-item'>Contact</li>
                <li className='footer__sub-item'>Support</li>
              </ul>

            </div>

            <div className='footer--account'>

            <h3 className="footer__sub-heading"> My Account </h3>

                <ul className="footer__sub-list">

                  <li className='footer__sub-item'>Sign in</li>
                  <li className='footer__sub-item'>Sing up </li>
                  <li className='footer__sub-item'>Wishlist</li>
                  <li className='footer__sub-item'>Order Tracking</li>
                </ul>

            </div>

            <div className='footer--policy'>

            <h3 className="footer__sub-heading"> Legal </h3>

                <ul className="footer__sub-list">

                  <li className='footer__sub-item'>Terms & Condition </li>
                  <li className='footer__sub-item'>Privacy Policy</li>
                  
                </ul>

            </div>
        </div>

        <div className="footer__copywrite">
          <p className='footer_ampersand'>&amp; 2023 Hornet</p>
        </div>
    </div>
  )
}
