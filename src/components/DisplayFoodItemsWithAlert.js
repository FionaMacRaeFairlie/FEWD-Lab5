import React, { useState} from "react";
import Item from "./Item";
import {items} from'../data/Data';

const DisplayFoodItemsWithAlert = () => {
    const [selectedItem,setSelectedItem] = useState({})
    const handleClick= (currentItem) => {
        setSelectedItem(currentItem)
      } 
   return (
    <>
       <ul>
           {items.map((food) => {
               return (
                <li key={food.id} onClick={() => handleClick(food)}>
                <Item item={food} />
                </li>

               )
           })}
       </ul>
       <p>{selectedItem.description}</p>
       <p>{selectedItem.price}</p>
       </>
   );
};


export default DisplayFoodItemsWithAlert;

