import React from 'react'
import { Newproduct__button } from '../BUTTON/Button';
import "./newitem.css";

export const NewItem = ({newItem}) => {
  return (
    <div className="newItems">

        <div className='newItems__img'
          style={{ backgroundImage: `url(${newItem?.url})`}}
        >

        </div>
        <p className='newItems__title'>{newItem.title}</p>
        <p className='newItems__price'>${newItem.price}</p>

        <Newproduct__button title="Add to Cart" bck_color="#62230D"/>
    </div>
  )
}
