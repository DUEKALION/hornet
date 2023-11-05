import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/signIn.css";

export const Sign_in = () => {

  const imgLink = 'https://www.pexels.com/photo/stylish-brown-leather-boots-on-sofa-4637874/'
  return (
    <div className="sign__in">

        <img src="https://media.istockphoto.com/id/695940250/photo/leather-cowboy-shoes.webp?s=2048x2048&w=is&k=20&c=TxtZtF-xJys5Av0hWa5DFpEe5InXa3rFyP4-r9pxa44="
          alt="sign_in_shoe"
          className='sign__in--pg1-img'
        />
      <div className="sign__in--pg2">

        <div className='sign__in--pg2-header'>
          <h1> Hornet </h1>
          <p> Welcome back! </p>
        </div>

        <div className='sign__in--pg2-body'>

          <form className="sign__in--pg2-form">

            <label htmlFor='email'> Email </label>
            <input type="email"
                   className='sign__in--pg2-form-input email'
            />

            <label htmlFor="password"> Password </label>
            <input type="password" 
                   className="sign__in--pg2-form-input password"
                   
            />

            <div className='remember__me'>
              <input type="checkbox" 
                     className='sign__in--pg2-form-input checkbox'
              />
              <label htmlFor="checkbox"> Remember me</label>

              <Link to="/forgot_password">Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}
