import React from "react";

const Item = ({ item }) => {
  return (
    <div className="nav-link menu">
     <a >{item.name}</a> 
    </div>
  );
};

export default Item;