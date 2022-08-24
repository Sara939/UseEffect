import "./Router.css";
// import { useState } from 'react';
import About from "../About/About";
import Home from "../Home/Home";
import Game from "../Game/Game";
import NotFound from "../Not-found/Not-found";
import {Routes, Route} from "react-router-dom"



function Router() {

  return (
    <div className="router">
    <Routes>
      <Route path="game" element={<Game/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>


    </div>
  );
};

export default Router;
