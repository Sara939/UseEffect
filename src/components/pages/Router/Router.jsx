import "./Router.css";
import { useState } from 'react';
import About from "../About/About";
import Home from "../Home/Home";
import Game from "../Game/Game";

function Router({pageNumber}) {
    switch(pageNumber){
      case 1:
        return <Game/>
      case 2:
        return <Home/>
      case 3:
        return <About/>
    
  }
  return (
    <div className="router">
      <h1>Router</h1>

    </div>
  );
};

export default Router;
