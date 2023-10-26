import React from 'react';
import "./newproduct.css";
import dataset from "../../assets/data2.json";
import { NewItem } from "../NEWITEM/NewItem"

export const NewProduct = () => {
  return (
    <div className='newproduct__container'>
      <h1 className='newproduct__title'>New Product </h1>
      <p className='newproduct__text'>Shop our Trendsetting Fashion collection today</p>

      <div className="newproducts">
        {dataset?.map((newItem) => (
          <NewItem key={newItem.id} newItem={newItem}/>
        ))}
      </div>
    </div>
  )
}
