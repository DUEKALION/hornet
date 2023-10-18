import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './app.css'
import { Landing_page } from './pages/Landing_page';
import { About_us } from './pages/About_us';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Sign_in } from './pages/Sign_in';
import { Sign_up } from './pages/Sign_up';
import { Whoops404 } from './pages/Whoops404';

const App = () => {
  return (
    <div className='App'>
      <Routes>

        <Route path="/" element={<Landing_page />}/>
        <Route path="about_us" element={<About_us />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="home" element={<Home />}/>
        <Route path="product" element={<Product />}/>
        <Route path="sign_in" element={<Sign_in />}/>
        <Route path="sign_up" element={<Sign_up />}/>
        <Route path="*" element={<Whoops404 />}/>
      </Routes>
    </div>
  )
}

export default App