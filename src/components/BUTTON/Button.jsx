import React from 'react';
import "./button.css";

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
    <button className='btn__m' style={{ color: bck_color}}>
        {title}
    </button>
  )
}


