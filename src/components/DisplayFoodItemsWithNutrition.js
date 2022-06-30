import React, { useState } from "react";
import Item from "./Item";
//import FetchData from "./FetchData";
import FetchNutrition from "./FetchNutrition";

import { items } from "../data/Data";

const DisplayItems = () => {
  const [searchField, setSearchField] = useState("coffee");

  const handleClick = (e) => {
    setSearchField(e.target.innerHTML);
    console.log(searchField);
  };
 // let availableItems= items.filter(food =>{return food.available==="yes"})

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu">
            <h2>Menu</h2>
            <ul class="navbar-nav">
            { items.map((food) => { 
                return (
                  <li key={food.id} class="nav-item" onClick={handleClick}>
                    <Item item={food} />
                  </li>
                )
              })}
               {/* availableItems.map((food) => { 
                return (
                  <li key={food.id} class="nav-item" onClick={handleClick}>
                    <Item item={food} />
                  </li>
                )
              })*/}
             
            </ul>
          </div>
          <div className="col-6">
            <FetchNutrition query={searchField} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default DisplayItems;
