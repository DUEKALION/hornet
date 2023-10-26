import React from 'react'
import "./item.css";

export const Item = ({item}) => {
  return (
    <div className='categories__items'>
        <div className='categories__items-image' 
            style={{
                backgroundImage: `url(${item?.url})`
            }}
        >
            
        </div>
        <p className='categories__items-text'>{item.title}</p>

    </div>
  )
}
