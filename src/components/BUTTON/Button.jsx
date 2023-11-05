import React from 'react';
import "./button.css";
import { BsPlus } from "react-icons/bs"

export const Button__small = ({title, bck_color}) => {

  const styles = {
    backgroundColor: bck_color
  }
  return (
    <button className='btn__s' style={ styles }>
        {title}
    </button>
  )
}

export const Button__medium = ({title, bck_color}) => {
  return (
    <button className='btn__m' style={{ backgroundColor: bck_color}}>
        {title}
    </button>
  )
}

export const Newproduct__button = ({ title, bck_color }) => {

  return (
    <button className="btn__np" style={{ backgroundColor: bck_color}}>
      <BsPlus className='BsPlus'/>
     <p className="btn__np-title">{title}</p>
    </button>
  )
}

export const Customized_button = ({ icon, height, text, width }) => {

  return (
    <button className="custom__btn"
      style={{
        height: `${height}`,
        width: `${width}`
      }}
    >
      <span className='custom__btn-icon'>{icon}</span>
      <span className='custom__btn-width'>{text}</span>
    </button>
  )
}


