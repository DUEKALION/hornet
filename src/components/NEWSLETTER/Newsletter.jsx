import React from 'react';
import "./newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter__container">

     <div className="newsletter">
      <h1 className='newsletter__header'>NewsLetter</h1>
        <p className='newsletter__text'>Subscribe to the latest news trend</p>

        <form className="newsletter__form">
          <input 
          type="email" 
          name="email" 
          className='newsletter__input'
          />
          <button className='btn__subscribe'> Subscribe </button>
        </form>
     </div>
    </div>
  )
}
