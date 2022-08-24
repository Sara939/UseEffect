import "./Header.css";
import React from "react";
// import {pagesArray} from "App.js"
import  {Link} from "react-router-dom"


let pagesArray=["game", "home", "about"];


function Header() {
  return (
    <div id="header">
      {
      pagesArray.map(pageName=>
        <Link to={pageName}><button>{pageName}</button></Link>)
      }

    </div>
  );
};

export default Header;
