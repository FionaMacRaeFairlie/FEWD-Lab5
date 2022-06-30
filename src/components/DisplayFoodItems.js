import React from 'react';
import Item from "./Item";
import {items} from'../data/Data';

const DisplayFoodItems = () => {
   return (
       <ul>
           {items.map((food) => {
               return (
                <li key={food.id} > <Item item={food} /></li>
               )
           })}
       </ul>
   );
};
export default DisplayFoodItems;