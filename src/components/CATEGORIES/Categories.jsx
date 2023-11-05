import React, {useState} from 'react';
import "./categories.css";
import dataset  from "../../assets/data.json"
import { Item } from '../ITEM/Item';

export const Categories = () => {
    const [dataItem, setDataItem] = useState(dataset);
    
  return (
    <div className='categories__container'>
    <h1 className='categories__title'> Categories </h1>
    <p className='categories__text'>
      Our Men's Fashion Selection Has Everything You Need!
    </p>
    <div className='categories'>
       {dataItem.map((item) => (
        <Item key={item.id} item={item} />
       ))}
    </div>
    </div>
  )
}
