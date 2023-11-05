import React from 'react';
import { Hero } from '../components/HERO/Hero';
import { Categories } from '../components/CATEGORIES/Categories';
import { NewProduct } from '../components/NEWPRODUCT/NewProduct';
import { Newsletter } from '../components/NEWSLETTER/Newsletter';

export const Home = () => {
  return (
    <div>
       <Hero />
       <Categories />
       <NewProduct />
       <Newsletter />
    </div>
  )
}
