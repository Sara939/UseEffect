import './App.css';
import { useState } from 'react';
import About from './components/pages/About/About';
import Game from './components/pages/Game/Game';
import Home from './components/pages/Home/Home';
import Router from './components/pages/Router/Router';
import Desk from './components/pages/Desk/Desk';

let pagesArray= [1,2,3];

function App({}) {

    const [pageNumber, setPageNumber]= useState({});
  // const [pageName, setPageName]= useState("Home");
// function ChangePages(){
//     switch(pageNumber){
//       case 1:
//         return <Game/>
//       case 2:
//         return <Home/>
//       case 3:
//         return <About/>
//     }
//   }
  // function ChangePagesByName(){
  //   switch(pageName){
  //     case "Game":
  //       return <Game/>
  //     case "Home":
  //       return <Home/>
  //     case "About":
  //       return <About/>
  //   }
  // }

  return (
    <div className="App">
      {/* <ChangePages/> */}
      {/* <ChangePagesByName/> */}
      
    {/* <button onClick={()=>{setPageNumber(1)}}>1</button>
    <button onClick={()=>{setPageNumber(2)}}>2</button>
    <button onClick={()=>{setPageNumber(3)}}>3</button>

    <button onClick={()=>{setPageName("Game")}}>page Game</button>
    <button onClick={()=>{setPageName("Home")}}>page Home</button>
    <button onClick={()=>{setPageName("About")}}>page About</button>
     */}
     
     {/* {
      pagesArray.map(item=>{
        <button onClick={()=>{setPageNumber(item)}}>{item}</button>
      })
     } */}
     <Desk num={20}/>

     {/* <Router pageNumber={pageNumber}/> */}
     {/* {
      
      pagesArray.map((i)=>{return <button onClick={()=>{setPageNumber(i)}}>{i}</button>})
      
     } */}
     
    
     

    </div>
  );
}

export default App;
