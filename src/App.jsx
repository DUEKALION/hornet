import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './app.css'
import { Landing_page } from './pages/Layout_page';
import { About_us } from './pages/About_us';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Product } from './pages/Products';
import { Sign_in } from './pages/Sign_in';
import { Sign_up } from './pages/Sign_up';
import { Search } from "./pages/Search"
import { Whoops404 } from './pages/Whoops404';

const App = () => {
  return (
    <div className='App'>
      <Routes>

        <Route path="/" element={<Landing_page />}>

        <Route index path="/home" element={<Home />} />
          <Route path="about_us" element={<About_us />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="product" element={<Product />}/>
          <Route path="sign_in" element={<Sign_in />}/>
          <Route path="sign_up" element={<Sign_up />}/>
          <Route path="search" element={<Search />} />
        
        <Route path="*" element={<Whoops404 />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App