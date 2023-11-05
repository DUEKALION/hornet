import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../components/NAV/Nav';
import { Footer } from '../components/FOOTER/Footer'

export const Landing_page = () => {

  const stylez = {
    background: '#2C1001'
  }
  return (
   

    <div className="layout">

      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
