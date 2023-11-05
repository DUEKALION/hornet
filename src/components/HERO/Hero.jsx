import React from 'react'
import { Nav } from '../NAV/Nav';
import "./hero.css";
import { Button__medium } from '../BUTTON/Button';

import image1 from "../../assets/image1.jpg"

export const Hero = () => {
  
  return (
    <div className="hero">

        <div className="Hero__content">

          <div className='Hero__content-1'>
            <h1 className="Hero__content-1-title">Make Your Fashion Look More Charming</h1>
            <p className='Hero__content-1-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>

            <Button__medium title="Shop Now" bck_color="#62230D" className="Hero__content-1-button"  />
          </div>

          <div className='Hero__content-2'>
            <img src={image1} className='image1'/>
          </div>
        </div>
    </div>
  )
}
