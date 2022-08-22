import "./Desk.css";
import {useState, useEffect} from "react";

function Desk({num}) {
  const [legsNum, setLegsNum]= useState(num);
  const [tableColor, setTableColor]= useState("");
  useEffect(()=>{
    alert("loading")
  }, [])
  useEffect(()=>{
    console.log("updating legs num");
  }, [legsNum])
  useEffect(()=>{
    setTableColor("white");
  }, [])
  function ColorFromUser(e){
    setTableColor(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="desk">
      <h1>Desk</h1>
      <h1>{legsNum}</h1>
      <h1>{tableColor}</h1>
      <button onClick={()=>{setLegsNum(legsNum+1)}}>+</button>
      <button onClick={()=>{setLegsNum(legsNum-1)}}>-</button>
      <button onClick={()=>{setLegsNum(0)}}>0</button>
      <button onClick={()=>{setTableColor("blue")}}>blue</button>

      <input type="text"/>
      <button onClick={()=>{ColorFromUser()}}>Swich Color</button>





    </div>
  );
};

export default Desk;
