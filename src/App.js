import React from "react";
import MenuItems from "./components/MenuItems";
import "./App.css";
import { items } from "./data/Data.js";



export default function App() {
  return (
    <>
      <MenuItems items={items}/>
    </>
  );
}
