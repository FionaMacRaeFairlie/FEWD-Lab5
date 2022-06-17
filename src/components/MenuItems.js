import React , {  useState } from "react";
import Item from "./Item";
import FetchData from "./FetchData";
import {items} from'../data/Data';



const MenuItems = () => {
  const [searchField, setSearchField] = useState("coffee");

  const handleClick= (e) => {
   setSearchField(e.target.innerHTML)
   console.log(searchField)
 }
  return (
    <>
      <h2 className="menu">Menu</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 submenu">
            <ul>
              {items.map((item) => (
               <li key={item.id} onClick={handleClick}> <Item item={item} /></li>
               ))}
            </ul>
          </div>
          <div className="col-6">
          <FetchData query={searchField}/>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
export default MenuItems;
