import React from 'react';
import "./product.css"

export const Product = ({item}) => {
  
  return (
    <>
    <div className='product'>
        {/* <img src={url} className="product__img" /> */}
        <p className="product__name">{item.title}</p>
    </div>
    </>
  
  )
}
